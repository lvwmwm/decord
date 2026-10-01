// Module ID: 11853
// Function ID: 11854
// Name: NewMessageUserList
// Dependencies: [32, 19, 17, 2045, 4479, 1372, 10320, 21, 4836, 576, 5829, 4678, 4989, 12, 10322, 1115, 4832, 10324, 10326, 10457, 11854, 2]
// Exports: default, useSearchGDMNames

// Module 11853 (NewMessageUserList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelName from "useChannelName" /* 4989 */;
import fuzzysearchDefault from "fuzzysearch" /* 5829 */;
import UserRowConstants from "UserRowConstants" /* 10320 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let title;

let c10;
let closure_12;
let obj2;
let obj3;
let unpackModuleId;
function matchGroupDMRecipients(trimmed1, recipients) {
  const obj = recipients.recipients[Symbol.iterator]();
  while (obj !== undefined) {
    let user = UserStore.getUser(tmp);
    let tmp4 = user;
    if (null != user) {
      let username = tmp4.username;
      let tmp19 = importDefault;
      let toLocaleLowerCaseResult = username.toLocaleLowerCase();
      if (fuzzysearchDefault(trimmed1, toLocaleLowerCaseResult)) {
        obj.return();
        return 1;
      } else {
        let tmp19Result = tmp19(4678);
        let globalName = tmp19Result.getGlobalName(tmp4);
        let toLocaleLowerCaseResult1;
        if (globalName != null) {
          toLocaleLowerCaseResult1 = globalName.toLocaleLowerCase();
        }
        if (null != toLocaleLowerCaseResult1) {
          if (tmp19(5829)(trimmed1, tmp7)) {
            obj.return();
            return 1;
          }
        }
        let nickname = RelationshipStore.getNickname(tmp4.id);
        let toLocaleLowerCaseResult2;
        if (nickname != null) {
          toLocaleLowerCaseResult2 = nickname.toLocaleLowerCase();
        }
        if (null != toLocaleLowerCaseResult2) {
          if (tmp19(5829)(trimmed1, tmp12)) {
            obj.return();
            return 1;
          }
        }
      }
    }
    continue;
  }
  return 0;
}
function matchGroupDM(id, trimmed1) {
  if ("" === trimmed1) {
    return 0;
  } else {
    const obj = useChannelName;
    const channelName = obj.computeChannelName(id, UserStore, RelationshipStore);
    const toLocaleLowerCaseResult = channelName.toLocaleLowerCase();
    let num = 3;
    if (!toLocaleLowerCaseResult.startsWith(trimmed1)) {
      let num2 = 2;
      if (!fuzzysearchDefault(trimmed1, toLocaleLowerCaseResult)) {
        num2 = matchGroupDMRecipients(trimmed1, id);
      }
      num = num2;
    }
    return num;
  }
}
function isMatchNewMessageUserListGroupDM(recipients, arg1, trimmed1) {
  if ("" === trimmed1) {
    return 0;
  } else if (0 === arg1.length) {
    return matchGroupDM(recipients, trimmed1);
  } else {
    const obj = arg1[Symbol.iterator]();
    while (obj !== undefined) {
      recipients = recipients.recipients;
      if (recipients.includes(tmp5)) {
        continue;
      } else {
        obj.return();
        return 0;
      }
    }
    return matchGroupDMRecipients(trimmed1, recipients);
  }
}
function filterGroupDMs(isGroupDM) {
  return isGroupDM.isGroupDM();
}
const View = react_native.View;
const UserRowModes = UserRowConstants.UserRowModes;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = [];
let createStyles = createStyles_mod;
let obj = { searchBarRowContainer: obj2, noResults: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_14 = createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx");

export default function NewMessageUserList(selectedUserIds) {
  let UserFlashListActions;
  let _undefined;
  let afterSearchContent;
  let autoFocusSearch;
  let c3;
  let c5;
  let defaultNoResultsFound;
  let forceSearchResults;
  let headerSize;
  let intl;
  let intl2;
  let items8;
  let length;
  let noResultActions;
  let obj6;
  let onForceSearchResults;
  let onSearchFocus;
  let overrideResults;
  let prop;
  let ref;
  let renderHeader;
  let rowMode;
  let str;
  let tagListInputRef;
  let tmp10;
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
    let tmp = ref;
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
  c5 = undefined;
  ({ afterSearchContent, forceSearchResults, onForceSearchResults, onSearchFocus } = selectedUserIds);
  const tmp2 = closure_14();
  let obj = rowMode;
  let tmp3 = onQueryChanged(rowMode.useState(""), 2);
  [str, c5] = tmp3;
  let items = [onQueryChanged];
  const callback = rowMode.useCallback((arg0) => {
    _undefined(arg0);
    if (onQueryChanged != null) {
      onQueryChanged(arg0);
    }
  }, items);
  const trimmed = str.trim();
  let tmp8 = disabledUserIds(onSelectUser[14])({ query: trimmed, withGuildMembers: flag, withAffinitySuggestions: flag2, withFriends: flag3, withGameFriends: flag4, withFriendSuggestions: flag8, withFriendRequests: flag5, withFriendRequestsIncoming: flag6, withFriendRequestsOutgoing: flag7, excludeCurrentUser: true });
  let closure_6 = tmp8;
  c3 = undefined;
  [tmp10, c3] = onQueryChanged(rowMode.useState([]), 2);
  let items1 = [flag9, selectedUserIds, trimmed];
  const tmp9 = onQueryChanged(rowMode.useState([]), 2);
  const effect = rowMode.useEffect(() => {
    const tmp = closure_0;
    if (tmp) {
      const obj = trimmed;
      if ("" !== trimmed) {
        closure_0 = obj.toLocaleLowerCase();
        const _Object = Object;
        const values = Object.values(mutablePrivateChannels.getMutablePrivateChannels());
        const found = values.filter(closure_1_18);
        const mapped = found.map((item) => {
          const items = [item, isMatchNewMessageUserListGroupDM(item, selectedUserIds, closure_0)];
          return items;
        });
        const found1 = mapped.filter((item) => {
          let tmp;
          [, tmp] = item;
          return tmp > 0;
        });
        const obj2 = selectedUserIds(trimmed[13]);
        const sortByResult = obj2.sortBy(found1, (arg0) => {
          let tmp;
          [, tmp] = arg0;
          return -tmp;
        });
        _undefined(sortByResult.map((item) => {
          let tmp;
          [tmp] = item;
          return tmp;
        }));
      } else {
        _undefined(closure_1_13);
      }
    } else {
      _undefined(closure_1_13);
    }
  }, items1);
  let c7 = tmp10;
  const items2 = [tmp10, tmp8];
  const memo = rowMode.useMemo(() => {
    let intl;
    let obj = closure_6;
    const mapped = closure_6.map((title) => {
      let items;
      const obj = { title: title.title, items: items.map((data) => ({ type: "UserSearchItem", data })) };
      items = title.items;
      return obj;
    });
    const arr2 = length;
    if (0 === length.length) {
      return mapped;
    } else {
      let items1;
      const obj2 = { title: intl.string(intl3.t.qGlQrW), items: arr2.map((data) => ({ type: "GroupDMChannelRecord", data })) };
      intl = intl3.intl;
      const findIndexResult = obj.findIndex((title) => {
        title = title.title;
        const intl = selectedUserIds(onSelectUser[15]).intl;
        return title === intl.string(selectedUserIds(onSelectUser[15]).t.y29JXs);
      });
      if (-1 === findIndexResult) {
        let items = [];
        items[HermesBuiltin.arraySpread(items, mapped, 0)] = obj2;
        items1 = items;
      } else {
        items1 = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items1, mapped.slice(0, findIndexResult), 0);
        items1[arraySpreadResult] = obj2;
        HermesBuiltin.arraySpread(items1, mapped.slice(findIndexResult), arraySpreadResult + 1);
      }
      return items1;
    }
  }, items2);
  const items3 = [memo];
  const memo1 = rowMode.useMemo(() => memo.map((items) => items.items.length), items3);
  const items4 = [memo];
  const items5 = [memo, selectedUserIds, onSelectUser, disabledUserIds, rowMode];
  const callback1 = rowMode.useCallback((arg0) => {
    const element = { type: "section", props: obj };
    return element;
  }, items4);
  const callback2 = rowMode.useCallback((arg0, arg1) => {
    let firstMatch;
    let flag;
    let obj8;
    let tmp8;
    let user;
    const type = tmp.type;
    const tmp3 = arg1 === memo[arg0].items.length - 1;
    if ("UserSearchItem" === type) {
      const data = tmp.data;
      ({ user, firstMatch } = data);
      const type2 = data.type;
      const hasItem = selectedUserIds.includes(user.id);
      const obj = { type: type2, user, nickname: tmp8, onPress: onSelectUser, disabled: flag, selected: hasItem, mode: null, subLabel: null, arrow: null, start: null, end: null };
      tmp8 = undefined;
      if (null != firstMatch) {
        if (user.username !== firstMatch) {
          tmp8 = firstMatch;
        }
      }
      flag = undefined;
      const obj4 = disabledUserIds;
      if (disabledUserIds != null) {
        flag = obj4.includes(user.id);
      }
      if (flag == null) {
        flag = false;
      }
      const obj5 = RelationshipStore;
      if (RelationshipStore.isFriend(user.id)) {
        let TOGGLE;
        if (hasItem) {
          TOGGLE = UserRowModes.TOGGLE;
        }
        const element = { type: "user", props: obj };
        obj.mode = TOGGLE;
        const obj2 = { variant: "text-xs/medium", color: "text-muted", children: obj8.getUserTag(user) };
        const Text = Text_Text.Text;
        obj8 = UserUtilsDefault;
        obj.subLabel = authStore(Text, obj2);
        obj.arrow = !obj5.isFriend(user.id);
        obj.start = 0 === arg1;
        obj.end = tmp3;
        return element;
      }
      TOGGLE = rowMode;
    } else if ("GroupDMChannelRecord" === type) {
      const element1 = { type: "gdm", props: obj3 };
      return element1;
    } else {
      return memo[arg0].items[arg1];
    }
  }, items5);
  ref = rowMode.useRef(null);
  let tmp18;
  const useUserListActionsProps = selectedUserIds(onSelectUser[17]).useUserListActionsProps;
  selectedUserIds(onSelectUser[17]);
  if (trimmed.length <= 0) {
    tmp18 = actions;
  }
  let obj2 = { actions: tmp18, style: prop };
  prop = undefined;
  if (trimmed.length <= 0) {
    if (flag3) {
      prop = tmp2.searchBarRowContainer;
    }
  }
  const userListActionsProps = useUserListActionsProps(obj2);
  const items6 = [str];
  ({ headerSize, renderHeader } = userListActionsProps);
  const layoutEffect = obj.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items6);
  const someResult = memo1.some((item) => item > 0);
  const tmp23 = 0 === str.length && null != defaultNoResultsFound;
  if (null == overrideResults) {
    if (someResult) {
      const obj3 = { ref, sections: memo1, getItemProps: callback2, getSectionProps: callback1, listHeaderSize: headerSize, renderListHeader: renderHeader, insetStart: 0, insetEnd: 12, disableThemedGradient: true };
      tmp33(tmp16(onSelectUser[18]).UsersFastList, obj3);
    } else {
      let tmp26;
      let obj4 = { style: null, children: null };
      const tmp24 = c5;
      if (tmp23) {
        const items7 = [tmp2.noResults, ];
        let prop1;
        if (flag3) {
          prop1 = tmp2.searchBarRowContainer;
        }
        items7[1] = prop1;
        obj4.style = items7;
        obj4.children = defaultNoResultsFound;
        tmp26 = obj4;
      } else {
        obj4.style = tmp2.noResults;
        let obj5 = { title: intl.string(selectedUserIds(tmp7[15]).t.sPAvXU), subtitle: intl2.string(selectedUserIds(tmp7[15]).t.nQ05z2), children: closure_10(UserFlashListActions, obj6) };
        const tmp6Result = disabledUserIds(onSelectUser[19]);
        intl = tmp16(tmp7[15]).intl;
        intl2 = tmp16(tmp7[15]).intl;
        UserFlashListActions = tmp16(tmp7[17]).UserFlashListActions;
        obj6 = { actions: noResultActions };
        obj4.children = closure_10(tmp6Result, obj5);
        tmp26 = obj4;
      }
      tmp33(tmp24, tmp26);
    }
  }
  const tmp29 = closure_12;
  const tmp30 = closure_11;
  const tmp31 = closure_10;
  const tmp6Result2 = disabledUserIds(onSelectUser[20]);
  if (autoFocusSearch) {
    autoFocusSearch = someResult;
  }
  const obj7 = { children: items8 };
  items8 = [tmp31(tmp6Result2, { autoFocus: autoFocusSearch, hasQuery: tmp5, onChangeText: callback, onFocus: onSearchFocus, onForceSearchResults, onSelectUser, selectedUserIds, forceSearchResults, tagListInputRef }), afterSearchContent, overrideResults];
  return tmp29(tmp30, obj7);
};
export { matchGroupDM };
export { filterGroupDMs };
export const useSearchGDMNames = function useSearchGDMNames(arg0, arg1, arg2) {
  let closure_3;
  let first;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  [first, _slicedToArray] = react.useState([]);
  const items = [arg0, arg1, arg2];
  const effect = react.useEffect(() => {
    const tmp = closure_0;
    if (tmp) {
      const obj = trimmed;
      if ("" !== trimmed) {
        closure_0 = obj.toLocaleLowerCase();
        const _Object = Object;
        const values = Object.values(mutablePrivateChannels.getMutablePrivateChannels());
        const found = values.filter(closure_1_18);
        const mapped = found.map((item) => {
          const items = [item, isMatchNewMessageUserListGroupDM(item, selectedUserIds, closure_0)];
          return items;
        });
        const found1 = mapped.filter((item) => {
          let tmp;
          [, tmp] = item;
          return tmp > 0;
        });
        const obj2 = selectedUserIds(trimmed[13]);
        const sortByResult = obj2.sortBy(found1, (arg0) => {
          let tmp;
          [, tmp] = arg0;
          return -tmp;
        });
        _undefined(sortByResult.map((item) => {
          let tmp;
          [tmp] = item;
          return tmp;
        }));
      } else {
        _undefined(closure_1_13);
      }
    } else {
      _undefined(closure_1_13);
    }
  }, items);
  return first;
};
