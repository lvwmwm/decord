// Module ID: 17154
// Function ID: 17155
// Name: FamilyCenterTopServersBottomSheet
// Dependencies: [7824, 21, 5170, 575, 504, 8476, 7071, 7053, 7459, 5783, 1113, 2664, 7159, 2]
// Exports: default

// Module 17154 (FamilyCenterTopServersBottomSheet)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import _modDef2664 from "module_2664" /* 2664 */;
import Text_Text from "Text/Text" /* 5783 */;
import GuildIconDefault from "GuildIcon" /* 7053 */;
import TableRowGroup2 from "TableRowGroup" /* 7159 */;
import ActionSheet2 from "ActionSheet" /* 7459 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7824 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
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
    const tmp2Result = guildActivity(8476);
    const topUserOrGuildDescription = tmp2Result.getTopUserOrGuildDescription(guildActivity.messages_sent, guildActivity.call_count);
    const obj2 = { label: stateFromStores.name, subLabel: topUserOrGuildDescription, icon: closure_4(GuildIconDefault, obj3) };
    const TableRow = tmp2(7071).TableRow;
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
  const obj2 = { variant: "body-md/semibold", style: tmp.header, children: intl.string(_modDef2664.Lq9Set) };
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
