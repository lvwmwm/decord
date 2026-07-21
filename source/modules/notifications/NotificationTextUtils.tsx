// Module ID: 10211
// Function ID: 78903
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: allowInAppNotifications, makeTextChatNotification, shouldIncludeSelectedChannel, shouldNotify, shouldNotifyForForumThreadCreation, shouldNotifyForReaction, shouldNotifyForSelectedChannel, useAllowInAppNotifications

// Module 10211 (_createForOfIteratorHelperLoose)
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
function shouldNotifyBase(currentUser, user, channel, arg3) {
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  if (user.hasFlag(constants7.SPAMMER)) {
    return false;
  } else if (channel.isManaged()) {
    return false;
  } else {
    const guildId = channel.getGuildId();
    let tmp3 = null == guildId;
    if (!tmp3) {
      tmp3 = !lurking.isLurking(guildId);
    }
    if (tmp3) {
      let tmp5 = !obj.ignoreSameUser;
      if (tmp5) {
        tmp5 = user.id === currentUser.id;
      }
      let tmp7 = !tmp5;
      if (!tmp5) {
        let tmp9 = !closure_13.isBlockedOrIgnored(user.id);
        if (tmp9) {
          let tmp10 = !obj.ignoreStatus;
          if (tmp10) {
            tmp10 = store3.getStatus() === constants6.DND;
          }
          let tmp13 = !tmp10;
          if (!tmp10) {
            const FocusMode = user(dependencyMap[20]).FocusMode;
            let tmp16 = !FocusMode.getSetting();
            if (tmp16) {
              let allowNoMessagesResult = !obj.ignoreNoMessagesSetting;
              if (allowNoMessagesResult) {
                allowNoMessagesResult = closure_17.allowNoMessages(channel);
              }
              tmp16 = !allowNoMessagesResult;
            }
            tmp13 = tmp16;
          }
          tmp9 = tmp13;
        }
        tmp7 = tmp9;
      }
      tmp3 = tmp7;
    }
    return tmp3;
  }
}
function renderTitle(name, channel, channel2) {
  const obj = channel(dependencyMap[27]);
  const isolateResult = channel(dependencyMap[27]).isolate(name);
  const obj2 = channel(dependencyMap[27]);
  const obj3 = channel(dependencyMap[28]);
  let str = "";
  if (null != channel2) {
    const obj4 = channel(dependencyMap[27]);
    const _HermesInternal = HermesInternal;
    str = ", " + obj4.isolate(channel(dependencyMap[28]).computeChannelName(channel2, closure_19, closure_13));
    const obj5 = channel(dependencyMap[28]);
  }
  return "" + isolateResult + " (" + obj2.isolate(channel(dependencyMap[28]).computeChannelName(channel, closure_19, closure_13, true)) + str + ")";
}
function getInviteEmbedFormatString(type, /TD0la, /TD0la2, /TD0la3) {
  type = type.type;
  if (constants2.GUILD_ANNOUNCEMENT !== type) {
    if (constants2.GUILD_TEXT !== type) {
      if (constants2.GROUP_DM === type) {
        return _TD0la2;
      } else {
        const DM = constants2.DM;
        return _TD0la3;
      }
    }
  }
  return _TD0la;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ GUILD_VOCAL_CHANNEL_TYPES: closure_8, THREAD_CHANNEL_TYPES: closure_9 } = arg1(dependencyMap[5]));
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
let closure_15 = importDefault(dependencyMap[11]);
let closure_16 = importDefault(dependencyMap[12]);
let closure_17 = importDefault(dependencyMap[13]);
let closure_18 = importDefault(dependencyMap[14]);
let closure_19 = importDefault(dependencyMap[15]);
let closure_20 = importDefault(dependencyMap[16]);
const tmp2 = arg1(dependencyMap[5]);
({ ActivityActionTypes: closure_21, ChannelTypes: closure_22, MessageFlags: closure_23, MessageTypes: closure_24, MessageTypesSets: closure_25, StatusTypes: closure_26, UserFlags: closure_27 } = arg1(dependencyMap[17]));
const ActivityPanelModes = arg1(dependencyMap[18]).ActivityPanelModes;
const ThreadMemberFlags = arg1(dependencyMap[19]).ThreadMemberFlags;
const tmp3 = arg1(dependencyMap[17]);
const result = arg1(dependencyMap[41]).fileFinishedImporting("modules/notifications/NotificationTextUtils.tsx");

