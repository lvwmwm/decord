// Module ID: 11435
// Function ID: 11436
// Name: tryInjectMessage
// Dependencies: [502, 1074, 7171, 5058, 1385, 11436, 11437, 2]
// Exports: tryCreateInjectedMessage

// Module 11435 (tryInjectMessage)
import FlagUtils from "FlagUtils" /* 1385 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5058 */;
import createMessageDefault from "createMessage" /* 7171 */;
import ChannelRecipientPrivateUserDataFlags from "ChannelRecipientPrivateUserDataFlags" /* 11436 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ MessageFlags: closure_4, MessageStates: hasOwnProperty, MessageTypes: metroRequire } = Constants);
const map = new Map();
let result = size.fileFinishedImporting("modules/messages/tryInjectMessage.tsx");

export const tryCreateInjectedMessage = function tryCreateInjectedMessage(id, id2) {
  let tmp4;
  if (map.get(id2.id) === id.id) {
    const obj3 = { channelId: id2.id, type: metroRequire.IN_GAME_MESSAGE_NUX, content: "", author: id.author, flags: constants.EPHEMERAL, state: hasOwnProperty.SENT };
    const tmp21 = createMessageDefault(obj3);
    const obj7 = MessageRecordUtils;
    const messageRecord = obj7.createMessageRecord(tmp21);
    ({ applicationId: tmp23.applicationId, timestamp: tmp23.timestamp } = id);
    tmp4 = messageRecord;
  } else {
    tmp4 = null;
    if (null != id.applicationId) {
      tmp4 = null;
      const obj2 = FlagUtils;
      const tmp3 = constants;
      if (obj2.hasFlag(id.flags, constants.SENT_BY_SOCIAL_LAYER_INTEGRATION)) {
        tmp4 = null;
        if (id2.isDM()) {
          tmp4 = null;
          if (id.author.id !== AuthenticationStore.getId()) {
            tmp4 = null;
            if (null == id.activity) {
              let num = id2.recipientFlags;
              const hasFlag = FlagUtils.hasFlag;
              FlagUtils;
              if (num == null) {
                num = 0;
              }
              tmp4 = null;
              if (!hasFlag(num, ChannelRecipientPrivateUserDataFlags.ChannelRecipientPrivateUserDataFlags.DISMISSED_IN_GAME_MESSAGE_NUX)) {
                tmp4 = null;
                if (!map.has(id2.id)) {
                  const obj4 = { channelId: id2.id, type: metroRequire.IN_GAME_MESSAGE_NUX, content: "", author: id.author, flags: tmp3.EPHEMERAL, state: hasOwnProperty.SENT };
                  const tmp10 = createMessageDefault(obj4);
                  const tmpResult3 = MessageRecordUtils;
                  const messageRecord1 = tmpResult3.createMessageRecord(tmp10);
                  ({ applicationId: tmp11.applicationId, timestamp: tmp11.timestamp } = id);
                  const result = obj.set(id2.id, id.id);
                  let num2 = id2.recipientFlags;
                  const setFlag = FlagUtils.setFlag;
                  FlagUtils;
                  const tmp7 = importDefault;
                  if (num2 == null) {
                    num2 = 0;
                  }
                  const setFlagResult = setFlag(num2, ChannelRecipientPrivateUserDataFlags.ChannelRecipientPrivateUserDataFlags.DISMISSED_IN_GAME_MESSAGE_NUX, true);
                  const tmp7Result = tmp7(11437);
                  const result1 = tmp7Result.updatePrivateChannelRecipientFlags(id2.id, setFlagResult);
                  tmp4 = messageRecord1;
                }
              }
            }
          }
        }
      }
    }
  }
  let tmp24 = null;
  if (null != tmp4) {
    tmp24 = { message: tmp4, position: "before" };
    const obj5 = { message: tmp4, position: "before" };
  }
  return tmp24;
};
