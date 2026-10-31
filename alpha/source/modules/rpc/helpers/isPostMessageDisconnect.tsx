// Module ID: 16384
// Function ID: 16385
// Name: isPostMessageDisconnect
// Dependencies: [6450, 2]
// Exports: default

// Module 16384 (isPostMessageDisconnect)
import Constants from "Constants" /* 6450 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
