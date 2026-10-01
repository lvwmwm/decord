// Module ID: 17394
// Function ID: 17395
// Name: GuildSettingsServerTagColorGrid
// Dependencies: [19, 17, 7386, 21, 576, 4836, 1115, 5279, 4832, 17392, 17395, 13460, 14506, 14899, 2]
// Exports: default

// Module 17394 (GuildSettingsServerTagColorGrid)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import GuildTagConstants from "GuildTagConstants" /* 7386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let rect;
const View = react_native.View;
({ GUILD_TAG_BADGE_PALETTE_PRESETS: closure_4, GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: hasOwnProperty, GuildTagBadgeSize: metroRequire } = GuildTagConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let obj = { grid: { flexDirection: "row", flexWrap: "wrap", gap: PX_8 }, defaultIcon: rect };
rect = { position: "absolute", right: nativeDefault.space.PX_4, bottom: nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagColorGrid.tsx");

export default function GuildSettingsServerTagColorGrid(badge) {
  let EyeDropperIcon;
  let cellSize;
  let formatToPlainStringResult;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let obj9;
  let tmp12;
  let tmp13;
  badge = badge.badge;
  let primary = badge.primaryColor;
  let secondary = badge.secondaryColor;
  ({ onSelectColor: View, cellSize } = badge);
  let closure_5;
  const onPressEyedropper = badge.onPressEyedropper;
  let tmp = closure_9();
  let tmp2 = closure_5[badge] >= 2;
  closure_5 = tmp2;
  let tmp3 = null == primary;
  if (tmp3) {
    let tmp4 = !tmp2;
    if (tmp2) {
      tmp4 = null == secondary;
    }
    tmp3 = tmp4;
  }
  let everyResult = !tmp3;
  if (everyResult) {
    everyResult = cellSize.every((primary) => {
      let tmp = primary.primary !== primary;
      if (!tmp) {
        tmp = closure_5 && primary.secondary !== secondary;
        const tmp2 = closure_5 && primary.secondary !== secondary;
      }
      return tmp;
    });
  }
  let tmp7 = badge;
  const intl = badge(secondary[6]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = badge(secondary[6]).t;
  if (tmp2) {
    const hr4D2X = t.hr4D2X;
    if (primary == null) {
      primary = cellSize[0].primary;
    }
    let obj2 = { primaryColor: primary, secondaryColor: secondary };
    if (secondary == null) {
      secondary = cellSize[0].secondary;
    }
    formatToPlainStringResult = formatToPlainString(hr4D2X, obj2);
    tmp12 = tmp8;
    tmp13 = tmp7;
  } else {
    let primary2 = primary;
    const v7BFCRR = t["7BFCRR"];
    if (primary == null) {
      primary2 = cellSize[0].primary;
    }
    let obj = { color: primary2 };
    formatToPlainStringResult = formatToPlainString(v7BFCRR, obj);
    tmp12 = tmp8;
    tmp13 = tmp7;
  }
  const obj3 = { spacing: primary(tmp12[4]).space.PX_8, children: items };
  const Stack = tmp13(tmp12[7]).Stack;
  const obj4 = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: intl2.string(tmp13(tmp12[6]).t["Fg/TNW"]) };
  const Text = tmp13(tmp12[8]).Text;
  intl2 = tmp13(tmp12[6]).intl;
  items = [closure_7(Text, obj4), ];
  const obj5 = { accessibilityRole: "radiogroup", style: tmp.grid, children: items1 };
  items1 = [
    cellSize.map((primary) => {
      let GuildBadge;
      let guildTagPalettePresetColorLabel;
      let tmp5;
      badge = primary;
      let tmp = closure_1_7;
      const obj = {
        size: cellSize,
        selected: tmp5,
        accessibilityLabel: guildTagPalettePresetColorLabel,
        onPress() {
          secondary = null;
          primary = primary.primary;
          const tmp = View;
          if (closure_5) {
            secondary = primary.secondary;
          }
          return tmp(primary, secondary);
        },
        children: tmp(GuildBadge, size)
      };
      tmp5 = primary.primary === primary;
      const tmp2 = primary;
      const tmp4 = primary(secondary[9]);
      if (tmp5) {
        let tmp7 = !closure_5;
        if (closure_5) {
          tmp7 = primary.secondary === secondary;
        }
        tmp5 = tmp7;
      }
      if (closure_5) {
        guildTagPalettePresetColorLabel = tmp2(tmp3[10])(primary.primary, primary.secondary);
      } else {
        const obj2 = badge(secondary[10]);
        guildTagPalettePresetColorLabel = obj2.getGuildTagPalettePresetColorLabel(primary.primary);
      }
      size = { badge, width: closure_1_6.SIZE_32, height: closure_1_6.SIZE_32, primaryTintColor: primary.primary, secondaryTintColor: secondary };
      secondary = undefined;
      GuildBadge = badge(tmp3[11]).GuildBadge;
      if (closure_5) {
        secondary = primary.secondary;
      }
      return tmp(tmp4, obj, "" + primary.primary + primary.secondary);
    }),
  ,

  ];
  const obj6 = {
    size: cellSize,
    selected: tmp3,
    accessibilityLabel: intl3.string(tmp13(tmp12[6]).t.S6N0gC),
    onPress() {
      return View(null, null);
    },
    children: items2
  };
  const tmp16 = primary(tmp12[9]);
  intl3 = tmp13(tmp12[6]).intl;
  size = { badge, width: closure_6.SIZE_32, height: closure_6.SIZE_32 };
  items2 = [closure_7(tmp13(tmp12[11]).GuildBadge, size), ];
  const obj7 = { size: "xs", color: primary(tmp12[4]).colors.ICON_DEFAULT, style: tmp.defaultIcon };
  const RefreshIcon = tmp13(tmp12[12]).RefreshIcon;
  items2[1] = closure_7(RefreshIcon, obj7);
  items1[1] = closure_8(tmp16, obj6);
  const obj8 = { size: cellSize, selected: everyResult, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, onPress: onPressEyedropper, children: closure_7(EyeDropperIcon, obj9) };
  obj9 = { size: "sm", color: primary(tmp12[4]).colors.ICON_DEFAULT };
  const tmp17 = primary(tmp12[9]);
  EyeDropperIcon = tmp13(tmp12[13]).EyeDropperIcon;
  items1[2] = closure_7(tmp17, obj8);
  items[1] = closure_8(View, obj5);
  return closure_8(Stack, obj3);
};
