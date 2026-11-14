// Module ID: 7297
// Function ID: 7298
// Name: isPostMessageSocket
// Dependencies: [6761, 2]
// Exports: default

// Module 7297 (isPostMessageSocket)
import Constants from "Constants" /* 6761 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
