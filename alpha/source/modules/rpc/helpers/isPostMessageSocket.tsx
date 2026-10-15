// Module ID: 15373
// Function ID: 15374
// Name: isPostMessageSocket
// Dependencies: [5855, 2]
// Exports: default

// Module 15373 (isPostMessageSocket)
import Constants from "Constants" /* 5855 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
