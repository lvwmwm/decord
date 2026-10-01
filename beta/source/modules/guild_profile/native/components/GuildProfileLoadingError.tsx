// Module ID: 9222
// Function ID: 9223
// Name: GuildProfileLoadingError
// Dependencies: [19, 17, 21, 9209, 4767, 4531, 576, 5293, 8048, 4832, 1115, 5435, 2]
// Exports: default

// Module 9222 (GuildProfileLoadingError)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import useToken from "useToken" /* 4531 */;
import useThemeDefault from "useTheme" /* 4767 */;
import Text_Text from "Text/Text" /* 4832 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import Pressables from "Pressables" /* 5435 */;
import WarningIcon3 from "WarningIcon" /* 8048 */;
import GuildProfileView from "GuildProfileView" /* 9209 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileLoadingError.tsx");

export default function GuildProfileLoadingError(onRetry) {
  let WarningIcon;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let obj5;
  let obj7;
  let obj8;
  let obj9;
  onRetry = onRetry.onRetry;
  const obj = GuildProfileView;
  const styles = obj.useStyles();
  const obj3 = { style: styles.container, children: items };
  const tmp2 = useThemeDefault();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const obj4 = { style: styles.colorBanner, start: GuildProfileView.DiagonalGradient.START, end: GuildProfileView.DiagonalGradient.END, colors: obj5.getBackgroundForProfile(tmp2, token) };
  const tmp4 = LinearGradientDefault;
  obj5 = GuildProfileView;
  items = [React3(tmp4, obj4), , ];
  const obj6 = { style: styles.header, children: React3(View, obj7) };
  obj7 = { style: styles.avatarBackground, children: React3(View, obj8) };
  obj8 = { style: styles.avatarBackground, children: React3(WarningIcon, obj9) };
  obj9 = { size: "lg", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
  WarningIcon = WarningIcon3.WarningIcon;
  items[1] = React3(View, obj6);
  const obj10 = { style: styles.body, children: items1 };
  const obj11 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl4.t.DmIUGK) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items1 = [React3(Text, obj11), ];
  const obj12 = { style: styles.error, onPress: onRetry, accessibilityRole: "button", accessibilityLabel: intl2.string(intl4.t.s1fAEw), children: items2 };
  const PressableOpacity = Pressables.PressableOpacity;
  intl2 = intl4.intl;
  const obj13 = { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
  const WarningIcon2 = WarningIcon3.WarningIcon;
  items2 = [React3(WarningIcon2, obj13), ];
  const obj14 = { variant: "text-sm/normal", color: "text-feedback-warning", children: intl3.string(intl4.t.tmGHjc) };
  const Text2 = Text_Text.Text;
  intl3 = intl4.intl;
  items2[1] = React3(Text2, obj14);
  items1[1] = hasOwnProperty(PressableOpacity, obj12);
  items[2] = hasOwnProperty(View, obj10);
  return hasOwnProperty(View, obj3);
};
