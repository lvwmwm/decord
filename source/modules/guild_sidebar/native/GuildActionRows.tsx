// Module ID: 14906
// Function ID: 112269
// Name: GuildRolesAndChannelsRow
// Dependencies: []
// Exports: GuildRolesAndChannelsRow

// Module 14906 (GuildRolesAndChannelsRow)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[5]).CHANNELS_AND_ROLES_MODAL_KEY;
const ReadStateTypes = arg1(dependencyMap[6]).ReadStateTypes;
const jsx = arg1(dependencyMap[7]).jsx;
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { marginVertical: arg1(dependencyMap[4]).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: importDefault(dependencyMap[9]).radii.md };
obj.container = obj;
obj.channelInfoContainer = { paddingStart: 4 };
let closure_10 = obj.createStyles(obj);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/guild_sidebar/native/GuildActionRows.tsx");

export const GuildRolesAndChannelsRow = function GuildRolesAndChannelsRow(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const selected = guild.selected;
  const tmp = callback();
  const tmp2 = importDefault(dependencyMap[10])(guild);
  const id = guild.id;
  const importDefault = id;
  let obj = arg1(dependencyMap[11]);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(arg1(dependencyMap[12]).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX);
  let obj1 = arg1(dependencyMap[13]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_6.hasUnread(guild.id, constants.GUILD_ONBOARDING_QUESTION));
  let obj2 = arg1(dependencyMap[13]);
  const items1 = [closure_5];
  const items2 = [id];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => newChannelIds.getNewChannelIds(guild.id).size > guild(closure_2[14]).MAX_NEW_CHANNELS_TO_SHOW);
  const callback = React.useCallback(() => {
    let obj = id(paths[15]);
    obj = { guildId: id };
    obj.pushLazy(guild(paths[17])(paths[16], paths.paths), obj, closure_7);
  }, items2);
  let SELECTED = arg1(dependencyMap[18]).ChannelModes.DEFAULT;
  if (selected) {
    SELECTED = arg1(dependencyMap[18]).ChannelModes.SELECTED;
  }
  let tmp10 = null;
  if (tmp9) {
    obj = { style: tmp.channelInfoContainer, children: jsx(arg1(dependencyMap[19]).NewBadge, {}) };
    tmp10 = <View {...obj} />;
  }
  obj = { onPress: callback, style: tmp.container, accessible: true };
  const intl = arg1(dependencyMap[20]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[20]).t;
  if (tmp2) {
    let stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  obj.accessibilityLabel = stringResult;
  obj.accessibilityState = { selected };
  obj.mode = SELECTED;
  obj1 = {};
  const intl2 = arg1(dependencyMap[20]).intl;
  const string2 = intl2.string;
  const t2 = arg1(dependencyMap[20]).t;
  if (tmp2) {
    let string2Result = string2(t2.h9mGOP);
  } else {
    string2Result = string2(t2.et6wav);
  }
  obj1.name = string2Result;
  obj1.mode = SELECTED;
  obj.name = jsx(arg1(dependencyMap[18]).BaseChannelName, obj1);
  obj2 = { mode: SELECTED, IconComponent: arg1(dependencyMap[21]).ChannelListMagnifyingGlassIcon };
  obj.icon = jsx(arg1(dependencyMap[18]).BaseChannelIcon, obj2);
  obj.channelInfo = tmp10;
  return jsx(importDefault(dependencyMap[18]), obj);
};
