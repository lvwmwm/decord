// Module ID: 10538
// Function ID: 82339
// Name: ActionButton
// Dependencies: []
// Exports: NotifiedActionButton, PrimaryActionButton, ToggledActionButton

// Module 10538 (ActionButton)
class ActionButton {
  constructor(arg0) {
    flag = global.appearsDisabled;
    if (flag === undefined) {
      flag = false;
    }
    ({ backgroundColor, imageStyle, onPress: closure_0, showBadge, accessibilityLabel, accessibilityState, source } = global);
    if (showBadge === undefined) {
      showBadge = false;
    }
    flag2 = global.isSmallSize;
    if (flag2 === undefined) {
      flag2 = false;
    }
    ({ lottieComponent, IconComponent } = global);
    ({ children, lottieComponentColor } = global);
    tmp = closure_13();
    num = 12;
    if (flag2) {
      tmp3 = closure_12;
      num = 12;
      if (tmp2 < closure_12) {
        num = 6;
      }
    }
    tmp4 = flag2 ? closure_11 : WHITE;
    result = 2 * tmp4.buttonRadius;
    result1 = 2 * tmp4.badgeRadius;
    sum = tmp4.badgeRadius + tmp4.cutoutInset;
    tmp8 = jsx;
    obj = {
      accessibilityLabel,
      accessibilityRole: "button",
      accessibilityState,
      onPress() {
            callback2();
            callback();
          },
      disabled: false,
      style: obj
    };
    obj = { width: result, height: result, borderRadius: tmp4.buttonRadius };
    obj.marginHorizontal = num;
    obj1 = {};
    items = [, , ];
    items[0] = tmp.buttonContainer;
    items[1] = { width: result, height: result, borderRadius: tmp4.buttonRadius };
    obj2 = {};
    num2 = 1;
    tmp9 = jsxs;
    tmp10 = View;
    if (flag) {
      num2 = 0.25;
    }
    obj2.opacity = num2;
    items[2] = obj2;
    obj1.style = items;
    tmp11 = jsx;
    obj3 = { circleRadius: tmp4.buttonRadius, cutoutRadius: sum };
    obj3.enableCutout = showBadge;
    obj3.cutoutPositionInDegrees = 45;
    tmp12 = importDefault(dependencyMap[9]);
    if (null == backgroundColor) {
      backgroundColor = closure_9;
    }
    obj3.circleFillColor = backgroundColor;
    items1 = [, , , ];
    items1[0] = tmp11(tmp12, obj3);
    obj4 = { style: items2 };
    items2 = [, ];
    items2[0] = tmp.iconContainer;
    items2[1] = { width: result, height: result };
    tmp13 = jsx;
    tmp14 = View;
    if (null != lottieComponent) {
      tmp19 = importAll;
      obj5 = {};
      obj5.color = lottieComponentColor;
      cloneElementResult = importAll.cloneElement(lottieComponent, obj5);
    } else if (null != IconComponent) {
      tmp18 = jsx;
      obj6 = {};
      obj6.style = imageStyle;
      cloneElementResult = jsx(IconComponent, obj6);
    } else {
      tmp15 = jsx;
      tmp16 = Image;
      obj7 = {};
      obj7.source = source;
      obj7.style = imageStyle;
      cloneElementResult = jsx(Image, obj7);
    }
    obj4.children = cloneElementResult;
    items1[1] = tmp13(tmp14, obj4);
    tmp20 = null;
    if (showBadge) {
      tmp21 = jsx;
      tmp22 = View;
      obj8 = {};
      items3 = [, ];
      items3[0] = tmp.badge;
      obj9 = {};
      obj9.width = result1;
      obj9.height = result1;
      obj9.borderRadius = tmp4.badgeRadius;
      tmp23 = arg1;
      tmp24 = dependencyMap;
      obj12 = arg1(dependencyMap[9]);
      obj9.top = obj12.getBadgeTop(tmp4.badgeRadius, tmp4.buttonRadius, 45);
      obj13 = arg1(dependencyMap[9]);
      obj9.left = obj13.getBadgeLeft(tmp4.badgeRadius, tmp4.buttonRadius, 45);
      items3[1] = obj9;
      obj8.style = items3;
      tmp20 = jsx(View, obj8);
    }
    items1[2] = tmp20;
    items1[3] = children;
    obj1.children = items1;
    obj.children = tmp9(tmp10, obj1);
    return tmp8(arg1(dependencyMap[8]).PressableOpacity, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const resetFocusTimer = arg1(dependencyMap[2]).resetFocusTimer;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
let closure_9 = obj.hexWithOpacity(importDefault(dependencyMap[5]).unsafe_rawColors.WHITE, 0.24);
let closure_10 = Object.freeze({});
const frozen = Object.freeze({});
let closure_12 = 24 + 2 * frozen.buttonRadius * 5 + 96;
let obj1 = arg1(dependencyMap[6]);
obj = { buttonContainer: { position: "absolute" }, iconContainer: {}, badge: {} };
obj = { borderColor: importDefault(dependencyMap[5]).unsafe_rawColors.PRIMARY_760 };
obj.notificationArea = obj;
obj.notificationText = { lineHeight: 16 };
obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
obj.notificationAreaMentioned = obj1;
const tmp3 = arg1(dependencyMap[3]);
obj.notificationAreaUnread = { backgroundColor: importDefault(dependencyMap[5]).unsafe_rawColors.PRIMARY_600 };
let closure_13 = obj1.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[5]).unsafe_rawColors.PRIMARY_600 };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/video_calls/native/components/CallBarAction.tsx");

export const SMALL_ACTION_BUTTON_DIMENSIONS = frozen;
export { ActionButton };
export const ToggledActionButton = function ToggledActionButton(showBadge) {
  let backgroundColor;
  let disableTint;
  let isActive;
  let tintColor;
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
  let obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
  Object.setPrototypeOf(null);
  const merged = Object.assign(showBadge, obj);
  let WHITE = null;
  if (isActive) {
    WHITE = importDefault(dependencyMap[5]).unsafe_rawColors.WHITE;
  }
  const unsafe_rawColors = importDefault(dependencyMap[5]).unsafe_rawColors;
  let tmp6;
  if (!disableTint) {
    tmp6 = isActive ? unsafe_rawColors.PRIMARY_900 : unsafe_rawColors.WHITE;
  }
  obj = {};
  if (null != backgroundColor) {
    WHITE = backgroundColor;
  }
  obj.backgroundColor = WHITE;
  obj = {};
  let tmp9 = tmp6;
  if (null != tintColor) {
    tmp9 = tintColor;
  }
  obj.tintColor = tmp9;
  obj.imageStyle = obj;
  obj.accessibilityState = { selected: isActive };
  obj.isSmallSize = flag2;
  const merged1 = Object.assign(merged);
  obj["showBadge"] = flag;
  if (null != tintColor) {
    tmp6 = tintColor;
  }
  obj["lottieComponentColor"] = tmp6;
  return closure_7(ActionButton, obj);
};
export const PrimaryActionButton = function PrimaryActionButton(isSmallSize) {
  let flag = isSmallSize.isSmallSize;
  if (flag === undefined) {
    flag = false;
  }
  let obj = Object.create(null);
  obj.isSmallSize = 0;
  const merged = Object.assign(isSmallSize, obj);
  obj = { backgroundColor: importDefault(dependencyMap[5]).unsafe_rawColors.RED_400 };
  obj = { tintColor: importDefault(dependencyMap[5]).unsafe_rawColors.WHITE };
  obj.imageStyle = obj;
  obj.isSmallSize = flag;
  const merged1 = Object.assign(merged);
  return callback(ActionButton, obj);
};
export const NotifiedActionButton = function NotifiedActionButton(isMentioned) {
  isMentioned = isMentioned.isMentioned;
  let obj = Object.create(null);
  obj.notifications = 0;
  obj.isMentioned = 0;
  const merged = Object.assign(isMentioned, obj);
  const tmp3 = callback2();
  obj = {};
  obj = {};
  const merged1 = Object.assign(merged);
  const obj1 = {};
  const items = [tmp3.notificationArea, ];
  if (true !== isMentioned) {
    if (undefined !== isMentioned) {
      let notificationAreaMentioned = tmp3.notificationAreaUnread;
    }
    items[1] = notificationAreaMentioned;
    obj1.style = items;
    const obj2 = { style: tmp3.notificationText, children: isMentioned.notifications };
    obj1.children = callback(arg1(dependencyMap[10]).Text, obj2);
    obj["children"] = tmp8(tmp9, obj1);
    obj.children = tmp4(ActionButton, obj);
    return tmp4(closure_5, obj);
  }
  notificationAreaMentioned = tmp3.notificationAreaMentioned;
};
