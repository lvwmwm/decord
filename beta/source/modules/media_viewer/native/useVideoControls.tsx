// Module ID: 7710
// Function ID: 7711
// Name: useVideoControls
// Dependencies: [32, 19, 4825, 21, 560, 1248, 7711, 4836, 504, 7712, 7720, 7713, 7708, 7721, 2]
// Exports: default, initVideoStateStore, setMuted, setPausedState, setVideoStateControls, toggleMuted, tryPauseCurrentVideo, unpauseCurrentVideoIfNeeded

// Module 7710 (useVideoControls)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 1248 */;
import useMediaViewerSources from "useMediaViewerSources" /* 7708 */;
import MediaPlayerMuteManager from "MediaPlayerMuteManager" /* 7711 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import module_560 from "module_560" /* 560 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let _slicedToArray = _slicedToArray_mod;
const jsx = Fragment.jsx;
const useVideoStateStore = module_560.create(() => ({ controls: "flex", paused: true }));
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
export const initVideoStateStore = function initVideoStateStore() {
  let state;
  const obj = react_native;
  obj.batchUpdates(() => {
    state.setState({ controls: "flex", paused: true });
  });
};
export const setMuted = function setMuted(isMuted) {
  _require = isMuted;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const useMediaPlayerMutedStore = MediaPlayerMuteManager.useMediaPlayerMutedStore;
    const obj = { isMuted };
    useMediaPlayerMutedStore.setState(obj);
  });
};
export const toggleMuted = function toggleMuted() {
  const obj = react_native;
  obj.batchUpdates(() => {
    const useMediaPlayerMutedStore = require("MediaPlayerMuteManager").useMediaPlayerMutedStore;
    useMediaPlayerMutedStore.setState((isMuted) => ({ isMuted: !isMuted.isMuted }));
  });
};
export const setVideoStateControls = function setVideoStateControls(videoControls) {
  let controls;
  _require = videoControls;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { controls };
    return obj.setState(obj);
  });
};
export const setPausedState = function setPausedState(paused) {
  _require = paused;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { paused };
    return obj.setState(obj);
  });
};
export const tryPauseCurrentVideo = function tryPauseCurrentVideo() {
  const controls = obj.getState().controls;
  if (controls != null) {
    controls.pause(true);
  }
};
export const unpauseCurrentVideoIfNeeded = function unpauseCurrentVideoIfNeeded() {
  if (!obj.getState().paused) {
    const controls = obj.getState().controls;
    if (controls != null) {
      controls.pause(false);
    }
  }
};
