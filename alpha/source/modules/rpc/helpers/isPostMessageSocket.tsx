// Module ID: 9227
// Function ID: 9228
// Name: isPostMessageSocket
// Dependencies: [6364, 2]
// Exports: default

// Module 9227 (isPostMessageSocket)
import Constants from "Constants" /* 6364 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
