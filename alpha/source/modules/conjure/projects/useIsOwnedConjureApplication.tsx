// Module ID: 12288
// Function ID: 12289
// Name: useIsOwnedConjureApplication
// Dependencies: [19, 2086, 10617, 569, 558, 576, 6939, 504, 11369, 2]

// Module 12288 (useIsOwnedConjureApplication)
import BackoffDefault from "Backoff" /* 569 */;
import ConjureUtils from "ConjureUtils" /* 6939 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 10617 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11369 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, dependencyMap, projectsFetchState;

const isProjectOwner = ConjureProjectStore2.isProjectOwner;
const useIsOwnedVibegrationsApplication = "useIsOwnedVibegrationsApplication";
let tmp2 = new BackoffDefault(30000, 300000);
let closure_7 = tmp2;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsOwnedConjureApplication(arg0, arg1) {
  let closure_0;
  let closure_1;
  let first;
  let stateFromStores1;
  _require = arg0;
  dependencyMap = arg1;
  let tmp = _require;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp5 = stateFromStores1;
    const items = [stateFromStores1];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp6;
    let tmp7;
    let tmp10;
    let tmp9;
    if (cResult[2] === arg1) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ConjureProjectStore];
      class F {
        constructor() {
          projectsFetchState = projectsFetchState.getProjectsFetchState();
          let type;
          if (projectsFetchState != null) {
            type = projectsFetchState.type;
          }
          if (type == null) {
            type = null;
          }
          return type;
        }
      }
      cResult[5] = items1;
      cResult[6] = F;
      tmp10 = F;
      tmp9 = items1;
    } else {
      tmp9 = cResult[5];
      tmp10 = cResult[6];
    }
    const tmpResult3 = tmp(504);
    stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
    if (cResult[7] === stateFromStores) {
      let tmp13;
      let tmp14;
      let tmp17;
      if (cResult[8] === stateFromStores1) {
        tmp13 = cResult[9];
        tmp14 = cResult[10];
      }
      const effect = stateFromStores.useEffect(tmp13, tmp14);
      class F {
        constructor() {
          projectsFetchState = projectsFetchState.getProjectsFetchState();
          let type;
          if (projectsFetchState != null) {
            type = projectsFetchState.type;
          }
          if (type == null) {
            type = null;
          }
          return type;
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ConjureProjectStore];
        class F {
          constructor() {
            projectsFetchState = projectsFetchState.getProjectsFetchState();
            let type;
            if (projectsFetchState != null) {
              type = projectsFetchState.type;
            }
            if (type == null) {
              type = null;
            }
            return type;
          }
        }
        cResult[11] = items2;
        tmp17 = items2;
      } else {
        tmp17 = cResult[11];
      }
      if (cResult[12] === arg0) {
        let tmp19;
        let tmp20;
        if (cResult[13] === stateFromStores) {
          tmp19 = cResult[14];
          tmp20 = cResult[15];
        }
        const tmpResult4 = tmp(504);
        return tmpResult4.useStateFromStores(tmp17, tmp19, tmp20);
      }
      class A {
        constructor() {
          const tmp = stateFromStores;
          if (tmp) {
            if (null != closure_0) {
              const result = ConjureProjectStore.findProjectByApplicationId(tmp2);
              let tmp5 = null == result;
              const obj = ConjureProjectStore;
              if (!tmp5) {
                tmp5 = !isProjectOwner(result);
              }
              let tmp7 = !tmp5;
              if (tmp5) {
                projectsFetchState = obj.getProjectsFetchState();
                let type;
                if (projectsFetchState != null) {
                  type = projectsFetchState.type;
                }
                tmp7 = "success" !== type && null;
              }
              return tmp7;
            }
          }
          return false;
        }
      }
      const items3 = [stateFromStores, arg0];
      cResult[12] = arg0;
      cResult[13] = stateFromStores;
      cResult[14] = A;
      cResult[15] = items3;
      tmp20 = items3;
      tmp19 = A;
    }
    const fn2 = function _() {
      if ("success" === stateFromStores1) {
        closure_7.succeed();
      }
      const tmp4 = stateFromStores;
      if (tmp4) {
        if (null != stateFromStores1) {
          const pending = "error" !== tmp || closure_7.pending;
          if (!pending) {
            closure_7.fail(() => {
              const obj = closure_1_0(closure_1_1[8]);
              return obj.listProjects();
            });
          }
        } else {
          let obj = ConjureActionCreators;
          obj.listProjects();
        }
      }
    };
    const items4 = [stateFromStores, stateFromStores1];
    cResult[7] = stateFromStores;
    cResult[8] = stateFromStores1;
    cResult[9] = fn2;
    cResult[10] = items4;
    tmp14 = items4;
    tmp13 = fn2;
  }
  const fn = function j() {
    let tmp = closure_1 && null != closure_0;
    if (tmp) {
      const obj = ConjureUtils;
      tmp = obj.eligibleConjureGuilds(GuildStore.getGuildsArray(), useIsOwnedVibegrationsApplication).length > 0;
    }
    return tmp;
  };
  const items5 = [arg1, arg0];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items5;
  tmp7 = items5;
  tmp6 = fn;
}) : (function useIsOwnedConjureApplication(arg0, arg1) {
  let closure_0;
  let closure_1;
  let stateFromStores1;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("get initialized");
  const items = [stateFromStores1];
  const items1 = [arg1, arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = closure_1 && null != closure_0;
    if (tmp) {
      const obj = ConjureUtils;
      tmp = obj.eligibleConjureGuilds(GuildStore.getGuildsArray(), useIsOwnedVibegrationsApplication).length > 0;
    }
    return tmp;
  }, items1);
  const items2 = [ConjureProjectStore];
  const obj2 = require("get initialized");
  stateFromStores1 = obj2.useStateFromStores(items2, () => {
    projectsFetchState = projectsFetchState.getProjectsFetchState();
    let type;
    if (projectsFetchState != null) {
      type = projectsFetchState.type;
    }
    if (type == null) {
      type = null;
    }
    return type;
  });
  const items3 = [stateFromStores, stateFromStores1];
  const effect = stateFromStores.useEffect(() => {
    if ("success" === stateFromStores1) {
      closure_7.succeed();
    }
    const tmp4 = stateFromStores;
    if (tmp4) {
      if (null != stateFromStores1) {
        const pending = "error" !== tmp || closure_7.pending;
        if (!pending) {
          closure_7.fail(() => {
            const obj = closure_1_0(closure_1_1[8]);
            return obj.listProjects();
          });
        }
      } else {
        let obj = ConjureActionCreators;
        obj.listProjects();
      }
    }
  }, items3);
  const items4 = [ConjureProjectStore];
  const items5 = [stateFromStores, arg0];
  const obj3 = require("get initialized");
  return obj3.useStateFromStores(items4, () => {
    const tmp = stateFromStores;
    if (tmp) {
      if (null != closure_0) {
        const result = ConjureProjectStore.findProjectByApplicationId(tmp2);
        let tmp5 = null == result;
        const obj = ConjureProjectStore;
        if (!tmp5) {
          tmp5 = !isProjectOwner(result);
        }
        let tmp7 = !tmp5;
        if (tmp5) {
          projectsFetchState = obj.getProjectsFetchState();
          let type;
          if (projectsFetchState != null) {
            type = projectsFetchState.type;
          }
          tmp7 = "success" !== type && null;
        }
        return tmp7;
      }
    }
    return false;
  }, items5);
});
let result = size.fileFinishedImporting("modules/conjure/projects/useIsOwnedConjureApplication.tsx");

export default tmp3;
