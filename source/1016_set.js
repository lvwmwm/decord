// Module ID: 1016
// Function ID: 11053
// Name: set
// Dependencies: [1015, 1017, 1018]

// Module 1016 (set)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = -1;
const set = new Set();
function onVisibilityUpdate(type) {
  let tmp = "pagehide" === type.type;
  if (!tmp) {
    let visibilityState;
    const _document = require(1015) /* WINDOW */.WINDOW.document;
    if (null != _document) {
      visibilityState = _document.visibilityState;
    }
    tmp = "hidden" === visibilityState;
  }
  if (tmp) {
    if (num3 > -1) {
      if ("visibilitychange" === type.type) {
        for (const item10022 of set) {
          let item10022Result = item10022();
          continue;
        }
      }
      const _isFinite = isFinite;
      if (!isFinite(num3)) {
        num3 = 0;
        if ("visibilitychange" === type.type) {
          num3 = type.timeStamp;
        }
        require(1017) /* addPageListener */.removePageListener("prerenderingchange", onVisibilityUpdate, true);
        const obj = require(1017) /* addPageListener */;
      }
    }
  }
}
arg5.getVisibilityWatcher = function getVisibilityWatcher() {
  if (_require(1015).WINDOW.document) {
    if (startTime < 0) {
      _require = _require(1018).getActivationStart();
      startTime = undefined;
      if (!_require(1015).WINDOW.document.prerendering) {
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
        const _document = _require(1015).WINDOW.document;
        let visibilityState;
        if (null != _document) {
          visibilityState = _document.visibilityState;
        }
        if ("hidden" !== visibilityState) {
          let num = Infinity;
        } else {
          const _document2 = _require(1015).WINDOW.document;
          num = 0;
          if (null != _document2) {
            num = 0;
          }
        }
        startTime = num;
      }
      let obj = _require(1017);
      obj.addPageListener("visibilitychange", onVisibilityUpdate, true);
      const obj5 = _require(1018);
      _require(1017).addPageListener("pagehide", onVisibilityUpdate, true);
      const obj2 = _require(1017);
      _require(1017).addPageListener("prerenderingchange", onVisibilityUpdate, true);
      const obj3 = _require(1017);
    }
  }
  obj = {};
  Object.defineProperty(obj, "firstHiddenTime", { get: () => startTime, set: undefined });
  obj.onHidden = function onHidden(arg0) {
    outer1_3.add(arg0);
  };
  return obj;
};
