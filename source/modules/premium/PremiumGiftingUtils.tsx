// Module ID: 7851
// Function ID: 61964
// Name: _sendGiftMessage
// Dependencies: [5, 1348, 4123, 4140, 44, 4366, 6691, 6923, 2]
// Exports: sendGiftMessage, unhandledGiftIntent

// Module 7851 (_sendGiftMessage)
import unambiguousRegex from "unambiguousRegex";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

const require = arg1;
async function _sendGiftMessage(arg0, arg1, arg2) {
  if (null == arg1) {
    const _Error2 = Error;
    let error = new Error("giftCode must be defined");
    throw error;
  } else if (null == arg0) {
    let _Error = Error;
    const error1 = new Error("Recipient must be defined");
    throw error1;
  } else {
    let obj = { recipientIds: arg0.id };
    const obj5 = outer2_1(outer2_2[3]);
    const tmp21 = yield outer2_1(outer2_2[3]).openPrivateChannel(obj).then((channelId) => {
      const channel = outer3_4.getChannel(channelId);
      outer3_1(outer3_2[4])(null != channel, "PrivateChannel is null");
      if (null == channel) {
        const _Error = Error;
        const error = new Error("Channel must be defined");
        throw error;
      } else {
        return channel;
      }
    });
    obj = outer2_0(outer2_2[5]);
    const giftCodeURL = obj.getGiftCodeURL(arg1);
    const obj2 = outer2_1(outer2_2[6]);
    const id = tmp21.id;
    const openPrivateChannelResult = outer2_1(outer2_2[3]).openPrivateChannel(obj);
    obj = { isGiftLinkSentOnBehalfOfUser: true, location: outer2_5.GIFTING };
    return obj2.sendMessage(id, outer2_1(outer2_2[7]).parse(tmp21, giftCodeURL), undefined, obj);
  }
}
const result = require("MESSAGE_GROUP_SPACING").fileFinishedImporting("modules/premium/PremiumGiftingUtils.tsx");

export const AnimationState = { ACTION: "action", LOOP: "loop", IDLE: "idle" };
export const sendGiftMessage = function sendGiftMessage() {
  return _sendGiftMessage(...arguments);
};
export function unhandledGiftIntent(giftIntentType) {

}
