// Module ID: 9480
// Function ID: 9481
// Name: isPostMessageSocket
// Dependencies: [6588, 2]
// Exports: default

// Module 9480 (isPostMessageSocket)
import Constants from "Constants" /* 6588 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
