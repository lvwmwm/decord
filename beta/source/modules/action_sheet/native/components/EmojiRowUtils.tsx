// Module ID: 11101
// Function ID: 11102
// Name: EmojiRowUtils
// Dependencies: [1086, 1391, 2]
// Exports: shouldShowEmojiRow

// Module 11101 (EmojiRowUtils)
import FlagUtils from "FlagUtils" /* 1391 */;
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
({ MessageFlags: c2, MessageStates: c3, MessageTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/action_sheet/native/components/EmojiRowUtils.tsx");

export const shouldShowEmojiRow = function shouldShowEmojiRow(arg0, message, isActiveChannelOrUnarchivableThread) {
  let tmp = arg0 && isActiveChannelOrUnarchivableThread && message.state !== constants2.SEND_FAILED && message.state !== constants2.SENDING && message.type !== constants3.THREAD_STARTER_MESSAGE;
  if (tmp) {
    const obj = FlagUtils;
    tmp = !obj.hasFlag(message.flags, constants.EPHEMERAL);
  }
  return tmp;
};
