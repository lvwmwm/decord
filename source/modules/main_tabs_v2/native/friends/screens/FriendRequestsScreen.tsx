// Module ID: 15465
// Function ID: 119021
// Name: compareUserItems
// Dependencies: [57, 31, 27, 6882, 3767, 1849, 8818, 653, 9061, 33, 4130, 689, 15466, 1934, 4472, 624, 6883, 3803, 15141, 6884, 21, 5464, 5484, 675, 11986, 5470, 15467, 636, 8492, 1212, 1456, 5503, 5165, 4126, 8360, 4662, 8760, 4660, 9892, 5807, 8825, 2]
// Exports: default

// Module 15465 (compareUserItems)
import _slicedToArray from "_slicedToArray";
import TableRowGroupTitle from "TableRowGroupTitle";
import { View } from "isUndefinedOrNull";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { UserRowModes } from "UserRowModes";
import ME from "ME";
import { MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL as closure_13 } from "RELATIONSHIP_COUNT_ANIMATION_THRESHOLD";
import jsxProd from "Text";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_14;
let closure_15;
const require = arg1;
function compareUserItems(user, user2) {
  if (user.user.id === user2.user.id) {
    let compareResult = importDefault(21).compare(user.applicationId, user2.applicationId);
    const obj2 = importDefault(21);
  } else {
    compareResult = importDefault(21).compare(user.user.id, user2.user.id);
    const obj = importDefault(21);
  }
  return compareResult;
}
({ AnalyticEvents: closure_10, AnalyticsSections: closure_11, RelationshipTypes: closure_12 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = { Incoming: 0, [0]: "Incoming", Outgoing: 1, [1]: "Outgoing" };
_createForOfIteratorHelperLoose = { container: { flex: 1 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, flex: 1 };
_createForOfIteratorHelperLoose.noResultsContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.clearAllContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, justifyContent: "flex-end", flexDirection: "row" };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, justifyContent: "flex-end", flexDirection: "row" };
_createForOfIteratorHelperLoose.clearAll = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, borderColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, minWidth: 2 * require("_createForOfIteratorHelperLoose").space.PX_64, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", paddingVertical: 5, borderWidth: 3 };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, borderColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, minWidth: 2 * require("_createForOfIteratorHelperLoose").space.PX_64, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", paddingVertical: 5, borderWidth: 3 };
_createForOfIteratorHelperLoose.tabs = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsScreen.tsx");

