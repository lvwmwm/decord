// Module ID: 15659
// Function ID: 15660
// Name: isPostMessageDisconnect
// Dependencies: [6235, 2]
// Exports: default

// Module 15659 (isPostMessageDisconnect)
import Constants from "Constants" /* 6235 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
