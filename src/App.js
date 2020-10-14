import React, {useState, useEffect} from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import useVideos from './hooks/useVideos'

const App = () => {
   
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('cars');
  useEffect(()=> {
    setSelectedVideo(videos[0])
  }, [videos])
 
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList 
              videos={videos}
              onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

 
export default App;

//AIzaSyDBtRz7ws7uvZRctZJB8jUtQ26uoHcvE7w
