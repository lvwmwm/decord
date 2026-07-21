// Module ID: 11999
// Function ID: 92731
// Name: useConnectionFilteredAppIdentities
// Dependencies: []
// Exports: default

// Module 11999 (useConnectionFilteredAppIdentities)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[1]).APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/user_application_identity/hooks/useConnectionFilteredAppIdentities.tsx");

export default function useConnectionFilteredAppIdentities(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let arg1;
  let dependencyMap;
  const includeHidden = obj.includeHidden;
  arg1 = tmp;
  const userApplicationIdentities = arg1(dependencyMap[2]).useUserApplicationIdentities(arg0);
  const data = userApplicationIdentities.data;
  dependencyMap = data;
  obj = {
    isLoading: userApplicationIdentities.isLoading,
    filteredAppIdentities: React.useMemo(() => null != data ? data : [].filter((profile) => {
      let someResult = closure_3.some((applicationId) => {
        let migrationExperimentEnabled = applicationId.applicationId === applicationId.application_id;
        if (migrationExperimentEnabled) {
          migrationExperimentEnabled = applicationId.getMigrationExperimentEnabled("useConnectionFilteredAppIdentities");
        }
        return migrationExperimentEnabled;
      });
      if (someResult) {
        someResult = null != profile.profile;
      }
      if (someResult) {
        someResult = null != profile.profile.username;
      }
      if (someResult) {
        someResult = true === profile.profile.connection_visible || profile;
        const tmp4 = true === profile.profile.connection_visible || profile;
      }
      return someResult;
    }), items)
  };
  const items = [data, undefined !== includeHidden && includeHidden];
  return obj;
};
