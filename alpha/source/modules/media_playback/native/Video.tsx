// Module ID: 8789
// Function ID: 8790
// Name: media_playback/Video
// Dependencies: [109, 19, 21, 558, 576, 8790, 8792, 8794, 2]

// Module 8789 (media_playback/Video)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import MediaPlaybackExperiment from "MediaPlaybackExperiment" /* 8790 */;
import NativeVideo from "NativeVideo" /* 8792 */;
import TextTrackType from "TextTrackType" /* 8794 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["ref"];
const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function Video(ref) {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(11);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_2);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmpResult = MediaPlaybackExperiment;
  if (tmpResult.isNativeMediaPlaybackEnabled()) {
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmpResult3 = NativeVideo;
      cResult[3] = tmpResult3;
    }
    if (cResult[4] === tmp4) {
      let tmp21;
      if (cResult[5] === tmp5) {
        tmp21 = cResult[6];
      }
      return tmp21;
    }
    const merged = Object.assign(tmp4);
    const tmp26 = <_default2 ref={tmp5} />;
    cResult[4] = tmp4;
    cResult[5] = tmp5;
    cResult[6] = tmp26;
    tmp21 = tmp26;
  } else {
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const tmpResult4 = TextTrackType;
      cResult[7] = tmpResult4;
    }
    if (cResult[8] === tmp4) {
      let tmp12;
      if (cResult[9] === tmp5) {
        tmp12 = cResult[10];
      }
      return tmp12;
    }
    const merged1 = Object.assign(tmp4);
    const tmp17 = <_default ref={tmp5} />;
    cResult[8] = tmp4;
    cResult[9] = tmp5;
    cResult[10] = tmp17;
    tmp12 = tmp17;
  }
}) : (function Video(ref) {
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
}));
const result = size.fileFinishedImporting("modules/media_playback/native/Video.tsx");

export default memoResult;
