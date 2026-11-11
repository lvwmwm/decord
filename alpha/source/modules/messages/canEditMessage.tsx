// Module ID: 12594
// Function ID: 12595
// Name: canEditMessage
// Dependencies: [1072, 6999, 6311, 5889, 2]
// Exports: default

// Module 12594 (canEditMessage)
import isForwardMessageDefault from "isForwardMessage" /* 5889 */;
import MessageRecordUtils from "MessageRecordUtils" /* 6311 */;
import isSystemMessageDefault from "isSystemMessage" /* 6999 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ MessageFlags: c3, MessageStates: closure_4, MessageTypes: hasOwnProperty } = Constants);
let result = size.fileFinishedImporting("modules/messages/canEditMessage.tsx");

export default function canEditMessage(author, arg1) {
  let tmp = null != arg1;
  if (tmp) {
    let tmp3 = author.author.id === arg1;
    if (tmp3) {
      let tmp5 = author.state === constants2.SENT;
      if (tmp5) {
        let tmp9 = !isSystemMessageDefault(author);
        isSystemMessageDefault(author);
        if (tmp9) {
          const obj = MessageRecordUtils;
          let result = obj.canEditMessageWithStickers(author);
          if (result) {
            let tmp14 = !author.hasFlag(constants.IS_VOICE_MESSAGE);
            author.hasFlag(constants.IS_VOICE_MESSAGE);
            if (tmp14) {
              let tmp15 = null == author.referralTrialOfferId;
              if (tmp15) {
                let tmp17 = !author.isPoll();
                author.isPoll();
                if (tmp17) {
                  let tmp19 = !tmp6(5889)(author);
                  isForwardMessageDefault(author);
                  if (tmp19) {
                    tmp19 = author.type !== hasOwnProperty.MEDIA_MENTION_MESSAGE;
                  }
                  tmp17 = tmp19;
                }
                tmp15 = tmp17;
              }
              tmp14 = tmp15;
            }
            result = tmp14;
          }
          tmp9 = result;
        }
        tmp5 = tmp9;
      }
      tmp3 = tmp5;
    }
    tmp = tmp3;
  }
  return tmp;
};
