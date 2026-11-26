// Module ID: 17020
// Function ID: 17021
// Name: isPostMessageDisconnect
// Dependencies: [6751, 2]
// Exports: default

// Module 17020 (isPostMessageDisconnect)
import Constants from "Constants" /* 6751 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
