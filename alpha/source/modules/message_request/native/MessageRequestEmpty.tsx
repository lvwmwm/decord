// Module ID: 16932
// Function ID: 16933
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1177, 16933, 2]
// Exports: default

// Module 16932 (MessageRequestEmpty)
import native from "native" /* 1177 */;
import Pending from "Pending" /* 16933 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(body) {
  return jsx(native.EmptyState, { Illustration: Pending.Pending, body: body.bodyText });
};
