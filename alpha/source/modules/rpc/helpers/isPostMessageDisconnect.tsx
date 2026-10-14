// Module ID: 15163
// Function ID: 15164
// Name: isPostMessageDisconnect
// Dependencies: [5644, 2]
// Exports: default

// Module 15163 (isPostMessageDisconnect)
import Constants from "Constants" /* 5644 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
