// Module ID: 15639
// Function ID: 120561
// Name: MessageRequestEmpty
// Dependencies: [31, 33, 1273, 15640, 2]
// Exports: default

// Module 15639 (MessageRequestEmpty)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(bodyText) {
  const obj = { Illustration: require(15640) /* getPendingSource */.Pending, body: bodyText.bodyText };
  return jsx(require(1273) /* Button */.EmptyState, { Illustration: require(15640) /* getPendingSource */.Pending, body: bodyText.bodyText });
};
