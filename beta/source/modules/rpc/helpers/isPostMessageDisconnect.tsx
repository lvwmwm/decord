// Module ID: 16744
// Function ID: 16745
// Name: isPostMessageDisconnect
// Dependencies: [6615, 2]
// Exports: default

// Module 16744 (isPostMessageDisconnect)
import Constants from "Constants" /* 6615 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
