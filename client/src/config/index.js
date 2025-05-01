export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "FruitsVegtables", label: "Fruits & Vegtables" },
      { id: "Snacks", label: "Snacks" },
      { id: "BeautyPersonalCare", label: "Beauty & Personal Care" },
      { id: "Electronics", label: "Electronics" },
      { id: "footwear", label: "Footwear" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "organic", label: "Organic" },
      { id: "beauty", label: "Beauty" },
      { id: "redmi", label: "Redmi" },
      { id: "britannia", label: "Britannia" },
      { id: "butterfly", label: "Butterfly" },
      { id: "puma", label: "Puma" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "FruitsVegtables",
    label: "Fruits & Vegtables",
    path: "/shop/listing",
  },
  {
    id: "Snacks",
    label: "Snacks",
    path: "/shop/listing",
  },
  {
    id: "BeautyPersonalCare",
    label: "Beauty & Personal Care",
    path: "/shop/listing",
  },
  {
    id: "footwear",
    label: "Footwear",
    path: "/shop/listing",
  },
  {
    id: "Electronics",
    label: "Electronics",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  FruitsVegtables: "Fruits&Vegtables",
  Snacks: "Snacks",
  BeautyPersonalCare: "Beauty&PersonalCare",
  Electronics: "Electronics",
  footwear: "Footwear",
};

export const brandOptionsMap = {
  organic: "Organic",
  beauty: "Beauty",
  redmi: "Redmi",
  britannia: "Britannia",
  butterfly: "Butterfly",
  puma: "Puma",
};

export const filterOptions = {
  category: [
    { id: "FruitsVegtables", label: "Fruits & Vegtables" },
    { id: "Snacks", label: "Snacks" },
    { id: "BeautyPersonalCare", label: "Beauty & PersonalCare" },
    { id: "Electronics", label: "Electronics" },
    { id: "footwear", label: "Footwear" },
  ],
  brand: [
    { id: "organic", label: "Organic" },
    { id: "beauty", label: "Beauty" },
    { id: "redmi", label: "Redmi" },
    { id: "britannia", label: "Britannia" },
    { id: "butterfly", label: "Butterfly" },
    { id: "puma", label: "Puma" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
