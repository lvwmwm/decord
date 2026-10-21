// Module ID: 9218
// Function ID: 9219
// Name: isPostMessageSocket
// Dependencies: [6357, 2]
// Exports: default

// Module 9218 (isPostMessageSocket)
import Constants from "Constants" /* 6357 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
