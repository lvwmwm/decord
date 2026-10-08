// Module ID: 14547
// Function ID: 14548
// Name: isPostMessageSocket
// Dependencies: [5635, 2]
// Exports: default

// Module 14547 (isPostMessageSocket)
import Constants from "Constants" /* 5635 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
