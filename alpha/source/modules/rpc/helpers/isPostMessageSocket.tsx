// Module ID: 9258
// Function ID: 9259
// Name: isPostMessageSocket
// Dependencies: [6379, 2]
// Exports: default

// Module 9258 (isPostMessageSocket)
import Constants from "Constants" /* 6379 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