export default function FriendRequestsScreen() {
  let incomingSection;
  let outgoingSection;
  let tmp = callback();
  const analyticsLocations = first(5464)(first(5484).FRIEND_REQUESTS).analyticsLocations;
  (function useNotificationCenterAckFriendRequests() {
    const items = [pendingOutgoingIds];
    const stateFromStoresArray = analyticsLocations(tmp7[15]).useStateFromStoresArray(items, () => {
      const localItems = pendingOutgoingIds.localItems;
      return localItems.filter((type) => {
        let tmp = type.type === analyticsLocations(6883).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
        if (!tmp) {
          tmp = type.type === analyticsLocations(6883).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
        }
        return tmp;
      });
    });
    const NotificationCenterAckedBeforeId = analyticsLocations(tmp7[17]).NotificationCenterAckedBeforeId;
    const setting = NotificationCenterAckedBeforeId.useSetting();
    const items1 = [stateFromStoresArray, setting];
    const effect = gameRelationshipsByType1.useEffect(() => {
      if (stateFromStoresArray.length > 0) {
        const mapped = stateFromStoresArray.map((local_id) => local_id.local_id);
        const _Boolean = Boolean;
        const found = mapped.filter(Boolean);
        const result = analyticsLocations(15141).markNotificationCenterLocalItemsAcked(found);
        const obj = analyticsLocations(15141);
        const result1 = analyticsLocations(15141).bulkMarkNotificationCenterItemsAcked(stateFromStoresArray.filter((addResult) => !analyticsLocations(table[19]).isRemoteAcked(addResult, outer1_1)));
        const obj2 = analyticsLocations(15141);
      }
    }, items1);
  })();
  let effect = gameRelationshipsByType1.useEffect(() => {
    let obj = first(tmp7[23]);
    obj = { friend_add_type: spam.FRIENDS_REQUESTS_MODAL };
    obj.track(outgoing.FRIEND_ADD_VIEWED, obj);
  }, []);
  let obj = analyticsLocations(624);
  let items = [spamIds];
  const tmp5 = gameRelationshipsByType(obj.useStateFromStoresArray(items, () => {
    const items = [spamIds.getMutableRelationships(), spamIds.getVersion()];
    return items;
  }), 2);
  first = tmp5[0];
  const dependencyMap = tmp7;
  let obj1 = analyticsLocations(11986);
  gameRelationshipsByType = obj1.useGameRelationshipsByType(ignoredUsers.PENDING_INCOMING);
  let obj2 = analyticsLocations(11986);
  gameRelationshipsByType1 = obj2.useGameRelationshipsByType(ignoredUsers.PENDING_OUTGOING);
  let items1 = [gameRelationshipsByType, gameRelationshipsByType1];
  const memo = gameRelationshipsByType1.useMemo(() => {
    const set = new Set();
    const item = gameRelationshipsByType.forEach((applicationId) => {
      set.add(applicationId.applicationId);
    });
    const item1 = gameRelationshipsByType1.forEach((applicationId) => {
      set.add(applicationId.applicationId);
    });
    return Array.from(set);
  }, items1);
  first(5470)(memo);
  const items2 = [first, tmp5[1]];
  const memo1 = gameRelationshipsByType1.useMemo(() => analyticsLocations(tmp7[26]).getPendingRelationshipIds(first, tmp7), items2);
  const pendingIncomingIds = memo1.pendingIncomingIds;
  const pendingOutgoingIds = memo1.pendingOutgoingIds;
  spamIds = memo1.spamIds;
  const ignoredUserIds = memo1.ignoredUserIds;
  let obj3 = analyticsLocations(624);
  const items3 = [ignoredUserIds];
  const items4 = [ignoredUserIds, gameRelationshipsByType, gameRelationshipsByType1, pendingIncomingIds, pendingOutgoingIds, spamIds];
  const stateFromStores = obj3.useStateFromStores(items3, () => {
    const mapped = pendingIncomingIds.map((arg0) => ({ user: ignoredUserIds.getUser(arg0), isGameRelationship: false }));
    const found = mapped.filter((user) => null != user.user);
    const mapped1 = gameRelationshipsByType.map((applicationId) => ({ user: ignoredUserIds.getUser(applicationId.id), isGameRelationship: true, applicationId: applicationId.applicationId }));
    const found1 = mapped1.filter((user) => null != user.user);
    const mapped2 = pendingOutgoingIds.map((arg0) => ({ user: ignoredUserIds.getUser(arg0), isGameRelationship: false }));
    const found2 = mapped2.filter((user) => null != user.user);
    const mapped3 = gameRelationshipsByType1.map((applicationId) => ({ user: ignoredUserIds.getUser(applicationId.id), isGameRelationship: true, applicationId: applicationId.applicationId }));
    const found3 = mapped3.filter((user) => null != user.user);
    const obj = {};
    const items = [...found1];
    obj.incoming = items.sort(navigation);
    const items1 = [...found3];
    obj.outgoing = items1.sort(navigation);
    const mapped4 = spamIds.map((arg0) => ({ user: ignoredUserIds.getUser(arg0) }));
    obj.spam = mapped4.filter((user) => null != user.user);
    const mapped5 = ignoredUserIds.map((arg0) => ({ user: ignoredUserIds.getUser(arg0) }));
    obj.ignoredUsers = mapped5.filter((user) => null != user.user);
    return obj;
  }, items4, first(636));
  const incoming = stateFromStores.incoming;
  const outgoing = stateFromStores.outgoing;
  const spam = stateFromStores.spam;
  ignoredUsers = stateFromStores.ignoredUsers;
  const items5 = [ignoredUsers, incoming, outgoing, spam];
  const memo2 = gameRelationshipsByType1.useMemo(() => {
    obj = { incomingData: obj };
    obj = { items: incoming, relationship: ignoredUsers.PENDING_INCOMING };
    const items = [incoming.length, ];
    let num = 0;
    if (spam.length + ignoredUsers.length > 0) {
      num = 1;
    }
    items[1] = num;
    obj.incomingSection = items;
    obj = { items: outgoing, relationship: ignoredUsers.PENDING_OUTGOING };
    obj.outgoingData = obj;
    const items1 = [outgoing.length];
    obj.outgoingSection = items1;
    return obj;
  }, items5);
  const incomingData = memo2.incomingData;
  const outgoingData = memo2.outgoingData;
  ({ outgoingSection, incomingSection } = memo2);
  const tmp15 = gameRelationshipsByType(gameRelationshipsByType1.useState(() => {
    if (0 === incoming.length) {
      if (outgoing.length > 0) {
        let Incoming = closure_16.Outgoing;
      }
      return Incoming;
    }
    Incoming = closure_16.Incoming;
  }), 2);
  const first1 = tmp15[0];
  let closure_16 = tmp15[1];
  const items6 = [analyticsLocations];
  callback = gameRelationshipsByType1.useCallback((id) => {
    first(tmp7[28])({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items6);
  const callback1 = gameRelationshipsByType1.useCallback((arg0) => {
    if (1 === arg0) {
      let obj = { type: "section" };
      obj = {};
      const intl = analyticsLocations(tmp7[29]).intl;
      obj.title = intl.string(analyticsLocations(tmp7[29]).t["NHpP/k"]);
      obj.props = obj;
      return obj;
    }
  }, []);
  let obj4 = analyticsLocations(1456);
  const navigation = obj4.useNavigation();
  const items7 = [first1, incomingData, outgoingData, callback, spam.length, ignoredUsers.length, navigation];
  let tmp21 = first1 === closure_16.Outgoing;
  const callback2 = gameRelationshipsByType1.useCallback((arg0, arg1) => {
    if (1 === arg0) {
      let obj = {
        type: "custom",
        component() {
            let obj = { hasIcons: false };
            let tmp2 = null;
            if (outer1_11.length > 0) {
              obj = {
                onPress() {
                    outer2_18.navigate("friends", { screen: "spam-requests" });
                  }
              };
              const intl = analyticsLocations(1212).intl;
              obj.label = intl.string(analyticsLocations(1212).t.fUQoqD);
              obj = { variant: "text-sm/medium", color: "text-muted", children: outer1_11.length };
              obj.trailing = outgoingData(analyticsLocations(4126).Text, obj);
              obj.arrow = true;
              tmp2 = outgoingData(analyticsLocations(5165).TableRow, obj);
            }
            const items = [tmp2, ];
            let tmp7 = null;
            if (outer1_12.length > 0) {
              const obj1 = {
                onPress() {
                    outer2_18.navigate("friends", { screen: "ignored-user-requests" });
                  }
              };
              const intl2 = analyticsLocations(1212).intl;
              obj1.label = intl2.string(analyticsLocations(1212).t.en1Gkz);
              const obj2 = { variant: "text-sm/medium", color: "text-muted", children: outer1_12.length };
              obj1.trailing = outgoingData(analyticsLocations(4126).Text, obj2);
              obj1.arrow = true;
              tmp7 = outgoingData(analyticsLocations(5165).TableRow, obj1);
            }
            items[1] = tmp7;
            obj.children = items;
            return first1(analyticsLocations(5503).TableRowGroup, obj);
          },
        key: "spamRequests",
        itemType: "spamRequests"
      };
      return obj;
    } else {
      const tmp = first1 === closure_16.Incoming ? incomingData : outgoingData;
      let items = tmp.items;
      obj = { type: "user" };
      obj = { type: tmp.relationship, user: items[arg1].user, onPress: callback, mode: incoming.ACTIONS, start: 0 === arg1, end: arg1 === items.length - 1, applicationId: items[arg1].applicationId, isGameRelationship: items[arg1].isGameRelationship };
      obj.props = obj;
      return obj;
    }
  }, items7);
  if (tmp21) {
    tmp21 = 0 === outgoing.length;
  }
  if (!tmp21) {
    tmp21 = first1 === closure_16.Incoming && 0 === incoming.length && 0 === spam.length && 0 === ignoredUserIds.length;
    const tmp23 = first1 === closure_16.Incoming && 0 === incoming.length && 0 === spam.length && 0 === ignoredUserIds.length;
  }
  let tmp24 = first1 === closure_16.Incoming;
  if (tmp24) {
    tmp24 = incoming.length >= incomingData;
  }
  let obj5 = analyticsLocations(8360);
  obj = {
    pageWidth: 0,
    defaultIndex: first1,
    onSetActiveIndex(arg0) {
      if (0 === arg0) {
        let Outgoing = closure_16.Incoming;
      } else {
        Outgoing = closure_16.Outgoing;
      }
      closure_16(Outgoing);
    }
  };
  obj = { id: str.toString() };
  let intl = analyticsLocations(1212).intl;
  obj.label = intl.string(analyticsLocations(1212).t.bekioP);
  let tmp26 = null;
  obj.page = null;
  const items8 = [obj, ];
  obj1 = { id: str2.toString() };
  let intl2 = analyticsLocations(1212).intl;
  obj1.label = intl2.string(analyticsLocations(1212).t.tWqcIF);
  obj1.page = null;
  items8[1] = obj1;
  obj.items = items8;
  const segmentedControlState = obj5.useSegmentedControlState(obj);
  obj2 = { value: analyticsLocations };
  const items9 = [outgoingData(first(4662), { absolute: true }), ];
  obj3 = { style: tmp.container };
  obj4 = { style: tmp.tabs, children: outgoingData(analyticsLocations(8760).SegmentedControl, { state: segmentedControlState }) };
  const items10 = [outgoingData(pendingIncomingIds, obj4), , ];
  if (tmp24) {
    obj5 = { style: tmp.clearAllContainer };
    const obj6 = {
      style: tmp.clearAll,
      onPress() {
          (function handleClearAllIncomingRequests(length) {
            let obj = analyticsLocations(table[14]);
            obj = { incomingRequestCount: length };
            obj.openAlert("clear-all-incoming-requests", outgoingData(gameRelationshipsByType1.lazy(() => analyticsLocations(paths[13])(paths[12], paths.paths)), obj));
          })(incoming.length);
        }
    };
    const obj7 = { variant: "text-sm/semibold", color: "text-brand" };
    const intl3 = analyticsLocations(1212).intl;
    obj7.children = intl3.string(analyticsLocations(1212).t.O8k7O4);
    obj6.children = outgoingData(analyticsLocations(4126).Text, obj7);
    obj5.children = outgoingData(analyticsLocations(4660).PressableOpacity, obj6);
    tmp26 = outgoingData(pendingIncomingIds, obj5);
  }
  items10[1] = tmp26;
  if (tmp21) {
    const obj8 = { style: tmp.noResultsContainer };
    let obj9 = {};
    if (first1 === closure_16.Incoming) {
      const intl5 = analyticsLocations(1212).intl;
      let stringResult = intl5.string(analyticsLocations(1212).t["7uvAKe"]);
    } else {
      const intl4 = analyticsLocations(1212).intl;
      stringResult = intl4.string(analyticsLocations(1212).t["yvzX/Z"]);
    }
    obj9.title = stringResult;
    obj9.illustration = analyticsLocations(5807).WumpusCouchSpotIllustration;
    obj9.disableBackgroundOverlay = true;
    obj9 = tmp34(first(9892), obj9);
    obj8.children = obj9;
    tmp34(pendingIncomingIds, obj8);
    const tmp38 = pendingIncomingIds;
    const tmp41 = first(9892);
  } else {
    const obj10 = {};
    if (first1 === closure_16.Incoming) {
      outgoingSection = incomingSection;
    }
    obj10.sections = outgoingSection;
    obj10.getItemProps = callback2;
    obj10.getSectionProps = callback1;
    items10[2] = tmp34(analyticsLocations(8825).UsersFastList, obj10);
    obj3.children = items10;
    items9[1] = tmp28(pendingIncomingIds, obj3);
    obj2.children = items9;
    return tmp28(analyticsLocations(5464).AnalyticsLocationProvider, obj2);
  }
};
