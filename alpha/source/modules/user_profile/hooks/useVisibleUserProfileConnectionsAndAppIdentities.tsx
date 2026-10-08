// Module ID: 13232
// Function ID: 13233
// Name: useVisibleUserProfileConnectionsAndAppIdentities
// Dependencies: [19, 558, 576, 13233, 13234, 6847, 1387, 5759, 2]

// Module 13232 (useVisibleUserProfileConnectionsAndAppIdentities)
import PlatformsDefault from "Platforms" /* 5759 */;
import useConnectionFilteredAppIdentitiesDefault from "useConnectionFilteredAppIdentities" /* 13233 */;
import useUserProfileConnectionsDefault from "useUserProfileConnections" /* 13234 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let tmp4;
const useGetOrFetchApplicationsDefault = tmp4(6847);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVisibleUserProfileConnectionsAndAppIdentities(arg0) {
  let closure_1;
  let tmp11;
  let tmp15;
  let tmp18;
  let tmp19;
  let tmp5;
  let obj = require("react");
  const cResult = obj.c(20);
  const prop = useConnectionFilteredAppIdentitiesDefault(arg0).filteredAppIdentities;
  const arr2 = useUserProfileConnectionsDefault(arg0);
  const tmp = _require;
  if (cResult[0] !== prop) {
    let mapped;
    const _Set = Set;
    if (prop != null) {
      mapped = prop.map((application_id) => application_id.application_id);
    }
    if (mapped == null) {
      mapped = [];
    }
    const self2 = this;
    const self = this;
    const _Set1 = new _Set(mapped);
    cResult[0] = prop;
    cResult[1] = _Set1;
    tmp5 = _Set1;
  } else {
    tmp5 = cResult[1];
  }
  _require = tmp5;
  if (cResult[2] !== tmp5) {
    const items = [];
    HermesBuiltin.arraySpread(items, tmp5, 0);
    cResult[2] = tmp5;
    cResult[3] = items;
    tmp11 = items;
  } else {
    tmp11 = cResult[3];
  }
  const arr5 = useGetOrFetchApplicationsDefault(tmp11);
  if (cResult[4] !== arr5) {
    const found = arr5.filter(tmp(1387).isNotNullish);
    cResult[4] = arr5;
    cResult[5] = found;
    tmp15 = found;
  } else {
    tmp15 = cResult[5];
  }
  importDefault = tmp15;
  if (cResult[6] === tmp15) {
    let tmp17;
    let tmp22;
    if (cResult[7] === prop) {
      tmp17 = cResult[8];
    }
    if (cResult[12] === tmp5) {
      let tmp21;
      if (cResult[13] === arr2) {
        tmp21 = cResult[14];
      }
      if (cResult[17] === tmp17) {
        let tmp24;
        if (cResult[18] === tmp21) {
          tmp24 = cResult[19];
        }
        return tmp24;
      }
      const obj2 = { appIdentities: tmp17, connections: tmp21 };
      cResult[17] = tmp17;
      cResult[18] = tmp21;
      cResult[19] = obj2;
      tmp24 = obj2;
    }
    if (cResult[15] !== tmp5) {
      const fn3 = function y(type) {
        const obj = PlatformsDefault;
        const value = obj.get(type.type);
        let migrationExperimentEnabled;
        if (value != null) {
          const migrationData = value.migrationData;
          if (migrationData != null) {
            migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("useVisibleUserProfileConnectionsAndAppIdentities");
          }
        }
        let tmp3 = !migrationExperimentEnabled;
        if (migrationExperimentEnabled) {
          tmp3 = !set.has(value.migrationData.replacedBy);
        }
        return tmp3;
      };
      cResult[15] = tmp5;
      cResult[16] = fn3;
      tmp22 = fn3;
    } else {
      tmp22 = cResult[16];
    }
    const found1 = arr2.filter(tmp22);
    cResult[12] = tmp5;
    cResult[13] = arr2;
    cResult[14] = found1;
    tmp21 = found1;
  }
  if (cResult[9] !== tmp15) {
    const fn = function v(identity) {
      let closure_0 = identity;
      const obj = { identity, application: closure_1.find((id) => id.id === application_id.application_id) };
      return obj;
    };
    cResult[9] = tmp15;
    cResult[10] = fn;
    tmp18 = fn;
  } else {
    tmp18 = cResult[10];
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function _(application) {
      return null != application.application;
    };
    cResult[11] = fn2;
    tmp19 = fn2;
  } else {
    tmp19 = cResult[11];
  }
  const mapped1 = prop.map(tmp18);
  const found2 = mapped1.filter(tmp19);
  cResult[6] = tmp15;
  cResult[7] = prop;
  cResult[8] = found2;
  tmp17 = found2;
}) : (function useVisibleUserProfileConnectionsAndAppIdentities(arg0) {
  let closure_1;
  let found;
  let items2;
  let items3;
  let memo;
  const filteredAppIdentities = require("useConnectionFilteredAppIdentities")(arg0).filteredAppIdentities;
  const tmp2 = require("useUserProfileConnections")(arg0);
  importDefault = tmp2;
  const items = [filteredAppIdentities];
  memo = found.useMemo(() => {
    let mapped;
    const _Set = Set;
    const arr = filteredAppIdentities;
    if (filteredAppIdentities != null) {
      mapped = arr.map((application_id) => application_id.application_id);
    }
    if (mapped == null) {
      mapped = [];
    }
    const _Set1 = new _Set(mapped);
    return _Set1;
  }, items);
  const items1 = [];
  const tmp4 = require("useGetOrFetchApplications");
  HermesBuiltin.arraySpread(items1, memo, 0);
  const tmp4Result = tmp4(items1);
  found = tmp4Result.filter(filteredAppIdentities(memo[6]).isNotNullish);
  let obj = {
    appIdentities: found.useMemo(() => {
      const mapped = filteredAppIdentities.map((identity) => {
        let closure_0 = identity;
        const obj = { identity, application: found.find((id) => id.id === application_id.application_id) };
        return obj;
      });
      return mapped.filter((application) => null != application.application);
    }, items2),
    connections: found.useMemo(() => closure_1.filter((type) => {
      const obj = closure_1(memo[7]);
      const value = obj.get(type.type);
      let migrationExperimentEnabled;
      if (value != null) {
        const migrationData = value.migrationData;
        if (migrationData != null) {
          migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("useVisibleUserProfileConnectionsAndAppIdentities");
        }
      }
      let tmp3 = !migrationExperimentEnabled;
      if (migrationExperimentEnabled) {
        tmp3 = !set.has(value.migrationData.replacedBy);
      }
      return tmp3;
    }), items3)
  };
  items2 = [filteredAppIdentities, found];
  items3 = [tmp2, memo];
  return obj;
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/useVisibleUserProfileConnectionsAndAppIdentities.tsx");

export default tmp2;
