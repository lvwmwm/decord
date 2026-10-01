// Module ID: 16030
// Function ID: 16031
// Name: YouBarNotificationsButton
// Dependencies: [19, 17, 11155, 14627, 21, 4836, 576, 16031, 4566, 5280, 7275, 504, 4801, 7284, 7285, 1115, 9067, 16029, 7363, 1177, 4693, 2]

// Module 16030 (YouBarNotificationsButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import spring from "spring" /* 5280 */;
import showForLaterModal from "showForLaterModal" /* 7284 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7285 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11155 */;
import YouBarConstants from "YouBarConstants" /* 14627 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let YOU_BAR_BUTTON_ICON_SIZE;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let View = react_native.View;
({ YOU_BAR_SPRING_CONFIG: metroRequire, YOU_BAR_BUTTON_HIT_SLOP: metroImportDefault, YOU_BAR_BUTTON_ICON_SIZE } = YouBarConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, iconContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, overdueReminderDot: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function YouBarNotificationsButtonTsx1(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}" };
const memoResult = react.memo(function YouBarNotificationsButton(hasNameplate) {
  let _undefined;
  let items4;
  let obj9;
  let overdueMessageReminderCount;
  let str;
  let str4;
  hasNameplate = hasNameplate.hasNameplate;
  let isForLaterExperimentOn;
  let onLongPress;
  let tmp = closure_10();
  const tmp3 = onLongPress;
  const value = isForLaterExperimentOn(onLongPress[7])().value;
  _require = value;
  let obj = require("ReanimatedRexport");
  const fn = function l() {
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
  let obj2 = { withSpring: require("spring").withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG, tokens: isForLaterExperimentOn(onLongPress[6]) };
  fn.__closure = obj2;
  fn.__workletHash = 11181198364048;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = require("ForLaterExperiment");
  const tmp2 = isForLaterExperimentOn;
  isForLaterExperimentOn = obj3.useIsForLaterExperimentOn("YouBar");
  const obj4 = require("ForLaterExperiment");
  let hasForLaterAccess = obj4.useHasForLaterAccess("YouBar");
  if (isForLaterExperimentOn) {
    if (!hasForLaterAccess) {
      let num = 0;
      hasForLaterAccess = SavedMessagesStore.getSavedMessageCount() > 0;
    }
    isForLaterExperimentOn = hasForLaterAccess;
  }
  let items = [SavedMessagesStore];
  const tmp4Result = require("get initialized");
  const stateFromStores = tmp4Result.useStateFromStores(items, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  let tmp10 = isForLaterExperimentOn;
  if (tmp10) {
    let num2 = 0;
    tmp10 = stateFromStores > 0;
  }
  if (tmp10) {
    let num3 = 0;
    tmp10 = 0 === value;
  }
  const items1 = [isForLaterExperimentOn];
  onLongPress = react.useCallback(() => {
    const tmp = isForLaterExperimentOn;
    if (tmp) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.SOFT);
      const obj2 = showForLaterModal;
      obj2.showForLaterModal(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
    }
  }, items1);
  const items2 = [isForLaterExperimentOn];
  const items3 = [onLongPress];
  const memo = react.useMemo(() => {
    let intl;
    const items = [];
    const tmp = isForLaterExperimentOn;
    if (tmp) {
      const push = items.push;
      const obj = { name: "open-bookmarks", label: intl.string(intl3.t["2pAkDA"]) };
      intl = intl3.intl;
      push(obj);
    }
    return items;
  }, items2);
  const callback1 = react.useCallback((nativeEvent) => {
    if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
      callback();
    }
  }, items3);
  const obj5 = { size: "custom", style: tmp.icon, color: str };
  str = undefined;
  const BellIcon = tmp4(tmp3[16]).BellIcon;
  if (hasNameplate) {
    str = "white";
  }
  const tmp14Result = closure_8(BellIcon, obj5);
  let intl = tmp4(tmp3[15]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(require("intl").t.kedGua, { count: value });
  let combined = formatToPlainStringResult;
  if (tmp10) {
    const intl2 = tmp4(tmp3[15]).intl;
    const _HermesInternal = HermesInternal;
    const obj6 = { count: stateFromStores };
    combined = "" + formatToPlainStringResult + ", " + intl2.formatToPlainString(tmp4(tmp3[15]).t.yBmFPA, obj6);
  }
  const YouBarButtonContainer = tmp4(tmp3[17]).YouBarButtonContainer;
  const obj7 = {
    accessibilityLabel: combined,
    accessibilityActions: memo,
    onAccessibilityAction: callback1,
    variant: str4,
    size: "sm",
    icon: closure_9(View, obj9),
    onPress() {
      const obj = _undefined(callback[20]);
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
      }
    },
    onLongPress,
    hitSlop
  };
  str4 = "tertiary";
  const IconButton = tmp4(tmp3[18]).IconButton;
  if (hasNameplate) {
    str4 = "secondary-overlay";
  }
  obj9 = { style: tmp.iconContainer, children: items4 };
  items4 = [, ];
  const obj10 = { icon: tmp14Result, hasBadge: tmp10, badgeStyle: tmp.overdueReminderDot };
  const obj8 = { children: closure_8(IconButton, obj7) };
  items4[0] = closure_8(require("YouBarButton").YouBarButtonIcon, obj10);
  const obj11 = { style: animatedStyle, children: closure_8(require("native").Badge, { value }) };
  View = tmp2(tmp3[8]).View;
  items4[1] = closure_8(View, obj11);
  return closure_8(YouBarButtonContainer, obj8);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx");

export default memoResult;
