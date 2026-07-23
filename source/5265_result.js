// Module ID: 5265
// Function ID: 45404
// Name: result
// Dependencies: [31]

// Module 5265 (result)
import importDefaultResult from "result";

let tmp3 = "undefined" === typeof window;
if (!tmp3) {
  const _window = window;
  tmp3 = undefined === window.document;
}
if (!tmp3) {
  const _window2 = window;
  tmp3 = undefined === window.document.createElement;
}
let tmp4 = "undefined" !== typeof navigator;
if (tmp4) {
  const _navigator = navigator;
  tmp4 = "ReactNative" === navigator.product;
}
if (tmp3) {
  if (!tmp4) {
    let useLayoutEffect = importDefaultResult.useEffect;
  }
  exports.useIsomorphicLayoutEffect = useLayoutEffect;
}
useLayoutEffect = importDefaultResult.useLayoutEffect;
