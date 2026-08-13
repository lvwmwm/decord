// Module ID: 16043
// Function ID: 16044
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1297, 16044, 2]
// Exports: default

// Module 16043 (MessageRequestEmpty)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(bodyText) {
  const obj = { Illustration: null, body: null };
  obj[0] = require(16044) /* getPendingSource */.Pending;
  obj[1] = bodyText.bodyText;
  return jsx(require(1297) /* Button */.EmptyState, { Illustration: null, body: null });
};
