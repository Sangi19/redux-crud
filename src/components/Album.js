import { useState } from 'react';
import { useGetAlbumQuery } from '../app/services/jsonServerApi';

export default function Album() {

  const [page, setPage] = useState(1)
  const {
    data: albumdata = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetAlbumQuery(page);

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  console.log(albumdata)

  return (
    <div>

      <ul>
        {albumdata?.map((alb) => (
          <li key={alb.id}>
            {alb.id} - {alb.albums}
          </li>
        ))}
      </ul>
        <button 
          disabled={page <= 1} 
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </button>

        <button
          disabled={albumdata.length < 10}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
    
    </div>
  );
}