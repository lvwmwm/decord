// Module ID: 18737
// Function ID: 18738
// Name: YouBarNotificationsButton
// Dependencies: [19, 17, 10369, 17322, 21, 5141, 575, 18738, 1652, 5771, 504, 5384, 11337, 10370, 1113, 9353, 18734, 8168, 1187, 5323, 2]

// Module 18737 (YouBarNotificationsButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useNotificationsTabBadgeDefault from "useNotificationsTabBadge" /* 18738 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 10369 */;
import YouBarConstants from "YouBarConstants" /* 17322 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let YOU_BAR_BUTTON_ICON_SIZE;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp2;
const _modDef1652 = tmp2(1652);
let View = react_native.View;
({ YOU_BAR_SPRING_CONFIG: metroRequire, YOU_BAR_BUTTON_HIT_SLOP: metroImportDefault, YOU_BAR_BUTTON_ICON_SIZE } = YouBarConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, iconContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, overdueReminderDot: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = { code: "(function YouBarNotificationsButtonTsx1(){let[withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens]=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};})" };
const memoResult = react.memo(function YouBarNotificationsButton(hasNameplate) {
  let items4;
  let obj5;
  let overdueMessageReminderCount;
  let str;
  let str4;
  let tmp10;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  hasNameplate = hasNameplate.hasNameplate;
  let onLongPress;
  const tmp = closure_10();
  const value = useNotificationsTabBadgeDefault().value;
  let items = [closure_11, , , , ];
  const useAnimatedStyle = onLongPress(1652).useAnimatedStyle;
  onLongPress(1652);
  items[1] = onLongPress(5771).withSpring;
  items[2] = value;
  items[3] = closure_6;
  items[4] = nativeDefault;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  class YouBarNotificationsButtonTsx1 {
    constructor() {
      let items;
      let num2;
      let num3;
      let num = 0;
      if (c1 > 0) {
        num = 1;
      }
      const obj = { transform: items, marginLeft: _undefined(num2, c2), opacity: _undefined(num3, c2) };
      items = [{ scaleX: _undefined(num, c2) }];
      num2 = 0;
      ({ scaleX: _undefined(num, c2) });
      if (c1 > 0) {
        num2 = _undefined.space.PX_4;
      }
      num3 = 0;
      if (c1 > 0) {
        num3 = 1;
      }
      return obj;
    }
  }
  const items1 = [tmp7, tmp8, tmp9, tmp10];
  YouBarNotificationsButtonTsx1.__closure = items1;
  YouBarNotificationsButtonTsx1.__workletHash = 35233906729;
  YouBarNotificationsButtonTsx1.__initData = tmp6;
  const animatedStyle = useAnimatedStyle(YouBarNotificationsButtonTsx1);
  const items2 = [SavedMessagesStore];
  const tmp4Result = onLongPress(504);
  const stateFromStores = tmp4Result.useStateFromStores(items2, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  onLongPress = react.useCallback(() => {
    const obj = callback(dependencyMap[11]);
    const result = obj.triggerHapticFeedback(callback(dependencyMap[11]).HapticFeedbackTypes.SOFT);
    const obj2 = callback(dependencyMap[12]);
    obj2.showForLaterModal(callback(dependencyMap[13]).SavedMessageSortTypes.BOOKMARK);
  }, []);
  const items3 = [onLongPress];
  const memo = react.useMemo(() => {
    let intl;
    const obj = { name: "open-bookmarks", label: intl.string(callback(dependencyMap[14]).t["2pAkDA"]) };
    intl = callback(dependencyMap[14]).intl;
    const items = [obj];
    return items;
  }, []);
  const callback1 = react.useCallback((nativeEvent) => {
    if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
      callback();
    }
  }, items3);
  let obj = { size: "custom", style: tmp.icon, color: str };
  str = undefined;
  const BellIcon = tmp4(9353).BellIcon;
  if (hasNameplate) {
    str = "white";
  }
  const tmp17Result = closure_8(BellIcon, obj);
  let intl = tmp4(1113).intl;
  const formatToPlainStringResult = intl.formatToPlainString(onLongPress(1113).t.kedGua, { count: value });
  let combined = formatToPlainStringResult;
  if (stateFromStores > 0 && 0 === value) {
    const intl2 = tmp4(1113).intl;
    let obj2 = { count: stateFromStores };
    const _HermesInternal = HermesInternal;
    combined = "" + formatToPlainStringResult + ", " + intl2.formatToPlainString(tmp4(1113).t.yBmFPA, obj2);
  }
  const YouBarButtonContainer = tmp4(18734).YouBarButtonContainer;
  const obj3 = {
    accessibilityLabel: combined,
    accessibilityActions: memo,
    onAccessibilityAction: callback1,
    variant: str4,
    size: "sm",
    icon: closure_9(View, obj5),
    onPress() {
      const obj = callback(dependencyMap[19]);
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
      }
    },
    onLongPress,
    hitSlop
  };
  str4 = "secondary-overlay";
  const IconButton = tmp4(8168).IconButton;
  if (!hasNameplate) {
    let str5 = "tertiary";
    if (value > 0) {
      str5 = "secondary";
    }
    str4 = str5;
  }
  obj5 = { style: tmp.iconContainer, children: items4 };
  items4 = [, ];
  const obj4 = { children: closure_8(IconButton, obj3) };
  const obj6 = { icon: tmp17Result, hasBadge: stateFromStores > 0 && 0 === value, badgeStyle: tmp.overdueReminderDot };
  items4[0] = closure_8(onLongPress(18734).YouBarButtonIcon, obj6);
  const obj7 = { style: animatedStyle, children: closure_8(onLongPress(1187).Badge, { value }) };
  View = _modDef1652.View;
  items4[1] = closure_8(View, obj7);
  return closure_8(YouBarButtonContainer, obj4);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx");

export default memoResult;
