// Module ID: 14906
// Function ID: 112292
// Name: GuildRoleSubscriptionsRow
// Dependencies: []
// Exports: default

// Module 14906 (GuildRoleSubscriptionsRow)
let closure_3 = importAll(dependencyMap[0]);
const Routes = arg1(dependencyMap[1]).Routes;
const StaticChannelRoute = arg1(dependencyMap[2]).StaticChannelRoute;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { marginVertical: arg1(dependencyMap[3]).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: importDefault(dependencyMap[6]).radii.md };
obj.container = obj;
let closure_7 = obj.createStyles(obj);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsRow.tsx");

export default function GuildRoleSubscriptionsRow(selected) {
  selected = selected.selected;
  const id = selected.guild.id;
  const arg1 = id;
  const items = [id];
  const items1 = [id];
  const callback = React.useCallback(() => {
    id(closure_2[7]).transitionTo(closure_4.CHANNEL(id, constants.ROLE_SUBSCRIPTIONS));
  }, items);
  const callback1 = React.useCallback(() => {
    let obj = callback(paths[8]);
    obj = {
      guildId: id,
      onClose() {
        callback(closure_2[8]).hideActionSheet("role-subscriptions-channel-action-sheet");
      }
    };
    obj.openLazy(id(paths[10])(paths[9], paths.paths), "role-subscriptions-channel-action-sheet", obj);
  }, items1);
  const ChannelModes = arg1(dependencyMap[11]).ChannelModes;
  const tmp4 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  let obj = { onPress: callback, onLongPress: callback1, style: callback().container, accessible: true };
  const tmp = callback();
  const intl = arg1(dependencyMap[12]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.KzCF/6);
  obj.accessibilityState = { selected };
  obj.mode = tmp4;
  obj = {};
  const intl2 = arg1(dependencyMap[12]).intl;
  obj.name = intl2.string(arg1(dependencyMap[12]).t.KzCF/6);
  obj.mode = tmp4;
  obj.name = jsx(arg1(dependencyMap[11]).BaseChannelName, obj);
  obj = { disableColor: true, mode: tmp4, source: importDefault(dependencyMap[13]) };
  obj.icon = jsx(arg1(dependencyMap[11]).BaseChannelIcon, obj);
  return jsx(importDefault(dependencyMap[11]), obj);
};
