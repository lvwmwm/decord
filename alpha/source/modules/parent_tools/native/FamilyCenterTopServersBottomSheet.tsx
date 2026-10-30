// Module ID: 16747
// Function ID: 16748
// Name: FamilyCenterTopServersBottomSheet
// Dependencies: [7708, 21, 5009, 575, 504, 8364, 6969, 6951, 7360, 5619, 1114, 2537, 7054, 2]
// Exports: default

// Module 16747 (FamilyCenterTopServersBottomSheet)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import _modDef2537 from "module_2537" /* 2537 */;
import Text_Text from "Text/Text" /* 5619 */;
import GuildIconDefault from "GuildIcon" /* 6951 */;
import TableRowGroup2 from "TableRowGroup" /* 7054 */;
import ActionSheet2 from "ActionSheet" /* 7360 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7708 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
function GuildRow(guildActivity) {
  let obj3;
  guildActivity = guildActivity.guildActivity;
  const items = [FamilyCenterStore];
  const tmp = closure_6();
  const obj = guildActivity(504);
  const stateFromStores = obj.useStateFromStores(items, () => FamilyCenterStore.getGuild(guildActivity.guild_id));
  if (null == stateFromStores) {
    return null;
  } else {
    const tmp2Result = guildActivity(8364);
    const topUserOrGuildDescription = tmp2Result.getTopUserOrGuildDescription(guildActivity.messages_sent, guildActivity.call_count);
    const obj2 = { label: stateFromStores.name, subLabel: topUserOrGuildDescription, icon: closure_4(GuildIconDefault, obj3) };
    const TableRow = tmp2(6969).TableRow;
    obj3 = { guild: stateFromStores, style: tmp.guildIcon };
    return closure_4(TableRow, obj2);
  }
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { header: { textAlign: "center" }, guildIcon: obj2 };
obj2 = { borderRadius: nativeDefault.radii.md, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopServersBottomSheet.tsx");

export default function FamilyCenterTopGuildsBottomSheet(topGuildActivities) {
  let intl;
  let items;
  topGuildActivities = topGuildActivities.topGuildActivities;
  let obj = { children: items };
  const tmp = closure_6();
  const ActionSheet = ActionSheet2.ActionSheet;
  const obj2 = { variant: "text-md/bold", style: tmp.header, children: intl.string(_modDef2537.Lq9Set) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items = [React3(Text, obj2), ];
  const obj3 = {
    hasIcons: true,
    children: topGuildActivities.map((guildActivity) => {
      const obj = { guildActivity };
      return closure_1_4(GuildRow, obj, guildActivity.guild_id);
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  items[1] = React3(TableRowGroup, obj3);
  return hasOwnProperty(ActionSheet, obj);
};
