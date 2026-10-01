// Module ID: 10846
// Function ID: 10847
// Name: MessageImpressionAnalyticsHelpers
// Dependencies: [19, 4817, 4860, 1074, 7102, 7155, 10847, 6685, 4821, 7154, 10848, 10849, 4818, 2]
// Exports: handleAnnouncementMessageViewTracking, handleOfficialMessageViewTracking, handleRichPresenceInviteEmbedViewTracking, handleVoiceInviteEmbedViewTracking, useShouldTrackAnnouncementMessageViews, useShouldTrackOfficialMessageViews, useShouldTrackRichPresenceInviteEmbedViews, useShouldTrackVoiceInviteEmbedViews

// Module 10846 (MessageImpressionAnalyticsHelpers)
import CodedLink from "CodedLink" /* 4821 */;
import MessageEmbedConstants from "MessageEmbedConstants" /* 7102 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7154 */;
import Constants2 from "Constants" /* 7155 */;
import MessageViewTrackingManager from "MessageViewTrackingManager" /* 10847 */;
import VoiceChannelListInviteExperiment from "VoiceChannelListInviteExperiment" /* 10848 */;
import VoiceChannelListInviteEmbed from "VoiceChannelListInviteEmbed" /* 10849 */;
import react from "react" /* 19 */;
import InviteStore from "InviteStore" /* 4817 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4860 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, message;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function getVoiceInviteEmbedRenderInfo(state) {
  if (state.state !== metroImportAll.RESOLVING) {
    if (state.state !== metroImportAll.EXPIRED) {
      if (state.state !== metroImportAll.BANNED) {
        if (state.state !== metroImportAll.ERROR) {
          const obj5 = InviteTypeUtils;
          if (obj5.getInviteType(state) !== InviteTypes.GUILD) {
            return null;
          } else {
            const tmp7Result = InviteTypeUtils;
            const guildInviteExtendedType = tmp7Result.getGuildInviteExtendedType(state);
            if (guildInviteExtendedType !== InviteTypeUtils.GuildInviteExtendedType.VOICE_CHANNEL) {
              return null;
            } else {
              const guild = state.guild;
              let id;
              if (guild != null) {
                id = guild.id;
              }
              let tmp4 = null;
              if (null != id) {
                const obj = { guildId: id, location: "mobile_invite_embed_impression" };
                const tmp7Result3 = VoiceChannelListInviteExperiment;
                let enabled = tmp7Result3.getVoiceChannelListInviteExperiment(obj).enabled;
                if (enabled) {
                  const tmp7Result4 = VoiceChannelListInviteEmbed;
                  enabled = tmp7Result4.canShowVoiceChannelListInviteEmbed(state);
                }
                tmp4 = { treatmentRendered: enabled };
                const obj2 = { treatmentRendered: enabled };
              }
              return tmp4;
            }
          }
        }
      }
    }
  }
  return null;
}
({ ChannelTypes: metroRequire, GuildFeatures: metroImportDefault, InviteStates: metroImportAll, MessageFlags: c9 } = Constants);
const LinkType = MessageEmbedConstants.LinkType;
const InviteTypes = Constants2.InviteTypes;
let result = size.fileFinishedImporting("modules/messages/native/MessageImpressionAnalyticsHelpers.tsx");

export const useShouldTrackAnnouncementMessageViews = function useShouldTrackAnnouncementMessageViews(messages) {
  let channel;
  let guild;
  ({ guild, channel } = messages);
  messages = messages.messages;
  const isMessagesReady = messages.isMessagesReady;
  let flag;
  if (guild != null) {
    const features = guild.features;
    if (features != null) {
      let tmp = constants2;
      flag = features.has(constants2.COMMUNITY);
    }
  }
  if (flag == null) {
    flag = false;
  }
  const items = [, , , , ];
  ({ type: arr[0], guild_id: arr[1] } = channel);
  items[2] = flag;
  items[3] = isMessagesReady;
  items[4] = messages;
  return flag.useMemo(() => {
    let guild_id;
    let tmp = channel.type === metroRequire.GUILD_ANNOUNCEMENT && flag;
    let someResult = isMessagesReady;
    if (someResult) {
      someResult = messages.some((messageReference) => {
        const hasFlagResult = null != messageReference.messageReference && null != messageReference.webhookId && messageReference.hasFlag(constants.IS_CROSSPOST) && null != guild_id.guild_id;
        return hasFlagResult;
      });
    }
    if (!tmp) {
      tmp = someResult;
    }
    return tmp;
  }, items);
};
export const useShouldTrackRichPresenceInviteEmbedViews = function useShouldTrackRichPresenceInviteEmbedViews(messages) {
  messages = messages.messages;
  const isMessagesReady = messages.isMessagesReady;
  const items = [messages, isMessagesReady];
  return react.useMemo(() => {
    const someResult = isMessagesReady && messages.some((activity) => null != activity.activity && null != activity.activity.party_id && null != activity.application);
    return someResult;
  }, items);
};
export const handleAnnouncementMessageViewTracking = function handleAnnouncementMessageViewTracking(arr, shouldTrackAnnouncementMessageViews, guildId, channel) {
  _require = guildId;
  importDefault = channel;
  const tmp = shouldTrackAnnouncementMessageViews;
  if (tmp) {
    if (null != guildId) {
      const items = [];
      const item = arr.forEach((message) => {
        message = message.message;
        const messageReference = message.messageReference;
        let guild_id1;
        if (messageReference != null) {
          guild_id1 = messageReference.guild_id;
        }
        const hasFlagResult = null != guild_id1 && null != message.webhookId && message.hasFlag(constants.IS_CROSSPOST);
        if (!message.hasFlag(constants.EPHEMERAL)) {
          if (channel.type === metroRequire.GUILD_ANNOUNCEMENT) {
            if (hasFlagResult) {
              let id;
              if (null != message.messageReference) {
                id = message.messageReference.channel_id;
              }
              if (hasFlagResult) {
                let guild_id;
                const messageReference2 = message.messageReference;
                let guild_id2;
                if (messageReference2 != null) {
                  guild_id2 = messageReference2.guild_id;
                }
                if (null != guild_id2) {
                  guild_id = message.messageReference.guild_id;
                }
                if (hasFlagResult) {
                  let id2;
                  if (null != message.messageReference) {
                    id2 = message.messageReference.message_id;
                  }
                  const push = items.push;
                  const obj = { type: MessageViewTrackingManager.MessageViewTrackingType.ANNOUNCEMENT, messageId: id2, channelId: channel.id, guildId, sourceChannelId: id, sourceGuildId: guild_id };
                  push(obj);
                }
                id2 = message.id;
              }
              guild_id = guildId;
            }
            id = tmp4.id;
          }
        }
      });
      let obj = require("MessageViewTrackingManager");
      const result = obj.handleMessageListVisibilityChange(items, require("MessageViewTrackingManager").MessageViewTrackingType.ANNOUNCEMENT);
    }
  }
};
export const handleRichPresenceInviteEmbedViewTracking = function handleRichPresenceInviteEmbedViewTracking(arr, shouldTrackRichPresenceInviteEmbedViews, guildId, channel) {
  _require = guildId;
  importDefault = channel;
  const tmp = shouldTrackRichPresenceInviteEmbedViews;
  if (tmp) {
    const items = [];
    const item = arr.forEach((message) => {
      message = message.message;
      const hasFlagResult = message.hasFlag(constants.EPHEMERAL) || null == message.activity || null == message.activity.party_id || null == message.application;
      if (!hasFlagResult) {
        const push = items.push;
        const obj = { type: MessageViewTrackingManager.MessageViewTrackingType.APP_EMBED, messageId: message.id, channelId: channel.id, guildId, applicationId: message.application.id, linkType: LinkType.RICH_PRESENCE_INVITE };
        push(obj);
      }
    });
    let obj = require("MessageViewTrackingManager");
    const result = obj.handleMessageListVisibilityChange(items, require("MessageViewTrackingManager").MessageViewTrackingType.APP_EMBED);
  }
};
export const useShouldTrackOfficialMessageViews = function useShouldTrackOfficialMessageViews(isMessagesReady) {
  let guild;
  let messages;
  ({ guild, messages } = isMessagesReady);
  isMessagesReady = isMessagesReady.isMessagesReady;
  let isGuildOfficialMessagesEnabled;
  let id;
  const useIsGuildOfficialMessagesEnabled = messages(isGuildOfficialMessagesEnabled[7]).useIsGuildOfficialMessagesEnabled;
  messages(isGuildOfficialMessagesEnabled[7]);
  if (guild != null) {
    id = guild.id;
  }
  if (id == null) {
    id = null;
  }
  isGuildOfficialMessagesEnabled = useIsGuildOfficialMessagesEnabled(id, "useShouldTrackOfficialMessageViews");
  const items = [isGuildOfficialMessagesEnabled, isMessagesReady, messages];
  return react.useMemo(() => {
    const someResult = isGuildOfficialMessagesEnabled && isMessagesReady && messages.some((hasFlag) => hasFlag.hasFlag(constants.IS_GUILD_OFFICIAL));
    return someResult;
  }, items);
};
export const handleOfficialMessageViewTracking = function handleOfficialMessageViewTracking(arr, shouldTrackOfficialMessageViews, guildId, channel) {
  _require = guildId;
  importDefault = channel;
  const tmp = shouldTrackOfficialMessageViews;
  if (tmp) {
    if (null != guildId) {
      let tmp3 = arr;
      const items = [];
      const item = arr.forEach((message) => {
        message = message.message;
        const hasFlagResult = message.hasFlag(constants.EPHEMERAL);
        const tmp3 = !hasFlagResult && message.hasFlag(constants.IS_GUILD_OFFICIAL);
        if (tmp3) {
          const push = items.push;
          const obj = { type: MessageViewTrackingManager.MessageViewTrackingType.OFFICIAL_MESSAGE, messageId: message.id, channelId: channel.id, guildId };
          push(obj);
        }
      });
      let obj = require("MessageViewTrackingManager");
      const result = obj.handleMessageListVisibilityChange(items, require("MessageViewTrackingManager").MessageViewTrackingType.OFFICIAL_MESSAGE);
    }
  }
};
export const useShouldTrackVoiceInviteEmbedViews = function useShouldTrackVoiceInviteEmbedViews(messages) {
  messages = messages.messages;
  const isMessagesReady = messages.isMessagesReady;
  const items = [messages, isMessagesReady];
  return react.useMemo(() => {
    const someResult = isMessagesReady && messages.some((codedLinks) => {
      codedLinks = codedLinks.codedLinks;
      return codedLinks.some((type) => type.type === closure_1_0(closure_1_2[8]).CodedLinkType.INVITE);
    });
    return someResult;
  }, items);
};
export const handleVoiceInviteEmbedViewTracking = function handleVoiceInviteEmbedViewTracking(arr, shouldTrackVoiceInviteEmbedViews, guildId, channel) {
  _require = guildId;
  importDefault = channel;
  const tmp = shouldTrackVoiceInviteEmbedViews;
  if (tmp) {
    const items = [];
    const item = arr.forEach((message) => {
      let inviteInstanceId;
      let tmp20;
      message = message.message;
      if (!message.hasFlag(constants.EPHEMERAL)) {
        const codedLinks = message.codedLinks;
        const iter = codedLinks[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp6 = nextResult;
          let tmp7 = require;
          if (nextResult.type === CodedLink.CodedLinkType.INVITE) {
            let invite = InviteStore.getInvite(tmp6.code);
            let tmp34 = invite;
            if (null != invite) {
              let tmp37 = getVoiceInviteEmbedRenderInfo(tmp34);
              if (null != tmp37) {
                channel = tmp34.channel;
                let id;
                if (channel != null) {
                  id = channel.id;
                }
                if (id == null) {
                  id = null;
                }
                let tmp10 = id;
                let guild = tmp34.guild;
                let id1;
                if (guild != null) {
                  id1 = guild.id;
                }
                if (id1 == null) {
                  id1 = null;
                }
                let tmp13 = id1;
                let someResult = null != tmp10;
                if (someResult) {
                  someResult = null != tmp13;
                }
                if (someResult) {
                  let voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(tmp10, tmp13);
                  someResult = voiceStatesForChannelAlt.some((voiceState) => voiceState.voiceState.selfStream);
                }
                let obj = { type: tmp7(10847).MessageViewTrackingType.VOICE_INVITE_EMBED, messageId: message.id, channelId: channel.id, guildId, inviteCode: tmp6.code, inviteGuildId: tmp13, inviteChannelId: tmp10, inviteInstanceId, treatmentRendered: tmp38.treatmentRendered, hasActiveStream: tmp20 };
                tmp20 = someResult;
                let push = items.push;
                let tmp7Result = tmp7(4818);
                inviteInstanceId = tmp7Result.getInviteInstanceId(tmp6.code, message.id);
                if (inviteInstanceId == null) {
                  inviteInstanceId = null;
                }
                let arr = push(obj);
              }
            }
          }
          continue;
        }
      }
    });
    let obj = require("MessageViewTrackingManager");
    let tmp6 = _require;
    const result = obj.handleMessageListVisibilityChange(items, require("MessageViewTrackingManager").MessageViewTrackingType.VOICE_INVITE_EMBED);
  }
};
