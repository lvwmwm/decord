// Module ID: 8834
// Function ID: 8835
// Name: MediaModalPortal
// Dependencies: [19, 17, 21, 5009, 1376, 8835, 7126, 8836, 2]
// Exports: createPortalControls, isPortalExpired, markPortalAlive

// Module 8834 (MediaModalPortal)
import Fragment from "Fragment" /* 21 */;
import PortalViewNativeComponentDefault from "PortalViewNativeComponent" /* 8835 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5009 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import size from "module_2" /* 2 */;

let duration;

let NativeEventEmitter;
let NativeModules;
let importDefaultResult;
let requireNativeComponent;
({ requireNativeComponent, NativeEventEmitter, NativeModules } = react_native);
const jsx = Fragment.jsx;
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
const memoResult = react.memo(function MediaModalPortal(paused) {
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
  const tmp2 = muted(7126)(() => {
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
        const obj = muted(dependencyMap[7]);
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
  const obj2 = paused(1376);
  const tmp7 = closure_4;
  const tmp8 = closure_6;
  if (obj2.isAndroid()) {
    tmp9 = callback;
  }
  return tmp7(tmp8, obj);
});
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
      let closure_1 = arg0;
      let closure_2 = arg1;
      let closure_3 = arg2;
      const items = [closure_0, arg1, arg0, arg2];
      const effect = react.useEffect(() => {
        closure_0 = closure_1_8.addListener("MediaPlayerProgress", (duration) => {
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
        closure_1 = closure_1_8.addListener("MediaPlayerDownloadProgress", (id) => {
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
        closure_2 = closure_1_8.addListener("MediaPlayerPause", (id) => {
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
export function markPortalAlive(portal) {
  set.delete(portal);
}
export function isPortalExpired(portal) {
  return set.has(portal);
}
