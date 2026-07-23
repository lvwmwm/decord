// Module ID: 9474
// Function ID: 73780
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 4115, 4203, 653, 6930, 6979, 9475, 5648, 4119, 6978, 9476, 9477, 4116, 2]
// Exports: handleAnnouncementMessageViewTracking, handleOfficialMessageViewTracking, handleRichPresenceInviteEmbedViewTracking, handleVoiceInviteEmbedViewTracking, useShouldTrackAnnouncementMessageViews, useShouldTrackOfficialMessageViews, useShouldTrackRichPresenceInviteEmbedViews, useShouldTrackVoiceInviteEmbedViews

// Module 9474 (_createForOfIteratorHelperLoose)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";
import { LinkType } from "LinkType";
import { InviteTypes } from "InviteSendStates";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getVoiceInviteEmbedRenderInfo(state) {
  if (state.state !== constants2.RESOLVING) {
    if (state.state !== constants2.EXPIRED) {
      if (state.state !== constants2.BANNED) {
        if (state.state !== constants2.ERROR) {
          if (obj5.getInviteType(state) !== InviteTypes.GUILD) {
            return null;
          } else {
            const guildInviteExtendedType = require(6978) /* isGroupDMInvite */.getGuildInviteExtendedType(state);
            if (guildInviteExtendedType !== require(6978) /* isGroupDMInvite */.GuildInviteExtendedType.VOICE_CHANNEL) {
              return null;
            } else {
              const guild = state.guild;
              let id;
              if (null != guild) {
                id = guild.id;
              }
              let tmp2 = null;
              if (null != id) {
                let obj = {};
                obj = { guildId: id, location: "mobile_invite_embed_impression" };
                let enabled = require(9476) /* items */.getVoiceChannelListInviteExperiment(obj).enabled;
                if (enabled) {
                  enabled = require(9477) /* resolveVoiceChannelListInviteEmbedData */.canShowVoiceChannelListInviteEmbed(state);
                  const obj4 = require(9477) /* resolveVoiceChannelListInviteEmbedData */;
                }
                obj.treatmentRendered = enabled;
                tmp2 = obj;
                const obj2 = require(9476) /* items */;
              }
              return tmp2;
            }
            const obj6 = require(6978) /* isGroupDMInvite */;
          }
          obj5 = require(6978) /* isGroupDMInvite */;
        }
      }
    }
  }
  return null;
}
({ ChannelTypes: closure_6, GuildFeatures: closure_7, InviteStates: closure_8, MessageFlags: closure_9 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/MessageImpressionAnalyticsHelpers.tsx");

export const useShouldTrackAnnouncementMessageViews = function useShouldTrackAnnouncementMessageViews(messages) {
  let channel;
  let guild;
  ({ guild, channel } = messages);
  messages = messages.messages;
  const isMessagesReady = messages.isMessagesReady;
  let React;
  let hasItem;
  if (null != guild) {
    const features = guild.features;
    if (null != features) {
      hasItem = features.has(constants.COMMUNITY);
    }
  }
  React = tmp3;
  const items = [, , , , ];
  ({ type: arr[0], guild_id: arr[1] } = channel);
  items[2] = null != hasItem && hasItem;
  items[3] = isMessagesReady;
  items[4] = messages;
  return React.useMemo(() => {
    let tmp = channel.type === outer1_6.GUILD_ANNOUNCEMENT && c3;
    let someResult = isMessagesReady;
    if (isMessagesReady) {
      someResult = messages.some((messageReference) => {
        let hasFlagResult = null != messageReference.messageReference && null != messageReference.webhookId;
        if (hasFlagResult) {
          hasFlagResult = messageReference.hasFlag(outer2_9.IS_CROSSPOST);
        }
        if (hasFlagResult) {
          hasFlagResult = null != outer1_0.guild_id;
        }
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
  return React.useMemo(() => {
    let someResult = isMessagesReady;
    if (isMessagesReady) {
      someResult = messages.some((activity) => null != activity.activity && null != activity.activity.party_id && null != activity.application);
    }
    return someResult;
  }, items);
};
export const handleAnnouncementMessageViewTracking = function handleAnnouncementMessageViewTracking(arr, shouldTrackAnnouncementMessageViews, guildId, channel) {
  const _require = guildId;
  const importDefault = channel;
  if (shouldTrackAnnouncementMessageViews) {
    if (null != guildId) {
      const items = [];
      const item = arr.forEach((message) => {
        message = message.message;
        const messageReference = message.messageReference;
        let guild_id;
        if (null != messageReference) {
          guild_id = messageReference.guild_id;
        }
        let hasFlagResult = null != guild_id && null != message.webhookId;
        if (hasFlagResult) {
          hasFlagResult = message.hasFlag(outer1_9.IS_CROSSPOST);
        }
        if (!message.hasFlag(outer1_9.EPHEMERAL)) {
          if (hasFlagResult) {
            if (null != message.messageReference) {
              let id = message.messageReference.channel_id;
            }
            if (hasFlagResult) {
              const messageReference2 = message.messageReference;
              let guild_id1;
              if (null != messageReference2) {
                guild_id1 = messageReference2.guild_id;
              }
              if (null != guild_id1) {
                guild_id = message.messageReference.guild_id;
              }
              if (!hasFlagResult) {
                const obj = { type: guildId(items[6]).MessageViewTrackingType.ANNOUNCEMENT, messageId: message.id, channelId: user.id, guildId, sourceChannelId: id, sourceGuildId: guild_id };
                message = items.push(obj);
              }
              const message_id = message.messageReference.message_id;
            }
            guild_id = guildId;
          }
          id = user.id;
        }
      });
      const result = importDefault(items[6]).handleMessageListVisibilityChange(items, _require(items[6]).MessageViewTrackingType.ANNOUNCEMENT);
      let obj = importDefault(items[6]);
    }
  }
};
export const handleRichPresenceInviteEmbedViewTracking = function handleRichPresenceInviteEmbedViewTracking(arr, shouldTrackRichPresenceInviteEmbedViews, guildId, channel) {
  const _require = guildId;
  const importDefault = channel;
  if (shouldTrackRichPresenceInviteEmbedViews) {
    const items = [];
    const item = arr.forEach((message) => {
      message = message.message;
      let hasFlagResult = message.hasFlag(outer1_9.EPHEMERAL);
      if (!hasFlagResult) {
        hasFlagResult = null == message.activity;
      }
      if (!hasFlagResult) {
        hasFlagResult = null == message.activity.party_id;
      }
      if (!hasFlagResult) {
        hasFlagResult = null == message.application;
      }
      if (!hasFlagResult) {
        const obj = { type: guildId(items[6]).MessageViewTrackingType.APP_EMBED, messageId: message.id, channelId: id.id, guildId, applicationId: message.application.id, linkType: outer1_10.RICH_PRESENCE_INVITE };
        items.push(obj);
      }
    });
    const result = importDefault(items[6]).handleMessageListVisibilityChange(items, _require(items[6]).MessageViewTrackingType.APP_EMBED);
    let obj = importDefault(items[6]);
  }
};
export const useShouldTrackOfficialMessageViews = function useShouldTrackOfficialMessageViews(isMessagesReady) {
  let guild;
  let messages;
  ({ guild, messages } = isMessagesReady);
  isMessagesReady = isMessagesReady.isMessagesReady;
  let id;
  let isGuildOfficialMessagesEnabled;
  if (null != guild) {
    id = guild.id;
  }
  let tmp2 = null;
  if (null != id) {
    tmp2 = id;
  }
  isGuildOfficialMessagesEnabled = messages(isGuildOfficialMessagesEnabled[7]).useIsGuildOfficialMessagesEnabled(tmp2, "useShouldTrackOfficialMessageViews");
  const items = [isGuildOfficialMessagesEnabled, isMessagesReady, messages];
  return React.useMemo(() => {
    let someResult = isGuildOfficialMessagesEnabled;
    if (isGuildOfficialMessagesEnabled) {
      someResult = isMessagesReady;
    }
    if (someResult) {
      someResult = messages.some((hasFlag) => hasFlag.hasFlag(outer2_9.IS_GUILD_OFFICIAL));
    }
    return someResult;
  }, items);
};
export const handleOfficialMessageViewTracking = function handleOfficialMessageViewTracking(arr, shouldTrackOfficialMessageViews, guildId, channel) {
  const _require = guildId;
  const importDefault = channel;
  if (shouldTrackOfficialMessageViews) {
    if (null != guildId) {
      const items = [];
      const item = arr.forEach((message) => {
        message = message.message;
        let hasFlagResult = !message.hasFlag(outer1_9.EPHEMERAL);
        if (hasFlagResult) {
          hasFlagResult = message.hasFlag(outer1_9.IS_GUILD_OFFICIAL);
        }
        if (hasFlagResult) {
          const obj = { type: guildId(items[6]).MessageViewTrackingType.OFFICIAL_MESSAGE, messageId: message.id, channelId: id.id, guildId };
          items.push(obj);
        }
      });
      const result = importDefault(items[6]).handleMessageListVisibilityChange(items, _require(items[6]).MessageViewTrackingType.OFFICIAL_MESSAGE);
      let obj = importDefault(items[6]);
    }
  }
};
export const useShouldTrackVoiceInviteEmbedViews = function useShouldTrackVoiceInviteEmbedViews(messages) {
  messages = messages.messages;
  const isMessagesReady = messages.isMessagesReady;
  const items = [messages, isMessagesReady];
  return React.useMemo(() => {
    let someResult = isMessagesReady;
    if (isMessagesReady) {
      someResult = messages.some((codedLinks) => {
        codedLinks = codedLinks.codedLinks;
        return codedLinks.some((type) => type.type === messages(outer3_2[8]).CodedLinkType.INVITE);
      });
    }
    return someResult;
  }, items);
};
export const handleVoiceInviteEmbedViewTracking = function handleVoiceInviteEmbedViewTracking(arr, shouldTrackVoiceInviteEmbedViews, guildId, channel) {
  const _require = guildId;
  const importDefault = channel;
  if (shouldTrackVoiceInviteEmbedViews) {
    const items = [];
    const item = arr.forEach((message) => {
      let iter3;
      message = message.message;
      if (!message.hasFlag(outer1_9.EPHEMERAL)) {
        const tmp2 = outer1_12(message.codedLinks);
        const iter = tmp2();
        let iter2 = iter;
        if (!iter.done) {
          do {
            let value = iter2.value;
            let tmp13 = guildId;
            let tmp14 = items;
            let tmp15 = tmp4;
            let tmp16 = tmp5;
            let tmp17 = tmp6;
            let tmp18 = tmp7;
            let tmp19 = tmp8;
            let tmp20 = tmp9;
            let tmp21 = tmp10;
            let tmp22 = tmp11;
            let tmp23 = tmp12;
            if (value.type === guildId(items[8]).CodedLinkType.INVITE) {
              let tmp39 = outer1_4;
              let invite = outer1_4.getInvite(value.code);
              tmp15 = tmp4;
              tmp16 = tmp5;
              tmp17 = tmp6;
              tmp18 = tmp7;
              tmp19 = tmp8;
              tmp20 = tmp9;
              tmp21 = tmp10;
              tmp22 = tmp11;
              tmp23 = tmp12;
              let tmp41 = invite;
              if (null != invite) {
                let tmp42 = outer1_14;
                let tmp43 = outer1_14(invite);
                tmp15 = tmp4;
                tmp16 = tmp5;
                tmp17 = tmp6;
                tmp18 = tmp7;
                tmp19 = tmp8;
                let tmp44 = invite;
                tmp21 = tmp10;
                tmp22 = tmp11;
                tmp23 = tmp12;
                tmp20 = tmp43;
                if (null != tmp43) {
                  let channel = invite.channel;
                  let id;
                  if (null != channel) {
                    id = channel.id;
                  }
                  let tmp25 = null;
                  if (null != id) {
                    tmp25 = id;
                  }
                  let guild = invite.guild;
                  let id1;
                  if (null != guild) {
                    id1 = guild.id;
                  }
                  let tmp27 = null;
                  if (null != id1) {
                    tmp27 = id1;
                  }
                  let someResult = null != tmp25 && null != tmp27;
                  if (someResult) {
                    let tmp29 = outer1_5;
                    let voiceStatesForChannelAlt = outer1_5.getVoiceStatesForChannelAlt(tmp25, tmp27);
                    someResult = voiceStatesForChannelAlt.some((voiceState) => voiceState.voiceState.selfStream);
                  }
                  let obj = {};
                  let tmp31 = guildId;
                  let tmp32 = items;
                  let tmp30 = items;
                  obj.type = guildId(items[6]).MessageViewTrackingType.VOICE_INVITE_EMBED;
                  obj.messageId = message.id;
                  let tmp33 = id;
                  obj.channelId = id.id;
                  let tmp34 = guildId;
                  obj.guildId = guildId;
                  obj.inviteCode = value.code;
                  obj.inviteGuildId = tmp27;
                  obj.inviteChannelId = tmp25;
                  let obj3 = guildId(items[12]);
                  let inviteInstanceId = obj3.getInviteInstanceId(value.code, message.id);
                  let tmp36 = null;
                  if (null != inviteInstanceId) {
                    tmp36 = inviteInstanceId;
                  }
                  obj.inviteInstanceId = tmp36;
                  obj.treatmentRendered = tmp43.treatmentRendered;
                  obj.hasActiveStream = someResult;
                  let arr = items.push(obj);
                  tmp15 = id;
                  tmp16 = channel;
                  tmp17 = id1;
                  tmp18 = guild;
                  tmp19 = inviteInstanceId;
                  let tmp38 = invite;
                  tmp20 = tmp43;
                  tmp21 = tmp25;
                  tmp22 = tmp27;
                  tmp23 = someResult;
                }
              }
            }
            iter3 = tmp2();
            tmp4 = tmp15;
            tmp5 = tmp16;
            tmp6 = tmp17;
            tmp7 = tmp18;
            tmp8 = tmp19;
            tmp9 = tmp20;
            tmp10 = tmp21;
            tmp11 = tmp22;
            tmp12 = tmp23;
            iter2 = iter3;
          } while (!iter3.done);
        }
      }
    });
    const result = importDefault(items[6]).handleMessageListVisibilityChange(items, _require(items[6]).MessageViewTrackingType.VOICE_INVITE_EMBED);
    let obj = importDefault(items[6]);
  }
};
