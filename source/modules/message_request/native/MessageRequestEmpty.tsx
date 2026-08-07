// Module ID: 15875
// Function ID: 15876
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1297, 15876, 2]
// Exports: default

// Module 15875 (MessageRequestEmpty)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(bodyText) {
  const obj = { Illustration: null, body: null };
  obj[0] = require(15876) /* getPendingSource */.Pending;
  obj[1] = bodyText.bodyText;
  return jsx(require(1297) /* Button */.EmptyState, { Illustration: null, body: null });
};
