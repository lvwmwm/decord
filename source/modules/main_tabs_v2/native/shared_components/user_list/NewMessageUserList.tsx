// Module ID: 11439
// Function ID: 88990
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 1348, 3767, 1849, 8857, 33, 4130, 689, 5045, 3969, 4320, 22, 8859, 1212, 4126, 8862, 8864, 9924, 11440, 2]
// Exports: default

// Module 11439 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { UserRowModes } from "UserRowModes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
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
function matchGroupDMRecipients(trimmed, recipients) {
  const tmp = _createForOfIteratorHelperLoose(recipients.recipients);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    while (true) {
      let tmp2 = user;
      user = user.getUser(iter2.value);
      if (null != user) {
        let username = user.username;
        let tmp22 = importDefault;
        let tmp23 = dependencyMap;
        let toLocaleLowerCaseResult = username.toLocaleLowerCase();
        if (importDefault(5045)(trimmed, toLocaleLowerCaseResult)) {
          let num3 = 1;
          return 1;
        } else {
          let tmp4 = importDefault;
          let tmp5 = dependencyMap;
          let obj = importDefault(3969);
          let globalName = obj.getGlobalName(user);
          let toLocaleLowerCaseResult1;
          if (null != globalName) {
            toLocaleLowerCaseResult1 = globalName.toLocaleLowerCase();
          }
          if (null != toLocaleLowerCaseResult1) {
            let tmp7 = importDefault;
            let tmp8 = dependencyMap;
            if (importDefault(5045)(trimmed, toLocaleLowerCaseResult1)) {
              break;
            }
          }
          let tmp9 = nickname;
          nickname = nickname.getNickname(user.id);
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
            if (importDefault(5045)(trimmed, toLocaleLowerCaseResult2)) {
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
    const channelName = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(recipients, closure_8, closure_7);
    const toLocaleLowerCaseResult = channelName.toLocaleLowerCase();
    let num2 = 3;
    if (!toLocaleLowerCaseResult.startsWith(trimmed)) {
      let num4 = 2;
      if (!importDefault(5045)(trimmed, toLocaleLowerCaseResult)) {
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
  let closure_0 = flag9;
  let closure_1 = selectedUserIds;
  let closure_2 = trimmed;
  const tmp = callback(React.useState([]), 2);
  callback = tmp[1];
  let items = [flag9, selectedUserIds, trimmed];
  const effect = React.useEffect(() => {
    if (closure_0) {
      if ("" !== trimmed) {
        closure_0 = trimmed.toLocaleLowerCase();
        const _Object = Object;
        const values = Object.values(outer1_6.getMutablePrivateChannels());
        const found = values.filter(outer1_20);
        const mapped = found.map((arg0) => {
          const items = [arg0, outer2_19(arg0, outer1_1, closure_0)];
          return items;
        });
        const found1 = mapped.filter((arg0) => {
          let tmp;
          [, tmp] = arg0;
          return tmp > 0;
        });
        const obj = selectedUserIds(trimmed[13]);
        callback(selectedUserIds(trimmed[13]).sortBy(found1, (arg0) => {
          let tmp;
          [, tmp] = arg0;
          return -tmp;
        }).map((arg0) => {
          let tmp;
          [tmp] = arg0;
          return tmp;
        }));
        const sortByResult = selectedUserIds(trimmed[13]).sortBy(found1, (arg0) => {
          let tmp;
          [, tmp] = arg0;
          return -tmp;
        });
      } else {
        callback(outer1_13);
      }
    } else {
      callback(outer1_13);
    }
  }, items);
  return tmp[0];
}
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = [];
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.searchBarRowContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.noResults = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx");

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
  const disabledUserIds = selectedUserIds.disabledUserIds;
  const onSelectUser = selectedUserIds.onSelectUser;
  const onQueryChanged = selectedUserIds.onQueryChanged;
  let actions = selectedUserIds.actions;
  if (actions === undefined) {
    actions = [];
  }
  ({ noResultActions, rowMode } = selectedUserIds);
  if (rowMode === undefined) {
    rowMode = ref.ACTIONS;
  }
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
  let c6;
  let c7;
  let memo;
  ref = undefined;
  ({ forceSearchResults, onForceSearchResults, onSearchFocus } = selectedUserIds);
  const tmp2 = _createForOfIteratorHelperLoose();
  let tmp3 = onQueryChanged(rowMode.useState(""), 2);
  let num = 0;
  closure_5 = tmp3[1];
  let items = [onQueryChanged];
  const callback = rowMode.useCallback((arg0) => {
    callback(arg0);
    if (null != onQueryChanged) {
      onQueryChanged(arg0);
    }
  }, items);
  const trimmed = str.trim();
  let obj = { query: trimmed, withGuildMembers: flag, withAffinitySuggestions: flag2, withFriends: flag3, withGameFriends: flag4, withFriendSuggestions: flag8, withFriendRequests: flag5, withFriendRequestsIncoming: flag6, withFriendRequestsOutgoing: flag7, excludeCurrentUser: true };
  const tmp6 = disabledUserIds(onSelectUser[14])(obj);
  c6 = tmp6;
  const tmp7 = useSearchGDMNames(flag9, selectedUserIds, trimmed);
  c7 = tmp7;
  let items1 = [tmp7, tmp6];
  memo = rowMode.useMemo(() => {
    const mapped = _undefined.map((title) => {
      const items = title.items;
      return { title: title.title, items: items.map((data) => ({ type: "UserSearchItem", data })) };
    });
    if (0 === _undefined2.length) {
      return mapped;
    } else {
      const obj = {};
      let intl = selectedUserIds(onSelectUser[15]).intl;
      obj.title = intl.string(selectedUserIds(onSelectUser[15]).t.qGlQrW);
      obj.items = _undefined2.map((data) => ({ type: "GroupDMChannelRecord", data }));
      const findIndexResult = _undefined.findIndex((title) => {
        const intl = selectedUserIds(onSelectUser[15]).intl;
        return title.title === intl.string(selectedUserIds(onSelectUser[15]).t.y29JXs);
      });
      if (-1 === findIndexResult) {
        let items = [];
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
  const items2 = [memo];
  const memo1 = rowMode.useMemo(() => memo.map((items) => items.items.length), items2);
  const items3 = [memo];
  const items4 = [memo, selectedUserIds, onSelectUser, disabledUserIds, rowMode];
  const callback1 = rowMode.useCallback((arg0) => {
    const props = { title: memo[arg0].title };
    return { type: "section", props };
  }, items3);
  const callback2 = rowMode.useCallback((arg0, arg1) => {
    let firstMatch;
    let user;
    const tmp3 = arg1 === memo[arg0].items.length - 1;
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
      if (_undefined2.isFriend(user.id)) {
        if (hasItem) {
          let TOGGLE = ref.TOGGLE;
        }
        obj.mode = TOGGLE;
        const obj1 = { variant: "text-xs/medium", color: "text-muted", children: disabledUserIds(onSelectUser[11]).getUserTag(user) };
        obj.subLabel = outer1_10(selectedUserIds(onSelectUser[16]).Text, obj1);
        obj.arrow = !_undefined2.isFriend(user.id);
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
  ref = rowMode.useRef(null);
  let obj2 = selectedUserIds(onSelectUser[17]);
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
  const layoutEffect = rowMode.useLayoutEffect(() => {
    const current = ref.current;
    if (null != current) {
      current.scrollToTop(false);
    }
  }, items5);
  const someResult = memo1.some((arg0) => arg0 > 0);
  if (null != overrideResults) {
    obj = {};
    let obj1 = {};
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
    const items6 = [closure_10(disabledUserIds(onSelectUser[20]), obj1), overrideResults];
    obj.children = items6;
    return closure_12(closure_11, obj);
  } else if (someResult) {
    obj2 = { ref, sections: memo1, getItemProps: callback2, getSectionProps: callback1, listHeaderSize: headerSize, renderListHeader: renderHeader, insetStart: num };
    num = 12;
    obj2.insetEnd = 12;
    obj2.disableThemedGradient = true;
    let tmp36Result = tmp36(selectedUserIds(onSelectUser[18]).UsersFastList, obj2);
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
      let intl = selectedUserIds(onSelectUser[15]).intl;
      obj4.title = intl.string(selectedUserIds(onSelectUser[15]).t.sPAvXU);
      const intl2 = selectedUserIds(onSelectUser[15]).intl;
      obj4.subtitle = intl2.string(selectedUserIds(onSelectUser[15]).t.nQ05z2);
      const obj5 = {};
      if (null != noResultActions) {
        actions = noResultActions;
      }
      obj5.actions = actions;
      obj4.children = closure_10(selectedUserIds(onSelectUser[17]).UserFlashListActions, obj5);
      obj3.children = closure_10(disabledUserIds(onSelectUser[19]), obj4);
      tmp24 = obj3;
      const tmp22 = disabledUserIds(onSelectUser[19]);
    }
    tmp36Result = tmp36(closure_5, tmp24);
    const tmp18 = closure_5;
  }
};
export { matchGroupDM };
export { filterGroupDMs };
export { useSearchGDMNames };
