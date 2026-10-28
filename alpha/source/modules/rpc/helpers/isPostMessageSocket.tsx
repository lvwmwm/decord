// Module ID: 9290
// Function ID: 9291
// Name: isPostMessageSocket
// Dependencies: [6413, 2]
// Exports: default

// Module 9290 (isPostMessageSocket)
import Constants from "Constants" /* 6413 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
