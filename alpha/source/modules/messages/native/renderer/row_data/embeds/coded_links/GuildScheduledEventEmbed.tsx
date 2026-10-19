// Module ID: 14301
// Function ID: 14302
// Name: GuildScheduledEventEmbed
// Dependencies: [5, 32, 17, 6332, 2086, 2068, 2090, 4855, 1392, 9907, 2074, 7689, 5179, 8156, 8158, 8807, 8802, 8794, 9048, 1128, 8161, 8998, 8017, 587, 14302, 8797, 5521, 8921, 8791, 14303, 8792, 2082, 8798, 8799, 2]
// Exports: createGuildScheduledEventInviteEmbed, createGuildScheduledEventLinkEmbed

// Module 14301 (GuildScheduledEventEmbed)
import react_native from "react-native" /* 17 */;
import intl5 from "intl" /* 1128 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2074 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2082 */;
import GuildRecord from "GuildRecord" /* 2086 */;
import useChannelName from "useChannelName" /* 5521 */;
import Constants from "Constants" /* 7689 */;
import react_native2 from "react-native" /* 8017 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8156 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8158 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 8791 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 8792 */;
import ScheduleUtils from "ScheduleUtils" /* 8794 */;
import EntityUtils from "EntityUtils" /* 8797 */;
import useEventSchedule from "useEventSchedule" /* 8802 */;
import useCanInviteForGuildEvent from "useCanInviteForGuildEvent" /* 8807 */;
import GuildEventUtils from "GuildEventUtils" /* 8921 */;
import GuildScheduledEventHeaderUtils from "GuildScheduledEventHeaderUtils" /* 9048 */;
import CodedLinksConstants from "CodedLinksConstants" /* 9907 */;
import AssetRegistryDefault from "AssetRegistry" /* 14303 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildScheduledEventStore_mod from "GuildScheduledEventStore" /* 6332 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import GuildStore from "GuildStore" /* 2090 */;
import RelationshipStore from "RelationshipStore" /* 4855 */;
import UserStore from "UserStore" /* 1392 */;
import MarkupUtils from "MarkupUtils" /* 5179 */;
import size from "module_2" /* 2 */;

let c2, c3, closure_1, importDefault;

