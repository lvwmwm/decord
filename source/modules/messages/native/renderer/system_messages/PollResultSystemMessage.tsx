// Module ID: 7722
// Function ID: 61433
// Name: castHook
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: createPollResultSystemMessage

// Module 7722 (castHook)
import { EMOJI_URL_BASE_SIZE } from "result";
import result from "result";

function castHook(arg0) {
  const require = arg0;
  return () => arg0;
}
result = result.fileFinishedImporting("modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx");

export const createPollResultSystemMessage = function createPollResultSystemMessage(message) {
  const tmp = importDefault(dependencyMap[6])(message.message.embeds[0]);
  if (null == tmp) {
    return null;
  } else if (null == message.message.messageReference) {
    return null;
  } else {
    message = message.message;
    const messageAuthorWithProcessedColor = require(dependencyMap[1]).getMessageAuthorWithProcessedColor(message);
    let obj = { username: messageAuthorWithProcessedColor.nick };
    obj = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
    obj.usernameOnClick = importDefault(dependencyMap[2])(obj);
    obj.title = tmp.questionText;
    let obj1 = { action: "bindJumpToMessage", targetChannelId: message.messageReference.channel_id, targetMessageId: message.messageReference.message_id, medium: true };
    obj.titleOnClick = obj1;
    if (0 === tmp.totalVotes) {
      const intl3 = require(dependencyMap[3]).intl;
      const obj2 = {};
      const merged = Object.assign(obj);
      obj2["sadEmojiHook"] = castHook({ "Null": "icon-only", "Null": "sm", "Null": "interactive-icon-default" });
      let formatToPartsResult = intl3.formatToParts(require(dependencyMap[3]).t.9dPxsm, obj2);
    } else {
      const _Math = Math;
      const _HermesInternal = HermesInternal;
      const combined = "" + Math.round(tmp.victorAnswerVotes / tmp.totalVotes * 100) + "%";
      if (null == tmp.victorAnswerId) {
        const intl2 = require(dependencyMap[3]).intl;
        let obj3 = {};
        const merged1 = Object.assign(obj);
        obj3["percentage"] = combined;
        formatToPartsResult = intl2.formatToParts(require(dependencyMap[3]).t.dqftZ2, obj3);
      } else {
        const items = [];
        let flag2 = tmp.victorEmoji;
        if (null == flag2) {
          const obj4 = { type: "text", content: tmp.victorAnswerText };
          items.push(obj4);
          const intl = require(dependencyMap[3]).intl;
          let obj5 = {};
          const merged2 = Object.assign(obj);
          const obj6 = { type: "strong", content: items };
          obj5["answerHook"] = castHook(obj6);
          obj5["percentage"] = combined;
          formatToPartsResult = intl.formatToParts(require(dependencyMap[3]).t.zFwIxC, obj5);
        } else {
          if (null != flag2.id) {
            const obj7 = { id: flag2.id, type: "customEmoji", alt: flag2.name };
            obj3 = importDefault(dependencyMap[4]);
            const obj8 = {};
            ({ id: obj5.id, animated: obj5.animated } = flag2);
            obj8.size = EMOJI_URL_BASE_SIZE;
            obj7.src = obj3.getEmojiURL(obj8);
            obj5 = importDefault(dependencyMap[4]);
            const obj9 = { id: flag2.id };
            flag2 = false;
            obj9.animated = false;
            obj9.size = EMOJI_URL_BASE_SIZE;
            obj7.frozenSrc = obj5.getEmojiURL(obj9);
            items.push(obj7);
          } else {
            obj = { type: "emoji" };
            obj1 = importDefault(dependencyMap[5]);
            obj.content = obj1.convertSurrogateToName(flag2.name, false);
            obj.surrogate = flag2.name;
            items.push(obj);
          }
          items.push({});
        }
      }
    }
    const obj10 = {};
    const merged3 = Object.assign(importDefault(dependencyMap[7])(message));
    obj10["content"] = formatToPartsResult;
    return obj10;
  }
};
