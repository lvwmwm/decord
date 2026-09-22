// Module ID: 17001
// Function ID: 17002
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1176, 17002, 2]
// Exports: default

// Module 17001 (MessageRequestEmpty)
import native from "native" /* 1176 */;
import Pending from "Pending" /* 17002 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(body) {
  return jsx(native.EmptyState, { Illustration: Pending.Pending, body: body.bodyText });
};
