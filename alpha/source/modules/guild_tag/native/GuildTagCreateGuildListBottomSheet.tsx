// Module ID: 14938
// Function ID: 14939
// Name: GuildTagCreateGuildListBottomSheet
// Dependencies: [19, 5388, 21, 504, 7063, 1113, 7045, 5404, 14263, 5379, 7449, 7405, 7151, 2]
// Exports: default

// Module 14938 (GuildTagCreateGuildListBottomSheet)
import intl3 from "intl" /* 1113 */;
import Powerups from "Powerups" /* 5379 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import TableRowGroup2 from "TableRowGroup" /* 7151 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7405 */;
import ActionSheet2 from "ActionSheet" /* 7449 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 14263 */;
import react from "react" /* 19 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5388 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function GuildRow(guild) {
  let formatToPlainStringResult;
  let obj4;
  let tmp6;
  guild = guild.guild;
  const analyticsLocation = guild.analyticsLocation;
  let tmp2 = dependencyMap;
  let obj = guild(504);
  const items = [GuildMemberCountStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildMemberCountStore.getMemberCount(guild.id));
  let obj2 = {
    label: guild.name,
    subLabel: formatToPlainStringResult,
    icon: closure_4(tmp6, obj4),
    arrow: true,
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = { guildId: guild.id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
      const tmp2 = openGuildPowerupsModalDefault;
      tmp2(obj2);
    }
  };
  formatToPlainStringResult = null;
  const TableRow = guild(7063).TableRow;
  if (null != stateFromStores) {
    const intl = tmp(1113).intl;
    const obj3 = { count: stateFromStores };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1113).t.zRl6XR, obj3);
  }
  obj4 = { guild, size: guild(7045).GuildIconSizes.SMALL_32 };
  tmp6 = analyticsLocation(7045);
  return closure_4(TableRow, obj2);
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/guild_tag/native/GuildTagCreateGuildListBottomSheet.tsx");

export default function GuildTagCreateGuildListBottomSheet(arg0) {
  let analyticsLocation;
  let guilds;
  let intl;
  let intl2;
  let items;
  ({ guilds, analyticsLocation: require } = arg0);
  let obj = { children: items };
  const ActionSheet = ActionSheet2.ActionSheet;
  const obj2 = { title: intl.string(intl3.t.xO5QzM), subtitle: intl2.string(intl3.t["h+7Yx3"]) };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl3.intl;
  intl2 = intl3.intl;
  items = [closure_4(BottomSheetTitleHeader, obj2), ];
  const obj3 = {
    hasIcons: true,
    children: guilds.map((guild) => {
      const obj = { guild, analyticsLocation: require };
      return React3(GuildRow, obj, guild.id);
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  items[1] = closure_4(TableRowGroup, obj3);
  return closure_5(ActionSheet, obj);
};
