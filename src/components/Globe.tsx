"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Globe from "globe.gl";
import { nationalFlowers } from "../constants/nationalFlowers";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface NationalFlower {
  country: string;
  flower: string;
  lat: number;
  lng: number;
  description: string;
  image: string;
  selected?: boolean;
}

const InteractiveGlobe: React.FC = () => {
  const globeRef = useRef<HTMLDivElement | null>(null);
  const globeInstanceRef = useRef<any>(null);
  const [, setShowScrollButton] = useState(false);
  const [flowers, setFlowers] = useState<NationalFlower[]>(nationalFlowers);
  const [selectedFlower, setSelectedFlower] = useState<NationalFlower | null>(
    null
  );
  const [imageError, setImageError] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (!globeRef.current) return;

    globeInstanceRef.current = new Globe(globeRef.current)
      .globeImageUrl(
        "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      )
      .backgroundImageUrl("//unpkg.com/three-globe/example/img/night-sky.png")
      .backgroundColor("#1c3f60")
      .atmosphereColor("#1c3f60")
      .pointsData(flowers)
      .pointAltitude(0.07)
      .pointColor((d: NationalFlower) => (d.selected ? "#d9c498" : "#ffffff"))
      .pointRadius(0.5)
      .pointLabel((d: NationalFlower) => `${d.country}: ${d.flower}`)
      .onPointClick(handlePointClick);

    const globe = globeInstanceRef.current;

    // Configure globe settings
    globe.controls().enableZoom = true;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;
    globe.pointOfView({ lat: 30, lng: 0, altitude: 1.8 });
    globe.controls().minDistance = 200;
    globe.controls().maxDistance = 400;
    globe.camera().fov = 45;
    globe.camera().updateProjectionMatrix();
    globe.width(window.innerWidth);
    globe.height(window.innerHeight * 1.2);

    const handleResize = () => {
      globe.width(window.innerWidth);
      globe.height(window.innerHeight * 1.2);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup code remains the same
      window.removeEventListener("resize", handleResize);
      if (globe) {
        const scene = globe.scene();
        if (scene) {
          scene.traverse((object: THREE.Object3D) => {
            if ((object as any).material) {
              (object as any).material.dispose();
            }
            if ((object as any).geometry) {
              (object as any).geometry.dispose();
            }
          });
        }
        const renderer = globe.renderer();
        if (renderer) {
          renderer.dispose();
        }
        if (globeRef.current) {
          globeRef.current.innerHTML = "";
        }
      }
    };
  }, [flowers]);

  const handlePointClick = (point: NationalFlower) => {
    const updatedFlowers = flowers.map((flower) => ({
      ...flower,
      selected: flower.country === point.country,
    }));

    setFlowers(updatedFlowers);
    setSelectedFlower(point);
    setShowScrollButton(true);

    // Remove the automatic point of view change when clicking a point
    // This will maintain the current globe rotation
    // if (globeInstanceRef.current) {
    //   globeInstanceRef.current.pointOfView(
    //     {
    //       lat: point.lat,
    //       lng: point.lng,
    //       altitude: 1.5,
    //     },
    //     1000
    //   );
    // }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#1c3f60]">
      <div
        ref={globeRef}
        className="w-full h-[120vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      <AnimatePresence>
        {selectedFlower && (
          <Dialog
            open={!!selectedFlower}
            onClose={() => {
              setSelectedFlower(null);
              setImageError(false);
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="fixed inset-0 bg-black/50" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded-xl p-6 max-w-md mx-auto shadow-xl"
            >
              <div className="flex flex-col space-y-4">
                <Dialog.Title className="text-2xl font-bold text-gray-900">
                  {selectedFlower.flower}
                </Dialog.Title>

                <div className="relative h-48 rounded-lg overflow-hidden bg-gray-100">
                  {imageError ? (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      <span>Image not available</span>
                    </div>
                  ) : (
                    <img
                      src={selectedFlower.image}
                      alt={`${selectedFlower.flower} - National flower of ${selectedFlower.country}`}
                      className="object-cover w-full h-full"
                      onError={() => setImageError(true)}
                      loading="eager"
                      crossOrigin="anonymous"
                    />
                  )}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {selectedFlower.country}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {selectedFlower.description}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedFlower(null);
                    setImageError(false);
                  }}
                  className="mt-4 w-full bg-[#d9c498] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveGlobe;
