// Module ID: 16596
// Function ID: 16597
// Name: FriendRequestsScreen
// Dependencies: [32, 19, 17, 7053, 4479, 1372, 10320, 1074, 10333, 21, 4836, 576, 16597, 1981, 5205, 563, 7054, 2021, 16051, 7055, 11, 6583, 6603, 1241, 12637, 6589, 16598, 1331, 7624, 1115, 1485, 5999, 5917, 4832, 9083, 5437, 9084, 5435, 10457, 14645, 10326, 2]
// Exports: default

// Module 16596 (FriendRequestsScreen)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useAlertStore from "useAlertStore" /* 5205 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import UserRowConstants from "UserRowConstants" /* 10320 */;
import Constants2 from "Constants" /* 10333 */;
import getPendingRelationshipIds from "getPendingRelationshipIds" /* 16598 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7053 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, navigation, set;

let c10;
let closure_12;
let closure_14;
let closure_15;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
function compareUserItems(user, user2) {
  let compareResult;
  if (user.user.id === user2.user.id) {
    const obj2 = SnowflakeUtilsDefault;
    compareResult = obj2.compare(user.applicationId, user2.applicationId);
  } else {
    const obj = SnowflakeUtilsDefault;
    compareResult = obj.compare(user.user.id, user2.user.id);
  }
  return compareResult;
}
const View = react_native.View;
const UserRowModes = UserRowConstants.UserRowModes;
({ AnalyticEvents: c10, AnalyticsSections: unpackModuleId, RelationshipTypes: closure_12 } = Constants);
let closure_13 = Constants2.MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let Outgoing = { Incoming: 0, [0]: "Incoming", Outgoing: 1, [1]: "Outgoing" };
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, noResultsContainer: obj2, clearAllContainer: obj3, clearAll: obj4, tabs: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, justifyContent: "flex-end", flexDirection: "row" };
obj4 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, minWidth: 2 * nativeDefault.space.PX_64, borderRadius: nativeDefault.radii.round, alignItems: "center", paddingVertical: 5, borderWidth: 3 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
let closure_17 = createStyles(obj);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsScreen.tsx");

export default function FriendRequestsScreen() {
  let PressableOpacity;
  let Text;
  let closure_16;
  let closure_2;
  let first;
  let gameRelationshipsByType;
  let gameRelationshipsByType1;
  let ignoredUsers;
  let incomingSection;
  let intl;
  let intl2;
  let intl3;
  let items10;
  let items11;
  let items12;
  let obj14;
  let obj15;
  let obj17;
  let onPress;
  let outgoingSection;
  let pendingOutgoingIds;
  let spamIds;
  let str;
  let str2;
  let tmp2Result;
  let tmp34Result2;
  let tmp = onPress();
  let tmp2 = first;
  let tmp3 = dependencyMap;
  let tmp4 = first(6583);
  const analyticsLocations = tmp4(first(6603).FRIEND_REQUESTS).analyticsLocations;
  const tmp5 = analyticsLocations;
  let obj = analyticsLocations(563);
  let items = [pendingOutgoingIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const localItems = pendingOutgoingIds.localItems;
    return localItems.filter((type) => {
      let tmp3 = type.type === analyticsLocations(closure_1_2[16]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
      const tmp = analyticsLocations;
      const tmp2 = closure_1_2;
      if (!tmp3) {
        tmp3 = type.type === tmp(tmp2[16]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
      }
      return tmp3;
    });
  });
  const NotificationCenterAckedBeforeId = analyticsLocations(2021).NotificationCenterAckedBeforeId;
  const setting = NotificationCenterAckedBeforeId.useSetting();
  let items1 = [stateFromStoresArray, setting];
  const effect = gameRelationshipsByType1.useEffect(() => {
    if (stateFromStoresArray.length > 0) {
      const mapped = arr.map((local_id) => local_id.local_id);
      const _Boolean = Boolean;
      const found = mapped.filter(Boolean);
      let obj = analyticsLocations(closure_2[18]);
      const result = obj.markNotificationCenterLocalItemsAcked(found);
      const obj2 = analyticsLocations(closure_2[18]);
      const result1 = obj2.bulkMarkNotificationCenterItemsAcked(arr.filter((item) => {
        const obj = stateFromStoresArray(closure_2_2[19]);
        return !obj.isRemoteAcked(item, setting);
      }));
    }
  }, items1);
  const effect1 = gameRelationshipsByType1.useEffect(() => {
    const obj = first(closure_2[23]);
    const obj2 = { friend_add_type: spam.FRIENDS_REQUESTS_MODAL };
    obj.track(outgoing.FRIEND_ADD_VIEWED, obj2);
  }, []);
  let obj2 = analyticsLocations(563);
  const items2 = [spamIds];
  const tmp10 = gameRelationshipsByType(obj2.useStateFromStoresArray(items2, () => {
    const items = [spamIds.getMutableRelationships(), spamIds.getVersion()];
    return items;
  }), 2);
  first = tmp10[0];
  dependencyMap = tmp12;
  let obj3 = analyticsLocations(12637);
  gameRelationshipsByType = obj3.useGameRelationshipsByType(ignoredUsers.PENDING_INCOMING);
  let obj4 = analyticsLocations(12637);
  gameRelationshipsByType1 = obj4.useGameRelationshipsByType(ignoredUsers.PENDING_OUTGOING);
  const items3 = [gameRelationshipsByType, gameRelationshipsByType1];
  const memo = gameRelationshipsByType1.useMemo(() => {
    set = new Set();
    const item = gameRelationshipsByType.forEach((applicationId) => {
      set.add(applicationId.applicationId);
    });
    const item1 = gameRelationshipsByType1.forEach((applicationId) => {
      set.add(applicationId.applicationId);
    });
    return Array.from(set);
  }, items3);
  first(6589)(memo);
  const items4 = [first, tmp10[1]];
  const memo1 = gameRelationshipsByType1.useMemo(() => {
    const obj = getPendingRelationshipIds;
    return obj.getPendingRelationshipIds(first, closure_2);
  }, items4);
  const pendingIncomingIds = memo1.pendingIncomingIds;
  pendingOutgoingIds = memo1.pendingOutgoingIds;
  spamIds = memo1.spamIds;
  const ignoredUserIds = memo1.ignoredUserIds;
  const items5 = [ignoredUserIds];
  const items6 = [ignoredUserIds, gameRelationshipsByType, gameRelationshipsByType1, pendingIncomingIds, pendingOutgoingIds, spamIds];
  const obj5 = analyticsLocations(563);
  const stateFromStores = obj5.useStateFromStores(items5, () => {
    let items;
    let items1;
    let mapped4;
    let mapped5;
    const mapped = pendingIncomingIds.map((item) => {
      const obj = { user: authStore.getUser(item), isGameRelationship: false };
      return obj;
    });
    const found = mapped.filter((user) => null != user.user);
    const mapped1 = gameRelationshipsByType.map((applicationId) => {
      const obj = { user: authStore.getUser(applicationId.id), isGameRelationship: true, applicationId: applicationId.applicationId };
      return obj;
    });
    const found1 = mapped1.filter((user) => null != user.user);
    const mapped2 = pendingOutgoingIds.map((item) => {
      const obj = { user: authStore.getUser(item), isGameRelationship: false };
      return obj;
    });
    const found2 = mapped2.filter((user) => null != user.user);
    const mapped3 = gameRelationshipsByType1.map((applicationId) => {
      const obj = { user: authStore.getUser(applicationId.id), isGameRelationship: true, applicationId: applicationId.applicationId };
      return obj;
    });
    const found3 = mapped3.filter((user) => null != user.user);
    let obj = { incoming: items.sort(compareUserItems), outgoing: items1.sort(compareUserItems), spam: mapped4.filter((user) => null != user.user), ignoredUsers: mapped5.filter((user) => null != user.user) };
    items = [...found1];
    items1 = [...found3];
    mapped4 = spamIds.map((item) => {
      const obj = { user: authStore.getUser(item) };
      return obj;
    });
    mapped5 = ignoredUserIds.map((item) => {
      const obj = { user: authStore.getUser(item) };
      return obj;
    });
    return obj;
  }, items6, first(1331));
  const incoming = stateFromStores.incoming;
  const outgoing = stateFromStores.outgoing;
  const spam = stateFromStores.spam;
  ignoredUsers = stateFromStores.ignoredUsers;
  const items7 = [ignoredUsers, incoming, outgoing, spam];
  const memo2 = gameRelationshipsByType1.useMemo(() => {
    let items;
    let items1;
    let obj2;
    const obj = { incomingData: obj2, incomingSection: items, outgoingData: obj3, outgoingSection: items1 };
    items = [incoming.length, ];
    let num = 0;
    obj2 = { items: incoming, relationship: ignoredUsers.PENDING_INCOMING };
    if (spam.length + ignoredUsers.length > 0) {
      num = 1;
    }
    items[1] = num;
    items1 = [outgoing.length];
    return obj;
  }, items7);
  const incomingData = memo2.incomingData;
  const outgoingData = memo2.outgoingData;
  ({ outgoingSection, incomingSection } = memo2);
  const tmp20 = gameRelationshipsByType(gameRelationshipsByType1.useState(() => {
    if (0 === incoming.length) {
      let Incoming;
      if (outgoing.length > 0) {
        Incoming = Outgoing.Outgoing;
      }
      return Incoming;
    }
    Incoming = Outgoing.Incoming;
  }), 2);
  const first1 = tmp20[0];
  Outgoing = tmp20[1];
  const items8 = [analyticsLocations];
  onPress = gameRelationshipsByType1.useCallback((id) => {
    const obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items8);
  const callback1 = gameRelationshipsByType1.useCallback((arg0) => {
    let intl;
    let obj;
    if (1 === arg0) {
      const element = { type: "section", props: obj };
      obj = { title: intl.string(analyticsLocations(closure_2[29]).t["NHpP/k"]) };
      intl = analyticsLocations(closure_2[29]).intl;
      return element;
    }
  }, []);
  const obj6 = analyticsLocations(1485);
  navigation = obj6.useNavigation();
  const items9 = [first1, incomingData, outgoingData, onPress, spam.length, ignoredUsers.length, navigation];
  let tmp27 = first1 === Outgoing.Outgoing;
  const callback2 = gameRelationshipsByType1.useCallback((arg0, arg1) => {
    let length;
    let length2;
    let obj2;
    if (1 === arg0) {
      let obj = {
        type: "custom",
        component() {
            let intl;
            let intl2;
            let obj2;
            let obj4;
            let tmp4 = null;
            const TableRowGroup = analyticsLocations(closure_2[31]).TableRowGroup;
            const tmp = first1;
            if (length.length > 0) {
              const obj = {
                onPress() {
                    navigation.navigate("friends", { screen: "spam-requests" });
                  },
                label: intl.string(analyticsLocations(closure_2[29]).t.fUQoqD),
                trailing: outgoingData(analyticsLocations(closure_2[33]).Text, obj2),
                arrow: true
              };
              const TableRow = tmp2(tmp3[32]).TableRow;
              intl = tmp2(tmp3[29]).intl;
              obj2 = { variant: "text-sm/medium", color: "text-muted", children: arr.length };
              tmp4 = outgoingData(TableRow, obj);
            }
            const children = [tmp4, ];
            let tmp6 = null;
            if (length2.length > 0) {
              const obj3 = {
                onPress() {
                    navigation.navigate("friends", { screen: "ignored-user-requests" });
                  },
                label: intl2.string(analyticsLocations(closure_2[29]).t.en1Gkz),
                trailing: outgoingData(analyticsLocations(closure_2[33]).Text, obj4),
                arrow: true
              };
              const TableRow2 = tmp2(tmp3[32]).TableRow;
              intl2 = tmp2(tmp3[29]).intl;
              obj4 = { variant: "text-sm/medium", color: "text-muted", children: arr3.length };
              tmp6 = outgoingData(TableRow2, obj3);
            }
            children[1] = tmp6;
            return tmp(TableRowGroup, { hasIcons: false, children });
          },
        key: "spamRequests",
        itemType: "spamRequests"
      };
      return obj;
    } else {
      let tmp6 = Outgoing;
      let tmp = first1 === Outgoing.Incoming ? incomingData : outgoingData;
      const tmp2 = arg1;
      const items = tmp.items;
      const element = { type: "user", props: obj2 };
      obj2 = { type: tmp.relationship, user: items[arg1].user, onPress, mode: UserRowModes.ACTIONS, start: 0 === arg1, end: arg1 === items.length - 1, applicationId: items[arg1].applicationId, isGameRelationship: items[arg1].isGameRelationship };
      const tmp3 = onPress;
      let tmp4 = UserRowModes;
      return element;
    }
  }, items9);
  if (tmp27) {
    let num = 0;
    tmp27 = 0 === outgoing.length;
  }
  if (!tmp27) {
    tmp27 = first1 === tmp26.Incoming && 0 === incoming.length && 0 === spam.length && 0 === ignoredUserIds.length;
    const tmp28 = first1 === tmp26.Incoming && 0 === incoming.length && 0 === spam.length && 0 === ignoredUserIds.length;
  }
  const obj7 = {
    pageWidth: 0,
    defaultIndex: first1,
    onSetActiveIndex(arg0) {
      const tmp = closure_16;
      if (0 === arg0) {
        Outgoing = closure_16.Incoming;
      } else {
        Outgoing = closure_16.Outgoing;
      }
      tmp(Outgoing);
    },
    items: items10
  };
  const tmp29 = first1 === tmp26.Incoming && incoming.length >= incomingData;
  const obj8 = { id: str.toString(), label: intl.string(tmp5(1115).t.bekioP), page: null };
  const useSegmentedControlState = tmp5(9083).useSegmentedControlState;
  str = Outgoing.Incoming;
  tmp5(9083);
  intl = tmp5(1115).intl;
  items10 = [obj8, ];
  const obj9 = { id: str2.toString(), label: intl2.string(tmp5(1115).t.tWqcIF), page: null };
  str2 = Outgoing.Outgoing;
  intl2 = tmp5(1115).intl;
  items10[1] = obj9;
  const segmentedControlState = useSegmentedControlState(obj7);
  const obj10 = { value: analyticsLocations, children: items11 };
  const AnalyticsLocationProvider = tmp5(6583).AnalyticsLocationProvider;
  items11 = [outgoingData(tmp2(5437), { absolute: true }), ];
  const obj11 = { style: tmp.container, children: items12 };
  items12 = [, , ];
  const obj12 = { style: tmp.tabs, children: outgoingData(tmp5(9084).SegmentedControl, { state: segmentedControlState }) };
  items12[0] = outgoingData(pendingIncomingIds, obj12);
  let tmp34Result = null;
  if (tmp29) {
    const obj13 = { style: tmp.clearAllContainer, children: outgoingData(PressableOpacity, obj14) };
    obj14 = {
      style: tmp.clearAll,
      onPress() {
          let paths;
          const length = incoming.length;
          const lazyResult = react.lazy(() => analyticsLocations(paths[13])(paths[12], paths.paths));
          const obj = useAlertStore;
          obj.openAlert("clear-all-incoming-requests", authStore2(lazyResult, { incomingRequestCount: length }));
        },
      children: outgoingData(Text, obj15)
    };
    PressableOpacity = tmp5(5435).PressableOpacity;
    obj15 = { variant: "text-sm/semibold", color: "text-brand", children: intl3.string(tmp5(1115).t.O8k7O4) };
    Text = tmp5(4832).Text;
    intl3 = tmp5(1115).intl;
    tmp34Result = tmp34(tmp35, obj13);
  }
  items12[1] = tmp34Result;
  if (tmp27) {
    let stringResult;
    const obj16 = { style: tmp.noResultsContainer, children: outgoingData(tmp2Result, obj17) };
    tmp2Result = tmp2(10457);
    if (first1 === Outgoing.Incoming) {
      const intl5 = tmp5(1115).intl;
      stringResult = intl5.string(tmp5(1115).t["7uvAKe"]);
    } else {
      const intl4 = tmp5(1115).intl;
      stringResult = intl4.string(tmp5(1115).t["yvzX/Z"]);
    }
    obj17 = { title: stringResult, illustration: tmp5(14645).WumpusCouchSpotIllustration, disableBackgroundOverlay: true };
    tmp34Result2 = tmp34(tmp35, obj16);
  } else {
    const UsersFastList = tmp5(10326).UsersFastList;
    if (first1 === Outgoing.Incoming) {
      outgoingSection = incomingSection;
    }
    const obj18 = { sections: outgoingSection, getItemProps: callback2, getSectionProps: callback1 };
    tmp34Result2 = tmp34(UsersFastList, obj18);
  }
  items12[2] = tmp34Result2;
  items11[1] = first1(pendingIncomingIds, obj11);
  return first1(AnalyticsLocationProvider, obj10);
};
