// Module ID: 18455
// Function ID: 18456
// Name: YouBarNotificationsButton
// Dependencies: [19, 17, 10191, 17062, 21, 5014, 575, 18456, 5095, 5637, 504, 5260, 11150, 10192, 1113, 9208, 18452, 8028, 1187, 5199, 2]

// Module 18455 (YouBarNotificationsButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import spring from "spring" /* 5637 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 10191 */;
import YouBarConstants from "YouBarConstants" /* 17062 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
  let items2;
  let obj8;
  let overdueMessageReminderCount;
  let str;
  let str4;
  hasNameplate = hasNameplate.hasNameplate;
  let onLongPress;
  const tmp = closure_10();
  const value = onLongPress(18456)().value;
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
  let obj2 = { withSpring: require("spring").withSpring, badgeCount: value, YOU_BAR_SPRING_CONFIG, tokens: onLongPress(575) };
  fn.__closure = obj2;
  fn.__workletHash = 11181198364048;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let items = [SavedMessagesStore];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  const tmp2 = onLongPress;
  onLongPress = react.useCallback(() => {
    const obj = _undefined(dependencyMap[11]);
    const result = obj.triggerHapticFeedback(_undefined(dependencyMap[11]).HapticFeedbackTypes.SOFT);
    const obj2 = _undefined(dependencyMap[12]);
    obj2.showForLaterModal(_undefined(dependencyMap[13]).SavedMessageSortTypes.BOOKMARK);
  }, []);
  const items1 = [onLongPress];
  const memo = react.useMemo(() => {
    let intl;
    const obj = { name: "open-bookmarks", label: intl.string(_undefined(dependencyMap[14]).t["2pAkDA"]) };
    intl = _undefined(dependencyMap[14]).intl;
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
  const BellIcon = tmp4(9208).BellIcon;
  if (hasNameplate) {
    str = "white";
  }
  const tmp11Result = closure_8(BellIcon, obj4);
  let intl = tmp4(1113).intl;
  const formatToPlainStringResult = intl.formatToPlainString(require("intl").t.kedGua, { count: value });
  let combined = formatToPlainStringResult;
  if (stateFromStores > 0 && 0 === value) {
    const intl2 = tmp4(1113).intl;
    const _HermesInternal = HermesInternal;
    const obj5 = { count: stateFromStores };
    combined = "" + formatToPlainStringResult + ", " + intl2.formatToPlainString(tmp4(1113).t.yBmFPA, obj5);
  }
  const YouBarButtonContainer = tmp4(18452).YouBarButtonContainer;
  const obj6 = {
    accessibilityLabel: combined,
    accessibilityActions: memo,
    onAccessibilityAction: callback1,
    variant: str4,
    size: "sm",
    icon: closure_9(View, obj8),
    onPress() {
      const obj = _undefined(dependencyMap[19]);
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
      }
    },
    onLongPress,
    hitSlop
  };
  str4 = "secondary-overlay";
  const IconButton = tmp4(8028).IconButton;
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
  View = tmp2(5095).View;
  items2[1] = closure_8(View, obj10);
  return closure_8(YouBarButtonContainer, obj7);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx");

export default memoResult;
