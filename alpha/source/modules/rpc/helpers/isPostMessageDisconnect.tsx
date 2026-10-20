// Module ID: 15601
// Function ID: 15602
// Name: isPostMessageDisconnect
// Dependencies: [6332, 2]
// Exports: default

// Module 15601 (isPostMessageDisconnect)
import Constants from "Constants" /* 6332 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
