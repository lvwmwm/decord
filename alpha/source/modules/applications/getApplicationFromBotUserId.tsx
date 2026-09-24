// Module ID: 12948
// Function ID: 12949
// Name: getApplicationFromBotUserId
// Dependencies: [7945, 1074, 504, 2]
// Exports: default

// Module 12948 (getApplicationFromBotUserId)
import UserProfileStore from "UserProfileStore" /* 7945 */;

const require = globalThis.__r;

const require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/getApplicationFromBotUserId.tsx");

export default function useGetApplicationFromBotUserId(arg0) {
  _require = arg0;
  const items = [UserProfileStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp = closure_0;
    let tmp2;
    if (null !== closure_0) {
      if (tmp == null) {
        tmp = EMPTY_STRING_SNOWFLAKE_ID;
      }
      const userProfile = UserProfileStore.getUserProfile(tmp);
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
