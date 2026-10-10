// Module ID: 16830
// Function ID: 16831
// Name: YouBarNotificationsButton
// Dependencies: [19, 17, 9680, 15350, 21, 5092, 587, 558, 576, 16831, 4850, 5378, 504, 5057, 12643, 9681, 1126, 8772, 16829, 1200, 4977, 7573, 2]

// Module 16830 (YouBarNotificationsButton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import RootNavigationRef from "RootNavigationRef" /* 4977 */;
import HapticUtils from "HapticUtils" /* 5057 */;
import spring from "spring" /* 5378 */;
import IconButton2 from "IconButton" /* 7573 */;
import BellIcon2 from "BellIcon" /* 8772 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9681 */;
import showForLaterModal from "showForLaterModal" /* 12643 */;
import YouBarButton from "YouBarButton" /* 16829 */;
import useNotificationsTabBadgeDefault from "useNotificationsTabBadge" /* 16831 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9680 */;
import YouBarConstants from "YouBarConstants" /* 15350 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, importDefault;

let YOU_BAR_BUTTON_ICON_SIZE;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp5;
const ReanimatedRexportDefault = tmp5(4850);
let View = react_native.View;
({ YOU_BAR_SPRING_CONFIG: metroRequire, YOU_BAR_BUTTON_HIT_SLOP: metroImportDefault, YOU_BAR_BUTTON_ICON_SIZE } = YouBarConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, iconContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, overdueReminderDot: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function YouBarNotificationsButtonTsx1(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}" };
const __initData2 = { code: "function YouBarNotificationsButtonTsx2(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function YouBarNotificationsButton(hasNameplate) {
  let closure_1;
  let intl;
  let items2;
  let obj9;
  let overdueMessageReminderCount;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp7;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(32);
  hasNameplate = hasNameplate.hasNameplate;
  const tmp4 = closure_10();
  const value = useNotificationsTabBadgeDefault().value;
  const require = value;
  let obj2 = ReanimatedRexport;
  const fn = function s() {
    let items;
    let num2;
    let num3;
    let withSpring2;
    let withSpring3;
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (require > 0) {
      num = 1;
    }
    const obj = { transform: items, marginLeft: withSpring2(num2, metroRequire), opacity: withSpring3(num3, metroRequire) };
    items = [{ scaleX: withSpring(num, metroRequire) }];
    ({ scaleX: withSpring(num, metroRequire) });
    num2 = 0;
    withSpring2 = spring.withSpring;
    spring;
    if (require > 0) {
      num2 = nativeDefault.space.PX_4;
    }
    num3 = 0;
    withSpring3 = spring.withSpring;
    spring;
    if (require > 0) {
      num3 = 1;
    }
    return obj;
  };
  fn.__closure = { withSpring: spring.withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG, tokens: nativeDefault };
  fn.__workletHash = 11181198364048;
  fn.__initData = __initData;
  ({ withSpring: spring.withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG, tokens: nativeDefault });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SavedMessagesStore];
    const fn2 = function _() {
      return overdueMessageReminderCount.getOverdueMessageReminderCount();
    };
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = fn2;
    tmp7 = items;
    tmp8 = fn2;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function f() {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.SOFT);
      const obj2 = showForLaterModal;
      obj2.showForLaterModal(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
    };
    let num3 = 2;
    cResult[2] = fn3;
    tmp12 = fn3;
  } else {
    tmp12 = cResult[2];
  }
  importDefault = tmp12;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { name: "open-bookmarks", label: intl.string(intl3.t["2pAkDA"]) };
    intl = tmp(1126).intl;
    const items1 = [obj4];
    cResult[3] = items1;
    tmp13 = items1;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn4 = function w(nativeEvent) {
      if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
        closure_1();
      }
    };
    cResult[4] = fn4;
    tmp14 = fn4;
  } else {
    tmp14 = cResult[4];
  }
  let str;
  if (hasNameplate) {
    str = "white";
  }
  if (cResult[5] === tmp4.icon) {
    let tmp15;
    let tmp17;
    if (cResult[6] === str) {
      tmp15 = cResult[7];
    }
    if (cResult[8] !== value) {
      const intl2 = tmp(1126).intl;
      const obj5 = { count: value };
      const formatToPlainStringResult = intl2.formatToPlainString(intl3.t.kedGua, obj5);
      cResult[8] = value;
      cResult[9] = formatToPlainStringResult;
      tmp17 = formatToPlainStringResult;
    } else {
      tmp17 = cResult[9];
    }
    if (cResult[10] === tmp17) {
      if (cResult[11] === stateFromStores) {
        let tmp19;
        if (cResult[12] === (stateFromStores > 0 && 0 === value)) {
          tmp19 = cResult[13];
        }
        let str4 = "secondary-overlay";
        if (!hasNameplate) {
          let str5 = "tertiary";
          if (value > 0) {
            str5 = "secondary";
          }
          str4 = str5;
        }
        if (cResult[14] === tmp15) {
          if (cResult[15] === (stateFromStores > 0 && 0 === value)) {
            let tmp21;
            let tmp24;
            if (cResult[16] === tmp4.overdueReminderDot) {
              tmp21 = cResult[17];
            }
            if (cResult[18] !== value) {
              const obj6 = { value };
              const tmp26 = closure_8(native.Badge, obj6);
              cResult[18] = value;
              cResult[19] = tmp26;
              tmp24 = tmp26;
            } else {
              tmp24 = cResult[19];
            }
            if (cResult[20] === animatedStyle) {
              let tmp27;
              if (cResult[21] === tmp24) {
                tmp27 = cResult[22];
              }
              if (cResult[23] === tmp4.iconContainer) {
                if (cResult[24] === tmp21) {
                  let tmp30;
                  let tmp34;
                  if (cResult[25] === tmp27) {
                    tmp30 = cResult[26];
                  }
                  const _Symbol = Symbol;
                  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                    class H {
                      constructor() {
                        const obj = RootNavigationRef;
                        const rootNavigationRef = obj.getRootNavigationRef();
                        if (null != rootNavigationRef) {
                          rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
                        }
                      }
                    }
                    cResult[27] = H;
                    tmp34 = H;
                  } else {
                    class H {
                      constructor() {
                        const obj = RootNavigationRef;
                        const rootNavigationRef = obj.getRootNavigationRef();
                        if (null != rootNavigationRef) {
                          rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
                        }
                      }
                    }
                  }
                  if (cResult[28] === tmp19) {
                    class H {
                      constructor() {
                        const obj = RootNavigationRef;
                        const rootNavigationRef = obj.getRootNavigationRef();
                        if (null != rootNavigationRef) {
                          rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
                        }
                      }
                    }
                  }
                  const obj7 = { children: closure_8(IconButton2.IconButton, obj9) };
                  const YouBarButtonContainer = tmp(16829).YouBarButtonContainer;
                  obj9 = { accessibilityLabel: tmp19, accessibilityActions: tmp13, onAccessibilityAction: tmp14, variant: str4, size: "sm", icon: tmp30, onPress: tmp34, onLongPress: tmp12, hitSlop };
                  cResult[28] = tmp19;
                  cResult[29] = str4;
                  cResult[30] = tmp30;
                  cResult[31] = closure_8(YouBarButtonContainer, obj7);
                  const tmp38 = closure_8(YouBarButtonContainer, obj7);
                }
              }
              const obj10 = { style: tmp4.iconContainer, children: items2 };
              items2 = [tmp21, tmp27];
              const tmp33 = closure_9(View, obj10);
              cResult[23] = tmp4.iconContainer;
              cResult[24] = tmp21;
              cResult[25] = tmp27;
              cResult[26] = tmp33;
              tmp30 = tmp33;
            }
            const obj11 = { style: animatedStyle, children: tmp24 };
            const tmp29 = closure_8(ReanimatedRexportDefault.View, obj11);
            cResult[20] = animatedStyle;
            cResult[21] = tmp24;
            cResult[22] = tmp29;
            tmp27 = tmp29;
          }
        }
        const obj12 = { icon: tmp15, hasBadge: stateFromStores > 0 && 0 === value, badgeStyle: tmp4.overdueReminderDot };
        const tmp23 = closure_8(YouBarButton.YouBarButtonIcon, obj12);
        cResult[14] = tmp15;
        cResult[15] = stateFromStores > 0 && 0 === value;
        cResult[16] = tmp4.overdueReminderDot;
        cResult[17] = tmp23;
        tmp21 = tmp23;
      }
    }
    let combined = tmp17;
    if (stateFromStores > 0 && 0 === value) {
      class H {
        constructor() {
          const obj = RootNavigationRef;
          const rootNavigationRef = obj.getRootNavigationRef();
          if (null != rootNavigationRef) {
            rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
          }
        }
      }
      const _HermesInternal = HermesInternal;
      const obj13 = { count: stateFromStores };
      combined = "" + tmp17 + ", " + obj8.formatToPlainString(tmp(1126).t.yBmFPA, obj13);
    }
    cResult[10] = tmp17;
    cResult[11] = stateFromStores;
    cResult[12] = stateFromStores > 0 && 0 === value;
    cResult[13] = combined;
    tmp19 = combined;
  }
  const obj14 = { size: "custom", style: tmp4.icon, color: str };
  const tmp16 = closure_8(BellIcon2.BellIcon, obj14);
  cResult[5] = tmp4.icon;
  cResult[6] = str;
  cResult[7] = tmp16;
  tmp15 = tmp16;
}) : (function YouBarNotificationsButton(hasNameplate) {
  let _undefined;
  let items2;
  let obj8;
  let overdueMessageReminderCount;
  let str;
  let str4;
  hasNameplate = hasNameplate.hasNameplate;
  let onLongPress;
  const tmp = closure_10();
  const value = onLongPress(16831)().value;
  _require = value;
  let obj = require("ReanimatedRexport");
  const fn = function u() {
    let items;
    let num2;
    let num3;
    let withSpring2;
    let withSpring3;
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (c0 > 0) {
      num = 1;
    }
    const obj = { transform: items, marginLeft: withSpring2(num2, metroRequire), opacity: withSpring3(num3, metroRequire) };
    items = [{ scaleX: withSpring(num, metroRequire) }];
    ({ scaleX: withSpring(num, metroRequire) });
    num2 = 0;
    withSpring2 = spring.withSpring;
    spring;
    if (c0 > 0) {
      num2 = nativeDefault.space.PX_4;
    }
    num3 = 0;
    withSpring3 = spring.withSpring;
    spring;
    if (c0 > 0) {
      num3 = 1;
    }
    return obj;
  };
  let obj2 = { withSpring: require("spring").withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG, tokens: onLongPress(587) };
  fn.__closure = obj2;
  fn.__workletHash = 14846757226483;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let items = [SavedMessagesStore];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  const tmp2 = onLongPress;
  onLongPress = react.useCallback(() => {
    const obj = _undefined(dependencyMap[13]);
    const result = obj.triggerHapticFeedback(_undefined(dependencyMap[13]).HapticFeedbackTypes.SOFT);
    const obj2 = _undefined(dependencyMap[14]);
    obj2.showForLaterModal(_undefined(dependencyMap[15]).SavedMessageSortTypes.BOOKMARK);
  }, []);
  const items1 = [onLongPress];
  const memo = react.useMemo(() => {
    let intl;
    const obj = { name: "open-bookmarks", label: intl.string(_undefined(dependencyMap[16]).t["2pAkDA"]) };
    intl = _undefined(dependencyMap[16]).intl;
    const items = [obj];
    return items;
  }, []);
  const callback1 = react.useCallback((nativeEvent) => {
    if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
      callback();
    }
  }, items1);
  const obj4 = { size: "custom", style: tmp.icon, color: str };
  str = undefined;
  const BellIcon = tmp4(8772).BellIcon;
  if (hasNameplate) {
    str = "white";
  }
  const tmp11Result = closure_8(BellIcon, obj4);
  let intl = tmp4(1126).intl;
  const formatToPlainStringResult = intl.formatToPlainString(require("intl").t.kedGua, { count: value });
  let combined = formatToPlainStringResult;
  if (stateFromStores > 0 && 0 === value) {
    const intl2 = tmp4(1126).intl;
    const _HermesInternal = HermesInternal;
    const obj5 = { count: stateFromStores };
    combined = "" + formatToPlainStringResult + ", " + intl2.formatToPlainString(tmp4(1126).t.yBmFPA, obj5);
  }
  const YouBarButtonContainer = tmp4(16829).YouBarButtonContainer;
  const obj6 = {
    accessibilityLabel: combined,
    accessibilityActions: memo,
    onAccessibilityAction: callback1,
    variant: str4,
    size: "sm",
    icon: closure_9(View, obj8),
    onPress() {
      const obj = _undefined(dependencyMap[20]);
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
      }
    },
    onLongPress,
    hitSlop
  };
  str4 = "secondary-overlay";
  const IconButton = tmp4(7573).IconButton;
  if (!hasNameplate) {
    let str5 = "tertiary";
    if (value > 0) {
      str5 = "secondary";
    }
    str4 = str5;
  }
  obj8 = { style: tmp.iconContainer, children: items2 };
  items2 = [, ];
  const obj7 = { children: closure_8(IconButton, obj6) };
  const obj9 = { icon: tmp11Result, hasBadge: stateFromStores > 0 && 0 === value, badgeStyle: tmp.overdueReminderDot };
  items2[0] = closure_8(require("YouBarButton").YouBarButtonIcon, obj9);
  const obj10 = { style: animatedStyle, children: closure_8(require("native").Badge, { value }) };
  View = tmp2(4850).View;
  items2[1] = closure_8(View, obj10);
  return closure_8(YouBarButtonContainer, obj7);
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx");

export default memoResult;
