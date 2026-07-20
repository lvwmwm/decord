// Module ID: 11393
// Function ID: 88652
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 4138, 4317, 4318, 566, 8444, 4614, 9133, 8354, 4096, 11402, 1934, 1212, 11406, 2, 31, 27, 1838, 4317, 4318, 33, 4126]
// Exports: default

// Module 11393 (_createForOfIteratorHelperLoose)
import module_31 from "module_31";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { View } from "_isNativeReflectConstruct";
import ReadStateTypes from "ReadStateTypes";
import initialize from "initialize";
import useGuildUpcomingEvents from "useGuildUpcomingEvents";
import { UserRowModes } from "shouldShowMembershipVerificationGate";
import openMemberVerificationModal from "openMemberVerificationModal";
import openCreateOrEditGuildEventModal from "openCreateOrEditGuildEventModal";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

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
function matchGroupDMRecipients(trimmed, recipients) {
  const tmp = _createForOfIteratorHelperLoose(recipients.recipients);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    while (true) {
      let tmp2 = user;
      let user = user.getUser(iter2.value);
      if (null != user) {
        let username = user.username;
        let tmp22 = importDefault;
        let tmp23 = dependencyMap;
        let toLocaleLowerCaseResult = username.toLocaleLowerCase();
        if (importDefault(dependencyMap[10])(trimmed, toLocaleLowerCaseResult)) {
          let num3 = 1;
          return 1;
        } else {
          let tmp4 = importDefault;
          let tmp5 = dependencyMap;
          let obj = importDefault(dependencyMap[11]);
          let globalName = obj.getGlobalName(user);
          let toLocaleLowerCaseResult1;
          if (null != globalName) {
            toLocaleLowerCaseResult1 = globalName.toLocaleLowerCase();
          }
          if (null != toLocaleLowerCaseResult1) {
            let tmp7 = importDefault;
            let tmp8 = dependencyMap;
            if (importDefault(dependencyMap[10])(trimmed, toLocaleLowerCaseResult1)) {
              break;
            }
          }
          let tmp9 = nickname;
          let nickname = nickname.getNickname(user.id);
          let toLocaleLowerCaseResult2;
          if (null != nickname) {
            toLocaleLowerCaseResult2 = nickname.toLocaleLowerCase();
          }
          let tmp11 = globalName;
          let tmp12 = nickname;
          let tmp13 = toLocaleLowerCaseResult1;
          let tmp14 = toLocaleLowerCaseResult2;
          if (null != toLocaleLowerCaseResult2) {
            let tmp15 = importDefault;
            let tmp16 = dependencyMap;
            let tmp17 = globalName;
            let tmp18 = nickname;
            let tmp19 = toLocaleLowerCaseResult1;
            let tmp20 = toLocaleLowerCaseResult2;
            if (importDefault(dependencyMap[10])(trimmed, toLocaleLowerCaseResult2)) {
              let num = 1;
              return 1;
            }
          }
        }
      }
      let iter3 = tmp();
      iter2 = iter3;
    }
    return 1;
  }
  return 0;
}
function matchGroupDM(recipients, trimmed) {
  if ("" === trimmed) {
    return 0;
  } else {
    const channelName = trimmed(dependencyMap[12]).computeChannelName(recipients, useGuildUpcomingEvents, initialize);
    const toLocaleLowerCaseResult = channelName.toLocaleLowerCase();
    let num2 = 3;
    if (!toLocaleLowerCaseResult.startsWith(trimmed)) {
      let num4 = 2;
      if (!importDefault(dependencyMap[10])(trimmed, toLocaleLowerCaseResult)) {
        num4 = matchGroupDMRecipients(trimmed, recipients);
      }
      num2 = num4;
    }
    return num2;
  }
}
function isMatchNewMessageUserListGroupDM(recipients, arg1, trimmed) {
  if ("" === trimmed) {
    return 0;
  } else if (0 === arg1.length) {
    return matchGroupDM(recipients, trimmed);
  } else {
    const tmp2 = _createForOfIteratorHelperLoose(arg1);
    let iter = tmp2();
    if (!iter.done) {
      recipients = recipients.recipients;
      while (recipients.includes(iter.value)) {
        let iter2 = tmp2();
        iter = iter2;
      }
      return 0;
    }
    return matchGroupDMRecipients(trimmed, recipients);
  }
}
function filterGroupDMs(isGroupDM) {
  return isGroupDM.isGroupDM();
}
function useSearchGDMNames(flag9, selectedUserIds, trimmed) {
  selectedUserIds = flag9;
  const importDefault = selectedUserIds;
  const dependencyMap = trimmed;
  const tmp = callback(React.useState([]), 2);
  const callback = tmp[1];
  const items = [flag9, selectedUserIds, trimmed];
  const effect = React.useEffect(() => {
    if (closure_0) {
      if ("" !== arg2) {
        closure_0 = arg2.toLocaleLowerCase();
        const _Object = Object;
        const values = Object.values(mutablePrivateChannels.getMutablePrivateChannels());
        const found = values.filter(closure_20);
        const mapped = found.map((arg0) => {
          const items = [arg0, callback(arg0, closure_1, closure_0)];
          return items;
        });
        const found1 = mapped.filter((arg0) => {
          let tmp;
          [, tmp] = arg0;
          return tmp > 0;
        });
        const obj = arg1(arg2[13]);
        callback(arg1(arg2[13]).sortBy(found1, (arg0) => {
          let tmp;
          [, tmp] = arg0;
          return -tmp;
        }).map((arg0) => {
          let tmp;
          [tmp] = arg0;
          return tmp;
        }));
        const sortByResult = arg1(arg2[13]).sortBy(found1, (arg0) => {
          let tmp;
          [, tmp] = arg0;
          return -tmp;
        });
      } else {
        callback(closure_13);
      }
    } else {
      callback(closure_13);
    }
  }, items);
  return tmp[0];
}
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = openMemberVerificationModal);
let closure_13 = [];
openCreateOrEditGuildEventModal = {};
openCreateOrEditGuildEventModal = { paddingTop: require("showActionSheet").space.PX_8 };
openCreateOrEditGuildEventModal.searchBarRowContainer = openCreateOrEditGuildEventModal;
openCreateOrEditGuildEventModal.noResults = { flex: 1, backgroundColor: require("showActionSheet").colors.MOBILE_ACTIONSHEET_BACKGROUND };
openCreateOrEditGuildEventModal = openCreateOrEditGuildEventModal.createStyles(openCreateOrEditGuildEventModal);
const result = _createForOfIteratorHelperLoose.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx");

