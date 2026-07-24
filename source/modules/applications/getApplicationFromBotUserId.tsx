// Module ID: 11661
// Function ID: 90560
// Name: useGetApplicationFromBotUserId
// Dependencies: [6855, 653, 566, 2]
// Exports: default

// Module 11661 (useGetApplicationFromBotUserId)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/applications/getApplicationFromBotUserId.tsx");

export default function useGetApplicationFromBotUserId(arg0) {
  const _require = arg0;
  let tmp;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    let tmp;
    if (null !== closure_0) {
      const userProfile = outer1_2.getUserProfile(null != closure_0 ? closure_0 : outer1_3);
      let application;
      if (null != userProfile) {
        application = userProfile.application;
      }
      tmp = application;
    }
    return tmp;
  });
  if (null != stateFromStores) {
    tmp = stateFromStores;
  }
  return tmp;
};
