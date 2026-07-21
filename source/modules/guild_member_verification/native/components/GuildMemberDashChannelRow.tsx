// Module ID: 14912
// Function ID: 112304
// Name: GuildMemberDashChannelRow
// Dependencies: []
// Exports: default

// Module 14912 (GuildMemberDashChannelRow)
let closure_3 = importAll(dependencyMap[0]);
({ GuildFeatures: closure_4, Routes: closure_5 } = arg1(dependencyMap[1]));
const StaticChannelRoute = arg1(dependencyMap[2]).StaticChannelRoute;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { marginVertical: arg1(dependencyMap[3]).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: importDefault(dependencyMap[6]).radii.md };
obj.container = obj;
const tmp2 = arg1(dependencyMap[1]);
obj.badge = { backgroundColor: importDefault(dependencyMap[6]).colors.BADGE_BACKGROUND_DEFAULT };
const obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BADGE_BACKGROUND_DEFAULT };
obj.badgeText = { color: importDefault(dependencyMap[6]).colors.BADGE_TEXT_DEFAULT };
let closure_8 = obj.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[6]).colors.BADGE_TEXT_DEFAULT };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx");

export default function GuildMemberDashChannelRow(arg0) {
  let guild;
  let selected;
  ({ guild, selected } = arg0);
  let importDefault;
  const tmp = callback();
  const id = guild.id;
  const arg1 = id;
  let obj = arg1(dependencyMap[7]);
  const submittedGuildJoinRequestTotal = obj.useSubmittedGuildJoinRequestTotal({ guildId: id });
  let num = 0;
  if (null != submittedGuildJoinRequestTotal) {
    num = submittedGuildJoinRequestTotal;
  }
  const features = guild.features;
  const hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  importDefault = hasItem;
  const items = [guild.features, id, hasItem];
  const effect = React.useEffect(() => {
    if (hasItem) {
      let obj = hasItem(closure_2[8]);
      obj = { guildId: id, status: id(closure_2[9]).GuildJoinRequestApplicationStatuses.SUBMITTED };
      const guildJoinRequests = obj.fetchGuildJoinRequests(obj);
    }
  }, items);
  const items1 = [id];
  const callback = React.useCallback(() => {
    id(closure_2[10]).transitionTo(closure_5.CHANNEL(id, constants.MEMBER_SAFETY));
  }, items1);
  const ChannelModes = arg1(dependencyMap[11]).ChannelModes;
  const tmp6 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  obj = { onPress: callback, style: tmp.container, accessible: true };
  const intl = arg1(dependencyMap[12]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.9Oq93m);
  obj.accessibilityState = { selected };
  obj.mode = tmp6;
  obj = {};
  const intl2 = arg1(dependencyMap[12]).intl;
  obj.name = intl2.string(arg1(dependencyMap[12]).t.9Oq93m);
  obj.mode = tmp6;
  obj.name = jsx(arg1(dependencyMap[11]).BaseChannelName, obj);
  const obj1 = { mode: tmp6, IconComponent: arg1(dependencyMap[13]).GroupIcon };
  obj.icon = jsx(arg1(dependencyMap[11]).BaseChannelIcon, obj1);
  let tmp9 = null;
  if (num > 0) {
    const obj2 = {};
    ({ badge: obj5.style, badgeText: obj5.textStyle } = tmp);
    obj2.value = num;
    tmp9 = jsx(arg1(dependencyMap[14]).Badge, obj2);
  }
  obj.channelInfo = tmp9;
  return jsx(importDefault(dependencyMap[11]), obj);
};
