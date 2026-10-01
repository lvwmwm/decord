// Module ID: 16346
// Function ID: 16347
// Name: useVibegrationsRevealedText
// Dependencies: [32, 19, 4825, 504, 16347, 16348, 2]
// Exports: useVibegrationsRevealedText

// Module 16346 (useVibegrationsRevealedText)
import VibegrationsStreamReveal from "VibegrationsStreamReveal" /* 16347 */;
import vibegrationsPageVisibility from "vibegrationsPageVisibility" /* 16348 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, target;

let react = react_mod;
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsRevealedText.tsx");

export const useVibegrationsRevealedText = function useVibegrationsRevealedText(source, streaming) {
  let _undefined;
  let arr2;
  let closure_3;
  let length;
  let tmp4;
  _require = source;
  streaming = streaming.streaming;
  dependencyMap = undefined;
  let obj4;
  react = undefined;
  let ref;
  let closure_5;
  let closure_6;
  let tmp = _require;
  let obj = require("get initialized");
  const items = [ref];
  if (streaming) {
    streaming = !obj.useStateFromStores(items, () => ref.useReducedMotion);
  }
  let obj2 = react;
  const tmp3 = obj4(react.useState(() => ({ target, length: target.length })), 2);
  [arr2, tmp4] = tmp3;
  dependencyMap = tmp4;
  obj4 = arr2;
  let arr3 = arr2;
  if (arr2.target !== source) {
    let obj3 = { target: source, length };
    if (streaming) {
      let tmpResult = tmp(16347);
      length = tmpResult.reconcileRevealedLength(arr2.target, source, arr2.length);
    } else {
      length = source.length;
    }
    obj4 = obj3;
    arr3 = obj3;
  }
  const tmp5 = streaming || arr3.length === source.length;
  if (!tmp5) {
    obj4 = { target: source, length: source.length };
    arr3 = obj4;
  }
  if (arr3 !== arr2) {
    tmp4(arr3);
  }
  react = tmp7;
  ref = obj2.useRef(arr3);
  const layoutEffect = obj2.useLayoutEffect(() => {
    ref.current = obj4;
  });
  closure_5 = obj2.useRef(0);
  closure_6 = obj2.useRef(0);
  const items1 = [streaming && arr3.length < source.length];
  const effect = obj2.useEffect(() => {
    const tmp = closure_3;
    if (tmp) {
      ref3.current = 0;
      const _requestAnimationFrame = requestAnimationFrame;
      function step(current) {
        let REVEAL_FRAME_MS;
        if (0 === ref3.current) {
          REVEAL_FRAME_MS = VibegrationsStreamReveal.REVEAL_FRAME_MS;
        } else {
          REVEAL_FRAME_MS = current - tmp.current;
        }
        if (REVEAL_FRAME_MS >= VibegrationsStreamReveal.REVEAL_FRAME_MS) {
          ref3.current = current;
          current = ref.current;
          const obj3 = { target: null, revealed: null, elapsedMs: REVEAL_FRAME_MS };
          ({ target: obj2.target, length: obj2.revealed } = current);
          const obj = VibegrationsStreamReveal;
          const nextRevealLengthResult = obj.nextRevealLength(obj3);
          if (nextRevealLengthResult !== current.length) {
            const obj5 = { target: current.target, length: nextRevealLengthResult };
            c1(obj5);
          }
        }
        closure_5.current = requestAnimationFrame(step);
      }
      ref2.current = requestAnimationFrame(step);
      return () => cancelAnimationFrame(ref2.current);
    }
  }, items1);
  const items2 = [streaming && arr3.length < source.length];
  const effect1 = obj2.useEffect(() => {
    if (closure_3) {
      let obj = vibegrationsPageVisibility;
      const tmp = require;
      if (obj.isPageHidden()) {
        target = ref.current.target;
        let obj2 = { target, length: target.length };
        _undefined(obj2);
      }
      function flushIfHidden() {
        const obj = closure_0(c1[5]);
        if (obj.isPageHidden()) {
          target = ref.current.target;
          const obj2 = { target, length: target.length };
          _undefined(obj2);
        }
      }
      const tmpResult = tmp(16348);
      return tmpResult.subscribePageVisibility(flushIfHidden);
    }
  }, items2);
  const bound = Math.min(arr3.length, source.length);
  let substr = source;
  if (bound < source.length) {
    substr = source.slice(0, bound);
  }
  let obj5 = { text: substr, revealing: streaming };
  if (streaming) {
    streaming = bound < source.length;
  }
  return obj5;
};
