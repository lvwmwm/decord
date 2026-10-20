// Module ID: 15620
// Function ID: 15621
// Name: isPostMessageDisconnect
// Dependencies: [6335, 2]
// Exports: default

// Module 15620 (isPostMessageDisconnect)
import Constants from "Constants" /* 6335 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
