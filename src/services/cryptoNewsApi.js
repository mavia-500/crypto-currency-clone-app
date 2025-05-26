import { createApi ,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const newsHeaders= {
    'x-rapidapi-key': import.meta.env.VITE_NEWS_API_KEY,
    'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
  }

  const baseUrl=import.meta.env.VITE_NEWS_API_URL;

  export const newsApi=createApi({
    reducerPath:"newsApi",
    baseQuery:fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders:(headers)=>{
            headers.set('x-rapidapi-key',newsHeaders["x-rapidapi-key"]);
            headers.set('x-rapidapi-host',newsHeaders['x-rapidapi-host']);
            return headers
        }
    }),

    endpoints:(builder)=>({
        getNews:builder.query({
            query:(count)=>(`/top-headlines`)
        })
    })
  });

  export const {useGetNewsQuery}= newsApi