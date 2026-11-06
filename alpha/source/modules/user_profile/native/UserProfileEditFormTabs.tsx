// Module ID: 16816
// Function ID: 16817
// Name: UserProfileEditFormTabs
// Dependencies: [32, 19, 17, 7460, 21, 5170, 575, 16815, 8906, 9087, 15144, 7873, 15169, 5353, 1113, 16817, 15163, 15145, 15234, 9077, 1652, 12344, 2]

// Module 16816 (UserProfileEditFormTabs)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import ChatInputUtils from "ChatInputUtils" /* 5353 */;
import Constants from "Constants" /* 7460 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7873 */;
import UserProfileWidgetsEmptyStateDefault from "UserProfileWidgetsEmptyState" /* 15145 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 15163 */;
import reactDefault from "react" /* 16815 */;
import UserProfileWidgetEditingHeaderDefault from "UserProfileWidgetEditingHeader" /* 16817 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function MainPage() {
  const tmp = closure_9();
  const obj = { style: tmp.page, children: react.useContext(reactDefault) };
  return metroRequire(View, obj);
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const PROFILE_SIDE_PADDING = Constants.PROFILE_SIDE_PADDING;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { tabbedContainer: obj2, page: obj3 };
obj2 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: -PROFILE_SIDE_PADDING };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: PROFILE_SIDE_PADDING, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
let closure_11 = { code: "(function UserProfileEditFormTabsTsx1(){let[tabsState,BOARD_TAB_INDEX]=this.__closure;return tabsState.visiblePageRange.get()[1]>=BOARD_TAB_INDEX;})" };
let closure_12 = { code: "(function UserProfileEditFormTabsTsx2(isOnScreen){let[isBoardTabOnScreen]=this.__closure;return isBoardTabOnScreen.set(isOnScreen);})" };
const memoResult = react.memo(function UserProfileEditFormTabs(userId) {
  let card;
  let closure_5;
  let first;
  let hasCustomProfileTheme;
  let initialTab;
  let isBoardTabOnScreen;
  let items;
  let items7;
  let onLayout;
  let page;
  let pageHeights;
  let ref;
  let scrollPosition;
  let scrollViewRef;
  let str;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  userId = userId.userId;
  const containerBackground = userId.containerBackground;
  first = undefined;
  closure_5 = undefined;
  let arr;
  let closure_7;
  ({ initialTab, hasCustomProfileTheme, scrollPosition, scrollViewRef, isBoardTabOnScreen } = userId);
  const tmp = closure_9();
  dependencyMap = tmp;
  const tmp2 = containerBackground;
  let tmp3 = dependencyMap;
  const tmp4 = containerBackground(8906)();
  _slicedToArray = tmp4;
  const tmp5 = containerBackground(9087)();
  const width = tmp5.width;
  let num = 0;
  ({ ref, onLayout } = tmp5);
  if (undefined !== width) {
    num = width;
  }
  let num2 = 0;
  if ("board" === initialTab) {
    num2 = 1;
  }
  [first, closure_5] = first.useState(num2);
  arr = tmp2(15144)(userId);
  closure_7 = tmp8;
  let items1 = [arr];
  const memo = first.useMemo(() => arr.filter(UserProfileGameWidgetTypes.isGameWidget), items1);
  let obj = userId(15169);
  const fetchSuggestedGames = obj.useFetchSuggestedGames(true, memo);
  let items2 = [userId, first, tmp8, containerBackground, tmp.page, tmp4.card];
  const callback = first.useCallback((arg0) => {
    const obj = ChatInputUtils;
    obj.dismissKeyboard();
    closure_5(arg0);
  }, []);
  const memo1 = first.useMemo(() => {
    let intl;
    let intl2;
    let items1;
    let items2;
    let obj3;
    let tmp2Result;
    let tmp3;
    const obj = { id: "main", label: intl.string(intl3.t.LXw470), page: metroRequire(MainPage, {}) };
    intl = intl3.intl;
    const items = [obj, ];
    const obj2 = { id: "board", label: intl2.string(intl3.t.laViwx), page: metroRequire(tmp3, obj3) };
    intl2 = intl3.intl;
    obj3 = { style: page.page, children: tmp2Result };
    tmp3 = View;
    if (metroImportDefault) {
      const obj4 = { children: items1 };
      items1 = [metroRequire(UserProfileWidgetEditingHeaderDefault, {}), ];
      const obj5 = { userId, isVisible: 1 === first, isEditing: true, cardStyle: items2 };
      items2 = [card.card, ];
      const obj6 = { backgroundColor: containerBackground };
      items2[1] = obj6;
      items1[1] = metroRequire(UserProfileWidgetsBoardDefault, obj5);
      tmp2Result = metroImportAll(metroImportDefault, obj4);
    } else {
      tmp2Result = tmp2(UserProfileWidgetsEmptyStateDefault, {});
    }
    items[1] = obj2;
    return items;
  }, items2);
  let obj2 = userId(15234);
  const measuredTabItems = obj2.useMeasuredTabItems(memo1);
  ({ items, pageHeights } = measuredTabItems);
  let obj3 = userId(9077);
  const segmentedControlState = obj3.useSegmentedControlState({ pageWidth: num, defaultIndex: num2, items, onPageChange: callback });
  let obj4 = userId(1652);
  const items3 = [closure_11, segmentedControlState, 1];
  let c0;
  let c1;
  [tmp16, tmp17, tmp18] = items3;
  const tmp10 = userId;
  class UserProfileEditFormTabsTsx1 {
    constructor() {
      const visiblePageRange = _undefined.visiblePageRange;
      return visiblePageRange.get()[1] >= c1;
    }
  }
  const items4 = [tmp17, tmp18];
  UserProfileEditFormTabsTsx1.__closure = items4;
  UserProfileEditFormTabsTsx1.__workletHash = 15064395793601;
  UserProfileEditFormTabsTsx1.__initData = tmp16;
  const items5 = [closure_12, isBoardTabOnScreen];
  c0 = undefined;
  [tmp19, tmp20] = items5;
  class UserProfileEditFormTabsTsx2 {
    constructor(arg0) {
      return _undefined.set(arg0);
    }
  }
  const items6 = [tmp20];
  UserProfileEditFormTabsTsx2.__closure = items6;
  UserProfileEditFormTabsTsx2.__workletHash = 6535287831650;
  UserProfileEditFormTabsTsx2.__initData = tmp19;
  const animatedReaction = obj4.useAnimatedReaction(UserProfileEditFormTabsTsx1, UserProfileEditFormTabsTsx2);
  let obj5 = { style: tmp.tabbedContainer, ref, onLayout, children: items7 };
  let obj6 = { state: segmentedControlState, variant: str };
  str = undefined;
  const Tabs = tmp10(12344).Tabs;
  const tmp22 = closure_8;
  const tmp23 = closure_5;
  if (hasCustomProfileTheme) {
    str = "overlay";
  }
  items7 = [arr(Tabs, obj6), arr(tmp2(15234), { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef })];
  return tmp22(tmp23, obj5);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTabs.tsx");

export default memoResult;
