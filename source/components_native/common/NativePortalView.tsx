// Module ID: 8279
// Function ID: 65352
// Name: MediaPlayerManager
// Dependencies: [31, 27, 33, 4130, 477, 8280, 8281, 2]
// Exports: createPortalControls, isPortalExpired, markPortalAlive

// Module 8279 (MediaPlayerManager)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "jsxProd";

let NativeEventEmitter;
let NativeModules;
const require = arg1;
({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ base: { overflow: "hidden" } });
if (set.isAndroid()) {
  let importDefaultResult = require("__INTERNAL_VIEW_CONFIG");
} else {
  importDefaultResult = get_ActivityIndicator.requireNativeComponent("DCDPortalView");
}
const MediaPlayerManager = NativeModules.MediaPlayerManager;
const DCDPortalViewManager = NativeModules.DCDPortalViewManager;
const nativeEventEmitter = new NativeEventEmitter(MediaPlayerManager);
set = new Set();
const result = set.fileFinishedImporting("components_native/common/NativePortalView.tsx");

export default importAllResult.memo((muted) => {
  let paused;
  let style;
  ({ style, paused } = muted);
  muted = muted.muted;
  const onLoad = muted.onLoad;
  let obj = { style: 0, children: 0, paused: 0, muted: 0, onLoad: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(muted, obj);
  const tmp3 = callback();
  if (null != muted.children) {
    const _Error = Error;
    const error = new Error("The <NativePortalView> component cannot contain children.");
    throw error;
  } else {
    const items = [merged.portal, paused];
    const layoutEffect = merged.useLayoutEffect(() => {
      if (null != merged.portal) {
        outer1_7.toggle(merged.portal, !paused);
      }
    }, items);
    const items1 = [merged.portal, muted];
    const layoutEffect1 = merged.useLayoutEffect(() => {
      if (null != merged.portal) {
        outer1_7.setMuted(merged.portal, muted);
      }
    }, items1);
    const items2 = [onLoad, merged.portal];
    const layoutEffect2 = merged.useLayoutEffect(() => {
      let isAndroidResult = paused(onLoad[4]).isAndroid();
      if (!isAndroidResult) {
        isAndroidResult = null == onLoad;
      }
      if (!isAndroidResult) {
        onLoad();
      }
      outer1_7.setLoopPlayback(merged.portal, true);
      return () => {
        outer2_7.setLoopPlayback(outer1_3.portal, false);
        if (obj.isAndroid()) {
          muted(onLoad[6]).unregisterView(outer1_3.portal);
          const obj2 = muted(onLoad[6]);
        } else {
          outer2_8.unregisterView(outer1_3.portal);
        }
        outer2_10.add(outer1_3.portal);
      };
    }, items2);
    const items3 = [onLoad, merged.portal];
    callback = merged.useCallback((nativeEvent) => {
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
export const createPortalControls = function createPortalControls(portal) {
  let closure_0 = portal;
  return {
    seek(arg0) {
      outer1_7.changeProgress(closure_0, arg0);
    },
    pause(arg0) {
      outer1_7.toggle(closure_0, !arg0);
    },
    useSubscribe(arg0, arg1, arg2) {
      (function useSubscribe(closure_0, arg1, arg2, arg3) {
        let closure_1 = arg1;
        let closure_2 = arg2;
        let closure_3 = arg3;
        const items = [closure_0, arg2, arg1, arg3];
        const effect = outer2_3.useEffect(() => {
          let closure_0 = outer3_9.addListener("MediaPlayerProgress", (duration) => {
            duration = duration.duration;
            let tmp = duration.id === closure_0;
            if (tmp) {
              tmp = duration > 0;
            }
            if (tmp) {
              lib(duration.time, duration);
            }
          });
          let closure_1 = outer3_9.addListener("MediaPlayerDownloadProgress", (id) => {
            let tmp2 = id.id === closure_0;
            if (tmp2) {
              tmp2 = tmp > 0;
            }
            if (tmp2) {
              tmp2 = null != outer1_3;
            }
            if (tmp2) {
              outer1_3(id.progressPercent);
            }
          });
          let closure_2 = outer3_9.addListener("MediaPlayerPause", (id) => {
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
      })(closure_0, arg0, arg1, arg2);
    }
  };
};
export const markPortalAlive = function markPortalAlive(portal) {
  set.delete(portal);
};
export const isPortalExpired = function isPortalExpired(portal) {
  return set.has(portal);
};
