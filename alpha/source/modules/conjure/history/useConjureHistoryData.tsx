// Module ID: 12272
// Function ID: 12273
// Name: useConjureHistoryData
// Dependencies: [32, 19, 558, 576, 12261, 12273, 11877, 2]

// Module 12272 (useConjureHistoryData)
import react2 from "react" /* 576 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 11877 */;
import conjureHistoryRequests from "conjureHistoryRequests" /* 12261 */;
import ConjureRestorePanelOp from "ConjureRestorePanelOp" /* 12273 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel, dependencyMap, map, set;

const f113932 = (result) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = result;
  return { points, window: _window };
};
let react = react_mod;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHistoryLoad(arg0) {
  let closure_129_1;
  let closure_129_2;
  let obj3;
  let tmp3;
  let tmp5;
  let tmp6;
  let closure_0 = arg0;
  let obj = react2;
  const cResult = obj.c(12);
  let obj2 = react;
  const tmp2 = _slicedToArray(react.useState(0), 2);
  [tmp3, closure_129_1] = tmp2;
  const tmp4 = _slicedToArray(react.useState(null), 2);
  [tmp5, closure_129_2] = tmp4;
  if (cResult[0] !== arg0) {
    const fn = function n() {
      let load;
      channel = false;
      const promise = channel();
      promise.then((data) => {
        let obj2;
        const tmp = c0;
        if (!tmp) {
          const obj = { load, state: obj2 };
          const _Date = Date;
          obj2 = { status: "loaded", data, nowMs: Date.now() };
          closure_2_2(obj);
        }
      }, () => {
        const tmp = c0;
        if (!tmp) {
          const obj = { load, state: { status: "failed" } };
          closure_2_2(obj);
        }
      });
      return () => {
        let c0 = true;
      };
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === arg0) {
    let tmp7;
    let tmp10;
    let tmp11;
    if (cResult[3] === tmp3) {
      tmp7 = cResult[4];
    }
    const effect = obj2.useEffect(tmp6, tmp7);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function l() {
        closure_1_2(null);
        onClose((arg0) => arg0 + 1);
      };
      cResult[5] = fn2;
      tmp10 = fn2;
    } else {
      tmp10 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class D {
        constructor() {
          return onClose((arg0) => arg0 + 1);
        }
      }
      cResult[6] = D;
      tmp11 = D;
    } else {
      class D {
        constructor() {
          return onClose((arg0) => arg0 + 1);
        }
      }
    }
    if (cResult[7] === arg0) {
      let tmp13;
      class D {
        constructor() {
          return onClose((arg0) => arg0 + 1);
        }
      }
      if (cResult[10] !== tmp12) {
        class D {
          constructor() {
            return onClose((arg0) => arg0 + 1);
          }
        }
        tmp14[0] = tmp12;
        tmp14[1] = tmp10;
        tmp14[2] = tmp11;
        cResult[10] = tmp12;
        cResult[11] = tmp14;
        tmp13 = tmp14;
      } else {
        class D {
          constructor() {
            return onClose((arg0) => arg0 + 1);
          }
        }
      }
      return tmp13;
    }
    if (null != tmp5) {
      class D {
        constructor() {
          return onClose((arg0) => arg0 + 1);
        }
      }
      cResult[7] = arg0;
      cResult[8] = tmp5;
      cResult[9] = obj3;
    }
    obj3 = { status: "loading" };
  }
  const items = [arg0, tmp3];
  cResult[2] = arg0;
  cResult[3] = tmp3;
  cResult[4] = items;
  tmp7 = items;
}) : (function useHistoryLoad(arg0) {
  let closure_1;
  let closure_129_2;
  let first;
  let tmp4;
  let closure_0 = arg0;
  [first, closure_1] = react.useState(0);
  [tmp4, closure_129_2] = _slicedToArray(react.useState(null), 2);
  const items = [arg0, first];
  const tmp3 = _slicedToArray(react.useState(null), 2);
  const effect = react.useEffect(() => {
    let load;
    let c0 = false;
    const promise = c0();
    promise.then((data) => {
      let obj2;
      const tmp = c0;
      if (!tmp) {
        const obj = { load, state: obj2 };
        const _Date = Date;
        obj2 = { status: "loaded", data, nowMs: Date.now() };
        closure_2_2(obj);
      }
    }, () => {
      const tmp = c0;
      if (!tmp) {
        const obj = { load, state: { status: "failed" } };
        closure_2_2(obj);
      }
    });
    return () => {
      let c0 = true;
    };
  }, items);
  const callback = react.useCallback(() => {
    closure_1_2(null);
    closure_1((arg0) => arg0 + 1);
  }, []);
  if (null != tmp4) {
    if (tmp4.load === arg0) {
      const state = tmp4.state;
    }
    let obj = { state: { status: "loading" }, retry: callback, refresh: tmp7 };
    return obj;
  }
});
let closure_4 = tmp2;
let closure_5 = [];
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureHistoryData(arg0, arg1) {
  let arr;
  let state2;
  let tmp11;
  let tmp14;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(38);
  const tmp2 = _require;
  if (cResult[0] !== arg1) {
    const tmp2Result = tmp2(12273);
    const result = tmp2Result.restorePanelEnvironments(arg1);
    cResult[0] = arg1;
    cResult[1] = result;
    arr = result;
  } else {
    arr = cResult[1];
  }
  if (cResult[2] !== arr) {
    const hasItem = arr.includes("preview");
    cResult[2] = arr;
    cResult[3] = hasItem;
    tmp9 = hasItem;
  } else {
    tmp9 = cResult[3];
  }
  dependencyMap = tmp9;
  if (cResult[4] !== arg0) {
    const fn = function v() {
      const obj = conjureHistoryRequests;
      return obj.fetchVersionHistory(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[5];
  }
  const tmp13 = state2(tmp11);
  if (cResult[6] !== arg0) {
    const fn2 = function h() {
      const items = [, ];
      const obj = conjureHistoryRequests;
      items[0] = obj.fetchDatabaseRestorePoints(closure_0, "stable");
      const obj2 = conjureHistoryRequests;
      items[1] = obj2.fetchDatabaseRestoreWindow(closure_0, "stable");
      const allResult = all(items);
      return allResult.then(f113932);
    };
    cResult[6] = arg0;
    cResult[7] = fn2;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[7];
  }
  const tmp12Result = state2(tmp14);
  let closure_2 = tmp12Result;
  if (cResult[8] === tmp9) {
    let tmp16;
    if (cResult[9] === arg0) {
      tmp16 = cResult[10];
    }
    const tmp12Result3 = state2(tmp16);
    let state = tmp12Result3;
    if (cResult[11] === tmp9) {
      let tmp18;
      if (cResult[12] === arg0) {
        tmp18 = cResult[13];
      }
      const tmp12Result4 = state2(tmp18);
      state2 = tmp12Result4;
      const refresh = tmp12Result.refresh;
      const refresh2 = tmp12Result3.refresh;
      const refresh3 = tmp12Result4.refresh;
      if (cResult[14] === refresh) {
        if (cResult[15] === refresh2) {
          let tmp20;
          let tmp21;
          if (cResult[16] === refresh3) {
            tmp20 = cResult[17];
          }
          if (cResult[18] === arr) {
            if (cResult[19] === tmp12Result) {
              if (cResult[20] === tmp12Result3) {
                if (cResult[21] === tmp12Result4) {
                  tmp21 = cResult[22];
                }
                state = tmp13.state;
                if (cResult[27] === state.data) {
                  let tmp24;
                  if (cResult[28] === state.status) {
                    tmp24 = cResult[29];
                  }
                  state2 = tmp12Result3.state;
                  const tmp29 = "loaded" === state2.status ? state2.data : refresh;
                  if (cResult[30] === tmp21) {
                    if (cResult[31] === tmp20) {
                      if (cResult[32] === "loading" === state2.status) {
                        if (cResult[33] === !tmp9) {
                          if (cResult[34] === tmp29) {
                            if (cResult[35] === tmp24) {
                              let tmp31;
                              if (cResult[36] === tmp13) {
                                tmp31 = cResult[37];
                              }
                              return tmp31;
                            }
                          }
                        }
                      }
                    }
                  }
                  let obj2 = { sharedDatabase: !tmp9, versions: null, databases: tmp21, previewBackups: tmp29, previewBackupsLoading: "loading" === state2.status, refreshAllBackups: tmp20, versionTitles: tmp24 };
                  class B {
                    constructor() {
                      refresh();
                      refresh2();
                      refresh3();
                    }
                  }
                  cResult[30] = tmp21;
                  cResult[31] = tmp20;
                  cResult[32] = "loading" === state2.status;
                  cResult[33] = !tmp9;
                  cResult[34] = tmp29;
                  cResult[35] = tmp24;
                  cResult[36] = tmp13;
                  cResult[37] = obj2;
                  tmp31 = obj2;
                }
                const _Map = Map;
                const self = this;
                const self2 = this;
                map = new Map();
                class B {
                  constructor() {
                    refresh();
                    refresh2();
                    refresh3();
                  }
                }
                cResult[27] = state.data;
                cResult[28] = state.status;
                cResult[29] = map;
                tmp24 = map;
              }
            }
          }
          if (cResult[23] === tmp12Result) {
            if (cResult[24] === tmp12Result3) {
              let tmp22;
              if (cResult[25] === tmp12Result4) {
                tmp22 = cResult[26];
              }
              const mapped = arr.map(tmp22);
              cResult[18] = arr;
              cResult[19] = tmp12Result;
              cResult[20] = tmp12Result3;
              cResult[21] = tmp12Result4;
              class B {
                constructor() {
                  refresh();
                  refresh2();
                  refresh3();
                }
              }
              cResult[22] = mapped;
              tmp21 = mapped;
            }
          }
          const fn5 = function _(environment) {
            let obj3;
            let tmp;
            const obj = { environment, backups: tmp };
            if ("preview" === environment) {
              closure_0 = state;
              closure_1 = state2;
              state = state.state;
              state2 = state2.state;
              if ("failed" !== state.status) {
                let obj2;
                if ("failed" !== state2.status) {
                  if ("loading" !== state.status) {
                    if ("loading" !== state2.status) {
                      if (null == state2.data) {
                        obj2 = { status: "failed" };
                      } else {
                        obj2 = { status: "loaded", data: obj3, nowMs: state.nowMs };
                        obj3 = { points: state.data, window: state2.data };
                      }
                    }
                  }
                  obj2 = { status: "loading" };
                }
                tmp = {
                  state: obj2,
                  retry() {
                        closure_0.retry();
                        closure_1.retry();
                      },
                  refresh() {
                        closure_0.refresh();
                        closure_1.refresh();
                      }
                };
                const obj4 = {
                  state: obj2,
                  retry() {
                        closure_0.retry();
                        closure_1.retry();
                      },
                  refresh() {
                        closure_0.refresh();
                        closure_1.refresh();
                      }
                };
              }
              obj2 = { status: "failed" };
            } else {
              tmp = closure_2;
            }
            return obj;
          };
          cResult[23] = tmp12Result;
          cResult[24] = tmp12Result3;
          cResult[25] = tmp12Result4;
          class B {
            constructor() {
              refresh();
              refresh2();
              refresh3();
            }
          }
          cResult[26] = fn5;
          tmp22 = fn5;
        }
      }
      class B {
        constructor() {
          refresh();
          refresh2();
          refresh3();
        }
      }
      cResult[14] = refresh;
      cResult[15] = refresh2;
      cResult[16] = refresh3;
      cResult[17] = B;
      tmp20 = B;
    }
    const fn4 = function y() {
      let databaseRestoreWindow;
      const tmp = closure_1;
      if (tmp) {
        const obj = conjureHistoryRequests;
        databaseRestoreWindow = obj.fetchDatabaseRestoreWindow(closure_0, "preview");
      } else {
        databaseRestoreWindow = Promise.resolve(null);
      }
      return databaseRestoreWindow;
    };
    cResult[11] = tmp9;
    cResult[12] = arg0;
    tmp18 = fn4;
  }
  const fn3 = function w() {
    let databaseRestorePoints;
    const tmp = closure_1;
    if (tmp) {
      const obj = conjureHistoryRequests;
      databaseRestorePoints = obj.fetchDatabaseRestorePoints(closure_0, "preview");
    } else {
      databaseRestorePoints = Promise.resolve(closure_5);
    }
    return databaseRestorePoints;
  };
  cResult[8] = tmp9;
  cResult[9] = arg0;
  cResult[10] = fn3;
  tmp16 = fn3;
}) : (function useConjureHistoryData(arg0, arg1) {
  let closure_3;
  let state;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let items = [arg1];
  const memo = react.useMemo(() => {
    const obj = ConjureRestorePanelOp;
    return obj.restorePanelEnvironments(closure_1);
  }, items);
  const hasItem = memo.includes("preview");
  const items1 = [arg0];
  const tmp2 = state(react.useCallback(() => {
    const obj = conjureHistoryRequests;
    return obj.fetchVersionHistory(closure_0);
  }, items1));
  const items2 = [arg0];
  const tmp3 = state(react.useCallback(() => {
    const items = [, ];
    const obj = conjureHistoryRequests;
    items[0] = obj.fetchDatabaseRestorePoints(closure_0, "stable");
    const obj2 = conjureHistoryRequests;
    items[1] = obj2.fetchDatabaseRestoreWindow(closure_0, "stable");
    const allResult = all(items);
    return allResult.then(f113932);
  }, items2));
  react = tmp3;
  const items3 = [arg0, hasItem];
  let tmp4 = state(react.useCallback(() => {
    let databaseRestorePoints;
    const tmp = hasItem;
    if (tmp) {
      const obj = conjureHistoryRequests;
      databaseRestorePoints = obj.fetchDatabaseRestorePoints(closure_0, "preview");
    } else {
      databaseRestorePoints = Promise.resolve(closure_5);
    }
    return databaseRestorePoints;
  }, items3));
  state = tmp4;
  const items4 = [arg0, hasItem];
  let tmp5 = state(react.useCallback(() => {
    let databaseRestoreWindow;
    const tmp = hasItem;
    if (tmp) {
      const obj = conjureHistoryRequests;
      databaseRestoreWindow = obj.fetchDatabaseRestoreWindow(closure_0, "preview");
    } else {
      databaseRestoreWindow = Promise.resolve(null);
    }
    return databaseRestoreWindow;
  }, items4));
  const refresh = tmp3.refresh;
  const refresh2 = tmp4.refresh;
  const refresh3 = tmp5.refresh;
  const items5 = [refresh, refresh2, refresh3];
  const callback = react.useCallback(() => {
    refresh();
    refresh2();
    refresh3();
  }, items5);
  state = tmp2.state;
  const items6 = [state];
  const mapped = memo.map((environment) => {
    let obj3;
    let tmp;
    const obj = { environment, backups: tmp };
    if ("preview" === environment) {
      closure_0 = state;
      closure_1 = state2;
      state = state.state;
      state2 = state2.state;
      if ("failed" !== state.status) {
        let obj2;
        if ("failed" !== state2.status) {
          if ("loading" !== state.status) {
            if ("loading" !== state2.status) {
              if (null == state2.data) {
                obj2 = { status: "failed" };
              } else {
                obj2 = { status: "loaded", data: obj3, nowMs: state.nowMs };
                obj3 = { points: state.data, window: state2.data };
              }
            }
          }
          obj2 = { status: "loading" };
        }
        tmp = {
          state: obj2,
          retry() {
                closure_0.retry();
                closure_1.retry();
              },
          refresh() {
                closure_0.refresh();
                closure_1.refresh();
              }
        };
        const obj4 = {
          state: obj2,
          retry() {
                closure_0.retry();
                closure_1.retry();
              },
          refresh() {
                closure_0.refresh();
                closure_1.refresh();
              }
        };
      }
      obj2 = { status: "failed" };
    } else {
      tmp = closure_3;
    }
    return obj;
  });
  let state2 = tmp4.state;
  let obj = {
    sharedDatabase: !hasItem,
    versions: tmp2,
    databases: mapped,
    previewBackups: "loaded" === state2.status ? state2.data : state2,
    previewBackupsLoading: "loading" === state2.status,
    refreshAllBackups: callback,
    versionTitles: react.useMemo(() => {
      map = new Map();
      if ("loaded" === state.status) {
        const entries = state.data.entries;
        for (const item10015 of entries) {
          set = map.set;
          let sha = item10015.sha;
          let obj = ConjureHistoryFormat;
          let result = set(sha, obj.versionTitle(item10015.subject).short);
          continue;
        }
      }
      return map;
    }, items6)
  };
  return obj;
});
let result = size.fileFinishedImporting("modules/conjure/history/useConjureHistoryData.tsx");

export default tmp3;
export const useHistoryLoad = tmp2;
