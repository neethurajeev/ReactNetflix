import './App.css';
import Raw from './Raw';
import requests from './request';
import request from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Nav/>
     
     <Raw title="Trending Now"
     fetchUrl={request.fetchTrending}
     />
     <Raw title="Top Rated"
     fetchUrl={request.fetchTopRated}
     />
      <Raw title="Horror Movies"
     fetchUrl={request.fetchHorrorMovies}
     />
      <Raw title="Comedy Movies"
     fetchUrl={request.fetchComedyMovies}
     />
      <Raw title="Romance Movies"
     fetchUrl={request.fetchRomanceMovies}
     />
      <Raw title="Documentaries"
     fetchUrl={request.fetchDocumentaries}
     />
      <Raw title="Action Movies"
     fetchUrl={request.fetchActionMovies}
     />
    <Raw
     title="NETFLIX ORIGINALS"
     fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow={true}/>
    
    </div>
  );
}

export default App;
