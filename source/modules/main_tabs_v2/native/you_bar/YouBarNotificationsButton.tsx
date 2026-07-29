// Module ID: 15263
// Function ID: 15264
// Dependencies: [19, 17, 9553, 14125, 21, 4189, 15264, 4050, 4599, 712, 9556, 9557, 4158, 9936, 9554, 1236, 15262, 6682, 10229, 1297, 4041, 2]

// Module 15263
import importAllResult from "Button";
import { View } from "IconButton";
import getTimeSafe from "getTimeSafe";
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let YOU_BAR_BUTTON_ICON_SIZE;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ YOU_BAR_SPRING_CONFIG: closure_6, YOU_BAR_BUTTON_HIT_SLOP: error, YOU_BAR_BUTTON_ICON_SIZE } = CONNECTION_BANNER_HEIGHT);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, iconContainer: { display: "flex", flexDirection: "row", alignItems: "center" } });
let closure_11 = { code: "function YouBarNotificationsButtonTsx1(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}" };
const memoResult = importAllResult.memo(function YouBarNotificationsButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  let _require;
  let enabled;
  let callback;
  const tmp = callback();
  const value = enabled(callback[6])().value;
  _require = value;
  let obj = _require(callback[7]);
  const fn = function _() {
    let obj = _undefined(callback[8]);
    let num = 0;
    if (_undefined > 0) {
      num = 1;
    }
    obj = { transform: null, marginLeft: null, opacity: null };
    obj = { scaleX: obj.withSpring(num, outer1_6) };
    const items = [obj];
    obj[0] = items;
    let tmpResult = tmp(tmp2[8]);
    let num2 = 0;
    if (_undefined > 0) {
      num2 = enabled(tmp2[9]).space.PX_4;
    }
    obj[1] = tmpResult.withSpring(num2, outer1_6);
    tmpResult = tmp(tmp2[8]);
    let num3 = 0;
    if (_undefined > 0) {
      num3 = 1;
    }
    obj[2] = tmpResult.withSpring(num3, outer1_6);
    return obj;
  };
  obj = { withSpring: _require(callback[8]).withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG: closure_6, tokens: enabled(callback[9]) };
  fn.__closure = obj;
  fn.__workletHash = 11181198364048;
  fn.__initData = closure_11;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = enabled(callback[10]);
  enabled = obj2.useConfig({ location: "YouBar" }).enabled;
  if (enabled) {
    let tmp6 = tmp2(tmp3[11])();
    if (!tmp6) {
      tmp6 = savedMessageCount.getSavedMessageCount() > 0;
    }
    enabled = tmp6;
  }
  let items = [enabled];
  callback = importAllResult.useCallback(() => {
    if (enabled) {
      const result = _undefined(callback[12]).triggerHapticFeedback(_undefined(callback[12]).HapticFeedbackTypes.SOFT);
      const obj = _undefined(callback[12]);
      _undefined(callback[13]).showForLaterModal(_undefined(callback[14]).SavedMessageSortTypes.BOOKMARK);
      const obj2 = _undefined(callback[13]);
    }
  }, items);
  const items1 = [enabled];
  const items2 = [callback];
  const memo = importAllResult.useMemo(() => {
    const items = [];
    if (enabled) {
      const obj = { name: "open-bookmarks", label: null };
      const intl = _undefined(callback[15]).intl;
      obj[1] = intl.string(_undefined(callback[15]).t["2pAkDA"]);
      items.push(obj);
    }
    return items;
  }, items1);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
      callback();
    }
  }, items2);
  obj = { accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, variant: null, size: "sm", icon: null, onPress: null, onLongPress: null, hitSlop: null };
  let intl = tmp4(tmp3[15]).intl;
  obj[0] = intl.formatToPlainString(_require(callback[15]).t.kedGua, { count: value });
  obj[1] = memo;
  obj[2] = callback1;
  let str = "tertiary";
  if (hasNameplate) {
    str = "secondary-overlay";
  }
  obj[3] = str;
  const obj1 = { style: tmp.iconContainer, children: null };
  obj2 = { size: "custom", style: tmp.icon, color: null };
  let str2;
  if (hasNameplate) {
    str2 = "white";
  }
  const obj3 = { children: null };
  obj2[2] = str2;
  const items3 = [closure_8(_require(callback[18]).BellIcon, obj2), ];
  const obj4 = { style: animatedStyle, children: null };
  obj4[1] = closure_8(_require(callback[19]).Badge, { value });
  items3[1] = closure_8(enabled(callback[7]).View, obj4);
  obj1[1] = items3;
  obj[5] = closure_9(View, obj1);
  obj[6] = function onPress() {
    const rootNavigationRef = _undefined(callback[20]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
    }
  };
  obj[7] = callback;
  obj[8] = closure_7;
  obj3[0] = closure_8(_require(callback[17]).IconButton, obj);
  return closure_8(_require(callback[16]).YouBarButtonContainer, obj3);
});
let result = require("getTimeSafe").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx");

export default memoResult;
