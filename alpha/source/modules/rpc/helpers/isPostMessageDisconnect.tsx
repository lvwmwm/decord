// Module ID: 15505
// Function ID: 15506
// Name: isPostMessageDisconnect
// Dependencies: [5858, 2]
// Exports: default

// Module 15505 (isPostMessageDisconnect)
import Constants from "Constants" /* 5858 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
