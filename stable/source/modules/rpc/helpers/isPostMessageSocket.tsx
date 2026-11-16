// Module ID: 9441
// Function ID: 9442
// Name: isPostMessageSocket
// Dependencies: [6615, 2]
// Exports: default

// Module 9441 (isPostMessageSocket)
import Constants from "Constants" /* 6615 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
