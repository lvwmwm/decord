// Module ID: 13025
// Function ID: 13026
// Name: MediaModalImage
// Dependencies: [19, 17, 1085, 21, 1382, 13026, 558, 576, 13022, 13023, 6163, 13024, 2]

// Module 13025 (MediaModalImage)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import FastImageDefault from "FastImage" /* 6163 */;
import useMediaLoadingDefault from "useMediaLoading" /* 13022 */;
import MediaModalLoadingOverlayDefault from "MediaModalLoadingOverlay" /* 13023 */;
import MediaModalSpoilerOverlayDefault from "MediaModalSpoilerOverlay" /* 13024 */;
import AndroidMediaViewerFullResolutionExperiment from "AndroidMediaViewerFullResolutionExperiment" /* 13026 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment_mod from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const Image = react_native.Image;
({ Base64JPEGPrefix: closure_4, Base64GIFPrefix: hasOwnProperty } = Constants);
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaModalImage(arg0) {
  let fadeDuration;
  let handleError;
  let handleLoad;
  let handleLoadStart;
  let handleProgress;
  let index;
  let isLoadingVisible;
  let items;
  let onError;
  let onLoad;
  let onLoadingVisible;
  let pointerEvents;
  let progress;
  let source;
  let str2;
  let style;
  const obj = react2;
  const cResult = obj.c(35);
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
        const fn = function x(nativeEvent) {
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
        let tmp30;
        if (cResult[8] !== style) {
          const obj3 = { style, status: "error" };
          const tmp32 = metroRequire(MediaModalLoadingOverlayDefault, obj3);
          cResult[8] = style;
          cResult[9] = tmp32;
          tmp30 = tmp32;
        } else {
          tmp30 = cResult[9];
        }
        return tmp30;
      } else {
        let tmp9;
        let tmp14Result;
        if (cResult[10] !== source.uri) {
          const uri = source.uri;
          let startsWithResult = uri.startsWith("assets-library://");
          if (!startsWithResult) {
            const uri2 = source.uri;
            startsWithResult = uri2.startsWith(React3);
          }
          if (!startsWithResult) {
            const uri3 = source.uri;
            startsWithResult = uri3.startsWith(hasOwnProperty);
          }
          cResult[10] = source.uri;
          cResult[11] = startsWithResult;
          tmp9 = startsWithResult;
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
                      if (cResult[19] === source) {
                        if (cResult[20] === style) {
                          let tmp13;
                          if (cResult[21] === tmp9) {
                            tmp13 = cResult[22];
                          }
                          if (cResult[23] === isLoadingVisible) {
                            if (cResult[24] === progress) {
                              let tmp20;
                              if (cResult[25] === style) {
                                tmp20 = cResult[26];
                              }
                              if (cResult[27] === index) {
                                if (cResult[28] === source) {
                                  let tmp23;
                                  if (cResult[29] === style) {
                                    tmp23 = cResult[30];
                                  }
                                  if (cResult[31] === tmp13) {
                                    if (cResult[32] === tmp20) {
                                      let tmp26;
                                      if (cResult[33] === tmp23) {
                                        tmp26 = cResult[34];
                                      }
                                      return tmp26;
                                    }
                                  }
                                  const obj4 = { children: items };
                                  items = [tmp13, tmp20, tmp23];
                                  const tmp29 = metroImportDefault(react.Fragment, obj4);
                                  cResult[31] = tmp13;
                                  cResult[32] = tmp20;
                                  cResult[33] = tmp23;
                                  cResult[34] = tmp29;
                                  tmp26 = tmp29;
                                }
                              }
                              const obj5 = { style, index, source };
                              const tmp25 = metroRequire(MediaModalSpoilerOverlayDefault, obj5);
                              cResult[27] = index;
                              cResult[28] = source;
                              cResult[29] = style;
                              cResult[30] = tmp25;
                              tmp23 = tmp25;
                            }
                          }
                          let tmp21 = null;
                          if (isLoadingVisible) {
                            const obj6 = { style, status: "loading", progress };
                            tmp21 = metroRequire(tmp5(13023), obj6);
                          }
                          cResult[23] = isLoadingVisible;
                          cResult[24] = progress;
                          cResult[25] = style;
                          cResult[26] = tmp21;
                          tmp20 = tmp21;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (tmp9) {
          size = { accessibilityRole: "image", accessibilityLabel: source.description, fadeDuration, height: source.height, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: tmp7, pointerEvents, source: tmp8, style, width: source.width };
          tmp14Result = tmp14(Image, size);
        } else {
          const obj7 = { accessibilityRole: "image", accessibilityLabel: source.description, fadeDuration, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: tmp7, pointerEvents, resizeMethod: str2, source: tmp8, style };
          str2 = undefined;
          const tmp5Result = FastImageDefault;
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
                        str2 = "none";
                      }
                    }
                  }
                }
              }
            }
          }
          tmp14Result = tmp14(tmp5Result, obj7);
        }
        cResult[12] = fadeDuration;
        cResult[13] = handleError;
        cResult[14] = tmp7;
        cResult[15] = handleLoad;
        cResult[16] = handleLoadStart;
        cResult[17] = tmp8;
        cResult[18] = pointerEvents;
        cResult[19] = source;
        cResult[20] = style;
        cResult[21] = tmp9;
        cResult[22] = tmp14Result;
        tmp13 = tmp14Result;
      }
    }
  }
  const obj8 = { onError, onLoad, onLoadingVisible };
  cResult[0] = onError;
  cResult[1] = onLoad;
  cResult[2] = onLoadingVisible;
  cResult[3] = obj8;
  tmp4 = obj8;
}) : (function MediaModalImage(style) {
  let fadeDuration;
  let handleError;
  let handleLoad;
  let handleLoadStart;
  let handleProgress;
  let hasError;
  let index;
  let isLoadingVisible;
  let onError;
  let onLoad;
  let onLoadingVisible;
  let pointerEvents;
  let progress;
  let source;
  let str2;
  ({ fadeDuration, pointerEvents, source } = style);
  style = style.style;
  handleProgress = undefined;
  ({ index, onError, onLoad, onLoadingVisible } = style);
  const tmp3 = useMediaLoadingDefault({ onError, onLoad, onLoadingVisible });
  ({ handleLoadStart, handleLoad, handleError, handleProgress } = tmp3);
  const items = [handleProgress];
  ({ hasError, isLoadingVisible, progress } = tmp3);
  const callback = react.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    return handleProgress(nativeEvent.loaded, nativeEvent.total);
  }, items);
  const items1 = [source.uri];
  const memo = react.useMemo(() => ({ uri: source.uri }), items1);
  const tmp4 = react;
  if (hasError) {
    const obj3 = { style, status: "error" };
    return metroRequire(MediaModalLoadingOverlayDefault, obj3);
  } else {
    let tmp11Result;
    let tmp17;
    const uri = source.uri;
    let startsWithResult = uri.startsWith("assets-library://");
    if (!startsWithResult) {
      const uri2 = source.uri;
      startsWithResult = uri2.startsWith(React3);
    }
    if (!startsWithResult) {
      const uri3 = source.uri;
      startsWithResult = uri3.startsWith(hasOwnProperty);
    }
    const Fragment = tmp4.Fragment;
    const tmp10 = metroImportDefault;
    if (startsWithResult) {
      size = { accessibilityRole: "image", accessibilityLabel: source.description, fadeDuration, height: source.height, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: callback, pointerEvents, source: memo, style, width: source.width };
      tmp11Result = tmp11(Image, size);
      tmp17 = tmp11;
    } else {
      const obj = { accessibilityRole: "image", accessibilityLabel: source.description, fadeDuration, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: callback, pointerEvents, resizeMethod: str2, source: memo, style };
      str2 = undefined;
      const tmpResult = FastImageDefault;
      const obj2 = PlatformUtils;
      const tmp13 = require;
      if (obj2.isAndroid()) {
        if (0 !== source.width) {
          if (0 !== source.height) {
            if (source.width > 2048) {
              if (source.width * source.height <= 16777216) {
                const _Math = Math;
                const _Math2 = Math;
                const bound = Math.max(source.width, source.height);
                if (bound / Math.min(source.width, source.height) > 2) {
                  const tmp13Result = tmp13(13026);
                  if (tmp13Result.getAndroidMediaViewerFullResolutionEnabled("MediaModal")) {
                    str2 = "none";
                  }
                }
              }
            }
          }
        }
      }
      tmp11Result = tmp11(tmpResult, obj);
      tmp17 = tmp11;
    }
    const items2 = [tmp11Result, , ];
    let tmp17Result = null;
    if (isLoadingVisible) {
      const obj4 = { style, status: "loading", progress };
      tmp17Result = tmp17(tmp(13023), obj4);
    }
    const obj5 = { children: items2 };
    items2[1] = tmp17Result;
    const obj6 = { style, index, source };
    items2[2] = tmp17(MediaModalSpoilerOverlayDefault, obj6);
    return tmp10(Fragment, obj5);
  }
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalImage.tsx");

export default memoResult;
