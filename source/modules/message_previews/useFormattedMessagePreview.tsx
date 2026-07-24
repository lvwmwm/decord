// Module ID: 10264
// Function ID: 79255
// Name: isMessageContentPreviewable
// Dependencies: [1194, 3767, 1849, 653, 663, 566, 7757, 4360, 1212, 4317, 5679, 22, 7762, 7840, 2]
// Exports: useFormattedMessagePreview

// Module 10264 (isMessageContentPreviewable)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { MessageFlags } from "ME";

const require = arg1;
function isMessageContentPreviewable(messageRecord) {
  const type = messageRecord.type;
  if (require(663) /* set */.MessageTypes.DEFAULT !== type) {
    if (require(663) /* set */.MessageTypes.CHANGELOG !== type) {
      if (require(663) /* set */.MessageTypes.REPLY !== type) {
        if (require(663) /* set */.MessageTypes.CHAT_INPUT_COMMAND !== type) {
          if (require(663) /* set */.MessageTypes.CONTEXT_MENU_COMMAND !== type) {
            if (require(663) /* set */.MessageTypes.POLL_RESULT !== type) {
              if (require(663) /* set */.MessageTypes.AUTO_MODERATION_ACTION !== type) {
                return false;
              }
            }
          }
        }
      }
    }
  }
  return true;
}
function formatMessagePreview(type, isBlocked) {
  let authorNick;
  let isCallActive;
  let otherUser;
  let otherUserNick;
  if (isBlocked.isBlocked) {
    let obj = { type: "text" };
    const intl18 = require(1212) /* getSystemLocale */.intl;
    obj.text = intl18.string(require(1212) /* getSystemLocale */.t.XAkOo2);
    return obj;
  } else if (tmp) {
    obj = { type: "text" };
    const intl17 = require(1212) /* getSystemLocale */.intl;
    obj.text = intl17.string(require(1212) /* getSystemLocale */.t["G7p6v/"]);
    return obj;
  } else {
    if (isMessageContentPreviewable(type)) {
      const tmp4 = (function formatMessageContentPreview(embeds) {
        if (1 === embeds.embeds.length) {
          if (embeds.embeds[0].url === embeds.content) {
            if (null != embeds.embeds[0].rawTitle) {
              let obj = { type: "markup", markup: embeds.embeds[0].rawTitle };
              return obj;
            }
          }
        }
        if (null != embeds.content) {
          if ("" !== embeds.content) {
            obj = { type: "message", message: embeds };
            return obj;
          }
        }
        if (embeds.hasFlag(outer1_6.IS_VOICE_MESSAGE)) {
          const obj1 = { type: "text" };
          const intl11 = outer1_0(outer1_2[8]).intl;
          obj1.text = intl11.string(outer1_0(outer1_2[8]).t.slFYgi);
          return obj1;
        } else if (embeds.attachments.length > 0) {
          const attachments = embeds.attachments;
          const everyResult = attachments.every((filename) => outer2_0(outer2_2[9]).isImageFile(filename.filename));
          let everyResult1 = !everyResult;
          if (everyResult1) {
            const attachments2 = embeds.attachments;
            everyResult1 = attachments2.every((filename) => outer2_0(outer2_2[9]).isVideoFile(filename.filename));
          }
          let everyResult2 = !everyResult && !everyResult1;
          if (everyResult2) {
            const attachments3 = embeds.attachments;
            everyResult2 = attachments3.every((filename) => outer2_0(outer2_2[9]).isAudioFile(filename.filename));
          }
          if (everyResult) {
            const obj2 = { type: "text", text: null, trailingIcon: "image" };
            const intl10 = outer1_0(outer1_2[8]).intl;
            const obj3 = { count: embeds.attachments.length };
            obj2.text = intl10.formatToPlainString(outer1_0(outer1_2[8]).t.h4pFfU, obj3);
            let obj8 = obj2;
          } else if (everyResult1) {
            const obj4 = { type: "text", text: null, trailingIcon: "video" };
            const intl9 = outer1_0(outer1_2[8]).intl;
            const obj5 = { count: embeds.attachments.length };
            obj4.text = intl9.formatToPlainString(outer1_0(outer1_2[8]).t.SJ6pPX, obj5);
            obj8 = obj4;
          } else if (everyResult2) {
            const obj6 = { type: "text", text: null, trailingIcon: "audio" };
            const intl8 = outer1_0(outer1_2[8]).intl;
            const obj7 = { count: embeds.attachments.length };
            obj6.text = intl8.formatToPlainString(outer1_0(outer1_2[8]).t.fnO3hK, obj7);
            obj8 = obj6;
          } else {
            obj8 = { type: "text", text: null, trailingIcon: "attachment" };
            const intl7 = outer1_0(outer1_2[8]).intl;
            const obj9 = { count: embeds.attachments.length };
            obj8.text = intl7.formatToPlainString(outer1_0(outer1_2[8]).t["89ihS8"], obj9);
          }
          return obj8;
        } else if (embeds.embeds.length > 0) {
          embeds = embeds.embeds;
          const everyResult3 = embeds.every((url) => {
            let isImageUrlResult = null != url.url;
            if (isImageUrlResult) {
              isImageUrlResult = outer2_0(outer2_2[9]).isImageUrl(url.url);
              const obj = outer2_0(outer2_2[9]);
            }
            return isImageUrlResult;
          });
          let everyResult4 = !everyResult3;
          if (everyResult4) {
            const embeds2 = embeds.embeds;
            everyResult4 = embeds2.every((url) => {
              let isVideoUrlResult = null != url.url;
              if (isVideoUrlResult) {
                isVideoUrlResult = outer2_0(outer2_2[9]).isVideoUrl(url.url);
                const obj = outer2_0(outer2_2[9]);
              }
              return isVideoUrlResult;
            });
          }
          let everyResult5 = !everyResult3 && !everyResult4;
          if (everyResult5) {
            const embeds3 = embeds.embeds;
            everyResult5 = embeds3.every((url) => {
              let isAudioFileResult = null != url.url;
              if (isAudioFileResult) {
                isAudioFileResult = outer2_0(outer2_2[9]).isAudioFile(url.url);
                const obj = outer2_0(outer2_2[9]);
              }
              return isAudioFileResult;
            });
          }
          if (everyResult3) {
            const obj10 = { type: "text", text: null, trailingIcon: "image" };
            const intl6 = outer1_0(outer1_2[8]).intl;
            const obj11 = { count: embeds.embeds.length };
            obj10.text = intl6.formatToPlainString(outer1_0(outer1_2[8]).t.h4pFfU, obj11);
            let obj18 = obj10;
          } else if (everyResult4) {
            const obj12 = { type: "text", text: null, trailingIcon: "video" };
            const intl5 = outer1_0(outer1_2[8]).intl;
            const obj13 = { count: embeds.embeds.length };
            obj12.text = intl5.formatToPlainString(outer1_0(outer1_2[8]).t.SJ6pPX, obj13);
            obj18 = obj12;
          } else if (everyResult5) {
            const obj14 = { type: "text", text: null, trailingIcon: "audio" };
            const intl4 = outer1_0(outer1_2[8]).intl;
            const obj15 = { count: embeds.embeds.length };
            obj14.text = intl4.formatToPlainString(outer1_0(outer1_2[8]).t.fnO3hK, obj15);
            obj18 = obj14;
          } else {
            if (embeds.embeds.length > 0) {
              if (null != embeds.embeds[0].rawTitle) {
                const obj16 = { type: "markup", markup: embeds.embeds[0].rawTitle };
                obj18 = obj16;
              }
            }
            if (embeds.embeds.length > 0) {
              if (null != embeds.embeds[0].rawDescription) {
                const obj17 = { type: "markup", markup: embeds.embeds[0].rawDescription };
                obj18 = obj17;
              }
            }
            obj18 = { type: "text", text: null, trailingIcon: "link" };
            const intl3 = outer1_0(outer1_2[8]).intl;
            const obj19 = { count: embeds.embeds.length };
            obj18.text = intl3.formatToPlainString(outer1_0(outer1_2[8]).t["9XuYjs"], obj19);
          }
          return obj18;
        } else if (embeds.stickerItems.length > 0) {
          const obj20 = { type: "text", text: embeds.stickerItems[0].name, trailingIcon: "sticker" };
          return obj20;
        } else if (embeds.isPoll()) {
          const obj21 = { type: "text" };
          let text;
          const intl2 = outer1_0(outer1_2[8]).intl;
          const obj22 = {};
          const poll = embeds.poll;
          if (null != poll) {
            text = poll.question.text;
          }
          obj22.question = text;
          obj21.text = intl2.formatToPlainString(outer1_0(outer1_2[8]).t.ImizdM, obj22);
          return obj21;
        } else if (outer1_1(outer1_2[10])(embeds)) {
          obj = { type: "text" };
          const intl = outer1_0(outer1_2[8]).intl;
          obj.text = intl.string(outer1_0(outer1_2[8]).t["9ddYKt"]);
          return obj;
        }
      })(type);
      if (null != tmp4) {
        let obj1 = {};
        const merged = Object.assign(tmp4);
        obj1["authorLabel"] = tmp2;
        return obj1;
      }
    }
    ({ authorNick, otherUser, otherUserNick, isCallActive } = isBlocked);
    if (type.type === require(663) /* set */.MessageTypes.RECIPIENT_ADD) {
      if (null != otherUserNick) {
        let obj2 = { type: "text" };
        const intl16 = require(1212) /* getSystemLocale */.intl;
        let obj3 = { username: authorNick, usernameHook: require(22) /* apply */.identity, otherUsername: otherUserNick, otherUsernameHook: require(22) /* apply */.identity };
        obj2.text = intl16.formatToPlainString(require(1212) /* getSystemLocale */.t.MMN2Jq, obj3);
        let tmp16 = obj2;
      }
      let tmp56;
      if (null != tmp16) {
        tmp56 = tmp16;
      }
      return tmp56;
    }
    if (type.type === require(663) /* set */.MessageTypes.RECIPIENT_REMOVE) {
      if (null != otherUserNick) {
        let obj4 = { type: "text" };
        let id;
        if (null != otherUser) {
          id = otherUser.id;
        }
        if (type.author.id === id) {
          const intl15 = require(1212) /* getSystemLocale */.intl;
          let obj5 = { username: authorNick, usernameHook: require(22) /* apply */.identity };
          let formatToPlainStringResult = intl15.formatToPlainString(require(1212) /* getSystemLocale */.t["5v2xa8"], obj5);
        } else {
          const intl14 = require(1212) /* getSystemLocale */.intl;
          let obj6 = { username: authorNick, usernameHook: require(22) /* apply */.identity, otherUsername: otherUserNick, otherUsernameHook: require(22) /* apply */.identity };
          formatToPlainStringResult = intl14.formatToPlainString(require(1212) /* getSystemLocale */.t.L2FyVq, obj6);
        }
        obj4.text = formatToPlainStringResult;
        tmp16 = obj4;
      }
    }
    if (type.type === require(663) /* set */.MessageTypes.CALL) {
      let obj7 = { type: "text" };
      if (isCallActive) {
        const intl13 = require(1212) /* getSystemLocale */.intl;
        let stringResult = intl13.string(require(1212) /* getSystemLocale */.t["NGg/fm"]);
      } else {
        if (null != type.call) {
          const participants = type.call.participants;
          if (!participants.includes(isBlocked.currentUserId)) {
            let intl11 = require(1212) /* getSystemLocale */.intl;
            stringResult = intl11.string(require(1212) /* getSystemLocale */.t["2CnhoI"]);
          }
        }
        const intl12 = require(1212) /* getSystemLocale */.intl;
        stringResult = intl12.string(require(1212) /* getSystemLocale */.t.v05Xd6);
      }
      obj7.text = stringResult;
      let str12;
      if (isCallActive) {
        str12 = "text-feedback-positive";
      }
      obj7.color = str12;
      let str13 = "call-ended";
      if (isCallActive) {
        str13 = "call-active";
      }
      obj7.trailingIcon = str13;
      tmp16 = obj7;
    } else if (type.type === require(663) /* set */.MessageTypes.CHANNEL_NAME_CHANGE) {
      let obj8 = { type: "text" };
      let intl10 = require(1212) /* getSystemLocale */.intl;
      let obj9 = { username: authorNick, usernameHook: require(22) /* apply */.identity, channelName: type.content };
      obj8.text = intl10.formatToPlainString(require(1212) /* getSystemLocale */.t.oItgEw, obj9);
      tmp16 = obj8;
    } else if (type.type === require(663) /* set */.MessageTypes.CHANNEL_ICON_CHANGE) {
      let obj10 = { type: "text" };
      let intl9 = require(1212) /* getSystemLocale */.intl;
      let obj11 = { username: authorNick, usernameHook: require(22) /* apply */.identity };
      obj10.text = intl9.formatToPlainString(require(1212) /* getSystemLocale */.t.OEdU6X, obj11);
      tmp16 = obj10;
    } else if (type.type === require(663) /* set */.MessageTypes.CHANNEL_PINNED_MESSAGE) {
      let obj12 = { type: "text" };
      let intl8 = require(1212) /* getSystemLocale */.intl;
      let obj13 = { username: authorNick, usernameHook: require(22) /* apply */.identity };
      obj12.text = intl8.formatToPlainString(require(1212) /* getSystemLocale */.t.vfkjqx, obj13);
      tmp16 = obj12;
    } else if (type.type === require(663) /* set */.MessageTypes.USER_JOIN) {
      let obj14 = { type: "text" };
      let intl7 = require(1212) /* getSystemLocale */.intl;
      obj13 = importDefault(7762);
      let obj15 = { username: authorNick };
      const systemMessageUserJoin = obj13.getSystemMessageUserJoin(type.id);
      obj15.usernameHook = require(22) /* apply */.identity;
      obj14.text = intl7.formatToPlainString(systemMessageUserJoin, obj15);
      tmp16 = obj14;
    } else if (type.type === require(663) /* set */.MessageTypes.THREAD_CREATED) {
      let obj16 = { type: "text" };
      let intl6 = require(1212) /* getSystemLocale */.intl;
      let obj17 = { actorName: authorNick, actorHook: require(22) /* apply */.identity, threadName: type.content, threadOnClick: require(22) /* apply */.identity };
      obj16.text = intl6.formatToPlainString(require(1212) /* getSystemLocale */.t.SGaUAU, obj17);
      tmp16 = obj16;
    } else if (type.type === require(663) /* set */.MessageTypes.PREMIUM_REFERRAL) {
      let obj18 = { type: "text" };
      let intl5 = require(1212) /* getSystemLocale */.intl;
      let obj19 = { username: authorNick };
      obj18.text = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.lieTqU, obj19);
      tmp16 = obj18;
    } else if (type.type === require(663) /* set */.MessageTypes.STAGE_START) {
      let obj20 = { type: "text" };
      let intl4 = require(1212) /* getSystemLocale */.intl;
      let obj21 = { username: authorNick, usernameOnClick: require(22) /* apply */.identity, topic: type.content };
      obj20.text = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.aZtRW8, obj21);
      tmp16 = obj20;
    } else if (type.type === require(663) /* set */.MessageTypes.STAGE_END) {
      let obj22 = { type: "text" };
      let intl3 = require(1212) /* getSystemLocale */.intl;
      const obj23 = { username: authorNick, usernameOnClick: require(22) /* apply */.identity, topic: type.content };
      obj22.text = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.vMJhvG, obj23);
      tmp16 = obj22;
    } else if (type.type === require(663) /* set */.MessageTypes.STAGE_SPEAKER) {
      const obj24 = { type: "text" };
      let intl2 = require(1212) /* getSystemLocale */.intl;
      const obj25 = { username: authorNick, usernameOnClick: require(22) /* apply */.identity };
      obj24.text = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.V4uCm4, obj25);
      tmp16 = obj24;
    } else if (type.type === require(663) /* set */.MessageTypes.STAGE_TOPIC) {
      obj = { type: "text" };
      let intl = require(1212) /* getSystemLocale */.intl;
      const obj26 = { username: authorNick, usernameOnClick: require(22) /* apply */.identity, topic: type.content };
      obj.text = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.ro3RM0, obj26);
      tmp16 = obj;
    } else if (type.type === require(663) /* set */.MessageTypes.VOICE_SESSION) {
      const obj27 = { type: "text", text: require(7840) /* getSortedVoiceSessionParticipants */.getVoiceSessionMessageContent(type) };
      tmp16 = obj27;
      const obj32 = require(7840) /* getSortedVoiceSessionParticipants */;
    }
  }
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/message_previews/useFormattedMessagePreview.tsx");

