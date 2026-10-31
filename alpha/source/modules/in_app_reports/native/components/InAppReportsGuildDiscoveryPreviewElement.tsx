// Module ID: 15159
// Function ID: 15160
// Name: InAppReportsGuildDiscoveryPreviewElement
// Dependencies: [19, 17, 5015, 21, 5014, 575, 7148, 504, 5011, 5624, 1113, 6957, 4877, 2]
// Exports: default

// Module 15159 (InAppReportsGuildDiscoveryPreviewElement)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import GuildRecordUtils from "GuildRecordUtils" /* 4877 */;
import ColorUtils from "ColorUtils" /* 5011 */;
import Text_Text from "Text/Text" /* 5624 */;
import GuildIconDefault from "GuildIcon" /* 6957 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7148 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: obj2, title: { textTransform: "uppercase", lineHeight: 16, marginBottom: 8 }, itemContainer: obj3, guildInfo: { display: "flex", flexDirection: "row", alignItems: "center" }, guildName: { lineHeight: 18, marginStart: 8 }, guildIcon: size };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
size = { borderRadius: nativeDefault.radii.xs, width: 18, height: 18 };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildDiscoveryPreviewElement.tsx");

export default function GuildDiscoveryPreviewElement(guild) {
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj7;
  let obj9;
  let useReducedMotion;
  guild = guild.guild;
  const tmp = closure_7();
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("InAppReportsGuildDiscoveryPreview", "text-xs/bold");
  const items = [AccessibilityStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj4 = { style: tmp.container, children: items2 };
  const obj3 = ColorUtils;
  const obj5 = { style: items1, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: intl.string(intl2.t.nTe4HC) };
  items1 = [tmp.title, typeConsolidationEyebrow.style];
  const hexWithOpacityResult = obj3.hexWithOpacity(tmp.borderColor.color, 0.08);
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items2 = [hasOwnProperty(Text, obj5), ];
  const obj6 = { style: items3, children: metroRequire(View, obj7) };
  items3 = [tmp.itemContainer, { borderColor: hexWithOpacityResult }];
  obj7 = { style: tmp.guildInfo, children: items4 };
  const obj8 = { style: tmp.guildIcon, guild: obj9.fromClientDiscoverableGuild(guild), animate: !stateFromStores };
  const tmp5 = GuildIconDefault;
  obj9 = GuildRecordUtils;
  items4 = [hasOwnProperty(tmp5, obj8), ];
  const obj10 = { style: tmp.guildName, variant: "text-sm/medium", color: "text-default", children: guild.name };
  items4[1] = hasOwnProperty(Text_Text.Text, obj10);
  items2[1] = hasOwnProperty(View, obj6);
  return metroRequire(View, obj4);
};
