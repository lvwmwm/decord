// Module ID: 15078
// Function ID: 15079
// Name: isPostMessageSocket
// Dependencies: [5644, 2]
// Exports: default

// Module 15078 (isPostMessageSocket)
import Constants from "Constants" /* 5644 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
