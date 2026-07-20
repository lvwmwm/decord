// Module ID: 16143
// Function ID: 124448
// Name: GuildSettingsServerTagColorGrid
// Dependencies: []
// Exports: default

// Module 16143 (GuildSettingsServerTagColorGrid)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ GUILD_TAG_BADGE_PALETTE_PRESETS: closure_4, GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: closure_5, GuildTagBadgeSize: closure_6 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[5]);
obj = { grid: obj };
obj = { APP_DMS_ENTRY_POINT_COMMAND_BUTTON: null, desert: null, gap: importDefault(dependencyMap[4]).space.PX_8 };
const tmp4 = arg1(dependencyMap[3]);
obj.defaultIcon = { position: "absolute", right: importDefault(dependencyMap[4]).space.PX_4, bottom: importDefault(dependencyMap[4]).space.PX_4 };
let closure_9 = obj.createStyles(obj);
const obj1 = { position: "absolute", right: importDefault(dependencyMap[4]).space.PX_4, bottom: importDefault(dependencyMap[4]).space.PX_4 };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagColorGrid.tsx");

export default function GuildSettingsServerTagColorGrid(badge) {
  let cellSize;
  badge = badge.badge;
  const arg1 = badge;
  let primary = badge.primaryColor;
  const importDefault = primary;
  let secondary = badge.secondaryColor;
  const dependencyMap = secondary;
  ({ onSelectColor: closure_3, cellSize } = badge);
  const tmp = callback3();
  const tmp2 = tmp2[badge] >= 2;
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
        if (tmp2) {
          const tmp2 = primary.secondary !== secondary;
        }
        tmp = tmp2;
      }
      return tmp;
    });
  }
  const intl = arg1(dependencyMap[6]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = arg1(dependencyMap[6]).t;
  if (tmp2) {
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
    formatToPlainStringResult = formatToPlainString(t.7BFCRR, obj);
  }
  obj = { spacing: importDefault(dependencyMap[4]).space.PX_8 };
  const obj1 = {};
  const intl2 = arg1(dependencyMap[6]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[6]).t.Fg/TNW);
  const items = [callback(arg1(dependencyMap[8]).Text, obj1), ];
  const obj2 = { accessibilityRole: "radiogroup", style: tmp.grid };
  const items1 = [
    cellSize.map((primary) => {
      const badge = primary;
      let obj = { size: cellSize };
      let tmp3 = primary.primary === primary;
      const tmp2 = primary(secondary[9]);
      if (tmp3) {
        let tmp5 = !tmp2;
        if (tmp2) {
          tmp5 = primary.secondary === secondary;
        }
        tmp3 = tmp5;
      }
      obj.selected = tmp3;
      if (tmp2) {
        let guildTagPalettePresetColorLabel = primary(secondary[10])(primary.primary, primary.secondary);
      } else {
        guildTagPalettePresetColorLabel = badge(secondary[10]).getGuildTagPalettePresetColorLabel(primary.primary);
        const obj2 = badge(secondary[10]);
      }
      obj.accessibilityLabel = guildTagPalettePresetColorLabel;
      obj.onPress = function onPress(self) {
        let secondary = null;
        if (closure_5) {
          secondary = self.secondary;
        }
        return closure_3(self.primary, secondary);
      };
      obj = { badge, width: closure_6.SIZE_32, height: closure_6.SIZE_32, primaryTintColor: primary.primary };
      let secondary;
      if (tmp2) {
        secondary = primary.secondary;
      }
      obj.secondaryTintColor = secondary;
      obj.children = closure_7(badge(secondary[11]).GuildBadge, obj);
      return closure_7(tmp2, obj, "" + primary.primary + primary.secondary);
    }),
  ,

  ];
  const obj3 = { size: cellSize, selected: tmp3 };
  const intl3 = arg1(dependencyMap[6]).intl;
  obj3.accessibilityLabel = intl3.string(arg1(dependencyMap[6]).t.S6N0gC);
  obj3.onPress = function onPress() {
    return callback(null, null);
  };
  const items2 = [callback(arg1(dependencyMap[11]).GuildBadge, { badge, width: closure_6.SIZE_32, height: closure_6.SIZE_32 }), ];
  const obj5 = { size: "xs", color: importDefault(dependencyMap[4]).colors.ICON_DEFAULT, style: tmp.defaultIcon };
  items2[1] = callback(arg1(dependencyMap[12]).RefreshIcon, obj5);
  obj3.children = items2;
  items1[1] = callback2(importDefault(dependencyMap[9]), obj3);
  const obj6 = { size: cellSize, selected: everyResult, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, onPress: badge.onPressEyedropper };
  const obj4 = { badge, width: closure_6.SIZE_32, height: closure_6.SIZE_32 };
  const tmp11 = importDefault(dependencyMap[9]);
  const obj7 = { size: "sm", color: importDefault(dependencyMap[4]).colors.ICON_DEFAULT };
  obj6.children = callback(arg1(dependencyMap[13]).EyeDropperIcon, obj7);
  items1[2] = callback(importDefault(dependencyMap[9]), obj6);
  obj2.children = items1;
  items[1] = callback2(View, obj2);
  obj.children = items;
  return callback2(arg1(dependencyMap[7]).Stack, obj);
};
