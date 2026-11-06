// Module ID: 9426
// Function ID: 9427
// Name: isPostMessageSocket
// Dependencies: [6608, 2]
// Exports: default

// Module 9426 (isPostMessageSocket)
import Constants from "Constants" /* 6608 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
