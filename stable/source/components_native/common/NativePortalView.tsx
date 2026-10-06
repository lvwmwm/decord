// Module ID: 7720
// Function ID: 7721
// Name: NativePortalView
// Dependencies: [109, 19, 17, 21, 4837, 1370, 7721, 558, 576, 7722, 2]
// Exports: createPortalControls, isPortalExpired, markPortalAlive

// Module 7720 (NativePortalView)
import Fragment from "Fragment" /* 21 */;
import PortalViewNativeComponentDefault from "PortalViewNativeComponent" /* 7721 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4837 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, duration, importDefault, setLoopPlaybackResult;

let NativeEventEmitter;
let NativeModules;
let importDefaultResult;
let requireNativeComponent;
let closure_3 = ["style", "children", "paused", "muted", "onLoad"];
({ NativeModules, requireNativeComponent, NativeEventEmitter } = react_native);
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ base: { overflow: "hidden" } });
if (PlatformUtils.isAndroid()) {
  importDefaultResult = PortalViewNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDPortalView");
}
const metroImportAll = importDefaultResult;
const MediaPlayerManager = NativeModules.MediaPlayerManager;
const DCDPortalViewManager = NativeModules.DCDPortalViewManager;
const nativeEventEmitter = new NativeEventEmitter(MediaPlayerManager);
const set = new Set();
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3) => {
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  closure_3 = arg3;
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
}) : ((arg0, arg1, arg2, arg3) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  closure_3 = arg3;
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
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function(muted) {
  let children;
  let closure_0;
  let closure_1;
  let closure_2;
  let loopPlayback;
  let obj2;
  let paused;
  let style;
  let tmp13;
  let tmp2;
  let tmp3;
  let tmp7;
  let obj = require("react");
  const cResult = obj.c(35);
  if (cResult[0] !== muted) {
    ({ style, children, paused } = muted);
    dependencyMap = paused;
    muted = muted.muted;
    _require = muted;
    const onLoad = muted.onLoad;
    importDefault = onLoad;
    const tmp10 = _objectWithoutProperties(muted, closure_3);
    closure_3 = tmp10;
    cResult[0] = muted;
    cResult[1] = children;
    cResult[2] = muted;
    cResult[3] = onLoad;
    cResult[4] = paused;
    cResult[5] = tmp10;
    cResult[6] = style;
    tmp7 = style;
    tmp3 = muted;
    tmp2 = children;
  } else {
    tmp2 = cResult[1];
    _require = cResult[2];
    importDefault = cResult[3];
    dependencyMap = cResult[4];
    closure_3 = cResult[5];
    tmp7 = cResult[6];
  }
  const tmp11 = closure_7();
  if (null != tmp2) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("The <NativePortalView> component cannot contain children.");
    throw error;
  } else {
    if (cResult[7] === tmp5) {
      let tmp12;
      if (cResult[8] === tmp6.portal) {
        tmp12 = cResult[9];
        class M {
          constructor() {
            if (null != closure_3.portal) {
              MediaPlayerManager.toggle(tmp.portal, !closure_2);
            }
          }
        }
      }
      class M {
        constructor() {
          if (null != closure_3.portal) {
            MediaPlayerManager.toggle(tmp.portal, !closure_2);
          }
        }
      }
      const layoutEffect = react.useLayoutEffect(tmp12, tmp13);
      if (cResult[11] === tmp3) {
        if (cResult[12] === tmp6.portal) {
          class M {
            constructor() {
              if (null != closure_3.portal) {
                MediaPlayerManager.toggle(tmp.portal, !closure_2);
              }
            }
          }
        }
        class M {
          constructor() {
            if (null != closure_3.portal) {
              MediaPlayerManager.toggle(tmp.portal, !closure_2);
            }
          }
        }
        if (cResult[15] === tmp4) {
          if (cResult[16] === tmp6.portal) {
            class M {
              constructor() {
                if (null != closure_3.portal) {
                  MediaPlayerManager.toggle(tmp.portal, !closure_2);
                }
              }
            }
          }
          class M {
            constructor() {
              if (null != closure_3.portal) {
                MediaPlayerManager.toggle(tmp.portal, !closure_2);
              }
            }
          }
          if (cResult[19] === tmp4) {
            let tmp19;
            if (cResult[20] === tmp6.portal) {
              tmp19 = cResult[21];
            }
            class M {
              constructor() {
                if (null != closure_3.portal) {
                  MediaPlayerManager.toggle(tmp.portal, !closure_2);
                }
              }
            }
            if (obj2.isAndroid()) {
              if (cResult[22] === tmp7) {
                let tmp28;
                if (cResult[23] === tmp11.base) {
                  tmp28 = cResult[24];
                }
                class M {
                  constructor() {
                    if (null != closure_3.portal) {
                      MediaPlayerManager.toggle(tmp.portal, !closure_2);
                    }
                  }
                }
                class N {
                  constructor(nativeEvent) {
                    if (closure_3.portal === nativeEvent.nativeEvent.portal) {
                      if (closure_1 != null) {
                        tmp();
                      }
                    }
                  }
                }
                const merged = Object.assign(tmp6);
                const tmp35 = <closure_8 style={tmp28} onPortalViewLoaded={tmp19} />;
                cResult[25] = tmp19;
                cResult[26] = tmp6;
                cResult[27] = tmp28;
                cResult[28] = tmp35;
              }
              class M {
                constructor() {
                  if (null != closure_3.portal) {
                    MediaPlayerManager.toggle(tmp.portal, !closure_2);
                  }
                }
              }
              tmp29[0] = tmp11.base;
              class N {
                constructor(nativeEvent) {
                  if (closure_3.portal === nativeEvent.nativeEvent.portal) {
                    if (closure_1 != null) {
                      tmp();
                    }
                  }
                }
              }
              cResult[22] = tmp7;
              cResult[23] = tmp11.base;
              cResult[24] = tmp29;
              tmp28 = tmp29;
            } else {
              if (cResult[29] === tmp7) {
                let tmp20;
                if (cResult[30] === tmp11.base) {
                  tmp20 = cResult[31];
                }
                class M {
                  constructor() {
                    if (null != closure_3.portal) {
                      MediaPlayerManager.toggle(tmp.portal, !closure_2);
                    }
                  }
                }
                class N {
                  constructor(nativeEvent) {
                    if (closure_3.portal === nativeEvent.nativeEvent.portal) {
                      if (closure_1 != null) {
                        tmp();
                      }
                    }
                  }
                }
                const merged1 = Object.assign(tmp6);
                const tmp27 = <closure_8 style={tmp20} />;
                cResult[32] = tmp6;
                cResult[33] = tmp20;
                cResult[34] = tmp27;
              }
              class M {
                constructor() {
                  if (null != closure_3.portal) {
                    MediaPlayerManager.toggle(tmp.portal, !closure_2);
                  }
                }
              }
              tmp21[0] = tmp11.base;
              class N {
                constructor(nativeEvent) {
                  if (closure_3.portal === nativeEvent.nativeEvent.portal) {
                    if (closure_1 != null) {
                      tmp();
                    }
                  }
                }
              }
              cResult[29] = tmp7;
              cResult[30] = tmp11.base;
              cResult[31] = tmp21;
              tmp20 = tmp21;
            }
            class N {
              constructor(nativeEvent) {
                if (closure_3.portal === nativeEvent.nativeEvent.portal) {
                  if (closure_1 != null) {
                    tmp();
                  }
                }
              }
            }
          }
          class N {
            constructor(nativeEvent) {
              if (closure_3.portal === nativeEvent.nativeEvent.portal) {
                if (closure_1 != null) {
                  tmp();
                }
              }
            }
          }
          cResult[19] = tmp4;
          cResult[20] = tmp6.portal;
          cResult[21] = N;
          tmp19 = N;
        }
        class C {
          constructor() {
            obj = closure_0(closure_2[5]);
            if (!obj.isAndroid()) {
              tmp = null;
              if (closure_1 != null) {
                tmp2 = closure_1();
              }
            }
            setLoopPlaybackResult = MediaPlayerManager.setLoopPlayback(closure_3.portal, true);
            return () => {
              loopPlayback.setLoopPlayback(portal.portal, false);
              const obj = closure_0(closure_2[5]);
              const tmp3 = closure_2;
              if (obj.isAndroid()) {
                const obj2 = closure_1(tmp3[9]);
                obj2.unregisterView(portal.portal);
              } else {
                DCDPortalViewManager.unregisterView(portal.portal);
              }
              set.add(portal.portal);
            };
          }
        }
        const items = [tmp4, tmp6.portal];
        cResult[15] = tmp4;
        cResult[16] = tmp6.portal;
        cResult[17] = C;
        cResult[18] = items;
      }
      const fn = function k() {
        if (null != closure_3.portal) {
          MediaPlayerManager.setMuted(tmp.portal, closure_0);
        }
      };
      const items1 = [tmp6.portal, tmp3];
      cResult[11] = tmp3;
      cResult[12] = tmp6.portal;
      cResult[13] = fn;
      cResult[14] = items1;
    }
    class M {
      constructor() {
        if (null != closure_3.portal) {
          MediaPlayerManager.toggle(tmp.portal, !closure_2);
        }
      }
    }
    const items2 = [, tmp5];
    cResult[7] = tmp5;
    cResult[8] = tmp6.portal;
    cResult[9] = M;
    cResult[10] = items2;
    tmp12 = M;
    tmp13 = items2;
  }
}) : (function(paused) {
  let children;
  let items4;
  let loopPlayback;
  let style;
  paused = paused.paused;
  const muted = paused.muted;
  const onLoad = paused.onLoad;
  ({ style, children } = paused);
  const merged = Object.assign(paused, Object.assign({ style: 0, children: 0, paused: 0, muted: 0, onLoad: 0 }));
  if (null != children) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("The <NativePortalView> component cannot contain children.");
    throw error;
  } else {
    let tmp15Result;
    const items = [merged.portal, paused];
    const layoutEffect = react.useLayoutEffect(() => {
      if (null != merged.portal) {
        MediaPlayerManager.toggle(tmp.portal, !paused);
      }
    }, items);
    const items1 = [merged.portal, muted];
    const layoutEffect1 = react.useLayoutEffect(() => {
      if (null != merged.portal) {
        MediaPlayerManager.setMuted(tmp.portal, muted);
      }
    }, items1);
    const items2 = [onLoad, merged.portal];
    const layoutEffect2 = react.useLayoutEffect(() => {
      let portal;
      let obj = PlatformUtils;
      if (!obj.isAndroid()) {
        if (onLoad != null) {
          onLoad();
        }
      }
      MediaPlayerManager.setLoopPlayback(merged.portal, true);
      return () => {
        loopPlayback.setLoopPlayback(portal.portal, false);
        const obj = paused(onLoad[5]);
        const tmp3 = onLoad;
        if (obj.isAndroid()) {
          const obj2 = muted(tmp3[9]);
          obj2.unregisterView(portal.portal);
        } else {
          DCDPortalViewManager.unregisterView(portal.portal);
        }
        set.add(portal.portal);
      };
    }, items2);
    const items3 = [onLoad, merged.portal];
    const callback = react.useCallback((nativeEvent) => {
      if (merged.portal === nativeEvent.nativeEvent.portal) {
        if (onLoad != null) {
          tmp();
        }
      }
    }, items3);
    let obj = paused(onLoad[5]);
    let obj2 = { style: items4 };
    const isAndroidResult = obj.isAndroid();
    const merged1 = Object.assign(merged);
    items4 = [tmp2.base, style];
    if (isAndroidResult) {
      obj2.onPortalViewLoaded = callback;
      tmp15Result = tmp15(tmp16, obj2);
    } else {
      tmp15Result = tmp15(tmp16, obj2);
    }
    return tmp15Result;
  }
}));
const result = size.fileFinishedImporting("components_native/common/NativePortalView.tsx");

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
      closure_13(portal, arg0, arg1, arg2);
    }
  };
}
export const markPortalAlive = function markPortalAlive(portal) {
  set.delete(portal);
};
export const isPortalExpired = function isPortalExpired(portal) {
  return set.has(portal);
};
