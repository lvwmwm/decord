// Module ID: 12363
// Function ID: 12364
// Name: useConjureHistoryData
// Dependencies: [32, 19, 12351, 12296, 12364, 12353, 2]
// Exports: default, useHistoryLoad

// Module 12363 (useConjureHistoryData)
import conjureHistoryRequests from "conjureHistoryRequests" /* 12351 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 12353 */;
import ConjureRestorePanelOp from "ConjureRestorePanelOp" /* 12364 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c0, importDefault, map, set;

const f102704 = () => {
  _undefined2(null);
  _undefined((arg0) => arg0 + 1);
};
let closure_5 = [];
let result = size.fileFinishedImporting("modules/conjure/history/useConjureHistoryData.tsx");

export default function useConjureHistoryData(arg0) {
  let c1;
  let c2;
  let hasItem;
  let obj3;
  let obj4;
  let tmp14;
  let tmp16;
  let tmp22;
  let tmp24;
  let tmp30;
  let tmp32;
  let tmp8;
  let closure_0 = arg0;
  let tmp = require("useUsesPreviewApp")(arg0);
  let obj = obj4;
  let items = [tmp];
  const memo = obj4.useMemo(() => {
    const obj = ConjureRestorePanelOp;
    return obj.restorePanelEnvironments(closure_1);
  }, items);
  hasItem = memo.includes("preview");
  const items1 = [arg0];
  const callback = obj4.useCallback(() => {
    const obj = conjureHistoryRequests;
    return obj.fetchVersionHistory(closure_0);
  }, items1);
  c2 = undefined;
  let tmp4 = obj3;
  let tmp5 = obj3(obj4.useState(0), 2);
  importDefault = tmp5[1];
  const first = tmp5[0];
  [tmp8, c2] = obj3(obj4.useState(null), 2);
  const items2 = [callback, first];
  const tmp7 = obj3(obj4.useState(null), 2);
  const effect = obj4.useEffect(() => {
    callback6 = false;
    const promise = callback6();
    promise.then((data) => {
      let obj2;
      const tmp = c0;
      if (!tmp) {
        const obj = { load: callback6, state: obj2 };
        const _Date = Date;
        obj2 = { status: "loaded", data, nowMs: Date.now() };
        c2(obj);
      }
    }, () => {
      const tmp = c0;
      if (!tmp) {
        const obj = { load: callback6, state: { status: "failed" } };
        c2(obj);
      }
    });
    return () => {
      c0 = true;
    };
  }, items2);
  const callback1 = obj4.useCallback(f102704, []);
  if (null != tmp8) {
    if (tmp8.load === callback) {
      let state = tmp8.state;
    }
    let obj2 = { state: { status: "loading" }, retry: callback1, refresh: tmp11 };
    const items3 = [arg0];
    const callback2 = obj.useCallback(() => {
      const items = [, ];
      const obj = conjureHistoryRequests;
      items[0] = obj.fetchDatabaseRestorePoints(closure_0, "stable");
      const obj2 = conjureHistoryRequests;
      items[1] = obj2.fetchDatabaseRestoreWindow(closure_0, "stable");
      const allResult = all(items);
      return allResult.then((result) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = result;
        return { points, window: _window };
      });
    }, items3);
    c1 = undefined;
    c2 = undefined;
    [tmp14, c1] = tmp4(obj.useState(0), 2);
    tmp4(obj.useState(0), 2);
    [tmp16, c2] = tmp4(obj.useState(null), 2);
    const items4 = [callback2, tmp14];
    tmp4(obj.useState(null), 2);
    const effect1 = obj.useEffect(() => {
      callback6 = false;
      const promise = callback6();
      promise.then((data) => {
        let obj2;
        const tmp = c0;
        if (!tmp) {
          const obj = { load: callback6, state: obj2 };
          const _Date = Date;
          obj2 = { status: "loaded", data, nowMs: Date.now() };
          c2(obj);
        }
      }, () => {
        const tmp = c0;
        if (!tmp) {
          const obj = { load: callback6, state: { status: "failed" } };
          c2(obj);
        }
      });
      return () => {
        c0 = true;
      };
    }, items4);
    const callback3 = obj.useCallback(f102704, []);
    if (null != tmp16) {
      let state1;
      if (tmp16.load === callback2) {
        state1 = tmp16.state;
      }
      obj3 = { state: state1, retry: callback3, refresh: tmp19 };
      const items5 = [arg0, hasItem];
      const callback4 = obj.useCallback(() => {
        let databaseRestorePoints;
        const tmp = hasItem;
        if (tmp) {
          const obj = conjureHistoryRequests;
          databaseRestorePoints = obj.fetchDatabaseRestorePoints(closure_0, "preview");
        } else {
          databaseRestorePoints = Promise.resolve(closure_5);
        }
        return databaseRestorePoints;
      }, items5);
      c1 = undefined;
      c2 = undefined;
      [tmp22, c1] = tmp4(obj.useState(0), 2);
      tmp4(obj.useState(0), 2);
      [tmp24, c2] = tmp4(obj.useState(null), 2);
      const items6 = [callback4, tmp22];
      tmp4(obj.useState(null), 2);
      const effect2 = obj.useEffect(() => {
        callback6 = false;
        const promise = callback6();
        promise.then((data) => {
          let obj2;
          const tmp = c0;
          if (!tmp) {
            const obj = { load: callback6, state: obj2 };
            const _Date = Date;
            obj2 = { status: "loaded", data, nowMs: Date.now() };
            c2(obj);
          }
        }, () => {
          const tmp = c0;
          if (!tmp) {
            const obj = { load: callback6, state: { status: "failed" } };
            c2(obj);
          }
        });
        return () => {
          c0 = true;
        };
      }, items6);
      const callback5 = obj.useCallback(f102704, []);
      if (null != tmp24) {
        let state4;
        if (tmp24.load === callback4) {
          state4 = tmp24.state;
        }
        obj4 = { state: state4, retry: callback5, refresh: tmp27 };
        const items7 = [arg0, hasItem];
        let callback6 = obj.useCallback(() => {
          let databaseRestoreWindow;
          const tmp = hasItem;
          if (tmp) {
            const obj = conjureHistoryRequests;
            databaseRestoreWindow = obj.fetchDatabaseRestoreWindow(closure_0, "preview");
          } else {
            databaseRestoreWindow = Promise.resolve(null);
          }
          return databaseRestoreWindow;
        }, items7);
        c1 = undefined;
        c2 = undefined;
        [tmp30, c1] = tmp4(obj.useState(0), 2);
        tmp4(obj.useState(0), 2);
        [tmp32, c2] = tmp4(obj.useState(null), 2);
        const items8 = [callback6, tmp30];
        tmp4(obj.useState(null), 2);
        const effect3 = obj.useEffect(() => {
          callback6 = false;
          const promise = callback6();
          promise.then((data) => {
            let obj2;
            const tmp = c0;
            if (!tmp) {
              const obj = { load: callback6, state: obj2 };
              const _Date = Date;
              obj2 = { status: "loaded", data, nowMs: Date.now() };
              c2(obj);
            }
          }, () => {
            const tmp = c0;
            if (!tmp) {
              const obj = { load: callback6, state: { status: "failed" } };
              c2(obj);
            }
          });
          return () => {
            c0 = true;
          };
        }, items8);
        const callback7 = obj.useCallback(f102704, []);
        if (null != tmp32) {
          let state5;
          if (tmp32.load === callback6) {
            state5 = tmp32.state;
          }
          const obj5 = { state: state5, retry: callback7, refresh: tmp35 };
          const refresh = obj3.refresh;
          const refresh2 = obj4.refresh;
          const refresh3 = obj5.refresh;
          const items9 = [refresh, refresh2, refresh3];
          const callback8 = obj.useCallback(() => {
            refresh();
            refresh2();
            refresh3();
          }, items9);
          let state2 = obj2.state;
          const items10 = [state2];
          const mapped = memo.map((environment) => {
            let tmp;
            const obj = { environment, backups: tmp };
            if ("preview" === environment) {
              closure_0 = obj4;
              closure_1 = obj5;
              const state = obj4.state;
              state2 = obj5.state;
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
                obj4 = {
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
                tmp = obj4;
              }
              obj2 = { status: "failed" };
            } else {
              tmp = obj3;
            }
            return obj;
          });
          const state3 = obj4.state;
          const obj6 = {
            sharedDatabase: !hasItem,
            versions: obj2,
            databases: mapped,
            previewBackups: "loaded" === state3.status ? state3.data : obj5,
            previewBackupsLoading: "loading" === state3.status,
            refreshAllBackups: callback8,
            versionTitles: obj.useMemo(() => {
                      map = new Map();
                      if ("loaded" === state2.status) {
                        const entries = state2.data.entries;
                        for (const item10015 of entries) {
                          set = map.set;
                          let sha = item10015.sha;
                          let obj = ConjureHistoryFormat;
                          let result = set(sha, obj.versionTitle(item10015.subject).short);
                          continue;
                        }
                      }
                      return map;
                    }, items10)
          };
          return obj6;
        }
        state5 = { status: "loading" };
      }
      state4 = { status: "loading" };
    }
    state1 = { status: "loading" };
  }
};
export function useHistoryLoad(callback) {
  let closure_1;
  let closure_129_2;
  let first;
  let tmp4;
  let closure_0 = callback;
  [first, closure_1] = react.useState(0);
  [tmp4, closure_129_2] = react.useState(null);
  const items = [callback, first];
  _slicedToArray(react.useState(null), 2);
  const effect = react.useEffect(() => {
    callback6 = false;
    const promise = callback6();
    promise.then((data) => {
      let obj2;
      const tmp = c0;
      if (!tmp) {
        const obj = { load: callback6, state: obj2 };
        const _Date = Date;
        obj2 = { status: "loaded", data, nowMs: Date.now() };
        c2(obj);
      }
    }, () => {
      const tmp = c0;
      if (!tmp) {
        const obj = { load: callback6, state: { status: "failed" } };
        c2(obj);
      }
    });
    return () => {
      c0 = true;
    };
  }, items);
  callback = react.useCallback(f102704, []);
  if (null != tmp4) {
    if (tmp4.load === callback) {
      const state = tmp4.state;
    }
    return { state: { status: "loading" }, retry: callback, refresh: tmp7 };
  }
}
