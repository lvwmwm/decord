// Module ID: 12214
// Function ID: 12215
// Name: useIsOwnedConjureApplication
// Dependencies: [19, 4885, 6844, 559, 504, 7419, 10875, 2]
// Exports: default

// Module 12214 (useIsOwnedConjureApplication)
import BackoffDefault from "Backoff" /* 559 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6844 */;
import ConjureUtils from "ConjureUtils" /* 7419 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10875 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, dependencyMap, projectsFetchState;

const isProjectOwner = ConjureProjectStore2.isProjectOwner;
const tmp2 = new BackoffDefault(30000, 300000);
let closure_6 = tmp2;
let result = size.fileFinishedImporting("modules/conjure/projects/useIsOwnedConjureApplication.tsx");

export default function useIsOwnedConjureApplication(arg0, arg1) {
  let closure_0;
  let closure_1;
  let stateFromStores1;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("get initialized");
  const items = [stateFromStores1];
  const items1 = [arg1, arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let result = closure_1 && null != closure_0;
    if (result) {
      const obj = ConjureUtils;
      result = obj.hasEligibleConjureGuild(GuildStore.getGuildsArray(), "useIsOwnedConjureApplication");
    }
    return result;
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
      closure_6.succeed();
    }
    const tmp4 = stateFromStores;
    if (tmp4) {
      if (null != stateFromStores1) {
        const pending = "error" !== tmp || closure_6.pending;
        if (!pending) {
          closure_6.fail(() => {
            const obj = closure_1_0(closure_1_1[6]);
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
};
