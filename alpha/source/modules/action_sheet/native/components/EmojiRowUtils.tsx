// Module ID: 14525
// Function ID: 14526
// Name: EmojiRowUtils
// Dependencies: [1072, 1396, 2]
// Exports: shouldShowEmojiRow

// Module 14525 (EmojiRowUtils)
import FlagUtils from "FlagUtils" /* 1396 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
({ MessageFlags: c2, MessageStates: c3, MessageTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/action_sheet/native/components/EmojiRowUtils.tsx");

export function shouldShowEmojiRow(arg0, message, arg2) {
  let tmp = arg0 && arg2 && message.state !== constants2.SEND_FAILED && message.state !== constants2.SENDING && message.type !== constants3.THREAD_STARTER_MESSAGE;
  if (tmp) {
    const obj = FlagUtils;
    tmp = !obj.hasFlag(message.flags, constants.EPHEMERAL);
  }
  return tmp;
}
