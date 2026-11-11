// Module ID: 7233
// Function ID: 7234
// Name: isPostMessageSocket
// Dependencies: [6698, 2]
// Exports: default

// Module 7233 (isPostMessageSocket)
import Constants from "Constants" /* 6698 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
