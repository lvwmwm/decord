// Module ID: 15469
// Function ID: 119082
// Name: IgnoredUserRequestsScreen
// Dependencies: [31, 3767, 1849, 8818, 653, 33, 5464, 5484, 566, 15467, 8492, 8825, 2]
// Exports: default

// Module 15469 (IgnoredUserRequestsScreen)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { UserRowModes } from "UserRowModes";
import { RelationshipTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/IgnoredUserRequestsScreen.tsx");

export default function IgnoredUserRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const analyticsLocations = stateFromStoresArray(stateFromStores[6])(stateFromStoresArray(stateFromStores[7]).FRIEND_REQUESTS).analyticsLocations;
  let obj = analyticsLocations(stateFromStores[8]);
  const items = [_isNativeReflectConstruct];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => analyticsLocations(stateFromStores[9]).getPendingRelationshipIds(outer1_4.getMutableRelationships()).ignoredUserIds);
  const tmp = stateFromStoresArray(stateFromStores[6]);
  const items1 = [closure_5];
  const items2 = [stateFromStoresArray];
  stateFromStores = analyticsLocations(stateFromStores[8]).useStateFromStores(items1, () => {
    const mapped = stateFromStoresArray.map((arg0) => outer2_5.getUser(arg0));
    return mapped.filter((arg0) => null != arg0);
  }, items2);
  const items3 = [analyticsLocations];
  callback = callback.useCallback((id) => {
    stateFromStoresArray(stateFromStores[10])({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  const items4 = [callback, stateFromStores];
  const callback1 = callback.useCallback(() => {

  }, []);
  if (0 !== stateFromStores.length) {
    obj = { getItemProps: tmp5, getSectionProps: callback1 };
    const items5 = [stateFromStores.length];
    obj.sections = items5;
    return jsx(analyticsLocations(stateFromStores[11]).UsersFastList, { getItemProps: tmp5, getSectionProps: callback1 });
  } else {
    navigation.goBack();
  }
  const obj2 = analyticsLocations(stateFromStores[8]);
};
