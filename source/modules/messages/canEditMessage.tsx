// Module ID: 9997
// Function ID: 77172
// Name: canEditMessage
// Dependencies: [653, 5651, 4351, 5679, 2]
// Exports: default

// Module 9997 (canEditMessage)
import ME from "ME";

let closure_3;
let closure_4;
let closure_5;
({ MessageFlags: closure_3, MessageStates: closure_4, MessageTypes: closure_5 } = ME);
const result = require("createMinimalMessageRecord").fileFinishedImporting("modules/messages/canEditMessage.tsx");

export default function canEditMessage(author) {
  let tmp = null != arg1;
  if (tmp) {
    let tmp2 = author.author.id === arg1;
    if (tmp2) {
      let tmp4 = author.state === constants2.SENT;
      if (tmp4) {
        let tmp7 = !importDefault(5651)(author);
        if (tmp7) {
          const tmp10 = !require(4351) /* createMinimalMessageRecord */.canEditMessageWithStickers(author);
          let tmp11 = !tmp10;
          if (!tmp10) {
            let tmp13 = !author.hasFlag(constants.IS_VOICE_MESSAGE);
            if (tmp13) {
              let tmp14 = null == author.referralTrialOfferId;
              if (tmp14) {
                let tmp15 = !author.isPoll();
                if (tmp15) {
                  let tmp18 = !importDefault(5679)(author);
                  if (tmp18) {
                    tmp18 = author.type !== constants3.MEDIA_MENTION_MESSAGE;
                  }
                  tmp15 = tmp18;
                }
                tmp14 = tmp15;
              }
              tmp13 = tmp14;
            }
            tmp11 = tmp13;
          }
          tmp7 = tmp11;
          const obj = require(4351) /* createMinimalMessageRecord */;
        }
        tmp4 = tmp7;
      }
      tmp2 = tmp4;
    }
    tmp = tmp2;
  }
  return tmp;
};
