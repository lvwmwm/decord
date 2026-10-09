// Module ID: 8052
// Function ID: 8053
// Name: PollResultSystemMessage
// Dependencies: [1393, 7960, 7962, 1126, 1415, 4723, 8053, 7964, 2]
// Exports: createPollResultSystemMessage

// Module 8052 (PollResultSystemMessage)
import EmojiConstants from "EmojiConstants" /* 1393 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4723 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7960 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7962 */;
import parsePollResultSystemMessageEmbedDefault from "parsePollResultSystemMessageEmbed" /* 8053 */;
import size from "module_2" /* 2 */;

const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx");

export const createPollResultSystemMessage = function createPollResultSystemMessage(message) {
  let obj10;
  let obj11;
  let obj4;
  let obj6;
  let tmpResult;
  let tmpResult3;
  let tmpResult4;
  const sadEmojiHook = () => closure_0;
  const tmp3 = parsePollResultSystemMessageEmbedDefault(message.message.embeds[0]);
  if (null == tmp3) {
    return null;
  } else if (null == message.message.messageReference) {
    return null;
  } else {
    let formatToParts3Result;
    message = message.message;
    const roleStyle = message.roleStyle;
    const obj14 = useAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj14.getMessageAuthorWithProcessedColor(message);
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault(obj4), title: tmp3.questionText, titleOnClick: obj6 };
    obj4 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj6 = { action: "bindJumpToMessage", targetChannelId: message.messageReference.channel_id, targetMessageId: message.messageReference.message_id, medium: true };
    if (0 === tmp3.totalVotes) {
      const intl3 = tmp22(1126).intl;
      const formatToParts3 = intl3.formatToParts;
      const obj7 = { sadEmojiHook };
      const v9dPxsm = tmp22(1126).t["9dPxsm"];
      const merged = Object.assign(obj2);
      let closure_0 = { type: "emoji", content: "frowning", surrogate: "\u{1F626}" };
      formatToParts3Result = formatToParts3(v9dPxsm, obj7);
    } else {
      const _Math = Math;
      const _HermesInternal = HermesInternal;
      const combined = "" + Math.round(tmp3.victorAnswerVotes / tmp3.totalVotes * 100) + "%";
      if (null == tmp3.victorAnswerId) {
        const intl2 = tmp22(1126).intl;
        const formatToParts2 = intl2.formatToParts;
        const obj8 = { percentage: combined };
        const dqftZ2 = tmp22(1126).t.dqftZ2;
        const merged1 = Object.assign(obj2);
        formatToParts3Result = formatToParts2(dqftZ2, obj8);
      } else {
        const items = [];
        const victorEmoji = tmp3.victorEmoji;
        if (null != victorEmoji) {
          if (null != victorEmoji.id) {
            ({ id: obj3.id, name: obj3.alt } = victorEmoji);
            const push2 = items.push;
            const obj9 = { id: null, type: "customEmoji", alt: null, src: tmpResult.getEmojiURL(obj10), frozenSrc: tmpResult3.getEmojiURL(obj11) };
            obj10 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
            ({ id: obj5.id, animated: obj5.animated } = victorEmoji);
            obj11 = { id: victorEmoji.id, animated: false, size: EMOJI_URL_BASE_SIZE };
            tmpResult = AvatarUtilsDefault;
            tmpResult3 = AvatarUtilsDefault;
            push2(obj9);
          } else {
            const push = items.push;
            const obj = { type: "emoji", content: tmpResult4.convertSurrogateToName(victorEmoji.name, false), surrogate: victorEmoji.name };
            tmpResult4 = UnicodeEmojisDefault;
            push(obj);
          }
          items.push({ type: "text", content: " " });
        }
        const obj12 = { type: "text", content: tmp3.victorAnswerText };
        items.push(obj12);
        const intl = tmp22(1126).intl;
        const formatToParts = intl.formatToParts;
        const obj13 = { answerHook: sadEmojiHook, percentage: combined };
        const zFwIxC = tmp22(1126).t.zFwIxC;
        const merged2 = Object.assign(obj2);
        formatToParts3Result = formatToParts(zFwIxC, obj13);
      }
    }
    const obj16 = { content: formatToParts3Result };
    const merged3 = Object.assign(tmp(7964)(message));
    return obj16;
  }
};
