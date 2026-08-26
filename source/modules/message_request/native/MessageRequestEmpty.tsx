// Module ID: 16313
// Function ID: 16314
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1297, 16314, 2]
// Exports: default

// Module 16313 (MessageRequestEmpty)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1297 */;
import getPendingSource from "getPendingSource" /* 16314 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(body) {
  return jsx(Button.EmptyState, { Illustration: getPendingSource.Pending, body: body.bodyText });
};
