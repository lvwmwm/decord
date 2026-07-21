// Module ID: 13678
// Function ID: 103542
// Name: GuildRow
// Dependencies: []
// Exports: default

// Module 13678 (GuildRow)
function GuildRow(guildActivity) {
  guildActivity = guildActivity.guildActivity;
  const arg1 = guildActivity;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildActivity.guild_id));
  if (null == stateFromStores) {
    return null;
  } else {
    const topUserOrGuildDescription = arg1(dependencyMap[5]).getTopUserOrGuildDescription(guildActivity.messages_sent, guildActivity.call_count);
    obj = { label: stateFromStores.name, subLabel: topUserOrGuildDescription };
    obj = { guild: stateFromStores, style: tmp.guildIcon };
    obj.icon = callback(importDefault(dependencyMap[7]), obj);
    return callback(arg1(dependencyMap[6]).TableRow, obj);
  }
  const tmp = callback3();
}
let closure_3 = importDefault(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[1]));
let obj = arg1(dependencyMap[2]);
obj = { header: { textAlign: "center" } };
obj = { borderRadius: importDefault(dependencyMap[3]).radii.md, borderColor: importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOW, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOWEST };
obj.guildIcon = obj;
let closure_6 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopServersBottomSheet.tsx");

export default function FamilyCenterTopGuildsBottomSheet(topGuildActivities) {
  topGuildActivities = topGuildActivities.topGuildActivities;
  let obj = {};
  obj = { variant: "text-md/bold", style: callback3().header };
  const intl = arg1(dependencyMap[10]).intl;
  obj.children = intl.string(importDefault(dependencyMap[11]).Lq9Set);
  const items = [callback(arg1(dependencyMap[9]).Text, obj), ];
  obj = { hasIcons: true, children: topGuildActivities.map((guildActivity) => callback(closure_7, { guildActivity }, guildActivity.guild_id)) };
  items[1] = callback(arg1(dependencyMap[12]).TableRowGroup, obj);
  obj.children = items;
  return callback2(arg1(dependencyMap[8]).ActionSheet, obj);
};
