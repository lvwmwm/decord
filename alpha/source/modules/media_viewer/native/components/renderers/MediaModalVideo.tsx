// Module ID: 14752
// Function ID: 14753
// Name: MediaModalVideo
// Dependencies: [19, 21, 14753, 14754, 8864, 14755, 2]

// Module 14752 (MediaModalVideo)
import common_Video from "common/Video" /* 8864 */;
import useMediaLoadingDefault from "useMediaLoading" /* 14753 */;
import MediaModalSpoilerOverlayDefault from "MediaModalSpoilerOverlay" /* 14755 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let Fragment = Fragment_mod;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const memoResult = react.memo(function MediaModalVideo(source) {
  let controls;
  let handleError;
  let handleLoad;
  let handleLoadStart;
  let hasError;
  let index;
  let isLoadingVisible;
  let muted;
  let onError;
  let onLoad;
  let onLoadingVisible;
  let paused;
  let tmp6Result;
  source = source.source;
  const style = source.style;
  let uri = source.videoURI;
  ({ controls, index, muted, onError, onLoad, onLoadingVisible, paused } = source);
  if (uri == null) {
    uri = source.uri;
  }
  const items = [uri, , ];
  ({ width: arr[1], height: arr[2] } = source);
  ({ hasError, isLoadingVisible, handleLoadStart, handleLoad, handleError } = useMediaLoadingDefault({ onError, onLoad, onLoadingVisible }));
  useMediaLoadingDefault({ onError, onLoad, onLoadingVisible });
  const tmp4 = react;
  if (hasError) {
    const obj2 = { style, status: "error" };
    tmp6Result = React3(tmp(14754), obj2);
  } else {
    const Fragment = tmp4.Fragment;
    const obj = { controls, muted, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, paused, source: tmp5, style };
    const items1 = [React3(common_Video.VideoComponent, obj), , ];
    let tmp7Result = null;
    const tmp6 = hasOwnProperty;
    if (isLoadingVisible) {
      const obj3 = { style, status: "loading" };
      tmp7Result = tmp7(tmp(14754), obj3);
    }
    const obj4 = { children: items1 };
    items1[1] = tmp7Result;
    const obj5 = { style, index, source };
    items1[2] = React3(MediaModalSpoilerOverlayDefault, obj5);
    tmp6Result = tmp6(Fragment, obj4);
  }
  return tmp6Result;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalVideo.tsx");

export default memoResult;
