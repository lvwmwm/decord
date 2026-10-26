// Module ID: 12337
// Function ID: 12338
// Name: conjureTipDismissals
// Dependencies: [19, 510, 558, 576, 2]
// Exports: dismissConjureTip

// Module 12337 (conjureTipDismissals)
import Storage5 from "Storage" /* 510 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set2, set3;

function isConjureTipDismissed(dismissal, arg1, id) {
  let tmp = id;
  if (id === undefined) {
    tmp = null;
  }
  dismissal = dismissal.dismissal;
  if (undefined === dismissal) {
    return false;
  } else if ("session" === dismissal) {
    const _HermesInternal = HermesInternal;
    return set.has("" + arg1 + ":" + dismissal.id);
  } else if ("anchor" === dismissal) {
    let tmp22 = null != tmp;
    if (tmp22) {
      const Storage3 = Storage5.Storage;
      const value = Storage3.get(conjureTipDismissals);
      let forever;
      if (value != null) {
        forever = value.forever;
      }
      let app;
      if (value != null) {
        app = value.app;
      }
      let anchor;
      if (value != null) {
        anchor = value.anchor;
      }
      if (anchor == null) {
        anchor = {};
      }
      let tmp32;
      if (anchor[arg1] != null) {
        tmp32 = tmp31[dismissal.id];
      }
      tmp22 = tmp32 === tmp;
    }
    return tmp22;
  } else if ("app" === dismissal) {
    const Storage2 = Storage5.Storage;
    const value3 = Storage2.get(conjureTipDismissals);
    let forever1;
    if (value3 != null) {
      forever1 = value3.forever;
    }
    let app1;
    if (value3 != null) {
      app1 = value3.app;
    }
    if (app1 == null) {
      app1 = {};
    }
    let anchor1;
    if (value3 != null) {
      anchor1 = value3.anchor;
    }
    let hasItem;
    if (app1[arg1] != null) {
      hasItem = obj2.includes(dismissal.id);
    }
    return true === hasItem;
  } else if ("forever" === dismissal) {
    const Storage = Storage5.Storage;
    const value4 = Storage.get(conjureTipDismissals);
    let forever2;
    if (value4 != null) {
      forever2 = value4.forever;
    }
    if (forever2 == null) {
      forever2 = [];
    }
    let app2;
    if (value4 != null) {
      app2 = value4.app;
    }
    let anchor2;
    if (value4 != null) {
      anchor2 = value4.anchor;
    }
    return forever2.includes(dismissal.id);
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
export const dismissConjureTip = function dismissConjureTip(tip, arg1, ideasIntroAnchorId) {
  let anchor;
  let app;
  let items2;
  let obj3;
  let obj6;
  let tmp2 = ideasIntroAnchorId;
  if (ideasIntroAnchorId === undefined) {
    tmp2 = null;
  }
  if (null != tip.dismissal) {
    if (!isConjureTipDismissed(tip, arg1, tmp2)) {
      const Storage = Storage5.Storage;
      const value = Storage.get(conjureTipDismissals);
      let forever;
      if (value != null) {
        forever = value.forever;
      }
      if (forever == null) {
        forever = [];
      }
      const obj = { forever, app, anchor };
      app = undefined;
      if (value != null) {
        app = value.app;
      }
      if (app == null) {
        app = {};
      }
      anchor = undefined;
      if (value != null) {
        anchor = value.anchor;
      }
      if (anchor == null) {
        anchor = {};
      }
      const dismissal = tip.dismissal;
      if ("session" === dismissal) {
        const _HermesInternal = HermesInternal;
        set.add("" + arg1 + ":" + tip.id);
      } else if ("anchor" === dismissal) {
        if (null != tmp2) {
          const Storage3 = tmp3(510).Storage;
          const obj2 = { anchor: obj3 };
          set2 = Storage3.set;
          const merged = Object.assign(obj);
          obj3 = {};
          const merged1 = Object.assign(obj.anchor);
          const obj4 = {};
          const merged2 = Object.assign(obj.anchor[arg1]);
          obj4[tip.id] = tmp2;
          obj3[arg1] = obj4;
          set2(conjureTipDismissals, obj2);
        }
      } else if ("app" === dismissal) {
        const Storage2 = tmp3(510).Storage;
        const obj5 = { app: obj6 };
        const merged3 = Object.assign(obj);
        obj6 = {};
        const merged4 = Object.assign(obj.app);
        let items = obj.app[arg1];
        if (items == null) {
          items = [];
        }
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items1, items, 0)] = tip.id;
        obj6[arg1] = items1;
        const result = set(tmp5, obj5);
      } else if ("forever" === dismissal) {
        const Storage4 = tmp3(510).Storage;
        const obj7 = { forever: items2 };
        set3 = Storage4.set;
        const merged5 = Object.assign(obj);
        items2 = [];
        items2[HermesBuiltin.arraySpread(items2, obj.forever, 0)] = tip.id;
        set3(conjureTipDismissals, obj7);
      }
      closure_6 = closure_6 + 1;
      const item = set1.forEach((fn) => fn());
    }
  }
};
export const useConjureTipDismissalsVersion = tmp4;
