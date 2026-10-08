// Module ID: 12810
// Function ID: 12811
// Name: EmojiRowUtils
// Dependencies: [1085, 1402, 2]
// Exports: shouldShowEmojiRow

// Module 12810 (EmojiRowUtils)
import FlagUtils from "FlagUtils" /* 1402 */;
import Constants from "Constants" /* 1085 */;
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
