// Module ID: 16721
// Function ID: 16722
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1296, 16722, 2]
// Exports: default

// Module 16721 (MessageRequestEmpty)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1296 */;
import getPendingSource from "getPendingSource" /* 16722 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(body) {
  return jsx(Button.EmptyState, { Illustration: getPendingSource.Pending, body: body.bodyText });
};
