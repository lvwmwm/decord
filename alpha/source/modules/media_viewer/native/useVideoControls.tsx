// Module ID: 8828
// Function ID: 8829
// Name: useVideoControls
// Dependencies: [32, 19, 5010, 21, 560, 1260, 8829, 5009, 504, 8830, 6726, 8831, 8826, 8838, 2]
// Exports: default, initVideoStateStore, setMuted, setPausedState, setVideoStateControls, toggleMuted, tryPauseCurrentVideo, unpauseCurrentVideoIfNeeded

// Module 8828 (useVideoControls)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 1260 */;
import useMediaViewerSources from "useMediaViewerSources" /* 8826 */;
import MediaPlayerMuteManager from "MediaPlayerMuteManager" /* 8829 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import module_560 from "module_560" /* 560 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let _slicedToArray = _slicedToArray_mod;
const jsx = Fragment.jsx;
const useVideoStateStore = module_560.create(() => ({ controls: "flexDirection", paused: true }));
let closure_8 = createStyles.createStyles({ slider: { marginBottom: 8 } });
let result = size.fileFinishedImporting("modules/media_viewer/native/useVideoControls.tsx");

export default function useVideoControls(index, portal, controls) {
  let closure_3;
  let mediaItemHasSpoiler;
  let stateFromStores;
  let useReducedMotion;
  _require = index;
  importDefault = controls;
  const tmp3 = stateFromStores;
  const tmp = closure_8();
  let obj = require("get initialized");
  const items = [useReducedMotion];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = _slicedToArray(mediaItemHasSpoiler.useState(false), 2);
  _slicedToArray = tmp7;
  const first = tmp5[0];
  const obj2 = mediaItemHasSpoiler;
  const obj3 = require("useMediaItemHasSpoiler");
  mediaItemHasSpoiler = obj3.useMediaItemHasSpoiler(index);
  const tmp10 = require("usePrevious")(index);
  useReducedMotion = tmp10;
  let result = null != controls;
  const tmp2 = _require;
  if (result) {
    const tmp2Result = tmp2(tmp3[11]);
    result = tmp2Result.supportOverlayVideoControls(portal);
  }
  let videoURI = portal.portal;
  if (videoURI == null) {
    videoURI = portal.videoURI;
  }
  const tmp12 = require("usePrevious")(videoURI);
  let closure_7 = tmp12;
  const items1 = [controls, videoURI, stateFromStores, tmp12, mediaItemHasSpoiler, tmp10, index];
  const effect = obj2.useEffect(() => {
    if (useReducedMotion !== index) {
      if (null != tmp) {
        if (null != videoURI) {
          if (closure_7 !== tmp3) {
            controls.seek(0);
            controls.pause(mediaItemHasSpoiler || stateFromStores);
            closure_3(mediaItemHasSpoiler || stateFromStores);
          }
        }
      }
    }
  }, items1);
  [][0] = index;
  if (result) {
    const obj4 = { style: tmp.slider, controls, paused: first, setPaused: tmp5[1], onPlayPress: tmp14 };
    return videoURI(require("MediaSlider"), obj4, videoURI);
  }
};
export { useVideoStateStore };
export function initVideoStateStore() {
  let state;
  const obj = react_native;
  obj.batchUpdates(() => {
    state.setState({ controls: "flexDirection", paused: true });
  });
}
export function setMuted(isMuted) {
  _require = isMuted;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const useMediaPlayerMutedStore = MediaPlayerMuteManager.useMediaPlayerMutedStore;
    const obj = { isMuted };
    useMediaPlayerMutedStore.setState(obj);
  });
}
export function toggleMuted() {
  const obj = react_native;
  obj.batchUpdates(() => {
    const useMediaPlayerMutedStore = require("MediaPlayerMuteManager").useMediaPlayerMutedStore;
    useMediaPlayerMutedStore.setState((isMuted) => ({ isMuted: !isMuted.isMuted }));
  });
}
export function setVideoStateControls(videoControls) {
  let controls;
  _require = videoControls;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { controls };
    return obj.setState(obj);
  });
}
export function setPausedState(paused) {
  _require = paused;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { paused };
    return obj.setState(obj);
  });
}
export function tryPauseCurrentVideo() {
  const controls = obj.getState().controls;
  if (controls != null) {
    controls.pause(true);
  }
}
export function unpauseCurrentVideoIfNeeded() {
  if (!obj.getState().paused) {
    const controls = obj.getState().controls;
    if (controls != null) {
      controls.pause(false);
    }
  }
}
