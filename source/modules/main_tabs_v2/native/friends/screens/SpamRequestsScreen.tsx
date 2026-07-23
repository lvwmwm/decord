// Module ID: 15468
// Function ID: 119073
// Name: SpamRequestsScreen
// Dependencies: [31, 3767, 1849, 8818, 653, 33, 5464, 5484, 566, 15467, 8559, 480, 8492, 8825, 2]
// Exports: default

// Module 15468 (SpamRequestsScreen)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { UserRowModes } from "UserRowModes";
import { RelationshipTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/SpamRequestsScreen.tsx");

export default function SpamRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const analyticsLocations = stateFromStoresArray(stateFromStoresArray1[6])(stateFromStoresArray(stateFromStoresArray1[7]).FRIEND_REQUESTS).analyticsLocations;
  let obj = analyticsLocations(stateFromStoresArray1[8]);
  const items = [_isNativeReflectConstruct];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => analyticsLocations(stateFromStoresArray1[9]).getPendingRelationshipIds(outer1_4.getMutableRelationships()).spamIds);
  obj = {};
  const tmp = stateFromStoresArray(stateFromStoresArray1[6]);
  obj.name = analyticsLocations(stateFromStoresArray1[11]).ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX;
  stateFromStoresArray(stateFromStoresArray1[10])(obj);
  const tmp3 = stateFromStoresArray(stateFromStoresArray1[10]);
  const items1 = [closure_5];
  const items2 = [stateFromStoresArray];
  stateFromStoresArray1 = analyticsLocations(stateFromStoresArray1[8]).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStoresArray.map((arg0) => outer2_5.getUser(arg0));
    return mapped.filter((arg0) => null != arg0);
  }, items2);
  const items3 = [analyticsLocations];
  callback = callback.useCallback((id) => {
    stateFromStoresArray(stateFromStoresArray1[12])({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  const items4 = [callback, stateFromStoresArray1];
  const callback1 = callback.useCallback(() => {

  }, []);
  if (0 !== stateFromStoresArray1.length) {
    obj = { getItemProps: tmp7, getSectionProps: callback1 };
    const items5 = [stateFromStoresArray1.length];
    obj.sections = items5;
    return jsx(analyticsLocations(stateFromStoresArray1[13]).UsersFastList, { getItemProps: tmp7, getSectionProps: callback1 });
  } else {
    navigation.goBack();
  }
  const obj3 = analyticsLocations(stateFromStoresArray1[8]);
};
