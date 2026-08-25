// Module ID: 16232
// Function ID: 16233
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1297, 16233, 2]
// Exports: default

// Module 16232 (MessageRequestEmpty)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1297 */;
import getPendingSource from "getPendingSource" /* 16233 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(body) {
  return jsx(Button.EmptyState, { Illustration: getPendingSource.Pending, body: body.bodyText });
};
