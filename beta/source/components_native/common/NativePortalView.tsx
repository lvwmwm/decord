// Module ID: 8576
// Function ID: 8577
// Name: NativePortalView
// Dependencies: [109, 19, 17, 21, 4790, 1368, 8577, 558, 568, 8578, 2]
// Exports: createPortalControls, isPortalExpired, markPortalAlive

// Module 8576 (NativePortalView)
import PortalViewNativeComponentDefault from "PortalViewNativeComponent" /* 8577 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["style", "children", "paused", "muted", "onLoad"];
get_ActivityIndicator = fn(17);
({ NativeModules, requireNativeComponent, NativeEventEmitter } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let closure_7 = createStyles.createStyles({ base: { overflow: "hidden" } });
const PlatformUtils = fn(1368);
if (PlatformUtils.isAndroid()) {
  let importDefaultResult = PortalViewNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDPortalView");
}
const MediaPlayerManager = NativeModules.MediaPlayerManager;
const DCDPortalViewManager = NativeModules.DCDPortalViewManager;
const nativeEventEmitter = new NativeEventEmitter(MediaPlayerManager);
const set = new Set();
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3) => {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  closure_3 = arg3;
  const cResult = require("c").c(6);
  if (cResult[0] === arg3) {
    if (cResult[1] === arg2) {
      if (cResult[2] === arg1) {
        if (cResult[3] === arg0) {
          let tmp2 = cResult[4];
          let tmp3 = cResult[5];
        }
        const effect = noop.useEffect(tmp2, tmp3);
      }
    }
  }
  const fn = function u() {
    closure_0 = nativeEventEmitter.addListener("MediaPlayerProgress", (duration) => {
      duration = duration.duration;
      let tmp = duration.id === closure_0;
      if (tmp) {
        tmp = duration > 0;
      }
      if (tmp) {
        closure_1(duration.time, duration);
      }
    });
    closure_1 = nativeEventEmitter.addListener("MediaPlayerDownloadProgress", (id) => {
      let tmp2 = id.id === closure_0;
      if (tmp2) {
        tmp2 = tmp > 0;
      }
      if (tmp2) {
        tmp2 = null != closure_1_3;
      }
      if (tmp2) {
        closure_1_3(id.progressPercent);
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
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  const items = [arg0, arg2, arg1, arg3];
  const effect = noop.useEffect(() => {
    closure_0 = nativeEventEmitter.addListener("MediaPlayerProgress", (duration) => {
      duration = duration.duration;
      let tmp = duration.id === closure_0;
      if (tmp) {
        tmp = duration > 0;
      }
      if (tmp) {
        closure_1(duration.time, duration);
      }
    });
    closure_1 = nativeEventEmitter.addListener("MediaPlayerDownloadProgress", (id) => {
      let tmp2 = id.id === closure_0;
      if (tmp2) {
        tmp2 = tmp > 0;
      }
      if (tmp2) {
        tmp2 = null != closure_1_3;
      }
      if (tmp2) {
        closure_1_3(id.progressPercent);
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
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/NativePortalView.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((muted) => {
  const cResult = require("c").c(35);
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
    let tmp7 = style;
    let tmp2 = children;
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
    const error = new Error("The <NativePortalView> component cannot contain children.");
    throw error;
  } else {
    if (cResult[7] === tmp5) {
      if (cResult[8] === tmp6.portal) {
        let tmp12 = cResult[9];
        class M {
          constructor() {
            if (null != closure_3.portal) {
              tmp2 = MediaPlayerManager;
              tmp3 = closure_2;
              toggleResult = MediaPlayerManager.toggle(tmp.portal, !closure_2);
            }
            return;
          }
        }
      }
      class M {
        constructor() {
          if (null != closure_3.portal) {
            tmp2 = MediaPlayerManager;
            tmp3 = closure_2;
            toggleResult = MediaPlayerManager.toggle(tmp.portal, !closure_2);
          }
          return;
        }
      }
      const layoutEffect = noop.useLayoutEffect(tmp12, tmp13);
      if (cResult[11] === tmp3) {
        if (cResult[12] === tmp6.portal) {
          class M {
            constructor() {
              if (null != closure_3.portal) {
                tmp2 = MediaPlayerManager;
                tmp3 = closure_2;
                toggleResult = MediaPlayerManager.toggle(tmp.portal, !closure_2);
              }
              return;
            }
          }
        }
        class M {
          constructor() {
            if (null != closure_3.portal) {
              tmp2 = MediaPlayerManager;
              tmp3 = closure_2;
              toggleResult = MediaPlayerManager.toggle(tmp.portal, !closure_2);
            }
            return;
          }
        }
        if (cResult[15] === tmp4) {
          if (cResult[16] === tmp6.portal) {
            class M {
              constructor() {
                if (null != closure_3.portal) {
                  tmp2 = MediaPlayerManager;
                  tmp3 = closure_2;
                  toggleResult = MediaPlayerManager.toggle(tmp.portal, !closure_2);
                }
                return;
              }
            }
          }
          class M {
            constructor() {
              if (null != closure_3.portal) {
                tmp2 = MediaPlayerManager;
                tmp3 = closure_2;
                toggleResult = MediaPlayerManager.toggle(tmp.portal, !closure_2);
              }
              return;
            }
          }
          if (cResult[19] === tmp4) {
            if (cResult[20] === tmp6.portal) {
              let tmp19 = cResult[21];
            }
            class M {
              constructor() {
                if (null != closure_3.portal) {
                  tmp2 = MediaPlayerManager;
                  tmp3 = closure_2;
                  toggleResult = MediaPlayerManager.toggle(tmp.portal, !closure_2);
                }
                return;
              }
            }
            if (obj2.isAndroid()) {
              if (cResult[22] === tmp7) {
                if (cResult[23] === tmp11.base) {
                  let tmp28 = cResult[24];
                }
                class M {
                  constructor() {
                    if (null != closure_3.portal) {
                      tmp2 = MediaPlayerManager;
                      tmp3 = closure_2;
                      toggleResult = MediaPlayerManager.toggle(tmp.portal, !closure_2);
                    }
                    return;
                  }
                }
                class N {
                  constructor(arg0) {
                    if (closure_3.portal === muted.nativeEvent.portal) {
                      tmp2 = null;
                      if (closure_1 != null) {
                        tmpResult = tmp();
                      }
                    }
                    return;
                  }
                }
                const obj3 = {};
                const merged = Object.assign(tmp6);
                obj3.style = tmp28;
                obj3.onPortalViewLoaded = tmp19;
                const tmp35 = <closure_8 />;
                cResult[25] = tmp19;
                cResult[26] = tmp6;
                cResult[27] = tmp28;
                cResult[28] = tmp35;
              }
              class M {
                constructor() {
                  if (null != closure_3.portal) {
                    tmp2 = MediaPlayerManager;
                    tmp3 = closure_2;
                    toggleResult = MediaPlayerManager.toggle(tmp.portal, !closure_2);
                  }
                  return;
                }
              }
              tmp29[0] = tmp11.base;
              class N {
                constructor(arg0) {
                  if (closure_3.portal === muted.nativeEvent.portal) {
                    tmp2 = null;
                    if (closure_1 != null) {
                      tmpResult = tmp();
                    }
                  }
                  return;
                }
              }
              cResult[22] = tmp7;
              cResult[23] = tmp11.base;
              cResult[24] = tmp29;
              tmp28 = tmp29;
            } else {
              if (cResult[29] === tmp7) {
                if (cResult[30] === tmp11.base) {
                  let tmp20 = cResult[31];
                }
                class M {
                  constructor() {
                    if (null != closure_3.portal) {
                      tmp2 = MediaPlayerManager;
                      tmp3 = closure_2;
                      toggleResult = MediaPlayerManager.toggle(tmp.portal, !closure_2);
                    }
                    return;
                  }
                }
                class N {
                  constructor(arg0) {
                    if (closure_3.portal === muted.nativeEvent.portal) {
                      tmp2 = null;
                      if (closure_1 != null) {
                        tmpResult = tmp();
                      }
                    }
                    return;
                  }
                }
                const obj4 = {};
                const merged1 = Object.assign(tmp6);
                obj4.style = tmp20;
                const tmp27 = <closure_8 />;
                cResult[32] = tmp6;
                cResult[33] = tmp20;
                cResult[34] = tmp27;
              }
              class M {
                constructor() {
                  if (null != closure_3.portal) {
                    tmp2 = MediaPlayerManager;
                    tmp3 = closure_2;
                    toggleResult = MediaPlayerManager.toggle(tmp.portal, !closure_2);
                  }
                  return;
                }
              }
              tmp21[0] = tmp11.base;
              class N {
                constructor(arg0) {
                  if (closure_3.portal === muted.nativeEvent.portal) {
                    tmp2 = null;
                    if (closure_1 != null) {
                      tmpResult = tmp();
                    }
                  }
                  return;
                }
              }
              cResult[29] = tmp7;
              cResult[30] = tmp11.base;
              cResult[31] = tmp21;
              tmp20 = tmp21;
            }
          }
          class N {
            constructor(arg0) {
              if (closure_3.portal === muted.nativeEvent.portal) {
                tmp2 = null;
                if (closure_1 != null) {
                  tmpResult = tmp();
                }
              }
              return;
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
              if (obj.isAndroid()) {
                closure_1(dependencyMap[9]).unregisterView(tmp.portal);
                const obj2 = closure_1(dependencyMap[9]);
              } else {
                DCDPortalViewManager.unregisterView(tmp.portal);
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
          tmp2 = MediaPlayerManager;
          tmp3 = closure_2;
          toggleResult = MediaPlayerManager.toggle(tmp.portal, !closure_2);
        }
        return;
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
}) : ((paused) => {
  paused = paused.paused;
  const muted = paused.muted;
  const onLoad = paused.onLoad;
  ({ style, children } = paused);
  const merged = Object.assign(paused, Object.assign({ style: 0, children: 0, paused: 0, muted: 0, onLoad: 0 }));
  if (null != children) {
    const _Error = Error;
    const error = new Error("The <NativePortalView> component cannot contain children.");
    throw error;
  } else {
    const items = [merged.portal, paused];
    const layoutEffect = noop.useLayoutEffect(() => {
      if (null != merged.portal) {
        MediaPlayerManager.toggle(tmp.portal, !paused);
      }
    }, items);
    const items1 = [merged.portal, muted];
    const layoutEffect1 = noop.useLayoutEffect(() => {
      if (null != merged.portal) {
        MediaPlayerManager.setMuted(tmp.portal, muted);
      }
    }, items1);
    const items2 = [onLoad, merged.portal];
    const layoutEffect2 = noop.useLayoutEffect(() => {
      if (!obj.isAndroid()) {
        if (onLoad != null) {
          onLoad();
        }
      }
      MediaPlayerManager.setLoopPlayback(merged.portal, true);
      return () => {
        loopPlayback.setLoopPlayback(portal.portal, false);
        if (obj.isAndroid()) {
          muted(onLoad[9]).unregisterView(tmp.portal);
          const obj2 = muted(onLoad[9]);
        } else {
          DCDPortalViewManager.unregisterView(tmp.portal);
        }
        set.add(portal.portal);
      };
    }, items2);
    const items3 = [onLoad, merged.portal];
    const callback = noop.useCallback((nativeEvent) => {
      if (merged.portal === nativeEvent.nativeEvent.portal) {
        if (onLoad != null) {
          tmp();
        }
      }
    }, items3);
    let obj2 = {};
    const obj = paused(onLoad[5]);
    const merged1 = Object.assign(merged);
    const items4 = [tmp2.base, style];
    obj2.style = items4;
    if (isAndroidResult) {
      obj2.onPortalViewLoaded = callback;
      let tmp17Result = tmp17(tmp18, obj2);
    } else {
      tmp17Result = tmp17(tmp18, obj2);
    }
    return tmp17Result;
  }
}));
export function createPortalControls(portal) {
  closure_0 = portal;
  return {
    seek(arg0) {
      MediaPlayerManager.changeProgress(closure_0, arg0);
    },
    pause(arg0) {
      MediaPlayerManager.toggle(closure_0, !arg0);
    },
    useSubscribe(arg0, arg1, arg2) {
      closure_13(closure_0, arg0, arg1, arg2);
    }
  };
}
export const markPortalAlive = function markPortalAlive(portal) {
  set.delete(portal);
};
export const isPortalExpired = function isPortalExpired(portal) {
  return set.has(portal);
};
