// Module ID: 7307
// Function ID: 7308
// Name: isPostMessageSocket
// Dependencies: [6759, 2]
// Exports: default

// Module 7307 (isPostMessageSocket)
import Constants from "Constants" /* 6759 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
