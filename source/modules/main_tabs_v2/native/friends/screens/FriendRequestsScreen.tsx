// Module ID: 15340
// Function ID: 116804
// Name: compareUserItems
// Dependencies: []
// Exports: default

// Module 15340 (compareUserItems)
function compareUserItems(user, user2) {
  if (user.user.id === user2.user.id) {
    let compareResult = importDefault(dependencyMap[20]).compare(user.applicationId, user2.applicationId);
    const obj2 = importDefault(dependencyMap[20]);
  } else {
    compareResult = importDefault(dependencyMap[20]).compare(user.user.id, user2.user.id);
    const obj = importDefault(dependencyMap[20]);
  }
  return compareResult;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const UserRowModes = arg1(dependencyMap[6]).UserRowModes;
({ AnalyticEvents: closure_10, AnalyticsSections: closure_11, RelationshipTypes: closure_12 } = arg1(dependencyMap[7]));
let closure_13 = arg1(dependencyMap[8]).MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
const tmp2 = arg1(dependencyMap[7]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[9]));
let closure_16 = { Incoming: 0, [0]: "Incoming", Outgoing: 1, [1]: "Outgoing" };
let obj = arg1(dependencyMap[10]);
obj = { container: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWER, flex: 1 };
obj.noResultsContainer = obj;
const tmp3 = arg1(dependencyMap[9]);
obj.clearAllContainer = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWER, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingBottom: importDefault(dependencyMap[11]).space.PX_16, justifyContent: "flex-end", flexDirection: "row" };
const obj1 = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWER, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingBottom: importDefault(dependencyMap[11]).space.PX_16, justifyContent: "flex-end", flexDirection: "row" };
obj.clearAll = { backgroundColor: importDefault(dependencyMap[11]).colors.INPUT_BACKGROUND_DEFAULT, borderColor: importDefault(dependencyMap[11]).colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, minWidth: 2 * importDefault(dependencyMap[11]).space.PX_64, borderRadius: importDefault(dependencyMap[11]).radii.round, alignItems: "center", paddingVertical: 5, borderWidth: 3 };
const obj2 = { backgroundColor: importDefault(dependencyMap[11]).colors.INPUT_BACKGROUND_DEFAULT, borderColor: importDefault(dependencyMap[11]).colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, minWidth: 2 * importDefault(dependencyMap[11]).space.PX_64, borderRadius: importDefault(dependencyMap[11]).radii.round, alignItems: "center", paddingVertical: 5, borderWidth: 3 };
obj.tabs = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWER, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingBottom: importDefault(dependencyMap[11]).space.PX_16, paddingTop: importDefault(dependencyMap[11]).space.PX_8 };
let closure_17 = obj.createStyles(obj);
const obj3 = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWER, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingBottom: importDefault(dependencyMap[11]).space.PX_16, paddingTop: importDefault(dependencyMap[11]).space.PX_8 };
const result = arg1(dependencyMap[41]).fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsScreen.tsx");

