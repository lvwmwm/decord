// Module ID: 9179
// Function ID: 9180
// Name: isPostMessageSocket
// Dependencies: [6332, 2]
// Exports: default

// Module 9179 (isPostMessageSocket)
import Constants from "Constants" /* 6332 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
