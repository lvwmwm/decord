// Module ID: 8267
// Function ID: 65278
// Name: MediaPlayerManager
// Dependencies: []
// Exports: createPortalControls, isPortalExpired, markPortalAlive

// Module 8267 (MediaPlayerManager)
let NativeEventEmitter;
let NativeModules;
const importAllResult = importAll(dependencyMap[0]);
const obj2 = arg1(dependencyMap[1]);
({ NativeEventEmitter, NativeModules } = obj2);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = arg1(dependencyMap[3]).createStyles({ base: { overflow: "hidden" } });
const obj3 = arg1(dependencyMap[3]);
if (obj4.isAndroid()) {
  let importDefaultResult = importDefault(dependencyMap[5]);
} else {
  importDefaultResult = obj2.requireNativeComponent("DCDPortalView");
}
const MediaPlayerManager = NativeModules.MediaPlayerManager;
const DCDPortalViewManager = NativeModules.DCDPortalViewManager;
const nativeEventEmitter = new NativeEventEmitter(MediaPlayerManager);
const set = new Set();
const obj4 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((muted) => {
  let paused;
  let style;
  ({ style, paused } = muted);
  const arg1 = paused;
  muted = muted.muted;
  const importDefault = muted;
  const onLoad = muted.onLoad;
  const dependencyMap = onLoad;
  let obj = { <string:3576188030>: false, <string:1968267285>: null, <string:2199479252>: "", <string:1236030894>: null, <string:4173045131>: null };
  Object.setPrototypeOf(null);
  const merged = Object.assign(muted, obj);
  const tmp3 = callback();
  if (null != muted.children) {
    const _Error = Error;
    const error = new Error("The <NativePortalView> component cannot contain children.");
    throw error;
  } else {
    const items = [merged.portal, paused];
    const layoutEffect = importAllResult.useLayoutEffect(() => {
      if (null != merged.portal) {
        store.toggle(merged.portal, !paused);
      }
    }, items);
    const items1 = [merged.portal, muted];
    const layoutEffect1 = importAllResult.useLayoutEffect(() => {
      if (null != merged.portal) {
        store.setMuted(merged.portal, muted);
      }
    }, items1);
    const items2 = [onLoad, merged.portal];
    const layoutEffect2 = importAllResult.useLayoutEffect(() => {
      let isAndroidResult = paused(onLoad[4]).isAndroid();
      if (!isAndroidResult) {
        isAndroidResult = null == onLoad;
      }
      if (!isAndroidResult) {
        onLoad();
      }
      store.setLoopPlayback(merged.portal, true);
      return () => {
        loopPlayback.setLoopPlayback(closure_3.portal, false);
        if (obj.isAndroid()) {
          callback2(closure_2[6]).unregisterView(closure_3.portal);
          const obj2 = callback2(closure_2[6]);
        } else {
          closure_8.unregisterView(closure_3.portal);
        }
        set.add(closure_3.portal);
      };
    }, items2);
    const items3 = [onLoad, merged.portal];
    const callback = importAllResult.useCallback((nativeEvent) => {
      if (merged.portal === nativeEvent.nativeEvent.portal) {
        if (null != onLoad) {
          onLoad();
        }
      }
    }, items3);
    if (obj4.isAndroid()) {
      obj = {};
      const merged1 = Object.assign(merged);
      const items4 = [tmp3.base, style];
      obj["style"] = items4;
      obj["onPortalViewLoaded"] = callback;
      let tmp23Result = tmp23(tmp24, obj);
    } else {
      obj = {};
      const merged2 = Object.assign(merged);
      const items5 = [tmp3.base, style];
      obj["style"] = items5;
      tmp23Result = tmp23(tmp24, obj);
    }
    return tmp23Result;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("components_native/common/NativePortalView.tsx");

export default memoResult;
export const createPortalControls = function createPortalControls(portal) {
  const arg1 = portal;
  return {
    seek(arg0) {
      closure_7.changeProgress(arg0, arg0);
    },
    pause(arg0) {
      closure_7.toggle(arg0, !arg0);
    },
    useSubscribe(arg0, arg1, arg2) {
      function useSubscribe(arg0, arg1, arg2, arg3) {
        const items = [arg0, arg2, arg1, arg3];
        const effect = arg3.useEffect(() => {
          let closure_0 = closure_9.addListener("MediaPlayerProgress", (duration) => {
            duration = duration.duration;
            let tmp = duration.id === closure_0;
            if (tmp) {
              tmp = duration > 0;
            }
            if (tmp) {
              lib(duration.time, duration);
            }
          });
          let closure_1 = closure_9.addListener("MediaPlayerDownloadProgress", (id) => {
            let tmp2 = id.id === closure_0;
            if (tmp2) {
              tmp2 = tmp > 0;
            }
            if (tmp2) {
              tmp2 = null != callback;
            }
            if (tmp2) {
              callback(id.progressPercent);
            }
          });
          let closure_2 = closure_9.addListener("MediaPlayerPause", (id) => {
            if (id.id === closure_0) {
              lib2(tmp);
            }
          });
          return () => {
            closure_0.remove();
            lib.remove();
            lib2.remove();
          };
        }, items);
      }(arg0, arg0, arg1, arg2);
    }
  };
};
export const markPortalAlive = function markPortalAlive(portal) {
  set.delete(portal);
};
export const isPortalExpired = function isPortalExpired(portal) {
  return set.has(portal);
};
