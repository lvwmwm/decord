// Module ID: 18852
// Function ID: 18853
// Name: IgnoredUserRequestsScreen
// Dependencies: [19, 4956, 1383, 10727, 1072, 21, 7326, 7351, 504, 18850, 8750, 10733, 2]
// Exports: default

// Module 18852 (IgnoredUserRequestsScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8750 */;
import UserRowConstants from "UserRowConstants" /* 10727 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
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
