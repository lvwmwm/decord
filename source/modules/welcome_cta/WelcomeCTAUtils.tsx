// Module ID: 7688
// Function ID: 61389
// Name: pickHelloSticker
// Dependencies: [1849, 7689, 653, 21, 6691, 675, 2]
// Exports: handleWelcomeCtaClicked, pickHelloSticker, pickWelcomeSticker

// Module 7688 (pickHelloSticker)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { WELCOME_STICKERS } from "items";
import { AnalyticEvents } from "ME";

const result = require("ME").fileFinishedImporting("modules/welcome_cta/WelcomeCTAUtils.tsx");

export const pickHelloSticker = function pickHelloSticker() {
  const currentUser = authStore.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    num = importDefault(21).extractTimestamp(id);
    const obj = importDefault(21);
  }
  return WELCOME_STICKERS[num % WELCOME_STICKERS.length];
};
export const pickWelcomeSticker = function pickWelcomeSticker(id) {
  const currentUser = authStore.getCurrentUser();
  id = undefined;
  if (null != currentUser) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    num = importDefault(21).extractTimestamp(id);
    const obj = importDefault(21);
  }
  const obj2 = importDefault(21);
  return WELCOME_STICKERS[(num + obj2.extractTimestamp(obj2, id)) % WELCOME_STICKERS.length];
};
export const handleWelcomeCtaClicked = function handleWelcomeCtaClicked(messageChannel, message, stickerId) {
  let obj = importDefault(6691);
  obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  obj.sendGreetMessage(messageChannel.id, stickerId, importDefault(6691).getSendMessageOptionsForReply(obj));
  const obj2 = importDefault(6691);
  obj = { is_reply: true, sticker_id: stickerId, target_user: message.author.id };
  const currentUser = authStore.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  obj.sender = id;
  importDefault(675).track(AnalyticEvents.WELCOME_CTA_CLICKED, obj);
};
