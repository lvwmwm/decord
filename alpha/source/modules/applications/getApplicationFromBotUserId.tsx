// Module ID: 14385
// Function ID: 14386
// Name: getApplicationFromBotUserId
// Dependencies: [7912, 1072, 504, 2]
// Exports: default

// Module 14385 (getApplicationFromBotUserId)
import Constants from "Constants" /* 1072 */;
import UserProfileStore from "UserProfileStore" /* 7912 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const result = size.fileFinishedImporting("modules/applications/getApplicationFromBotUserId.tsx");

export default function useGetApplicationFromBotUserId(arg0) {
  let closure_0;
  _require = arg0;
  const items = [UserProfileStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = closure_0;
    let tmp2;
    if (null !== closure_0) {
      const getUserProfile = UserProfileStore.getUserProfile;
      if (tmp == null) {
        tmp = EMPTY_STRING_SNOWFLAKE_ID;
      }
      const userProfile = getUserProfile(tmp);
      let application;
      if (userProfile != null) {
        application = userProfile.application;
      }
      tmp2 = application;
    }
    return tmp2;
  });
  return stateFromStores;
};
