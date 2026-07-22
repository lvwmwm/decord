// Module ID: 12002
// Function ID: 92747
// Name: useVisibleUserProfileConnectionsAndAppIdentities
// Dependencies: []
// Exports: default

// Module 12002 (useVisibleUserProfileConnectionsAndAppIdentities)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_profile/hooks/useVisibleUserProfileConnectionsAndAppIdentities.tsx");

export default function useVisibleUserProfileConnectionsAndAppIdentities(arg0) {
  const filteredAppIdentities = importDefault(dependencyMap[1])(arg0).filteredAppIdentities;
  const arg1 = filteredAppIdentities;
  const tmp = importDefault(dependencyMap[2])(arg0);
  const importDefault = tmp;
  const items = [filteredAppIdentities];
  const memo = React.useMemo(() => {
    let mapped;
    if (null != filteredAppIdentities) {
      mapped = filteredAppIdentities.map((application_id) => application_id.application_id);
    }
    if (null == mapped) {
      mapped = [];
    }
    return new Set(mapped);
  }, items);
  const dependencyMap = memo;
  const items1 = [];
  HermesBuiltin.arraySpread(memo, 0);
  const tmp3 = importDefault(dependencyMap[3]);
  const found = importDefault(dependencyMap[3])(items1).filter(arg1(dependencyMap[4]).isNotNullish);
  const React = found;
  const tmp3Result = importDefault(dependencyMap[3])(items1);
  const items2 = [filteredAppIdentities, found];
  const items3 = [tmp, memo];
  return {
    appIdentities: React.useMemo(() => {
      const mapped = filteredAppIdentities.map((identity) => ({ identity, application: closure_3.find((id) => id.id === id.application_id) }));
      return mapped.filter((application) => null != application.application);
    }, items2),
    connections: React.useMemo(() => tmp.filter((type) => {
      const value = callback(set[5]).get(type.type);
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
        tmp2 = !set.has(value.migrationData.replacedBy);
      }
      return tmp2;
    }), items3)
  };
};
