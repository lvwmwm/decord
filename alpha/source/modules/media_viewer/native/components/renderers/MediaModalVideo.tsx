// Module ID: 14790
// Function ID: 14791
// Name: MediaModalVideo
// Dependencies: [19, 21, 8847, 14791, 14792, 8873, 14793, 2]

// Module 14790 (MediaModalVideo)
import MediaViewerVideoPerfExperiment from "MediaViewerVideoPerfExperiment" /* 8847 */;
import useMediaLoadingDefault from "useMediaLoading" /* 14791 */;
import MediaModalSpoilerOverlayDefault from "MediaModalSpoilerOverlay" /* 14793 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const common_Video = tmp(8873);
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
  let tmp8Result;
  source = source.source;
  const style = source.style;
  let uri = source.videoURI;
  ({ controls, index, muted, onError, onLoad, onLoadingVisible, paused } = source);
  if (uri == null) {
    uri = source.uri;
  }
  const obj = MediaViewerVideoPerfExperiment;
  const isMediaViewerVideoPerfEnabled = obj.useIsMediaViewerVideoPerfEnabled();
  const items = [uri, , ];
  ({ width: arr[1], height: arr[2] } = source);
  ({ hasError, isLoadingVisible, handleLoadStart, handleLoad, handleError } = useMediaLoadingDefault({ onError, onLoad, onLoadingVisible }));
  useMediaLoadingDefault({ onError, onLoad, onLoadingVisible });
  const tmp6 = react;
  if (hasError) {
    const obj2 = { style, status: "error" };
    tmp8Result = React3(tmp4(14792), obj2);
  } else {
    const Fragment = tmp6.Fragment;
    const obj3 = { controls, muted, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, paused, source: tmp7, style, useTextureView: !isMediaViewerVideoPerfEnabled };
    const items1 = [React3(common_Video.VideoComponent, obj3), , ];
    let tmp9Result = null;
    const tmp8 = hasOwnProperty;
    if (isLoadingVisible) {
      const obj4 = { style, status: "loading" };
      tmp9Result = tmp9(tmp4(14792), obj4);
    }
    const obj5 = { children: items1 };
    items1[1] = tmp9Result;
    const obj6 = { style, index, source };
    items1[2] = React3(MediaModalSpoilerOverlayDefault, obj6);
    tmp8Result = tmp8(Fragment, obj5);
  }
  return tmp8Result;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalVideo.tsx");

export default memoResult;
