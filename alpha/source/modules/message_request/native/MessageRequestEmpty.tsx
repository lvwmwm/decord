// Module ID: 18919
// Function ID: 18920
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1188, 18920, 2]
// Exports: default

// Module 18919 (MessageRequestEmpty)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1188 */;
import Pending from "Pending" /* 18920 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(bodyText) {
  bodyText = bodyText.bodyText;
  const EmptyState = native.EmptyState;
  return <EmptyState Illustration={Pending.Pending} body={bodyText} />;
};
