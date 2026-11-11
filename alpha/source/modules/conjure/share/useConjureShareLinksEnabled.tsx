// Module ID: 13232
// Function ID: 13233
// Name: useConjureShareLinksEnabled
// Dependencies: [32, 5, 19, 7265, 2]
// Exports: default

// Module 13232 (useConjureShareLinksEnabled)
import ConjureActionCreators from "ConjureActionCreators" /* 7265 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c2, c3, c5;

function readShareLinksEnabled() {
  return obj(...arguments);
}
let obj = function _readShareLinksEnabled() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        c5 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp3;
            closure_0 = undefined;
            c4 = 1;
            const getProject = ConjureActionCreators.getProject;
            c3 = 2;
            c5 = 1;
            const obj5 = { value: getProject(closure_0, closure_1, obj3.currentSession()), done: false };
            obj3 = ConjureActionCreators;
            return obj5;
          }
        } else if (1 === c3) {
          c4 = 0;
          c5 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = value;
          let tmp6 = null;
          if (closure_0.ok) {
            tmp6 = true === closure_0.body.share_links_enabled;
          }
          c4 = 0;
          c5 = 3;
          obj = { value: tmp6, done: true };
          return obj;
        }
      } catch (tmp14) {
        if (0 === c4) {
          c5 = 3;
          throw tmp14;
        } else {
          c3 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/conjure/share/useConjureShareLinksEnabled.tsx");

export default function useConjureShareLinksEnabled(arg0) {
  let closure_1;
  let first;
  let tmp4;
  let closure_0 = arg0;
  [first, closure_1] = react.useState(null);
  const tmp3 = _slicedToArray(react.useState(false), 2);
  [tmp4, _slicedToArray] = tmp3;
  const setShareLinksEnabled = react.useCallback((arg0) => {
    closure_1(arg0);
    _slicedToArray(false);
  }, []);
  const items = [arg0, setShareLinksEnabled];
  const effect = react.useEffect(() => {
    function load() {
      return obj(...arguments);
    }
    obj = function _load() {
      let signal;
      obj = _asyncToGenerator(async (arg0, value) => {
        let v1;
        let v3;
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
                closure_1 = tmp4;
                closure_0 = undefined;
                c2 = 1;
                c3 = 1;
                const obj4 = { value: closure_2_5(closure_0, signal.signal), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              if (!closure_129_0.signal.aborted) {
                if (null == closure_0) {
                  c2(true);
                } else {
                  c3(closure_0);
                }
              }
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp22) {
            c3 = 3;
            throw tmp22;
          }
        }
      });
      return obj(...arguments);
    };
    const abortController = new AbortController();
    load();
    return () => abortController.abort();
  }, items);
  const items1 = [arg0, setShareLinksEnabled];
  obj = {
    shareLinksEnabled: first,
    loadFailed: tmp4,
    setShareLinksEnabled,
    reload: react.useCallback(setShareLinksEnabled(function*(arg0, value) {
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
              closure_1 = tmp4;
              closure_0 = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: readShareLinksEnabled(closure_0), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value;
            if (null == closure_0) {
              closure_129_2(true);
            } else {
              closure_129_3(closure_0);
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp18) {
          c3 = 3;
          throw tmp18;
        }
      }
    }), items1)
  };
  return obj;
};
