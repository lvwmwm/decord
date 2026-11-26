// Module ID: 14416
// Function ID: 14417
// Name: PollResultSystemMessage
// Dependencies: [1390, 12000, 14372, 12230, 1112, 1413, 4989, 14417, 14424, 14373, 2]
// Exports: createPollResultSystemMessage

// Module 14416 (PollResultSystemMessage)
import EmojiConstants from "EmojiConstants" /* 1390 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1413 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4989 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 12000 */;
import PollTextUtils from "PollTextUtils" /* 12230 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14372 */;
import MarkupParsers from "MarkupParsers" /* 14417 */;
import parsePollResultSystemMessageEmbedDefault from "parsePollResultSystemMessageEmbed" /* 14424 */;
import size from "module_2" /* 2 */;

const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx");

export function createPollResultSystemMessage(message) {
  let formatToParts3Result;
  let obj12;
  let obj13;
  let obj4;
  let obj5;
  let obj6;
  let tmp2Result;
  let tmp2Result3;
  let tmp2Result4;
  const sadEmojiHook = () => closure_0;
  const tmp4 = parsePollResultSystemMessageEmbedDefault(message.message.embeds[0]);
  let tmp5 = null;
  if (null != tmp4) {
    tmp5 = null;
    if (null != message.message.messageReference) {
      const obj = { content: formatToParts3Result };
      const merged = Object.assign(tmp2(14373)(message));
      message = message.message;
      const roleStyle = message.roleStyle;
      const obj2 = useAuthorWithProcessedColor;
      const messageAuthorWithProcessedColor = obj2.getMessageAuthorWithProcessedColor(message);
      const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault(obj4), title: obj5.getPollPlainText(tmp4.questionText), titleOnClick: obj6 };
      obj4 = { message, author: messageAuthorWithProcessedColor, roleStyle };
      obj5 = PollTextUtils;
      obj6 = { action: "bindJumpToMessage", targetChannelId: message.messageReference.channel_id, targetMessageId: message.messageReference.message_id, medium: true };
      if (0 === tmp4.totalVotes) {
        const intl3 = tmp8(1112).intl;
        const formatToParts3 = intl3.formatToParts;
        const obj7 = { sadEmojiHook };
        const v9dPxsm = tmp8(1112).t["9dPxsm"];
        const merged1 = Object.assign(obj3);
        let closure_0 = { type: "emoji", content: "frowning", surrogate: "\u{1F626}" };
        formatToParts3Result = formatToParts3(v9dPxsm, obj7);
      } else {
        const _Math = Math;
        const _HermesInternal = HermesInternal;
        const combined = "" + Math.round(tmp4.victorAnswerVotes / tmp4.totalVotes * 100) + "%";
        if (null == tmp4.victorAnswerId) {
          const intl2 = tmp8(1112).intl;
          const formatToParts2 = intl2.formatToParts;
          const obj8 = { percentage: combined };
          const dqftZ2 = tmp8(1112).t.dqftZ2;
          const merged2 = Object.assign(obj3);
          formatToParts3Result = formatToParts2(dqftZ2, obj8);
        } else {
          const items = [];
          const victorEmoji = tmp4.victorEmoji;
          if (null != victorEmoji) {
            if (null != victorEmoji.id) {
              ({ id: obj9.id, name: obj9.alt } = victorEmoji);
              const push2 = items.push;
              const obj10 = { id: null, type: "customEmoji", alt: null, src: tmp2Result.getEmojiURL(obj12), frozenSrc: tmp2Result3.getEmojiURL(obj13) };
              obj12 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
              ({ id: obj11.id, animated: obj11.animated } = victorEmoji);
              obj13 = { id: victorEmoji.id, animated: false, size: EMOJI_URL_BASE_SIZE };
              tmp2Result = AvatarUtilsDefault;
              tmp2Result3 = AvatarUtilsDefault;
              push2(obj10);
            } else {
              const push = items.push;
              const obj14 = { type: "emoji", content: tmp2Result4.convertSurrogateToName(victorEmoji.name, false), surrogate: victorEmoji.name };
              tmp2Result4 = UnicodeEmojisDefault;
              push(obj14);
            }
            items.push({ type: "text", content: " " });
          }
          const tmp8Result = MarkupParsers;
          const parsePollMarkupResult = tmp8Result.parsePollMarkup(tmp4.victorAnswerText, false);
          if (null != parsePollMarkupResult) {
            const push3 = items.push;
            const _Array = Array;
            let tmp15 = parsePollMarkupResult;
            if (!Array.isArray(parsePollMarkupResult)) {
              const items1 = [parsePollMarkupResult];
              tmp15 = items1;
            }
            const items2 = [];
            HermesBuiltin.arraySpread(items2, tmp15, 0);
            HermesBuiltin.apply(push3, items2, items);
          }
          const intl = tmp8(1112).intl;
          const formatToParts = intl.formatToParts;
          const obj15 = { answerHook: sadEmojiHook, percentage: combined };
          const zFwIxC = tmp8(1112).t.zFwIxC;
          const merged3 = Object.assign(obj3);
          formatToParts3Result = formatToParts(zFwIxC, obj15);
        }
      }
      tmp5 = obj;
    }
  }
  return tmp5;
}
