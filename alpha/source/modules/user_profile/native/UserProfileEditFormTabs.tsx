// Module ID: 16705
// Function ID: 16706
// Name: UserProfileEditFormTabs
// Dependencies: [32, 19, 17, 7497, 21, 5141, 575, 16704, 8938, 15092, 7898, 15099, 5330, 1113, 16706, 15079, 16707, 15146, 9108, 1652, 12306, 2]

// Module 16705 (UserProfileEditFormTabs)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import ChatInputUtils from "ChatInputUtils" /* 5330 */;
import Constants from "Constants" /* 7497 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7898 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 15079 */;
import reactDefault from "react" /* 16704 */;
import UserProfileWidgetEditingHeaderDefault from "UserProfileWidgetEditingHeader" /* 16706 */;
import UserProfileWidgetsEmptyStateDefault from "UserProfileWidgetsEmptyState" /* 16707 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
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
let react = react_mod;
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
  let _undefined;
  let c4;
  let card;
  let closure_6;
  let first;
  let hasCustomProfileTheme;
  let isBoardTabOnScreen;
  let items;
  let items7;
  let page;
  let pageHeights;
  let parentPagerGesture;
  let scrollPosition;
  let scrollViewRef;
  let str;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp6;
  userId = userId.userId;
  const containerBackground = userId.containerBackground;
  react = undefined;
  first = undefined;
  closure_6 = undefined;
  ({ hasCustomProfileTheme, scrollPosition, scrollViewRef, isBoardTabOnScreen, parentPagerGesture } = userId);
  const tmp = closure_9();
  dependencyMap = tmp;
  let tmp3 = dependencyMap;
  const tmp2 = containerBackground;
  const tmp4 = containerBackground(8938)();
  _slicedToArray = tmp4;
  [tmp6, c4] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  [first, closure_6] = react.useState(0);
  const arr = containerBackground(15092)(userId);
  let closure_8 = tmp9;
  let items1 = [arr];
  const memo = react.useMemo(() => arr.filter(UserProfileGameWidgetTypes.isGameWidget), items1);
  let obj = userId(15099);
  const fetchSuggestedGames = obj.useFetchSuggestedGames(true, memo);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  let items2 = [userId, first, tmp9, containerBackground, tmp.page, tmp4.card];
  const callback1 = react.useCallback((arg0) => {
    const obj = ChatInputUtils;
    obj.dismissKeyboard();
    closure_6(arg0);
  }, []);
  const memo1 = react.useMemo(() => {
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
    if (metroImportAll) {
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
  let obj2 = userId(15146);
  const measuredTabItems = obj2.useMeasuredTabItems(memo1);
  ({ items, pageHeights } = measuredTabItems);
  let obj3 = userId(9108);
  const segmentedControlState = obj3.useSegmentedControlState({ pageWidth: tmp6, items, onPageChange: callback1 });
  let obj4 = userId(1652);
  const items3 = [closure_11, segmentedControlState, 1];
  let c0;
  let c1;
  [tmp18, tmp19, tmp20] = items3;
  const tmp11 = userId;
  class UserProfileEditFormTabsTsx1 {
    constructor() {
      const visiblePageRange = _undefined.visiblePageRange;
      return visiblePageRange.get()[1] >= c1;
    }
  }
  const items4 = [tmp19, tmp20];
  UserProfileEditFormTabsTsx1.__closure = items4;
  UserProfileEditFormTabsTsx1.__workletHash = 15064395793601;
  UserProfileEditFormTabsTsx1.__initData = tmp18;
  const items5 = [closure_12, isBoardTabOnScreen];
  c0 = undefined;
  [tmp21, tmp22] = items5;
  class UserProfileEditFormTabsTsx2 {
    constructor(arg0) {
      return _undefined.set(arg0);
    }
  }
  const items6 = [tmp22];
  UserProfileEditFormTabsTsx2.__closure = items6;
  UserProfileEditFormTabsTsx2.__workletHash = 6535287831650;
  UserProfileEditFormTabsTsx2.__initData = tmp21;
  const animatedReaction = obj4.useAnimatedReaction(UserProfileEditFormTabsTsx1, UserProfileEditFormTabsTsx2);
  let obj5 = { style: tmp.tabbedContainer, onLayout: callback, children: items7 };
  let obj6 = { state: segmentedControlState, variant: str };
  str = undefined;
  const Tabs = tmp11(12306).Tabs;
  const tmp24 = closure_8;
  const tmp25 = first;
  if (hasCustomProfileTheme) {
    str = "overlay";
  }
  items7 = [closure_6(Tabs, obj6), closure_6(tmp2(15146), { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef, parentPagerGesture })];
  return tmp24(tmp25, obj5);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTabs.tsx");

export default memoResult;
