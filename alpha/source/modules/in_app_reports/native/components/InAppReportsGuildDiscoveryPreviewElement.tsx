// Module ID: 12188
// Function ID: 12189
// Name: InAppReportsGuildDiscoveryPreviewElement
// Dependencies: [19, 17, 5244, 21, 5243, 575, 504, 5240, 5866, 1113, 7654, 5106, 2]
// Exports: default

// Module 12188 (InAppReportsGuildDiscoveryPreviewElement)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import GuildRecordUtils from "GuildRecordUtils" /* 5106 */;
import ColorUtils from "ColorUtils" /* 5240 */;
import Text_Text from "Text/Text" /* 5866 */;
import GuildIconDefault from "GuildIcon" /* 7654 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: obj2, title: { lineHeight: 16, marginBottom: 8 }, itemContainer: obj3, guildInfo: { display: "flex", flexDirection: "row", alignItems: "center" }, guildName: { lineHeight: 18, marginStart: 8 }, guildIcon: size };
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
  let obj6;
  let obj8;
  let useReducedMotion;
  guild = guild.guild;
  const tmp = closure_7();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = { style: tmp.container, children: items1 };
  const obj2 = ColorUtils;
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "body-sm/medium", children: intl.string(intl2.t.nTe4HC) };
  const hexWithOpacityResult = obj2.hexWithOpacity(tmp.borderColor.color, 0.08);
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1 = [hasOwnProperty(Text, obj4), ];
  const obj5 = { style: items2, children: metroRequire(View, obj6) };
  items2 = [tmp.itemContainer, { borderColor: hexWithOpacityResult }];
  obj6 = { style: tmp.guildInfo, children: items3 };
  const obj7 = { style: tmp.guildIcon, guild: obj8.fromClientDiscoverableGuild(guild), animate: !stateFromStores };
  const tmp4 = GuildIconDefault;
  obj8 = GuildRecordUtils;
  items3 = [hasOwnProperty(tmp4, obj7), ];
  const obj9 = { style: tmp.guildName, variant: "body-sm/medium", color: "text-default", children: guild.name };
  items3[1] = hasOwnProperty(Text_Text.Text, obj9);
  items1[1] = hasOwnProperty(View, obj5);
  return metroRequire(View, obj3);
};
