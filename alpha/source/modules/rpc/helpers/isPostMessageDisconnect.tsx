// Module ID: 15738
// Function ID: 15739
// Name: isPostMessageDisconnect
// Dependencies: [6364, 2]
// Exports: default

// Module 15738 (isPostMessageDisconnect)
import Constants from "Constants" /* 6364 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
