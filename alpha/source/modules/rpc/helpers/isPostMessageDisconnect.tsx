// Module ID: 15796
// Function ID: 15797
// Name: isPostMessageDisconnect
// Dependencies: [6378, 2]
// Exports: default

// Module 15796 (isPostMessageDisconnect)
import Constants from "Constants" /* 6378 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
