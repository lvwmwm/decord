// Module ID: 9467
// Function ID: 73739
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: handleAnnouncementMessageViewTracking, handleOfficialMessageViewTracking, handleRichPresenceInviteEmbedViewTracking, handleVoiceInviteEmbedViewTracking, useShouldTrackAnnouncementMessageViews, useShouldTrackOfficialMessageViews, useShouldTrackRichPresenceInviteEmbedViews, useShouldTrackVoiceInviteEmbedViews

// Module 9467 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
            const guildInviteExtendedType = arg1(dependencyMap[9]).getGuildInviteExtendedType(state);
            if (guildInviteExtendedType !== arg1(dependencyMap[9]).GuildInviteExtendedType.VOICE_CHANNEL) {
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
                let enabled = arg1(dependencyMap[10]).getVoiceChannelListInviteExperiment(obj).enabled;
                if (enabled) {
                  enabled = arg1(dependencyMap[11]).canShowVoiceChannelListInviteEmbed(state);
                  const obj4 = arg1(dependencyMap[11]);
                }
                obj.treatmentRendered = enabled;
                tmp2 = obj;
                const obj2 = arg1(dependencyMap[10]);
              }
              return tmp2;
            }
            const obj6 = arg1(dependencyMap[9]);
          }
          const obj5 = arg1(dependencyMap[9]);
        }
      }
    }
  }
  return null;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ ChannelTypes: closure_6, GuildFeatures: closure_7, InviteStates: closure_8, MessageFlags: closure_9 } = arg1(dependencyMap[3]));
const LinkType = arg1(dependencyMap[4]).LinkType;
const InviteTypes = arg1(dependencyMap[5]).InviteTypes;
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/messages/native/MessageImpressionAnalyticsHelpers.tsx");

