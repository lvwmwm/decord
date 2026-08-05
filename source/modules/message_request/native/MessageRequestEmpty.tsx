// Module ID: 15811
// Function ID: 15812
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1297, 15812, 2]
// Exports: default

// Module 15811 (MessageRequestEmpty)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(bodyText) {
  const obj = { Illustration: null, body: null };
  obj[0] = require(15812) /* getPendingSource */.Pending;
  obj[1] = bodyText.bodyText;
  return jsx(require(1297) /* Button */.EmptyState, { Illustration: null, body: null });
};
