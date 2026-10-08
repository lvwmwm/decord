// Module ID: 8371
// Function ID: 8372
// Name: MediaModalPortal
// Dependencies: [19, 17, 21, 5090, 1381, 8372, 558, 576, 6638, 8373, 2]
// Exports: createPortalControls, isPortalExpired, markPortalAlive

// Module 8371 (MediaModalPortal)
import Fragment from "Fragment" /* 21 */;
import PortalViewNativeComponentDefault from "PortalViewNativeComponent" /* 8372 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5090 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, duration, flag, setLoopPlaybackResult;

let NativeEventEmitter;
let NativeModules;
let importDefaultResult;
let requireNativeComponent;
let react = react_mod;
({ requireNativeComponent, NativeEventEmitter, NativeModules } = react_native);
let jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ base: { overflow: "hidden" } });
if (PlatformUtils.isAndroid()) {
  importDefaultResult = PortalViewNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDPortalView");
}
const metroRequire = importDefaultResult;
const MediaPlayerManager = NativeModules.MediaPlayerManager;
const nativeEventEmitter = new NativeEventEmitter(MediaPlayerManager);
const set = new Set();
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSubscribe(arg0, arg1, arg2, arg3) {
  let closure_3;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  react = arg3;
  const obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === arg3) {
    if (cResult[1] === arg2) {
      if (cResult[2] === arg1) {
        let tmp2;
        let tmp3;
        if (cResult[3] === arg0) {
          tmp2 = cResult[4];
          tmp3 = cResult[5];
        }
        const effect = react.useEffect(tmp2, tmp3);
      }
    }
  }
  const fn = function u() {
    closure_0 = nativeEventEmitter.addListener("MediaPlayerProgress", (duration) => {
      duration = duration.duration;
      let tmp = duration.id === closure_0;
      const time = duration.time;
      if (tmp) {
        tmp = duration > 0;
      }
      if (tmp) {
        closure_1(time, duration);
      }
    });
    closure_1 = nativeEventEmitter.addListener("MediaPlayerDownloadProgress", (id) => {
      let tmp2 = id.id === closure_0;
      const progressPercent = id.progressPercent;
      if (tmp2) {
        tmp2 = tmp > 0;
      }
      if (tmp2) {
        tmp2 = null != closure_1_3;
      }
      if (tmp2) {
        closure_1_3(progressPercent);
      }
    });
    closure_2 = nativeEventEmitter.addListener("MediaPlayerPause", (id) => {
      if (id.id === closure_0) {
        closure_2(tmp);
      }
    });
    return () => {
      closure_0.remove();
      closure_1.remove();
      closure_2.remove();
    };
  };
  const items = [arg0, arg2, arg1, arg3];
  cResult[0] = arg3;
  cResult[1] = arg2;
  cResult[2] = arg1;
  cResult[3] = arg0;
  cResult[4] = fn;
  cResult[5] = items;
  tmp3 = items;
  tmp2 = fn;
}) : (function useSubscribe(arg0, arg1, arg2, arg3) {
  let closure_3;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  react = arg3;
  const items = [arg0, arg2, arg1, arg3];
  const effect = react.useEffect(() => {
    closure_0 = nativeEventEmitter.addListener("MediaPlayerProgress", (duration) => {
      duration = duration.duration;
      let tmp = duration.id === closure_0;
      const time = duration.time;
      if (tmp) {
        tmp = duration > 0;
      }
      if (tmp) {
        closure_1(time, duration);
      }
    });
    closure_1 = nativeEventEmitter.addListener("MediaPlayerDownloadProgress", (id) => {
      let tmp2 = id.id === closure_0;
      const progressPercent = id.progressPercent;
      if (tmp2) {
        tmp2 = tmp > 0;
      }
      if (tmp2) {
        tmp2 = null != closure_1_3;
      }
      if (tmp2) {
        closure_1_3(progressPercent);
      }
    });
    closure_2 = nativeEventEmitter.addListener("MediaPlayerPause", (id) => {
      if (id.id === closure_0) {
        closure_2(tmp);
      }
    });
    return () => {
      closure_0.remove();
      closure_1.remove();
      closure_2.remove();
    };
  }, items);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaModalPortal(muted) {
  let closure_4;
  let loopPlayback;
  let onLoad;
  let paused;
  let pointerEvents;
  let portal;
  let style;
  let tmp5;
  let tmp = paused;
  let obj = paused(onLoad[7]);
  const cResult = obj.c(27);
  ({ style, paused } = muted);
  muted = muted.muted;
  onLoad = muted.onLoad;
  ({ pointerEvents, portal } = muted);
  const tmp4 = closure_5();
  if (cResult[0] !== onLoad) {
    const fn = function n() {
      let tmp;
      if (onLoad != null) {
        tmp = onLoad();
      }
      return tmp;
    };
    cResult[0] = onLoad;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const tmp6 = muted(onLoad[8])(tmp5);
  jsx = tmp6;
  if (cResult[2] === paused) {
    let tmp7;
    let tmp8;
    if (cResult[3] === portal) {
      tmp7 = cResult[4];
      tmp8 = cResult[5];
    }
    const layoutEffect = portal.useLayoutEffect(tmp7, tmp8);
    if (cResult[6] === muted) {
      let tmp10;
      let tmp11;
      if (cResult[7] === portal) {
        tmp10 = cResult[8];
        tmp11 = cResult[9];
      }
      const layoutEffect1 = obj2.useLayoutEffect(tmp10, tmp11);
      if (cResult[10] === tmp6) {
        let tmp13;
        let tmp14;
        if (cResult[11] === portal) {
          tmp13 = cResult[12];
          tmp14 = cResult[13];
        }
        const layoutEffect2 = obj2.useLayoutEffect(tmp13, tmp14);
        if (cResult[14] === tmp6) {
          let tmp17;
          if (cResult[15] === portal) {
            tmp17 = cResult[16];
          }
          if (cResult[17] === style) {
            let tmp18;
            let tmp19;
            if (cResult[18] === tmp4.base) {
              tmp18 = cResult[19];
            }
            if (cResult[20] !== tmp17) {
              let tmp20;
              const tmpResult = tmp(onLoad[4]);
              if (tmpResult.isAndroid()) {
                tmp20 = tmp17;
              }
              class V {
                constructor(nativeEvent) {
                  if (portal === nativeEvent.nativeEvent.portal) {
                    closure_4();
                  }
                }
              }
              class A {
                constructor() {
                  if (null != portal) {
                    MediaPlayerManager.setMuted(tmp, muted);
                  }
                }
              }
              cResult[21] = tmp20;
              tmp19 = tmp20;
            } else {
              tmp19 = cResult[21];
            }
            if (cResult[22] === pointerEvents) {
              if (cResult[23] === portal) {
                if (cResult[24] === tmp19) {
                  let tmp21;
                  if (cResult[25] === tmp18) {
                    tmp21 = cResult[26];
                  }
                  return tmp21;
                }
              }
            }
            class V {
              constructor(nativeEvent) {
                if (portal === nativeEvent.nativeEvent.portal) {
                  closure_4();
                }
              }
            }
            class A {
              constructor() {
                if (null != portal) {
                  MediaPlayerManager.setMuted(tmp, muted);
                }
              }
            }
            const tmp22 = <closure_6 portal={portal} pointerEvents={pointerEvents} style={tmp18} onPortalViewLoaded={tmp19} />;
            cResult[22] = pointerEvents;
            cResult[23] = portal;
            cResult[24] = tmp19;
            cResult[25] = tmp18;
            cResult[26] = tmp22;
            tmp21 = tmp22;
          }
          const items = [, ];
          class V {
            constructor(nativeEvent) {
              if (portal === nativeEvent.nativeEvent.portal) {
                closure_4();
              }
            }
          }
          class A {
            constructor() {
              if (null != portal) {
                MediaPlayerManager.setMuted(tmp, muted);
              }
            }
          }
          cResult[17] = style;
          cResult[18] = tmp4.base;
          cResult[19] = items;
          tmp18 = items;
        }
        class V {
          constructor(nativeEvent) {
            if (portal === nativeEvent.nativeEvent.portal) {
              closure_4();
            }
          }
        }
        class A {
          constructor() {
            if (null != portal) {
              MediaPlayerManager.setMuted(tmp, muted);
            }
          }
        }
        cResult[14] = tmp6;
        cResult[15] = portal;
        cResult[16] = V;
        tmp17 = V;
      }
      class S {
        constructor() {
          if (null != portal) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[4]);
            if (!obj.isAndroid()) {
              tmp4 = closure_4;
              tmp5 = closure_4();
            }
            tmp6 = MediaPlayerManager;
            flag = true;
            setLoopPlaybackResult = MediaPlayerManager.setLoopPlayback(tmp, true);
            return () => {
              loopPlayback.setLoopPlayback(portal, false);
              const obj = muted(onLoad[9]);
              obj.unregisterView(portal);
              set.add(portal);
            };
          } else {
            return;
          }
        }
      }
      class A {
        constructor() {
          if (null != portal) {
            MediaPlayerManager.setMuted(tmp, muted);
          }
        }
      }
      tmp15[0] = tmp6;
      tmp15[1] = portal;
      cResult[10] = tmp6;
      cResult[11] = portal;
      cResult[12] = S;
      cResult[13] = tmp15;
      tmp14 = tmp15;
      tmp13 = S;
    }
    class A {
      constructor() {
        if (null != portal) {
          MediaPlayerManager.setMuted(tmp, muted);
        }
      }
    }
    const items1 = [portal, muted];
    cResult[6] = muted;
    cResult[7] = portal;
    cResult[8] = A;
    cResult[9] = items1;
    tmp11 = items1;
    tmp10 = A;
  }
  const fn2 = function w() {
    if (null != portal) {
      MediaPlayerManager.toggle(tmp, !paused);
    }
  };
  const items2 = [portal, paused];
  cResult[2] = paused;
  cResult[3] = portal;
  cResult[4] = fn2;
  cResult[5] = items2;
  tmp8 = items2;
  tmp7 = fn2;
}) : (function MediaModalPortal(paused) {
  let items4;
  let loopPlayback;
  let pointerEvents;
  let portal;
  let style;
  let tmp9;
  paused = paused.paused;
  const muted = paused.muted;
  ({ onLoad: dependencyMap, portal } = paused);
  ({ style, pointerEvents } = paused);
  let tmp = closure_5();
  const tmp2 = muted(6638)(() => {
    let tmp;
    if (dependencyMap != null) {
      tmp = dependencyMap();
    }
    return tmp;
  });
  let closure_4 = tmp2;
  const items = [portal, paused];
  const layoutEffect = portal.useLayoutEffect(() => {
    if (null != portal) {
      MediaPlayerManager.toggle(tmp, !paused);
    }
  }, items);
  const items1 = [portal, muted];
  const layoutEffect1 = portal.useLayoutEffect(() => {
    if (null != portal) {
      MediaPlayerManager.setMuted(tmp, muted);
    }
  }, items1);
  const items2 = [tmp2, portal];
  const layoutEffect2 = portal.useLayoutEffect(() => {
    if (null != portal) {
      let obj = PlatformUtils;
      if (!obj.isAndroid()) {
        closure_4();
      }
      MediaPlayerManager.setLoopPlayback(tmp, true);
      return () => {
        loopPlayback.setLoopPlayback(portal, false);
        const obj = muted(dependencyMap[9]);
        obj.unregisterView(portal);
        set.add(portal);
      };
    }
  }, items2);
  const items3 = [tmp2, portal];
  let obj = { portal, pointerEvents, style: items4, onPortalViewLoaded: tmp9 };
  items4 = [tmp.base, style];
  const callback = portal.useCallback((nativeEvent) => {
    if (portal === nativeEvent.nativeEvent.portal) {
      closure_4();
    }
  }, items3);
  tmp9 = undefined;
  const obj2 = paused(1381);
  const tmp7 = closure_4;
  const tmp8 = closure_6;
  if (obj2.isAndroid()) {
    tmp9 = callback;
  }
  return tmp7(tmp8, obj);
}));
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalPortal.tsx");

export default memoResult;
export function createPortalControls(portal) {
  let closure_0 = portal;
  return {
    seek(arg0) {
      MediaPlayerManager.changeProgress(portal, arg0);
    },
    pause(arg0) {
      MediaPlayerManager.toggle(portal, !arg0);
    },
    useSubscribe(arg0, arg1, arg2) {
      closure_10(portal, arg0, arg1, arg2);
    }
  };
}
export const markPortalAlive = function markPortalAlive(portal) {
  set.delete(portal);
};
export const isPortalExpired = function isPortalExpired(portal) {
  return set.has(portal);
};
