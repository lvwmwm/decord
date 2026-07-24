// Module ID: 12144
// Function ID: 95160
// Name: useVisibleUserProfileConnectionsAndAppIdentities
// Dependencies: [31, 12145, 12146, 5468, 1327, 4814, 2]
// Exports: default

// Module 12144 (useVisibleUserProfileConnectionsAndAppIdentities)
import result from "result";

const require = arg1;
const result = require("useUserProfileConnections").fileFinishedImporting("modules/user_profile/hooks/useVisibleUserProfileConnectionsAndAppIdentities.tsx");

export default function useVisibleUserProfileConnectionsAndAppIdentities(arg0) {
  const filteredAppIdentities = importDefault(memo[1])(arg0).filteredAppIdentities;
  const tmp = importDefault(memo[2])(arg0);
  importDefault = tmp;
  const items = [filteredAppIdentities];
  memo = found.useMemo(() => {
    let mapped;
    if (null != filteredAppIdentities) {
      mapped = filteredAppIdentities.map((application_id) => application_id.application_id);
    }
    if (null == mapped) {
      mapped = [];
    }
    return new Set(mapped);
  }, items);
  const items1 = [];
  HermesBuiltin.arraySpread(memo, 0);
  const tmp3 = importDefault(memo[3]);
  found = importDefault(memo[3])(items1).filter(filteredAppIdentities(memo[4]).isNotNullish);
  const tmp3Result = importDefault(memo[3])(items1);
  const items2 = [filteredAppIdentities, found];
  const items3 = [tmp, memo];
  return {
    appIdentities: found.useMemo(() => {
      const mapped = filteredAppIdentities.map((identity) => {
        let closure_0 = identity;
        return { identity, application: outer1_3.find((id) => id.id === identity.application_id) };
      });
      return mapped.filter((application) => null != application.application);
    }, items2),
    connections: found.useMemo(() => tmp.filter((type) => {
      const value = callback(memo[5]).get(type.type);
      let tmp2 = null == value;
      if (!tmp2) {
        const migrationData = value.migrationData;
        tmp2 = null == migrationData;
        const obj2 = migrationData;
      }
      if (!tmp2) {
        tmp2 = !obj2.getMigrationExperimentEnabled("useVisibleUserProfileConnectionsAndAppIdentities");
      }
      if (!tmp2) {
        tmp2 = !outer1_2.has(value.migrationData.replacedBy);
      }
      return tmp2;
    }), items3)
  };
};
