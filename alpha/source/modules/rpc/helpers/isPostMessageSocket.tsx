// Module ID: 6784
// Function ID: 6785
// Name: isPostMessageSocket
// Dependencies: [6233, 2]
// Exports: default

// Module 6784 (isPostMessageSocket)
import Constants from "Constants" /* 6233 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
