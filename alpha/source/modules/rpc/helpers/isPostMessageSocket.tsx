// Module ID: 7512
// Function ID: 7513
// Name: isPostMessageSocket
// Dependencies: [5671, 2]
// Exports: default

// Module 7512 (isPostMessageSocket)
import Constants from "Constants" /* 5671 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
