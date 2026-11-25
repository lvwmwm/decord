// Module ID: 15931
// Function ID: 15932
// Name: isPostMessageDisconnect
// Dependencies: [5766, 2]
// Exports: default

// Module 15931 (isPostMessageDisconnect)
import Constants from "Constants" /* 5766 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