export { shouldNotifyBase };
export const shouldNotify = function shouldNotify(message, channel_id, result) {
  let flag = result;
  let flag2 = arg3;
  if (result === undefined) {
    flag = true;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (null != message.flags) {
    let obj = channel_id(dependencyMap[21]);
    if (obj.hasFlag(message.flags, constants3.SUPPRESS_NOTIFICATIONS)) {
      return false;
    }
  }
  const channel = store2.getChannel(channel_id);
  let channel1 = channel;
  if (message.type === constants4.THREAD_STARTER_MESSAGE) {
    let parent_id;
    if (null != channel) {
      parent_id = channel.parent_id;
    }
    channel1 = store2.getChannel(parent_id);
  }
  const currentUser = authStore.getCurrentUser();
  const author = message.author;
  let id;
  if (null != author) {
    id = author.id;
  }
  const user = authStore.getUser(id);
  if (null != channel1) {
    if (null != currentUser) {
      if (null != user) {
        if (channel1.type === constants2.GROUP_DM) {
          if (message.type === constants4.RECIPIENT_REMOVE) {
            return false;
          }
        }
        if (closure_20.areSlayerNotificationsSuppressed()) {
          if (tmp14) {
            return false;
          }
          const tmp14 = channel1.type === constants2.DM || null != channel1.linkedLobby;
        }
        obj = { ignoreStatus: flag2 };
        const SELF_MENTIONABLE_SYSTEM = constants5.SELF_MENTIONABLE_SYSTEM;
        obj.ignoreSameUser = SELF_MENTIONABLE_SYSTEM.has(message.type);
        if (shouldNotifyBase(currentUser, user, channel1, obj)) {
          if (messageRequest.isMessageRequest(channel_id)) {
            return false;
          } else {
            if (!flag) {
              if (obj4.isChannelCurrentlyVisible(channel1.id)) {
                return false;
              }
              const obj4 = channel_id(dependencyMap[22]);
            }
            if (closure_13.isBlockedOrIgnoredForMessage(message)) {
              return false;
            } else {
              if (undefined !== message.activity_instance) {
                if (null != message.interaction) {
                  if (message.interaction.user.id === currentUser.id) {
                    return false;
                  }
                }
              }
              if (null != message.application_id) {
                const currentEmbeddedActivity = store.getCurrentEmbeddedActivity();
                let applicationId;
                if (null != currentEmbeddedActivity) {
                  applicationId = currentEmbeddedActivity.applicationId;
                }
                if (applicationId === message.application_id) {
                  if (currentEmbeddedActivity.location.channel_id === channel_id) {
                    return false;
                  }
                }
              }
              if (set2.has(channel1.type)) {
                if (muted.isMuted(channel1.id)) {
                  return false;
                } else {
                  const threadNotificationSetting = channel_id(dependencyMap[23]).computeThreadNotificationSetting(channel1);
                  let tmp44 = threadNotificationSetting !== ThreadMemberFlags.NO_MESSAGES;
                  if (tmp44) {
                    result = threadNotificationSetting === ThreadMemberFlags.ALL_MESSAGES;
                    if (!result) {
                      obj = { rawMessage: message, userId: currentUser.id, suppressEveryone: false, suppressRoles: false };
                      result = channel_id(dependencyMap[24]).isRawMessageMentioned(obj);
                      const obj8 = channel_id(dependencyMap[24]);
                    }
                    tmp44 = result;
                  }
                  return tmp44;
                }
              } else {
                let tmp30 = !set.has(channel1.type);
                if (!tmp30) {
                  tmp30 = channelId.getChannelId() === channel1.id;
                }
                if (closure_17.allowAllMessages(channel1)) {
                  if (tmp30) {
                    return true;
                  }
                }
                const result1 = closure_17.isSuppressEveryoneEnabled(channel1.getGuildId());
                const result2 = closure_17.isSuppressRolesEnabled(channel1.getGuildId());
                const obj1 = { rawMessage: message, userId: currentUser.id, suppressEveryone: result1, suppressRoles: result2 };
                return channel_id(dependencyMap[24]).isRawMessageMentioned(obj1);
              }
            }
          }
        } else {
          return false;
        }
      }
    }
  }
  return false;
};
export const shouldNotifyForSelectedChannel = function shouldNotifyForSelectedChannel(type, channelId) {
  if (channelId2.getChannelId(guildId.getGuildId()) !== channelId) {
    return false;
  } else {
    const channel = store2.getChannel(channelId);
    let channel1 = channel;
    if (type.type === constants4.THREAD_STARTER_MESSAGE) {
      let parent_id;
      if (null != channel) {
        parent_id = channel.parent_id;
      }
      channel1 = store2.getChannel(parent_id);
    }
    const currentUser = authStore.getCurrentUser();
    const author = type.author;
    let id;
    if (null != author) {
      id = author.id;
    }
    const user = authStore.getUser(id);
    let tmp9 = null != channel1 && null != currentUser && null != user;
    if (tmp9) {
      let tmp10 = !channel1.isManaged();
      if (tmp10) {
        let tmp12 = !user.hasFlag(constants7.SPAMMER);
        if (tmp12) {
          let tmp14 = !closure_13.isBlockedOrIgnoredForMessage(type);
          if (tmp14) {
            let tmp15 = user.id !== currentUser.id;
            if (tmp15) {
              let tmp18 = store3.getStatus() !== constants6.DND;
              if (tmp18) {
                const FocusMode = channelId(dependencyMap[20]).FocusMode;
                let tmp21 = !FocusMode.getSetting();
                if (tmp21) {
                  tmp21 = !closure_17.allowNoMessages(channel1);
                }
                tmp18 = tmp21;
              }
              tmp15 = tmp18;
            }
            tmp14 = tmp15;
          }
          tmp12 = tmp14;
        }
        tmp10 = tmp12;
      }
      tmp9 = tmp10;
    }
    return tmp9;
  }
};
export const shouldNotifyForForumThreadCreation = function shouldNotifyForForumThreadCreation(channel, channel2, arg2) {
  let flag = arg2;
  let flag2 = arg3;
  if (arg2 === undefined) {
    flag = true;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  const currentUser = authStore.getCurrentUser();
  const user = authStore.getUser(channel.ownerId);
  let tmp3 = null != channel2 && null != currentUser && null != user;
  if (tmp3) {
    const obj = { ignoreStatus: flag2, ignoreNoMessagesSetting: true };
    const tmp9 = shouldNotifyBase(currentUser, user, channel2, obj);
    let tmp10 = tmp9;
    if (tmp9) {
      let tmp12 = !closure_17.isGuildOrCategoryOrChannelMuted(channel2.guild_id, channel2.id);
      if (tmp12) {
        let result = !flag;
        if (result) {
          result = channel2(dependencyMap[22]).isChannelCurrentlyVisible(channel2.id);
          const obj2 = channel2(dependencyMap[22]);
        }
        let newForumThreadsCreated = !result;
        if (newForumThreadsCreated) {
          newForumThreadsCreated = closure_17.getNewForumThreadsCreated(channel2);
        }
        tmp12 = newForumThreadsCreated;
      }
      tmp10 = tmp12;
    }
    tmp3 = tmp10;
  }
  return tmp3;
};
export const shouldNotifyForReaction = function shouldNotifyForReaction(arg0) {
  let channel;
  let includeSelectedChannel;
  let message;
  let reactor;
  ({ channel, reactor } = arg0);
  ({ message, includeSelectedChannel } = arg0);
  const currentUser = authStore.getCurrentUser();
  const author = message.author;
  let id;
  if (null != author) {
    id = author.id;
  }
  const user = authStore.getUser(id);
  let tmp5 = null != currentUser && null != user;
  if (tmp5) {
    const obj = { ignoreSameUser: true };
    const tmp11 = shouldNotifyBase(currentUser, user, channel, obj);
    let tmp12 = tmp11;
    if (tmp11) {
      let tmp13 = null == reactor;
      if (!tmp13) {
        tmp13 = !closure_13.isBlockedOrIgnored(reactor.id);
      }
      if (tmp13) {
        let result = !includeSelectedChannel;
        if (result) {
          result = arg1(dependencyMap[22]).isChannelCurrentlyVisible(channel.id);
          const obj2 = arg1(dependencyMap[22]);
        }
        tmp13 = !result;
      }
      tmp12 = tmp13;
    }
    tmp5 = tmp12;
  }
  return tmp5;
};
export const shouldIncludeSelectedChannel = function shouldIncludeSelectedChannel() {
  const state = state.getState();
  let flag = true;
  if (!state.isVoicePanelFullscreen()) {
    if (null == store.getConnectedActivityLocation()) {
      const rootNavigationRef = arg1(dependencyMap[25]).getRootNavigationRef();
      let tmp7 = null == rootNavigationRef || !rootNavigationRef.isReady();
      if (!tmp7) {
        tmp7 = !arg1(dependencyMap[26]).isChannelFocused();
        const obj4 = arg1(dependencyMap[26]);
      }
      flag = tmp7;
      const obj2 = arg1(dependencyMap[25]);
    } else {
      flag = true;
    }
  }
  return flag;
};
export { renderTitle };
export const makeTextChatNotification = function makeTextChatNotification(getGuildId, content, bot) {
  let emoji;
  let obj = importDefault(dependencyMap[31]);
  let name = obj.getName(getGuildId.getGuildId(), getGuildId.id, bot);
  const type = getGuildId.type;
  if (constants2.GUILD_ANNOUNCEMENT !== type) {
    if (constants2.GUILD_TEXT !== type) {
      if (constants2.GUILD_VOICE !== type) {
        if (constants2.ANNOUNCEMENT_THREAD !== type) {
          name = constants2;
          if (constants2.PUBLIC_THREAD !== type) {
            name = constants2;
            if (constants2.PRIVATE_THREAD !== type) {
              let tmp3 = name;
              if (constants2.GROUP_DM === type) {
                let tmp4 = getGuildId.isManaged() && bot.bot;
                if (tmp4) {
                  let obj1 = content(dependencyMap[28]);
                  tmp4 = name === obj1.computeChannelName(getGuildId, closure_19, closure_13);
                }
                tmp3 = name;
                if (!tmp4) {
                  tmp3 = renderTitle(name, getGuildId);
                }
              }
            }
            content = content.content;
            if (importDefault(dependencyMap[32])(content)) {
              let obj2 = importDefault(dependencyMap[33]);
              content = obj2.stringify(content, getGuildId);
              if (null == content) {
                let tmp87 = importDefault(dependencyMap[34]);
                const prototype = tmp87.prototype;
                tmp87 = new tmp87("NotificationTextUtils");
                obj = { message: content };
                tmp87.warn("SystemMessageUtils.stringify(...) could not convert", obj);
                const _Error = Error;
                const error = new Error("failed to stringify system message");
                throw error;
              }
            }
            if ("sticker_items" in content) {
              let sticker_items = content.sticker_items;
            } else {
              sticker_items = "stickerItems" in content ? content.stickerItems : content.stickers;
            }
            const items = [];
            if ("message_reference" in content) {
              let obj3 = content(dependencyMap[35]);
              let result = obj3.isForwardServerMessage(content);
            } else {
              result = importDefault(dependencyMap[35])(content);
            }
            if (result) {
              const intl8 = content(dependencyMap[29]).intl;
              let stringResult = intl8.string(content(dependencyMap[29]).t.9ddYKt);
              let tmp36 = items;
            } else {
              if (null != content.activity) {
                if (null != content.application) {
                  if (content.activity.type === constants.JOIN) {
                    const intl7 = content(dependencyMap[29]).intl;
                    obj = { user: name, game: content.application.name };
                    let str7 = intl7.formatToPlainString(getInviteEmbedFormatString(getGuildId, content(dependencyMap[29]).t.E8CgCh, content(dependencyMap[29]).t.c6KHWJ, content(dependencyMap[29]).t.Fy7rJN), obj);
                  } else {
                    name = constants;
                    str7 = "";
                    if (content.activity.type === constants.JOIN_REQUEST) {
                      name = content;
                      name = dependencyMap;
                      const intl11 = content(dependencyMap[29]).intl;
                      name = getInviteEmbedFormatString;
                      name = getGuildId;
                      obj1 = { user: name, game: content.application.name };
                      str7 = intl11.formatToPlainString(getInviteEmbedFormatString(getGuildId, content(dependencyMap[29]).t./TD0la, content(dependencyMap[29]).t./TD0la, content(dependencyMap[29]).t./TD0la), obj1);
                    }
                  }
                  stringResult = str7;
                  tmp36 = items;
                }
              }
              if (null != content.activity) {
                if (content.activity.type === constants.LISTEN) {
                  const intl6 = content(dependencyMap[29]).intl;
                  obj2 = { user: name };
                  stringResult = intl6.formatToPlainString(getInviteEmbedFormatString(getGuildId, content(dependencyMap[29]).t.SaDdmN, content(dependencyMap[29]).t.qsODhp, content(dependencyMap[29]).t.WeiMTW), obj2);
                  tmp36 = items;
                  const tmp59 = getInviteEmbedFormatString(getGuildId, content(dependencyMap[29]).t.SaDdmN, content(dependencyMap[29]).t.qsODhp, content(dependencyMap[29]).t.WeiMTW);
                }
              }
              if (null != sticker_items) {
                if (sticker_items.length > 0) {
                  const intl5 = content(dependencyMap[29]).intl;
                  obj3 = { stickerName: sticker_items[0].name };
                  stringResult = intl5.formatToPlainString(content(dependencyMap[29]).t.zY4v1B, obj3);
                  tmp36 = items;
                }
              }
              if (content.type === constants4.PREMIUM_REFERRAL) {
                const intl4 = content(dependencyMap[29]).intl;
                let obj4 = {};
                let obj8 = importDefault(dependencyMap[36]);
                obj4.username = obj8.getName(bot);
                stringResult = intl4.formatToPlainString(content(dependencyMap[29]).t.lieTqU, obj4);
                tmp36 = items;
              } else if (null != content.poll) {
                const intl3 = content(dependencyMap[29]).intl;
                const obj5 = { question: content.poll.question.text };
                stringResult = intl3.formatToPlainString(content(dependencyMap[29]).t.ImizdM, obj5);
                tmp36 = items;
              } else {
                name = constants4;
                if (content.type === constants4.POLL_RESULT) {
                  const embeds = content.embeds;
                  let found;
                  if (null != embeds) {
                    const first = embeds[0];
                    if (null != first) {
                      const fields = first.fields;
                      if (null != fields) {
                        found = fields.find((name) => "poll_question_text" === "name" in name ? name.name : name.rawName);
                      }
                    }
                  }
                  if (null == found) {
                    const intl2 = content(dependencyMap[29]).intl;
                    const obj6 = { question: "" };
                    stringResult = intl2.formatToPlainString(content(dependencyMap[29]).t.9WrecI, obj6);
                    tmp36 = items;
                  }
                } else {
                  if (null != content.components) {
                    if (content.components.length > 0) {
                      if (content.components[0].type === content(dependencyMap[37]).ComponentType.CHECKPOINT_CARD) {
                        const intl = content(dependencyMap[29]).intl;
                        stringResult = intl.string(content(dependencyMap[29]).t.HWnMTQ);
                        tmp36 = items;
                      }
                    }
                  }
                  obj4 = importDefault(dependencyMap[38]);
                  ({ content, emoji } = obj4.unparseWithMeta(content, getGuildId.id, true));
                  stringResult = content;
                  tmp36 = emoji;
                  if (0 !== content.length) {
                    name = constants2;
                    stringResult = content;
                    tmp36 = emoji;
                    if (getGuildId.type === constants2.DM) {
                      stringResult = content;
                      tmp36 = emoji;
                      if (!bot.bot) {
                        stringResult = content;
                        tmp36 = emoji;
                        if (content.startsWith("> -# *")) {
                          const substr = content.substring(0, 1);
                          const sum = substr + content.substring(4);
                          const tmp40 = _createForOfIteratorHelperLoose(emoji);
                          let iter = tmp40();
                          stringResult = sum;
                          tmp36 = emoji;
                          if (!iter.done) {
                            const value = iter.value;
                            value.position = value.position - 2;
                            const iter2 = tmp40();
                            iter = iter2;
                            stringResult = sum;
                            tmp36 = emoji;
                          }
                        }
                      }
                    }
                  }
                  const unparseWithMetaResult = obj4.unparseWithMeta(content, getGuildId.id, true);
                }
              }
            }
            if (0 !== stringResult.length) {
              const obj7 = { icon: bot.getAvatarURL(getGuildId.guild_id, 128), title: tmp3, body: stringResult, emoji: tmp36 };
              return obj7;
            } else {
              if (undefined !== content.embeds) {
                if (content.embeds.length > 0) {
                  const first1 = content.embeds[0];
                  const tmp68 = "description" in first1 ? first1.description : first1.rawDescription;
                  const tmp69 = "title" in first1 ? first1.title : first1.rawTitle;
                  if (null != tmp68) {
                    let combined = tmp68;
                    if (null != tmp69) {
                      const _HermesInternal2 = HermesInternal;
                      combined = "" + tmp69 + " " + tmp68;
                    }
                    let str11 = combined;
                  } else {
                    str11 = tmp69;
                    if (null == tmp69) {
                      if (null != first1.fields) {
                        if (first1.fields.length > 0) {
                          const _HermesInternal = HermesInternal;
                          str11 = "" + "name" in iter3 ? iter3.name : iter3.rawName + " " + "value" in iter3 ? iter3.value : iter3.rawValue;
                        }
                      }
                    }
                    const intl10 = content(dependencyMap[29]).intl;
                    str11 = intl10.string(content(dependencyMap[29]).t.slFYgi);
                  }
                }
              }
              const flags = content.flags;
              let num26 = 0;
              if (null != flags) {
                num26 = flags;
              }
              if (!obj13.hasFlag(num26, constants3.IS_VOICE_MESSAGE)) {
                str11 = "";
                if (undefined !== content.attachments) {
                  str11 = "";
                  if (content.attachments.length > 0) {
                    const intl9 = content(dependencyMap[29]).intl;
                    obj8 = { filename: importDefault(dependencyMap[30])(content.attachments[0]) };
                    str11 = intl9.formatToPlainString(content(dependencyMap[29]).t.51OkwL, obj8);
                    const tmp77 = importDefault(dependencyMap[30])(content.attachments[0]);
                  }
                }
              }
              const obj13 = content(dependencyMap[21]);
            }
          }
        }
      }
    }
  }
  const channel = store2.getChannel(getGuildId.parent_id);
  if (content.type === constants4.THREAD_STARTER_MESSAGE) {
    if (null != channel) {
      tmp3 = renderTitle(name, channel, store2.getChannel(channel.parent_id));
    }
  }
  if (importDefault(dependencyMap[32])(content)) {
    tmp3 = name;
    if (null != guild.getGuild(getGuildId.getGuildId())) {
      tmp3 = renderTitle(name, getGuildId, channel);
    }
  } else {
    tmp3 = renderTitle(name, getGuildId, channel);
  }
};
export const allowInAppNotifications = function allowInAppNotifications() {
  if (closure_18.hasAction()) {
    return false;
  } else {
    const ShowInAppNotifications = arg1(dependencyMap[20]).ShowInAppNotifications;
    let setting = ShowInAppNotifications.getSetting();
    if (setting) {
      setting = !obj.getFocusModeEnabled();
    }
    return setting;
  }
};
export const useAllowInAppNotifications = function useAllowInAppNotifications() {
  const ShowInAppNotifications = arg1(dependencyMap[20]).ShowInAppNotifications;
  const setting = ShowInAppNotifications.useSetting();
  const focusModeEnabled = arg1(dependencyMap[39]).useFocusModeEnabled();
  const obj = arg1(dependencyMap[39]);
  const items = [closure_18];
  const obj2 = arg1(dependencyMap[40]);
  return !arg1(dependencyMap[40]).useStateFromStores(items, () => closure_18.hasAction()) && setting && !focusModeEnabled;
};
