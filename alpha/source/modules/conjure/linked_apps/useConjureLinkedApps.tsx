// Module ID: 12498
// Function ID: 12499
// Name: useConjureLinkedApps
// Dependencies: [5, 32, 19, 6844, 12499, 504, 1113, 3868, 2]
// Exports: default

// Module 12498 (useConjureLinkedApps)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, c6, closure_0, project_id;

let closure_7 = [];
const result = size.fileFinishedImporting("modules/conjure/linked_apps/useConjureLinkedApps.tsx");

export default function useConjureLinkedApps(arg0, arg1) {
  let callers;
  let closure_3;
  let closure_4;
  let first1;
  let stateFromStoresObject;
  _require = arg0;
  let closure_1 = arg1;
  [callers, _asyncToGenerator] = stateFromStoresObject.useState(closure_7);
  [first1, _slicedToArray] = stateFromStoresObject.useState(false);
  let items = [arg0, arg1];
  const effect = stateFromStoresObject.useEffect(() => {
    let _false;
    function load() {
      return obj(...arguments);
    }
    let obj = function _load() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        let v1;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          let c2;
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_1 = tmp;
                closure_0 = undefined;
                c2 = 1;
                c3 = 2;
                c4 = 1;
                const obj5 = { value: obj2.fetchLinkedAppCallers(closure_0), done: false };
                obj2 = _false(callers[4]);
                return obj5;
              }
            } else {
              if (1 === c3) {
                c2 = 0;
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_0 = value;
                const tmp7 = closure_129_0;
                if (tmp7) {
                  c3(closure_0);
                }
                c2 = 0;
              }
              c4 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp14) {
            if (0 === c2) {
              c4 = 3;
              throw tmp14;
            } else {
              c3 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    if (obj) {
      let c0 = true;
      const tmp = load();
      return () => {
        let c0 = false;
      };
    }
  }, items);
  let obj = require("get initialized");
  const items1 = [ConjureProjectStore];
  const items2 = [callers];
  stateFromStoresObject = obj.useStateFromStoresObject(items1, () => {
    let project;
    return Object.fromEntries(first.map((project_id) => {
      project_id = project_id.project_id;
      const items = [project_id, project.getProject(project_id)];
      return items;
    }));
  }, items2);
  const items3 = [callers, stateFromStoresObject];
  const memo = stateFromStoresObject.useMemo(() => Object.fromEntries(first.map((project_id) => {
    project_id = project_id.project_id;
    const items = [project_id, ];
    let name;
    if (stateFromStoresObject[project_id] != null) {
      name = tmp.name;
    }
    if (name == null) {
      const intl = closure_0(first[6]).intl;
      const obj = { projectId: project_id };
      name = intl.formatToPlainString(closure_1(first[7]).HHCa93, obj);
    }
    items[1] = name;
    return items;
  })), items3);
  const useCallback = stateFromStoresObject.useCallback;
  _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let tmp;
    let v0;
    closure_0 = arg0;
    closure_1 = value;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp4;
            c4(false);
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: obj3.linkConjureApp(closure_0, closure_0, closure_1), done: false };
            obj3 = closure_0(callers[4]);
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          c4(true);
          c6 = 3;
          const obj6 = { value: undefined, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          tmp((arr) => {
            let build;
            return arr.map((project_id) => {
              let tmp = project_id;
              if (project_id.project_id === closure_1_0) {
                const obj = { build };
                const merged = Object.assign(project_id);
                tmp = obj;
              }
              return tmp;
            });
          });
          c6 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp19) {
        if (0 === c4) {
          c6 = 3;
          throw tmp19;
        } else {
          c5 = 1;
        }
      }
    }
  });
  const items4 = [arg0];
  const callback = useCallback(function(arg0, arg1) {
    return closure_0(...arguments);
  }, items4);
  const useCallback2 = stateFromStoresObject.useCallback;
  _require = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let v0;
    let v1;
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            closure_1 = tmp4;
            c4(false);
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj3.unlinkConjureApp(closure_0, closure_0), done: false };
            obj3 = closure_0(callers[4]);
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          c4(true);
          c5 = 3;
          const obj6 = { value: undefined, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          c3((arr) => arr.filter((project_id) => project_id.project_id !== closure_1_0));
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp18) {
        if (0 === c3) {
          c5 = 3;
          throw tmp18;
        } else {
          c4 = 1;
        }
      }
    }
  });
  const items5 = [arg0];
  let obj2 = {
    callers,
    projects: stateFromStoresObject,
    names: memo,
    failed: first1,
    setBuild: callback,
    remove: useCallback2(function(arg0) {
      return closure_0(...arguments);
    }, items5)
  };
  return obj2;
};
