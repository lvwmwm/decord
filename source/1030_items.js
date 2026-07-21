// Module ID: 1030
// Function ID: 11100
// Name: items
// Dependencies: []

// Module 1030 (items)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = ["Array", "isArray"];
function whenReady(backgroundifyResult, arg1) {
  arg1 = backgroundifyResult;
  const _document = arg1(arg6[0]).WINDOW.document;
  if (null != _document) {
    if (_document.prerendering) {
      arg1(arg6[1]).whenActivated(() => {
        callback(arg0);
      });
      const obj = arg1(arg6[1]);
    }
  }
  const _document2 = arg1(arg6[0]).WINDOW.document;
  let readyState;
  if (null != _document2) {
    readyState = _document2.readyState;
  }
  if ("complete" !== readyState) {
    const listener = globalThis.addEventListener("load", () => {
      callback(arg0);
    }, true);
  } else {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(backgroundifyResult);
  }
}
arg5.TTFBThresholds = items;
arg5.onTTFB = function onTTFB(closure_0) {
  if (arguments.length > 1) {
    const metric = arg1(closure_1[2]).initMetric("TTFB");
    const arg1 = metric;
    const obj2 = arg1(closure_1[3]);
    closure_1 = obj2.bindReporter(closure_0, metric, items, {}.reportAllChanges);
    whenReady(() => {
      const navigationEntry = metric(callback[4]).getNavigationEntry();
      if (navigationEntry) {
        const _Math = Math;
        metric.value = Math.max(navigationEntry.responseStart - metric(callback[5]).getActivationStart(), 0);
        const items = [navigationEntry];
        metric.entries = items;
        callback(true);
        const obj2 = metric(callback[5]);
      }
    });
  }
};
