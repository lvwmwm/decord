// Module ID: 19119
// Function ID: 19120
// Name: SpamRequestsScreen
// Dependencies: [19, 5083, 1385, 10905, 1072, 21, 7462, 7487, 504, 19118, 6163, 1260, 8891, 10911, 2]
// Exports: default

// Module 19119 (SpamRequestsScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8891 */;
import UserRowConstants from "UserRowConstants" /* 10905 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 5083 */;
import UserStore from "UserStore" /* 1385 */;
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
