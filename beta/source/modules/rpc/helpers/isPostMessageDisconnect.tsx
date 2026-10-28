// Module ID: 15835
// Function ID: 15836
// Name: isPostMessageDisconnect
// Dependencies: [6410, 2]
// Exports: default

// Module 15835 (isPostMessageDisconnect)
import Constants from "Constants" /* 6410 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
