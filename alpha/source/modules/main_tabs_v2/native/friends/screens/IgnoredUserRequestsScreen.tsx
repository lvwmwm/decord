// Module ID: 18809
// Function ID: 18810
// Name: IgnoredUserRequestsScreen
// Dependencies: [19, 4951, 1384, 10707, 1072, 21, 7320, 7345, 504, 18807, 8742, 10713, 2]
// Exports: default

// Module 18809 (IgnoredUserRequestsScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8742 */;
import UserRowConstants from "UserRowConstants" /* 10707 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const UserRowModes = UserRowConstants.UserRowModes;
const RelationshipTypes = Constants.RelationshipTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/IgnoredUserRequestsScreen.tsx");

export default function IgnoredUserRequestsScreen(navigation) {
  let mutableRelationships;
  navigation = navigation.navigation;
  let stateFromStoresArray;
  let stateFromStores;
  let onPress;
  const tmp2 = stateFromStoresArray(stateFromStores[6]);
  const analyticsLocations = tmp2(stateFromStoresArray(stateFromStores[7]).FRIEND_REQUESTS).analyticsLocations;
  let obj = analyticsLocations(stateFromStores[8]);
  const items = [RelationshipStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const obj = analyticsLocations(stateFromStores[9]);
    return obj.getPendingRelationshipIds(mutableRelationships.getMutableRelationships()).ignoredUserIds;
  });
  const items1 = [UserStore];
  const items2 = [stateFromStoresArray];
  const obj2 = analyticsLocations(stateFromStores[8]);
  const tmp = stateFromStores;
  stateFromStores = obj2.useStateFromStores(items1, () => {
    let user;
    const mapped = stateFromStoresArray.map((item) => user.getUser(item));
    return mapped.filter((item) => null != item);
  }, items2);
  const items3 = [analyticsLocations];
  onPress = onPress.useCallback((id) => {
    const obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items3);
  const items4 = [onPress, stateFromStores];
  const callback1 = onPress.useCallback(() => {

  }, []);
  const tmp3 = analyticsLocations;
  if (0 !== stateFromStores.length) {
    const items5 = [stateFromStores.length];
    return jsx(tmp3(tmp[11]).UsersFastList, { getItemProps: tmp7, getSectionProps: callback1, sections: items5 });
  } else {
    navigation.goBack();
  }
};
