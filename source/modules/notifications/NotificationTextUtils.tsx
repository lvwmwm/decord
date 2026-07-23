// Module ID: 10224
// Function ID: 78988
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1347, 3759, 5604, 3760, 4342, 1352, 1348, 1838, 4202, 3767, 1906, 3947, 4810, 4325, 1342, 1849, 10225, 653, 10226, 1211, 3803, 1360, 10227, 10228, 4365, 3982, 10229, 6926, 4320, 1212, 7900, 4319, 5651, 7673, 3, 5679, 3969, 1881, 6924, 10230, 566, 2]
// Exports: allowInAppNotifications, makeTextChatNotification, shouldIncludeSelectedChannel, shouldNotify, shouldNotifyForForumThreadCreation, shouldNotifyForReaction, shouldNotifyForSelectedChannel, useAllowInAppNotifications

// Module 10224 (_createForOfIteratorHelperLoose)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import withEqualityFn from "withEqualityFn";
import _callSuper from "_callSuper";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import ME from "ME";
import { ActivityPanelModes } from "ActivityPanelModes";
import { ThreadMemberFlags } from "AbortCodes";

let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
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
            const FocusMode = require(3803) /* explicitContentFromProto */.FocusMode;
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
  const obj = require(6926) /* FSI */;
  const isolateResult = require(6926) /* FSI */.isolate(name);
  const obj2 = require(6926) /* FSI */;
  const obj3 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
  let str = "";
  if (null != channel2) {
    const obj4 = require(6926) /* FSI */;
    const _HermesInternal = HermesInternal;
    str = ", " + obj4.isolate(require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel2, closure_19, closure_13));
    const obj5 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
  }
  return "" + isolateResult + " (" + obj2.isolate(require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, closure_19, closure_13, true)) + str + ")";
}
function getInviteEmbedFormatString(type, _TD0la, _TD0la2, _TD0la3) {
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
({ GUILD_VOCAL_CHANNEL_TYPES: closure_8, THREAD_CHANNEL_TYPES: closure_9 } = _callSuper);
({ ActivityActionTypes: closure_21, ChannelTypes: closure_22, MessageFlags: closure_23, MessageTypes: closure_24, MessageTypesSets: closure_25, StatusTypes: closure_26, UserFlags: closure_27 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/notifications/NotificationTextUtils.tsx");

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
    let obj = require(1360) /* hasFlag */;
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
          tmp14 = channel1.type === constants2.DM || null != channel1.linkedLobby;
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
              obj4 = require(10227) /* isChannelCurrentlyVisible */;
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
                  const threadNotificationSetting = require(10228) /* computeThreadNotificationSetting */.computeThreadNotificationSetting(channel1);
                  let tmp44 = threadNotificationSetting !== ThreadMemberFlags.NO_MESSAGES;
                  if (tmp44) {
                    result = threadNotificationSetting === ThreadMemberFlags.ALL_MESSAGES;
                    if (!result) {
                      obj = { rawMessage: message, userId: currentUser.id, suppressEveryone: false, suppressRoles: false };
                      result = require(4365) /* isMentioned */.isRawMessageMentioned(obj);
                      const obj8 = require(4365) /* isMentioned */;
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
                return require(4365) /* isMentioned */.isRawMessageMentioned(obj1);
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
                const FocusMode = require(3803) /* explicitContentFromProto */.FocusMode;
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
          result = require(10227) /* isChannelCurrentlyVisible */.isChannelCurrentlyVisible(channel2.id);
          const obj2 = require(10227) /* isChannelCurrentlyVisible */;
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
          result = require(10227) /* isChannelCurrentlyVisible */.isChannelCurrentlyVisible(channel.id);
          const obj2 = require(10227) /* isChannelCurrentlyVisible */;
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
  state = state.getState();
  let flag = true;
  if (!state.isVoicePanelFullscreen()) {
    if (null == store.getConnectedActivityLocation()) {
      const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
      let tmp7 = null == rootNavigationRef || !rootNavigationRef.isReady();
      if (!tmp7) {
        tmp7 = !require(10229) /* getFocusedChannelId */.isChannelFocused();
        const obj4 = require(10229) /* getFocusedChannelId */;
      }
      flag = tmp7;
      const obj2 = require(3982) /* getRootNavigationRef */;
    } else {
      flag = true;
    }
  }
  return flag;
};
export { renderTitle };
export const makeTextChatNotification = function makeTextChatNotification(getGuildId, content, bot) {
  let emoji;
  let obj = importDefault(4319);
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
                  let obj1 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
                  tmp4 = name === obj1.computeChannelName(getGuildId, closure_19, closure_13);
                }
                tmp3 = name;
                if (!tmp4) {
                  tmp3 = renderTitle(name, getGuildId);
                }
              }
            }
            content = content.content;
            if (importDefault(5651)(content)) {
              let obj2 = importDefault(7673);
              content = obj2.stringify(content, getGuildId);
              if (null == content) {
                let tmp87 = importDefault(3);
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
              let obj3 = require(5679) /* isForwardMessage */;
              let result = obj3.isForwardServerMessage(content);
            } else {
              result = importDefault(5679)(content);
            }
            if (result) {
              const intl8 = require(1212) /* getSystemLocale */.intl;
              let stringResult = intl8.string(require(1212) /* getSystemLocale */.t["9ddYKt"]);
              let tmp36 = items;
            } else {
              if (null != content.activity) {
                if (null != content.application) {
                  if (content.activity.type === constants.JOIN) {
                    const intl7 = require(1212) /* getSystemLocale */.intl;
                    obj = { user: name, game: content.application.name };
                    let str7 = intl7.formatToPlainString(getInviteEmbedFormatString(getGuildId, require(1212) /* getSystemLocale */.t.E8CgCh, require(1212) /* getSystemLocale */.t.c6KHWJ, require(1212) /* getSystemLocale */.t.Fy7rJN), obj);
                  } else {
                    name = constants;
                    str7 = "";
                    if (content.activity.type === constants.JOIN_REQUEST) {
                      name = require;
                      name = dependencyMap;
                      const intl11 = require(1212) /* getSystemLocale */.intl;
                      name = getInviteEmbedFormatString;
                      name = getGuildId;
                      obj1 = { user: name, game: content.application.name };
                      str7 = intl11.formatToPlainString(getInviteEmbedFormatString(getGuildId, require(1212) /* getSystemLocale */.t["/TD0la"], require(1212) /* getSystemLocale */.t["/TD0la"], require(1212) /* getSystemLocale */.t["/TD0la"]), obj1);
                    }
                  }
                  stringResult = str7;
                  tmp36 = items;
                }
              }
              if (null != content.activity) {
                if (content.activity.type === constants.LISTEN) {
                  const intl6 = require(1212) /* getSystemLocale */.intl;
                  obj2 = { user: name };
                  stringResult = intl6.formatToPlainString(getInviteEmbedFormatString(getGuildId, require(1212) /* getSystemLocale */.t.SaDdmN, require(1212) /* getSystemLocale */.t.qsODhp, require(1212) /* getSystemLocale */.t.WeiMTW), obj2);
                  tmp36 = items;
                  const tmp59 = getInviteEmbedFormatString(getGuildId, require(1212) /* getSystemLocale */.t.SaDdmN, require(1212) /* getSystemLocale */.t.qsODhp, require(1212) /* getSystemLocale */.t.WeiMTW);
                }
              }
              if (null != sticker_items) {
                if (sticker_items.length > 0) {
                  const intl5 = require(1212) /* getSystemLocale */.intl;
                  obj3 = { stickerName: sticker_items[0].name };
                  stringResult = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.zY4v1B, obj3);
                  tmp36 = items;
                }
              }
              if (content.type === constants4.PREMIUM_REFERRAL) {
                const intl4 = require(1212) /* getSystemLocale */.intl;
                let obj4 = {};
                let obj8 = importDefault(3969);
                obj4.username = obj8.getName(bot);
                stringResult = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.lieTqU, obj4);
                tmp36 = items;
              } else if (null != content.poll) {
                const intl3 = require(1212) /* getSystemLocale */.intl;
                const obj5 = { question: content.poll.question.text };
                stringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.ImizdM, obj5);
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
                        found = fields.find((name) => "poll_question_text" === ("name" in name ? name.name : name.rawName));
                      }
                    }
                  }
                  if (null == found) {
                    const intl2 = require(1212) /* getSystemLocale */.intl;
                    const obj6 = { question: "" };
                    stringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["9WrecI"], obj6);
                    tmp36 = items;
                  }
                } else {
                  if (null != content.components) {
                    if (content.components.length > 0) {
                      if (content.components[0].type === require(1881) /* PermissionOverwriteType */.ComponentType.CHECKPOINT_CARD) {
                        const intl = require(1212) /* getSystemLocale */.intl;
                        stringResult = intl.string(require(1212) /* getSystemLocale */.t.HWnMTQ);
                        tmp36 = items;
                      }
                    }
                  }
                  obj4 = importDefault(6924);
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
                    const intl10 = require(1212) /* getSystemLocale */.intl;
                    str11 = intl10.string(require(1212) /* getSystemLocale */.t.slFYgi);
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
                    const intl9 = require(1212) /* getSystemLocale */.intl;
                    obj8 = { filename: importDefault(7900)(content.attachments[0]) };
                    str11 = intl9.formatToPlainString(require(1212) /* getSystemLocale */.t["51OkwL"], obj8);
                    const tmp77 = importDefault(7900)(content.attachments[0]);
                  }
                }
              }
              obj13 = require(1360) /* hasFlag */;
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
  if (importDefault(5651)(content)) {
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
    const ShowInAppNotifications = require(3803) /* explicitContentFromProto */.ShowInAppNotifications;
    let setting = ShowInAppNotifications.getSetting();
    if (setting) {
      setting = !obj.getFocusModeEnabled();
    }
    return setting;
  }
};
export const useAllowInAppNotifications = function useAllowInAppNotifications() {
  const ShowInAppNotifications = require(3803) /* explicitContentFromProto */.ShowInAppNotifications;
  const setting = ShowInAppNotifications.useSetting();
  const focusModeEnabled = require(10230) /* useFocusModeEnabled */.useFocusModeEnabled();
  const obj = require(10230) /* useFocusModeEnabled */;
  const items = [closure_18];
  const obj2 = require(566) /* initialize */;
  return !require(566) /* initialize */.useStateFromStores(items, () => outer1_18.hasAction()) && setting && !focusModeEnabled;
};
