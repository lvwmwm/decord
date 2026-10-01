// Module ID: 12462
// Function ID: 12463
// Name: InAppReportsGuildPreviewElement
// Dependencies: [19, 17, 21, 4836, 576, 6400, 4683, 4832, 1115, 5896, 2]
// Exports: default

// Module 12462 (InAppReportsGuildPreviewElement)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import Text_Text from "Text/Text" /* 4832 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6400 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
  let items1;
  let items2;
  let items3;
  let stringResult;
  let title;
  guild = guild.guild;
  const tmp = closure_6();
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("InAppReportsGuildPreview", "text-xs/bold");
  const obj3 = { style: tmp.container, children: items1 };
  const obj2 = ColorUtils;
  const hexWithOpacityResult = obj2.hexWithOpacity(tmp.borderColor.color, 0.08);
  const Text = Text_Text.Text;
  if (null != typeConsolidationEyebrow.style) {
    const items = [tmp.title, typeConsolidationEyebrow.style];
    title = items;
  } else {
    title = tmp.title;
  }
  const obj4 = { style: title, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: stringResult };
  if (null != typeConsolidationEyebrow.style) {
    const intl2 = tmp2(1115).intl;
    stringResult = intl2.string(tmp2(1115).t["0ox7Hq"]);
  } else {
    const intl = tmp2(1115).intl;
    const str = intl.string(intl3.t["0ox7Hq"]);
    stringResult = str.toUpperCase();
  }
  items1 = [React3(Text, obj4), ];
  const obj5 = { style: items2, children: items3 };
  items2 = [tmp.guildContainer, { borderColor: hexWithOpacityResult }];
  const obj6 = { size: GuildIcon.GuildIconSizes.LARGE, guild };
  const tmp10 = GuildIconDefault;
  items3 = [React3(tmp10, obj6), ];
  const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.guildInfo, children: guild.name };
  items3[1] = React3(Text_Text.Text, obj7);
  items1[1] = hasOwnProperty(View, obj5);
  return hasOwnProperty(View, obj3);
};
