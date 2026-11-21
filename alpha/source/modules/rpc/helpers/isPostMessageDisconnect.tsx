// Module ID: 15782
// Function ID: 15783
// Name: isPostMessageDisconnect
// Dependencies: [6354, 2]
// Exports: default

// Module 15782 (isPostMessageDisconnect)
import Constants from "Constants" /* 6354 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
