// Module ID: 12315
// Function ID: 96015
// Name: createGuildScheduledEventEmbed
// Dependencies: [57, 27, 6758, 1391, 1348, 1838, 3767, 1849, 9515, 1354, 6978, 7722, 7724, 8406, 8396, 8390, 12229, 1212, 7727, 10923, 7714, 689, 10361, 4120, 8393, 4320, 8493, 8401, 12316, 8388, 1387, 2]
// Exports: createGuildScheduledEventInviteEmbed, createGuildScheduledEventLinkEmbed

// Module 12315 (createGuildScheduledEventEmbed)
import _slicedToArray from "_slicedToArray";
import { processColor } from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { getGuildIconSource } from "isGuildOwner";
import closure_9 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { CodedLinkExtendedType } from "CodedLinkExtendedType";
import { GuildScheduledEventEntityTypes as closure_14 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { InviteTypes } from "InviteSendStates";

let closure_5;
let closure_6;
const require = arg1;
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
  const colors = importDefault(7722)(theme).colors;
  if (null != channel) {
    const id = channel.id;
  }
  let tmp;
  if (null != guild) {
    tmp = getGuildIconSource(guild, 128, false);
  }
  let assetUriForEmbed;
  if (null != tmp) {
    let obj = require(7724) /* frozen */;
    assetUriForEmbed = obj.getAssetUriForEmbed(tmp);
  }
  let obj1 = require(8406) /* canEveryoneRoleViewEvent */;
  const result = obj1.isGuildEventInvitable(guildEvent);
  const result1 = authStore.isInterestedInEventRecurrence(guildEvent.id, recurrenceId);
  const description = guildEvent.description;
  ({ name, entity_type } = guildEvent);
  let obj2 = require(8396) /* _getEventSchedule */;
  const eventSchedule = obj2.getEventSchedule(guildEvent, recurrenceId);
  const tmp7 = callback3(guildEvent);
  let toISOStringResult;
  if (null != eventSchedule) {
    const startTime = eventSchedule.startTime;
    toISOStringResult = startTime.toISOString();
  }
  const eventTimeData = require(8390) /* getNextBucketedTime */.getEventTimeData(toISOStringResult);
  const obj4 = require(8390) /* getNextBucketedTime */;
  obj = { eventTimeData, isStage: entity_type === constants.STAGE_INSTANCE, theme, event: guildEvent };
  const guildScheduledEventHeaderProps = require(12229) /* getGuildScheduledEventHeaderProps */.getGuildScheduledEventHeaderProps(obj);
  const color = guildScheduledEventHeaderProps.color;
  obj = { titleColor: colors.titleColor, borderColor: colors.borderColor, backgroundColor: colors.backgroundColor, thumbnailCornerRadius: 15, embedCanBeTapped: tmp13 };
  ({ icon, shouldChangeTextColor, text } = guildScheduledEventHeaderProps);
  const intl = require(1212) /* getSystemLocale */.intl;
  const stringResult = intl.string(require(1212) /* getSystemLocale */.t.DlcqlU);
  const obj5 = require(12229) /* getGuildScheduledEventHeaderProps */;
  const assetUriForEmbed1 = require(7724) /* frozen */.getAssetUriForEmbed(importDefault(7727));
  const obj8 = require(7724) /* frozen */;
  const assetUriForEmbed2 = require(7724) /* frozen */.getAssetUriForEmbed(importDefault(10923));
  if (null != guild) {
    if (tmp7) {
      if (guildEvent.entity_type === constants.EXTERNAL) {
        const intl4 = require(1212) /* getSystemLocale */.intl;
        let stringResult1 = intl4.string(require(1212) /* getSystemLocale */.t.GoCQxU);
      } else {
        const intl3 = require(1212) /* getSystemLocale */.intl;
        stringResult1 = intl3.string(require(1212) /* getSystemLocale */.t.IaYdtW);
      }
      const acceptLabelGreenColor2 = colors.acceptLabelGreenColor;
      const acceptLabelActiveBackgroundColor2 = colors.acceptLabelActiveBackgroundColor;
    } else if (result1) {
      acceptLabelActiveBackgroundColor = colors.backgroundColor;
      let assetUriForEmbed3 = require(7724) /* frozen */.getAssetUriForEmbed(importDefault(10361));
      acceptLabelGreenColor = colors.acceptLabelDisabledTextColor;
      let flag2 = result1;
      let stringResult2 = stringResult;
      let tmp22 = assetUriForEmbed2;
      const obj11 = require(7724) /* frozen */;
    } else {
      ({ acceptLabelActiveBackgroundColor, acceptLabelGreenColor } = colors);
      flag2 = result1;
      stringResult2 = stringResult;
      assetUriForEmbed3 = assetUriForEmbed1;
      tmp22 = assetUriForEmbed2;
    }
  } else {
    acceptLabelActiveBackgroundColor = require(7714) /* processColorOrThrow */.processColorOrThrow(importDefault(689).unsafe_rawColors.GREEN_360);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    stringResult2 = intl2.string(require(1212) /* getSystemLocale */.t.XpeFYr);
    acceptLabelGreenColor = colors.acceptLabelGreenColor;
    flag2 = false;
    const obj10 = require(7714) /* processColorOrThrow */;
  }
  let parseToASTResult;
  if (null != description) {
    obj1 = { channelId: id, allowLinks: true, allowEmojiLinks: true, allowHeading: true, allowList: true };
    parseToASTResult = importDefault(4120).parseToAST(description, true, obj1);
    const obj12 = importDefault(4120);
  }
  const obj9 = require(7724) /* frozen */;
  let locationFromEvent = require(8393) /* _getLocationFromEvent */.getLocationFromEvent(guildEvent);
  if (null == locationFromEvent) {
    let channelName;
    if (null != channel) {
      channelName = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, user, closure_11);
      const obj15 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
    }
    locationFromEvent = channelName;
  }
  const obj14 = require(8393) /* _getLocationFromEvent */;
  const eventLocationIconSource = require(8493) /* getEventLocationIconSource */.getEventLocationIconSource(guildEvent, channel, tmp13);
  user = user.getUser(guildEvent.creator_id);
  const obj16 = require(8493) /* getEventLocationIconSource */;
  ({ guild_id, id: id2 } = guildEvent);
  if (null != recurrenceId) {
    const items = [recurrenceId];
    let items1 = items;
  } else {
    items1 = [];
  }
  const guildEventUserCounts = importDefault(8401).getGuildEventUserCounts(guild_id, id2, items1);
  const obj18 = importDefault(8401);
  const guildEventsForCurrentUser = importDefault(8401).getGuildEventsForCurrentUser(guildEvent.guild_id);
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
  const obj19 = importDefault(8401);
  obj2["badgeIcon"] = require(7724) /* frozen */.getAssetUriForEmbed(importDefault(12316));
  let assetUriForEmbed4;
  if (null != eventLocationIconSource) {
    assetUriForEmbed4 = require(7724) /* frozen */.getAssetUriForEmbed(eventLocationIconSource);
    const obj22 = require(7724) /* frozen */;
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
    assetUriForEmbed5 = require(7724) /* frozen */.getAssetUriForEmbed(user.getAvatarSource(guildEvent.guild_id));
    const obj23 = require(7724) /* frozen */;
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
  const obj21 = require(7724) /* frozen */;
  obj2["headerIcon"] = require(7724) /* frozen */.getAssetUriForEmbed(icon);
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
({ isGuildEventEnded: closure_5, isGuildScheduledEventActive: closure_6 } = _isNativeReflectConstruct);
let closure_16 = {};
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GuildScheduledEventEmbed.tsx");

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
      const guildEventsForGuild = importDefault(8388).fetchGuildEventsForGuild(guild_id);
      tmp11Result = null;
      const obj4 = importDefault(8388);
    }
  } else {
    if (null != guild_id) {
      let obj = importDefault(8401);
      const guildEventUserCounts = obj.getGuildEventUserCounts(guild_id, guildScheduledEvent.id, []);
    }
    obj = { channel, guildEvent: guildScheduledEvent, userCount: tmp7 };
    if (null != invite.guild) {
      let fromInviteGuildResult = require(1387) /* fromGuildPropertiesWithAdditionalFields */.fromInviteGuild(invite.guild);
      const obj3 = require(1387) /* fromGuildPropertiesWithAdditionalFields */;
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
export const createGuildScheduledEventLinkEmbed = function createGuildScheduledEventLinkEmbed(code, closure_2) {
  const tmp = callback(code.split("-"), 3);
  const first = tmp[0];
  let nextRecurrenceIdInEvent = tmp[2];
  const guildScheduledEvent = authStore.getGuildScheduledEvent(tmp[1]);
  if (null == nextRecurrenceIdInEvent) {
    let obj = first(8390);
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
      const guildEventUserCounts = importDefault(8401).getGuildEventUserCounts(first, guildScheduledEvent.id, items1);
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
      obj.theme = closure_2;
      obj.type = InviteTypes.GUILD;
      obj.recurrenceId = tmp7;
      return createGuildScheduledEventEmbed(obj);
    }
  }
  if (!table[first]) {
    const guildEventsForGuild = importDefault(8388).fetchGuildEventsForGuild(first);
    const obj4 = importDefault(8388);
    guildEventsForGuild.then(() => {
      delete tmp2[tmp];
      return first;
    }).catch(() => {
      delete tmp2[tmp];
      return first;
    });
    table[first] = true;
    const nextPromise = guildEventsForGuild.then(() => {
      delete tmp2[tmp];
      return first;
    });
  }
  return null;
};
