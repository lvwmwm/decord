// Module ID: 4612
// Function ID: 4613
// Name: useRivePlayback
// Dependencies: [19, 17, 2]
// Exports: useRivePlayback

// Module 4612 (useRivePlayback)
import react_native from "react-native" /* 17 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const AppState = react_native.AppState;
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/useRivePlayback.tsx");

export const useRivePlayback = function useRivePlayback(riveViewRef, isReady) {
  react = riveViewRef;
  isReady = isReady.isReady;
  const appStatePlaybackEnabled = isReady.appStatePlaybackEnabled;
  const shouldShortLoopForReducedMotion = isReady.shouldShortLoopForReducedMotion;
  let closure_4 = react.useRef(false);
  let closure_5 = react.useRef("background" === isReady.currentState);
  let closure_6 = react.useRef(false);
  const ref = react.useRef(null);
  const ref2 = react.useRef(false);
  let closure_9 = react.useRef(true);
  const effect = react.useEffect(() => {
    closure_9.current = true;
    return () => {
      closure_1_9.current = false;
    };
  }, []);
  const callback = react.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, []);
  const items = [callback, riveViewRef];
  const pause = react.useCallback(() => {
    callback();
    const obj = riveViewRef;
    if (riveViewRef != null) {
      obj.pause();
    }
    closure_4.current = false;
  }, items);
  const items1 = [callback, shouldShortLoopForReducedMotion, pause];
  const callback2 = react.useCallback(() => {
    callback();
    const tmp2 = shouldShortLoopForReducedMotion;
    if (tmp2) {
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => pause(), 5000);
    }
  }, items1);
  const items2 = [riveViewRef, callback2];
  const play = react.useCallback(() => {
    const obj = riveViewRef;
    if (riveViewRef != null) {
      obj.play();
    }
    closure_4.current = true;
    callback2();
  }, items2);
  const items3 = [appStatePlaybackEnabled, riveViewRef, callback2];
  const items4 = [isReady];
  const playIfNeeded = react.useCallback(() => {
    let tmp;
    if (!ref2.current) {
      tmp.current = true;
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(() => {
        closure_1_8.current = false;
        if (ref2.current) {
          const tmp = appStatePlaybackEnabled;
          if (tmp) {
            if (ref.current) {
              closure_1_6.current = true;
            }
          }
          const obj = riveViewRef;
          if (riveViewRef != null) {
            obj.playIfNeeded();
          }
          closure_1_4.current = true;
          callback2();
        }
      });
    }
  }, items3);
  const effect1 = react.useEffect(() => {
    const tmp = isReady;
    if (tmp) {
      closure_4.current = true;
    }
  }, items4);
  const items5 = [isReady, callback2, callback];
  const effect2 = react.useEffect(() => {
    if (isReady) {
      callback2();
      return callback;
    }
  }, items5);
  const items6 = [appStatePlaybackEnabled, isReady, play, pause];
  const effect3 = react.useEffect(() => {
    const tmp = appStatePlaybackEnabled;
    if (tmp) {
      let closure_0 = isReady.addEventListener("change", (event) => {
        if ("background" === event) {
          closure_1_5.current = true;
          const current2 = isReady && ref.current;
          if (current2) {
            ref2.current = true;
            pause();
          }
        } else if ("active" === event) {
          closure_1_5.current = false;
          const current = isReady && ref2.current;
          if (current) {
            ref2.current = false;
            play();
          }
        }
      });
      return () => closure_0.remove();
    }
  }, items6);
  return { play, pause, playIfNeeded };
};
