// Module ID: 16895
// Function ID: 16896
// Name: isPostMessageDisconnect
// Dependencies: [6698, 2]
// Exports: default

// Module 16895 (isPostMessageDisconnect)
import Constants from "Constants" /* 6698 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
