// Module ID: 14898
// Function ID: 112242
// Name: GuildHomeChannelRow
// Dependencies: []
// Exports: default

// Module 14898 (GuildHomeChannelRow)
let closure_3 = importAll(dependencyMap[0]);
const Routes = arg1(dependencyMap[1]).Routes;
const StaticChannelRoute = arg1(dependencyMap[2]).StaticChannelRoute;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { marginVertical: arg1(dependencyMap[3]).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: importDefault(dependencyMap[6]).radii.md };
obj.container = obj;
let closure_7 = obj.createStyles(obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_home/native/components/guild_sidebar/GuildHomeChannelRow.tsx");

export default function GuildHomeChannelRow(selected) {
  selected = selected.selected;
  const id = selected.guild.id;
  const arg1 = id;
  const items = [id];
  const callback = React.useCallback(() => {
    id(closure_2[7]).transitionTo(closure_4.CHANNEL(id, constants.GUILD_HOME));
  }, items);
  const ChannelModes = arg1(dependencyMap[8]).ChannelModes;
  const tmp3 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  let obj = { onPress: callback, style: callback().container, accessible: true };
  const tmp = callback();
  const intl = arg1(dependencyMap[9]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[9]).t.VbpLyU);
  obj.accessibilityState = { selected };
  obj.mode = tmp3;
  obj = {};
  const intl2 = arg1(dependencyMap[9]).intl;
  obj.name = intl2.string(arg1(dependencyMap[9]).t.VbpLyU);
  obj.mode = tmp3;
  obj.name = jsx(arg1(dependencyMap[8]).BaseChannelName, obj);
  obj = { mode: tmp3, IconComponent: arg1(dependencyMap[10]).SignPostIcon };
  obj.icon = jsx(arg1(dependencyMap[8]).BaseChannelIcon, obj);
  return jsx(importDefault(dependencyMap[8]), obj);
};