let metroImportDefault;
let metroRequire;
function createGuildScheduledEventEmbed(type) {
  let acceptLabelActiveBackgroundColor;
  let acceptLabelGreenColor;
  let assetUriForEmbed3;
  let assetUriForEmbed4;
  let assetUriForEmbed5;
  let channel;
  let description;
  let entity_type2;
  let flag2;
  let guild;
  let guildEvent;
  let guild_id;
  let headerColor;
  let headerColor2;
  let icon;
  let id;
  let id2;
  let items1;
  let name;
  let name1;
  let prop;
  let recurrenceId;
  let shouldChangeTextColor;
  let stringResult2;
  let text;
  let theme;
  let tmp22;
  let tmp7Result19;
  let tmp7Result22;
  let toLocaleStringResult;
  let userCount;
  ({ channel, guildEvent, userCount, guild, theme, recurrenceId } = type);
  type = type.type;
  const colors = getEmbedThemeColorsDefault(theme).colors;
  if (channel != null) {
    id = channel.id;
  }
  let tmp3;
  if (null != guild) {
    tmp3 = getGuildIconSource(guild, 128, false);
  }
  let assetUriForEmbed;
  if (null != tmp3) {
    const obj = renderer_EmbedUtils;
    assetUriForEmbed = obj.getAssetUriForEmbed(tmp3);
  }
  const obj2 = useCanInviteForGuildEvent;
  const result = obj2.isGuildEventInvitable(guildEvent);
  const entity_type = guildEvent.entity_type;
  const EXTERNAL = constants.EXTERNAL;
  const tmp9 = metroImportDefault(guildEvent);
  const result1 = GuildScheduledEventStore.isInterestedInEventRecurrence(guildEvent.id, recurrenceId);
  ({ description, name, entity_type: entity_type2 } = guildEvent);
  const STAGE_INSTANCE = constants.STAGE_INSTANCE;
  const obj3 = useEventSchedule;
  const eventSchedule = obj3.getEventSchedule(guildEvent, recurrenceId);
  let toISOStringResult;
  const getEventTimeData = ScheduleUtils.getEventTimeData;
  ScheduleUtils;
  if (eventSchedule != null) {
    const startTime = eventSchedule.startTime;
    toISOStringResult = startTime.toISOString();
  }
  const tmp14 = entity_type2 === STAGE_INSTANCE;
  const eventTimeData = getEventTimeData(toISOStringResult);
  const tmp7Result = GuildScheduledEventHeaderUtils;
  const guildScheduledEventHeaderProps = tmp7Result.getGuildScheduledEventHeaderProps({ eventTimeData, isStage: tmp14, theme, event: guildEvent });
  const color = guildScheduledEventHeaderProps.color;
  const obj4 = { titleColor: colors.titleColor, borderColor: colors.borderColor, backgroundColor: colors.backgroundColor, thumbnailCornerRadius: 15, embedCanBeTapped: null != guild };
  ({ icon, shouldChangeTextColor, text } = guildScheduledEventHeaderProps);
  const intl = tmp7(1128).intl;
  const stringResult = intl.string(intl5.t.DlcqlU);
  const tmp7Result12 = renderer_EmbedUtils;
  const assetUriForEmbed1 = tmp7Result12.getAssetUriForEmbed(tmp(8161));
  const tmp7Result13 = renderer_EmbedUtils;
  const assetUriForEmbed2 = tmp7Result13.getAssetUriForEmbed(tmp(8998));
  if (null != guild) {
    if (tmp9) {
      let stringResult1;
      const acceptLabelActiveBackgroundColor2 = colors.acceptLabelActiveBackgroundColor;
      if (entity_type === EXTERNAL) {
        const intl4 = tmp7(1128).intl;
        stringResult1 = intl4.string(tmp7(1128).t.GoCQxU);
      } else {
        const intl3 = tmp7(1128).intl;
        stringResult1 = intl3.string(tmp7(1128).t.IaYdtW);
      }
      acceptLabelGreenColor = colors.acceptLabelGreenColor;
      flag2 = false;
      stringResult2 = stringResult1;
      tmp22 = assetUriForEmbed2;
      acceptLabelActiveBackgroundColor = acceptLabelActiveBackgroundColor2;
    } else if (result1) {
      acceptLabelActiveBackgroundColor = colors.backgroundColor;
      const tmp7Result14 = renderer_EmbedUtils;
      assetUriForEmbed3 = tmp7Result14.getAssetUriForEmbed(tmp(14302));
      acceptLabelGreenColor = colors.acceptLabelDisabledTextColor;
      tmp22 = assetUriForEmbed2;
      stringResult2 = stringResult;
      flag2 = result1;
    } else {
      ({ acceptLabelActiveBackgroundColor, acceptLabelGreenColor } = colors);
      tmp22 = assetUriForEmbed2;
      assetUriForEmbed3 = assetUriForEmbed1;
      stringResult2 = stringResult;
      flag2 = result1;
    }
  } else {
    const tmp7Result15 = react_native2;
    acceptLabelActiveBackgroundColor = tmp7Result15.processColorOrThrow(tmp(587).unsafe_rawColors.GREEN_360);
    const intl2 = tmp7(1128).intl;
    stringResult2 = intl2.string(tmp7(1128).t.XpeFYr);
    acceptLabelGreenColor = colors.acceptLabelGreenColor;
    flag2 = false;
  }
  let parseToASTResult;
  if (null != description) {
    const obj5 = { channelId: id, allowLinks: true, allowEmojiLinks: true, allowHeading: true, allowList: true };
    const tmpResult = MarkupUtils;
    parseToASTResult = tmpResult.parseToAST(description, true, obj5);
  }
  const tmp7Result16 = EntityUtils;
  const locationFromEvent = tmp7Result16.getLocationFromEvent(guildEvent);
  let tmp27;
  if (null != locationFromEvent) {
    const obj6 = { channelId: id, guildId: guildEvent.guild_id, allowLinks: true, allowEmojiLinks: true };
    tmp27 = closure_17(locationFromEvent, true, obj6);
  }
  let tmp29 = locationFromEvent;
  if (locationFromEvent == null) {
    let channelName;
    if (null != channel) {
      const tmp7Result17 = useChannelName;
      channelName = tmp7Result17.computeChannelName(channel, UserStore, RelationshipStore);
    }
    tmp29 = channelName;
  }
  const tmp7Result18 = GuildEventUtils;
  const eventLocationIconSource = tmp7Result18.getEventLocationIconSource(guildEvent, channel, tmp17);
  const user = UserStore.getUser(guildEvent.creator_id);
  const getGuildEventUserCountsForEmbed = GuildScheduledEventManagerDefault.getGuildEventUserCountsForEmbed;
  ({ guild_id, id: id2 } = guildEvent);
  GuildScheduledEventManagerDefault;
  if (null != recurrenceId) {
    const items = [recurrenceId];
    items1 = items;
  } else {
    items1 = [];
  }
  const guildEventUserCountsForEmbed = getGuildEventUserCountsForEmbed(guild_id, id2, items1);
  const tmpResult4 = GuildScheduledEventManagerDefault;
  const guildEventsForCurrentUser = tmpResult4.getGuildEventsForCurrentUser(guildEvent.guild_id);
  const obj7 = { acceptLabelBackgroundColor: acceptLabelActiveBackgroundColor, acceptLabelBorderColor: prop, acceptLabelColor: acceptLabelGreenColor, acceptLabelIcon: assetUriForEmbed3, acceptLabelText: stringResult2, badgeCount: toLocaleStringResult, badgeIcon: tmp7Result19.getAssetUriForEmbed(AssetRegistryDefault), channelIcon: assetUriForEmbed4, channelName: tmp29, content: parseToASTResult, creatorAvatar: assetUriForEmbed5, extendedType: CodedLinkExtendedType.GUILD_SCHEDULED_EVENT, guildIcon: assetUriForEmbed, guildName: name1, headerColor, headerIcon: tmp7Result22.getAssetUriForEmbed(icon), headerText: text, headerTextColor: headerColor2, isRsvped: flag2, locationContent: tmp27, secondaryActionIcon: tmp22, titleText: name, type, guildEventId: guildEvent.id };
  const merged = Object.assign(obj4);
  prop = undefined;
  if (flag2) {
    prop = colors.acceptLabelDisabledBorderColor;
  }
  toLocaleStringResult = undefined;
  if (userCount != null) {
    toLocaleStringResult = userCount.toLocaleString();
  }
  assetUriForEmbed4 = undefined;
  tmp7Result19 = renderer_EmbedUtils;
  if (null != eventLocationIconSource) {
    const tmp7Result20 = renderer_EmbedUtils;
    assetUriForEmbed4 = tmp7Result20.getAssetUriForEmbed(eventLocationIconSource);
  }
  assetUriForEmbed5 = undefined;
  if (null != user) {
    const tmp7Result21 = renderer_EmbedUtils;
    assetUriForEmbed5 = tmp7Result21.getAssetUriForEmbed(user.getAvatarSource(guildEvent.guild_id));
  }
  name1 = undefined;
  if (guild != null) {
    name1 = guild.name;
  }
  headerColor = processColor(color);
  const tmp43 = processColor;
  if (headerColor == null) {
    headerColor = colors.headerColor;
  }
  tmp7Result22 = renderer_EmbedUtils;
  if (shouldChangeTextColor) {
    let headerColor3 = tmp43(color);
    if (headerColor3 == null) {
      headerColor3 = colors.headerColor;
    }
    headerColor2 = headerColor3;
  } else {
    headerColor2 = colors.headerColor;
  }
  return obj7;
}
const processColor = react_native.processColor;
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
({ isGuildEventEnded: metroRequire, isGuildScheduledEventActive: metroImportDefault } = GuildScheduledEventStore);
GuildScheduledEventStore = GuildScheduledEventStore_mod;
const getGuildIconSource = GuildRecord.getGuildIconSource;
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
const constants = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const InviteTypes = Constants.InviteTypes;
let closure_17 = MarkupUtils.astParserFor(MarkupUtils.guildEventLocationRules);
const map = new Map();
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GuildScheduledEventEmbed.tsx");

