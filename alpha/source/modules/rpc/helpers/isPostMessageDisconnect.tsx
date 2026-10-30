// Module ID: 16342
// Function ID: 16343
// Name: isPostMessageDisconnect
// Dependencies: [6444, 2]
// Exports: default

// Module 16342 (isPostMessageDisconnect)
import Constants from "Constants" /* 6444 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
