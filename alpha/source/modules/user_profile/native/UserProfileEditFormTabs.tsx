// Module ID: 16507
// Function ID: 16508
// Name: UserProfileEditFormTabs
// Dependencies: [32, 19, 17, 7371, 21, 5009, 575, 16506, 8806, 14930, 5202, 1114, 16508, 14908, 16509, 14969, 8971, 5090, 12476, 2]

// Module 16507 (UserProfileEditFormTabs)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import ChatInputUtils from "ChatInputUtils" /* 5202 */;
import Constants from "Constants" /* 7371 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 14908 */;
import reactDefault from "react" /* 16506 */;
import UserProfileWidgetEditingHeaderDefault from "UserProfileWidgetEditingHeader" /* 16508 */;
import UserProfileWidgetsEmptyStateDefault from "UserProfileWidgetsEmptyState" /* 16509 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

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
const __initData = { code: "function UserProfileEditFormTabsTsx1(){const{tabsState,BOARD_TAB_INDEX}=this.__closure;return tabsState.visiblePageRange.get()[1]>=BOARD_TAB_INDEX;}" };
const __initData2 = { code: "function UserProfileEditFormTabsTsx2(isOnScreen){const{isBoardTabOnScreen}=this.__closure;return isBoardTabOnScreen.set(isOnScreen);}" };
const memoResult = react.memo(function UserProfileEditFormTabs(userId) {
  let _undefined;
  let c5;
  let card;
  let closure_7;
  let first;
  let hasCustomProfileTheme;
  let items;
  let items2;
  let page;
  let pageHeights;
  let parentPagerGesture;
  let scrollPosition;
  let scrollViewRef;
  let str;
  let tmp6;
  userId = userId.userId;
  const containerBackground = userId.containerBackground;
  const isBoardTabOnScreen = userId.isBoardTabOnScreen;
  c5 = undefined;
  first = undefined;
  closure_7 = undefined;
  let segmentedControlState;
  ({ hasCustomProfileTheme, scrollPosition, scrollViewRef, parentPagerGesture } = userId);
  const tmp = segmentedControlState();
  _slicedToArray = tmp;
  const tmp2 = containerBackground;
  let tmp3 = isBoardTabOnScreen;
  const tmp4 = containerBackground(isBoardTabOnScreen[8])();
  react = tmp4;
  [tmp6, c5] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  [first, closure_7] = react.useState(0);
  const tmp9 = containerBackground(isBoardTabOnScreen[9])(userId).length > 0;
  let closure_8 = tmp9;
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  let items1 = [userId, first, tmp9, containerBackground, tmp.page, tmp4.card];
  const callback1 = react.useCallback((arg0) => {
    const obj = ChatInputUtils;
    obj.dismissKeyboard();
    closure_7(arg0);
  }, []);
  const memo = react.useMemo(() => {
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
      const obj5 = { userId, isVisible: 1 === first, cardStyle: items2 };
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
  }, items1);
  let obj = userId(isBoardTabOnScreen[15]);
  const measuredTabItems = obj.useMeasuredTabItems(memo);
  ({ items, pageHeights } = measuredTabItems);
  let obj2 = userId(isBoardTabOnScreen[16]);
  segmentedControlState = obj2.useSegmentedControlState({ pageWidth: tmp6, items, onPageChange: callback1 });
  let obj3 = userId(isBoardTabOnScreen[17]);
  class D {
    constructor() {
      const visiblePageRange = segmentedControlState.visiblePageRange;
      return visiblePageRange.get()[1] >= 1;
    }
  }
  D.__closure = { tabsState: segmentedControlState, BOARD_TAB_INDEX: 1 };
  D.__workletHash = 1895109232888;
  D.__initData = __initData;
  class B {
    constructor(arg0) {
      return isBoardTabOnScreen.set(arg0);
    }
  }
  B.__closure = { isBoardTabOnScreen };
  B.__workletHash = 8467778586139;
  B.__initData = __initData2;
  const animatedReaction = obj3.useAnimatedReaction(D, B);
  let obj4 = { style: tmp.tabbedContainer, onLayout: callback, children: items2 };
  let obj5 = { state: segmentedControlState, variant: str };
  str = undefined;
  const Tabs = userId(isBoardTabOnScreen[18]).Tabs;
  const tmp16 = closure_8;
  const tmp17 = c5;
  if (hasCustomProfileTheme) {
    str = "overlay";
  }
  items2 = [first(Tabs, obj5), first(tmp2(tmp3[15]), { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef, parentPagerGesture })];
  return tmp16(tmp17, obj4);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTabs.tsx");

export default memoResult;
