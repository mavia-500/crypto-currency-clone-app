// services/cryptoApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
   'x-rapidapi-key': '88cfe9a0a7msh6f7f988b15eac19p1c3442jsn31bc01899172',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
};
///fahad account crypto market prices
const baseUrl = "https://coinranking1.p.rapidapi.com";

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
      query: (count) => `/coins?limit=${count}`,
    }),
  }),
});

export const {useGetCryptosQuery} = cryptoApi;
