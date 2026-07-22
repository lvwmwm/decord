// Module ID: 15338
// Function ID: 116731
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 15338 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  arg1(dependencyMap[13]).openContactSyncModal({}, constants.FRIENDS_ADD_FRIENDS_MODAL);
}
function handleShare() {
  return _handleShare(...arguments);
}
function _handleShare() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _handleShare = obj;
  return obj(...arguments);
}
function areGameFriendRequestRowsEqual(userId, userId2) {
  return userId.userId === userId2.userId && userId.applicationId === userId2.applicationId;
}
function areHydratedGameFriendRequestRowStatesEqual(arr) {
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every((user) => user.user === arg1[arg1].user && user.applicationId === arg1[arg1].applicationId);
    const tmp2 = arr.length === arg1.length && arr.every((user) => user.user === arg1[arg1].user && user.applicationId === arg1[arg1].applicationId);
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const Sections = arg1(dependencyMap[7]).Sections;
const tmp2 = arg1(dependencyMap[3]);
({ AnalyticEvents: closure_12, AnalyticsSections: closure_13, InstantInviteSources: closure_14, RelationshipTypes: closure_15 } = arg1(dependencyMap[8]));
const ContactPermissions = arg1(dependencyMap[9]).ContactPermissions;
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_17, jsxs: closure_18 } = arg1(dependencyMap[10]));
let closure_19 = { FIND_FRIENDS: 0, [0]: "FIND_FRIENDS", INCOMING_FRIEND_REQUESTS: 1, [1]: "INCOMING_FRIEND_REQUESTS", INCOMING_GAME_FRIEND_REQUESTS: 2, [2]: "INCOMING_GAME_FRIEND_REQUESTS", CONTACT_SUGGESTIONS: 3, [3]: "CONTACT_SUGGESTIONS" };
let obj = arg1(dependencyMap[11]);
obj = { container: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[12]).colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingVertical: importDefault(dependencyMap[12]).space.PX_16 };
obj.inviteAppsContainerNonSticky = obj;
obj.inviteAppsContentContainer = { <string:508705377>: "/assets/images/native", <string:1378301446>: 24, <string:2443014076>: 24 };
const tmp4 = arg1(dependencyMap[10]);
obj.emptyContainer = { backgroundColor: importDefault(dependencyMap[12]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
const obj1 = { backgroundColor: importDefault(dependencyMap[12]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.emptyActionContainer = { marginHorizontal: importDefault(dependencyMap[12]).space.PX_16, paddingTop: importDefault(dependencyMap[12]).space.PX_8 };
const obj3 = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, backgroundColor: importDefault(dependencyMap[12]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.loading = obj3;
let closure_20 = obj.createStyles(obj);
const obj2 = { marginHorizontal: importDefault(dependencyMap[12]).space.PX_16, paddingTop: importDefault(dependencyMap[12]).space.PX_8 };
const result = arg1(dependencyMap[41]).fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendsScreen.tsx");

export default function AddFriendsScreen(navigation) {
  let friendSuggestions;
  navigation = navigation.navigation;
  const arg1 = navigation;
  const importDefault = navigation.route.params.sourcePage;
  let callback4;
  let _createForOfIteratorHelperLoose;
  let _arrayLikeToArray;
  let handleFindFriends;
  let tmp = callback4();
  const analyticsLocations = importDefault(dependencyMap[20])(importDefault(dependencyMap[21]).ADD_FRIENDS).analyticsLocations;
  const dependencyMap = analyticsLocations;
  const tmp3 = callback(React.useState([]), 2);
  let callback = tmp3[0];
  let closure_4 = tmp3[1];
  const tmp2 = importDefault(dependencyMap[20]);
  [closure_5, closure_6] = callback(React.useState([]), 2);
  const tmp5 = callback(React.useState([]), 2);
  const first = tmp5[0];
  let closure_8 = tmp5[1];
  const tmp7 = callback(React.useState([]), 2);
  const first1 = tmp7[0];
  let closure_9 = first1;
  let closure_10 = tmp7[1];
  let closure_11 = React.useCallback((arg0, arg1) => {
    const navigation = arg0;
    const sourcePage = arg1;
    if (null != arg1) {
      callback4((arg0) => {
        const items = [...arg0, obj];
        return items;
      });
    } else {
      callback3((arg0) => {
        const items = [...arg0, arg0];
        return items;
      });
    }
  }, []);
  let closure_12 = React.useCallback((arg0, arg1) => {
    const navigation = arg0;
    const sourcePage = arg1;
    if (null != arg1) {
      gameRelationshipsByType((arg0) => {
        const items = [...arg0, obj];
        return items;
      });
    } else {
      callback2((arg0) => {
        const items = [...arg0, arg0];
        return items;
      });
    }
  }, []);
  importDefault(dependencyMap[22])(() => {
    let obj = sourcePage(analyticsLocations[23]);
    obj = { friend_add_type: callback.FRIENDS_ADD_FRIENDS_MODAL, source_page: sourcePage };
    obj.track(constants.FRIEND_ADD_VIEWED, obj);
  });
  const items = [navigation];
  callback = React.useCallback(() => {
    navigation.navigate("username-search");
  }, items);
  const items1 = [analyticsLocations];
  let closure_14 = React.useCallback((id) => {
    sourcePage(analyticsLocations[24])({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations, location: "Add Friends Modal User Profile" });
  }, items1);
  let obj = arg1(dependencyMap[25]);
  const items2 = [closure_9, closure_10];
  const stateFromStoresArray = obj.useStateFromStoresArray(items2, () => {
    let iter3;
    const items = [];
    const mutableRelationships = first1.getMutableRelationships();
    const tmp = tmp13(mutableRelationships.keys());
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = closure_9;
        if (closure_9.isUnfilteredPendingIncoming(value)) {
          let tmp3 = closure_10;
          let user = closure_10.getUser(value);
          let hasItem = null == user;
          if (!hasItem) {
            let tmp6 = closure_3;
            hasItem = closure_3.includes(value);
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
    const navigation = items1;
    const item = React.forEach((arg0) => {
      const user = user.getUser(arg0);
      if (null != user) {
        items1.push(user);
      }
    });
    const obj2 = sourcePage(analyticsLocations[26]);
    return sourcePage(analyticsLocations[26]).unionBy(items1, items, (id) => id.id).sort((arg0, arg1) => {
      const name = callback(closure_2[27]).getName(arg0);
      const obj = callback(closure_2[27]);
      return name.localeCompare(callback(closure_2[27]).getName(arg1));
    });
  });
  let obj1 = arg1(dependencyMap[25]);
  const items3 = [closure_8, closure_9, closure_10];
  const items4 = [first1, first];
  const stateFromStores = obj1.useStateFromStores(items3, () => {
    const gameRelationshipsByType = gameRelationshipsByType.getGameRelationshipsByType(stateFromStoresArray.PENDING_INCOMING);
    const items = [];
    const navigation = items;
    const item = gameRelationshipsByType.forEach((id) => {
      id = id.id;
      const items = id;
      const applicationId = id.applicationId;
      const items1 = applicationId;
      const user = authStore.getUser(id);
      let isSpamResult = closure_9.isSpam(id);
      if (!isSpamResult) {
        isSpamResult = closure_9.isBlockedOrIgnored(id);
      }
      if (!isSpamResult) {
        isSpamResult = null == user;
      }
      if (!isSpamResult) {
        isSpamResult = closure_7.some((arg0) => callback(arg0, { userId: id, applicationId }));
      }
      if (!isSpamResult) {
        const obj = { user, applicationId };
        items.push(obj);
      }
    });
    const items1 = [];
    const sourcePage = items1;
    const item1 = first1.forEach((userId) => {
      const user = authStore.getUser(userId.userId);
      if (null != user) {
        const obj = { user, applicationId: userId.applicationId };
        items1.push(obj);
      }
    });
    const obj = sourcePage(analyticsLocations[26]);
    return sourcePage(analyticsLocations[26]).unionBy(items1, items, (user) => user.user.id).sort((user, user2) => {
      const name = items1(closure_2[27]).getName(user.user);
      const obj = items1(closure_2[27]);
      return name.localeCompare(items1(closure_2[27]).getName(user2.user));
    });
  }, items4, areHydratedGameFriendRequestRowStatesEqual);
  const ContactPermissions = stateFromStores;
  const tmp4 = callback(React.useState([]), 2);
  ({ added: closure_17, setAdded: closure_18, friendSuggestions } = importDefault(dependencyMap[28])());
  let closure_19 = friendSuggestions;
  let tmp12 = friendSuggestions.length > 0;
  if (tmp12) {
    tmp12 = stateFromStoresArray.length > 3;
  }
  callback4 = tmp12;
  let tmp13 = friendSuggestions.length > 0;
  if (tmp13) {
    tmp13 = stateFromStores.length > 3;
  }
  _createForOfIteratorHelperLoose = tmp13;
  const items5 = [stateFromStores, tmp13];
  const memo = React.useMemo(() => {
    if (tmp13) {
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
  importDefault(dependencyMap[29])(memo);
  const tmp11 = importDefault(dependencyMap[28])();
  let tmp17 = function useShowContactSync() {
    let tmp4;
    const contactSyncAccount = navigation(analyticsLocations[18]).useContactSyncAccount();
    const obj = navigation(analyticsLocations[18]);
    const obj2 = navigation(analyticsLocations[18]);
    const isContactSyncEnabledResult = navigation(analyticsLocations[18]).isContactSyncEnabled(contactSyncAccount);
    [tmp4, closure_0] = callback(React.useState(false), 2);
    const effect = React.useEffect(() => {
      if (obj.isContactSyncAvailable()) {
        const result = callback(closure_2[18]).checkContactPermissions();
        result.then((arg0) => {
          let tmp = arg0 === constants.NOT_DETERMINED;
          let isAndroidResult = callback(closure_2[19]).isAndroid();
          if (isAndroidResult) {
            isAndroidResult = arg0 === constants.UNAUTHORIZED;
          }
          if (!tmp) {
            tmp = isAndroidResult;
          }
          callback(tmp);
        });
        const obj2 = callback(closure_2[18]);
      }
    }, []);
    const tmp3 = callback(React.useState(false), 2);
    const tmp6 = !navigation(analyticsLocations[18]).isContactSyncAvailable();
    let tmp7 = !tmp6;
    if (!tmp6) {
      tmp7 = !isContactSyncEnabledResult || tmp4;
      const tmp8 = !isContactSyncEnabledResult || tmp4;
    }
    return tmp7;
  }();
  _arrayLikeToArray = tmp17;
  const items6 = [stateFromStoresArray.length, friendSuggestions.length, stateFromStores.length, tmp17, tmp12, tmp13];
  const memo1 = React.useMemo(() => {
    let num = 1;
    if (tmp17) {
      num = 2;
    }
    const items = [num, , , ];
    let num2 = 4;
    let num3 = 4;
    if (!tmp12) {
      num3 = stateFromStoresArray.length;
    }
    items[1] = num3;
    if (!tmp13) {
      num2 = stateFromStores.length;
    }
    items[2] = num2;
    items[3] = friendSuggestions.length;
    return items;
  }, items6);
  handleFindFriends = memo1;
  const callback1 = React.useCallback((arg0) => {
    if (friendSuggestions.FIND_FRIENDS !== arg0) {
      if (friendSuggestions.INCOMING_FRIEND_REQUESTS === arg0) {
        let obj = { type: "section" };
        obj = {};
        const intl3 = navigation(analyticsLocations[16]).intl;
        obj.title = intl3.string(navigation(analyticsLocations[16]).t.93cLE3);
        obj.props = obj;
        return obj;
      } else if (friendSuggestions.INCOMING_GAME_FRIEND_REQUESTS === arg0) {
        const obj1 = { type: "section" };
        const obj2 = {};
        const intl2 = navigation(analyticsLocations[16]).intl;
        obj2.title = intl2.string(navigation(analyticsLocations[16]).t.0uVuaU);
        obj1.props = obj2;
        return obj1;
      } else if (friendSuggestions.CONTACT_SUGGESTIONS === arg0) {
        obj = { type: "section" };
        const obj3 = {};
        const intl = navigation(analyticsLocations[16]).intl;
        obj3.title = intl.string(navigation(analyticsLocations[16]).t.1uAmCw);
        obj.props = obj3;
        return obj;
      }
    }
  }, []);
  obj = { value: analyticsLocations };
  const items7 = [callback3(importDefault(dependencyMap[30]), { absolute: true }), ];
  obj = { style: tmp.container };
  obj1 = { style: tmp.inviteAppsContainerNonSticky };
  const obj2 = { onItemPressed: handleShare, contentContainerStyle: tmp.inviteAppsContentContainer };
  obj1.children = callback3(importDefault(dependencyMap[31]), obj2);
  const items8 = [callback3(closure_6, obj1), ];
  if (!tmp16) {
    if (!tmp18) {
      const obj3 = { style: tmp.loading, children: callback3(arg1(dependencyMap[32]).ActivityIndicator, {}) };
      items8[1] = callback3(closure_6, obj3);
      obj.children = items8;
      items7[1] = tmp21(closure_6, obj);
      obj.children = items7;
      return tmp21(arg1(dependencyMap[20]).AnalyticsLocationProvider, obj);
    }
  }
  if (0 === stateFromStoresArray.length && 0 === stateFromStores.length && 0 === friendSuggestions.length) {
    const obj4 = { style: tmp.emptyContainer };
    const obj5 = { style: tmp.emptyActionContainer };
    const obj6 = { "Bool(true)": 1025441793, "Bool(true)": 561971202, "Bool(true)": 562036738, "Bool(true)": -822083582, "Bool(true)": 452460545, "Bool(true)": -783810559, "Bool(true)": -644153343 };
    const intl = arg1(dependencyMap[16]).intl;
    obj6.label = intl.string(arg1(dependencyMap[16]).t.QzVsOs);
    const obj7 = { IconComponent: arg1(dependencyMap[36]).AtIcon };
    obj6.icon = callback3(arg1(dependencyMap[34]).TableRow.Icon, obj7);
    obj6.onPress = callback;
    tmp = callback3(arg1(dependencyMap[34]).TableRow, obj6);
    obj5.children = tmp;
    const items9 = [callback3(closure_6, obj5), ];
    let tmp37 = null;
    if (tmp17) {
      tmp = dependencyMap;
      tmp17 = importDefault(dependencyMap[40]);
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
              if (tmp17) {
                let obj = {
                  component() {
                          let obj = {};
                          const intl = tmp(tmp14[16]).intl;
                          obj.label = intl.string(tmp(tmp14[16]).t.j2POVo);
                          obj = { IconComponent: tmp(tmp14[35]).FriendsIcon };
                          obj.icon = lib(tmp(tmp14[34]).TableRow.Icon, obj);
                          obj.trailing = lib(tmp(tmp14[34]).TableRow.Arrow, {});
                          obj.onPress = closure_23;
                          return lib(tmp(tmp14[34]).TableRow, obj);
                        }
                };
              }
              return obj;
            }
            obj = {
              "Bool(true)": true,
              "Bool(true)": "/assets/images/native/empties",
              "Bool(true)": 292,
              component() {
                  let obj = { start: !closure_22 };
                  const intl = tmp(tmp14[16]).intl;
                  obj.label = intl.string(tmp(tmp14[16]).t.QzVsOs);
                  obj = { IconComponent: tmp(tmp14[36]).AtIcon };
                  obj.icon = lib(tmp(tmp14[34]).TableRow.Icon, obj);
                  obj.onPress = closure_13;
                  return lib(tmp(tmp14[34]).TableRow, obj);
                }
            };
          } else if (friendSuggestions.INCOMING_FRIEND_REQUESTS === arg0) {
            if (tmp2) {
              if (tmp12) {
                const obj1 = {
                  component() {
                          const obj = {
                            onPress() {
                              let obj = callback(closure_2[23]);
                              obj = { section_id: constants.PENDING, truncated_count: 3, expanded_count: length.length, location: "AddFriends" };
                              obj.track(constants2.FRIEND_FINDER_SECTION_EXPANDED, obj);
                              navigation.navigate("requests");
                            },
                            users: arr.slice(3),
                            count: arr.length
                          };
                          return lib(tmp2(tmp14[37]), obj);
                        }
                };
                return obj1;
              }
            }
            const analyticsLocations = tmp14;
            const obj2 = {
              "Bool(true)": 292,
              "Bool(true)": 182,
              key: stateFromStoresArray[arg1].id,
              component() {
                  const obj = { accepted: tmp4.includes(tmp14.id), user: tmp14, start: tmp, end: tmp2, onPress: closure_14, onDeclineIncomingRequest: closure_12, onAcceptIncomingRequest: closure_11 };
                  return lib(tmp(tmp14[38]).IncomingFriendRequestRow, obj);
                }
            };
            return obj2;
          } else if (friendSuggestions.INCOMING_GAME_FRIEND_REQUESTS === arg0) {
            if (tmp2) {
              if (tmp13) {
                const obj3 = {
                  component() {
                          const obj = {
                            onPress() {
                              navigation.navigate("requests");
                            }
                          };
                          const substr = arr2.slice(3);
                          obj.users = substr.map((user) => user.user);
                          obj.count = arr2.length;
                          return lib(tmp2(tmp14[37]), obj);
                        }
                };
                return obj3;
              }
            }
            const user = tmp10.user;
            let closure_3 = user;
            const applicationId = tmp10.applicationId;
            let closure_4 = applicationId;
            const obj4 = { "Bool(true)": 292, "Bool(true)": 182 };
            const _HermesInternal = HermesInternal;
            obj4.key = "" + user.id + "-" + applicationId;
            obj4.component = function component() {
              const obj = { accepted: null != closure_9.find((arg0) => callback(arg0, { userId: id.id, applicationId: closure_4 })), applicationId, user, start: tmp, end: tmp2, onPress: closure_14, onDeclineIncomingRequest: closure_12, onAcceptIncomingRequest: closure_11 };
              return lib(tmp(tmp14[38]).ConnectedIncomingGameFriendRequestRow, obj);
            };
            return obj4;
          } else if (friendSuggestions.CONTACT_SUGGESTIONS === arg0) {
            const tmp4 = friendSuggestions[arg1];
            obj = { type: "custom" };
            let mutualFriendsCount;
            if (null != tmp4) {
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
            obj.key = tmp4.user.id;
            obj.component = function component() {
              const obj = {
                added: lib.includes(tmp4),
                suggestedFriend: tmp4,
                start: tmp,
                end: tmp2,
                onPress: constants,
                location: constants.ADD_FRIENDS_MODAL,
                onAddSuggestion() {
                  return callback((arg0) => {
                    const items = [...arg0, closure_5];
                    return items;
                  });
                }
              };
              return lib(tmp(tmp14[39]).ContactSuggestionRow, obj);
            };
            return obj;
          }
        },
      getSectionProps: callback1,
      insetEnd: 12,
      disableStickySections: true
    };
    callback3(arg1(dependencyMap[33]).UsersFastList, obj8);
  }
};
