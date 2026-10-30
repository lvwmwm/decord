// Module ID: 14756
// Function ID: 14757
// Name: MediaModalImage
// Dependencies: [19, 21, 1376, 14753, 14754, 5712, 14755, 2]

// Module 14756 (MediaModalImage)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import FastImageDefault from "FastImage" /* 5712 */;
import useMediaLoadingDefault from "useMediaLoading" /* 14753 */;
import MediaModalSpoilerOverlayDefault from "MediaModalSpoilerOverlay" /* 14755 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

let nativeEvent;

let closure_4;
let hasOwnProperty;
let Fragment = Fragment_mod;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const memoResult = react.memo(function MediaModalImage(source) {
  let fadeDuration;
  let handleError;
  let handleLoad;
  let handleLoadStart;
  let hasError;
  let index;
  let isLoadingVisible;
  let onError;
  let onLoad;
  let onLoadingVisible;
  let pointerEvents;
  let progress;
  let str;
  let tmp7Result;
  source = source.source;
  const style = source.style;
  ({ fadeDuration, index, onError, onLoad, onLoadingVisible, pointerEvents } = source);
  const tmp3 = useMediaLoadingDefault({ onError, onLoad, onLoadingVisible });
  const handleProgress = tmp3.handleProgress;
  const items = [handleProgress];
  ({ hasError, isLoadingVisible, progress, handleLoadStart, handleLoad, handleError } = tmp3);
  [][0] = source.uri;
  const callback = react.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    return handleProgress(nativeEvent.loaded, nativeEvent.total);
  }, items);
  const tmp4 = react;
  if (hasError) {
    const obj = { style, status: "error" };
    tmp7Result = React3(tmp(14754), obj);
  } else {
    const Fragment = tmp4.Fragment;
    size = { accessibilityRole: "image", accessibilityLabel: source.description, fadeDuration, height: source.height, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: callback, pointerEvents, resizeMethod: str, source: tmp6, style, width: source.width };
    str = undefined;
    const tmpResult = FastImageDefault;
    const obj2 = PlatformUtils;
    const tmp7 = hasOwnProperty;
    if (obj2.isAndroid()) {
      if (0 !== source.width) {
        if (0 !== source.height) {
          if (source.width > 2048) {
            if (source.width * source.height <= 16777216) {
              const _Math = Math;
              const _Math2 = Math;
              const bound = Math.max(source.width, source.height);
              if (bound / Math.min(source.width, source.height) > 2) {
                str = "none";
              }
            }
          }
        }
      }
    }
    const items1 = [React3(tmpResult, size), , ];
    let tmp8Result = null;
    if (isLoadingVisible) {
      const obj3 = { style, status: "loading", progress };
      tmp8Result = tmp8(tmp(14754), obj3);
    }
    const obj4 = { children: items1 };
    items1[1] = tmp8Result;
    const obj5 = { style, index, source };
    items1[2] = React3(MediaModalSpoilerOverlayDefault, obj5);
    tmp7Result = tmp7(Fragment, obj4);
  }
  return tmp7Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalImage.tsx");

export default memoResult;