export const createGuildScheduledEventInviteEmbed = function createGuildScheduledEventInviteEmbed(invite, theme) {
  let GUILD;
  let fromInviteGuildResult;
  let guild_id;
  let tmp11Result;
  const channel = invite.channel;
  let id1;
  const getChannel = ChannelStore.getChannel;
  if (channel != null) {
    id1 = channel.id;
  }
  const channel1 = getChannel(id1);
  if (channel1 != null) {
    guild_id = channel1.guild_id;
  }
  const guild_scheduled_event = invite.guild_scheduled_event;
  let id2;
  const getGuildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent;
  if (guild_scheduled_event != null) {
    id2 = guild_scheduled_event.id;
  }
  const guildScheduledEvent = getGuildScheduledEvent(id2);
  const guild_scheduled_event2 = invite.guild_scheduled_event;
  if (guild_scheduled_event2 != null) {
    const id = guild_scheduled_event2.id;
  }
  if (null == guildScheduledEvent) {
    tmp11Result = null;
    if (null != guild_id) {
      const obj4 = GuildScheduledEventsActionCreatorsDefault;
      const guildEventsForGuild = obj4.fetchGuildEventsForGuild(guild_id);
      tmp11Result = null;
    }
  } else {
    if (null != guild_id) {
      const obj = GuildScheduledEventManagerDefault;
      const guildEventUserCountsForEmbed = obj.getGuildEventUserCountsForEmbed(guild_id, guildScheduledEvent.id, []);
    }
    const obj2 = { channel: channel1, guildEvent: guildScheduledEvent, userCount: tmp7, guild: fromInviteGuildResult, theme, type: GUILD };
    const tmp11 = createGuildScheduledEventEmbed;
    if (null != invite.guild) {
      const obj3 = GuildRecordUtils;
      fromInviteGuildResult = obj3.fromInviteGuild(invite.guild);
    } else {
      let guild_id1;
      const getGuild = GuildStore.getGuild;
      if (channel1 != null) {
        guild_id1 = channel1.guild_id;
      }
      fromInviteGuildResult = getGuild(guild_id1);
    }
    GUILD = invite.type;
    if (GUILD == null) {
      GUILD = InviteTypes.GUILD;
    }
    tmp11Result = tmp11(obj2);
  }
  return tmp11Result;
};
export const createGuildScheduledEventLinkEmbed = function createGuildScheduledEventLinkEmbed(code, theme) {
  let first;
  let nextRecurrenceIdInEvent;
  let tmp3;
  [first, tmp3, nextRecurrenceIdInEvent] = code.split("-");
  importDefault = tmp3;
  let obj = GuildScheduledEventStore;
  const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(tmp3);
  if (nextRecurrenceIdInEvent == null) {
    let obj2 = first(8794);
    nextRecurrenceIdInEvent = obj2.getNextRecurrenceIdInEvent(guildScheduledEvent);
  }
  if (null != guildScheduledEvent) {
    const tmp20 = closure_6;
    if (!closure_6(guildScheduledEvent)) {
      let items1;
      const getGuildEventUserCountsForEmbed = GuildScheduledEventManagerDefault.getGuildEventUserCountsForEmbed;
      const id = guildScheduledEvent.id;
      if (null != nextRecurrenceIdInEvent) {
        const items = [nextRecurrenceIdInEvent];
        items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCountsForEmbed = getGuildEventUserCountsForEmbed(first, id, items1);
      let channel_id;
      const userCount = obj.getUserCount(guildScheduledEvent.id, nextRecurrenceIdInEvent);
      const getChannel = ChannelStore.getChannel;
      const tmp13 = createGuildScheduledEventEmbed;
      if (guildScheduledEvent != null) {
        channel_id = guildScheduledEvent.channel_id;
      }
      let obj3 = { channel: getChannel(channel_id), guildEvent: guildScheduledEvent, userCount, guild: GuildStore.getGuild(first), theme, type: InviteTypes.GUILD, recurrenceId: nextRecurrenceIdInEvent };
      return tmp13(obj3);
    }
  }
  let obj4 = first(8798);
  const guardGuildEventFetchResult = obj4.guardGuildEventFetch(first, tmp3, _asyncToGenerator(async function(arg0, value) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp;
            value = map.get(first);
            const obj7 = map;
            const tmp30 = first;
            if (null == value) {
              const obj3 = value(c2[33]);
              const result = obj3.scheduleGuildEventEmbedFetch(() => {
                const obj = closure_1(c2[30]);
                return obj.fetchGuildEventsForGuild(closure_1_0);
              });
              const cleanupPromise = result.finally(() => {
                map.delete(closure_1_0);
              });
              const result1 = obj7.set(tmp30, cleanupPromise);
              value = cleanupPromise;
            }
            c2 = 1;
            c3 = 1;
            const obj5 = { value, done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          value = guildScheduledEvent.getGuildScheduledEvent(closure_129_1);
          if (null != value) {
            if (!closure_1_6(value)) {
              c3 = 3;
              let obj = { value, done: true };
              return obj;
            }
          }
          const self = this;
          const self2 = this;
          const guildEventUnavailableError = new value(c2[32]).GuildEventUnavailableError("guild event not found");
          throw guildEventUnavailableError;
        }
      } catch (tmp20) {
        c3 = 3;
        throw tmp20;
      }
    }
  }));
  guardGuildEventFetchResult.catch(() => {

  });
  return null;
};
