// Module ID: 7747
// Function ID: 61566
// Name: _sendGiftMessage
// Dependencies: []
// Exports: sendGiftMessage, unhandledGiftIntent

// Module 7747 (_sendGiftMessage)
async function _sendGiftMessage(id, code, arg2) {
  if (null == code) {
    const _Error2 = Error;
    const error = new Error("giftCode must be defined");
    throw error;
  } else if (null == id) {
    const _Error = Error;
    const error1 = new Error("Recipient must be defined");
    throw error1;
  } else {
    let obj = { recipientIds: id.id };
    const obj5 = callback2(closure_2[3]);
    const tmp21 = yield callback2(closure_2[3]).openPrivateChannel(obj).then((channelId) => {
      const channel = channel.getChannel(channelId);
      callback(closure_2[4])(null != channel, "PrivateChannel is null");
      if (null == channel) {
        const _Error = Error;
        const error = new Error("Channel must be defined");
        throw error;
      } else {
        return channel;
      }
    });
    obj = callback(closure_2[5]);
    const giftCodeURL = obj.getGiftCodeURL(code);
    const obj2 = callback2(closure_2[6]);
    id = tmp21.id;
    const openPrivateChannelResult = callback2(closure_2[3]).openPrivateChannel(obj);
    obj = { isGiftLinkSentOnBehalfOfUser: true, location: constants.GIFTING };
    return obj2.sendMessage(id, callback2(closure_2[7]).parse(tmp21, giftCodeURL), undefined, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const MessageSendLocation = arg1(dependencyMap[2]).MessageSendLocation;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/premium/PremiumGiftingUtils.tsx");

export const AnimationState = { ACTION: "action", LOOP: "loop", IDLE: "idle" };
export const sendGiftMessage = function sendGiftMessage() {
  return _sendGiftMessage(...arguments);
};
export function unhandledGiftIntent(giftIntentType) {

}
