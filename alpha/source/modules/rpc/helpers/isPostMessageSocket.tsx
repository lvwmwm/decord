// Module ID: 9163
// Function ID: 9164
// Name: isPostMessageSocket
// Dependencies: [5895, 2]
// Exports: default

// Module 9163 (isPostMessageSocket)
import Constants from "Constants" /* 5895 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
