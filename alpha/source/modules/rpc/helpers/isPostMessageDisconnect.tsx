// Module ID: 16739
// Function ID: 16740
// Name: isPostMessageDisconnect
// Dependencies: [6585, 2]
// Exports: default

// Module 16739 (isPostMessageDisconnect)
import Constants from "Constants" /* 6585 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
