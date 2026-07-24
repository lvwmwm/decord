// Module ID: 15167
// Function ID: 115481
// Dependencies: [31, 27, 9568, 14047, 33, 4130, 15168, 3991, 4542, 689, 9571, 9572, 4099, 9946, 9569, 1212, 15166, 7533, 10234, 1273, 3982, 2]

// Module 15167
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let YOU_BAR_BUTTON_ICON_SIZE;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
let require = arg1;
({ YOU_BAR_SPRING_CONFIG: closure_6, YOU_BAR_BUTTON_HIT_SLOP: closure_7, YOU_BAR_BUTTON_ICON_SIZE } = CONNECTION_BANNER_HEIGHT);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, iconContainer: { display: "flex", flexDirection: "row", alignItems: "center" } });
let closure_11 = { code: "function YouBarNotificationsButtonTsx1(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}" };
const memoResult = importAllResult.memo(function YouBarNotificationsButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  let enabled;
  let callback;
  const tmp = callback2();
  const value = enabled(callback[6])().value;
  const require = value;
  let obj = require(callback[7]);
  const fn = function _() {
    let obj = {};
    obj = {};
    let num = 0;
    if (closure_0 > 0) {
      num = 1;
    }
    obj.scaleX = value(callback[8]).withSpring(num, outer1_6);
    const items = [obj];
    obj.transform = items;
    const obj3 = value(callback[8]);
    let num2 = 0;
    if (closure_0 > 0) {
      num2 = enabled(callback[9]).space.PX_4;
    }
    obj.marginLeft = value(callback[8]).withSpring(num2, outer1_6);
    const obj4 = value(callback[8]);
    let num4 = 0;
    if (closure_0 > 0) {
      num4 = 1;
    }
    obj.opacity = value(callback[8]).withSpring(num4, outer1_6);
    return obj;
  };
  obj = { withSpring: require(callback[8]).withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG: closure_6, tokens: enabled(callback[9]) };
  fn.__closure = obj;
  fn.__workletHash = 11181198364048;
  fn.__initData = closure_11;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = enabled(callback[10]);
  enabled = obj2.useConfig({ location: "YouBar" }).enabled;
  if (enabled) {
    let tmp5 = enabled(callback[11])();
    if (!tmp5) {
      tmp5 = savedMessageCount.getSavedMessageCount() > 0;
    }
    enabled = tmp5;
  }
  let items = [enabled];
  callback = importAllResult.useCallback(() => {
    if (enabled) {
      const result = value(callback[12]).triggerHapticFeedback(value(callback[12]).HapticFeedbackTypes.SOFT);
      const obj = value(callback[12]);
      value(callback[13]).showForLaterModal(value(callback[14]).SavedMessageSortTypes.BOOKMARK);
      const obj2 = value(callback[13]);
    }
  }, items);
  const items1 = [enabled];
  const items2 = [callback];
  const memo = importAllResult.useMemo(() => {
    const items = [];
    if (enabled) {
      const obj = { name: "open-bookmarks" };
      const intl = value(callback[15]).intl;
      obj.label = intl.string(value(callback[15]).t["2pAkDA"]);
      items.push(obj);
    }
    return items;
  }, items1);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
      callback();
    }
  }, items2);
  obj = {};
  const obj1 = {};
  let intl = require(callback[15]).intl;
  obj1.accessibilityLabel = intl.formatToPlainString(require(callback[15]).t.kedGua, { count: value });
  obj1.accessibilityActions = memo;
  obj1.onAccessibilityAction = callback1;
  let str = "tertiary";
  if (hasNameplate) {
    str = "secondary-overlay";
  }
  obj1.variant = str;
  obj1.size = "sm";
  obj2 = { style: tmp.iconContainer };
  let obj3 = { size: "custom", style: tmp.icon };
  let str2;
  if (hasNameplate) {
    str2 = "white";
  }
  obj3.color = str2;
  const items3 = [callback(require(callback[18]).BellIcon, obj3), ];
  let obj4 = { style: animatedStyle, children: callback(require(callback[19]).Badge, { value }) };
  items3[1] = callback(enabled(callback[7]).View, obj4);
  obj2.children = items3;
  obj1.icon = closure_9(View, obj2);
  obj1.onPress = function onPress() {
    let obj = value(callback[20]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      obj = { inNestedNavigator: true };
      rootNavigationRef.navigate("notifications", obj);
    }
  };
  obj1.onLongPress = callback;
  obj1.hitSlop = closure_7;
  obj.children = callback(require(callback[17]).IconButton, obj1);
  return callback(require(callback[16]).YouBarButtonContainer, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx");

export default memoResult;
