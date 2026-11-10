// Module ID: 15468
// Function ID: 15469
// Name: InAppReportsGuildPreviewElement
// Dependencies: [19, 17, 21, 5142, 575, 5139, 5753, 1113, 7023, 2]
// Exports: default

// Module 15468 (InAppReportsGuildPreviewElement)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import ColorUtils from "ColorUtils" /* 5139 */;
import Text_Text from "Text/Text" /* 5753 */;
import GuildIcon from "GuildIcon" /* 7023 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: obj2, title: { lineHeight: 16, marginBottom: 8 }, guildContainer: obj3, guildInfo: { marginLeft: 8 } };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 12 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx");

export default function GuildPreview(guild) {
  let intl;
  let items;
  let items1;
  let items2;
  guild = guild.guild;
  const tmp = closure_6();
  const obj2 = { style: tmp.container, children: items };
  const obj = ColorUtils;
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "body-sm/medium", children: intl.string(intl2.t["0ox7Hq"]) };
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items = [React3(Text, obj3), ];
  const obj4 = { style: items1, children: items2 };
  items1 = [tmp.guildContainer, { borderColor: hexWithOpacityResult }];
  const obj5 = { size: GuildIcon.GuildIconSizes.LARGE, guild };
  const tmp3 = GuildIconDefault;
  items2 = [React3(tmp3, obj5), ];
  const obj6 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", style: tmp.guildInfo, children: guild.name };
  items2[1] = React3(Text_Text.Text, obj6);
  items[1] = hasOwnProperty(View, obj4);
  return hasOwnProperty(View, obj2);
};
