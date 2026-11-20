// Module ID: 13367
// Function ID: 13368
// Name: getApplicationFromBotUserId
// Dependencies: [6837, 1071, 504, 2]
// Exports: default

// Module 13367 (getApplicationFromBotUserId)
import Constants from "Constants" /* 1071 */;
import UserProfileStore from "UserProfileStore" /* 6837 */;
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
