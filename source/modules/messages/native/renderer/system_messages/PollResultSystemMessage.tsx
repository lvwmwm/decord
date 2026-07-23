// Module ID: 7728
// Function ID: 61480
// Name: castHook
// Dependencies: [1852, 7649, 7651, 1212, 1392, 3771, 7729, 7652, 2]
// Exports: createPollResultSystemMessage

// Module 7728 (castHook)
import { EMOJI_URL_BASE_SIZE } from "set";

function castHook(arg0) {
  let closure_0 = arg0;
  return () => closure_0;
}
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx");

export const createPollResultSystemMessage = function createPollResultSystemMessage(message) {
  const tmp = importDefault(7729)(message.message.embeds[0]);
  if (null == tmp) {
    return null;
  } else if (null == message.message.messageReference) {
    return null;
  } else {
    message = message.message;
    const messageAuthorWithProcessedColor = require(7649) /* getMessageAuthorWithProcessedColor */.getMessageAuthorWithProcessedColor(message);
    let obj = { username: messageAuthorWithProcessedColor.nick };
    obj = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
    obj.usernameOnClick = importDefault(7651)(obj);
    obj.title = tmp.questionText;
    let obj1 = { action: "bindJumpToMessage", targetChannelId: message.messageReference.channel_id, targetMessageId: message.messageReference.message_id, medium: true };
    obj.titleOnClick = obj1;
    if (0 === tmp.totalVotes) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      const obj2 = {};
      const merged = Object.assign(obj);
      obj2["sadEmojiHook"] = castHook({ type: "emoji", content: "frowning", surrogate: "\u{1F626}" });
      let formatToPartsResult = intl3.formatToParts(require(1212) /* getSystemLocale */.t["9dPxsm"], obj2);
    } else {
      const _Math = Math;
      const _HermesInternal = HermesInternal;
      const combined = "" + Math.round(tmp.victorAnswerVotes / tmp.totalVotes * 100) + "%";
      if (null == tmp.victorAnswerId) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        let obj3 = {};
        const merged1 = Object.assign(obj);
        obj3["percentage"] = combined;
        formatToPartsResult = intl2.formatToParts(require(1212) /* getSystemLocale */.t.dqftZ2, obj3);
      } else {
        const items = [];
        let flag2 = tmp.victorEmoji;
        if (null == flag2) {
          const obj4 = { type: "text", content: tmp.victorAnswerText };
          items.push(obj4);
          const intl = require(1212) /* getSystemLocale */.intl;
          let obj5 = {};
          const merged2 = Object.assign(obj);
          const obj6 = { type: "strong", content: items };
          obj5["answerHook"] = castHook(obj6);
          obj5["percentage"] = combined;
          formatToPartsResult = intl.formatToParts(require(1212) /* getSystemLocale */.t.zFwIxC, obj5);
        } else {
          if (null != flag2.id) {
            const obj7 = { id: flag2.id, type: "customEmoji", alt: flag2.name };
            obj3 = importDefault(1392);
            const obj8 = {};
            ({ id: obj5.id, animated: obj5.animated } = flag2);
            obj8.size = EMOJI_URL_BASE_SIZE;
            obj7.src = obj3.getEmojiURL(obj8);
            obj5 = importDefault(1392);
            const obj9 = { id: flag2.id };
            flag2 = false;
            obj9.animated = false;
            obj9.size = EMOJI_URL_BASE_SIZE;
            obj7.frozenSrc = obj5.getEmojiURL(obj9);
            items.push(obj7);
          } else {
            obj = { type: "emoji" };
            obj1 = importDefault(3771);
            obj.content = obj1.convertSurrogateToName(flag2.name, false);
            obj.surrogate = flag2.name;
            items.push(obj);
          }
          items.push({ type: "text", content: " " });
        }
      }
    }
    const obj10 = {};
    const merged3 = Object.assign(importDefault(7652)(message));
    obj10["content"] = formatToPartsResult;
    return obj10;
  }
};
