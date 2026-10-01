// Module ID: 16599
// Function ID: 16600
// Name: SpamRequestsScreen
// Dependencies: [19, 4479, 1372, 10320, 1074, 21, 6583, 6603, 504, 16598, 8230, 1249, 7624, 10326, 2]
// Exports: default

// Module 16599 (SpamRequestsScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import UserRowConstants from "UserRowConstants" /* 10320 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const UserRowModes = UserRowConstants.UserRowModes;
const RelationshipTypes = Constants.RelationshipTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/SpamRequestsScreen.tsx");

export default function SpamRequestsScreen(navigation) {
  let mutableRelationships;
  navigation = navigation.navigation;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let onPress;
  const tmp2 = stateFromStoresArray(stateFromStoresArray1[6]);
  const analyticsLocations = tmp2(stateFromStoresArray(stateFromStoresArray1[7]).FRIEND_REQUESTS).analyticsLocations;
  let obj = analyticsLocations(stateFromStoresArray1[8]);
  const items = [RelationshipStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const obj = analyticsLocations(stateFromStoresArray1[9]);
    return obj.getPendingRelationshipIds(mutableRelationships.getMutableRelationships()).spamIds;
  });
  const obj2 = { name: analyticsLocations(stateFromStoresArray1[11]).ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX };
  const tmp5 = stateFromStoresArray(stateFromStoresArray1[10]);
  tmp5(obj2);
  const items1 = [UserStore];
  const items2 = [stateFromStoresArray];
  const obj3 = analyticsLocations(stateFromStoresArray1[8]);
  const tmp = stateFromStoresArray1;
  stateFromStoresArray1 = obj3.useStateFromStoresArray(items1, () => {
    let user;
    const mapped = stateFromStoresArray.map((item) => user.getUser(item));
    return mapped.filter((item) => null != item);
  }, items2);
  const items3 = [analyticsLocations];
  onPress = onPress.useCallback((id) => {
    const obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items3);
  const items4 = [onPress, stateFromStoresArray1];
  const callback1 = onPress.useCallback(() => {

  }, []);
  const tmp3 = analyticsLocations;
  if (0 !== stateFromStoresArray1.length) {
    const items5 = [stateFromStoresArray1.length];
    return jsx(tmp3(tmp[13]).UsersFastList, { getItemProps: tmp9, getSectionProps: callback1, sections: items5 });
  } else {
    navigation.goBack();
  }
};
