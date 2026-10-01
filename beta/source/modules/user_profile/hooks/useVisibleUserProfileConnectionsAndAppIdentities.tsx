// Module ID: 12672
// Function ID: 12673
// Name: useVisibleUserProfileConnectionsAndAppIdentities
// Dependencies: [19, 12673, 12674, 6589, 1370, 5595, 2]
// Exports: default

// Module 12672 (useVisibleUserProfileConnectionsAndAppIdentities)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

const result = size.fileFinishedImporting("modules/user_profile/hooks/useVisibleUserProfileConnectionsAndAppIdentities.tsx");

export default function useVisibleUserProfileConnectionsAndAppIdentities(arg0) {
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
  found = tmp4Result.filter(filteredAppIdentities(memo[4]).isNotNullish);
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
      const obj = closure_1(memo[5]);
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
};
