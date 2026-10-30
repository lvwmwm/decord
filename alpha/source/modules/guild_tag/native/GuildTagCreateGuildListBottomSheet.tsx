// Module ID: 14693
// Function ID: 14694
// Name: GuildTagCreateGuildListBottomSheet
// Dependencies: [19, 5237, 21, 504, 6969, 1114, 6951, 5253, 14005, 5228, 7360, 7315, 7054, 2]
// Exports: default

// Module 14693 (GuildTagCreateGuildListBottomSheet)
import intl3 from "intl" /* 1114 */;
import Powerups from "Powerups" /* 5228 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import TableRowGroup2 from "TableRowGroup" /* 7054 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7315 */;
import ActionSheet2 from "ActionSheet" /* 7360 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 14005 */;
import react from "react" /* 19 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5237 */;
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
  const TableRow = guild(6969).TableRow;
  if (null != stateFromStores) {
    const intl = tmp(1114).intl;
    const obj3 = { count: stateFromStores };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t.zRl6XR, obj3);
  }
  obj4 = { guild, size: guild(6951).GuildIconSizes.SMALL_32 };
  tmp6 = analyticsLocation(6951);
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
