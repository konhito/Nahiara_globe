interface NationalFlower {
  country: string;
  flower: string;
  lat: number;
  lng: number;
  description: string;
  image: string;
}

export const nationalFlowers: NationalFlower[] = [
  {
    country: "India",
    flower: "Lotus",
    lat: 20.5937,
    lng: 78.9629,
    description: "Sacred lotus symbolizes purity, prosperity and enlightenment",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/Sacred_lotus_Nelumbo_nucifera.jpg",
  },
  {
    country: "Japan",
    flower: "Cherry Blossom",
    lat: 36.2048,
    lng: 138.2529,
    description: "Sakura represents the beauty and transience of life",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Sakura_in_full_blossom.jpg",
  },
  {
    country: "United Kingdom",
    flower: "Tudor Rose",
    lat: 55.3781,
    lng: -3.436,
    description: "Symbolizes the union of the House of Lancaster and York",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Tudor_Rose.svg",
  },
  {
    country: "Netherlands",
    flower: "Tulip",
    lat: 52.1326,
    lng: 5.2913,
    description: "Represents the Golden Age of Dutch history",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Red_tulip.jpg",
  },
  {
    country: "France",
    flower: "Iris",
    lat: 46.2276,
    lng: 2.2137,
    description: "Represents perfection, light and life",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Iris_germanica_%28Purple_bearded_Iris%29%2C_Wakehurst_Place%2C_UK_-_Diliff.jpg",
  },
  {
    country: "China",
    flower: "Plum Blossom",
    lat: 35.8617,
    lng: 104.1954,
    description: "Symbolizes resilience and perseverance",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/Plum_Blossom_on_tree.jpg",
  },
  {
    country: "South Korea",
    flower: "Hibiscus Syriacus",
    lat: 35.9078,
    lng: 127.7669,
    description: "Known as Mugunghwa, represents immortality",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Korean_national_flower_Hibiscus_syriacus.jpg",
  },
  {
    country: "Australia",
    flower: "Golden Wattle",
    lat: -25.2744,
    lng: 133.7751,
    description: "Symbolizes unity and resilience",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Acacia_pycnantha_golden_wattle.jpg",
  },
  {
    country: "Canada",
    flower: "Maple Leaf",
    lat: 56.1304,
    lng: -106.3468,
    description: "Represents Canadian heritage and natural beauty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Maple_leaf_--_Acer_saccharum.jpg",
  },
  {
    country: "Mexico",
    flower: "Dahlia",
    lat: 23.6345,
    lng: -102.5528,
    description: "Represents dignity and grace",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Dahlia_red_and_white_flower.jpg",
  },
  {
    country: "Brazil",
    flower: "Cattleya Orchid",
    lat: -14.235,
    lng: -51.9253,
    description: "Known for its exotic beauty and diversity",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/Cattleya_labiata_Orchi_1310.jpg",
  },
  {
    country: "South Africa",
    flower: "King Protea",
    lat: -30.5595,
    lng: 22.9375,
    description: "Symbolizes diversity and courage",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Protea_cynaroides_3.jpg",
  },
  {
    country: "Thailand",
    flower: "Ratchaphruek",
    lat: 15.87,
    lng: 100.9925,
    description: "Golden shower tree representing royalty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Cassia_fistula_flowers.jpg",
  },
  {
    country: "Iran",
    flower: "Red Rose",
    lat: 32.4279,
    lng: 53.688,
    description: "Symbol of love and spiritual awakening",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Small_Red_Rose.JPG",
  },
  {
    country: "Egypt",
    flower: "Blue Lotus",
    lat: 26.8206,
    lng: 30.8025,
    description: "Ancient symbol of rebirth and the sun",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/Nymphaea_caerulea.jpg",
  },
  {
    country: "Greece",
    flower: "Violet",
    lat: 39.0742,
    lng: 21.8243,
    description: "Symbol of Athens and ancient heritage",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/Viola_odorata_-_Sweet_Violet.jpg",
  },
  {
    country: "Spain",
    flower: "Red Carnation",
    lat: 40.4637,
    lng: -3.7492,
    description: "Represents passion and love",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Dianthus_caryophyllus_-_Clavel_-_Carnation_-_01.jpg",
  },
  {
    country: "New Zealand",
    flower: "Kowhai",
    lat: -40.9006,
    lng: 174.886,
    description: "Native yellow flower symbolizing new life",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/Sophora_microphylla_flowers.jpg",
  },
  {
    country: "Switzerland",
    flower: "Edelweiss",
    lat: 46.8182,
    lng: 8.2275,
    description: "Symbol of nobility and purity",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Edelweiss_3.jpg",
  },
  {
    country: "Ukraine",
    flower: "Sunflower",
    lat: 48.3794,
    lng: 31.1656,
    description: "Represents warmth, power and resistance",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg",
  },
];

// Helper function to get color based on continent
export const getFlowerColor = (country: string): string => {
  const continents = {
    asia: "#FF6B6B", // Warm Red
    europe: "#4ECDC4", // Teal
    americas: "#45B7D1", // Light Blue
    oceania: "#96CEB4", // Sage Green
    africa: "#FFBE0B", // Golden Yellow
  };

  // Simplified continent assignment
  if (
    ["Japan", "China", "India", "Thailand", "Iran", "South Korea"].includes(
      country
    )
  )
    return continents.asia;
  if (
    [
      "UK",
      "Netherlands",
      "France",
      "Greece",
      "Spain",
      "Switzerland",
      "Ukraine",
    ].includes(country)
  )
    return continents.europe;
  if (["Canada", "Mexico", "Brazil"].includes(country))
    return continents.americas;
  if (["Australia", "New Zealand"].includes(country)) return continents.oceania;
  if (["South Africa", "Egypt"].includes(country)) return continents.africa;

  return "#1c3f5e"; // Default color
};
