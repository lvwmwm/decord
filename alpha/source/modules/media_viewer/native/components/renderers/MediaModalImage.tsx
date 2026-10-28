// Module ID: 14488
// Function ID: 14489
// Name: MediaModalImage
// Dependencies: [19, 21, 1381, 558, 576, 14485, 14486, 5705, 14487, 2]

// Module 14488 (MediaModalImage)
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import FastImageDefault from "FastImage" /* 5705 */;
import useMediaLoadingDefault from "useMediaLoading" /* 14485 */;
import MediaModalSpoilerOverlayDefault from "MediaModalSpoilerOverlay" /* 14487 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let nativeEvent;

let closure_4;
let hasOwnProperty;
let Fragment = Fragment_mod;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaModalImage(arg0) {
  let fadeDuration;
  let handleError;
  let handleLoad;
  let handleLoadStart;
  let handleProgress;
  let index;
  let isLoadingVisible;
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
      let tmp3;
      if (cResult[2] === onLoadingVisible) {
        tmp3 = cResult[3];
      }
      const tmp5 = useMediaLoadingDefault(tmp3);
      ({ isLoadingVisible, progress, handleLoadStart, handleLoad, handleError, handleProgress } = tmp5);
      const hasError = tmp5.hasError;
      const tmp4 = importDefault;
      if (cResult[4] !== handleProgress) {
        class M {
          constructor(arg0) {
            nativeEvent = arg0.nativeEvent;
            return handleProgress(nativeEvent.loaded, nativeEvent.total);
          }
        }
        cResult[4] = handleProgress;
        cResult[5] = M;
      } else {
        class M {
          constructor(arg0) {
            nativeEvent = arg0.nativeEvent;
            return handleProgress(nativeEvent.loaded, nativeEvent.total);
          }
        }
      }
      if (cResult[6] !== source.uri) {
        class M {
          constructor(arg0) {
            nativeEvent = arg0.nativeEvent;
            return handleProgress(nativeEvent.loaded, nativeEvent.total);
          }
        }
        tmp8[0] = source.uri;
        cResult[6] = source.uri;
        cResult[7] = tmp8;
      } else {
        class M {
          constructor(arg0) {
            nativeEvent = arg0.nativeEvent;
            return handleProgress(nativeEvent.loaded, nativeEvent.total);
          }
        }
      }
      if (hasError) {
        class M {
          constructor(arg0) {
            nativeEvent = arg0.nativeEvent;
            return handleProgress(nativeEvent.loaded, nativeEvent.total);
          }
        }
        return tmp16;
      } else {
        class M {
          constructor(arg0) {
            nativeEvent = arg0.nativeEvent;
            return handleProgress(nativeEvent.loaded, nativeEvent.total);
          }
        }
        const height = source.height;
        if (cResult[10] !== source) {
          class M {
            constructor(arg0) {
              nativeEvent = arg0.nativeEvent;
              return handleProgress(nativeEvent.loaded, nativeEvent.total);
            }
          }
          if (obj3.isAndroid()) {
            class M {
              constructor(arg0) {
                nativeEvent = arg0.nativeEvent;
                return handleProgress(nativeEvent.loaded, nativeEvent.total);
              }
            }
            if (0 !== source.width) {
              class M {
                constructor(arg0) {
                  nativeEvent = arg0.nativeEvent;
                  return handleProgress(nativeEvent.loaded, nativeEvent.total);
                }
              }
              if (0 !== source.height) {
                class M {
                  constructor(arg0) {
                    nativeEvent = arg0.nativeEvent;
                    return handleProgress(nativeEvent.loaded, nativeEvent.total);
                  }
                }
                if (source.width > 2048) {
                  class M {
                    constructor(arg0) {
                      nativeEvent = arg0.nativeEvent;
                      return handleProgress(nativeEvent.loaded, nativeEvent.total);
                    }
                  }
                  if (source.width * source.height <= 16777216) {
                    class M {
                      constructor(arg0) {
                        nativeEvent = arg0.nativeEvent;
                        return handleProgress(nativeEvent.loaded, nativeEvent.total);
                      }
                    }
                    const _Math = Math;
                    const _Math2 = Math;
                    const bound = Math.max(source.width, source.height);
                    if (bound / Math.min(source.width, source.height) > 2) {
                      class M {
                        constructor(arg0) {
                          nativeEvent = arg0.nativeEvent;
                          return handleProgress(nativeEvent.loaded, nativeEvent.total);
                        }
                      }
                    }
                  }
                } else {
                  class M {
                    constructor(arg0) {
                      nativeEvent = arg0.nativeEvent;
                      return handleProgress(nativeEvent.loaded, nativeEvent.total);
                    }
                  }
                }
              }
            }
          }
          cResult[10] = source;
          cResult[11] = undefined;
        } else {
          class M {
            constructor(arg0) {
              nativeEvent = arg0.nativeEvent;
              return handleProgress(nativeEvent.loaded, nativeEvent.total);
            }
          }
        }
        if (cResult[12] === fadeDuration) {
          class M {
            constructor(arg0) {
              nativeEvent = arg0.nativeEvent;
              return handleProgress(nativeEvent.loaded, nativeEvent.total);
            }
          }
        }
        size = { accessibilityRole: "image", accessibilityLabel: tmp9, fadeDuration, height, onError: handleError, onLoad: handleLoad, onLoadStart: handleLoadStart, onProgress: tmp6, pointerEvents, resizeMethod: tmp10, source: tmp7, style, width: source.width };
        cResult[12] = fadeDuration;
        cResult[13] = handleError;
        cResult[14] = tmp6;
        cResult[15] = handleLoad;
        cResult[16] = handleLoadStart;
        cResult[17] = tmp7;
        cResult[18] = pointerEvents;
        cResult[19] = source.description;
        cResult[20] = source.height;
        cResult[21] = source.width;
        cResult[22] = style;
        cResult[23] = tmp10;
        cResult[24] = React3(tmp4(5705), size);
        const tmp15 = React3(tmp4(5705), size);
      }
    }
  }
  const obj2 = { onError, onLoad, onLoadingVisible };
  cResult[0] = onError;
  cResult[1] = onLoad;
  cResult[2] = onLoadingVisible;
  cResult[3] = obj2;
  tmp3 = obj2;
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
    tmp7Result = React3(tmp(14486), obj);
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
      tmp8Result = tmp8(tmp(14486), obj3);
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
