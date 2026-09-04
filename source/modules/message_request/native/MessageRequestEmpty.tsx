// Module ID: 16808
// Function ID: 16809
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1296, 16809, 2]
// Exports: default

// Module 16808 (MessageRequestEmpty)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1296 */;
import getPendingSource from "getPendingSource" /* 16809 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(body) {
  return jsx(Button.EmptyState, { Illustration: getPendingSource.Pending, body: body.bodyText });
};
