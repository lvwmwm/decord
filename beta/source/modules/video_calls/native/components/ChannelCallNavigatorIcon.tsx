// Module ID: 9381
// Function ID: 9382
// Name: ChannelCallNavigatorIcon
// Dependencies: [19, 17, 8829, 1074, 21, 4836, 576, 5435, 4685, 5269, 1177, 2]
// Exports: default

// Module 9381 (ChannelCallNavigatorIcon)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import shared from "shared" /* 4685 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5269 */;
import Pressables from "Pressables" /* 5435 */;
import ChannelCallStore from "ChannelCallStore" /* 8829 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let Fonts;
let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
({ View: c3, StyleSheet: closure_4 } = react_native);
const resetFocusTimer = ChannelCallStore.resetFocusTimer;
({ ThemeTypes: metroRequire, Fonts } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { pressableContainer: { marginHorizontal: 4 }, pressable: obj2, container: size, text: obj3, disabled: { opacity: 0.5 }, iconColor: obj4 };
obj2 = { borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
size = { flexDirection: "row", height: 32, width: 32, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3 = { marginLeft: 4, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.WHITE };
obj4 = { color: nativeDefault.colors.ICON_SUBTLE };
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigatorIcon.tsx");

export default function ChannelCallNavigatorIcon(disableBackground) {
  let PressableOpacity;
  let accessibilityLabel;
  let children;
  let disabled;
  let items1;
  let items2;
  let membersCount;
  let obj2;
  let source;
  let theme;
  let tmp3Result3;
  ({ onPress: require, membersCount, disabled, theme } = disableBackground);
  ({ source, accessibilityLabel, children } = disableBackground);
  if (theme === undefined) {
    const tmp = constants;
    theme = constants.ASH;
  }
  let flag = disableBackground.disableBackground;
  if (flag === undefined) {
    flag = true;
  }
  const IconComponent = disableBackground.IconComponent;
  const containerStyle = disableBackground.containerStyle;
  const tmp2 = closure_9();
  const obj = { style: tmp2.pressableContainer, children: closure_8(PressableOpacity, obj2) };
  const items = [tmp2.container, containerStyle, ];
  obj2 = {
    accessibilityRole: "button",
    accessibilityLabel,
    disabled,
    style: tmp2.pressable,
    onPress() {
      if (null != resetFocusTimer) {
        tmp();
      }
      require();
    },
    children: items2
  };
  PressableOpacity = Pressables.PressableOpacity;
  if (disabled) {
    disabled = tmp2.disabled;
  }
  const obj3 = { style: items, children: items1 };
  items[2] = disabled;
  let tmp3Result = null;
  const tmp6Result = shared;
  if (tmp6Result.isThemeDark(theme)) {
    tmp3Result = null;
    if (!flag) {
      const obj4 = { blurTheme: "dark", style: absoluteFill.absoluteFill };
      tmp3Result = tmp3(VisualEffectViewDefault, obj4);
    }
  }
  items1 = [tmp3Result, , ];
  if (null != IconComponent) {
    const obj5 = { color: tmp2.iconColor.color, size: "sm" };
    tmp3Result3 = tmp3(IconComponent, obj5);
  } else {
    const obj6 = { source, color: tmp2.iconColor.color, size: native.Icon.Sizes.SMALL_20 };
    const Icon = tmp6(1177).Icon;
    tmp3Result3 = tmp3(Icon, obj6);
  }
  items1[1] = tmp3Result3;
  let tmp3Result4 = null != membersCount && membersCount > 0;
  if (tmp3Result4) {
    const obj7 = { style: tmp2.text, children: membersCount };
    tmp3Result4 = tmp3(tmp6(1177).LegacyText, obj7);
  }
  items1[2] = tmp3Result4;
  items2 = [closure_8(closure_3, obj3), children];
  return closure_7(closure_3, obj);
};
