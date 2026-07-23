// Module ID: 11889
// Function ID: 92009
// Name: useFriendsSinceDate
// Dependencies: [1921, 3767, 653, 624, 4939, 2]
// Exports: useFriendsSinceDate

// Module 11889 (useFriendsSinceDate)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/user_profile/hooks/useFriendsSinceDate.tsx");

export const useFriendsSinceDate = function useFriendsSinceDate(userId) {
  const _require = userId;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_2.locale);
  const obj = _require(624);
  const items1 = [closure_3];
  const items2 = [userId];
  const stateFromStores1 = _require(624).useStateFromStores(items1, () => {
    let since = null;
    if (outer1_3.getRelationshipType(closure_0) === outer1_4.FRIEND) {
      since = outer1_3.getSince(closure_0);
    }
    return since;
  }, items2);
  const obj2 = _require(624);
  return _require(4939).getCreatedAtDate(stateFromStores1, stateFromStores);
};
