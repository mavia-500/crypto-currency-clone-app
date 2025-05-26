// services/cryptoApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// console.log(import.meta.env.VITE_CRYPTO_API_KEY)
const cryptoApiHeaders = {
  "x-rapidapi-key": import.meta.env.VITE_CRYPTO_API_KEY,
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};
///fahad account crypto market prices
const baseUrl =import.meta.env.VITE_CRYPTO_API_URL 
// "https://coinranking1.p.rapidapi.com";

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders }); // Changed 'header' to 'headers' for fetchBaseQuery

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,

    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", cryptoApiHeaders["x-rapidapi-key"]);
      headers.set("x-rapidapi-host", cryptoApiHeaders["x-rapidapi-host"]);
      return headers; // Always return the modified headers object.
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`,
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        `/coin/${coinId}/history?timePeriod=${timePeriod}`,
    }),
    getExchanges: builder.query({
      query: () => `/exchanges`,
    }),
  }),
});

export const {
  useGetCryptoHistoryQuery,
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery
} = cryptoApi;
