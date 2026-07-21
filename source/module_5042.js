// Module ID: 5042
// Function ID: 43008
// Dependencies: []

// Module 5042
const importDefaultResult = importDefault(dependencyMap[0]);
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
