// Module ID: 19980
// Function ID: 19981
// Name: useConjureServerApplicationIds
// Dependencies: [19, 2165, 504, 1451, 6969, 11561, 2]
// Exports: default

// Module 19980 (useConjureServerApplicationIds)
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6969 */;
import prefetchConjureApplicationDefault from "prefetchConjureApplication" /* 11561 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, application;

let result = size.fileFinishedImporting("modules/conjure/server_apps/useConjureServerApplicationIds.tsx");

export default function useConjureServerApplicationIds(arg0, join) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  const joined = join.join(",");
  const useStateFromStores = require("get initialized").useStateFromStores;
  const items = [];
  require("get initialized");
  items[0] = require("ApexExperiment").ApexExperimentStore;
  const items1 = [arg0];
  stateFromStores = useStateFromStores(items, () => {
    let result = null != closure_0;
    if (result) {
      const obj = ConjureGuildExperiment;
      result = obj.isConjureGuildEnabledWithoutExposure(tmp, "ConjureServerApplicationIds");
    }
    return result;
  }, items1);
  const items2 = [stateFromStores, joined];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      const str = joined;
      if ("" !== joined) {
        const parts = str.split(",");
        for (const item10010 of parts) {
          let tmp7 = prefetchConjureApplicationDefault(item10010);
          continue;
        }
      }
    }
  }, items2);
  let obj = require("get initialized");
  const items3 = [ApplicationStore];
  const items4 = [stateFromStores, joined];
  return obj.useStateFromStoresArray(items3, () => {
    const tmp = stateFromStores;
    if (tmp) {
      const str = joined;
      if ("" !== joined) {
        const parts = str.split(",");
        const found = parts.filter((item) => {
          application = application.getApplication(item);
          let conjureProjectId;
          if (application != null) {
            conjureProjectId = application.conjureProjectId;
          }
          return null != conjureProjectId;
        });
      }
      return [];
    }
  }, items4);
};
