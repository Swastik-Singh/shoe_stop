export const PRODUCTS_DATA = [
  {
    id: "101",
    name: "High Speed Sneakers",
    brandName: "Balenciaga",
    images: [
      require("../assets/Shoe1.jpg"),
      require("../assets/Shoe2.jpg"),
      require("../assets/Shoe3.jpg"),
    ],
    price: 750,
    size: 32,
    color: "orange",
    category: "Flip Flops",
  },
  {
    id: "102",
    name: "Yago",
    brandName: "Tom Ford",
    images: [
      "https://res.cloudinary.com/atoms-shoes/image/upload/c_scale,w_1400,q_auto,f_auto/v1622733115/products/shoes/model000/black-white_profile",
      "https://res.cloudinary.com/atoms-shoes/image/upload/c_scale,w_1400,q_auto,f_auto/v1622733115/products/shoes/model000/black-white_threequarters",
    ],
    price: 965,
    size: 34,
    color: "black",
    category: "Sneakers",
  },
  {
    id: "103",
    name: "Geometric Styled 003",
    brandName: "Neil Barret",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqijfKr7FaxA1m2hbYHLvFqsbwzUPGazBhHA17AhJFAfzvlvEInkuhDVS4b6yWesTReM&usqp=CAU",
    ],
    price: 295,
    size: 36,
    color: "black",
    category: "Lace-Up Shoes",
  },
  {
    id: "104",
    name: "Massive Geometric",
    brandName: "Emporio Armani",
    images: [
      "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    price: 110,
    size: 38,
    color: "green",
    category: "Show Accessories",
  },
  {
    id: "105",
    name: "Neomorphic TRZ",
    brandName: "Adidas",
    images: [
      "https://cdn.vox-cdn.com/thumbor/B6shKUzpK_QUKonEaCRS78Z9NP4=/0x0:1074x820/1200x800/filters:focal(452x325:622x495)/cdn.vox-cdn.com/uploads/chorus_image/image/65283012/Screen_Shot_2019_09_19_at_3.16.04_PM.0.png",
      "https://images.complex.com/complex/images/c_crop,h_605,w_1146,x_6,y_85/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/nmgm5qjskup56bbhglv4/amazon-allbirds",
    ],
    price: 550,
    size: 40,
    color: "grey",
    category: "Show Accessories",
  },
];

export const CATGEORY_FILTERS = [
  "Flip Flops",
  "Sneakers",
  "Lace-Up Shoes",
  "Show Accessories",
];

export const SIZE_RANGE = [35, 49];

export const SORT_FIELDS = [
  { label: "Size", value: "size" },
  { label: "Price", value: "price" },
  { label: "Category", value: "category" },
];
