// Module ID: 7716
// Function ID: 7717
// Name: NativePortalView
// Dependencies: [19, 17, 21, 4836, 1364, 7717, 7718, 2]
// Exports: createPortalControls, isPortalExpired, markPortalAlive

// Module 7716 (NativePortalView)
import Fragment from "Fragment" /* 21 */;
import PortalViewNativeComponentDefault from "PortalViewNativeComponent" /* 7717 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let duration;

let NativeEventEmitter;
let NativeModules;
let importDefaultResult;
let requireNativeComponent;
({ NativeModules, requireNativeComponent, NativeEventEmitter } = react_native);
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ base: { overflow: "hidden" } });
if (PlatformUtils.isAndroid()) {
  importDefaultResult = PortalViewNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDPortalView");
}
const metroRequire = importDefaultResult;
const MediaPlayerManager = NativeModules.MediaPlayerManager;
const DCDPortalViewManager = NativeModules.DCDPortalViewManager;
const nativeEventEmitter = new NativeEventEmitter(MediaPlayerManager);
const set = new Set();
const memoResult = react.memo(function(paused) {
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
    const layoutEffect = merged.useLayoutEffect(() => {
      if (null != merged.portal) {
        MediaPlayerManager.toggle(tmp.portal, !paused);
      }
    }, items);
    const items1 = [merged.portal, muted];
    const layoutEffect1 = merged.useLayoutEffect(() => {
      if (null != merged.portal) {
        MediaPlayerManager.setMuted(tmp.portal, muted);
      }
    }, items1);
    const items2 = [onLoad, merged.portal];
    const layoutEffect2 = merged.useLayoutEffect(() => {
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
        const obj = paused(onLoad[4]);
        const tmp3 = onLoad;
        if (obj.isAndroid()) {
          const obj2 = muted(tmp3[6]);
          obj2.unregisterView(portal.portal);
        } else {
          DCDPortalViewManager.unregisterView(portal.portal);
        }
        set.add(portal.portal);
      };
    }, items2);
    const items3 = [onLoad, merged.portal];
    const callback = merged.useCallback((nativeEvent) => {
      if (merged.portal === nativeEvent.nativeEvent.portal) {
        if (onLoad != null) {
          tmp();
        }
      }
    }, items3);
    let obj = paused(onLoad[4]);
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
});
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
      let closure_1 = arg0;
      let closure_2 = arg1;
      let closure_3 = arg2;
      const items = [closure_0, arg1, arg0, arg2];
      const effect = react.useEffect(() => {
        closure_0 = closure_1_9.addListener("MediaPlayerProgress", (duration) => {
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
        closure_1 = closure_1_9.addListener("MediaPlayerDownloadProgress", (id) => {
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
        closure_2 = closure_1_9.addListener("MediaPlayerPause", (id) => {
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
    }
  };
}
export const markPortalAlive = function markPortalAlive(portal) {
  set.delete(portal);
};
export const isPortalExpired = function isPortalExpired(portal) {
  return set.has(portal);
};
