// Module ID: 7525
// Function ID: 7526
// Name: PremiumGiftingUtils
// Dependencies: [5, 2045, 4829, 4849, 38, 5089, 6876, 7095, 2]
// Exports: sendGiftMessage, unhandledGiftIntent

// Module 7525 (PremiumGiftingUtils)
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const require = fn;
let closure_6 = async function _sendGiftMessage() {
  closure_3 = tmp5;
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  if (null == closure_1) {
    const _Error2 = Error;
    let error = new Error("giftCode must be defined");
    throw error;
  }
  if (null == tmp39) {
    let _Error = Error;
    const error1 = new Error("Recipient must be defined");
    throw error1;
  }
  ChannelActionCreatorsDefault;
  closure_130_1 = await ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: tmp39.id }).then((result) => {
    channel = channel.getChannel(result);
    closure_1_1(closure_1_2[4])(null != channel, "PrivateChannel is null");
    if (null == channel) {
      const _Error = Error;
      const error = new Error("Channel must be defined");
      throw error;
    } else {
      return channel;
    }
  });
  const giftCodeURL = closure_131_0(closure_131_2[5]).getGiftCodeURL(closure_130_0);
  const id = closure_130_1.id;
  closure_131_0(closure_131_2[5]);
  return closure_131_1(closure_131_2[6]).sendMessage(id, closure_131_1(closure_131_2[7]).parse(closure_130_1, giftCodeURL), undefined, { isGiftLinkSentOnBehalfOfUser: true, location: closure_131_5.GIFTING });
};
const MessageSendLocation = fn(4829).MessageSendLocation;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/PremiumGiftingUtils.tsx");

export const AnimationState = { ACTION: "action", LOOP: "loop", IDLE: "idle" };
export const sendGiftMessage = function sendGiftMessage() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export function unhandledGiftIntent() {

}
