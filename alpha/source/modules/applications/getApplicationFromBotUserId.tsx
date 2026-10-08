// Module ID: 12348
// Function ID: 12349
// Name: getApplicationFromBotUserId
// Dependencies: [7309, 1085, 558, 576, 504, 2]

// Module 12348 (getApplicationFromBotUserId)
import Constants from "Constants" /* 1085 */;
import UserProfileStore from "UserProfileStore" /* 7309 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetApplicationFromBotUserId(arg0) {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  let tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
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
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  return stateFromStores;
}) : (function useGetApplicationFromBotUserId(arg0) {
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
});
const result = size.fileFinishedImporting("modules/applications/getApplicationFromBotUserId.tsx");

export default tmp2;
