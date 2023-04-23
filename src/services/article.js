import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;


const options = {
    method: 'POST',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '06e31348a8mshce951971ae49bd7p1c9f53jsnf478c2b5f0e8',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    },
    data: '{"text":"article of markdown text"}'
  };


export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
           
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi