// Module ID: 7638
// Function ID: 7639
// Name: isPostMessageSocket
// Dependencies: [5797, 2]
// Exports: default

// Module 7638 (isPostMessageSocket)
import Constants from "Constants" /* 5797 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
