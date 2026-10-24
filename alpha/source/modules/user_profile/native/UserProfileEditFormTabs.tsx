// Module ID: 15950
// Function ID: 15951
// Name: UserProfileEditFormTabs
// Dependencies: [32, 19, 17, 7304, 21, 4971, 587, 558, 576, 15949, 8732, 5159, 1128, 14374, 14427, 8901, 5052, 11849, 2]

// Module 15950 (UserProfileEditFormTabs)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1128 */;
import ChatInputUtils from "ChatInputUtils" /* 5159 */;
import Constants from "Constants" /* 7304 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8732 */;
import reactDefault from "react" /* 15949 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp5;
const UserProfileWidgetsBoardDefault = tmp5(14374);
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const PROFILE_SIDE_PADDING = Constants.PROFILE_SIDE_PADDING;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, page: { paddingHorizontal: PROFILE_SIDE_PADDING }, boardPage: obj3 };
obj2 = { marginTop: nativeDefault.space.PX_16, marginHorizontal: -PROFILE_SIDE_PADDING };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function MainPage() {
  const obj = react2;
  const cResult = obj.c(3);
  const tmp2 = closure_8();
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
  const tmp = closure_8();
  const obj = { style: tmp.page, children: react.useContext(reactDefault) };
  return metroRequire(View, obj);
});
let closure_10 = { code: "function UserProfileEditFormTabsTsx1(){const{tabsState,BOARD_TAB_INDEX}=this.__closure;return tabsState.visiblePageRange.get()[1]>=BOARD_TAB_INDEX;}" };
let closure_11 = { code: "function UserProfileEditFormTabsTsx2(isOnScreen){const{isBoardTabOnScreen}=this.__closure;return isBoardTabOnScreen.set(isOnScreen);}" };
const __initData = { code: "function UserProfileEditFormTabsTsx3(){const{tabsState,BOARD_TAB_INDEX}=this.__closure;return tabsState.visiblePageRange.get()[1]>=BOARD_TAB_INDEX;}" };
const __initData2 = { code: "function UserProfileEditFormTabsTsx4(isOnScreen){const{isBoardTabOnScreen}=this.__closure;return isBoardTabOnScreen.set(isOnScreen);}" };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditFormTabs(arg0) {
  let closure_2;
  let containerBackground;
  let first;
  let isBoardTabOnScreen;
  let scrollPosition;
  let scrollViewRef;
  let userId;
  let obj = isBoardTabOnScreen(576);
  const cResult = obj.c(34);
  ({ userId, containerBackground, scrollPosition, scrollViewRef, isBoardTabOnScreen } = arg0);
  const tmp4 = closure_8();
  const tmp6 = UserProfileSharedStylesDefault();
  [r10028, importDefault] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  [first, dependencyMap] = react.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(nativeEvent) {
      importDefault(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    let first1 = fn;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor(arg0) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        closure_2(arg0);
      }
    }
    cResult[1] = H;
  } else {
    class H {
      constructor(arg0) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        closure_2(arg0);
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor(arg0) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        closure_2(arg0);
      }
    }
    const intl = tmp(1128).intl;
    tmp13[1] = intl.string(isBoardTabOnScreen(1128).t.LXw470);
    tmp13[2] = closure_6(closure_9, {});
    cResult[2] = tmp13;
  } else {
    class H {
      constructor(arg0) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        closure_2(arg0);
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor(arg0) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        closure_2(arg0);
      }
    }
    cResult[3] = obj2.string(isBoardTabOnScreen(1128).t.laViwx);
    const stringResult = obj2.string(isBoardTabOnScreen(1128).t.laViwx);
  } else {
    class H {
      constructor(arg0) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        closure_2(arg0);
      }
    }
  }
  if (cResult[4] === tmp4.boardPage) {
    class H {
      constructor(arg0) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        closure_2(arg0);
      }
    }
    if (cResult[7] !== containerBackground) {
      class H {
        constructor(arg0) {
          const obj = ChatInputUtils;
          obj.dismissKeyboard();
          closure_2(arg0);
        }
      }
      tmp19[0] = containerBackground;
      cResult[7] = containerBackground;
      cResult[8] = tmp19;
    } else {
      class H {
        constructor(arg0) {
          const obj = ChatInputUtils;
          obj.dismissKeyboard();
          closure_2(arg0);
        }
      }
    }
    if (cResult[9] === tmp6.card) {
      class H {
        constructor(arg0) {
          const obj = ChatInputUtils;
          obj.dismissKeyboard();
          closure_2(arg0);
        }
      }
      if (cResult[12] === 1 === first) {
        class H {
          constructor(arg0) {
            const obj = ChatInputUtils;
            obj.dismissKeyboard();
            closure_2(arg0);
          }
        }
      }
      const obj3 = { userId, isVisible: 1 === first, cardStyle: tmp20 };
      cResult[12] = 1 === first;
      cResult[13] = tmp20;
      cResult[14] = userId;
      cResult[15] = closure_6(UserProfileWidgetsBoardDefault, obj3);
      const tmp24 = closure_6(UserProfileWidgetsBoardDefault, obj3);
    }
    const items = [tmp6.card, tmp18];
    cResult[9] = tmp6.card;
    cResult[10] = tmp18;
    cResult[11] = items;
  }
  const items1 = [, ];
  ({ page: arr[0], boardPage: arr[1] } = tmp4);
  cResult[4] = tmp4.boardPage;
  cResult[5] = tmp4.page;
  cResult[6] = items1;
}) : (function UserProfileEditFormTabs(userId) {
  let _undefined;
  let c5;
  let card;
  let closure_3;
  let closure_7;
  let first;
  let hasCustomProfileTheme;
  let items;
  let items2;
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
  const tmp4 = containerBackground(isBoardTabOnScreen[10])();
  react = tmp4;
  [tmp6, c5] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  [first, closure_7] = react.useState(0);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  let items1 = [userId, first, containerBackground, , , ];
  ({ page: arr[3], boardPage: arr[4] } = tmp);
  items1[5] = tmp4.card;
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
    let obj4;
    const obj = { id: "main", label: intl.string(intl3.t.LXw470), page: metroRequire(closure_9, {}) };
    intl = intl3.intl;
    const items = [obj, ];
    const obj2 = { id: "board", label: intl2.string(intl3.t.laViwx), page: metroRequire(View, obj3) };
    intl2 = intl3.intl;
    obj3 = { style: items1, children: metroRequire(UserProfileWidgetsBoardDefault, obj4) };
    items1 = [, ];
    ({ page: arr2[0], boardPage: arr2[1] } = closure_3);
    obj4 = { userId, isVisible: 1 === first, cardStyle: items2 };
    items2 = [card.card, ];
    const obj5 = { backgroundColor: containerBackground };
    items2[1] = obj5;
    items[1] = obj2;
    return items;
  }, items1);
  let obj = userId(isBoardTabOnScreen[14]);
  const measuredTabItems = obj.useMeasuredTabItems(memo);
  ({ items, pageHeights } = measuredTabItems);
  let obj2 = userId(isBoardTabOnScreen[15]);
  segmentedControlState = obj2.useSegmentedControlState({ pageWidth: tmp6, items, onPageChange: callback1 });
  let obj3 = userId(isBoardTabOnScreen[16]);
  const fn = function y() {
    const visiblePageRange = segmentedControlState.visiblePageRange;
    return visiblePageRange.get()[1] >= 1;
  };
  fn.__closure = { tabsState: segmentedControlState, BOARD_TAB_INDEX: 1 };
  fn.__workletHash = 12896262225722;
  fn.__initData = __initData;
  const fn2 = function v(arg0) {
    return isBoardTabOnScreen.set(arg0);
  };
  fn2.__closure = { isBoardTabOnScreen };
  fn2.__workletHash = 11446268141917;
  fn2.__initData = __initData2;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  let obj4 = { style: tmp.container, onLayout: callback, children: items2 };
  let obj5 = { state: segmentedControlState, variant: str };
  str = undefined;
  const Tabs = userId(isBoardTabOnScreen[17]).Tabs;
  const tmp15 = closure_7;
  const tmp16 = c5;
  const tmp2 = containerBackground;
  const tmp3 = isBoardTabOnScreen;
  if (hasCustomProfileTheme) {
    str = "overlay";
  }
  items2 = [first(Tabs, obj5), first(tmp2(tmp3[14]), { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef })];
  return tmp15(tmp16, obj4);
}));
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTabs.tsx");

export default memoResult;
