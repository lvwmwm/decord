// Module ID: 6903
// Function ID: 6904
// Name: isPostMessageSocket
// Dependencies: [6354, 2]
// Exports: default

// Module 6903 (isPostMessageSocket)
import Constants from "Constants" /* 6354 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
