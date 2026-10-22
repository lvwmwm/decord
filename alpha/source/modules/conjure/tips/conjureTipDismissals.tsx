// Module ID: 12291
// Function ID: 12292
// Name: conjureTipDismissals
// Dependencies: [19, 510, 558, 576, 2]
// Exports: dismissConjureTip

// Module 12291 (conjureTipDismissals)
import Storage3 from "Storage" /* 510 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function isConjureTipDismissed(dismissal, arg1) {
  dismissal = dismissal.dismissal;
  if (undefined === dismissal) {
    return false;
  } else if ("session" === dismissal) {
    const _HermesInternal = HermesInternal;
    return set.has("" + arg1 + ":" + dismissal.id);
  } else if ("app" === dismissal) {
    const Storage2 = Storage3.Storage;
    const value = Storage2.get(conjureTipDismissals);
    let forever;
    if (value != null) {
      forever = value.forever;
    }
    let app;
    if (value != null) {
      app = value.app;
    }
    if (app == null) {
      app = {};
    }
    let hasItem;
    if (app[arg1] != null) {
      hasItem = obj2.includes(dismissal.id);
    }
    return true === hasItem;
  } else if ("forever" === dismissal) {
    const Storage = Storage3.Storage;
    const value2 = Storage.get(conjureTipDismissals);
    let forever1;
    if (value2 != null) {
      forever1 = value2.forever;
    }
    if (forever1 == null) {
      forever1 = [];
    }
    let app1;
    if (value2 != null) {
      app1 = value2.app;
    }
    return forever1.includes(dismissal.id);
  }
}
function subscribe(arg0) {
  let closure_0 = arg0;
  set1.add(arg0);
  return () => set1.delete(closure_0);
}
const conjureTipDismissals = "conjureTipDismissals";
const set = new Set();
const set1 = new Set();
let closure_6 = 0;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTipDismissalsVersion() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      return closure_1_6;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return react.useSyncExternalStore(subscribe, first);
}) : (function useConjureTipDismissalsVersion() {
  return react.useSyncExternalStore(subscribe, () => closure_1_6);
});
let result = size.fileFinishedImporting("modules/conjure/tips/conjureTipDismissals.tsx");

export { isConjureTipDismissed };
export const dismissConjureTip = function dismissConjureTip(tip, arg1) {
  let app;
  let items;
  let obj4;
  if (null != tip.dismissal) {
    if (!isConjureTipDismissed(tip, arg1)) {
      if ("session" === tip.dismissal) {
        const _HermesInternal = HermesInternal;
        set.add("" + arg1 + ":" + tip.id);
      } else {
        let obj3;
        const Storage2 = Storage3.Storage;
        const value = Storage2.get(conjureTipDismissals);
        let forever;
        const tmp22 = require;
        const tmp24 = conjureTipDismissals;
        if (value != null) {
          forever = value.forever;
        }
        if (forever == null) {
          forever = [];
        }
        const obj = { forever, app };
        app = undefined;
        if (value != null) {
          app = value.app;
        }
        if (app == null) {
          app = {};
        }
        const Storage = tmp22(510).Storage;
        if ("forever" === tip.dismissal) {
          const obj2 = { forever: items };
          const merged = Object.assign(obj);
          items = [];
          items[HermesBuiltin.arraySpread(items, obj.forever, 0)] = tip.id;
          obj3 = obj2;
        } else {
          obj3 = { app: obj4 };
          const merged1 = Object.assign(obj);
          obj4 = {};
          const merged2 = Object.assign(obj.app);
          let items1 = obj.app[arg1];
          if (items1 == null) {
            items1 = [];
          }
          const items2 = [];
          items2[HermesBuiltin.arraySpread(items2, items1, 0)] = tip.id;
          obj4[arg1] = items2;
        }
        const result = set(tmp24, obj3);
      }
      closure_6 = closure_6 + 1;
      const item = set1.forEach((fn) => fn());
    }
  }
};
export const useConjureTipDismissalsVersion = tmp4;
