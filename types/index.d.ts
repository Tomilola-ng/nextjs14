declare type _user = {
  username: string;
  email: string;
  password: string;
  name: string;
  avatar: string;
};

declare type _product = {
  name: string;
  description: string;
  price: number;
  quantity: number;
  discountPercentage: number;
  images: _image[];
  categories: _category[];
  inStock: boolean;
};

declare type _category = {
  name: string;
  description: string;
  products: string[];
};

declare type _image = {
  file: string;
  alt?: string;
};
