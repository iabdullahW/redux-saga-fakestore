// src/sagas.js
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { fetchProducts, setProducts } from "./features/productsSlice";

function fetchProductData() {
  return axios.get("https://fakestoreapi.com/products");
}

function* workFetchProducts() {
  try {
    const response = yield call(fetchProductData);
    yield put(setProducts(response.data));
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
}

function* productSaga() {
  yield takeEvery(fetchProducts.type, workFetchProducts);
}

export default productSaga;