export default function FriendRequestsScreen() {
  let incomingSection;
  let outgoingSection;
  const tmp = callback2();
  const analyticsLocations = importDefault(dependencyMap[21])(importDefault(dependencyMap[22]).FRIEND_REQUESTS).analyticsLocations;
  const arg1 = analyticsLocations;
  function useNotificationCenterAckFriendRequests() {
    const items = [pendingOutgoingIds];
    const stateFromStoresArray = analyticsLocations(tmp7[15]).useStateFromStoresArray(items, () => {
      const localItems = localItems.localItems;
      return localItems.filter((type) => {
        let tmp = type.type === callback(closure_2[16]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
        if (!tmp) {
          tmp = type.type === callback(closure_2[16]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
        }
        return tmp;
      });
    });
    const analyticsLocations = stateFromStoresArray;
    const NotificationCenterAckedBeforeId = analyticsLocations(tmp7[17]).NotificationCenterAckedBeforeId;
    const setting = NotificationCenterAckedBeforeId.useSetting();
    const first = setting;
    const items1 = [stateFromStoresArray, setting];
    const effect = gameRelationshipsByType1.useEffect(() => {
      if (stateFromStoresArray.length > 0) {
        const mapped = stateFromStoresArray.map((local_id) => local_id.local_id);
        const _Boolean = Boolean;
        const found = mapped.filter(Boolean);
        const result = stateFromStoresArray(closure_2[18]).markNotificationCenterLocalItemsAcked(found);
        const obj = stateFromStoresArray(closure_2[18]);
        const result1 = stateFromStoresArray(closure_2[18]).bulkMarkNotificationCenterItemsAcked(stateFromStoresArray.filter((addResult) => !callback(closure_2[19]).isRemoteAcked(addResult, closure_1)));
        const obj2 = stateFromStoresArray(closure_2[18]);
      }
    }, items1);
  }();
  const effect = React.useEffect(() => {
    let obj = first(tmp7[23]);
    obj = { friend_add_type: spam.FRIENDS_REQUESTS_MODAL };
    obj.track(outgoing.FRIEND_ADD_VIEWED, obj);
  }, []);
  let obj = arg1(dependencyMap[15]);
  const items = [closure_7];
  const tmp5 = callback(obj.useStateFromStoresArray(items, () => {
    const items = [spamIds.getMutableRelationships(), spamIds.getVersion()];
    return items;
  }), 2);
  const first = tmp5[0];
  const importDefault = first;
  const dependencyMap = tmp7;
  let obj1 = arg1(dependencyMap[24]);
  const gameRelationshipsByType = obj1.useGameRelationshipsByType(ignoredUsers.PENDING_INCOMING);
  let callback = gameRelationshipsByType;
  let obj2 = arg1(dependencyMap[24]);
  const gameRelationshipsByType1 = obj2.useGameRelationshipsByType(ignoredUsers.PENDING_OUTGOING);
  const React = gameRelationshipsByType1;
  const items1 = [gameRelationshipsByType, gameRelationshipsByType1];
  const memo = React.useMemo(() => {
    const set = new Set();
    const analyticsLocations = set;
    const item = gameRelationshipsByType.forEach((applicationId) => {
      set.add(applicationId.applicationId);
    });
    const item1 = gameRelationshipsByType1.forEach((applicationId) => {
      set.add(applicationId.applicationId);
    });
    return Array.from(set);
  }, items1);
  importDefault(dependencyMap[25])(memo);
  const items2 = [first, tmp5[1]];
  const memo1 = React.useMemo(() => analyticsLocations(tmp7[26]).getPendingRelationshipIds(first, tmp7), items2);
  const pendingIncomingIds = memo1.pendingIncomingIds;
  const View = pendingIncomingIds;
  const pendingOutgoingIds = memo1.pendingOutgoingIds;
  let closure_6 = pendingOutgoingIds;
  const spamIds = memo1.spamIds;
  closure_7 = spamIds;
  const ignoredUserIds = memo1.ignoredUserIds;
  let closure_8 = ignoredUserIds;
  let obj3 = arg1(dependencyMap[15]);
  const items3 = [closure_8];
  const items4 = [ignoredUserIds, gameRelationshipsByType, gameRelationshipsByType1, pendingIncomingIds, pendingOutgoingIds, spamIds];
  const stateFromStores = obj3.useStateFromStores(items3, () => {
    const mapped = pendingIncomingIds.map((arg0) => ({ user: authStore.getUser(arg0), isGameRelationship: false }));
    const found = mapped.filter((user) => null != user.user);
    const mapped1 = gameRelationshipsByType.map((applicationId) => ({ user: authStore.getUser(applicationId.id), isGameRelationship: true, applicationId: applicationId.applicationId }));
    const found1 = mapped1.filter((user) => null != user.user);
    const mapped2 = pendingOutgoingIds.map((arg0) => ({ user: authStore.getUser(arg0), isGameRelationship: false }));
    const found2 = mapped2.filter((user) => null != user.user);
    const mapped3 = gameRelationshipsByType1.map((applicationId) => ({ user: authStore.getUser(applicationId.id), isGameRelationship: true, applicationId: applicationId.applicationId }));
    const found3 = mapped3.filter((user) => null != user.user);
    const obj = {};
    const items = [...found1];
    obj.incoming = items.sort(navigation);
    const items1 = [...found3];
    obj.outgoing = items1.sort(navigation);
    const mapped4 = spamIds.map((arg0) => ({ user: authStore.getUser(arg0) }));
    obj.spam = mapped4.filter((user) => null != user.user);
    const mapped5 = ignoredUserIds.map((arg0) => ({ user: authStore.getUser(arg0) }));
    obj.ignoredUsers = mapped5.filter((user) => null != user.user);
    return obj;
  }, items4, importDefault(dependencyMap[27]));
  const incoming = stateFromStores.incoming;
  const UserRowModes = incoming;
  const outgoing = stateFromStores.outgoing;
  const spam = stateFromStores.spam;
  const ignoredUsers = stateFromStores.ignoredUsers;
  const items5 = [ignoredUsers, incoming, outgoing, spam];
  const memo2 = React.useMemo(() => {
    let obj = { incomingData: obj };
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
  let closure_13 = incomingData;
  const outgoingData = memo2.outgoingData;
  ({ outgoingSection, incomingSection } = memo2);
  const tmp15 = callback(React.useState(() => {
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
  callback = React.useCallback((id) => {
    first(tmp7[28])({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items6);
  let callback2 = callback;
  const callback1 = React.useCallback((arg0) => {
    if (1 === arg0) {
      let obj = { type: "section" };
      obj = {};
      const intl = analyticsLocations(tmp7[29]).intl;
      obj.title = intl.string(analyticsLocations(tmp7[29]).t.NHpP/k);
      obj.props = obj;
      return obj;
    }
  }, []);
  let obj4 = arg1(dependencyMap[30]);
  const navigation = obj4.useNavigation();
  const compareUserItems = navigation;
  const items7 = [first1, incomingData, outgoingData, callback, spam.length, ignoredUsers.length, navigation];
  let tmp21 = first1 === closure_16.Outgoing;
  callback2 = React.useCallback((arg0, arg1) => {
    if (1 === arg0) {
      let obj = {
        mass: false,
        damping: false,
        stiffness: false,
        restDisplacementThreshold: false,
        component() {
            let obj = { hasIcons: false };
            let tmp2 = null;
            if (closure_11.length > 0) {
              obj = {
                onPress() {
                    navigation.navigate("friends", { screen: "spam-requests" });
                  }
              };
              const intl = callback(closure_2[29]).intl;
              obj.label = intl.string(callback(closure_2[29]).t.fUQoqD);
              obj = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>", children: closure_11.length };
              obj.trailing = callback2(callback(closure_2[33]).Text, obj);
              obj.arrow = true;
              tmp2 = callback2(callback(closure_2[32]).TableRow, obj);
            }
            const items = [tmp2, ];
            let tmp7 = null;
            if (closure_12.length > 0) {
              const obj1 = {
                onPress() {
                    navigation.navigate("friends", { screen: "ignored-user-requests" });
                  }
              };
              const intl2 = callback(closure_2[29]).intl;
              obj1.label = intl2.string(callback(closure_2[29]).t.en1Gkz);
              const obj2 = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>", children: closure_12.length };
              obj1.trailing = callback2(callback(closure_2[33]).Text, obj2);
              obj1.arrow = true;
              tmp7 = callback2(callback(closure_2[32]).TableRow, obj1);
            }
            items[1] = tmp7;
            obj.children = items;
            return closure_15(callback(closure_2[31]).TableRowGroup, obj);
          }
      };
      return obj;
    } else {
      const tmp = first1 === closure_16.Incoming ? incomingData : outgoingData;
      const items = tmp.items;
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
    tmp24 = incoming.length >= closure_13;
  }
  let obj5 = arg1(dependencyMap[34]);
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
  const intl = arg1(dependencyMap[29]).intl;
  obj.label = intl.string(arg1(dependencyMap[29]).t.bekioP);
  let tmp26 = null;
  obj.page = null;
  const items8 = [obj, ];
  obj1 = { id: str2.toString() };
  const intl2 = arg1(dependencyMap[29]).intl;
  obj1.label = intl2.string(arg1(dependencyMap[29]).t.tWqcIF);
  obj1.page = null;
  items8[1] = obj1;
  obj.items = items8;
  const segmentedControlState = obj5.useSegmentedControlState(obj);
  obj2 = { value: analyticsLocations };
  const items9 = [outgoingData(importDefault(dependencyMap[35]), { absolute: true }), ];
  obj3 = { style: tmp.container };
  obj4 = { style: tmp.tabs, children: outgoingData(arg1(dependencyMap[36]).SegmentedControl, { state: segmentedControlState }) };
  const items10 = [outgoingData(View, obj4), , ];
  if (tmp24) {
    obj5 = { style: tmp.clearAllContainer };
    const obj6 = {
      style: tmp.clearAll,
      onPress() {
          function handleClearAllIncomingRequests(length) {
            let obj = callback(closure_2[14]);
            obj = { incomingRequestCount: length };
            obj.openAlert("clear-all-incoming-requests", callback2(React.lazy(() => callback(paths[13])(paths[12], paths.paths)), obj));
          }(incoming.length);
        }
    };
    const obj7 = { hasMaxConnections: "png", isBoostOnlySubscription: "absolute" };
    const intl3 = arg1(dependencyMap[29]).intl;
    obj7.children = intl3.string(arg1(dependencyMap[29]).t.O8k7O4);
    obj6.children = outgoingData(arg1(dependencyMap[33]).Text, obj7);
    obj5.children = outgoingData(arg1(dependencyMap[37]).PressableOpacity, obj6);
    tmp26 = outgoingData(View, obj5);
  }
  items10[1] = tmp26;
  if (tmp21) {
    const obj8 = { style: tmp.noResultsContainer };
    let obj9 = {};
    if (first1 === closure_16.Incoming) {
      const intl5 = arg1(dependencyMap[29]).intl;
      let stringResult = intl5.string(arg1(dependencyMap[29]).t.7uvAKe);
    } else {
      const intl4 = arg1(dependencyMap[29]).intl;
      stringResult = intl4.string(arg1(dependencyMap[29]).t.yvzX/Z);
    }
    obj9.title = stringResult;
    obj9.illustration = arg1(dependencyMap[39]).WumpusCouchSpotIllustration;
    obj9.disableBackgroundOverlay = true;
    obj9 = tmp34(importDefault(dependencyMap[38]), obj9);
    obj8.children = obj9;
    tmp34(View, obj8);
    const tmp38 = View;
    const tmp41 = importDefault(dependencyMap[38]);
  } else {
    const obj10 = {};
    if (first1 === closure_16.Incoming) {
      outgoingSection = incomingSection;
    }
    obj10.sections = outgoingSection;
    obj10.getItemProps = callback2;
    obj10.getSectionProps = callback1;
    items10[2] = tmp34(arg1(dependencyMap[40]).UsersFastList, obj10);
    obj3.children = items10;
    items9[1] = tmp28(View, obj3);
    obj2.children = items9;
    return tmp28(arg1(dependencyMap[21]).AnalyticsLocationProvider, obj2);
  }
};
