// Module ID: 8855
// Function ID: 8856
// Name: CallBarAction
// Dependencies: [19, 17, 8829, 21, 4683, 576, 4836, 8856, 5435, 8857, 4832, 2]
// Exports: NotifiedActionButton, PrimaryActionButton, ToggledActionButton

// Module 8855 (CallBarAction)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import ChannelCallStore from "ChannelCallStore" /* 8829 */;
import CircleWithCutoutUtils from "CircleWithCutoutUtils" /* 8857 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let rect;
let tmp2;
const CircleWithCutoutUtilsDefault = tmp2(8857);
class ActionButton {
  constructor(appearsDisabled) {
    let IconComponent;
    let accessibilityLabel;
    let accessibilityState;
    let backgroundColor;
    let children;
    let cloneElementResult;
    let imageStyle;
    let items1;
    let items2;
    let items3;
    let lottieComponent;
    let lottieComponentColor;
    let obj2;
    let showBadge;
    let source;
    let tmp11Result;
    let tmp11Result2;
    let tmp12;
    let flag = appearsDisabled.appearsDisabled;
    if (flag === undefined) {
      flag = false;
    }
    ({ backgroundColor, imageStyle, onPress: require, showBadge, accessibilityLabel, accessibilityState, source } = appearsDisabled);
    if (showBadge === undefined) {
      showBadge = false;
    }
    let flag2 = appearsDisabled.isSmallSize;
    if (flag2 === undefined) {
      flag2 = false;
    }
    ({ lottieComponent, IconComponent } = appearsDisabled);
    ({ children, lottieComponentColor } = appearsDisabled);
    const tmp = closure_13();
    let num = 12;
    if (flag2) {
      num = 12;
      if (tmp4 < closure_12) {
        num = 6;
      }
    }
    const tmp6 = flag2 ? frozen : closure_10;
    const result = 2 * tmp6.buttonRadius;
    const result1 = 2 * tmp6.badgeRadius;
    const sum = tmp6.badgeRadius + tmp6.cutoutInset;
    const items = [tmp.buttonContainer, { width: result, height: result, borderRadius: tmp6.buttonRadius }, ];
    let num2 = 1;
    const obj = {
      accessibilityLabel,
      accessibilityRole: "button",
      accessibilityState,
      onPress() {
        resetFocusTimer();
        require();
      },
      disabled: false,
      style: { width: result, height: result, borderRadius: tmp6.buttonRadius, marginHorizontal: num },
      children: tmp12(closure_5, obj2)
    };
    const PressableOpacity = Pressables.PressableOpacity;
    tmp12 = closure_8;
    if (flag) {
      num2 = 0.25;
    }
    obj2 = { style: items, children: items1 };
    items[2] = { opacity: num2 };
    const obj3 = { circleRadius: tmp6.buttonRadius, cutoutRadius: sum, enableCutout: showBadge, cutoutPositionInDegrees: 45, circleFillColor: backgroundColor };
    const tmp2Result = CircleWithCutoutUtilsDefault;
    if (null == backgroundColor) {
      backgroundColor = closure_9;
    }
    items1 = [closure_7(tmp2Result, obj3), , , ];
    const obj4 = { style: items2, children: cloneElementResult };
    items2 = [tmp.iconContainer, { width: result, height: result }];
    if (null != lottieComponent) {
      const obj5 = { color: lottieComponentColor };
      cloneElementResult = react.cloneElement(lottieComponent, obj5);
    } else if (null != IconComponent) {
      const obj6 = { style: imageStyle };
      cloneElementResult = tmp10(IconComponent, obj6);
    } else {
      const obj7 = { source, style: imageStyle };
      cloneElementResult = tmp10(closure_4, obj7);
    }
    items1[1] = closure_7(closure_5, obj4);
    let tmp10Result = null;
    if (showBadge) {
      const obj8 = { style: items3 };
      items3 = [tmp.badge, ];
      size = { width: result1, height: result1, borderRadius: tmp6.badgeRadius, top: tmp11Result.getBadgeTop(tmp6.badgeRadius, tmp6.buttonRadius, 45), left: tmp11Result2.getBadgeLeft(tmp6.badgeRadius, tmp6.buttonRadius, 45) };
      tmp11Result = CircleWithCutoutUtils;
      items3[1] = size;
      tmp11Result2 = CircleWithCutoutUtils;
      tmp10Result = tmp10(tmp13, obj8);
    }
    items1[2] = tmp10Result;
    items1[3] = children;
    return closure_7(PressableOpacity, obj);
  }
}
({ Image: closure_4, View: hasOwnProperty } = react_native);
const resetFocusTimer = ChannelCallStore.resetFocusTimer;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24);
let closure_10 = Object.freeze({ buttonRadius: 28, badgeRadius: 6, cutoutInset: 3 });
const frozen = Object.freeze({ buttonRadius: 24, badgeRadius: 4, cutoutInset: 2 });
let closure_12 = 24 + 2 * frozen.buttonRadius * 5 + 96;
let createStyles = createStyles_mod;
let obj = { buttonContainer: { position: "absolute" }, iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center" }, badge: { backgroundColor: "white", position: "absolute" }, notificationArea: rect, notificationText: { lineHeight: 16 }, notificationAreaMentioned: obj2, notificationAreaUnread: obj3 };
rect = { position: "absolute", top: -4, right: -4, height: 24, minWidth: 24, paddingHorizontal: 4, borderRadius: 12, borderWidth: 4, borderColor: nativeDefault.unsafe_rawColors.PRIMARY_760, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/components/CallBarAction.tsx");

export const SMALL_ACTION_BUTTON_DIMENSIONS = frozen;
export { ActionButton };
export const ToggledActionButton = function ToggledActionButton(showBadge) {
  let backgroundColor;
  let disableTint;
  let isActive;
  let tintColor;
  let tmp5;
  let tmp8;
  ({ isActive, disableTint } = showBadge);
  if (disableTint === undefined) {
    disableTint = false;
  }
  let flag = showBadge.showBadge;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = showBadge.isSmallSize;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ backgroundColor, tintColor } = showBadge);
  const merged = Object.assign(showBadge, Object.assign({ isActive: 0, disableTint: 0, showBadge: 0, isSmallSize: 0, backgroundColor: 0, tintColor: 0 }));
  let WHITE = null;
  if (isActive) {
    WHITE = nativeDefault.unsafe_rawColors.WHITE;
  }
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (!disableTint) {
    tmp5 = isActive ? unsafe_rawColors.PRIMARY_900 : unsafe_rawColors.WHITE;
  }
  const tmp6 = metroImportDefault;
  const tmp7 = ActionButton;
  if (backgroundColor == null) {
    backgroundColor = WHITE;
  }
  const obj = { backgroundColor, imageStyle: { tintColor: tmp8 }, accessibilityState: { selected: isActive }, isSmallSize: flag2, showBadge: flag, lottieComponentColor: tintColor };
  tmp8 = tintColor;
  if (tintColor == null) {
    tmp8 = tmp5;
  }
  const merged1 = Object.assign(merged);
  if (tintColor == null) {
    tintColor = tmp5;
  }
  return tmp6(tmp7, obj);
};
export const PrimaryActionButton = function PrimaryActionButton(isSmallSize) {
  let flag = isSmallSize.isSmallSize;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(isSmallSize, Object.assign({ isSmallSize: 0 }));
  const obj = { backgroundColor: nativeDefault.unsafe_rawColors.RED_400, imageStyle: { tintColor: nativeDefault.unsafe_rawColors.WHITE }, isSmallSize: flag };
  ({ tintColor: nativeDefault.unsafe_rawColors.WHITE });
  const merged1 = Object.assign(merged);
  return metroImportDefault(ActionButton, obj);
};
export const NotifiedActionButton = function NotifiedActionButton(isMentioned) {
  let obj4;
  isMentioned = isMentioned.isMentioned;
  const notifications = isMentioned.notifications;
  const merged = Object.assign(isMentioned, Object.assign({ notifications: 0, isMentioned: 0 }));
  const tmp2 = closure_13();
  const obj = {};
  const merged1 = Object.assign(merged);
  const items = [tmp2.notificationArea, ];
  const tmp5 = ActionButton;
  if (true !== isMentioned) {
    let notificationAreaMentioned;
    if (undefined !== isMentioned) {
      notificationAreaMentioned = tmp2.notificationAreaUnread;
    }
    const obj2 = { children: metroImportDefault(tmp5, obj) };
    items[1] = notificationAreaMentioned;
    const obj3 = { style: items, children: metroImportDefault(Text_Text.Text, obj4) };
    obj4 = { style: tmp2.notificationText, variant: "text-xs/semibold", color: "text-overlay-light", children: notifications };
    obj.children = metroImportDefault(hasOwnProperty, obj3);
    return metroImportDefault(hasOwnProperty, obj2);
  }
  notificationAreaMentioned = tmp2.notificationAreaMentioned;
};
