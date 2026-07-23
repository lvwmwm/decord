// Module ID: 9944
// Function ID: 76922
// Name: shouldShowEmojiRow
// Dependencies: [653, 1360, 2]
// Exports: shouldShowEmojiRow

// Module 9944 (shouldShowEmojiRow)
import ME from "ME";

let closure_2;
let closure_3;
let closure_4;
({ MessageFlags: closure_2, MessageStates: closure_3, MessageTypes: closure_4 } = ME);
const result = require("set").fileFinishedImporting("modules/action_sheet/native/components/EmojiRowUtils.tsx");

export const shouldShowEmojiRow = function shouldShowEmojiRow(closure_8, message, isActiveChannelOrUnarchivableThread) {
  let tmp = closure_8;
  if (closure_8) {
    tmp = isActiveChannelOrUnarchivableThread;
  }
  if (tmp) {
    tmp = message.state !== constants2.SEND_FAILED;
  }
  if (tmp) {
    tmp = message.state !== constants2.SENDING;
  }
  if (tmp) {
    tmp = message.type !== constants3.THREAD_STARTER_MESSAGE;
  }
  if (tmp) {
    tmp = !require(1360) /* hasFlag */.hasFlag(message.flags, constants.EPHEMERAL);
    const obj = require(1360) /* hasFlag */;
  }
  return tmp;
};