export const useShouldTrackAnnouncementMessageViews = function useShouldTrackAnnouncementMessageViews(messages) {
  let channel;
  let guild;
  ({ guild, channel } = messages);
  const arg1 = channel;
  messages = messages.messages;
  const importDefault = messages;
  const isMessagesReady = messages.isMessagesReady;
  const dependencyMap = isMessagesReady;
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
    let tmp = channel.type === constants.GUILD_ANNOUNCEMENT && tmp3;
    let someResult = isMessagesReady;
    if (isMessagesReady) {
      someResult = messages.some((messageReference) => {
        let hasFlagResult = null != messageReference.messageReference && null != messageReference.webhookId;
        if (hasFlagResult) {
          hasFlagResult = messageReference.hasFlag(constants.IS_CROSSPOST);
        }
        if (hasFlagResult) {
          hasFlagResult = null != guild_id.guild_id;
        }
        return hasFlagResult;
      });
      const tmp3 = messages;
    }
    if (!tmp) {
      tmp = someResult;
    }
    return tmp;
  }, items);
};
export const useShouldTrackRichPresenceInviteEmbedViews = function useShouldTrackRichPresenceInviteEmbedViews(messages) {
  messages = messages.messages;
  const arg1 = messages;
  const isMessagesReady = messages.isMessagesReady;
  const importDefault = isMessagesReady;
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
  shouldTrackAnnouncementMessageViews = guildId;
  const importDefault = channel;
  if (shouldTrackAnnouncementMessageViews) {
    if (null != guildId) {
      const items = [];
      const dependencyMap = items;
      const item = arr.forEach((message, arg1, arg2, self) => {
        message = message.message;
        const messageReference = message.messageReference;
        let guild_id;
        if (null != messageReference) {
          guild_id = messageReference.guild_id;
        }
        let hasFlagResult = null != guild_id && null != message.webhookId;
        if (hasFlagResult) {
          hasFlagResult = message.hasFlag(constants2.IS_CROSSPOST);
        }
        if (!message.hasFlag(constants2.EPHEMERAL)) {
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
                const obj = { type: arg2(items[6]).MessageViewTrackingType.ANNOUNCEMENT, messageId: message.id, channelId: self.id, guildId: arg2, sourceChannelId: id, sourceGuildId: guild_id };
                message = items.push(obj);
              }
              const message_id = message.messageReference.message_id;
            }
            guild_id = arg2;
          }
          id = self.id;
        }
      });
      const result = importDefault(dependencyMap[6]).handleMessageListVisibilityChange(items, shouldTrackAnnouncementMessageViews(dependencyMap[6]).MessageViewTrackingType.ANNOUNCEMENT);
      const obj = importDefault(dependencyMap[6]);
    }
  }
};
export const handleRichPresenceInviteEmbedViewTracking = function handleRichPresenceInviteEmbedViewTracking(arr, shouldTrackRichPresenceInviteEmbedViews, guildId, channel) {
  shouldTrackRichPresenceInviteEmbedViews = guildId;
  const importDefault = channel;
  if (shouldTrackRichPresenceInviteEmbedViews) {
    const items = [];
    const dependencyMap = items;
    const item = arr.forEach((message) => {
      message = message.message;
      let hasFlagResult = message.hasFlag(constants.EPHEMERAL);
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
        const obj = { type: arg2(items[6]).MessageViewTrackingType.APP_EMBED, messageId: message.id, channelId: arg3.id, guildId: arg2, applicationId: message.application.id, linkType: constants2.RICH_PRESENCE_INVITE };
        items.push(obj);
      }
    });
    const result = importDefault(dependencyMap[6]).handleMessageListVisibilityChange(items, shouldTrackRichPresenceInviteEmbedViews(dependencyMap[6]).MessageViewTrackingType.APP_EMBED);
    const obj = importDefault(dependencyMap[6]);
  }
};
export const useShouldTrackOfficialMessageViews = function useShouldTrackOfficialMessageViews(isMessagesReady) {
  let guild;
  let messages;
  ({ guild, messages } = isMessagesReady);
  const arg1 = messages;
  isMessagesReady = isMessagesReady.isMessagesReady;
  const importDefault = isMessagesReady;
  let id;
  let dependencyMap;
  if (null != guild) {
    id = guild.id;
  }
  let tmp2 = null;
  if (null != id) {
    tmp2 = id;
  }
  const isGuildOfficialMessagesEnabled = arg1(dependencyMap[7]).useIsGuildOfficialMessagesEnabled(tmp2, "useShouldTrackOfficialMessageViews");
  dependencyMap = isGuildOfficialMessagesEnabled;
  const items = [isGuildOfficialMessagesEnabled, isMessagesReady, messages];
  return React.useMemo(() => {
    let someResult = isGuildOfficialMessagesEnabled;
    if (isGuildOfficialMessagesEnabled) {
      someResult = isMessagesReady;
    }
    if (someResult) {
      someResult = messages.some((hasFlag) => hasFlag.hasFlag(constants.IS_GUILD_OFFICIAL));
    }
    return someResult;
  }, items);
};
export const handleOfficialMessageViewTracking = function handleOfficialMessageViewTracking(arr, shouldTrackOfficialMessageViews, guildId, channel) {
  shouldTrackOfficialMessageViews = guildId;
  const importDefault = channel;
  if (shouldTrackOfficialMessageViews) {
    if (null != guildId) {
      const items = [];
      const dependencyMap = items;
      const item = arr.forEach((message) => {
        message = message.message;
        let hasFlagResult = !message.hasFlag(constants.EPHEMERAL);
        if (hasFlagResult) {
          hasFlagResult = message.hasFlag(constants.IS_GUILD_OFFICIAL);
        }
        if (hasFlagResult) {
          const obj = { type: arg2(items[6]).MessageViewTrackingType.OFFICIAL_MESSAGE, messageId: message.id, channelId: arg3.id, guildId: arg2 };
          items.push(obj);
        }
      });
      const result = importDefault(dependencyMap[6]).handleMessageListVisibilityChange(items, shouldTrackOfficialMessageViews(dependencyMap[6]).MessageViewTrackingType.OFFICIAL_MESSAGE);
      const obj = importDefault(dependencyMap[6]);
    }
  }
};
export const useShouldTrackVoiceInviteEmbedViews = function useShouldTrackVoiceInviteEmbedViews(messages) {
  messages = messages.messages;
  const arg1 = messages;
  const isMessagesReady = messages.isMessagesReady;
  const importDefault = isMessagesReady;
  const items = [messages, isMessagesReady];
  return React.useMemo(() => {
    let someResult = isMessagesReady;
    if (isMessagesReady) {
      someResult = messages.some((codedLinks) => {
        codedLinks = codedLinks.codedLinks;
        return codedLinks.some((type) => type.type === callback(closure_2[8]).CodedLinkType.INVITE);
      });
    }
    return someResult;
  }, items);
};
export const handleVoiceInviteEmbedViewTracking = function handleVoiceInviteEmbedViewTracking(arr, shouldTrackVoiceInviteEmbedViews, guildId, channel) {
  shouldTrackVoiceInviteEmbedViews = guildId;
  const importDefault = channel;
  if (shouldTrackVoiceInviteEmbedViews) {
    const items = [];
    const dependencyMap = items;
    const item = arr.forEach((message) => {
      let iter3;
      message = message.message;
      if (!message.hasFlag(constants.EPHEMERAL)) {
        const tmp2 = callback(message.codedLinks);
        const iter = tmp2();
        let iter2 = iter;
        if (!iter.done) {
          do {
            let value = iter2.value;
            let tmp13 = closure_0;
            let tmp14 = closure_2;
            let tmp15 = tmp4;
            let tmp16 = tmp5;
            let tmp17 = tmp6;
            let tmp18 = tmp7;
            let tmp19 = tmp8;
            let tmp20 = tmp9;
            let tmp21 = tmp10;
            let tmp22 = tmp11;
            let tmp23 = tmp12;
            if (value.type === closure_0(closure_2[8]).CodedLinkType.INVITE) {
              let tmp39 = closure_4;
              let invite = closure_4.getInvite(value.code);
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
                let tmp42 = closure_14;
                let tmp43 = closure_14(invite);
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
                    let tmp29 = closure_5;
                    let voiceStatesForChannelAlt = closure_5.getVoiceStatesForChannelAlt(tmp25, tmp27);
                    someResult = voiceStatesForChannelAlt.some((voiceState) => voiceState.voiceState.selfStream);
                  }
                  let obj = {};
                  let tmp31 = closure_0;
                  let tmp32 = closure_2;
                  let tmp30 = closure_2;
                  obj.type = closure_0(closure_2[6]).MessageViewTrackingType.VOICE_INVITE_EMBED;
                  obj.messageId = message.id;
                  let tmp33 = closure_1;
                  obj.channelId = closure_1.id;
                  let tmp34 = closure_0;
                  obj.guildId = closure_0;
                  obj.inviteCode = value.code;
                  obj.inviteGuildId = tmp27;
                  obj.inviteChannelId = tmp25;
                  let obj3 = closure_0(closure_2[12]);
                  let inviteInstanceId = obj3.getInviteInstanceId(value.code, message.id);
                  let tmp36 = null;
                  if (null != inviteInstanceId) {
                    tmp36 = inviteInstanceId;
                  }
                  obj.inviteInstanceId = tmp36;
                  obj.treatmentRendered = tmp43.treatmentRendered;
                  obj.hasActiveStream = someResult;
                  let arr = closure_2.push(obj);
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
            let tmp4 = tmp15;
            let tmp5 = tmp16;
            let tmp6 = tmp17;
            let tmp7 = tmp18;
            let tmp8 = tmp19;
            let tmp9 = tmp20;
            let tmp10 = tmp21;
            let tmp11 = tmp22;
            let tmp12 = tmp23;
            iter2 = iter3;
          } while (!iter3.done);
        }
      }
    });
    const result = importDefault(dependencyMap[6]).handleMessageListVisibilityChange(items, shouldTrackVoiceInviteEmbedViews(dependencyMap[6]).MessageViewTrackingType.VOICE_INVITE_EMBED);
    const obj = importDefault(dependencyMap[6]);
  }
};
