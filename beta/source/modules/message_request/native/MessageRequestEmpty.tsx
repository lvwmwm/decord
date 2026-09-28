// Module ID: 16709
// Function ID: 16710
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1177, 16710, 2]
// Exports: default

// Module 16709 (MessageRequestEmpty)
import native from "native" /* 1177 */;
import Pending from "Pending" /* 16710 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(body) {
  return jsx(native.EmptyState, { Illustration: Pending.Pending, body: body.bodyText });
};
