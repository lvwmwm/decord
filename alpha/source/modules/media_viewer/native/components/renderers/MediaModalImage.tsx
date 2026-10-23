// Module ID: 14208
// Function ID: 14209
// Name: MediaModalImage
// Dependencies: [19, 21, 1384, 14209, 558, 576, 14205, 14206, 5667, 14207, 2]

// Module 14208 (MediaModalImage)
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import FastImageDefault from "FastImage" /* 5667 */;
import useMediaLoadingDefault from "useMediaLoading" /* 14205 */;
import MediaModalLoadingOverlayDefault from "MediaModalLoadingOverlay" /* 14206 */;
import MediaModalSpoilerOverlayDefault from "MediaModalSpoilerOverlay" /* 14207 */;
import AndroidMediaViewerFullResolutionExperiment from "AndroidMediaViewerFullResolutionExperiment" /* 14209 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let Fragment = Fragment_mod;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaModalImage(arg0) {
  let description;
  let fadeDuration;
  let handleError;
  let handleLoad;
  let handleLoadStart;
  let handleProgress;
  let height;
  let index;
  let isLoadingVisible;
  let items;
  let onError;
  let onLoad;
  let onLoadingVisible;
  let pointerEvents;
  let progress;
  let source;
  let style;
  const obj = react2;
  const cResult = obj.c(37);
  ({ fadeDuration, index, onError, onLoad, onLoadingVisible, pointerEvents, source, style } = arg0);
  if (cResult[0] === onError) {
    if (cResult[1] === onLoad) {
      let tmp4;
      let tmp7;
      let tmp8;
      if (cResult[2] === onLoadingVisible) {
        tmp4 = cResult[3];
      }
      const tmp6 = useMediaLoadingDefault(tmp4);
      ({ isLoadingVisible, progress, handleLoadStart, handleLoad, handleError, handleProgress } = tmp6);
      const hasError = tmp6.hasError;
      if (cResult[4] !== handleProgress) {
        const fn = function y(nativeEvent) {
          nativeEvent = nativeEvent.nativeEvent;
          return handleProgress(nativeEvent.loaded, nativeEvent.total);
        };
        cResult[4] = handleProgress;
        cResult[5] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] !== source.uri) {
        const obj2 = { uri: source.uri };
        cResult[6] = source.uri;
        cResult[7] = obj2;
        tmp8 = obj2;
      } else {
        tmp8 = cResult[7];
      }
      if (hasError) {
        let tmp25;
        if (cResult[8] !== style) {
          const obj3 = { style, status: "error" };
          const tmp27 = React3(MediaModalLoadingOverlayDefault, obj3);
          cResult[8] = style;
          cResult[9] = tmp27;
          tmp25 = tmp27;
        } else {
          tmp25 = cResult[9];
        }
        return tmp25;
      } else {
        let tmp9;
        ({ description, height } = source);
        if (cResult[10] !== source) {
          let str;
          const tmpResult = PlatformUtils;
          if (tmpResult.isAndroid()) {
            if (0 !== source.width) {
              if (0 !== source.height) {
                if (source.width > 2048) {
                  if (source.width * source.height <= 16777216) {
                    const _Math = Math;
                    const _Math2 = Math;
                    const bound = Math.max(source.width, source.height);
                    if (bound / Math.min(source.width, source.height) > 2) {
                      const tmpResult2 = AndroidMediaViewerFullResolutionExperiment;
                      if (tmpResult2.getAndroidMediaViewerFullResolutionEnabled("MediaModal")) {
                        str = "none";
                      }
                    }
                  }
                }
              }
            }
          }
          cResult[10] = source;
          cResult[11] = str;
          tmp9 = str;
        } else {
          tmp9 = cResult[11];
        }
        if (cResult[12] === fadeDuration) {
          if (cResult[13] === handleError) {
            if (cResult[14] === tmp7) {
              if (cResult[15] === handleLoad) {
                if (cResult[16] === handleLoadStart) {
                  if (cResult[17] === tmp8) {
                    if (cResult[18] === pointerEvents) {
                      if (cResult[19] === source.description) {
                        if (cResult[20] === source.height) {
                          if (cResult[21] === source.width) {
                            if (cResult[22] === style) {
                              let tmp12;
                              if (cResult[23] === tmp9) {
                                tmp12 = cResult[24];
                              }
                              if (cResult[25] === isLoadingVisible) {
                                if (cResult[26] === progress) {
                                  let tmp15;
                                  if (cResult[27] === style) {
                                    tmp15 = cResult[28];
                                  }
                                  if (cResult[29] === index) {
                                    if (cResult[30] === source) {
                                      let tmp18;
                                      if (cResult[31] === style) {
                                        tmp18 = cResult[32];
                                      }
                                      if (cResult[33] === tmp12) {
                                        if (cResult[34] === tmp15) {
                                          let tmp21;
                                          if (cResult[35] === tmp18) {
                                            tmp21 = cResult[36];
                                          }
                                          return tmp21;
                                        }
                                      }
                                      const obj4 = { children: items };
                                      items = [tmp12, tmp15, tmp18];
                                      const tmp24 = hasOwnProperty(react.Fragment, obj4);
                                      cResult[33] = tmp12;
                                      cResult[34] = tmp15;
                                      cResult[35] = tmp18;
                                      cResult[36] = tmp24;
                                      tmp21 = tmp24;
                                    }
                                  }
                                  const obj5 = { style, index, source };
                                  const tmp20 = React3(MediaModalSpoilerOverlayDefault, obj5);
                                  cResult[29] = index;
                                  cResult[30] = source;
                                  cResult[31] = style;
                                  cResult[32] = tmp20;
                                  tmp18 = tmp20;
                                }
                              }
                              let tmp16 = null;
                              if (isLoadingVisible) {
                                const obj6 = { style, status: "loading", progress };
                                tmp16 = React3(tmp5(14206), obj6);
                              }
                              cResult[25] = isLoadingVisible;
                              cResult[26] = progress;
                              cResult[27] = style;
                              cResult[28] = tmp16;
                              tmp15 = tmp16;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        size = { accessibilityRole: "image", accessibilityLabel: description, fadeDuration, height, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: tmp7, pointerEvents, resizeMethod: tmp9, source: tmp8, style, width: source.width };
        const tmp14 = React3(FastImageDefault, size);
        cResult[12] = fadeDuration;
        cResult[13] = handleError;
        cResult[14] = tmp7;
        cResult[15] = handleLoad;
        cResult[16] = handleLoadStart;
        cResult[17] = tmp8;
        cResult[18] = pointerEvents;
        cResult[19] = source.description;
        cResult[20] = source.height;
        cResult[21] = source.width;
        cResult[22] = style;
        cResult[23] = tmp9;
        cResult[24] = tmp14;
        tmp12 = tmp14;
      }
    }
  }
  const obj7 = { onError, onLoad, onLoadingVisible };
  cResult[0] = onError;
  cResult[1] = onLoad;
  cResult[2] = onLoadingVisible;
  cResult[3] = obj7;
  tmp4 = obj7;
}) : (function MediaModalImage(source) {
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
    tmp7Result = React3(tmp(14206), obj);
  } else {
    const Fragment = tmp4.Fragment;
    size = { accessibilityRole: "image", accessibilityLabel: source.description, fadeDuration, height: source.height, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: callback, pointerEvents, resizeMethod: str, source: tmp6, style, width: source.width };
    str = undefined;
    const tmpResult = FastImageDefault;
    const obj2 = PlatformUtils;
    const tmp10 = require;
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
                const tmp10Result = tmp10(14209);
                if (tmp10Result.getAndroidMediaViewerFullResolutionEnabled("MediaModal")) {
                  str = "none";
                }
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
      tmp8Result = tmp8(tmp(14206), obj3);
    }
    const obj4 = { children: items1 };
    items1[1] = tmp8Result;
    const obj5 = { style, index, source };
    items1[2] = React3(MediaModalSpoilerOverlayDefault, obj5);
    tmp7Result = tmp7(Fragment, obj4);
  }
  return tmp7Result;
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalImage.tsx");

export default memoResult;
