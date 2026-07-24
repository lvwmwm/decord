// Module ID: 12145
// Function ID: 95170
// Name: useConnectionFilteredAppIdentities
// Dependencies: [31, 4815, 12122, 2]
// Exports: default

// Module 12145 (useConnectionFilteredAppIdentities)
import result from "result";
import { APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS as closure_3 } from "items1";

const require = arg1;
const result = require("fetchStore").fileFinishedImporting("modules/user_application_identity/hooks/useConnectionFilteredAppIdentities.tsx");

export default function useConnectionFilteredAppIdentities(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let _require;
  let data;
  const includeHidden = obj.includeHidden;
  _require = tmp;
  const userApplicationIdentities = _require(data[2]).useUserApplicationIdentities(arg0);
  data = userApplicationIdentities.data;
  obj = {
    isLoading: userApplicationIdentities.isLoading,
    filteredAppIdentities: React.useMemo(() => null != data ? data : [].filter((profile) => {
      let closure_0 = profile;
      let someResult = outer2_3.some((applicationId) => {
        let migrationExperimentEnabled = applicationId.applicationId === profile.application_id;
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
        someResult = true === profile.profile.connection_visible || outer1_0;
        const tmp4 = true === profile.profile.connection_visible || outer1_0;
      }
      return someResult;
    }), items)
  };
  items = [data, undefined !== includeHidden && includeHidden];
  return obj;
};
