import Spinner from 'react-bootstrap/Spinner';

export const Loader = () =>{
  return (
    <Spinner className='mt-4' animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

