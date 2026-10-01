// Module ID: 12673
// Function ID: 12674
// Name: useConnectionFilteredAppIdentities
// Dependencies: [19, 2007, 8488, 2]
// Exports: default

// Module 12673 (useConnectionFilteredAppIdentities)
import UserApplicationIdentityConstants from "UserApplicationIdentityConstants" /* 2007 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

let closure_3 = UserApplicationIdentityConstants.APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS;
const result = size.fileFinishedImporting("modules/user_application_identity/hooks/useConnectionFilteredAppIdentities.tsx");

export default function useConnectionFilteredAppIdentities(arg0) {
  let items;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let data;
  const includeHidden = obj.includeHidden;
  _require = tmp;
  const obj2 = require("UserApplicationIdentityActionCreators");
  const userApplicationIdentities = obj2.useUserApplicationIdentities(arg0);
  data = userApplicationIdentities.data;
  const obj3 = {
    isLoading: userApplicationIdentities.isLoading,
    filteredAppIdentities: react.useMemo(() => {
      let items = data;
      if (data == null) {
        items = [];
      }
      return items.filter((profile) => {
        closure_0 = profile;
        let someResult = closure_2_3.some((applicationId) => {
          const migrationExperimentEnabled = applicationId.applicationId === application_id.application_id && applicationId.getMigrationExperimentEnabled("useConnectionFilteredAppIdentities");
          return migrationExperimentEnabled;
        }) && null != profile.profile && null != profile.profile.username;
        if (someResult) {
          someResult = true === profile.profile.connection_visible || closure_1_0;
        }
        return someResult;
      });
    }, items)
  };
  items = [data, undefined !== includeHidden && includeHidden];
  return obj3;
};
