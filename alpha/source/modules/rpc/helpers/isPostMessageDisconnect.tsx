// Module ID: 15810
// Function ID: 15811
// Name: isPostMessageDisconnect
// Dependencies: [5671, 2]
// Exports: default

// Module 15810 (isPostMessageDisconnect)
import Constants from "Constants" /* 5671 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
