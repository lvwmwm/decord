// Module ID: 9408
// Function ID: 9409
// Name: isPostMessageSocket
// Dependencies: [6583, 2]
// Exports: default

// Module 9408 (isPostMessageSocket)
import Constants from "Constants" /* 6583 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
