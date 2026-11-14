// Module ID: 5434
// Function ID: 5435
// Name: useRivePlayback
// Dependencies: [19, 17, 2]
// Exports: useRivePlayback

// Module 5434 (useRivePlayback)
import react_native from "react-native" /* 17 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const AppState = react_native.AppState;
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/useRivePlayback.tsx");

export function useRivePlayback(riveViewRef, isReady) {
  let callback5;
  let items9;
  react = riveViewRef;
  isReady = isReady.isReady;
  const appStatePlaybackEnabled = isReady.appStatePlaybackEnabled;
  const shouldShortLoopForReducedMotion = isReady.shouldShortLoopForReducedMotion;
  let closure_4 = react.useRef(false);
  let closure_5 = react.useRef("background" === isReady.currentState);
  let closure_6 = react.useRef(false);
  const ref = react.useRef(false);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(false);
  let closure_10 = react.useRef(true);
  const effect = react.useEffect(() => {
    closure_10.current = true;
    return () => {
      closure_1_10.current = false;
    };
  }, []);
  const callback = react.useCallback(() => {
    if (null != ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, []);
  const items = [callback, riveViewRef];
  const callback1 = react.useCallback(() => {
    callback();
    const obj = riveViewRef;
    if (riveViewRef != null) {
      obj.pause();
    }
    closure_4.current = false;
  }, items);
  const items1 = [callback, shouldShortLoopForReducedMotion, callback1];
  const callback2 = react.useCallback(() => {
    callback();
    const tmp2 = shouldShortLoopForReducedMotion;
    if (tmp2) {
      const _setTimeout = setTimeout;
      ref2.current = setTimeout(() => callback1(), 5000);
    }
  }, items1);
  const items2 = [riveViewRef, callback2];
  const callback3 = react.useCallback(() => {
    const obj = riveViewRef;
    if (riveViewRef != null) {
      obj.play();
    }
    closure_4.current = true;
    callback2();
  }, items2);
  const items3 = [appStatePlaybackEnabled, riveViewRef, callback2];
  const items4 = [isReady];
  const callback4 = react.useCallback(() => {
    if (!ref3.current) {
      tmp.current = true;
      let tmp2 = globalThis;
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(() => {
        closure_1_9.current = false;
        if (ref3.current) {
          if (!ref2.current) {
            const tmp2 = appStatePlaybackEnabled;
            if (tmp2) {
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
  const items6 = [isReady, callback1];
  const effect3 = react.useEffect(() => {
    const current = isReady && ref.current;
    if (current) {
      callback1();
    }
  }, items6);
  const items7 = [appStatePlaybackEnabled, isReady, callback3, callback1];
  const effect4 = react.useEffect(() => {
    const tmp = appStatePlaybackEnabled;
    if (tmp) {
      let closure_0 = isReady.addEventListener("change", (event) => {
        if ("background" === event) {
          closure_1_5.current = true;
          const current2 = isReady && ref.current;
          if (current2) {
            ref2.current = true;
            callback1();
          }
        } else if ("active" === event) {
          closure_1_5.current = false;
          const current = isReady && ref2.current;
          if (current) {
            ref2.current = false;
            if (!ref3.current) {
              callback3();
            }
          }
        }
      });
      return () => closure_0.remove();
    }
  }, items7);
  const items8 = [callback1];
  let obj = {
    play: react.useCallback(() => {
      ref.current = false;
      callback3();
    }, items9),
    pause: callback5,
    playIfNeeded: callback4
  };
  items9 = [callback3];
  callback5 = react.useCallback(() => {
    ref.current = true;
    callback1();
  }, items8);
  return obj;
}
