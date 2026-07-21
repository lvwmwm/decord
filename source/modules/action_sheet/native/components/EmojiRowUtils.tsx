// Module ID: 9935
// Function ID: 76869
// Name: shouldShowEmojiRow
// Dependencies: []
// Exports: shouldShowEmojiRow

// Module 9935 (shouldShowEmojiRow)
const _module = require(dependencyMap[0]);
({ MessageFlags: closure_2, MessageStates: closure_3, MessageTypes: closure_4 } = _module);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/action_sheet/native/components/EmojiRowUtils.tsx");

export const shouldShowEmojiRow = function shouldShowEmojiRow(arg0, message, isActiveChannelOrUnarchivableThread) {
  let tmp = arg0;
  if (arg0) {
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
    tmp = !require(dependencyMap[1]).hasFlag(message.flags, constants.EPHEMERAL);
    const obj = require(dependencyMap[1]);
  }
  return tmp;
};
