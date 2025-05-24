// services/cryptoApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-key": "",
  "x-rapidapi-host": "",
};
///fahad account crypto market prices
const baseUrl = "https://crypto-market-prices.p.rapidapi.com";

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders }); // Changed 'header' to 'headers' for fetchBaseQuery

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl:baseUrl,

    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key",cryptoApiHeaders["x-rapidapi-key"]);
      headers.set("x-rapidapi-host", cryptoApiHeaders["x-rapidapi-host"]);
      return headers; // Always return the modified headers object.
    }, }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => "/exchanges",
    }),
  }),
});

export const {useGetCryptosQuery} = cryptoApi;
