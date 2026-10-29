// Module ID: 16456
// Function ID: 16457
// Name: UserProfileEditFormTabs
// Dependencies: [32, 19, 17, 7364, 21, 5005, 587, 558, 576, 16455, 8772, 14893, 5196, 1125, 16457, 14872, 16458, 14926, 8938, 5086, 12315, 2]

// Module 16456 (UserProfileEditFormTabs)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1125 */;
import ChatInputUtils from "ChatInputUtils" /* 5196 */;
import Constants from "Constants" /* 7364 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8772 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 14872 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 14893 */;
import reactDefault from "react" /* 16455 */;
import UserProfileWidgetEditingHeaderDefault from "UserProfileWidgetEditingHeader" /* 16457 */;
import UserProfileWidgetsEmptyStateDefault from "UserProfileWidgetsEmptyState" /* 16458 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function MainPage() {
  const obj = react2;
  const cResult = obj.c(3);
  const tmp2 = closure_9();
  const context = react.useContext(reactDefault);
  if (cResult[0] === context) {
    let tmp4;
    if (cResult[1] === tmp2.page) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj2 = { style: tmp2.page, children: context };
  const tmp5 = metroRequire(View, obj2);
  cResult[0] = context;
  cResult[1] = tmp2.page;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function MainPage() {
  const tmp = closure_9();
  const obj = { style: tmp.page, children: react.useContext(reactDefault) };
  return metroRequire(View, obj);
});
let closure_11 = { code: "function UserProfileEditFormTabsTsx1(){const{tabsState,BOARD_TAB_INDEX}=this.__closure;return tabsState.visiblePageRange.get()[1]>=BOARD_TAB_INDEX;}" };
let closure_12 = { code: "function UserProfileEditFormTabsTsx2(isOnScreen){const{isBoardTabOnScreen}=this.__closure;return isBoardTabOnScreen.set(isOnScreen);}" };
const __initData = { code: "function UserProfileEditFormTabsTsx3(){const{tabsState,BOARD_TAB_INDEX}=this.__closure;return tabsState.visiblePageRange.get()[1]>=BOARD_TAB_INDEX;}" };
const __initData2 = { code: "function UserProfileEditFormTabsTsx4(isOnScreen){const{isBoardTabOnScreen}=this.__closure;return isBoardTabOnScreen.set(isOnScreen);}" };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditFormTabs(arg0) {
  let containerBackground;
  let isBoardTabOnScreen;
  let items;
  let items1;
  let scrollPosition;
  let scrollViewRef;
  let tmp19;
  let tmp9;
  let userId;
  let obj = isBoardTabOnScreen(576);
  const cResult = obj.c(28);
  ({ userId, containerBackground, scrollPosition, scrollViewRef, isBoardTabOnScreen } = arg0);
  closure_9();
  const tmp6 = UserProfileSharedStylesDefault();
  [r10028, importDefault] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  [tmp9, dependencyMap] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const tmp10 = useUserProfileWidgetsDefault(userId).length > 0;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(nativeEvent) {
      importDefault(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor(arg0) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        dependencyMap(arg0);
      }
    }
    cResult[1] = H;
  } else {
    class H {
      constructor(arg0) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        dependencyMap(arg0);
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor(arg0) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        dependencyMap(arg0);
      }
    }
    const intl = tmp(1125).intl;
    tmp14[1] = intl.string(isBoardTabOnScreen(1125).t.LXw470);
    tmp14[2] = closure_6(closure_10, {});
    cResult[2] = tmp14;
  } else {
    class H {
      constructor(arg0) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        dependencyMap(arg0);
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor(arg0) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        dependencyMap(arg0);
      }
    }
    cResult[3] = obj2.string(isBoardTabOnScreen(1125).t.laViwx);
    const stringResult = obj2.string(isBoardTabOnScreen(1125).t.laViwx);
  } else {
    class H {
      constructor(arg0) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        dependencyMap(arg0);
      }
    }
  }
  if (cResult[4] === tmp9) {
    class H {
      constructor(arg0) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        dependencyMap(arg0);
      }
    }
  }
  if (tmp10) {
    class H {
      constructor(arg0) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        dependencyMap(arg0);
      }
    }
    const obj3 = { children: items };
    items = [closure_6(UserProfileWidgetEditingHeaderDefault, {}), ];
    const obj4 = { userId, isVisible: 1 === tmp9, cardStyle: items1 };
    items1 = [tmp6.card, ];
    const obj5 = { backgroundColor: containerBackground };
    items1[1] = obj5;
    items[1] = closure_6(UserProfileWidgetsBoardDefault, obj4);
    tmp19 = closure_8(closure_7, obj3);
  } else {
    class H {
      constructor(arg0) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        dependencyMap(arg0);
      }
    }
    tmp19 = closure_6(tmp5(16458), {});
  }
  cResult[4] = tmp9;
  cResult[5] = containerBackground;
  cResult[6] = tmp10;
  cResult[7] = tmp6.card;
  cResult[8] = userId;
  cResult[9] = tmp19;
}) : (function UserProfileEditFormTabs(userId) {
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
  ({ hasCustomProfileTheme, scrollPosition, scrollViewRef } = userId);
  const tmp = segmentedControlState();
  _slicedToArray = tmp;
  const tmp2 = containerBackground;
  let tmp3 = isBoardTabOnScreen;
  const tmp4 = containerBackground(isBoardTabOnScreen[10])();
  react = tmp4;
  [tmp6, c5] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  [first, closure_7] = react.useState(0);
  const tmp9 = containerBackground(isBoardTabOnScreen[11])(userId).length > 0;
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
    const obj = { id: "main", label: intl.string(intl3.t.LXw470), page: metroRequire(closure_10, {}) };
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
  let obj = userId(isBoardTabOnScreen[17]);
  const measuredTabItems = obj.useMeasuredTabItems(memo);
  ({ items, pageHeights } = measuredTabItems);
  let obj2 = userId(isBoardTabOnScreen[18]);
  segmentedControlState = obj2.useSegmentedControlState({ pageWidth: tmp6, items, onPageChange: callback1 });
  let obj3 = userId(isBoardTabOnScreen[19]);
  class B {
    constructor() {
      const visiblePageRange = segmentedControlState.visiblePageRange;
      return visiblePageRange.get()[1] >= 1;
    }
  }
  B.__closure = { tabsState: segmentedControlState, BOARD_TAB_INDEX: 1 };
  B.__workletHash = 12896262225722;
  B.__initData = __initData;
  const fn = function y(arg0) {
    return isBoardTabOnScreen.set(arg0);
  };
  fn.__closure = { isBoardTabOnScreen };
  fn.__workletHash = 11446268141917;
  fn.__initData = __initData2;
  const animatedReaction = obj3.useAnimatedReaction(B, fn);
  let obj4 = { style: tmp.tabbedContainer, onLayout: callback, children: items2 };
  let obj5 = { state: segmentedControlState, variant: str };
  str = undefined;
  const Tabs = userId(isBoardTabOnScreen[20]).Tabs;
  const tmp16 = closure_8;
  const tmp17 = c5;
  if (hasCustomProfileTheme) {
    str = "overlay";
  }
  items2 = [first(Tabs, obj5), first(tmp2(tmp3[17]), { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef })];
  return tmp16(tmp17, obj4);
}));
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTabs.tsx");

export default memoResult;
