// Module ID: 10321
// Function ID: 10322
// Name: SearchableUserList
// Dependencies: [32, 19, 17, 1372, 10320, 21, 4836, 576, 10322, 1370, 10323, 4685, 1115, 10324, 10326, 10457, 5437, 9036, 2]
// Exports: default

// Module 10321 (SearchableUserList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import shared from "shared" /* 4685 */;
import UserRowConstants from "UserRowConstants" /* 10320 */;
import makeUserListPillDataDefault from "makeUserListPillData" /* 10323 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const UserRowModes = UserRowConstants.UserRowModes;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { searchBarContainer: obj2, searchBar: { height: "disabled", minHeight: false }, searchBarRowContainer: obj3, noResults: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj4 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx");

export default function SearchableUserList(selectedUserIds) {
  let UserFlashListActions;
  let defaultNoResultsFound;
  let disableGradient;
  let disableStickySections;
  let disableThemedGradient;
  let headerSize;
  let insetEnd;
  let intl;
  let obj6;
  let obj8;
  let onContentLengthChange;
  let onLayout;
  let onScroll;
  let prop;
  let prop2;
  let ref;
  let renderHeader;
  let tmp24Result;
  let tmp31;
  let tmp7Result2;
  selectedUserIds = selectedUserIds.selectedUserIds;
  const disabledUserIds = selectedUserIds.disabledUserIds;
  const onSelectUser = selectedUserIds.onSelectUser;
  const handleMessage = selectedUserIds.handleMessage;
  let actions = selectedUserIds.actions;
  if (actions === undefined) {
    actions = [];
  }
  let ACTIONS = selectedUserIds.rowMode;
  if (ACTIONS === undefined) {
    const tmp = ref;
    ACTIONS = ref.ACTIONS;
  }
  let flag = selectedUserIds.autoFocusSearch;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = selectedUserIds.focusOnAdd;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = selectedUserIds.withGuildMembers;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = selectedUserIds.withAffinitySuggestions;
  if (flag4 === undefined) {
    flag4 = true;
  }
  let flag5 = selectedUserIds.withAlphabeticalSections;
  if (flag5 === undefined) {
    flag5 = true;
  }
  let flag6 = selectedUserIds.withFriends;
  if (flag6 === undefined) {
    flag6 = true;
  }
  let flag7 = selectedUserIds.withGameFriends;
  if (flag7 === undefined) {
    flag7 = false;
  }
  let flag8 = selectedUserIds.withFriendRequests;
  if (flag8 === undefined) {
    flag8 = false;
  }
  let flag9 = selectedUserIds.withFriendRequestsIncoming;
  if (flag9 === undefined) {
    flag9 = false;
  }
  let flag10 = selectedUserIds.withFriendRequestsOutgoing;
  if (flag10 === undefined) {
    flag10 = false;
  }
  let flag11 = selectedUserIds.withFriendRequestsSpam;
  if (flag11 === undefined) {
    flag11 = false;
  }
  let flag12 = selectedUserIds.withFriendSuggestions;
  if (flag12 === undefined) {
    flag12 = false;
  }
  let flag13 = selectedUserIds.hideSearchOnDefaultNoResults;
  if (flag13 === undefined) {
    flag13 = false;
  }
  ({ defaultNoResultsFound, disableGradient, insetEnd, disableStickySections, disableThemedGradient } = selectedUserIds);
  if (insetEnd === undefined) {
    let tmp3 = onSelectUser;
    insetEnd = disabledUserIds(onSelectUser[7]).space.PX_12;
  }
  ({ onContentLengthChange, onLayout, onScroll } = selectedUserIds);
  const tmp4 = closure_11();
  let obj = ACTIONS;
  const tmp5 = handleMessage(ACTIONS.useState(""), 2);
  const tmp6 = tmp5[1];
  const tmp9 = disabledUserIds(onSelectUser[8])({ query: tmp5[0], withGuildMembers: flag3, withAffinitySuggestions: flag4, withAlphabeticalSections: flag5, withFriends: flag6, withGameFriends: flag7, withFriendSuggestions: flag12, withFriendRequests: flag8, withFriendRequestsIncoming: flag9, withFriendRequestsOutgoing: flag10, withFriendRequestsSpam: flag11 });
  let closure_5 = tmp9;
  let items = [selectedUserIds];
  const memo = ACTIONS.useMemo(() => {
    let items = selectedUserIds;
    if (selectedUserIds == null) {
      items = [];
    }
    const mapped = items.map(UserStore.getUser);
    const found = mapped.filter(GlobalUtils.isNotNullish);
    return found.map(makeUserListPillDataDefault);
  }, items);
  const items1 = [onSelectUser, memo];
  const items2 = [tmp9];
  const callback = ACTIONS.useCallback((arg0) => {
    const user = UserStore.getUser(tmp.id);
    if (null != user) {
      onSelectUser(user);
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl2.intl;
      const obj = { text: memo[arg0].text };
      announce(intl.formatToPlainString(intl2.t.srlxB8, obj));
    }
  }, items1);
  const memo1 = ACTIONS.useMemo(() => closure_5.map((items) => items.items.length), items2);
  const items3 = [tmp9];
  const callback1 = ACTIONS.useCallback((arg0) => {
    const element = { type: "section", props: obj };
    return element;
  }, items3);
  const tmp13 = tmp5[0].trim().length > 0;
  const items4 = [tmp9, disabledUserIds, onSelectUser, handleMessage, ACTIONS, selectedUserIds];
  const callback2 = ACTIONS.useCallback((arg0, arg1) => {
    let diff;
    let firstMatch;
    let flag;
    let flag2;
    let tmp3;
    let user;
    ({ user, firstMatch } = closure_5[arg0].items[arg1]);
    const props = { type: tmp.type, user, nickname: tmp3, onPress: onSelectUser, handleMessage, disabled: flag, selected: flag2, mode: ACTIONS, start: 0 === arg1, end: arg1 === diff };
    tmp3 = undefined;
    diff = closure_5[arg0].items.length - 1;
    if (user.username !== firstMatch) {
      tmp3 = firstMatch;
    }
    flag = undefined;
    if (disabledUserIds != null) {
      flag = obj2.includes(user.id);
    }
    if (flag == null) {
      flag = false;
    }
    flag2 = undefined;
    const obj3 = selectedUserIds;
    if (selectedUserIds != null) {
      flag2 = obj3.includes(user.id);
    }
    if (!flag2) {
      let hasItem;
      if (disabledUserIds != null) {
        hasItem = obj2.includes(user.id);
      }
      flag2 = hasItem;
    }
    if (flag2 == null) {
      flag2 = false;
    }
    return { type: "user", props };
  }, items4);
  ref = ACTIONS.useRef(null);
  let tmp18;
  const useUserListActionsProps = selectedUserIds(onSelectUser[13]).useUserListActionsProps;
  selectedUserIds(onSelectUser[13]);
  if (!tmp13) {
    tmp18 = actions;
  }
  const obj2 = { actions: tmp18, style: prop };
  prop = undefined;
  if (!tmp13) {
    if (flag6) {
      prop = tmp4.searchBarRowContainer;
    }
  }
  const userListActionsProps = useUserListActionsProps(obj2);
  const items5 = [tmp5[0]];
  ({ renderHeader, headerSize } = userListActionsProps);
  const layoutEffect = obj.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items5);
  const someResult = memo1.some((item) => item > 0);
  const tmp23 = 0 === tmp5[0].length && null != defaultNoResultsFound;
  if (flag13) {
    flag13 = !someResult;
  }
  if (flag13) {
    flag13 = !tmp13;
  }
  if (someResult) {
    let obj3 = { ref, sections: memo1, getItemProps: callback2, getSectionProps: callback1, renderListHeader: renderHeader, listHeaderSize: headerSize, insetEnd, onContentLengthChange, onLayout, onScroll, disableStickySections, disableThemedGradient };
    tmp24Result = tmp24(tmp16(tmp8[14]).UsersFastList, obj3);
    tmp31 = tmp24;
  } else {
    let tmp28;
    const obj4 = { style: null, children: null };
    const tmp25 = closure_5;
    if (tmp23) {
      const items6 = [tmp4.noResults, ];
      let prop1;
      if (flag6) {
        if (!flag13) {
          prop1 = tmp4.searchBarRowContainer;
        }
      }
      items6[1] = prop1;
      obj4.style = items6;
      obj4.children = defaultNoResultsFound;
      tmp28 = obj4;
    } else {
      obj4.style = tmp4.noResults;
      const obj5 = { title: intl.string(selectedUserIds(onSelectUser[12]).t.V6nAfF), children: closure_8(UserFlashListActions, obj6) };
      const tmp7Result = disabledUserIds(onSelectUser[15]);
      intl = tmp16(tmp8[12]).intl;
      obj6 = { actions, style: prop2 };
      prop2 = undefined;
      UserFlashListActions = tmp16(tmp8[13]).UserFlashListActions;
      if (flag6) {
        prop2 = tmp4.searchBarRowContainer;
      }
      obj4.children = closure_8(tmp7Result, obj5);
      tmp28 = obj4;
    }
    tmp24Result = tmp24(tmp25, tmp28);
    tmp31 = tmp24;
  }
  let tmp31Result = !disableGradient;
  const tmp32 = closure_10;
  const tmp33 = closure_9;
  if (!disableGradient) {
    tmp31Result = tmp31(tmp7(tmp8[16]), { absolute: true });
  }
  const children = [tmp31Result, , ];
  let tmp31Result2 = null;
  if (flag6) {
    tmp31Result2 = null;
    if (!flag13) {
      const obj7 = { style: tmp4.searchBarContainer, children: tmp31(tmp7Result2, obj8) };
      obj8 = { onChangeText: tmp6, onRemove: callback, tags: memo, style: tmp4.searchBar, autoFocus: flag, focusOnAdd: flag2 };
      const tmp36 = closure_5;
      tmp7Result2 = disabledUserIds(onSelectUser[17]);
      if (flag) {
        flag = someResult;
      }
      tmp31Result2 = tmp31(tmp36, obj7);
    }
  }
  children[1] = tmp31Result2;
  children[2] = tmp24Result;
  return tmp32(tmp33, { children });
};
