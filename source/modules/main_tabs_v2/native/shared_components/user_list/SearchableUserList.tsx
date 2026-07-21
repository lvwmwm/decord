// Module ID: 8811
// Function ID: 69440
// Name: SearchableUserList
// Dependencies: []
// Exports: default

// Module 8811 (SearchableUserList)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const UserRowModes = arg1(dependencyMap[4]).UserRowModes;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: importDefault(dependencyMap[7]).space.PX_8, backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.searchBarContainer = obj;
obj.searchBar = { height: undefined, minHeight: 40 };
const tmp2 = arg1(dependencyMap[5]);
obj.searchBarRowContainer = { paddingTop: importDefault(dependencyMap[7]).space.PX_8 };
const obj1 = { paddingTop: importDefault(dependencyMap[7]).space.PX_8 };
obj.noResults = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_11 = obj.createStyles(obj);
const obj2 = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx");

export default function SearchableUserList(selectedUserIds) {
  let disableGradient;
  let disableStickySections;
  let disableThemedGradient;
  let headerSize;
  let renderHeader;
  selectedUserIds = selectedUserIds.selectedUserIds;
  const arg1 = selectedUserIds;
  const disabledUserIds = selectedUserIds.disabledUserIds;
  const importDefault = disabledUserIds;
  const onSelectUser = selectedUserIds.onSelectUser;
  const dependencyMap = onSelectUser;
  const handleMessage = selectedUserIds.handleMessage;
  let callback = handleMessage;
  let actions = selectedUserIds.actions;
  if (actions === undefined) {
    actions = [];
  }
  let ACTIONS = selectedUserIds.rowMode;
  if (ACTIONS === undefined) {
    ACTIONS = UserRowModes.ACTIONS;
  }
  const React = ACTIONS;
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
  let View;
  let closure_6;
  let UserRowModes;
  ({ disableGradient, disableStickySections, disableThemedGradient } = selectedUserIds);
  const tmp2 = callback3();
  const tmp3 = callback(React.useState(""), 2);
  let obj = { query: str, withGuildMembers: flag2, withAffinitySuggestions: flag3, withAlphabeticalSections: flag4, withFriends: flag5, withGameFriends: flag6, withFriendSuggestions: flag11, withFriendRequests: flag7, withFriendRequestsIncoming: flag8, withFriendRequestsOutgoing: flag9, withFriendRequestsSpam: flag10 };
  const tmp4 = importDefault(dependencyMap[8])(obj);
  View = tmp4;
  const items = [selectedUserIds];
  const memo = React.useMemo(() => {
    const mapped = null != selectedUserIds ? selectedUserIds : [].map(memo.getUser);
    const found = mapped.filter(selectedUserIds(onSelectUser[9]).isNotNullish);
    return found.map(disabledUserIds(onSelectUser[10]));
  }, items);
  closure_6 = memo;
  const items1 = [onSelectUser, memo];
  const items2 = [tmp4];
  callback = React.useCallback((arg0) => {
    const user = memo.getUser(tmp.id);
    if (null != user) {
      onSelectUser(user);
      const AccessibilityAnnouncer = selectedUserIds(onSelectUser[11]).AccessibilityAnnouncer;
      const intl = selectedUserIds(onSelectUser[12]).intl;
      const obj = { text: tmp.text };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(selectedUserIds(onSelectUser[12]).t.srlxB8, obj));
    }
  }, items1);
  const memo1 = React.useMemo(() => tmp4.map((items) => items.items.length), items2);
  const items3 = [tmp4];
  const callback1 = React.useCallback((arg0) => {
    const props = { title: tmp4[arg0].title };
    return { type: "section", props };
  }, items3);
  const tmp8 = tmp3[0].trim().length > 0;
  const items4 = [tmp4, disabledUserIds, onSelectUser, handleMessage, ACTIONS, selectedUserIds];
  const callback2 = React.useCallback((arg0, arg1) => {
    let firstMatch;
    let user;
    ({ user, firstMatch } = tmp4[arg0].items[arg1]);
    let obj = { type: "user" };
    obj = { type: tmp.type, user };
    let tmp3;
    const diff = tmp4[arg0].items.length - 1;
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
  const ref = React.useRef(null);
  UserRowModes = ref;
  let obj2 = arg1(dependencyMap[13]);
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
  const layoutEffect = React.useLayoutEffect(() => {
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
    let tmp17Result = tmp17(arg1(dependencyMap[14]).UsersFastList, obj);
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
      const intl = arg1(dependencyMap[12]).intl;
      obj2.title = intl.string(arg1(dependencyMap[12]).t.V6nAfF);
      const obj3 = { actions };
      let prop2;
      if (flag5) {
        prop2 = tmp2.searchBarRowContainer;
      }
      obj3.style = prop2;
      obj2.children = callback2(arg1(dependencyMap[13]).UserFlashListActions, obj3);
      obj1.children = callback2(importDefault(dependencyMap[15]), obj2);
      tmp25 = obj1;
      const tmp22 = importDefault(dependencyMap[15]);
    }
    tmp17Result = tmp17(View, tmp25);
    const tmp18 = View;
  }
  const obj4 = {};
  let tmp32 = !disableGradient;
  if (tmp32) {
    const obj5 = { absolute: true };
    tmp32 = callback2(importDefault(dependencyMap[16]), obj5);
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
      obj6.children = callback2(importDefault(dependencyMap[17]), obj7);
      tmp37Result = tmp37(View, obj6);
      const tmp38 = View;
      const tmp41 = importDefault(dependencyMap[17]);
    }
  }
  items7[1] = tmp37Result;
  items7[2] = tmp17Result;
  obj4.children = items7;
  return closure_10(closure_9, obj4);
};
