// Module ID: 15306
// Function ID: 15307
// Name: DevToolsGuildTagBadgesScreen
// Dependencies: [32, 19, 17, 7386, 21, 4836, 576, 5279, 4832, 5281, 13460, 2]
// Exports: default

// Module 15306 (DevToolsGuildTagBadgesScreen)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import badges_GuildBadge from "badges/GuildBadge" /* 13460 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildTagConstants from "GuildTagConstants" /* 7386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, value;

let GUILD_TAG_BADGE_PALETTE_PRESETS;
let GuildTagBadgeKind;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let react = react_mod;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: metroRequire, GUILD_TAG_BADGE_PALETTE_PRESETS, GuildTagBadgeKind } = GuildTagConstants);
({ jsxs: metroImportDefault, jsx: metroImportAll } = Fragment);
const entries = Object.entries(GuildTagBadgeKind);
const found = entries.filter((item) => {
  let tmp;
  [tmp] = item;
  return isNaN(Number(tmp));
});
let closure_9 = found.map((item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  return { name, value };
});
let items = [
  { label: "Untinted", primary: "dispatch", secondary: "i" },
  ...GUILD_TAG_BADGE_PALETTE_PRESETS.map((primary, index) => {
    const obj = { label: "P" + index + 1, primary: primary.primary, secondary: primary.secondary };
    return obj;
  })
];
let closure_11 = [24, 48, 72];
let createStyles = createStyles_mod;
let obj = { wrap: obj2, contentContainer: obj3, controlRow: obj4, grid: obj5, tile: obj6, badgeBox: { height: 72, alignItems: "center", justifyContent: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj6 = { alignItems: "center", justifyContent: "flex-start", gap: nativeDefault.space.PX_4, width: 96, padding: nativeDefault.space.PX_8, backgroundColor: "#ffffff", borderRadius: 8 };
let closure_12 = createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildTagBadgesScreen.tsx");

export default function DevToolsGuildTagBadgesScreen() {
  let Stack;
  let closure_2;
  let closure_3;
  let first;
  let items1;
  let obj2;
  let obj5;
  let tmp = closure_12();
  _require = tmp;
  [first, _slicedToArray] = react.useState(1);
  const tmp4 = _slicedToArray(react.useState(1), 2);
  react = tmp4[1];
  let closure_4 = tmp5;
  let closure_5 = tmp6;
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: closure_7(Stack, obj2) };
  obj2 = { spacing: 16, children: items1 };
  Stack = require("Stack/Stack").Stack;
  let obj3 = { variant: "text-md/normal", children: items };
  items = ["All ", closure_9.length, " badge kinds. Tint: "];
  items[3] = items[first].label;
  items[4] = " \u00B7 Size: ";
  items[5] = closure_11[tmp4[0]];
  items[6] = "px. 2c = two-color badge.";
  items1 = [closure_7(require("Text/Text").Text, obj3), , , ];
  const obj4 = { horizontal: true, showsHorizontalScrollIndicator: false, children: closure_8(closure_5, obj5) };
  obj5 = {
    style: tmp.controlRow,
    children: items.map((label, index) => {
      let str;
      closure_0 = index;
      const obj = {
        text: label.label,
        size: "sm",
        variant: str,
        onPress() {
          return closure_2(index);
        }
      };
      str = "secondary";
      const Button = closure_0(first[9]).Button;
      const tmp = closure_1_8;
      if (index === first) {
        str = "primary";
      }
      return tmp(Button, obj, label.label);
    })
  };
  items1[1] = closure_8(closure_4, obj4);
  const obj6 = {
    text: "Size: " + closure_11[tmp4[0]] + "px (tap to cycle)",
    size: "sm",
    onPress() {
      let length;
      return closure_3((arg0) => (arg0 + 1) % length.length);
    }
  };
  let Button = require("components/Button/Button").Button;
  items1[2] = closure_8(Button, obj6);
  const obj7 = {
    style: tmp.grid,
    children: closure_9.map((value) => {
      let items1;
      value = value.value;
      const obj = { style: closure_0.tile, children: items };
      const name = value.name;
      const obj2 = { style: closure_0.badgeBox, children: metroImportAll(badges_GuildBadge.GuildBadge, size) };
      size = { badge: value, primaryTintColor: closure_4.primary, secondaryTintColor: closure_4.secondary, width: height, height };
      const tmp = metroRequire[value];
      items = [metroImportAll(hasOwnProperty, obj2), ];
      const obj3 = { variant: "text-xs/normal", color: "text-muted", style: { textAlign: "center" }, children: items1 };
      items1 = [name, ];
      let str = "";
      const Text = Text_Text.Text;
      const tmp3 = hasOwnProperty;
      if (2 === tmp) {
        str = " \u00B7 2c";
      }
      items1[1] = str;
      items[1] = metroImportDefault(Text, obj3);
      return metroImportDefault(tmp3, obj, value);
    })
  };
  items1[3] = closure_8(closure_5, obj7);
  return closure_8(closure_4, obj);
};
