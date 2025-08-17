const BASE_URL = "http://localhost:4000/api";

export const apiLinks = {
  getAllProduct: `${BASE_URL}/product/getAllProduct`,
  deleteProduct: (id) => `${BASE_URL}/product/deleteProductById/${id}`,
  userLogin: `${BASE_URL}/auth/login`,
  createProduct: `${BASE_URL}/product/createProduct`,
  getSingleProduct: (id) => {
    return `${BASE_URL}/product/getProductById/${id}`;
  }, // yedi maile small bracker use gareko bhaye chai teti khera chai return garnu pardaina thiyo
  productUpdate: (id) => `${BASE_URL}/product/updateProductById/${id}`,
};
