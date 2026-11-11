// Module ID: 19565
// Function ID: 19566
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1187, 19566, 2]
// Exports: default

// Module 19565 (MessageRequestEmpty)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1187 */;
import Pending from "Pending" /* 19566 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(bodyText) {
  bodyText = bodyText.bodyText;
  const EmptyState = native.EmptyState;
  return <EmptyState Illustration={Pending.Pending} body={bodyText} />;
};
