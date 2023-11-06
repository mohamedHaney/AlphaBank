import "./loading.css"
import HourGlass from "./emoji-computer-icons-hourglass-clock-watch-emojipedia-hourglass-sand-timer-yellow-png-clipart-thumbnail-removebg-preview.png"
const Loading = () => {
  return (
  <div class="loading-main">
    <img src={HourGlass} alt=""/>
    <span>Hold On!</span>
    <p>You are being redirected to the TPP page it may take a few seconds</p>
  </div>
  );
}
export default Loading;