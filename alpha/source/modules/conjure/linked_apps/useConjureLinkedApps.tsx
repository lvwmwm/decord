// Module ID: 13242
// Function ID: 13243
// Name: useConjureLinkedApps
// Dependencies: [5, 32, 19, 7017, 504, 13243, 1113, 4131, 2]
// Exports: default

// Module 13242 (useConjureLinkedApps)
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 7017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_1, importDefault, project_id;

let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
let ConjureProjectStore = ConjureProjectStore_mod;
let closure_7 = [];
let closure_8 = [];
let closure_9 = { live: false, hasPreview: true };
const result = size.fileFinishedImporting("modules/conjure/linked_apps/useConjureLinkedApps.tsx");

export default function useConjureLinkedApps(projectId, arg1) {
  let closure_3;
  let closure_5;
  let closure_6;
  let current;
  let first1;
  let tmp14;
  let tmp15;
  let tmp2;
  let tmp3;
  _require = projectId;
  importDefault = arg1;
  let obj = react;
  let tmp = first1(react.useState(projectId), 2);
  [tmp2, tmp3] = tmp;
  const tmp4 = closure_7;
  const tmp5 = first1(react.useState(closure_7), 2);
  const callers = tmp5[0];
  let tmp7 = tmp5[1];
  _asyncToGenerator = tmp7;
  const tmp9 = first1(react.useState(closure_8), 2);
  first1 = tmp9[0];
  react = tmp11;
  [tmp14, tmp15] = first1(react.useState(closure_9), 2);
  ConjureProjectStore = tmp15;
  const tmp13 = first1(react.useState(closure_9), 2);
  const tmp16 = first1(react.useState(false), 2);
  closure_7 = tmp18;
  const first2 = tmp16[0];
  const tmp19 = first1(react.useState(false), 2);
  const tmp8 = closure_8;
  closure_8 = tmp21;
  const first3 = tmp19[0];
  const tmp12 = closure_9;
  if (tmp2 !== projectId) {
    tmp3(projectId);
    tmp7(tmp4);
    tmp9[1](tmp8);
    tmp15(tmp12);
    tmp16[1](false);
    tmp19[1](false);
  }
  closure_9 = obj.useRef(projectId);
  let items = [projectId];
  const effect = obj.useEffect(() => {
    closure_9.current = current;
  }, items);
  let obj2 = require("get initialized");
  let items1 = [ConjureProjectStore];
  const items2 = [projectId];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => {
    const f132897 = (id) => id.id;
    const items = [...ConjureProjectStore.getOwnedProjects(), ...ConjureProjectStore.getSharedWithMeProjects(), ...ConjureProjectStore.getRailProjects()];
    const items1 = [...new Set(items.map(f132897))];
    new Set(items.map(f132897));
    const found = items1.filter((item) => item !== current);
    return found.sort();
  }, items2);
  const items3 = [projectId, arg1];
  const effect1 = obj.useEffect(() => {
    let _false;
    function load() {
      return obj(...arguments);
    }
    let obj = function _load() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj3;
        let v1;
        if (c4 === 2) {
          c4 = 3;
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
          let c2;
          try {
            let closure_0;
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
                const obj5 = { value: obj3.fetchLinkedApps(closure_0), done: false };
                obj3 = _false(callers[5]);
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
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_0 = value;
                const tmp22 = closure_129_0;
                if (tmp22) {
                  c3(closure_0.callers);
                  obj = { live: true === closure_0.live, hasPreview: false !== closure_0.has_preview };
                  closure_1_6(obj);
                  c2 = 0;
                } else {
                  c2 = 0;
                  c4 = 3;
                  return { value: "HermesInternal", done: null };
                }
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp15) {
            if (0 === c2) {
              c4 = 3;
              throw tmp15;
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
  }, items3);
  const items4 = [projectId, arg1, stateFromStoresArray];
  const effect2 = obj.useEffect(() => {
    let _false;
    function loadTargets() {
      return obj(...arguments);
    }
    let obj = function _loadTargets() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
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
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c2;
          try {
            let targets;
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
                targets = undefined;
                c2 = 1;
                c3 = 2;
                c4 = 1;
                const obj5 = { value: obj2.fetchLinkedAppTargets(targets, closure_1_10), done: false };
                obj2 = _false(callers[5]);
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
                targets = value;
                const tmp7 = closure_129_0;
                if (tmp7) {
                  closure_1_5(targets.targets);
                }
                c2 = 0;
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp15) {
            if (0 === c2) {
              c4 = 3;
              throw tmp15;
            } else {
              c3 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = obj;
    if (tmp) {
      if (0 !== stateFromStoresArray.length) {
        let c0 = true;
        const tmp3 = loadTargets();
        return () => {
          let c0 = false;
        };
      }
    }
  }, items4);
  let obj3 = require("get initialized");
  const items5 = [ConjureProjectStore];
  const items6 = [projectId];
  let stateFromStores = obj3.useStateFromStores(items5, () => ConjureProjectStore.getProject(current), items6);
  let obj4 = require("get initialized");
  const items7 = [ConjureProjectStore];
  const items8 = [callers, first1];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items7, () => {
    let project;
    let items = [...first1];
    return Object.fromEntries(items.map((project_id) => {
      project_id = project_id.project_id;
      const items = [project_id, project.getProject(project_id)];
      return items;
    }));
  }, items8);
  const items9 = [callers, stateFromStoresObject, first1];
  const tmp29 = _require;
  const memo = obj.useMemo(() => {
    let items = [...first1];
    return Object.fromEntries(items.map((project_id) => {
      project_id = project_id.project_id;
      const items = [project_id, ];
      let name;
      if (stateFromStoresObject[project_id] != null) {
        name = tmp.name;
      }
      if (name == null) {
        const intl = current(first[6]).intl;
        const obj = { projectId: project_id };
        name = intl.formatToPlainString(closure_1(first[7]).HHCa93, obj);
      }
      items[1] = name;
      return items;
    }));
  }, items9);
  const useCallback = obj.useCallback;
  _asyncToGenerator(async (arg0, build) => {
    let ref;
    closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj6;
      let tmp;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp4;
              closure_1_7(false);
              closure_1_8(false);
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj4 = { build };
              const obj5 = { value: obj6.linkConjureApp(closure_0, closure_0, obj4), done: false };
              obj6 = closure_0(callers[5]);
              return obj5;
            }
          } else if (1 === c5) {
            c4 = 0;
            if (ref.current === closure_0) {
              closure_1_7(true);
            }
            c6 = 3;
            return { value: undefined, done: true };
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
            if (ref.current === closure_0) {
              closure_1_8(true);
              tmp((arr) => arr.map((project_id) => {
                let tmp = project_id;
                if (project_id.project_id === closure_1_0) {
                  const obj = { build };
                  const merged = Object.assign(project_id);
                  tmp = obj;
                }
                return tmp;
              }));
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          if (0 === c4) {
            c6 = 3;
            throw tmp20;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  const items10 = [projectId];
  const callback = useCallback(function(arg0, arg1) {
    return closure_0(...arguments);
  }, items10);
  const useCallback2 = obj.useCallback;
  _require = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let v0;
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
        return { value: "HermesInternal", done: null };
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
            closure_1_7(false);
            closure_1_8(false);
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj3.unlinkConjureApp(closure_0, closure_0), done: false };
            obj3 = closure_0(callers[5]);
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          if (ref.current === closure_0) {
            closure_1_7(true);
          }
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
          if (ref.current === closure_0) {
            closure_1_8(true);
            c3((arr) => arr.filter((project_id) => project_id.project_id !== closure_1_0));
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp28) {
        if (0 === c3) {
          c5 = 3;
          throw tmp28;
        } else {
          c4 = 1;
        }
      }
    }
  });
  const items11 = [projectId];
  let name;
  const callback2 = useCallback2(function(arg0) {
    return closure_0(...arguments);
  }, items11);
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (name == null) {
    let intl = tmp29(tmp30[6]).intl;
    let obj5 = { projectId };
    name = intl.formatToPlainString(require("module_4131").HHCa93, obj5);
  }
  const obj8 = { name, project: stateFromStores, live: null, hasPreview: null, callers, targets: first1, projects: stateFromStoresObject, names: memo, failed: first2, saved: first3, setBuild: callback, remove: callback2 };
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  ({ live: obj6.live, hasPreview: obj6.hasPreview } = tmp14);
  return obj8;
};
