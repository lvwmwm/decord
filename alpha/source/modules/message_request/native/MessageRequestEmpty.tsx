// Module ID: 19011
// Function ID: 19012
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1186, 19012, 2]
// Exports: default

// Module 19011 (MessageRequestEmpty)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1186 */;
import Pending from "Pending" /* 19012 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(bodyText) {
  bodyText = bodyText.bodyText;
  const EmptyState = native.EmptyState;
  return <EmptyState Illustration={Pending.Pending} body={bodyText} />;
};
