// Module ID: 15455
// Function ID: 118905
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5, 31, 27, 6901, 3767, 1849, 11728, 653, 11707, 33, 4130, 689, 11705, 7460, 3830, 1212, 7001, 11709, 477, 5464, 5484, 4559, 675, 8492, 624, 22, 3969, 14914, 5470, 4662, 12165, 5586, 8825, 5165, 3832, 4647, 15456, 15457, 15459, 15460, 2]
// Exports: default

// Module 15455 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import module_12165 from "module_12165";
import get_ActivityIndicator from "conceal";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { Sections } from "SuggestedFriendSource";
import ME from "ME";
import { ContactPermissions } from "ContactSyncLandingPage";
import jsxProd from "Placeholder";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_6;
let closure_7;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function handleFindFriends() {
  require(11705) /* handleNameInputScreenOrSuggestions */.openContactSyncModal({}, constants.FRIENDS_ADD_FRIENDS_MODAL);
}
function handleShare() {
  return _handleShare(...arguments);
}
function _handleShare() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
function areGameFriendRequestRowsEqual(userId, userId2) {
  return userId.userId === userId2.userId && userId.applicationId === userId2.applicationId;
}
function areHydratedGameFriendRequestRowStatesEqual(arr) {
  let closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every((user) => user.user === table[arg1].user && user.applicationId === table[arg1].applicationId);
    const tmp2 = arr.length === arg1.length && arr.every((user) => user.user === table[arg1].user && user.applicationId === table[arg1].applicationId);
  }
  return tmp;
}
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, AnalyticsSections: closure_13, InstantInviteSources: closure_14, RelationshipTypes: closure_15 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = { FIND_FRIENDS: 0, [0]: "FIND_FRIENDS", INCOMING_FRIEND_REQUESTS: 1, [1]: "INCOMING_FRIEND_REQUESTS", INCOMING_GAME_FRIEND_REQUESTS: 2, [2]: "INCOMING_GAME_FRIEND_REQUESTS", CONTACT_SUGGESTIONS: 3, [3]: "CONTACT_SUGGESTIONS" };
_createForOfIteratorHelperLoose = { container: { flex: 1 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.inviteAppsContainerNonSticky = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.inviteAppsContentContainer = { paddingTop: 0, paddingBottom: 0, minWidth: "100%" };
_createForOfIteratorHelperLoose.emptyContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.emptyActionContainer = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND, justifyContent: "center", flex: 1 };
_createForOfIteratorHelperLoose.loading = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("result").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendsScreen.tsx");

export default function AddFriendsScreen(navigation) {
  let closure_17;
  let closure_18;
  let module_12165;
  let closure_6;
  let friendSuggestions;
  navigation = navigation.navigation;
  let sourcePage = navigation.route.params.sourcePage;
  let _createForOfIteratorHelperLoose;
  let c21;
  let c22;
  let memo1;
  let tmp = _createForOfIteratorHelperLoose();
  analyticsLocations = sourcePage(analyticsLocations[20])(sourcePage(analyticsLocations[21]).ADD_FRIENDS).analyticsLocations;
  let tmp3 = callback(React.useState([]), 2);
  callback = tmp3[0];
  let _isNativeReflectConstruct = tmp3[1];
  let tmp2 = sourcePage(analyticsLocations[20]);
  [module_12165, closure_6] = callback(React.useState([]), 2);
  let tmp5 = callback(React.useState([]), 2);
  const first = tmp5[0];
  let closure_8 = tmp5[1];
  let tmp7 = callback(React.useState([]), 2);
  const first1 = tmp7[0];
  let closure_10 = tmp7[1];
  let closure_11 = React.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (null != arg1) {
      user((arg0) => {
        const items = [...arg0, obj];
        return items;
      });
    } else {
      callback2((arg0) => {
        const items = [...arg0, closure_0];
        return items;
      });
    }
  }, []);
  let closure_12 = React.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (null != arg1) {
      gameRelationshipsByType((arg0) => {
        const items = [...arg0, obj];
        return items;
      });
    } else {
      callback((arg0) => {
        const items = [...arg0, closure_0];
        return items;
      });
    }
  }, []);
  sourcePage(analyticsLocations[22])(() => {
    let obj = sourcePage(analyticsLocations[23]);
    obj = { friend_add_type: callback.FRIENDS_ADD_FRIENDS_MODAL, source_page: sourcePage };
    obj.track(constants.FRIEND_ADD_VIEWED, obj);
  });
  let items = [navigation];
  callback = React.useCallback(() => {
    navigation.navigate("username-search");
  }, items);
  let items1 = [analyticsLocations];
  let closure_14 = React.useCallback((id) => {
    sourcePage(analyticsLocations[24])({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations, location: "Add Friends Modal User Profile" });
  }, items1);
  let obj = navigation(analyticsLocations[25]);
  const items2 = [first1, closure_10];
  const stateFromStoresArray = obj.useStateFromStoresArray(items2, () => {
    let iter3;
    const items = [];
    const mutableRelationships = first1.getMutableRelationships();
    const tmp = _undefined(mutableRelationships.keys());
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = first1;
        if (first1.isUnfilteredPendingIncoming(value)) {
          let tmp3 = user;
          user = user.getUser(value);
          let hasItem = null == user;
          if (!hasItem) {
            let tmp6 = lib;
            hasItem = lib.includes(value);
          }
          let tmp7 = user;
          if (!hasItem) {
            let arr = items.push(user);
            let tmp9 = user;
          }
        }
        iter3 = tmp();
        iter2 = iter3;
      } while (!iter3.done);
    }
    const items1 = [];
    const item = module_12165.forEach((arg0) => {
      user = user.getUser(arg0);
      if (null != user) {
        items1.push(user);
      }
    });
    const obj2 = sourcePage(analyticsLocations[26]);
    return sourcePage(analyticsLocations[26]).unionBy(items1, items, (id) => id.id).sort((arg0, arg1) => {
      const name = sourcePage(analyticsLocations[27]).getName(arg0);
      const obj = sourcePage(analyticsLocations[27]);
      return name.localeCompare(sourcePage(analyticsLocations[27]).getName(arg1));
    });
  });
  let obj1 = navigation(analyticsLocations[25]);
  const items3 = [closure_8, first1, closure_10];
  const items4 = [first1, first];
  const stateFromStores = obj1.useStateFromStores(items3, () => {
    gameRelationshipsByType = gameRelationshipsByType.getGameRelationshipsByType(stateFromStoresArray.PENDING_INCOMING);
    const items = [];
    const item = gameRelationshipsByType.forEach((id) => {
      id = id.id;
      const applicationId = id.applicationId;
      const user = authStore.getUser(id);
      let isSpamResult = first1.isSpam(id);
      if (!isSpamResult) {
        isSpamResult = first1.isBlockedOrIgnored(id);
      }
      if (!isSpamResult) {
        isSpamResult = null == user;
      }
      if (!isSpamResult) {
        isSpamResult = outer1_7.some((arg0) => outer3_26(arg0, { userId: id, applicationId }));
      }
      if (!isSpamResult) {
        const obj = { user, applicationId };
        id.push(obj);
      }
    });
    const items1 = [];
    const item1 = first1.forEach((userId) => {
      const user = authStore.getUser(userId.userId);
      if (null != user) {
        const obj = { user, applicationId: userId.applicationId };
        items1.push(obj);
      }
    });
    let obj = sourcePage(analyticsLocations[26]);
    return sourcePage(analyticsLocations[26]).unionBy(items1, items, (user) => user.user.id).sort((user, user2) => {
      const name = sourcePage(analyticsLocations[27]).getName(user.user);
      const obj = sourcePage(analyticsLocations[27]);
      return name.localeCompare(sourcePage(analyticsLocations[27]).getName(user2.user));
    });
  }, items4, areHydratedGameFriendRequestRowStatesEqual);
  let tmp4 = callback(React.useState([]), 2);
  ({ added: closure_17, setAdded: closure_18, friendSuggestions } = sourcePage(analyticsLocations[28])());
  let tmp12 = friendSuggestions.length > 0;
  if (tmp12) {
    tmp12 = stateFromStoresArray.length > 3;
  }
  _createForOfIteratorHelperLoose = tmp12;
  let tmp13 = friendSuggestions.length > 0;
  if (tmp13) {
    tmp13 = stateFromStores.length > 3;
  }
  c21 = tmp13;
  const items5 = [stateFromStores, tmp13];
  const memo = React.useMemo(() => {
    if (c21) {
      const _Math = Math;
      let length = Math.min(stateFromStores.length, 3);
    } else {
      length = stateFromStores.length;
    }
    const items = [];
    for (let num2 = 0; num2 < length; num2 = num2 + 1) {
      let tmp4 = stateFromStores;
      let tmp5 = stateFromStores[num2];
      if (null != tmp5) {
        let arr = items.push(tmp5.applicationId);
      }
    }
    return items;
  }, items5);
  sourcePage(analyticsLocations[29])(memo);
  const tmp11 = sourcePage(analyticsLocations[28])();
  let tmp17 = (function useShowContactSync() {
    let navigation;
    let tmp4;
    const contactSyncAccount = navigation(analyticsLocations[18]).useContactSyncAccount();
    const obj = navigation(analyticsLocations[18]);
    let obj2 = navigation(analyticsLocations[18]);
    const isContactSyncEnabledResult = navigation(analyticsLocations[18]).isContactSyncEnabled(contactSyncAccount);
    [tmp4, navigation] = lib(outer1_5.useState(false), 2);
    const effect = outer1_5.useEffect(() => {
      if (obj.isContactSyncAvailable()) {
        const result = navigation(analyticsLocations[18]).checkContactPermissions();
        result.then((arg0) => {
          let tmp = arg0 === stateFromStores.NOT_DETERMINED;
          let isAndroidResult = navigation(analyticsLocations[19]).isAndroid();
          if (isAndroidResult) {
            isAndroidResult = arg0 === stateFromStores.UNAUTHORIZED;
          }
          if (!tmp) {
            tmp = isAndroidResult;
          }
          outer1_0(tmp);
        });
        const obj2 = navigation(analyticsLocations[18]);
      }
    }, []);
    const tmp3 = lib(outer1_5.useState(false), 2);
    const tmp6 = !navigation(analyticsLocations[18]).isContactSyncAvailable();
    let tmp7 = !tmp6;
    if (!tmp6) {
      tmp7 = !isContactSyncEnabledResult || tmp4;
      const tmp8 = !isContactSyncEnabledResult || tmp4;
    }
    return tmp7;
  })();
  c22 = tmp17;
  const items6 = [stateFromStoresArray.length, friendSuggestions.length, stateFromStores.length, tmp17, tmp12, tmp13];
  memo1 = React.useMemo(() => {
    let num = 1;
    if (c22) {
      num = 2;
    }
    const items = [num, , , ];
    let num2 = 4;
    let num3 = 4;
    if (!c20) {
      num3 = stateFromStoresArray.length;
    }
    items[1] = num3;
    if (!c21) {
      num2 = stateFromStores.length;
    }
    items[2] = num2;
    items[3] = friendSuggestions.length;
    return items;
  }, items6);
  const callback1 = React.useCallback((arg0) => {
    if (friendSuggestions.FIND_FRIENDS !== arg0) {
      if (friendSuggestions.INCOMING_FRIEND_REQUESTS === arg0) {
        let obj = { type: "section" };
        obj = {};
        const intl3 = navigation(analyticsLocations[16]).intl;
        obj.title = intl3.string(navigation(analyticsLocations[16]).t["93cLE3"]);
        obj.props = obj;
        return obj;
      } else if (friendSuggestions.INCOMING_GAME_FRIEND_REQUESTS === arg0) {
        const obj1 = { type: "section" };
        const obj2 = {};
        const intl2 = navigation(analyticsLocations[16]).intl;
        obj2.title = intl2.string(navigation(analyticsLocations[16]).t["0uVuaU"]);
        obj1.props = obj2;
        return obj1;
      } else if (friendSuggestions.CONTACT_SUGGESTIONS === arg0) {
        obj = { type: "section" };
        const obj3 = {};
        const intl = navigation(analyticsLocations[16]).intl;
        obj3.title = intl.string(navigation(analyticsLocations[16]).t["1uAmCw"]);
        obj.props = obj3;
        return obj;
      }
    }
  }, []);
  obj = { value: analyticsLocations };
  const items7 = [callback3(sourcePage(analyticsLocations[30]), { absolute: true }), ];
  obj = { style: tmp.container };
  obj1 = { style: tmp.inviteAppsContainerNonSticky };
  let obj2 = { onItemPressed: handleShare, contentContainerStyle: tmp.inviteAppsContentContainer };
  obj1.children = callback3(sourcePage(analyticsLocations[31]), obj2);
  const items8 = [callback3(closure_6, obj1), ];
  if (!tmp16) {
    if (!tmp18) {
      let obj3 = { style: tmp.loading, children: callback3(navigation(analyticsLocations[32]).ActivityIndicator, {}) };
      items8[1] = callback3(closure_6, obj3);
      obj.children = items8;
      items7[1] = tmp21(closure_6, obj);
      obj.children = items7;
      return tmp21(navigation(analyticsLocations[20]).AnalyticsLocationProvider, obj);
    }
  }
  if (0 === stateFromStoresArray.length && 0 === stateFromStores.length && 0 === friendSuggestions.length) {
    let obj4 = { style: tmp.emptyContainer };
    const obj5 = { style: tmp.emptyActionContainer };
    const obj6 = { label: null, labelLineClamp: 1, icon: null, arrow: true, onPress: null, start: true, end: true };
    let intl = navigation(analyticsLocations[16]).intl;
    obj6.label = intl.string(navigation(analyticsLocations[16]).t.QzVsOs);
    const obj7 = { IconComponent: navigation(analyticsLocations[36]).AtIcon };
    obj6.icon = callback3(navigation(analyticsLocations[34]).TableRow.Icon, obj7);
    obj6.onPress = callback;
    tmp = callback3(navigation(analyticsLocations[34]).TableRow, obj6);
    obj5.children = tmp;
    const items9 = [callback3(closure_6, obj5), ];
    let tmp37 = null;
    if (tmp17) {
      tmp = analyticsLocations;
      tmp17 = sourcePage(analyticsLocations[40]);
      tmp37 = callback3(tmp17, {});
    }
    items9[1] = tmp37;
    obj4.children = items9;
    closure_18(first, obj4);
    const tmp31 = closure_18;
    const tmp32 = first;
  } else {
    const obj8 = {
      sections: memo1,
      getItemProps(arg0, arg1) {
          const navigation = tmp;
          const sourcePage = tmp2;
          if (friendSuggestions.FIND_FRIENDS === arg0) {
            if (tmp) {
              if (c22) {
                let obj = {
                  type: "custom",
                  itemType: "showContactSyncCTA",
                  key: "showContactSyncCTA",
                  component() {
                          let obj = { start: true, height: "100%", label: null, labelLineClamp: 1 };
                          const intl = navigation(analyticsLocations[16]).intl;
                          obj.label = intl.string(navigation(analyticsLocations[16]).t.j2POVo);
                          obj = { IconComponent: navigation(analyticsLocations[35]).FriendsIcon };
                          obj.icon = outer2_17(navigation(analyticsLocations[34]).TableRow.Icon, obj);
                          obj.trailing = outer2_17(navigation(analyticsLocations[34]).TableRow.Arrow, {});
                          obj.onPress = memo1;
                          return outer2_17(navigation(analyticsLocations[34]).TableRow, obj);
                        }
                };
              }
              return obj;
            }
            obj = {
              type: "custom",
              itemType: "addByUsername",
              key: "addByUsername",
              component() {
                  let obj = { start: !outer1_22, end: true, height: "100%", label: null, labelLineClamp: 1, icon: null, arrow: true };
                  const intl = navigation(analyticsLocations[16]).intl;
                  obj.label = intl.string(navigation(analyticsLocations[16]).t.QzVsOs);
                  obj = { IconComponent: navigation(analyticsLocations[36]).AtIcon };
                  obj.icon = outer2_17(navigation(analyticsLocations[34]).TableRow.Icon, obj);
                  obj.onPress = outer1_13;
                  return outer2_17(navigation(analyticsLocations[34]).TableRow, obj);
                }
            };
          } else if (friendSuggestions.INCOMING_FRIEND_REQUESTS === arg0) {
            if (tmp2) {
              if (c20) {
                const obj1 = {
                  type: "custom",
                  itemType: "viewAll",
                  key: "friendRequestsViewAll",
                  component() {
                          let obj = {
                            onPress() {
                              let obj = sourcePage(analyticsLocations[23]);
                              obj = { section_id: constants.PENDING, truncated_count: 3, expanded_count: outer2_15.length, location: "AddFriends" };
                              obj.track(constants2.FRIEND_FINDER_SECTION_EXPANDED, obj);
                              navigation.navigate("requests");
                            },
                            users: outer1_15.slice(3),
                            count: outer1_15.length
                          };
                          return outer2_17(sourcePage(analyticsLocations[37]), obj);
                        }
                };
                return obj1;
              }
            }
            const analyticsLocations = tmp14;
            const obj2 = {
              type: "custom",
              itemType: "incomingRequest",
              key: stateFromStoresArray[arg1].id,
              component() {
                  const obj = { accepted: tmp4.includes(tmp14.id), user: tmp14, start: closure_0, end: closure_1, onPress: outer1_14, onDeclineIncomingRequest: outer1_12, onAcceptIncomingRequest: outer1_11 };
                  return outer2_17(navigation(analyticsLocations[38]).IncomingFriendRequestRow, obj);
                }
            };
            return obj2;
          } else if (friendSuggestions.INCOMING_GAME_FRIEND_REQUESTS === arg0) {
            if (tmp2) {
              if (c21) {
                const obj3 = {
                  type: "custom",
                  itemType: "viewAll",
                  key: "gameFriendRequestsViewAll",
                  component() {
                          const obj = {
                            onPress() {
                              navigation.navigate("requests");
                            }
                          };
                          const substr = outer1_16.slice(3);
                          obj.users = substr.map((user) => user.user);
                          obj.count = outer1_16.length;
                          return outer2_17(sourcePage(analyticsLocations[37]), obj);
                        }
                };
                return obj3;
              }
            }
            const user = tmp10.user;
            const applicationId = tmp10.applicationId;
            const obj4 = { type: "custom", itemType: "incomingRequest" };
            const _HermesInternal = HermesInternal;
            obj4.key = "" + user.id + "-" + applicationId;
            obj4.component = function component() {
              const obj = { accepted: null != outer1_9.find((arg0) => outer3_26(arg0, { userId: outer1_3.id, applicationId: outer1_4 })), applicationId, user, start: closure_0, end: closure_1, onPress: outer1_14, onDeclineIncomingRequest: outer1_12, onAcceptIncomingRequest: outer1_11 };
              return outer2_17(navigation(analyticsLocations[38]).ConnectedIncomingGameFriendRequestRow, obj);
            };
            return obj4;
          } else if (friendSuggestions.CONTACT_SUGGESTIONS === arg0) {
            let module_12165 = tmp4;
            obj = { type: "custom" };
            let mutualFriendsCount;
            if (null != friendSuggestions[arg1]) {
              mutualFriendsCount = tmp4.mutualFriendsCount;
            }
            let str3 = "contactSuggestionNoMutualCount";
            if (null != mutualFriendsCount) {
              let mutualFriendsCount1;
              if (null != tmp4) {
                mutualFriendsCount1 = tmp4.mutualFriendsCount;
              }
              str3 = "contactSuggestionNoMutualCount";
              if (mutualFriendsCount1 > 0) {
                str3 = "contactSuggestionMutualCount";
              }
            }
            obj.itemType = str3;
            obj.key = friendSuggestions[arg1].user.id;
            obj.component = function component() {
              const obj = {
                added: outer1_17.includes(module_12165),
                suggestedFriend: module_12165,
                start: closure_0,
                end: closure_1,
                onPress: outer1_14,
                location: constants.ADD_FRIENDS_MODAL,
                onAddSuggestion() {
                  return outer2_18((arg0) => {
                    const items = [...arg0, outer2_5];
                    return items;
                  });
                }
              };
              return outer2_17(navigation(analyticsLocations[39]).ContactSuggestionRow, obj);
            };
            return obj;
          }
        },
      getSectionProps: callback1,
      insetEnd: 12,
      disableStickySections: true
    };
    callback3(navigation(analyticsLocations[33]).UsersFastList, obj8);
  }
};
