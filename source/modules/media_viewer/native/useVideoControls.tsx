// Module ID: 8326
// Function ID: 65602
// Name: useVideoControls
// Dependencies: [57, 31, 4122, 33, 621, 682, 8327, 4130, 566, 8319, 8328, 8320, 8329, 2]
// Exports: default, initVideoStateStore, setMuted, setPausedState, setVideoStateControls, toggleMuted, tryPauseCurrentVideo, unpauseCurrentVideoIfNeeded

// Module 8326 (useVideoControls)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import keys from "keys";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
keys = keys.create(() => ({ controls: undefined, paused: false }));
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ slider: { marginBottom: 8 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/media_viewer/native/useVideoControls.tsx");

export default function useVideoControls(arg0, portal, controls) {
  const _require = arg0;
  const importDefault = controls;
  let obj = _require(stateFromStores[8]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => tmp6.useReducedMotion);
  const tmp3 = callback(state.useState(false), 2);
  callback = tmp4;
  const MediaViewerSourcesStore = _require(stateFromStores[9]).MediaViewerSourcesStore;
  state = MediaViewerSourcesStore.useState((spoilerIndexes) => {
    spoilerIndexes = spoilerIndexes.spoilerIndexes;
    return spoilerIndexes.has(closure_0);
  });
  const tmp6 = importDefault(stateFromStores[10])(arg0);
  _isNativeReflectConstruct = tmp6;
  let result = null != controls;
  if (result) {
    result = _require(stateFromStores[11]).supportOverlayVideoControls(portal);
    const obj2 = _require(stateFromStores[11]);
  }
  let videoURI = portal.portal;
  if (null == videoURI) {
    videoURI = portal.videoURI;
  }
  const tmp10 = importDefault(stateFromStores[10])(videoURI);
  const keys = tmp10;
  const items1 = [controls, videoURI, stateFromStores, tmp10, state, tmp6, arg0];
  const effect = state.useEffect(() => {
    if (_isNativeReflectConstruct !== closure_0) {
      if (null != _isNativeReflectConstruct) {
        if (null != videoURI) {
          if (closure_7 !== videoURI) {
            controls.seek(0);
            let tmp8 = state;
            if (!state) {
              tmp8 = stateFromStores;
            }
            controls.pause(tmp8);
            tmp4(tmp8);
          }
        }
      }
    }
  }, items1);
  [][0] = arg0;
  if (result) {
    obj = { style: tmp.slider, controls, paused: tmp3[0], setPaused: tmp4, onPlayPress: tmp12 };
    return videoURI(importDefault(stateFromStores[12]), obj, videoURI);
  }
  tmp = callback2();
};
export const useVideoStateStore = keys;
export const initVideoStateStore = function initVideoStateStore() {
  require(682) /* batchUpdates */.batchUpdates(() => {
    outer1_7.setState({ controls: undefined, paused: false });
  });
};
export const setMuted = function setMuted(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    const useMediaPlayerMutedStore = callback(outer1_2[6]).useMediaPlayerMutedStore;
    useMediaPlayerMutedStore.setState({ isMuted: callback });
  });
};
export const toggleMuted = function toggleMuted() {
  require(682) /* batchUpdates */.batchUpdates(() => {
    const useMediaPlayerMutedStore = outer1_0(outer1_2[6]).useMediaPlayerMutedStore;
    useMediaPlayerMutedStore.setState((isMuted) => ({ isMuted: !isMuted.isMuted }));
  });
};
export const setVideoStateControls = function setVideoStateControls(videoControls) {
  const _require = videoControls;
  _require(682).batchUpdates(() => outer1_7.setState({ controls: closure_0 }));
};
export const setPausedState = function setPausedState(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_7.setState({ paused: closure_0 }));
};
export const tryPauseCurrentVideo = function tryPauseCurrentVideo() {
  const controls = keys.getState().controls;
  if (null != controls) {
    controls.pause(true);
  }
};
export const unpauseCurrentVideoIfNeeded = function unpauseCurrentVideoIfNeeded() {
  let paused = keys.getState().paused;
  if (!paused) {
    const controls = keys.getState().controls;
    paused = null == controls;
    const obj = controls;
  }
  if (!paused) {
    obj.pause(false);
  }
};