export default function NewMessageUserList(selectedUserIds) {
  let autoFocusSearch;
  let defaultNoResultsFound;
  let forceSearchResults;
  let headerSize;
  let noResultActions;
  let onForceSearchResults;
  let onSearchFocus;
  let overrideResults;
  let renderHeader;
  let rowMode;
  let tagListInputRef;
  selectedUserIds = selectedUserIds.selectedUserIds;
  const arg1 = selectedUserIds;
  const disabledUserIds = selectedUserIds.disabledUserIds;
  const importDefault = disabledUserIds;
  const onSelectUser = selectedUserIds.onSelectUser;
  const dependencyMap = onSelectUser;
  const onQueryChanged = selectedUserIds.onQueryChanged;
  let callback = onQueryChanged;
  let actions = selectedUserIds.actions;
  if (actions === undefined) {
    actions = [];
  }
  ({ noResultActions, rowMode } = selectedUserIds);
  if (rowMode === undefined) {
    rowMode = UserRowModes.ACTIONS;
  }
  const React = rowMode;
  ({ autoFocusSearch, tagListInputRef } = selectedUserIds);
  if (autoFocusSearch === undefined) {
    autoFocusSearch = false;
  }
  let flag = selectedUserIds.withGuildMembers;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = selectedUserIds.withAffinitySuggestions;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = selectedUserIds.withFriends;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let flag4 = selectedUserIds.withGameFriends;
  if (flag4 === undefined) {
    flag4 = true;
  }
  let flag5 = selectedUserIds.withFriendRequests;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = selectedUserIds.withFriendRequestsIncoming;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let flag7 = selectedUserIds.withFriendRequestsOutgoing;
  if (flag7 === undefined) {
    flag7 = false;
  }
  let flag8 = selectedUserIds.withFriendSuggestions;
  if (flag8 === undefined) {
    flag8 = false;
  }
  let flag9 = selectedUserIds.withGDMNames;
  if (flag9 === undefined) {
    flag9 = false;
  }
  ({ defaultNoResultsFound, overrideResults } = selectedUserIds);
  let closure_5;
  let ReadStateTypes;
  let initialize;
  let useGuildUpcomingEvents;
  let UserRowModes;
  ({ forceSearchResults, onForceSearchResults, onSearchFocus } = selectedUserIds);
  const tmp2 = openCreateOrEditGuildEventModal();
  const tmp3 = callback(React.useState(""), 2);
  let num = 0;
  closure_5 = tmp3[1];
  const items = [onQueryChanged];
  callback = React.useCallback((arg0) => {
    callback(arg0);
    if (null != onQueryChanged) {
      onQueryChanged(arg0);
    }
  }, items);
  const trimmed = str.trim();
  let obj = { query: trimmed, withGuildMembers: flag, withAffinitySuggestions: flag2, withFriends: flag3, withGameFriends: flag4, withFriendSuggestions: flag8, withFriendRequests: flag5, withFriendRequestsIncoming: flag6, withFriendRequestsOutgoing: flag7, excludeCurrentUser: true };
  const tmp6 = importDefault(dependencyMap[14])(obj);
  ReadStateTypes = tmp6;
  const tmp7 = useSearchGDMNames(flag9, selectedUserIds, trimmed);
  initialize = tmp7;
  const items1 = [tmp7, tmp6];
  const memo = React.useMemo(() => {
    const mapped = tmp6.map((title) => {
      const items = title.items;
      return { title: title.title, items: items.map((data) => ({ type: "UserSearchItem", data })) };
    });
    if (0 === tmp7.length) {
      return mapped;
    } else {
      const obj = {};
      const intl = selectedUserIds(onSelectUser[15]).intl;
      obj.title = intl.string(selectedUserIds(onSelectUser[15]).t.qGlQrW);
      obj.items = tmp7.map((data) => ({ type: "GroupDMChannelRecord", data }));
      const findIndexResult = tmp6.findIndex((title) => {
        const intl = callback(closure_2[15]).intl;
        return title.title === intl.string(callback(closure_2[15]).t.y29JXs);
      });
      if (-1 === findIndexResult) {
        const items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(mapped, 0);
        items[arraySpreadResult] = obj;
        const sum = arraySpreadResult + 1;
        let items1 = items;
      } else {
        items1 = [];
        arraySpreadResult = HermesBuiltin.arraySpread(mapped.slice(0, findIndexResult), 0);
        items1[arraySpreadResult] = obj;
        const sum1 = arraySpreadResult + 1;
        HermesBuiltin.arraySpread(mapped.slice(findIndexResult), sum1);
      }
      return items1;
    }
  }, items1);
  useGuildUpcomingEvents = memo;
  const items2 = [memo];
  const memo1 = React.useMemo(() => memo.map((items) => items.items.length), items2);
  const items3 = [memo];
  const items4 = [memo, selectedUserIds, onSelectUser, disabledUserIds, rowMode];
  const callback1 = React.useCallback((arg0) => {
    const props = { title: memo[arg0].title };
    return { type: "section", props };
  }, items3);
  const callback2 = React.useCallback((arg0, arg1) => {
    let firstMatch;
    let user;
    const type = tmp.type;
    if ("UserSearchItem" === type) {
      const data = tmp.data;
      ({ user, firstMatch } = data);
      const hasItem = selectedUserIds.includes(user.id);
      let obj = { type: "user" };
      obj = { type: data.type, user };
      let tmp8;
      if (null != firstMatch) {
        if (user.username !== firstMatch) {
          tmp8 = firstMatch;
        }
      }
      obj.nickname = tmp8;
      obj.onPress = onSelectUser;
      let hasItem1;
      if (null != disabledUserIds) {
        hasItem1 = disabledUserIds.includes(user.id);
      }
      obj.disabled = null != hasItem1 && hasItem1;
      obj.selected = hasItem;
      if (null.isFriend(user.id)) {
        if (hasItem) {
          let TOGGLE = ref.TOGGLE;
        }
        obj.mode = TOGGLE;
        const obj1 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true, children: disabledUserIds(onSelectUser[11]).getUserTag(user) };
        obj.subLabel = callback2(selectedUserIds(onSelectUser[16]).Text, obj1);
        obj.arrow = !tmp7.isFriend(user.id);
        obj.start = tmp2;
        obj.end = tmp3;
        obj.props = obj;
        return obj;
      }
      TOGGLE = rowMode;
    } else if ("GroupDMChannelRecord" === type) {
      obj = { type: "gdm" };
      const obj2 = { channel: tmp.data, onPress: onSelectUser, arrow: true, start: tmp2, end: tmp3 };
      obj.props = obj2;
      return obj;
    } else {
      return tmp;
    }
  }, items4);
  const ref = React.useRef(null);
  UserRowModes = ref;
  let obj2 = arg1(dependencyMap[17]);
  obj = {};
  let tmp12;
  if (trimmed.length <= 0) {
    tmp12 = actions;
  }
  obj.actions = tmp12;
  let prop;
  if (trimmed.length <= 0) {
    if (flag3) {
      prop = tmp2.searchBarRowContainer;
    }
  }
  obj.style = prop;
  const userListActionsProps = obj2.useUserListActionsProps(obj);
  const items5 = [tmp3[0]];
  ({ headerSize, renderHeader } = userListActionsProps);
  const layoutEffect = React.useLayoutEffect(() => {
    const current = ref.current;
    if (null != current) {
      current.scrollToTop(false);
    }
  }, items5);
  const someResult = memo1.some((arg0) => arg0 > 0);
  if (null != overrideResults) {
    obj = {};
    const obj1 = {};
    if (autoFocusSearch) {
      autoFocusSearch = someResult;
    }
    obj1.autoFocus = autoFocusSearch;
    obj1.hasQuery = tmp5;
    obj1.onChangeText = callback;
    obj1.onFocus = onSearchFocus;
    obj1.onForceSearchResults = onForceSearchResults;
    obj1.onSelectUser = onSelectUser;
    obj1.selectedUserIds = selectedUserIds;
    obj1.forceSearchResults = forceSearchResults;
    obj1.tagListInputRef = tagListInputRef;
    const items6 = [closure_10(importDefault(dependencyMap[20]), obj1), overrideResults];
    obj.children = items6;
    return closure_12(closure_11, obj);
  } else if (someResult) {
    obj2 = { ref, sections: memo1, getItemProps: callback2, getSectionProps: callback1, listHeaderSize: headerSize, renderListHeader: renderHeader, insetStart: num };
    num = 12;
    obj2.insetEnd = 12;
    obj2.disableThemedGradient = true;
    let tmp36Result = tmp36(arg1(dependencyMap[18]).UsersFastList, obj2);
  } else {
    const obj3 = {};
    if (tmp17) {
      const items7 = [noResults, ];
      let prop1;
      if (flag3) {
        prop1 = tmp2.searchBarRowContainer;
      }
      items7[1] = prop1;
      obj3.style = items7;
      obj3.children = defaultNoResultsFound;
      let tmp24 = obj3;
    } else {
      obj3.style = noResults;
      const obj4 = {};
      const intl = arg1(dependencyMap[15]).intl;
      obj4.title = intl.string(arg1(dependencyMap[15]).t.sPAvXU);
      const intl2 = arg1(dependencyMap[15]).intl;
      obj4.subtitle = intl2.string(arg1(dependencyMap[15]).t.nQ05z2);
      const obj5 = {};
      if (null != noResultActions) {
        actions = noResultActions;
      }
      obj5.actions = actions;
      obj4.children = closure_10(arg1(dependencyMap[17]).UserFlashListActions, obj5);
      obj3.children = closure_10(importDefault(dependencyMap[19]), obj4);
      tmp24 = obj3;
      const tmp22 = importDefault(dependencyMap[19]);
    }
    tmp36Result = tmp36(closure_5, tmp24);
    const tmp18 = closure_5;
  }
};
export { matchGroupDM };
export { filterGroupDMs };
export { useSearchGDMNames };
