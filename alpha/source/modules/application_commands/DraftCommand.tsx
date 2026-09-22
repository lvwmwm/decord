// Module ID: 5108
// Function ID: 5109
// Name: DraftCommand
// Dependencies: [2]
// Exports: isDraftCommandValidForText

// Module 5108 (DraftCommand)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/DraftCommand.tsx");

export const isDraftCommandValidForText = function isDraftCommandValidForText(command1, substr) {
  let tmp = null != command1;
  if (tmp) {
    let startsWithResult = substr === command1.commandText;
    if (!startsWithResult) {
      const _HermesInternal = HermesInternal;
      startsWithResult = substr.startsWith("" + command1.commandText + " ");
    }
    tmp = startsWithResult;
  }
  return tmp;
};
