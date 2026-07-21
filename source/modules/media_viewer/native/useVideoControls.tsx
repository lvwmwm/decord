// Module ID: 8274
// Function ID: 65312
// Name: useVideoControls
// Dependencies: []
// Exports: default, initVideoStateStore, setMuted, setPausedState, setVideoStateControls, toggleMuted, tryPauseCurrentVideo, unpauseCurrentVideoIfNeeded

// Module 8274 (useVideoControls)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = obj.create(() => ({ controls: undefined, paused: false }));
let closure_8 = arg1(dependencyMap[7]).createStyles({ slider: { marginBottom: 8 } });
const obj2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/media_viewer/native/useVideoControls.tsx");

export default function useVideoControls(arg0, portal, controls) {
  portal = arg0;
  const importDefault = controls;
  let obj = portal(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => tmp6.useReducedMotion);
  const dependencyMap = stateFromStores;
  const tmp3 = callback(React.useState(false), 2);
  const callback = tmp4;
  const MediaViewerSourcesStore = portal(dependencyMap[9]).MediaViewerSourcesStore;
  const state = MediaViewerSourcesStore.useState((spoilerIndexes) => {
    spoilerIndexes = spoilerIndexes.spoilerIndexes;
    return spoilerIndexes.has(spoilerIndexes);
  });
  const React = state;
  const tmp6 = importDefault(dependencyMap[10])(arg0);
  closure_5 = tmp6;
  let result = null != controls;
  if (result) {
    result = portal(dependencyMap[11]).supportOverlayVideoControls(portal);
    const obj2 = portal(dependencyMap[11]);
  }
  let videoURI = portal.portal;
  if (null == videoURI) {
    videoURI = portal.videoURI;
  }
  const jsx = videoURI;
  const tmp10 = importDefault(dependencyMap[10])(videoURI);
  obj = tmp10;
  const items1 = [controls, videoURI, stateFromStores, tmp10, state, tmp6, arg0];
  const effect = React.useEffect((arg0, arg1, self) => {
    if (tmp6 !== arg0) {
      if (null != tmp6) {
        if (null != videoURI) {
          if (tmp10 !== videoURI) {
            self.seek(0);
            let tmp8 = state;
            if (!state) {
              tmp8 = stateFromStores;
            }
            self.pause(tmp8);
            tmp4(tmp8);
          }
        }
      }
    }
  }, items1);
  [][0] = arg0;
  if (result) {
    obj = { style: tmp.slider, controls, paused: tmp3[0], setPaused: tmp4, onPlayPress: tmp12 };
    return jsx(importDefault(dependencyMap[12]), obj, videoURI);
  }
  const tmp = callback2();
};
export const useVideoStateStore = obj;
export const initVideoStateStore = function initVideoStateStore() {
  arg1(dependencyMap[5]).batchUpdates(() => {
    state.setState({ controls: undefined, paused: false });
  });
};
export const setMuted = function setMuted(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[5]).batchUpdates(() => {
    const useMediaPlayerMutedStore = arg0(closure_2[6]).useMediaPlayerMutedStore;
    useMediaPlayerMutedStore.setState({ isMuted: arg0 });
  });
};
export const toggleMuted = function toggleMuted() {
  arg1(dependencyMap[5]).batchUpdates(() => {
    const useMediaPlayerMutedStore = callback(closure_2[6]).useMediaPlayerMutedStore;
    useMediaPlayerMutedStore.setState((isMuted) => ({ isMuted: !isMuted.isMuted }));
  });
};
export const setVideoStateControls = function setVideoStateControls(videoControls) {
  const arg1 = videoControls;
  arg1(dependencyMap[5]).batchUpdates(() => state.setState({ controls: arg0 }));
};
export const setPausedState = function setPausedState(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[5]).batchUpdates(() => state.setState({ paused: arg0 }));
};
export const tryPauseCurrentVideo = function tryPauseCurrentVideo() {
  const controls = obj.getState().controls;
  if (null != controls) {
    controls.pause(true);
  }
};
export const unpauseCurrentVideoIfNeeded = function unpauseCurrentVideoIfNeeded() {
  let paused = obj.getState().paused;
  if (!paused) {
    const controls = obj.getState().controls;
    paused = null == controls;
  }
  if (!paused) {
    obj.pause(false);
  }
};
