// Module ID: 15125
// Function ID: 15126
// Name: isPostMessageDisconnect
// Dependencies: [5639, 2]
// Exports: default

// Module 15125 (isPostMessageDisconnect)
import Constants from "Constants" /* 5639 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
