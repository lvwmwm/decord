// Module ID: 15839
// Function ID: 15840
// Name: isPostMessageDisconnect
// Dependencies: [6379, 2]
// Exports: default

// Module 15839 (isPostMessageDisconnect)
import Constants from "Constants" /* 6379 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
