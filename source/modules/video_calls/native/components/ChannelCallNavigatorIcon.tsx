// Module ID: 10655
// Function ID: 83148
// Name: ChannelCallNavigatorIcon
// Dependencies: []
// Exports: default

// Module 10655 (ChannelCallNavigatorIcon)
importAll(dependencyMap[0]);
({ View: closure_3, StyleSheet: closure_4 } = arg1(dependencyMap[1]));
const resetFocusTimer = arg1(dependencyMap[2]).resetFocusTimer;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { pressableContainer: { marginHorizontal: 4 } };
obj = { borderRadius: importDefault(dependencyMap[6]).radii.lg };
obj.pressable = obj;
const obj1 = { subheaderBody: null, shouldShowExpressiveModal: "db11ea9da81d79144310eac53428fbe9", FITNESS: "CircleErrorIcon-primary", colorBox: "png", canSort: 128, routingFailures: "top", 1415883350: "lg", borderRadius: importDefault(dependencyMap[6]).radii.lg, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.container = obj1;
const obj2 = { 9223372036854775807: 64, 9223372036854775807: 64, fontFamily: arg1(dependencyMap[3]).Fonts.PRIMARY_SEMIBOLD, color: importDefault(dependencyMap[6]).colors.WHITE };
obj.text = obj2;
obj.disabled = { opacity: 0.5 };
const tmp4 = arg1(dependencyMap[4]);
obj.iconColor = { color: importDefault(dependencyMap[6]).colors.ICON_SUBTLE };
let closure_8 = obj.createStyles(obj);
const obj3 = { color: importDefault(dependencyMap[6]).colors.ICON_SUBTLE };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigatorIcon.tsx");

export default function ChannelCallNavigatorIcon(disableBackground) {
  let accessibilityLabel;
  let children;
  let disabled;
  let membersCount;
  let source;
  let theme;
  ({ onPress: closure_0, membersCount, disabled, theme } = disableBackground);
  ({ source, accessibilityLabel, children } = disableBackground);
  if (theme === undefined) {
    theme = "dark";
  }
  let flag = disableBackground.disableBackground;
  if (flag === undefined) {
    flag = true;
  }
  const IconComponent = disableBackground.IconComponent;
  const tmp = callback2();
  let obj = { style: tmp.pressableContainer };
  obj = {
    accessibilityRole: "button",
    accessibilityLabel,
    disabled,
    style: tmp.pressable,
    onPress() {
      if (null != callback2) {
        callback2();
      }
      callback();
    }
  };
  obj = {};
  const items = [tmp.container, disableBackground.containerStyle, ];
  if (disabled) {
    disabled = tmp.disabled;
  }
  items[2] = disabled;
  obj.style = items;
  let obj3 = arg1(dependencyMap[8]);
  let tmp5 = null;
  if (obj3.isThemeDark(theme)) {
    tmp5 = null;
    if (!flag) {
      const obj1 = { blurTheme: "dark", style: absoluteFill.absoluteFill };
      tmp5 = callback(importDefault(dependencyMap[9]), obj1);
    }
  }
  const items1 = [tmp5, , ];
  if (null != IconComponent) {
    const obj2 = { color: tmp.iconColor.color, size: "sm" };
    let tmp13 = callback(IconComponent, obj2);
  } else {
    obj3 = { source, color: tmp.iconColor.color, size: arg1(dependencyMap[10]).Icon.Sizes.SMALL_20 };
    tmp13 = callback(arg1(dependencyMap[10]).Icon, obj3);
  }
  items1[1] = tmp13;
  let tmp15 = null != membersCount;
  if (tmp15) {
    tmp15 = membersCount > 0;
  }
  if (tmp15) {
    const obj4 = { style: tmp.text, children: membersCount };
    tmp15 = callback(arg1(dependencyMap[10]).LegacyText, obj4);
  }
  items1[2] = tmp15;
  obj.children = items1;
  const items2 = [closure_7(closure_3, obj), children];
  obj.children = items2;
  obj.children = closure_7(arg1(dependencyMap[7]).PressableOpacity, obj);
  return callback(closure_3, obj);
};
