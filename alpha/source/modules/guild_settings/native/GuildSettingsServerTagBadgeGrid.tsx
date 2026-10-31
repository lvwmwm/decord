// Module ID: 19751
// Function ID: 19752
// Name: GuildSettingsServerTagBadgeGrid
// Dependencies: [19, 17, 8393, 21, 575, 5014, 19752, 14040, 6027, 5624, 1113, 19753, 19754, 15739, 7378, 2]
// Exports: default

// Module 19751 (GuildSettingsServerTagBadgeGrid)
import nativeDefault from "native" /* 575 */;
import GuildTagConstants from "GuildTagConstants" /* 8393 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 14040 */;
import useGuildTagBadgeCollectionDefault from "useGuildTagBadgeCollection" /* 19752 */;
import GuildSettingsServerTagPickerCellDefault from "GuildSettingsServerTagPickerCell" /* 19753 */;
import getGuildTagBadgeLabelDefault from "getGuildTagBadgeLabel" /* 19754 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { grid: { flexDirection: "row", flexWrap: "wrap", gap: PX_8 }, upsellCard: obj2, upsellPreview: obj3, upsellText: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { width: 128, flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let closure_9 = createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagBadgeGrid.tsx");

export default function GuildSettingsServerTagBadgeGrid(guildId) {
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let lockedBadges;
  let substr;
  let unlockedBadges;
  guildId = guildId.guildId;
  ({ selectedBadge: importDefault, onSelectBadge: dependencyMap, cellSize: react } = guildId);
  let tmp = closure_9();
  ({ unlockedBadges, lockedBadges } = useGuildTagBadgeCollectionDefault());
  const items = [guildId];
  useGuildTagBadgeCollectionDefault();
  const callback = react.useCallback(() => {
    const obj = { guildId, autoOpenPerkId: "guildTagsBadgePacks" };
    openGuildPowerupsModalDefault(obj);
  }, items);
  let obj = { spacing: nativeDefault.space.PX_8, children: items1 };
  const Stack = guildId(6027).Stack;
  const obj2 = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: intl.string(guildId(1113).t.wRnfnY) };
  const Text = guildId(5624).Text;
  intl = guildId(1113).intl;
  items1 = [closure_7(Text, obj2), , ];
  const obj3 = {
    accessibilityRole: "radiogroup",
    style: tmp.grid,
    children: unlockedBadges.map((badge) => {
      const obj = {
        size,
        selected: badge.kind === importDefault,
        accessibilityLabel: getGuildTagBadgeLabelDefault(badge.kind),
        onPress() {
          return dependencyMap(badge.kind);
        },
        children: closure_1_7(guildId(dependencyMap[13]).GuildBadge, size)
      };
      size = { badge: badge.kind, width: GuildTagBadgeSize.SIZE_32, height: GuildTagBadgeSize.SIZE_32 };
      const tmp = GuildSettingsServerTagPickerCellDefault;
      return closure_1_7(tmp, obj, badge.kind);
    })
  };
  items1[1] = closure_7(closure_5, obj3);
  let tmp6Result = lockedBadges.length > 0;
  const tmp9 = closure_5;
  if (tmp6Result) {
    const obj4 = { accessibilityRole: "button", accessibilityLabel: intl2.string(guildId(1113).t.U5p3GZ), onPress: callback, style: tmp.upsellCard, children: items2 };
    intl2 = tmp7(1113).intl;
    const obj5 = {
      style: tmp.upsellPreview,
      children: substr.map((badge) => {
          size = { badge: badge.kind, width: 21, height: 21 };
          return closure_1_7(guildId(dependencyMap[13]).GuildBadge, size, badge.kind);
        })
    };
    substr = lockedBadges.slice(0, 10);
    items2 = [closure_7(tmp9, obj5), , ];
    const obj6 = { variant: "text-md/medium", color: "text-subtle", style: tmp.upsellText, children: intl3.string(guildId(1113).t.U5p3GZ) };
    const Text2 = tmp7(5624).Text;
    intl3 = tmp7(1113).intl;
    items2[1] = closure_7(Text2, obj6);
    const obj7 = { size: "md", color: nativeDefault.colors.ICON_SUBTLE };
    const ChevronSmallRightIcon = tmp7(7378).ChevronSmallRightIcon;
    items2[2] = closure_7(ChevronSmallRightIcon, obj7);
    tmp6Result = tmp6(closure_4, obj4);
  }
  items1[2] = tmp6Result;
  return closure_8(Stack, obj);
};
