import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getAlbum: builder.query({
      query: (page = 1) => `albums?_page=${page}&_limit=10`,
    }),
  }),
});

export const { useGetAlbumQuery } = jsonServerApi;