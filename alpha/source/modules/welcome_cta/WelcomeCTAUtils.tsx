// Module ID: 7993
// Function ID: 7994
// Name: WelcomeCTAUtils
// Dependencies: [1389, 7994, 1085, 11, 7167, 1264, 2]
// Exports: handleWelcomeCtaClicked, pickHelloSticker, pickWelcomeSticker

// Module 7993 (WelcomeCTAUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7167 */;
import WelcomeCTAConstants from "WelcomeCTAConstants" /* 7994 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

const WELCOME_STICKERS = WelcomeCTAConstants.WELCOME_STICKERS;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/welcome_cta/WelcomeCTAUtils.tsx");

export const pickHelloSticker = function pickHelloSticker() {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    const obj = SnowflakeUtilsDefault;
    num = obj.extractTimestamp(id);
  }
  return WELCOME_STICKERS[num % WELCOME_STICKERS.length];
};
export const pickWelcomeSticker = function pickWelcomeSticker(id) {
  const currentUser = UserStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    const obj = SnowflakeUtilsDefault;
    num = obj.extractTimestamp(id);
  }
  const obj2 = SnowflakeUtilsDefault;
  return WELCOME_STICKERS[(num + obj2.extractTimestamp(obj2, id)) % WELCOME_STICKERS.length];
};
export const handleWelcomeCtaClicked = function handleWelcomeCtaClicked(messageChannel, message, stickerId) {
  let id1;
  const sendGreetMessage = MessageActionCreatorsDefault.sendGreetMessage;
  const id = messageChannel.id;
  MessageActionCreatorsDefault;
  const obj = MessageActionCreatorsDefault;
  const obj2 = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  sendGreetMessage(id, stickerId, obj.getSendMessageOptionsForReply(obj2));
  const obj3 = { is_reply: true, sticker_id: stickerId, target_user: message.author.id, sender: id1 };
  const track = AnalyticsUtilsDefault.track;
  const WELCOME_CTA_CLICKED = AnalyticEvents.WELCOME_CTA_CLICKED;
  AnalyticsUtilsDefault;
  const currentUser = UserStore.getCurrentUser();
  id1 = undefined;
  if (currentUser != null) {
    id1 = currentUser.id;
  }
  track(WELCOME_CTA_CLICKED, obj3);
};
