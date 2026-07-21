// Module ID: 14996
// Function ID: 112948
// Dependencies: []

// Module 14996
let YOU_BAR_BUTTON_ICON_SIZE;
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ YOU_BAR_SPRING_CONFIG: closure_6, YOU_BAR_BUTTON_HIT_SLOP: closure_7, YOU_BAR_BUTTON_ICON_SIZE } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_10 = arg1(dependencyMap[5]).createStyles({ icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, iconContainer: { ty: 8, c: null, o: "\u270A\u{1F3FF}" } });
let closure_11 = { code: "function YouBarNotificationsButtonTsx1(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}" };
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function YouBarNotificationsButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  let importDefault;
  let dependencyMap;
  const tmp = callback2();
  const value = importDefault(dependencyMap[6])().value;
  const arg1 = value;
  let obj = arg1(dependencyMap[7]);
  const fn = function u() {
    let obj = {};
    obj = {};
    let num = 0;
    if (value > 0) {
      num = 1;
    }
    obj.scaleX = value(callback[8]).withSpring(num, closure_6);
    const items = [obj];
    obj.transform = items;
    const obj3 = value(callback[8]);
    let num2 = 0;
    if (value > 0) {
      num2 = enabled(callback[9]).space.PX_4;
    }
    obj.marginLeft = value(callback[8]).withSpring(num2, closure_6);
    const obj4 = value(callback[8]);
    let num4 = 0;
    if (value > 0) {
      num4 = 1;
    }
    obj.opacity = value(callback[8]).withSpring(num4, closure_6);
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[8]).withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG: closure_6, tokens: importDefault(dependencyMap[9]) };
  fn.__closure = obj;
  fn.__workletHash = 11181198364048;
  fn.__initData = closure_11;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = importDefault(dependencyMap[10]);
  let enabled = obj2.useConfig({ location: "YouBar" }).enabled;
  if (enabled) {
    let tmp5 = importDefault(dependencyMap[11])();
    if (!tmp5) {
      tmp5 = savedMessageCount.getSavedMessageCount() > 0;
    }
    enabled = tmp5;
  }
  importDefault = enabled;
  const items = [enabled];
  const callback = importAllResult.useCallback(() => {
    if (enabled) {
      let obj = value(callback[12]);
      const result = obj.triggerHapticFeedback(value(callback[12]).HapticFeedbackTypes.SOFT);
      const obj2 = enabled(callback[13]);
      obj = { presentation: "modal" };
      obj2.pushLazy(value(callback[15])(callback[14], callback.paths), {}, "for-later-modal", obj);
    }
  }, items);
  dependencyMap = callback;
  const items1 = [enabled];
  const items2 = [callback];
  const memo = importAllResult.useMemo(() => {
    const items = [];
    if (enabled) {
      const obj = { name: "open-bookmarks" };
      const intl = value(callback[16]).intl;
      obj.label = intl.string(value(callback[16]).t.2pAkDA);
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
  const intl = arg1(dependencyMap[16]).intl;
  obj1.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[16]).t.kedGua, { count: value });
  obj1.accessibilityActions = memo;
  obj1.onAccessibilityAction = callback1;
  let str = "tertiary";
  if (hasNameplate) {
    str = "secondary-overlay";
  }
  obj1.variant = str;
  obj1.size = "sm";
  obj2 = { style: tmp.iconContainer };
  const obj3 = { size: "custom", style: tmp.icon };
  let str2;
  if (hasNameplate) {
    str2 = "white";
  }
  obj3.color = str2;
  const items3 = [callback(arg1(dependencyMap[19]).BellIcon, obj3), ];
  const obj4 = { style: animatedStyle, children: callback(arg1(dependencyMap[20]).Badge, { value }) };
  items3[1] = callback(importDefault(dependencyMap[7]).View, obj4);
  obj2.children = items3;
  obj1.icon = closure_9(View, obj2);
  obj1.onPress = function onPress() {
    let obj = value(callback[21]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      obj = { inNestedNavigator: true };
      rootNavigationRef.navigate("notifications", obj);
    }
  };
  obj1.onLongPress = callback;
  obj1.hitSlop = closure_7;
  obj.children = callback(arg1(dependencyMap[18]).IconButton, obj1);
  return callback(arg1(dependencyMap[17]).YouBarButtonContainer, obj);
});
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx");

export default memoResult;
