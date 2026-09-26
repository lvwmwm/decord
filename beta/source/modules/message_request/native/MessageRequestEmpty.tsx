// Module ID: 17359
// Function ID: 17360
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1177, 17360, 2]
// Exports: default

// Module 17359 (MessageRequestEmpty)
import native from "native" /* 1177 */;
import Pending from "Pending" /* 17360 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(body) {
  return jsx(native.EmptyState, { Illustration: Pending.Pending, body: body.bodyText });
};
