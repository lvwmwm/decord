// Module ID: 12170
// Function ID: 93598
// Name: createGuildScheduledEventEmbed
// Dependencies: []
// Exports: createGuildScheduledEventInviteEmbed, createGuildScheduledEventLinkEmbed

// Module 12170 (createGuildScheduledEventEmbed)
function createGuildScheduledEventEmbed(type) {
  let acceptLabelActiveBackgroundColor;
  let acceptLabelGreenColor;
  let channel;
  let entity_type;
  let guild;
  let guildEvent;
  let guild_id;
  let icon;
  let id2;
  let name;
  let recurrenceId;
  let shouldChangeTextColor;
  let text;
  let theme;
  let userCount;
  ({ channel, guildEvent, userCount, guild, theme, recurrenceId } = type);
  const colors = importDefault(dependencyMap[11])(theme).colors;
  if (null != channel) {
    const id = channel.id;
  }
  let tmp;
  if (null != guild) {
    tmp = getGuildIconSource(guild, 128, false);
  }
  let assetUriForEmbed;
  if (null != tmp) {
    let obj = arg1(dependencyMap[12]);
    assetUriForEmbed = obj.getAssetUriForEmbed(tmp);
  }
  let obj1 = arg1(dependencyMap[13]);
  const result = obj1.isGuildEventInvitable(guildEvent);
  const result1 = authStore.isInterestedInEventRecurrence(guildEvent.id, recurrenceId);
  const description = guildEvent.description;
  ({ name, entity_type } = guildEvent);
  let obj2 = arg1(dependencyMap[14]);
  const eventSchedule = obj2.getEventSchedule(guildEvent, recurrenceId);
  const tmp7 = callback3(guildEvent);
  let toISOStringResult;
  if (null != eventSchedule) {
    const startTime = eventSchedule.startTime;
    toISOStringResult = startTime.toISOString();
  }
  const eventTimeData = arg1(dependencyMap[15]).getEventTimeData(toISOStringResult);
  const obj4 = arg1(dependencyMap[15]);
  obj = { eventTimeData, isStage: entity_type === constants.STAGE_INSTANCE, theme, event: guildEvent };
  const guildScheduledEventHeaderProps = arg1(dependencyMap[16]).getGuildScheduledEventHeaderProps(obj);
  const color = guildScheduledEventHeaderProps.color;
  obj = { titleColor: colors.titleColor, borderColor: colors.borderColor, backgroundColor: colors.backgroundColor, thumbnailCornerRadius: 15, embedCanBeTapped: tmp13 };
  ({ icon, shouldChangeTextColor, text } = guildScheduledEventHeaderProps);
  const intl = arg1(dependencyMap[17]).intl;
  const stringResult = intl.string(arg1(dependencyMap[17]).t.DlcqlU);
  const obj5 = arg1(dependencyMap[16]);
  const assetUriForEmbed1 = arg1(dependencyMap[12]).getAssetUriForEmbed(importDefault(dependencyMap[18]));
  const obj8 = arg1(dependencyMap[12]);
  const assetUriForEmbed2 = arg1(dependencyMap[12]).getAssetUriForEmbed(importDefault(dependencyMap[19]));
  if (null != guild) {
    if (tmp7) {
      if (guildEvent.entity_type === constants.EXTERNAL) {
        const intl4 = arg1(dependencyMap[17]).intl;
        let stringResult1 = intl4.string(arg1(dependencyMap[17]).t.GoCQxU);
      } else {
        const intl3 = arg1(dependencyMap[17]).intl;
        stringResult1 = intl3.string(arg1(dependencyMap[17]).t.IaYdtW);
      }
      const acceptLabelGreenColor2 = colors.acceptLabelGreenColor;
      const acceptLabelActiveBackgroundColor2 = colors.acceptLabelActiveBackgroundColor;
    } else if (result1) {
      acceptLabelActiveBackgroundColor = colors.backgroundColor;
      let assetUriForEmbed3 = arg1(dependencyMap[12]).getAssetUriForEmbed(importDefault(dependencyMap[22]));
      acceptLabelGreenColor = colors.acceptLabelDisabledTextColor;
      let flag2 = result1;
      let stringResult2 = stringResult;
      let tmp22 = assetUriForEmbed2;
      const obj11 = arg1(dependencyMap[12]);
    } else {
      ({ acceptLabelActiveBackgroundColor, acceptLabelGreenColor } = colors);
      flag2 = result1;
      stringResult2 = stringResult;
      assetUriForEmbed3 = assetUriForEmbed1;
      tmp22 = assetUriForEmbed2;
    }
  } else {
    acceptLabelActiveBackgroundColor = arg1(dependencyMap[20]).processColorOrThrow(importDefault(dependencyMap[21]).unsafe_rawColors.GREEN_360);
    const intl2 = arg1(dependencyMap[17]).intl;
    stringResult2 = intl2.string(arg1(dependencyMap[17]).t.XpeFYr);
    acceptLabelGreenColor = colors.acceptLabelGreenColor;
    flag2 = false;
    const obj10 = arg1(dependencyMap[20]);
  }
  let parseToASTResult;
  if (null != description) {
    obj1 = { channelId: id };
    parseToASTResult = importDefault(dependencyMap[23]).parseToAST(description, true, obj1);
    const obj12 = importDefault(dependencyMap[23]);
  }
  const obj9 = arg1(dependencyMap[12]);
  let locationFromEvent = arg1(dependencyMap[24]).getLocationFromEvent(guildEvent);
  if (null == locationFromEvent) {
    let channelName;
    if (null != channel) {
      channelName = arg1(dependencyMap[25]).computeChannelName(channel, user, closure_11);
      const obj15 = arg1(dependencyMap[25]);
    }
    locationFromEvent = channelName;
  }
  const obj14 = arg1(dependencyMap[24]);
  const eventLocationIconSource = arg1(dependencyMap[26]).getEventLocationIconSource(guildEvent, channel, tmp13);
  const user = user.getUser(guildEvent.creator_id);
  const obj16 = arg1(dependencyMap[26]);
  ({ guild_id, id: id2 } = guildEvent);
  if (null != recurrenceId) {
    const items = [recurrenceId];
    let items1 = items;
  } else {
    items1 = [];
  }
  const guildEventUserCounts = importDefault(dependencyMap[27]).getGuildEventUserCounts(guild_id, id2, items1);
  const obj18 = importDefault(dependencyMap[27]);
  const guildEventsForCurrentUser = importDefault(dependencyMap[27]).getGuildEventsForCurrentUser(guildEvent.guild_id);
  obj2 = {};
  const merged = Object.assign(obj);
  obj2["acceptLabelBackgroundColor"] = acceptLabelActiveBackgroundColor;
  let prop;
  if (flag2) {
    prop = colors.acceptLabelDisabledBorderColor;
  }
  obj2["acceptLabelBorderColor"] = prop;
  obj2["acceptLabelColor"] = acceptLabelGreenColor;
  obj2["acceptLabelIcon"] = assetUriForEmbed3;
  obj2["acceptLabelText"] = stringResult2;
  let toLocaleStringResult;
  if (null != userCount) {
    toLocaleStringResult = userCount.toLocaleString();
  }
  obj2["badgeCount"] = toLocaleStringResult;
  const obj19 = importDefault(dependencyMap[27]);
  obj2["badgeIcon"] = arg1(dependencyMap[12]).getAssetUriForEmbed(importDefault(dependencyMap[28]));
  let assetUriForEmbed4;
  if (null != eventLocationIconSource) {
    assetUriForEmbed4 = arg1(dependencyMap[12]).getAssetUriForEmbed(eventLocationIconSource);
    const obj22 = arg1(dependencyMap[12]);
  }
  obj2["channelIcon"] = assetUriForEmbed4;
  let tmp51;
  if (null != locationFromEvent) {
    tmp51 = locationFromEvent;
  }
  obj2["channelName"] = tmp51;
  obj2["content"] = parseToASTResult;
  let assetUriForEmbed5;
  if (null != user) {
    assetUriForEmbed5 = arg1(dependencyMap[12]).getAssetUriForEmbed(user.getAvatarSource(guildEvent.guild_id));
    const obj23 = arg1(dependencyMap[12]);
  }
  obj2["creatorAvatar"] = assetUriForEmbed5;
  obj2["extendedType"] = CodedLinkExtendedType.GUILD_SCHEDULED_EVENT;
  obj2["guildIcon"] = assetUriForEmbed;
  name = undefined;
  if (null != guild) {
    name = guild.name;
  }
  obj2["guildName"] = name;
  let headerColor = processColor(color);
  if (null == headerColor) {
    headerColor = colors.headerColor;
  }
  obj2["headerColor"] = headerColor;
  const obj21 = arg1(dependencyMap[12]);
  obj2["headerIcon"] = arg1(dependencyMap[12]).getAssetUriForEmbed(icon);
  obj2["headerText"] = text;
  if (!shouldChangeTextColor) {
    let headerColor2 = colors.headerColor;
  } else {
    headerColor2 = processColor(color);
  }
  obj2["headerTextColor"] = headerColor2;
  obj2["isRsvped"] = flag2;
  obj2["secondaryActionIcon"] = tmp22;
  obj2["titleText"] = name;
  obj2["type"] = type.type;
  obj2["guildEventId"] = guildEvent.id;
  return obj2;
}
let closure_3 = importDefault(dependencyMap[0]);
const processColor = arg1(dependencyMap[1]).processColor;
({ isGuildEventEnded: closure_5, isGuildScheduledEventActive: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[2]);
const getGuildIconSource = arg1(dependencyMap[3]).getGuildIconSource;
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
const CodedLinkExtendedType = arg1(dependencyMap[8]).CodedLinkExtendedType;
let closure_14 = arg1(dependencyMap[9]).GuildScheduledEventEntityTypes;
const InviteTypes = arg1(dependencyMap[10]).InviteTypes;
let closure_16 = {};
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GuildScheduledEventEmbed.tsx");

export const createGuildScheduledEventInviteEmbed = function createGuildScheduledEventInviteEmbed(invite, theme) {
  let channel = invite.channel;
  let id;
  if (null != channel) {
    id = channel.id;
  }
  channel = store.getChannel(id);
  if (null != channel) {
    let guild_id = channel.guild_id;
  }
  const guild_scheduled_event = invite.guild_scheduled_event;
  let id1;
  if (null != guild_scheduled_event) {
    id1 = guild_scheduled_event.id;
  }
  const guildScheduledEvent = authStore.getGuildScheduledEvent(id1);
  const guild_scheduled_event2 = invite.guild_scheduled_event;
  if (null != guild_scheduled_event2) {
    id = guild_scheduled_event2.id;
  }
  if (null == guildScheduledEvent) {
    let tmp11Result = null;
    if (null != guild_id) {
      const guildEventsForGuild = importDefault(dependencyMap[29]).fetchGuildEventsForGuild(guild_id);
      tmp11Result = null;
      const obj4 = importDefault(dependencyMap[29]);
    }
  } else {
    if (null != guild_id) {
      let obj = importDefault(dependencyMap[27]);
      const guildEventUserCounts = obj.getGuildEventUserCounts(guild_id, guildScheduledEvent.id, []);
    }
    obj = { channel, guildEvent: guildScheduledEvent, userCount: tmp7 };
    if (null != invite.guild) {
      let fromInviteGuildResult = theme(dependencyMap[30]).fromInviteGuild(invite.guild);
      const obj3 = theme(dependencyMap[30]);
    } else {
      guild_id = undefined;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      fromInviteGuildResult = store2.getGuild(guild_id);
    }
    obj.guild = fromInviteGuildResult;
    obj.theme = theme;
    let GUILD = invite.type;
    if (null == GUILD) {
      GUILD = InviteTypes.GUILD;
    }
    obj.type = GUILD;
    tmp11Result = createGuildScheduledEventEmbed(obj);
    const tmp11 = createGuildScheduledEventEmbed;
  }
  return tmp11Result;
};
export const createGuildScheduledEventLinkEmbed = function createGuildScheduledEventLinkEmbed(code, theme) {
  const tmp = callback(code.split("-"), 3);
  const first = tmp[0];
  theme = first;
  let nextRecurrenceIdInEvent = tmp[2];
  const guildScheduledEvent = authStore.getGuildScheduledEvent(tmp[1]);
  if (null == nextRecurrenceIdInEvent) {
    let obj = theme(dependencyMap[15]);
    nextRecurrenceIdInEvent = obj.getNextRecurrenceIdInEvent(guildScheduledEvent);
  }
  if (null != guildScheduledEvent) {
    if (!callback2(guildScheduledEvent)) {
      if (null != tmp7) {
        const items = [tmp7];
        let items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCounts = importDefault(dependencyMap[27]).getGuildEventUserCounts(first, guildScheduledEvent.id, items1);
      obj = {};
      let channel_id;
      const userCount = authStore.getUserCount(guildScheduledEvent.id, tmp7);
      if (null != guildScheduledEvent) {
        channel_id = guildScheduledEvent.channel_id;
      }
      obj.channel = store.getChannel(channel_id);
      obj.guildEvent = guildScheduledEvent;
      obj.userCount = userCount;
      obj.guild = store2.getGuild(first);
      obj.theme = theme;
      obj.type = InviteTypes.GUILD;
      obj.recurrenceId = tmp7;
      return createGuildScheduledEventEmbed(obj);
    }
  }
  if (!closure_16[first]) {
    const guildEventsForGuild = importDefault(dependencyMap[29]).fetchGuildEventsForGuild(first);
    const obj4 = importDefault(dependencyMap[29]);
    guildEventsForGuild.then(() => {
      delete r1[r0];
      return first;
    }).catch(() => {
      delete r1[r0];
      return first;
    });
    closure_16[first] = true;
    const nextPromise = guildEventsForGuild.then(() => {
      delete r1[r0];
      return first;
    });
  }
  return null;
};
