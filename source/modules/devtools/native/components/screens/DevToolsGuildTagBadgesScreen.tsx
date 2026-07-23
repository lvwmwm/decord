// Module ID: 14676
// Function ID: 111870
// Name: items
// Dependencies: [57, 31, 27, 7632, 33, 4130, 689, 4541, 4126, 4543, 12922, 2]
// Exports: default

// Module 14676 (items)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import items from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let GUILD_TAG_BADGE_PALETTE_PRESETS;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let require = arg1;
({ ScrollView: closure_4, View: closure_5 } = get_ActivityIndicator);
({ GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: closure_6, GUILD_TAG_BADGE_PALETTE_PRESETS } = items);
({ jsxs: closure_7, jsx: closure_8 } = jsxProd);
const entries = Object.entries(items.GuildTagBadgeKind);
const found = entries.filter((arg0) => {
  let tmp;
  [tmp] = arg0;
  return isNaN(Number(tmp));
});
let closure_9 = found.map((arg0) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg0;
  return { name, value };
});
items = [{ label: "Untinted", primary: undefined, secondary: undefined }, ...GUILD_TAG_BADGE_PALETTE_PRESETS.map((primary) => ({ label: "P" + arg1 + 1, primary: primary.primary, secondary: primary.secondary }))];
let closure_11 = [24, 48, 72];
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.wrap = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.contentContainer = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.controlRow = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const obj3 = { flexDirection: "row", flexWrap: "wrap", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.grid = obj3;
const obj4 = { alignItems: "center", justifyContent: "flex-start", gap: require("_createForOfIteratorHelperLoose").space.PX_4, width: 96, padding: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: "#ffffff", borderRadius: 8 };
_createForOfIteratorHelperLoose.tile = obj4;
_createForOfIteratorHelperLoose.badgeBox = { height: 72, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildTagBadgesScreen.tsx");

export default function DevToolsGuildTagBadgesScreen() {
  let tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  const tmp2 = callback(React.useState(1), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  const tmp4 = callback(React.useState(1), 2);
  React = tmp4[1];
  let closure_4 = tmp5;
  let closure_5 = tmp6;
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer };
  obj = { spacing: 16 };
  let items = ["All ", closure_9.length, " badge kinds. Tint: "];
  items[3] = items[first].label;
  items[4] = " \u00B7 Size: ";
  items[5] = table[tmp4[0]];
  items[6] = "px. 2c = two-color badge.";
  let items1 = [callback2(require(first[8]).Text, { variant: "text-md/normal", children: items }), , , ];
  obj = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    children: callback3(closure_5, {
      style: tmp.controlRow,
      children: items.map((label) => {
        let tmp = arg1;
        tmp = outer1_8;
        const obj = { text: label.label, size: "sm" };
        let str = "secondary";
        if (arg1 === first) {
          str = "primary";
        }
        obj.variant = str;
        obj.onPress = function onPress() {
          return outer1_2(closure_0);
        };
        return tmp(tmp(first[9]).Button, obj, label.label);
      })
    })
  };
  items1[1] = callback3(closure_4, obj);
  const obj2 = {
    text: "Size: " + table[tmp4[0]] + "px (tap to cycle)",
    size: "sm",
    onPress() {
      return callback((arg0) => (arg0 + 1) % outer2_11.length);
    }
  };
  items1[2] = callback3(require(first[9]).Button, obj2);
  let obj1 = {
    style: tmp.controlRow,
    children: items.map((label) => {
      let tmp = arg1;
      tmp = outer1_8;
      const obj = { text: label.label, size: "sm" };
      let str = "secondary";
      if (arg1 === first) {
        str = "primary";
      }
      obj.variant = str;
      obj.onPress = function onPress() {
        return outer1_2(closure_0);
      };
      return tmp(tmp(first[9]).Button, obj, label.label);
    })
  };
  items1[3] = callback3(closure_5, {
    style: tmp.grid,
    children: closure_9.map((value) => {
      value = value.value;
      let obj = { style: tmp.tile };
      obj = { style: tmp.badgeBox, children: outer1_8(tmp(first[10]).GuildBadge, obj) };
      obj = { badge: value, primaryTintColor: tmp5.primary, secondaryTintColor: tmp5.secondary, width: closure_5, height: closure_5 };
      const items = [outer1_8(closure_5, obj), ];
      const obj1 = { variant: "text-xs/normal", color: "text-muted", style: { textAlign: "center" } };
      const items1 = [value.name, ];
      let str = "";
      if (2 === outer1_6[value]) {
        str = " \u00B7 2c";
      }
      items1[1] = str;
      obj1.children = items1;
      items[1] = outer1_7(outer1_7(first[8]).Text, obj1);
      obj.children = items;
      return outer1_7(closure_5, obj, value);
    })
  });
  obj.children = items1;
  obj.children = callback2(require(first[7]).Stack, obj);
  return callback3(closure_4, obj);
};
