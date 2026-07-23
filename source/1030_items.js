// Module ID: 1030
// Function ID: 11101
// Name: items
// Dependencies: [1015, 1014, 1020, 1023, 1019, 1018]

// Module 1030 (items)
const require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let items = [800, 1800];
function whenReady(id, arg1) {
  const _require = id;
  const _document = _require(1015).WINDOW.document;
  if (null != _document) {
    if (_document.prerendering) {
      _require(1014).whenActivated(() => {
        outer1_3(closure_0);
      });
      const obj = _require(1014);
    }
  }
  const _document2 = _require(1015).WINDOW.document;
  let readyState;
  if (null != _document2) {
    readyState = _document2.readyState;
  }
  if ("complete" !== readyState) {
    const listener = globalThis.addEventListener("load", () => {
      outer1_3(closure_0);
    }, true);
  } else {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(id);
  }
}
arg5.TTFBThresholds = items;
arg5.onTTFB = function onTTFB(closure_0) {
  if (arguments.length > 1) {
    metric = metric(1020).initMetric("TTFB");
    let obj2 = metric(1023);
    const dependencyMap = obj2.bindReporter(closure_0, metric, items, {}.reportAllChanges);
    whenReady(() => {
      const navigationEntry = metric(1019).getNavigationEntry();
      if (navigationEntry) {
        const _Math = Math;
        metric.value = Math.max(navigationEntry.responseStart - metric(1018).getActivationStart(), 0);
        const items = [navigationEntry];
        metric.entries = items;
        dependencyMap(true);
        const obj2 = metric(1018);
      }
    });
  }
};
