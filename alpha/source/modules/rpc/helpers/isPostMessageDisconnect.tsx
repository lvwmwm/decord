// Module ID: 16539
// Function ID: 16540
// Name: isPostMessageDisconnect
// Dependencies: [6570, 2]
// Exports: default

// Module 16539 (isPostMessageDisconnect)
import Constants from "Constants" /* 6570 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
