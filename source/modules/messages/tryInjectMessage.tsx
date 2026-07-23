// Module ID: 11096
// Function ID: 86275
// Name: createInjectedInGameNuxMessage
// Dependencies: [1194, 653, 6995, 4351, 1360, 11097, 11098, 2]
// Exports: tryCreateInjectedMessage

// Module 11096 (createInjectedInGameNuxMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function createInjectedInGameNuxMessage(author, id) {
  const obj = { channelId: id, type: constants3.IN_GAME_MESSAGE_NUX, content: "", author: author.author, flags: constants.EPHEMERAL, state: constants2.SENT };
  const tmp = importDefault(6995)({ channelId: id, type: constants3.IN_GAME_MESSAGE_NUX, content: "", author: author.author, flags: constants.EPHEMERAL, state: constants2.SENT });
  const messageRecord = require(4351) /* createMinimalMessageRecord */.createMessageRecord(tmp);
  ({ applicationId: tmp2.applicationId, timestamp: tmp2.timestamp } = author);
  return messageRecord;
}
({ MessageFlags: closure_4, MessageStates: closure_5, MessageTypes: closure_6 } = ME);
const map = new Map();
let result = require("userRecordToServer").fileFinishedImporting("modules/messages/tryInjectMessage.tsx");

export const tryCreateInjectedMessage = function tryCreateInjectedMessage(id, closure_0) {
  if (map.get(closure_0.id) === id.id) {
    let tmp4 = createInjectedInGameNuxMessage(id, closure_0.id);
  } else {
    tmp4 = null;
    if (null != id.applicationId) {
      let obj = require(1360) /* hasFlag */;
      tmp4 = null;
      if (obj.hasFlag(id.flags, constants.SENT_BY_SOCIAL_LAYER_INTEGRATION)) {
        tmp4 = null;
        if (closure_0.isDM()) {
          tmp4 = null;
          if (id.author.id !== id.getId()) {
            tmp4 = null;
            if (null == id.activity) {
              const recipientFlags = closure_0.recipientFlags;
              let num2 = 0;
              if (null != recipientFlags) {
                num2 = recipientFlags;
              }
              tmp4 = null;
              if (!obj2.hasFlag(num2, require(11097) /* ChannelRecipientPrivateUserDataFlags */.ChannelRecipientPrivateUserDataFlags.DISMISSED_IN_GAME_MESSAGE_NUX)) {
                tmp4 = null;
                if (!map.has(closure_0.id)) {
                  const result = map.set(closure_0.id, id.id);
                  const tmp12 = createInjectedInGameNuxMessage(id, closure_0.id);
                  const recipientFlags2 = closure_0.recipientFlags;
                  let num4 = 0;
                  if (null != recipientFlags2) {
                    num4 = recipientFlags2;
                  }
                  const obj3 = require(1360) /* hasFlag */;
                  const setFlagResult = require(1360) /* hasFlag */.setFlag(num4, require(11097) /* ChannelRecipientPrivateUserDataFlags */.ChannelRecipientPrivateUserDataFlags.DISMISSED_IN_GAME_MESSAGE_NUX, true);
                  const result1 = importDefault(11098).updatePrivateChannelRecipientFlags(closure_0.id, setFlagResult);
                  tmp4 = tmp12;
                  const obj4 = importDefault(11098);
                }
              }
              obj2 = require(1360) /* hasFlag */;
            }
          }
        }
      }
    }
  }
  let tmp23 = null;
  if (null != tmp4) {
    obj = { message: tmp4, position: "before" };
    tmp23 = obj;
  }
  return tmp23;
};
