// Module ID: 11842
// Function ID: 11843
// Name: conjureLinkedApps
// Dependencies: [5, 3830, 1128, 10794, 2]
// Exports: fetchLinkedAppCallers, linkConjureApp, linkedAppBuildDescription, linkedAppBuildLabel, unlinkConjureApp

// Module 11842 (conjureLinkedApps)
import intl2 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import conjureWorkerFetch from "conjureWorkerFetch" /* 10794 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c2, closure_2, closure_3;

let obj2;
let obj3;
let obj4;
let obj = function _fetchLinkedAppCallers() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj5;
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: obj5.fetchConjureWorker(closure_0, "/agent/linked-apps"), done: false };
            obj5 = conjureWorkerFetch;
            return obj4;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_0 = value;
            if (closure_0.ok) {
              c2 = 2;
              c3 = 1;
              const obj7 = { value: closure_0.json(), done: false };
              return obj7;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("Linked apps request failed: " + closure_0.status);
              throw error;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c3 = 3;
          obj = { value: value.callers, done: true };
          return obj;
        }
      } catch (tmp13) {
        c3 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
obj = function _linkConjureApp() {
  obj = _asyncToGenerator(async (arg0, caller_project_id, build) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0, value, arg2) {
      let obj5;
      let obj6;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_0 = undefined;
              const obj4 = { method: "PUT", json: obj6 };
              c4 = 1;
              c5 = 1;
              obj6 = { caller_project_id, build };
              const obj7 = { value: obj5.fetchConjureWorker(closure_0, "/agent/linked-apps", obj4), done: false };
              obj5 = conjureWorkerFetch;
              return obj7;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_0 = value;
            if (closure_0.ok) {
              c5 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("Linking apps failed: " + closure_0.status);
              throw error;
            }
          }
        } catch (tmp12) {
          c5 = 3;
          throw tmp12;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _unlinkConjureApp() {
  obj = _asyncToGenerator(async (arg0, caller_project_id) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      let obj2;
      let obj6;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_0 = undefined;
              const obj5 = { method: "DELETE", json: obj6 };
              c3 = 1;
              c4 = 1;
              obj6 = { caller_project_id };
              const obj7 = { value: obj2.fetchConjureWorker(closure_0, "/agent/linked-apps", obj5), done: false };
              obj2 = conjureWorkerFetch;
              return obj7;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            closure_0 = value;
            if (closure_0.ok) {
              c4 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("Unlinking apps failed: " + closure_0.status);
              throw error;
            }
          }
        } catch (tmp16) {
          c4 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = { auto: obj2, preview: obj3, published: obj4 };
obj2 = { label: _modDef3830["2TTprm"], description: _modDef3830["1ck6o0"] };
obj3 = { label: _modDef3830.bUZ6jT, description: _modDef3830.DP2NVW };
obj4 = { label: _modDef3830.yXd0cc, description: _modDef3830["YY+UD8"] };
const result = size.fileFinishedImporting("modules/conjure/linked_apps/conjureLinkedApps.tsx");

export const CONJURE_LINKED_APP_BUILDS = ["auto", "preview", "published"];
export const linkedAppBuildLabel = function linkedAppBuildLabel(build) {
  const intl = intl2.intl;
  return intl.string(obj[build].label);
};
export const linkedAppBuildDescription = function linkedAppBuildDescription(value) {
  const intl = intl2.intl;
  return intl.string(obj[value].description);
};
export const fetchLinkedAppCallers = function fetchLinkedAppCallers() {
  return obj(...arguments);
};
export const linkConjureApp = function linkConjureApp() {
  return obj(...arguments);
};
export const unlinkConjureApp = function unlinkConjureApp() {
  return obj(...arguments);
};
