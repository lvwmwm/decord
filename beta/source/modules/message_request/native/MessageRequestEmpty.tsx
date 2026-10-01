// Module ID: 16709
// Function ID: 16710
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1177, 16710, 2]
// Exports: default

// Module 16709 (MessageRequestEmpty)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1177 */;
import Pending from "Pending" /* 16710 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(bodyText) {
  bodyText = bodyText.bodyText;
  const EmptyState = native.EmptyState;
  return <EmptyState Illustration={Pending.Pending} body={bodyText} />;
};
