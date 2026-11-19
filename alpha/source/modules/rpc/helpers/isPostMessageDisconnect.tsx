// Module ID: 15695
// Function ID: 15696
// Name: isPostMessageDisconnect
// Dependencies: [6233, 2]
// Exports: default

// Module 15695 (isPostMessageDisconnect)
import Constants from "Constants" /* 6233 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
