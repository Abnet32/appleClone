// API KEY = AIzaSyBwB7nn9pWQfAhzfmeVBaPs7ViaBnVXePI;
// API KEY = AIzaSyBlXJjXcUdwkvP4uNV2gf92MINZh3Q - 0o0;
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyBwB7nn9pWQfAhzfmeVBaPs7ViaBnVXePI;
// apple channel id = UCE_M8A5yxnLfW0KghEeajjw
// evengadi channel id = UCxA7AzkI2Sndf8S1G5rSkwQ

//   apple = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=relevance&key=AIzaSyBwB7nn9pWQfAhzfmeVBaPs7ViaBnVXePI'

// evangadi = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxA7AzkI2Sndf8S1G5rSkwQ&maxResults=8&order=relevance&key=AIzaSyBwB7nn9pWQfAhzfmeVBaPs7ViaBnVXePI'

import { useState, useEffect } from "react";
import './YouTubeVideos.css'

export default function YouTubeVideos() {
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=relevance&key=AIzaSyBwB7nn9pWQfAhzfmeVBaPs7ViaBnVXePI`
        );
        const data = await response.json();
        setYouTubeVideos(data.items || []);
      } catch (error) {
        console.error("Error fetching YouTube data:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Apple Videos
            </div>
          </div>

          {youTubeVideos.map((singleVideo, i) => {
            const vidId = singleVideo.id.videoId;
            const vidLink = `https://www.youtube.com/watch?v=${vidId}`;

            return (
              <div key={i} className="col-sm-12 col-md-6">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noreferrer">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt="thumbnail"
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                    <div className="publish">
                      {singleVideo.snippet.publishedAt.split("T")[0]}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

