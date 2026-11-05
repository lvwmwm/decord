// Module ID: 16656
// Function ID: 16657
// Name: isPostMessageDisconnect
// Dependencies: [6588, 2]
// Exports: default

// Module 16656 (isPostMessageDisconnect)
import Constants from "Constants" /* 6588 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
