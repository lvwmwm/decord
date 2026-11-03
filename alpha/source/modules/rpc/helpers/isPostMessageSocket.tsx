// Module ID: 9455
// Function ID: 9456
// Name: isPostMessageSocket
// Dependencies: [6570, 2]
// Exports: default

// Module 9455 (isPostMessageSocket)
import Constants from "Constants" /* 6570 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
