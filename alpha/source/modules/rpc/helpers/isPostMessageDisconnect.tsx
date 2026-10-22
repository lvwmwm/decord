// Module ID: 15752
// Function ID: 15753
// Name: isPostMessageDisconnect
// Dependencies: [6363, 2]
// Exports: default

// Module 15752 (isPostMessageDisconnect)
import Constants from "Constants" /* 6363 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
