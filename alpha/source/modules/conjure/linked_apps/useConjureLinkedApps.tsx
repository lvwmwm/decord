// Module ID: 11795
// Function ID: 11796
// Name: useConjureLinkedApps
// Dependencies: [5, 32, 19, 6758, 558, 576, 11796, 504, 1128, 3830, 2]

// Module 11795 (useConjureLinkedApps)
import intl2 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6758 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, c6, closure_0, importDefault;

let closure_7 = [];
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureLinkedApps(arg0, arg1) {
  let callers;
  let closure_3;
  let stateFromStoresObject;
  let tmp6;
  _require = arg0;
  importDefault = arg1;
  let tmp = _require;
  const tmp2 = callers;
  let obj = require("react");
  const cResult = obj.c(24);
  let obj2 = stateFromStoresObject;
  [callers, _asyncToGenerator] = stateFromStoresObject.useState(closure_7);
  let tmp5 = _slicedToArray(stateFromStoresObject.useState(false), 2);
  [tmp6, _slicedToArray] = tmp5;
  if (cResult[0] === arg1) {
    let tmp7;
    let tmp8;
    let tmp11;
    let tmp14;
    let tmp13;
    let tmp17;
    if (cResult[1] === arg0) {
      tmp7 = cResult[2];
      tmp8 = cResult[3];
    }
    const effect = obj2.useEffect(tmp7, tmp8);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [ConjureProjectStore];
      cResult[4] = items;
      tmp11 = items;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] !== callers) {
      const fn2 = function v() {
        let project;
        return Object.fromEntries(first.map((project_id) => {
          project_id = project_id.project_id;
          const items = [project_id, project.getProject(project_id)];
          return items;
        }));
      };
      const items1 = [callers];
      cResult[5] = callers;
      cResult[6] = fn2;
      cResult[7] = items1;
      tmp14 = items1;
      tmp13 = fn2;
    } else {
      tmp13 = cResult[6];
      tmp14 = cResult[7];
    }
    const tmpResult = tmp(tmp2[7]);
    stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp11, tmp13, tmp14);
    if (cResult[8] === callers) {
      let tmp16;
      let tmp19;
      let tmp21;
      if (cResult[9] === stateFromStoresObject) {
        tmp16 = cResult[10];
      }
      if (cResult[13] !== arg0) {
        _require = _asyncToGenerator(async (arg0, value) => {
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
              return { value: "IconComponent", done: null };
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
                  obj3 = closure_0(callers[6]);
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
                return { value: "IconComponent", done: null };
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
        function t6() {
          return closure_0(...arguments);
        }
        cResult[13] = arg0;
        cResult[14] = t6;
        tmp19 = t6;
      } else {
        tmp19 = cResult[14];
      }
      if (cResult[15] !== arg0) {
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
              return { value: "IconComponent", done: null };
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
                  obj3 = closure_0(callers[6]);
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
                return { value: "IconComponent", done: null };
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
        function t7() {
          return closure_0(...arguments);
        }
        cResult[15] = arg0;
        cResult[16] = t7;
        tmp21 = t7;
      } else {
        tmp21 = cResult[16];
      }
      if (cResult[17] === callers) {
        if (cResult[18] === tmp6) {
          if (cResult[19] === tmp16) {
            if (cResult[20] === stateFromStoresObject) {
              if (cResult[21] === tmp21) {
                let tmp23;
                if (cResult[22] === tmp19) {
                  tmp23 = cResult[23];
                }
                return tmp23;
              }
            }
          }
        }
      }
      let obj3 = { callers, projects: stateFromStoresObject, names: tmp16, failed: tmp6, setBuild: tmp19, remove: tmp21 };
      cResult[17] = callers;
      cResult[18] = tmp6;
      cResult[19] = tmp16;
      cResult[20] = stateFromStoresObject;
      cResult[21] = tmp21;
      cResult[22] = tmp19;
      cResult[23] = obj3;
      tmp23 = obj3;
    }
    if (cResult[11] !== stateFromStoresObject) {
      class P {
        constructor(project_id) {
          project_id = project_id.project_id;
          const items = [project_id, ];
          let name;
          if (stateFromStoresObject[project_id] != null) {
            name = tmp.name;
          }
          if (name == null) {
            const intl = intl2.intl;
            const obj = { projectId: project_id };
            name = intl.formatToPlainString(_modDef3830.HHCa93, obj);
          }
          items[1] = name;
          return items;
        }
      }
      cResult[11] = stateFromStoresObject;
      cResult[12] = P;
      tmp17 = P;
    } else {
      class P {
        constructor(project_id) {
          project_id = project_id.project_id;
          const items = [project_id, ];
          let name;
          if (stateFromStoresObject[project_id] != null) {
            name = tmp.name;
          }
          if (name == null) {
            const intl = intl2.intl;
            const obj = { projectId: project_id };
            name = intl.formatToPlainString(_modDef3830.HHCa93, obj);
          }
          items[1] = name;
          return items;
        }
      }
    }
    const _Object = Object;
    const fromEntriesResult = Object.fromEntries(callers.map(tmp17));
    cResult[8] = callers;
    cResult[9] = stateFromStoresObject;
    cResult[10] = fromEntriesResult;
    tmp16 = fromEntriesResult;
  }
  const fn = function s() {
    function load() {
      return closure_0(...arguments);
    }
    if (closure_1) {
      let c0 = true;
      const tmp = closure_3;
      closure_0 = closure_3(function*(arg0, value) {
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
            return { value: "IconComponent", done: null };
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
                obj2 = c0(callers[6]);
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
                const obj = { value, done: true };
                return obj;
              } else {
                closure_0 = value;
                const tmp7 = closure_0;
                if (tmp7) {
                  closure_2_3(closure_0);
                }
                c2 = 0;
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
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
      load();
      return () => {
        c0 = false;
      };
    }
  };
  const items2 = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items2;
  tmp8 = items2;
  tmp7 = fn;
}) : (function useConjureLinkedApps(arg0, arg1) {
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
    let obj = function _load2() {
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
            return { value: "IconComponent", done: null };
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
                obj2 = _false(callers[6]);
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
              return { value: "IconComponent", done: null };
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
      const intl = closure_0(first[8]).intl;
      const obj = { projectId: project_id };
      name = intl.formatToPlainString(closure_1(first[9]).HHCa93, obj);
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
        return { value: "IconComponent", done: null };
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
            obj3 = closure_0(callers[6]);
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
          return { value: "IconComponent", done: null };
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
        return { value: "IconComponent", done: null };
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
            obj3 = closure_0(callers[6]);
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
          return { value: "IconComponent", done: null };
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
});
const result = size.fileFinishedImporting("modules/conjure/linked_apps/useConjureLinkedApps.tsx");

export default tmp2;
