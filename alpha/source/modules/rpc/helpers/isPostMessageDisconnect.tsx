// Module ID: 16653
// Function ID: 16654
// Name: isPostMessageDisconnect
// Dependencies: [6608, 2]
// Exports: default

// Module 16653 (isPostMessageDisconnect)
import Constants from "Constants" /* 6608 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
