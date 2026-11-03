// Module ID: 8998
// Function ID: 8999
// Name: media_playback/Video
// Dependencies: [19, 21, 8999, 9001, 9003, 2]

// Module 8998 (media_playback/Video)
import Fragment from "Fragment" /* 21 */;
import MediaPlaybackExperiment from "MediaPlaybackExperiment" /* 8999 */;
import NativeVideo from "NativeVideo" /* 9001 */;
import TextTrackType from "TextTrackType" /* 9003 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function Video(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = MediaPlaybackExperiment;
  if (obj.isNativeMediaPlaybackEnabled()) {
    NativeVideo.default;
    const merged1 = Object.assign(merged);
    return <_default2 ref={arg0.ref} />;
  } else {
    TextTrackType.default;
    const merged2 = Object.assign(merged);
    return <_default ref={arg0.ref} />;
  }
});
const result = size.fileFinishedImporting("modules/media_playback/native/Video.tsx");

export default memoResult;
