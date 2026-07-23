// Module ID: 16283
// Function ID: 126755
// Name: GuildSettingsServerTagColorGrid
// Dependencies: [31, 27, 7632, 33, 689, 4130, 1212, 4541, 4126, 16281, 16284, 12922, 13509, 14237, 2]
// Exports: default

// Module 16283 (GuildSettingsServerTagColorGrid)
import "result";
import { View } from "get ActivityIndicator";
import items from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ GUILD_TAG_BADGE_PALETTE_PRESETS: closure_4, GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: closure_5, GuildTagBadgeSize: closure_6 } = items);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { grid: _createForOfIteratorHelperLoose };
_createForOfIteratorHelperLoose = { flexDirection: "row", flexWrap: "wrap", gap: require("_createForOfIteratorHelperLoose").space.PX_8, defaultIcon: { position: "absolute", right: require("_createForOfIteratorHelperLoose").space.PX_4, bottom: require("_createForOfIteratorHelperLoose").space.PX_4 } };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { position: "absolute", right: require("_createForOfIteratorHelperLoose").space.PX_4, bottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
const result = require("items").fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagColorGrid.tsx");

export default function GuildSettingsServerTagColorGrid(badge) {
  let View;
  let cellSize;
  badge = badge.badge;
  let primary = badge.primaryColor;
  let secondary = badge.secondaryColor;
  ({ onSelectColor: View, cellSize } = badge);
  let tmp = _createForOfIteratorHelperLoose();
  const table = tmp2;
  let tmp3 = null == primary;
  if (tmp3) {
    let tmp4 = !tmp2;
    if (tmp2) {
      tmp4 = null == secondary;
    }
    tmp3 = tmp4;
  }
  let everyResult = !tmp3;
  if (!tmp3) {
    everyResult = cellSize.every((primary) => {
      let tmp = primary.primary !== primary;
      if (!tmp) {
        let tmp2 = closure_5;
        if (closure_5) {
          tmp2 = primary.secondary !== secondary;
        }
        tmp = tmp2;
      }
      return tmp;
    });
  }
  const intl = badge(secondary[6]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = badge(secondary[6]).t;
  if (table[badge] >= 2) {
    let obj = {};
    if (null == primary) {
      primary = cellSize[0].primary;
    }
    obj.primaryColor = primary;
    if (null == secondary) {
      secondary = cellSize[0].secondary;
    }
    obj.secondaryColor = secondary;
    let formatToPlainStringResult = formatToPlainString(t.hr4D2X, obj);
  } else {
    obj = {};
    let primary2 = primary;
    if (null == primary) {
      primary2 = cellSize[0].primary;
    }
    obj.color = primary2;
    formatToPlainStringResult = formatToPlainString(t["7BFCRR"], obj);
  }
  obj = { spacing: primary(secondary[4]).space.PX_8 };
  const obj1 = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header" };
  const intl2 = badge(secondary[6]).intl;
  obj1.children = intl2.string(badge(secondary[6]).t["Fg/TNW"]);
  const items = [callback(badge(secondary[8]).Text, obj1), ];
  let obj2 = { accessibilityRole: "radiogroup", style: tmp.grid };
  const items1 = [
    cellSize.map((primary) => {
      let closure_0 = primary;
      let obj = { size: cellSize };
      let tmp3 = primary.primary === primary;
      if (tmp3) {
        let tmp5 = !closure_5;
        if (closure_5) {
          tmp5 = primary.secondary === secondary;
        }
        tmp3 = tmp5;
      }
      obj.selected = tmp3;
      if (closure_5) {
        let guildTagPalettePresetColorLabel = primary(secondary[10])(primary.primary, primary.secondary);
      } else {
        guildTagPalettePresetColorLabel = badge(secondary[10]).getGuildTagPalettePresetColorLabel(primary.primary);
        const obj2 = badge(secondary[10]);
      }
      obj.accessibilityLabel = guildTagPalettePresetColorLabel;
      obj.onPress = function onPress() {
        let secondary = null;
        if (outer1_5) {
          secondary = primary.secondary;
        }
        return outer1_3(primary.primary, secondary);
      };
      obj = { badge: closure_0, width: outer1_6.SIZE_32, height: outer1_6.SIZE_32, primaryTintColor: primary.primary };
      secondary = undefined;
      if (closure_5) {
        secondary = primary.secondary;
      }
      obj.secondaryTintColor = secondary;
      obj.children = outer1_7(badge(secondary[11]).GuildBadge, obj);
      return outer1_7(primary(secondary[9]), obj, "" + primary.primary + primary.secondary);
    }),
  ,

  ];
  const obj3 = { size: cellSize, selected: tmp3 };
  const intl3 = badge(secondary[6]).intl;
  obj3.accessibilityLabel = intl3.string(badge(secondary[6]).t.S6N0gC);
  obj3.onPress = function onPress() {
    return callback(null, null);
  };
  const items2 = [callback(badge(secondary[11]).GuildBadge, { badge, width: closure_6.SIZE_32, height: closure_6.SIZE_32 }), ];
  const obj5 = { size: "xs", color: primary(secondary[4]).colors.ICON_DEFAULT, style: tmp.defaultIcon };
  items2[1] = callback(badge(secondary[12]).RefreshIcon, obj5);
  obj3.children = items2;
  items1[1] = callback2(primary(secondary[9]), obj3);
  const obj6 = { size: cellSize, selected: everyResult, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, onPress: badge.onPressEyedropper };
  const obj4 = { badge, width: closure_6.SIZE_32, height: closure_6.SIZE_32 };
  const tmp11 = primary(secondary[9]);
  const obj7 = { size: "sm", color: primary(secondary[4]).colors.ICON_DEFAULT };
  obj6.children = callback(badge(secondary[13]).EyeDropperIcon, obj7);
  items1[2] = callback(primary(secondary[9]), obj6);
  obj2.children = items1;
  items[1] = callback2(View, obj2);
  obj.children = items;
  return callback2(badge(secondary[7]).Stack, obj);
};
