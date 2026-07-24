// Module ID: 3907
// Function ID: 32314
// Name: useRivePlayback
// Dependencies: [31, 27, 2]
// Exports: useRivePlayback

// Module 3907 (useRivePlayback)
import result from "result";
import { AppState } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/useRivePlayback.tsx");

export const useRivePlayback = function useRivePlayback(riveViewRef, isReady) {
  const React = riveViewRef;
  isReady = isReady.isReady;
  const appStatePlaybackEnabled = isReady.appStatePlaybackEnabled;
  const shouldShortLoopForReducedMotion = isReady.shouldShortLoopForReducedMotion;
  let closure_4 = React.useRef(false);
  let closure_5 = React.useRef("background" === isReady.currentState);
  let closure_6 = React.useRef(false);
  let closure_7 = React.useRef(null);
  let closure_8 = React.useRef(false);
  let closure_9 = React.useRef(true);
  const effect = React.useEffect(() => {
    closure_9.current = true;
    return () => {
      outer1_9.current = false;
    };
  }, []);
  const callback = React.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, []);
  const items = [callback, riveViewRef];
  const pause = React.useCallback(() => {
    callback();
    if (null != result) {
      result.pause();
    }
    closure_4.current = false;
  }, items);
  const items1 = [callback, shouldShortLoopForReducedMotion, pause];
  const callback2 = React.useCallback(() => {
    callback();
    if (shouldShortLoopForReducedMotion) {
      const _setTimeout = setTimeout;
      closure_7.current = setTimeout(() => outer1_11(), 5000);
    }
  }, items1);
  const items2 = [riveViewRef, callback2];
  const play = React.useCallback(() => {
    if (null != result) {
      result.play();
    }
    closure_4.current = true;
    callback2();
  }, items2);
  const items3 = [appStatePlaybackEnabled, riveViewRef, callback2];
  const items4 = [isReady];
  const playIfNeeded = React.useCallback(() => {
    if (!ref2.current) {
      ref2.current = true;
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(() => {
        outer1_8.current = false;
        if (outer1_9.current) {
          if (outer1_2) {
            if (outer1_5.current) {
              outer1_6.current = true;
            }
          }
          if (null != outer1_0) {
            outer1_0.playIfNeeded();
          }
          outer1_4.current = true;
          outer1_12();
        }
      });
    }
  }, items3);
  const effect1 = React.useEffect(() => {
    if (isReady) {
      closure_4.current = true;
    }
  }, items4);
  const items5 = [isReady, callback2, callback];
  const effect2 = React.useEffect(() => {
    if (isReady) {
      callback2();
      return callback;
    }
  }, items5);
  const items6 = [appStatePlaybackEnabled, isReady, play, pause];
  const effect3 = React.useEffect(() => {
    if (appStatePlaybackEnabled) {
      let result = isReady.addEventListener("change", (arg0) => {
        if ("background" === arg0) {
          outer1_5.current = true;
          let current2 = outer1_1;
          if (outer1_1) {
            current2 = outer1_4.current;
          }
          if (current2) {
            outer1_6.current = true;
            outer1_11();
          }
        } else if ("active" === arg0) {
          outer1_5.current = false;
          let current = outer1_1;
          if (outer1_1) {
            current = outer1_6.current;
          }
          if (current) {
            outer1_6.current = false;
            outer1_13();
          }
        }
      });
      return () => result.remove();
    }
  }, items6);
  return { play, pause, playIfNeeded };
};
