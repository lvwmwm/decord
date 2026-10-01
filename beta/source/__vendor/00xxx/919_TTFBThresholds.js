// Module ID: 919
// Function ID: 920
// Name: TTFBThresholds
// Dependencies: [904, 903, 909, 912, 908, 907]
// Exports: onTTFB

// Module 919 (TTFBThresholds)
import _mod908 from "module_908" /* 908 */;

let dependencyMap;

let tmp;
const _mod907 = tmp(907);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let items = [800, 1800];
function whenReady(arg0) {

}

export const TTFBThresholds = items;
export const onTTFB = (arg0) => {
  let closure_1;
  const f72298 = () => {
    let tmp = closure_0;
    if (typeof closure_2_3 === "function") {
      closure_0 = tmp;
      let tmp2 = closure_2_0;
      let tmp3 = closure_2_1;
      let _document = closure_2_0(closure_2_1[0]).WINDOW.document;
      let tmp4 = null;
      let prerendering;
      if (_document != null) {
        prerendering = _document.prerendering;
      }
      if (prerendering) {
        let tmp2Result = tmp2(tmp3[1]);
        let whenActivatedResult = tmp2Result.whenActivated(f72298);
      } else {
        let _document2 = tmp2(tmp3[0]).WINDOW.document;
        let readyState;
        if (_document2 != null) {
          readyState = _document2.readyState;
        }
        let str = "complete";
        if ("complete" !== readyState) {
          let tmp9 = globalThis;
          let flag = true;
          let str2 = "load";
          let listener = globalThis.addEventListener("load", f72299, true);
        } else {
          let tmp7 = globalThis;
          let _setTimeout = setTimeout;
          let timerId = setTimeout(tmp);
        }
      }
    } else {
      let str3 = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  };
  const f72299 = () => {
    let tmp = closure_1_0;
    if (typeof closure_2_3 === "function") {
      let closure_0 = tmp;
      let tmp2 = closure_0;
      let tmp3 = closure_2_1;
      let _document = closure_0(closure_2_1[0]).WINDOW.document;
      let tmp4 = null;
      let prerendering;
      if (_document != null) {
        prerendering = _document.prerendering;
      }
      if (prerendering) {
        let tmp2Result = tmp2(tmp3[1]);
        let whenActivatedResult = tmp2Result.whenActivated(f72298);
      } else {
        let _document2 = tmp2(tmp3[0]).WINDOW.document;
        let readyState;
        if (_document2 != null) {
          readyState = _document2.readyState;
        }
        let str = "complete";
        if ("complete" !== readyState) {
          let tmp9 = globalThis;
          let flag = true;
          let str2 = "load";
          let listener = globalThis.addEventListener("load", f72299, true);
        } else {
          let tmp7 = globalThis;
          let _setTimeout = setTimeout;
          let timerId = setTimeout(tmp);
        }
      }
    } else {
      let str3 = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  };
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let metric;
  let tmp = metric;
  const obj2 = metric(909);
  metric = obj2.initMetric("TTFB");
  const obj3 = metric(912);
  dependencyMap = obj3.bindReporter(arg0, metric, items, obj.reportAllChanges);
  if (typeof whenReady === "function") {
    const fn = () => {
      const obj = _mod908;
      const navigationEntry = obj.getNavigationEntry();
      if (navigationEntry) {
        const _Math = Math;
        const responseStart = navigationEntry.responseStart;
        const tmpResult = _mod907;
        metric.value = max(responseStart - tmpResult.getActivationStart(), 0);
        items = [navigationEntry];
        metric.entries = items;
        closure_1(true);
      }
    };
    const _document = tmp(904).WINDOW.document;
    let prerendering;
    if (_document != null) {
      prerendering = _document.prerendering;
    }
    if (prerendering) {
      let tmpResult = tmp(903);
      tmpResult.whenActivated(f72298);
    } else {
      const _document2 = tmp(904).WINDOW.document;
      let readyState;
      if (_document2 != null) {
        readyState = _document2.readyState;
      }
      if ("complete" !== readyState) {
        const listener = globalThis.addEventListener("load", f72299, true);
      } else {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(fn);
      }
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
