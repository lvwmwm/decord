// Module ID: 17359
// Function ID: 17360
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 558, 568, 1181, 17360, 2]

// Module 17359 (MessageRequestEmpty)
import c from "c" /* 568 */;
import native from "native" /* 1181 */;
import Pending from "Pending" /* 17360 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((bodyText) => {
  const cResult = c.c(2);
  bodyText = bodyText.bodyText;
  if (cResult[0] !== bodyText) {
    const obj2 = { Illustration: tmp(17360).Pending, body: bodyText };
    const tmp6 = jsx(tmp(1181).EmptyState, { Illustration: tmp(17360).Pending, body: bodyText });
    cResult[0] = bodyText;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((body) => jsx(native.EmptyState, { Illustration: Pending.Pending, body: body.bodyText }));
