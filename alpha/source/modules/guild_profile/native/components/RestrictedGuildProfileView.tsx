// Module ID: 9279
// Function ID: 9280
// Name: RestrictedGuildProfileView
// Dependencies: [19, 17, 21, 9280, 5248, 5591, 575, 5582, 6951, 5619, 1114, 2]
// Exports: default

// Module 9279 (RestrictedGuildProfileView)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import useThemeDefault from "useTheme" /* 5248 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import useToken from "useToken" /* 5591 */;
import Text_Text from "Text/Text" /* 5619 */;
import GuildIcon from "GuildIcon" /* 6951 */;
import GuildProfileView from "GuildProfileView" /* 9280 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/RestrictedGuildProfileView.tsx");

export default function RestrictedGuildProfileView() {
  let intl;
  let intl2;
  let items;
  let items1;
  let obj5;
  let obj7;
  let obj8;
  let tmp5;
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
  obj7 = { style: styles.avatarBackground, children: React3(tmp5, obj8) };
  obj8 = { size: GuildIcon.GuildIconSizes.XXLARGE, value: "?", selected: false, textStyle: styles.restrictedAcronym };
  tmp5 = GuildIconDefault;
  items[1] = React3(View, obj6);
  const obj9 = { style: styles.body, children: items1 };
  const obj10 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl3.t.wZmueu) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items1 = [React3(Text, obj10), ];
  const obj11 = { variant: "text-md/medium", color: "text-subtle", children: intl2.string(intl3.t["8mfCqY"]) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items1[1] = React3(Text2, obj11);
  items[2] = hasOwnProperty(View, obj9);
  return hasOwnProperty(View, obj3);
};
