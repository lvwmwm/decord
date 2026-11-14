// Module ID: 13243
// Function ID: 13244
// Name: conjureLinkedApps
// Dependencies: [5, 13219, 2]
// Exports: fetchLinkedAppStart, fetchLinkedAppTargets, linkConjureApp, unlinkConjureApp

// Module 13243 (conjureLinkedApps)
import conjureWorkerFetch from "conjureWorkerFetch" /* 13219 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

function fetchLinkedApps() {
  return obj(...arguments);
}
let obj = function _fetchLinkedApps() {
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
        return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
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
obj = function _fetchLinkedAppTargets() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let c3;
    let c4;
    let closure_2;
    let obj5;
    let closure_0 = arg0;
    let closure_1 = arg1;
    const obj4 = { method: "POST", json: obj5 };
    obj5 = { project_ids: closure_1.slice(0, 200) };
    const fetchConjureWorker = conjureWorkerFetch.fetchConjureWorker;
    closure_0 = await fetchConjureWorker(closure_0, "/agent/linked-apps/targets", obj4);
    if (!closure_0.ok) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Linked app targets request failed: " + closure_0.status);
      throw error;
    }
    await closure_0.json();
    return arg1;
  });
  return obj(...arguments);
};
obj = function _fetchLinkedAppStart() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let build;
    let c6;
    let c7;
    let closure_5;
    let flow;
    let purpose;
    let str;
    let closure_1 = arg1;
    let closure_0 = closure_1;
    closure_1 = await fetchLinkedApps(closure_0);
    const callers = closure_1.callers;
    const live = closure_1.live;
    const has_preview = closure_1.has_preview;
    const tmp3 = callers.find((project_id) => project_id.project_id === closure_1_0);
    const obj6 = { live: true === live, hasPreview: false !== has_preview, build: str, purpose, flow };
    if (tmp3 != null) {
      build = tmp3.build;
    }
    str = build;
    if (build == null) {
      str = "auto";
      if (true === live) {
        str = "published";
      }
    }
    if (tmp3 != null) {
      purpose = tmp3.purpose;
    }
    if (purpose == null) {
      purpose = null;
    }
    if (tmp3 != null) {
      flow = tmp3.flow;
    }
    if (flow == null) {
      flow = null;
    }
    return obj6;
  });
  return obj(...arguments);
};
obj = function _linkConjureApp() {
  obj = _asyncToGenerator(async (arg0, caller_project_id, build) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    const iter = (async function(arg0, value) {
      let c2;
      let c3;
      let c4;
      let obj7;
      let obj8;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let closure_5;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              let closure_4 = tmp4;
              let closure_3 = tmp;
              build = undefined;
              purpose = undefined;
              flow = undefined;
              let obj4 = closure_2;
              if (closure_2 === undefined) {
                obj4 = {};
              }
              ({ build: c2, purpose: c3, flow: c4 } = obj4);
              closure_5 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Path", done: true };
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              const obj6 = { method: "PUT", json: obj8 };
              c5 = 2;
              c6 = 1;
              obj8 = { caller_project_id, build, purpose, flow };
              const obj9 = { value: obj7.fetchConjureWorker(closure_0, "/agent/linked-apps", obj6), done: false };
              obj7 = closure_132_0(closure_132_1[1]);
              return obj9;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            closure_5 = value;
            if (closure_5.ok) {
              c6 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("Linking apps failed: " + closure_5.status);
              throw error;
            }
          }
        } catch (tmp14) {
          c6 = 3;
          throw tmp14;
        }
      }
    })();
    iter.next();
    return iter;
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
          return { value: "HermesInternal", done: null };
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
              return { value: "HermesInternal", done: null };
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
const result = size.fileFinishedImporting("modules/conjure/linked_apps/conjureLinkedApps.tsx");

export { fetchLinkedApps };
export function fetchLinkedAppTargets() {
  return obj(...arguments);
}
export function fetchLinkedAppStart() {
  return obj(...arguments);
}
export function linkConjureApp() {
  return obj(...arguments);
}
export function unlinkConjureApp() {
  return obj(...arguments);
}
