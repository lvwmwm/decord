// Module ID: 16711
// Function ID: 16712
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 558, 576, 1189, 16712, 2]

// Module 16711 (MessageRequestEmpty)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import native from "native" /* 1189 */;
import Pending from "Pending" /* 16712 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let bodyText;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((bodyText) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  bodyText = bodyText.bodyText;
  if (cResult[0] !== bodyText) {
    const EmptyState = tmp(1189).EmptyState;
    const tmp6 = <EmptyState Illustration={Pending.Pending} body={bodyText} />;
    cResult[0] = bodyText;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((bodyText) => {
  bodyText = bodyText.bodyText;
  const EmptyState = native.EmptyState;
  return <EmptyState Illustration={Pending.Pending} body={bodyText} />;
});
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default tmp3;