export { isMessageContentPreviewable };
export const useFormattedMessagePreview = function useFormattedMessagePreview(message, channel) {
  let isBlocked;
  let isIgnored;
  const _require = message;
  let obj = _require(566);
  const items = [closure_4];
  const items1 = [message.author.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isBlocked: outer1_4.isBlocked(message.author.id), isIgnored: outer1_4.isIgnored(message.author.id) }), items1);
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  const tmp2 = importDefault(7757)(channel.id, message.id);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items2, () => outer1_3.getId());
  const nick = importDefault(4360)(message).nick;
  let stringResult = nick;
  if (message.type !== _require(663).MessageTypes.USER_JOIN) {
    stringResult = nick;
    if (message.author.id === stateFromStores) {
      const intl = _require(1212).intl;
      stringResult = intl.string(_require(1212).t.LuZzxn);
    }
  }
  const obj2 = _require(566);
  const items3 = [closure_5];
  const stateFromStores1 = _require(566).useStateFromStores(items3, () => {
    let user;
    if (message.mentions.length > 0) {
      user = outer1_5.getUser(message.mentions[0]);
    }
    return user;
  });
  const obj3 = _require(566);
  obj = { message, channel, currentUserId: stateFromStores, authorNick: stringResult, otherUser: stateFromStores1, otherUserNick: _require(4360).useNullableUserAuthor(stateFromStores1, channel).nick, isBlocked, isIgnored, isCallActive: tmp2 };
  return formatMessagePreview(message, obj);
};
export { formatMessagePreview };
