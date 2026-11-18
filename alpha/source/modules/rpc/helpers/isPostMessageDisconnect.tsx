// Module ID: 15707
// Function ID: 15708
// Name: isPostMessageDisconnect
// Dependencies: [6261, 2]
// Exports: default

// Module 15707 (isPostMessageDisconnect)
import Constants from "Constants" /* 6261 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
