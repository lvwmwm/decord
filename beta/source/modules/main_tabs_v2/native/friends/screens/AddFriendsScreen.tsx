// Module ID: 16585
// Function ID: 16586
// Name: AddFriendsScreen
// Dependencies: [32, 5, 19, 17, 7071, 4479, 1372, 12196, 1074, 12175, 21, 4836, 576, 12173, 7826, 4527, 1115, 7178, 12177, 1364, 6583, 6603, 6470, 16586, 5298, 1241, 7624, 563, 12, 4678, 15679, 6589, 5437, 9310, 5889, 10326, 5917, 4529, 5404, 16587, 16588, 16590, 16591, 2]
// Exports: default

// Module 16585 (AddFriendsScreen)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 7826 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12173 */;
import ContactSyncConstants from "ContactSyncConstants" /* 12175 */;
import FriendsScreenConstants from "FriendsScreenConstants" /* 12196 */;
import IncomingRequestRow from "IncomingRequestRow" /* 16588 */;
import ContactSuggestionRow2 from "ContactSuggestionRow" /* 16590 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7071 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c5, constants;

let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function handleFindFriends() {
  const obj = ContactSyncModalActionCreators;
  obj.openContactSyncModal({}, map1.FRIENDS_ADD_FRIENDS_MODAL);
}
function handleShare() {
  return obj(...arguments);
}
let props = function _handleShare() {
  let obj = _asyncToGenerator(async (arg0, value) => {
    let PJf9P9;
    let formatToPlainString;
    let obj3;
    let obj8;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let code;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            code = undefined;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: obj3.createFriendInvite(null, constants.ADD_FRIENDS_MODAL), done: false };
            obj3 = InstantInviteActionCreatorsDefault;
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          const presentError = closure_130_0(closure_130_2[15]).presentError;
          const tmp9 = closure_130_0(closure_130_2[15]);
          const intl = closure_130_0(closure_130_2[16]).intl;
          presentError(intl.string(closure_130_0(closure_130_2[16]).t.R0RpRX));
          c6 = 3;
          const obj6 = { value: undefined, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          code = value.code;
          c4 = 0;
          const obj7 = { channel: null, code, message: formatToPlainString(PJf9P9, obj8), location: closure_130_14.ADD_FRIENDS_MODAL };
          const intl2 = closure_130_0(closure_130_2[16]).intl;
          formatToPlainString = intl2.formatToPlainString;
          obj8 = { link: closure_130_1(closure_130_2[17])(code) };
          PJf9P9 = closure_130_0(closure_130_2[16]).t.PJf9P9;
          closure_0(obj7);
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp19) {
        let closure_3 = tmp19;
        if (0 === c4) {
          c6 = 3;
          throw tmp19;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function areHydratedGameFriendRequestRowStatesEqual(arr, arg1) {
  const f105393 = (user, index) => user.user === closure_0[index].user && user.applicationId === closure_0[index].applicationId;
  let closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every(f105393);
    const tmp2 = arr.length === arg1.length && arr.every(f105393);
  }
  return tmp;
}
let _slicedToArray = _slicedToArray_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const Sections = FriendsScreenConstants.Sections;
({ AnalyticEvents: closure_12, AnalyticsSections: map1, InstantInviteSources: closure_14, RelationshipTypes: closure_15 } = Constants);
const ContactPermissions = ContactSyncConstants.ContactPermissions;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = { FIND_FRIENDS: 0, [0]: "FIND_FRIENDS", INCOMING_FRIEND_REQUESTS: 1, [1]: "INCOMING_FRIEND_REQUESTS", INCOMING_GAME_FRIEND_REQUESTS: 2, [2]: "INCOMING_GAME_FRIEND_REQUESTS", CONTACT_SUGGESTIONS: 3, [3]: "CONTACT_SUGGESTIONS" };
let createStyles = createStyles_mod;
props = { container: { flex: 1 }, inviteAppsContainerNonSticky: obj2, inviteAppsContentContainer: { paddingTop: 0, paddingBottom: 0, minWidth: "100%" }, emptyContainer: obj3, emptyActionContainer: obj4, loading: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingVertical: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj4 = { marginHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
obj5 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, justifyContent: "center", flex: 1 };
let closure_20 = createStyles(props);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendsScreen.tsx");

export default function AddFriendsScreen(navigation) {
  let Icon;
  let TableRow;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let c0;
  let c20;
  let c21;
  let c6;
  let c7;
  let c8;
  let c9;
  let closure_11;
  let closure_13;
  let closure_3;
  let first;
  let first1;
  let friendSuggestions;
  let intl;
  let items12;
  let obj13;
  let obj14;
  let obj9;
  let tmp29;
  let tmp39Result3;
  navigation = navigation.navigation;
  const sourcePage = navigation.route.params.sourcePage;
  let analyticsLocations;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  first = undefined;
  closure_11 = undefined;
  first1 = undefined;
  closure_13 = undefined;
  c20 = undefined;
  c21 = undefined;
  friendSuggestions = undefined;
  let closure_23;
  let closure_24;
  let c25;
  let memo1;
  let callback1;
  let tmp = c20();
  let tmp2 = sourcePage;
  let tmp3 = analyticsLocations;
  let tmp4 = sourcePage(analyticsLocations[20]);
  analyticsLocations = tmp4(sourcePage(analyticsLocations[21]).ADD_FRIENDS).analyticsLocations;
  let tmp5 = sourcePage(analyticsLocations[22])();
  _slicedToArray = tmp5;
  let tmp6 = navigation;
  let obj = navigation(analyticsLocations[23]);
  const userRowWithSubLabelHeight = obj.useUserRowWithSubLabelHeight(1);
  let obj2 = navigation(analyticsLocations[23]);
  const userRowWithSubLabelHeight1 = obj2.useUserRowWithSubLabelHeight(2);
  let obj3 = userRowWithSubLabelHeight1;
  let tmp10 = _slicedToArray(userRowWithSubLabelHeight1.useState([]), 2);
  [c6, c7] = tmp10;
  let tmp11 = _slicedToArray(userRowWithSubLabelHeight1.useState([]), 2);
  [c8, c9] = tmp11;
  [first, closure_11] = userRowWithSubLabelHeight1.useState([]);
  [first1, closure_13] = userRowWithSubLabelHeight1.useState([]);
  let closure_14 = userRowWithSubLabelHeight1.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (null != arg1) {
      closure_13((arg0) => {
        const items = [];
        const obj = { userId, applicationId };
        items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
        return items;
      });
    } else {
      _undefined4((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
        return items;
      });
    }
  }, []);
  constants = userRowWithSubLabelHeight1.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (null != arg1) {
      closure_11((arg0) => {
        const items = [];
        const obj = { userId, applicationId };
        items[HermesBuiltin.arraySpread(items, arg0, 0)] = obj;
        return items;
      });
    } else {
      _undefined2((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(items, arg0, 0)] = userId;
        return items;
      });
    }
  }, []);
  let tmp16 = sourcePage(analyticsLocations[24])(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { friend_add_type: map1.FRIENDS_ADD_FRIENDS_MODAL, source_page: sourcePage };
    obj.track(first1.FRIEND_ADD_VIEWED, obj2);
  });
  let items = [navigation];
  const onPress = userRowWithSubLabelHeight1.useCallback(() => {
    navigation.navigate("username-search");
  }, items);
  let items1 = [analyticsLocations];
  let closure_17 = userRowWithSubLabelHeight1.useCallback((id) => {
    const obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations, location: "Add Friends Modal User Profile" };
    showUserProfileActionSheetDefault(obj);
  }, items1);
  const obj4 = navigation(analyticsLocations[27]);
  const items2 = [c9, first];
  const stateFromStoresArray = obj4.useStateFromStoresArray(items2, () => {
    const items = [];
    const mutableRelationships = RelationshipStore.getMutableRelationships();
    const keys = mutableRelationships.keys();
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (RelationshipStore.isUnfilteredPendingIncoming(nextResult)) {
        let user = UserStore.getUser(tmp3);
        let hasItem = null == user;
        let tmp8 = user;
        if (!hasItem) {
          hasItem = _undefined.includes(tmp3);
        }
        if (!hasItem) {
          let arr = items.push(tmp8);
        }
      }
      continue;
    }
    const items1 = [];
    const item = _undefined3.forEach((item) => {
      user = user.getUser(item);
      if (null != user) {
        items1.push(user);
      }
    });
    let obj2 = _modDef12;
    const unionByResult = obj2.unionBy(items1, items, (id) => id.id);
    return unionByResult.sort((arg0, arg1) => {
      const obj = sourcePage(analyticsLocations[29]);
      const name = obj.getName(arg0);
      const localeCompare = name.localeCompare;
      const obj2 = sourcePage(analyticsLocations[29]);
      return localeCompare(obj2.getName(arg1));
    });
  });
  const obj5 = navigation(analyticsLocations[27]);
  const items3 = [c8, c9, first];
  const items4 = [first1, first];
  const stateFromStores = obj5.useStateFromStores(items3, () => {
    const gameRelationshipsByType = _undefined3.getGameRelationshipsByType(constants.PENDING_INCOMING);
    const items = [];
    const item = gameRelationshipsByType.forEach((id) => {
      id = id.id;
      const applicationId = id.applicationId;
      const user = UserStore.getUser(id);
      let someResult = RelationshipStore.isSpam(id) || RelationshipStore.isBlockedOrIgnored(id);
      if (!someResult) {
        someResult = null == user;
      }
      if (!someResult) {
        someResult = first.some((userId) => userId.userId === id && userId.applicationId === tmp);
      }
      if (!someResult) {
        const obj2 = { user, applicationId };
        items.push(obj2);
      }
    });
    const items1 = [];
    const item1 = first1.forEach((applicationId) => {
      applicationId = applicationId.applicationId;
      const user = UserStore.getUser(applicationId.userId);
      if (null != user) {
        const obj = { user, applicationId };
        items1.push(obj);
      }
    });
    let obj = sourcePage(analyticsLocations[28]);
    const unionByResult = obj.unionBy(items1, items, (user) => user.user.id);
    return unionByResult.sort((user, user2) => {
      const obj = items1(analyticsLocations[29]);
      const name = obj.getName(user.user);
      const localeCompare = name.localeCompare;
      const obj2 = items1(analyticsLocations[29]);
      return localeCompare(obj2.getName(user2.user));
    });
  }, items4, closure_24);
  ({ added: c20, setAdded: c21, friendSuggestions } = sourcePage(analyticsLocations[30])());
  let tmp19 = friendSuggestions.length > 0;
  sourcePage(analyticsLocations[30])();
  if (tmp19) {
    let num = 3;
    tmp19 = stateFromStoresArray.length > 3;
  }
  closure_23 = tmp19;
  let tmp20 = friendSuggestions.length > 0;
  if (tmp20) {
    let num2 = 3;
    tmp20 = stateFromStores.length > 3;
  }
  closure_24 = tmp20;
  const items5 = [stateFromStores, tmp20];
  const memo = obj3.useMemo(() => {
    let num2;
    const tmp = closure_24;
    if (tmp) {
      const _Math = Math;
      let length = Math.min(stateFromStores.length, 3);
    } else {
      length = stateFromStores.length;
    }
    const items = [];
    for (let num2 = 0; num2 < length; num2 = num2 + 1) {
      let tmp6 = stateFromStores[num2];
      if (null != tmp6) {
        let arr = items.push(tmp6.applicationId);
      }
    }
    return items;
  }, items5);
  tmp2(tmp3[31])(memo);
  const tmp9Result = _slicedToArray(obj3.useState(false), 2);
  let closure_1 = tmp9Result[1];
  const items6 = [navigation];
  const first2 = tmp9Result[0];
  const effect = obj3.useEffect(() => navigation.addListener("transitionEnd", () => {
    closure_1_1(true);
  }), items6);
  c0 = undefined;
  const tmp6Result = tmp6(tmp3[18]);
  const contactSyncAccount = tmp6Result.useContactSyncAccount();
  const tmp6Result3 = tmp6(tmp3[18]);
  const isContactSyncEnabledResult = tmp6Result3.isContactSyncEnabled(contactSyncAccount);
  [tmp29, c0] = _slicedToArray(obj3.useState(false), 2);
  _slicedToArray(obj3.useState(false), 2);
  const effect1 = obj3.useEffect(() => {
    let tmp2 = analyticsLocations;
    let obj = navigation(analyticsLocations[18]);
    const tmp = navigation;
    if (obj.isContactSyncAvailable()) {
      const tmpResult = tmp(tmp2[18]);
      const result = tmpResult.checkContactPermissions();
      result.then((result) => {
        const NOT_DETERMINED = constants.NOT_DETERMINED;
        let tmp3 = result === NOT_DETERMINED;
        const obj = c0(analyticsLocations[19]);
        const tmp2 = obj.isAndroid() && result === constants.UNAUTHORIZED;
        const tmp4 = closure_1_0;
        if (!tmp3) {
          tmp3 = tmp2;
        }
        tmp4(tmp3);
      });
    }
  }, []);
  const tmp6Result4 = tmp6(tmp3[18]);
  let result = tmp6Result4.isContactSyncAvailable();
  if (result) {
    let tmp32 = !isContactSyncEnabledResult;
    if (isContactSyncEnabledResult) {
      tmp32 = tmp29;
    }
    result = tmp32;
  }
  c25 = result;
  const items7 = [stateFromStoresArray.length, friendSuggestions.length, stateFromStores.length, result, tmp19, tmp20];
  memo1 = obj3.useMemo(() => {
    let num = 1;
    if (c25) {
      num = 2;
    }
    const items = [num, , , ];
    let num2 = 4;
    let num3 = 4;
    if (!closure_23) {
      num3 = stateFromStoresArray.length;
    }
    items[1] = num3;
    const tmp2 = closure_24;
    if (!tmp2) {
      num2 = stateFromStores.length;
    }
    items[2] = num2;
    items[3] = friendSuggestions.length;
    return items;
  }, items7);
  const items8 = [memo1, tmp19, tmp20];
  callback1 = obj3.useCallback((arg0, arg1) => {
    let tmp = arg1 === memo1[arg0] - 1;
    if (stateFromStores.INCOMING_FRIEND_REQUESTS === arg0) {
      if (tmp) {
        tmp = closure_23;
      }
      return tmp;
    } else if (tmp2.INCOMING_GAME_FRIEND_REQUESTS === arg0) {
      return tmp && closure_24;
    } else {
      return false;
    }
  }, items8);
  const items9 = [callback1, tmp5, userRowWithSubLabelHeight, userRowWithSubLabelHeight1, friendSuggestions];
  const callback2 = obj3.useCallback((arg0) => {
    let intl;
    let intl2;
    let intl3;
    let obj2;
    let obj3;
    if (stateFromStores.FIND_FRIENDS !== arg0) {
      if (stateFromStores.INCOMING_FRIEND_REQUESTS === arg0) {
        const element = { type: "section", props };
        props = { title: intl3.string(navigation(analyticsLocations[16]).t["93cLE3"]) };
        intl3 = navigation(analyticsLocations[16]).intl;
        return element;
      } else if (stateFromStores.INCOMING_GAME_FRIEND_REQUESTS === arg0) {
        const element1 = { type: "section", props: obj2 };
        obj2 = { title: intl2.string(navigation(analyticsLocations[16]).t["0uVuaU"]) };
        intl2 = navigation(analyticsLocations[16]).intl;
        return element1;
      } else if (stateFromStores.CONTACT_SUGGESTIONS === arg0) {
        const element2 = { type: "section", props: obj3 };
        obj3 = { title: intl.string(navigation(analyticsLocations[16]).t["1uAmCw"]) };
        intl = navigation(analyticsLocations[16]).intl;
        return element2;
      }
    }
  }, []);
  const callback3 = obj3.useCallback((arg0, arg1) => {
    if (callback1(arg0, arg1)) {
      return closure_3;
    } else if (stateFromStores.FIND_FRIENDS === arg0) {
      return closure_3;
    } else {
      if (stateFromStores.INCOMING_FRIEND_REQUESTS !== arg0) {
        if (stateFromStores.INCOMING_GAME_FRIEND_REQUESTS !== arg0) {
          if (stateFromStores.CONTACT_SUGGESTIONS === arg0) {
            let mutualFriendsCount;
            if (friendSuggestions[arg1] != null) {
              mutualFriendsCount = tmp4.mutualFriendsCount;
            }
            let tmp7 = null != mutualFriendsCount;
            if (tmp7) {
              let mutualFriendsCount1;
              if (friendSuggestions[arg1] != null) {
                mutualFriendsCount1 = tmp4.mutualFriendsCount;
              }
              tmp7 = mutualFriendsCount1 > 0;
            }
            return tmp7 ? userRowWithSubLabelHeight1 : userRowWithSubLabelHeight;
          } else {
            return closure_3;
          }
        }
      }
      return userRowWithSubLabelHeight;
    }
  }, items9);
  const obj6 = { value: analyticsLocations, children: null };
  const AnalyticsLocationProvider = tmp6(tmp3[20]).AnalyticsLocationProvider;
  const items10 = [closure_17(tmp2(tmp3[32]), { absolute: true }), ];
  let obj7 = { style: tmp.container, children: null };
  const obj8 = { style: tmp.inviteAppsContainerNonSticky, children: closure_17(tmp2(tmp3[33]), obj9) };
  obj9 = { onItemPressed: friendSuggestions, contentContainerStyle: tmp.inviteAppsContentContainer };
  const items11 = [closure_17(c6, obj8), ];
  if (!first2) {
    let tmp39Result;
    if (!(0 === stateFromStoresArray.length && 0 === stateFromStores.length && 0 === friendSuggestions.length)) {
      const obj10 = { style: tmp.loading, children: closure_17(tmp6(tmp3[34]).ActivityIndicator, {}) };
      tmp39Result = tmp39(tmp40, obj10);
    }
    items11[1] = tmp39Result;
    obj7.children = items11;
    items10[1] = stateFromStoresArray(c6, obj7);
    obj6.children = items10;
    return stateFromStoresArray(AnalyticsLocationProvider, obj6);
  }
  if (0 === stateFromStoresArray.length && 0 === stateFromStores.length && 0 === friendSuggestions.length) {
    const obj11 = { style: tmp.emptyContainer, children: items12 };
    const obj12 = { style: tmp.emptyActionContainer, children: closure_17(TableRow, obj13) };
    obj13 = { label: intl.string(tmp6(tmp3[16]).t.QzVsOs), labelLineClamp: 1, icon: closure_17(Icon, obj14), arrow: true, onPress, start: true, end: true };
    TableRow = tmp6(tmp3[36]).TableRow;
    intl = tmp6(tmp3[16]).intl;
    obj14 = { IconComponent: tmp6(tmp3[38]).AtIcon };
    Icon = tmp6(tmp3[36]).TableRow.Icon;
    items12 = [closure_17(c6, obj12), ];
    let tmp39Result2 = null;
    const tmp43 = c7;
    if (result) {
      tmp39Result2 = tmp39(tmp2(tmp3[42]), {});
    }
    items12[1] = tmp39Result2;
    tmp39Result3 = tmp38(tmp43, obj11);
  } else {
    const obj15 = {
      sections: memo1,
      getItemProps(flag2, arg1) {
          let onAcceptIncomingRequest;
          let onDeclineIncomingRequest;
          let onPress2;
          let onPress3;
          let tmp = 0 === arg1;
          const start = tmp;
          const end = arg1 === memo1[flag2] - 1;
          if (stateFromStores.FIND_FRIENDS === flag2) {
            if (tmp) {
              let obj3;
              const tmp16 = c25;
              if (tmp16) {
                let obj2 = {
                  type: "custom",
                  itemType: "showContactSyncCTA",
                  key: "showContactSyncCTA",
                  component() {
                          let Icon;
                          let intl;
                          let obj2;
                          const obj = { start: true, height: "100%", label: intl.string(start(user[16]).t.j2POVo), labelLineClamp: 1, icon: onPress2(Icon, obj2), trailing: onPress2(start(user[36]).TableRow.Arrow, {}), onPress: onPress3 };
                          const TableRow = start(user[36]).TableRow;
                          intl = start(user[16]).intl;
                          obj2 = { IconComponent: start(user[37]).FriendsIcon };
                          Icon = start(user[36]).TableRow.Icon;
                          return onPress2(TableRow, obj);
                        }
                };
                obj3 = obj2;
              }
              return obj3;
            }
            obj3 = {
              type: "custom",
              itemType: "addByUsername",
              key: "addByUsername",
              component() {
                  let Icon;
                  let intl;
                  let obj2;
                  const obj = { start: !closure_1_25, end: true, height: "100%", label: intl.string(navigation(analyticsLocations[16]).t.QzVsOs), labelLineClamp: 1, icon: onPress2(Icon, obj2), arrow: true, onPress };
                  const TableRow = navigation(analyticsLocations[36]).TableRow;
                  intl = navigation(analyticsLocations[16]).intl;
                  obj2 = { IconComponent: navigation(analyticsLocations[38]).AtIcon };
                  Icon = navigation(analyticsLocations[36]).TableRow.Icon;
                  return onPress2(TableRow, obj);
                }
            };
          } else {
            let user;
            if (stateFromStores.INCOMING_FRIEND_REQUESTS === flag2) {
              if (callback1(flag2, arg1)) {
                return {
                  type: "custom",
                  itemType: "viewAll",
                  key: "friendRequestsViewAll",
                  component() {
                          let length;
                          let obj = {
                            onPress() {
                              const obj = end(user[25]);
                              const obj2 = { section_id: constants.PENDING, truncated_count: 3, expanded_count: length.length, location: "AddFriends" };
                              obj.track(constants2.FRIEND_FINDER_SECTION_EXPANDED, obj2);
                              navigation.navigate("requests");
                            },
                            users: stateFromStoresArray.slice(3),
                            count: stateFromStoresArray.length
                          };
                          const tmp = sourcePage(analyticsLocations[39]);
                          return onPress2(tmp, obj);
                        }
                };
              } else {
                user = tmp15;
                return {
                  type: "custom",
                  itemType: "incomingRequest",
                  key: stateFromStoresArray[arg1].id,
                  component() {
                          const obj = { accepted: c8.includes(user.id), user, start, end, onPress: onPress2, onDeclineIncomingRequest, onAcceptIncomingRequest };
                          const IncomingFriendRequestRow = IncomingRequestRow.IncomingFriendRequestRow;
                          return onPress2(IncomingFriendRequestRow, obj);
                        }
                };
              }
            } else if (stateFromStores.INCOMING_GAME_FRIEND_REQUESTS === flag2) {
              if (callback1(flag2, arg1)) {
                return {
                  type: "custom",
                  itemType: "viewAll",
                  key: "gameFriendRequestsViewAll",
                  component() {
                          let substr;
                          const obj = {
                            onPress() {
                              navigation.navigate("requests");
                            },
                            users: substr.map((user) => user.user),
                            count: stateFromStores.length
                          };
                          const tmp = sourcePage(analyticsLocations[39]);
                          substr = stateFromStores.slice(3);
                          return onPress2(tmp, obj);
                        }
                };
              } else {
                user = tmp11.user;
                const applicationId = tmp11.applicationId;
                const _HermesInternal = HermesInternal;
                const obj7 = {
                  type: "custom",
                  itemType: "incomingRequest",
                  key: "" + user.id + "-" + applicationId,
                  component() {
                          let id;
                          const obj = { accepted: null != first1.find((userId) => userId.userId === id.id && userId.applicationId === tmp), applicationId, user, start, end, onPress: onPress2, onDeclineIncomingRequest, onAcceptIncomingRequest };
                          const ConnectedIncomingGameFriendRequestRow = IncomingRequestRow.ConnectedIncomingGameFriendRequestRow;
                          return onPress2(ConnectedIncomingGameFriendRequestRow, obj);
                        }
                };
                return obj7;
              }
            } else if (stateFromStores.CONTACT_SUGGESTIONS === flag2) {
              const suggestedFriend = tmp4;
              let mutualFriendsCount;
              if (friendSuggestions[arg1] != null) {
                mutualFriendsCount = tmp4.mutualFriendsCount;
              }
              let tmp7 = null != mutualFriendsCount;
              if (tmp7) {
                let mutualFriendsCount1;
                if (friendSuggestions[arg1] != null) {
                  mutualFriendsCount1 = tmp4.mutualFriendsCount;
                }
                tmp7 = mutualFriendsCount1 > 0;
              }
              let str = "contactSuggestionNoMutualCount";
              if (tmp7) {
                str = "contactSuggestionMutualCount";
              }
              let obj = {
                type: "custom",
                itemType: str,
                key: friendSuggestions[arg1].user.id,
                component() {
                      const obj = {
                        added: c20.includes(suggestedFriend),
                        suggestedFriend,
                        start,
                        end,
                        onPress: onPress2,
                        location: onAcceptIncomingRequest.ADD_FRIENDS_MODAL,
                        onAddSuggestion() {
                          return onPress3((arg0) => {
                            const items = [];
                            items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_1_5;
                            return items;
                          });
                        }
                      };
                      const ContactSuggestionRow = ContactSuggestionRow2.ContactSuggestionRow;
                      return onPress2(ContactSuggestionRow, obj);
                    }
              };
              return obj;
            }
          }
        },
      getSectionProps: callback2,
      getItemSize: callback3,
      insetEnd: 12,
      disableStickySections: true
    };
    tmp39Result3 = tmp39(tmp6(tmp3[35]).UsersFastList, obj15);
  }
  tmp39Result = tmp39Result3;
};
