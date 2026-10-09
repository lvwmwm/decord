// Module ID: 14726
// Function ID: 14727
// Name: isPostMessageDisconnect
// Dependencies: [5636, 2]
// Exports: default

// Module 14726 (isPostMessageDisconnect)
import Constants from "Constants" /* 5636 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
