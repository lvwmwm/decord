// Module ID: 16176
// Function ID: 16177
// Name: UserProfileEditFormTabs
// Dependencies: [32, 19, 17, 9438, 6137, 7557, 21, 5043, 575, 16175, 5104, 9490, 9527, 1654, 9488, 8487, 14573, 6171, 14580, 5228, 1112, 16177, 14564, 15009, 15073, 8617, 13619, 2]

// Module 16176 (UserProfileEditFormTabs)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import ChatInputUtils from "ChatInputUtils" /* 5228 */;
import Constants from "Constants" /* 6137 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 6171 */;
import Constants2 from "Constants" /* 7557 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 14564 */;
import UserProfileWidgetsEmptyStateDefault from "UserProfileWidgetsEmptyState" /* 15009 */;
import reactDefault from "react" /* 16175 */;
import UserProfileWidgetEditingHeaderDefault from "UserProfileWidgetEditingHeader" /* 16177 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9438 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let absoluteFill, dependencyMap;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function MainPage() {
  const tmp = closure_12();
  const obj = { style: tmp.page, children: react.useContext(reactDefault) };
  return React4(metroRequire, obj);
}
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
const UserProfileSections = Constants.UserProfileSections;
const PROFILE_SIDE_PADDING = Constants2.PROFILE_SIDE_PADDING;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { tabbedContainer: { marginHorizontal: -PROFILE_SIDE_PADDING }, stickyTabs: obj2, page: obj3 };
obj2 = { zIndex: 1, paddingTop: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: PROFILE_SIDE_PADDING, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
let closure_14 = { code: "(function UserProfileEditFormTabsTsx1(){let[stickyTranslateY]=this.__closure;return{transform:[{translateY:stickyTranslateY.get()}]};})" };
let closure_15 = { code: "(function UserProfileEditFormTabsTsx2(){let[stickyTranslateY]=this.__closure;return{opacity:stickyTranslateY.get()>0?1:0};})" };
let closure_16 = { code: "(function UserProfileEditFormTabsTsx3(){let[tabsState,BOARD_TAB_INDEX]=this.__closure;return tabsState.visiblePageRange.get()[1]>=BOARD_TAB_INDEX;})" };
let closure_17 = { code: "(function UserProfileEditFormTabsTsx4(isOnScreen){let[isBoardTabOnScreen]=this.__closure;return isBoardTabOnScreen.set(isOnScreen);})" };
const memoResult = react.memo(function UserProfileEditFormTabs(userId) {
  let closure_5;
  let hasCustomProfileTheme;
  let initialTab;
  let isBoardTabOnScreen;
  let items;
  let items12;
  let items13;
  let items14;
  let items15;
  let onLayout;
  let onStickyTabsLayout;
  let page;
  let pageHeights;
  let primaryColor;
  let ref;
  let scrollPosition;
  let scrollViewRef;
  let secondaryColor;
  let str;
  let theme;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp9;
  userId = userId.userId;
  const containerBackground = userId.containerBackground;
  const stickyTranslateY = userId.stickyTranslateY;
  let card;
  let first;
  absoluteFill = undefined;
  let arr5;
  let closure_7;
  ({ initialTab, hasCustomProfileTheme, scrollPosition, scrollViewRef, isBoardTabOnScreen, onStickyTabsLayout } = userId);
  const tmp = closure_12();
  dependencyMap = tmp;
  const tmp2 = userId;
  let tmp3 = dependencyMap;
  let obj = userId(5104);
  const themeContext = obj.useThemeContext();
  ({ primaryColor, secondaryColor, theme } = themeContext);
  let obj2 = userId(9490);
  const gradientFallbackBackground = obj2.useUserProfileColors({ theme, primaryColor, secondaryColor }).gradientFallbackBackground;
  userId(9527);
  let tmp8 = gradientFallbackBackground;
  const tmp6 = card;
  if (null != primaryColor) {
    tmp8 = gradientFallbackBackground;
    if (null != secondaryColor) {
      tmp8 = tmp7;
    }
  }
  let tmp2Result = tmp2(1654);
  let items1 = [closure_14, stickyTranslateY];
  let c0;
  [tmp9, tmp10] = items1;
  class UserProfileEditFormTabsTsx1 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ translateY: _undefined.get() }];
      ({ translateY: _undefined.get() });
      return obj;
    }
  }
  let items2 = [tmp10];
  UserProfileEditFormTabsTsx1.__closure = items2;
  UserProfileEditFormTabsTsx1.__workletHash = 9996648724256;
  UserProfileEditFormTabsTsx1.__initData = tmp9;
  const animatedStyle = tmp2Result.useAnimatedStyle(UserProfileEditFormTabsTsx1);
  const items3 = [closure_15, stickyTranslateY];
  c0 = undefined;
  [tmp12, tmp13] = items3;
  const tmp2Result6 = tmp2(1654);
  class UserProfileEditFormTabsTsx2 {
    constructor() {
      let opacity = 0;
      if (_undefined.get() > 0) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  const items4 = [tmp13];
  UserProfileEditFormTabsTsx2.__closure = items4;
  UserProfileEditFormTabsTsx2.__workletHash = 5290718826457;
  UserProfileEditFormTabsTsx2.__initData = tmp12;
  const animatedStyle1 = tmp2Result6.useAnimatedStyle(UserProfileEditFormTabsTsx2);
  const tmp16 = containerBackground(9488)();
  card = tmp16;
  const tmp17 = containerBackground(8487)();
  const width = tmp17.width;
  let num = 0;
  ({ ref, onLayout } = tmp17);
  if (undefined !== width) {
    num = width;
  }
  let num2 = 0;
  if (initialTab === UserProfileSections.WIDGETS) {
    num2 = 1;
  }
  const tmp6Result = tmp6(first.useState(num2), 2);
  first = tmp6Result[0];
  absoluteFill = tmp6Result[1];
  arr5 = tmp15(14573)(userId);
  closure_7 = tmp20;
  const items5 = [arr5];
  const memo = first.useMemo(() => arr5.filter(UserProfileGameWidgetTypes.isGameWidget), items5);
  const tmp2Result7 = tmp2(14580);
  const fetchSuggestedGames = tmp2Result7.useFetchSuggestedGames(true, memo);
  const items6 = [first];
  const layoutEffect = first.useLayoutEffect(() => {
    let MAIN;
    const setState = ProfileCustomizationNavigationStore.setState;
    if (1 === first) {
      MAIN = UserProfileSections.WIDGETS;
    } else {
      MAIN = UserProfileSections.MAIN;
    }
    setState({ editingTab: MAIN });
  }, items6);
  const items7 = [userId, first, arr5.length > 0, containerBackground, tmp.page, tmp16.card];
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
    const obj = { id: UserProfileSections.MAIN, label: intl.string(intl3.t.LXw470), page: React4(MainPage, {}) };
    intl = intl3.intl;
    const items = [obj, ];
    const obj2 = { id: UserProfileSections.WIDGETS, label: intl2.string(intl3.t.laViwx), page: React4(tmp3, obj3) };
    intl2 = intl3.intl;
    obj3 = { style: page.page, children: tmp2Result };
    tmp3 = metroRequire;
    if (closure_7) {
      const obj4 = { children: items1 };
      items1 = [React4(UserProfileWidgetEditingHeaderDefault, {}), ];
      const obj5 = { userId, isVisible: 1 === first, isEditing: true, cardStyle: items2 };
      items2 = [card.card, ];
      const obj6 = { backgroundColor: containerBackground };
      items2[1] = obj6;
      items1[1] = React4(UserProfileWidgetsBoardDefault, obj5);
      tmp2Result = unpackModuleId(authStore, obj4);
    } else {
      tmp2Result = tmp2(UserProfileWidgetsEmptyStateDefault, {});
    }
    items[1] = obj2;
    return items;
  }, items7);
  const tmp2Result8 = tmp2(15073);
  const measuredTabItems = tmp2Result8.useMeasuredTabItems(memo1);
  ({ items, pageHeights } = measuredTabItems);
  const tmp2Result9 = tmp2(8617);
  const segmentedControlState = tmp2Result9.useSegmentedControlState({ pageWidth: num, defaultIndex: num2, items, onPageChange: callback });
  const items8 = [closure_16, segmentedControlState, 1];
  c0 = undefined;
  let c1;
  [tmp28, tmp29, tmp30] = items8;
  const tmp2Result10 = tmp2(1654);
  class UserProfileEditFormTabsTsx3 {
    constructor() {
      const visiblePageRange = _undefined.visiblePageRange;
      return visiblePageRange.get()[1] >= c1;
    }
  }
  const items9 = [tmp29, tmp30];
  UserProfileEditFormTabsTsx3.__closure = items9;
  UserProfileEditFormTabsTsx3.__workletHash = 9814947251011;
  UserProfileEditFormTabsTsx3.__initData = tmp28;
  const items10 = [closure_17, isBoardTabOnScreen];
  c0 = undefined;
  [tmp31, tmp32] = items10;
  class UserProfileEditFormTabsTsx4 {
    constructor(arg0) {
      return _undefined.set(arg0);
    }
  }
  const items11 = [tmp32];
  UserProfileEditFormTabsTsx4.__closure = items11;
  UserProfileEditFormTabsTsx4.__workletHash = 2474607394788;
  UserProfileEditFormTabsTsx4.__initData = tmp31;
  const animatedReaction = tmp2Result10.useAnimatedReaction(UserProfileEditFormTabsTsx3, UserProfileEditFormTabsTsx4);
  let obj3 = { style: tmp.tabbedContainer, ref, onLayout, children: items15 };
  let obj4 = { style: items12, onLayout: onStickyTabsLayout, children: items14 };
  items12 = [tmp.stickyTabs, animatedStyle];
  const View = tmp15(1654).View;
  let obj5 = { pointerEvents: "none", style: items13 };
  items13 = [absoluteFill.absoluteFill, { backgroundColor: tmp8 }, animatedStyle1];
  items14 = [closure_9(containerBackground(1654).View, obj5), ];
  let obj6 = { state: segmentedControlState, variant: str };
  str = undefined;
  const Tabs = tmp2(13619).Tabs;
  const tmp35 = arr5;
  if (hasCustomProfileTheme) {
    str = "overlay";
  }
  items14[1] = closure_9(Tabs, obj6);
  items15 = [closure_11(View, obj4), closure_9(containerBackground(15073), { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef })];
  return closure_11(tmp35, obj3);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTabs.tsx");

export default memoResult;
