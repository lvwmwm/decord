// Module ID: 8819
// Function ID: 69493
// Name: SearchableUserList
// Dependencies: [57, 31, 27, 1849, 8818, 33, 4130, 689, 8820, 1327, 8822, 3976, 1212, 8823, 8825, 9892, 4662, 8425, 2]
// Exports: default

// Module 8819 (SearchableUserList)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserRowModes } from "UserRowModes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.searchBarContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.searchBar = { height: undefined, minHeight: 40 };
_createForOfIteratorHelperLoose.searchBarRowContainer = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.noResults = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx");

export default function SearchableUserList(selectedUserIds) {
  let disableGradient;
  let disableStickySections;
  let disableThemedGradient;
  let headerSize;
  let renderHeader;
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
    ACTIONS = ref.ACTIONS;
  }
  let flag = selectedUserIds.autoFocusSearch;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = selectedUserIds.withGuildMembers;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = selectedUserIds.withAffinitySuggestions;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let flag4 = selectedUserIds.withAlphabeticalSections;
  if (flag4 === undefined) {
    flag4 = true;
  }
  let flag5 = selectedUserIds.withFriends;
  if (flag5 === undefined) {
    flag5 = true;
  }
  let flag6 = selectedUserIds.withGameFriends;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let flag7 = selectedUserIds.withFriendRequests;
  if (flag7 === undefined) {
    flag7 = false;
  }
  let flag8 = selectedUserIds.withFriendRequestsIncoming;
  if (flag8 === undefined) {
    flag8 = false;
  }
  let flag9 = selectedUserIds.withFriendRequestsOutgoing;
  if (flag9 === undefined) {
    flag9 = false;
  }
  let flag10 = selectedUserIds.withFriendRequestsSpam;
  if (flag10 === undefined) {
    flag10 = false;
  }
  let flag11 = selectedUserIds.withFriendSuggestions;
  if (flag11 === undefined) {
    flag11 = false;
  }
  let flag12 = selectedUserIds.hideSearchOnDefaultNoResults;
  if (flag12 === undefined) {
    flag12 = false;
  }
  let c5;
  let memo;
  ref = undefined;
  ({ disableGradient, disableStickySections, disableThemedGradient } = selectedUserIds);
  const tmp2 = _createForOfIteratorHelperLoose();
  let tmp3 = handleMessage(ACTIONS.useState(""), 2);
  let obj = { query: str, withGuildMembers: flag2, withAffinitySuggestions: flag3, withAlphabeticalSections: flag4, withFriends: flag5, withGameFriends: flag6, withFriendSuggestions: flag11, withFriendRequests: flag7, withFriendRequestsIncoming: flag8, withFriendRequestsOutgoing: flag9, withFriendRequestsSpam: flag10 };
  const tmp4 = disabledUserIds(onSelectUser[8])(obj);
  c5 = tmp4;
  const items = [selectedUserIds];
  memo = ACTIONS.useMemo(() => {
    const mapped = null != selectedUserIds ? selectedUserIds : [].map(memo.getUser);
    const found = mapped.filter(selectedUserIds(onSelectUser[9]).isNotNullish);
    return found.map(disabledUserIds(onSelectUser[10]));
  }, items);
  const items1 = [onSelectUser, memo];
  const items2 = [tmp4];
  const callback = ACTIONS.useCallback((arg0) => {
    const user = memo.getUser(tmp.id);
    if (null != user) {
      onSelectUser(user);
      const AccessibilityAnnouncer = selectedUserIds(onSelectUser[11]).AccessibilityAnnouncer;
      const intl = selectedUserIds(onSelectUser[12]).intl;
      const obj = { text: tmp.text };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(selectedUserIds(onSelectUser[12]).t.srlxB8, obj));
    }
  }, items1);
  const memo1 = ACTIONS.useMemo(() => _undefined.map((items) => items.items.length), items2);
  const items3 = [tmp4];
  const callback1 = ACTIONS.useCallback((arg0) => {
    const props = { title: _undefined[arg0].title };
    return { type: "section", props };
  }, items3);
  const tmp8 = tmp3[0].trim().length > 0;
  const items4 = [tmp4, disabledUserIds, onSelectUser, handleMessage, ACTIONS, selectedUserIds];
  const callback2 = ACTIONS.useCallback((arg0, arg1) => {
    let firstMatch;
    let user;
    ({ user, firstMatch } = _undefined[arg0].items[arg1]);
    let obj = { type: "user" };
    obj = { type: tmp.type, user };
    let tmp3;
    const diff = _undefined[arg0].items.length - 1;
    if (user.username !== firstMatch) {
      tmp3 = firstMatch;
    }
    obj.nickname = tmp3;
    obj.onPress = onSelectUser;
    obj.handleMessage = handleMessage;
    let hasItem;
    if (null != disabledUserIds) {
      hasItem = disabledUserIds.includes(user.id);
    }
    obj.disabled = null != hasItem && hasItem;
    let hasItem1;
    if (null != selectedUserIds) {
      hasItem1 = selectedUserIds.includes(user.id);
    }
    if (!hasItem1) {
      let hasItem2;
      if (null != disabledUserIds) {
        hasItem2 = disabledUserIds.includes(user.id);
      }
      hasItem1 = hasItem2;
    }
    obj.selected = null != hasItem1 && hasItem1;
    obj.mode = ACTIONS;
    obj.start = 0 === arg1;
    obj.end = arg1 === diff;
    obj.props = obj;
    return obj;
  }, items4);
  ref = ACTIONS.useRef(null);
  let obj2 = selectedUserIds(onSelectUser[13]);
  obj = {};
  let tmp11;
  if (!tmp8) {
    tmp11 = actions;
  }
  obj.actions = tmp11;
  let prop;
  if (!tmp8) {
    if (flag5) {
      prop = tmp2.searchBarRowContainer;
    }
  }
  obj.style = prop;
  const userListActionsProps = obj2.useUserListActionsProps(obj);
  const items5 = [tmp3[0]];
  ({ renderHeader, headerSize } = userListActionsProps);
  const layoutEffect = ACTIONS.useLayoutEffect(() => {
    const current = ref.current;
    if (null != current) {
      current.scrollToTop(false);
    }
  }, items5);
  const someResult = memo1.some((arg0) => arg0 > 0);
  if (flag12) {
    flag12 = !someResult;
  }
  if (flag12) {
    flag12 = !tmp8;
  }
  if (someResult) {
    obj = { ref, sections: memo1, getItemProps: callback2, getSectionProps: callback1, renderListHeader: renderHeader, listHeaderSize: headerSize, insetEnd: 12, disableStickySections, disableThemedGradient };
    let tmp17Result = tmp17(selectedUserIds(onSelectUser[14]).UsersFastList, obj);
  } else {
    const obj1 = {};
    if (tmp16) {
      const items6 = [noResults, ];
      let prop1;
      if (flag5) {
        if (!flag12) {
          prop1 = tmp2.searchBarRowContainer;
        }
      }
      items6[1] = prop1;
      obj1.style = items6;
      obj1.children = defaultNoResultsFound;
      let tmp25 = obj1;
    } else {
      obj1.style = noResults;
      obj2 = {};
      let intl = selectedUserIds(onSelectUser[12]).intl;
      obj2.title = intl.string(selectedUserIds(onSelectUser[12]).t.V6nAfF);
      const obj3 = { actions };
      let prop2;
      if (flag5) {
        prop2 = tmp2.searchBarRowContainer;
      }
      obj3.style = prop2;
      obj2.children = callback(selectedUserIds(onSelectUser[13]).UserFlashListActions, obj3);
      obj1.children = callback(disabledUserIds(onSelectUser[15]), obj2);
      tmp25 = obj1;
      const tmp22 = disabledUserIds(onSelectUser[15]);
    }
    tmp17Result = tmp17(c5, tmp25);
    const tmp18 = c5;
  }
  const obj4 = {};
  let tmp32 = !disableGradient;
  if (tmp32) {
    const obj5 = { absolute: true };
    tmp32 = callback(disabledUserIds(onSelectUser[16]), obj5);
  }
  const items7 = [tmp32, , ];
  let tmp37Result = null;
  if (flag5) {
    tmp37Result = null;
    if (!flag12) {
      const obj6 = { style: tmp2.searchBarContainer };
      const obj7 = { onChangeText: tmp3[1], onRemove: callback, tags: memo, style: tmp2.searchBar };
      if (flag) {
        flag = someResult;
      }
      obj7.autoFocus = flag;
      obj6.children = callback(disabledUserIds(onSelectUser[17]), obj7);
      tmp37Result = tmp37(c5, obj6);
      const tmp38 = c5;
      const tmp41 = disabledUserIds(onSelectUser[17]);
    }
  }
  items7[1] = tmp37Result;
  items7[2] = tmp17Result;
  obj4.children = items7;
  return closure_10(closure_9, obj4);
};
