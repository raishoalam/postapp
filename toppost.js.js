import ReactPlayer from 'react-player'

import {
  VideoPlayerContainer,
  VideoTitle,
  VideoStats,
  HorizontalLine,
} from './styledComponents'

const videoUrl =
  'https://img.freepik.com/free-photo/front-view-young-emotional-smiling-man-suit-pointing-up-isolated-dark-wall_140725-97098.jpg'

const VideoPlayer = () => (
  <VideoPlayerContainer>
    <ReactPlayer
      url={videoUrl}
      width="50%"
      border-radius="5%"
      className="video-player"
    />
    <VideoTitle>John</VideoTitle>
    <VideoStats>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's
    </VideoStats>
    <HorizontalLine />
  </VideoPlayerContainer>
)

export default VideoPlayer
