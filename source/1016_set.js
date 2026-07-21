// Module ID: 1016
// Function ID: 11052
// Name: set
// Dependencies: []

// Module 1016 (set)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_2 = -1;
const set = new Set();
function onVisibilityUpdate(type) {
  let tmp = "pagehide" === type.type;
  if (!tmp) {
    let visibilityState;
    const _document = arg1(arg6[0]).WINDOW.document;
    if (null != _document) {
      visibilityState = _document.visibilityState;
    }
    tmp = "hidden" === visibilityState;
  }
  if (tmp) {
    if (closure_2 > -1) {
      if ("visibilitychange" === type.type) {
        for (const item10022 of closure_3) {
          let item10022Result = item10022();
        }
      }
      const _isFinite = isFinite;
      if (!isFinite(closure_2)) {
        let num3 = 0;
        if ("visibilitychange" === type.type) {
          num3 = type.timeStamp;
        }
        closure_2 = num3;
        arg1(arg6[1]).removePageListener("prerenderingchange", onVisibilityUpdate, true);
        const obj = arg1(arg6[1]);
      }
    }
  }
}
arg5.getVisibilityWatcher = function getVisibilityWatcher() {
  if (callback(arg6[0]).WINDOW.document) {
    if (closure_2 < 0) {
      const callback = callback(arg6[2]).getActivationStart();
      let startTime;
      if (!callback(arg6[0]).WINDOW.document.prerendering) {
        const _globalThis = globalThis;
        const _performance = performance;
        const entriesByType = _performance.getEntriesByType("visibility-state");
        const first = entriesByType.filter((name) => {
          let tmp = "hidden" === name.name;
          if (tmp) {
            tmp = name.startTime > closure_0;
          }
          return tmp;
        })[0];
        if (null != first) {
          startTime = first.startTime;
        }
      }
      if (null == startTime) {
        const _document = callback(arg6[0]).WINDOW.document;
        let visibilityState;
        if (null != _document) {
          visibilityState = _document.visibilityState;
        }
        if ("hidden" !== visibilityState) {
          let num = Infinity;
        } else {
          const _document2 = callback(arg6[0]).WINDOW.document;
          num = 0;
          if (null != _document2) {
            num = 0;
          }
        }
        startTime = num;
      }
      closure_2 = startTime;
      let obj = callback(arg6[1]);
      obj.addPageListener("visibilitychange", onVisibilityUpdate, true);
      const obj5 = callback(arg6[2]);
      callback(arg6[1]).addPageListener("pagehide", onVisibilityUpdate, true);
      const obj2 = callback(arg6[1]);
      callback(arg6[1]).addPageListener("prerenderingchange", onVisibilityUpdate, true);
      const obj3 = callback(arg6[1]);
    }
  }
  obj = {};
  Object.defineProperty(obj, "firstHiddenTime", { get: () => startTime, set: undefined });
  obj.onHidden = function onHidden(arg0) {
    set.add(arg0);
  };
  return obj;
};
