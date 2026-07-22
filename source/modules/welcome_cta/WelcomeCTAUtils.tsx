// Module ID: 7682
// Function ID: 61352
// Name: pickHelloSticker
// Dependencies: []
// Exports: handleWelcomeCtaClicked, pickHelloSticker, pickWelcomeSticker

// Module 7682 (pickHelloSticker)
let closure_2 = importDefault(dependencyMap[0]);
const WELCOME_STICKERS = arg1(dependencyMap[1]).WELCOME_STICKERS;
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/welcome_cta/WelcomeCTAUtils.tsx");

export const pickHelloSticker = function pickHelloSticker() {
  const currentUser = authStore.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    num = importDefault(dependencyMap[3]).extractTimestamp(id);
    const obj = importDefault(dependencyMap[3]);
  }
  return WELCOME_STICKERS[num % closure_3.length];
};
export const pickWelcomeSticker = function pickWelcomeSticker(id) {
  const currentUser = authStore.getCurrentUser();
  id = undefined;
  if (null != currentUser) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    num = importDefault(dependencyMap[3]).extractTimestamp(id);
    const obj = importDefault(dependencyMap[3]);
  }
  const obj2 = importDefault(dependencyMap[3]);
  return WELCOME_STICKERS[(num + obj2.extractTimestamp(obj2, id)) % closure_3.length];
};
export const handleWelcomeCtaClicked = function handleWelcomeCtaClicked(messageChannel, message, stickerId) {
  let obj = importDefault(dependencyMap[4]);
  obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  obj.sendGreetMessage(messageChannel.id, stickerId, importDefault(dependencyMap[4]).getSendMessageOptionsForReply(obj));
  const obj2 = importDefault(dependencyMap[4]);
  obj = { is_reply: true, sticker_id: stickerId, target_user: message.author.id };
  const currentUser = authStore.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  obj.sender = id;
  importDefault(dependencyMap[5]).track(AnalyticEvents.WELCOME_CTA_CLICKED, obj);
};
