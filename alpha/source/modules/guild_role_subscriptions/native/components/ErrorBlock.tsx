// Module ID: 12239
// Function ID: 12240
// Name: ErrorBlock
// Dependencies: [19, 21, 558, 576, 12240, 2]

// Module 12239 (ErrorBlock)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import MessageBlockDefault from "MessageBlock" /* 12240 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const MessageBlock = tmp(12240);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ErrorBlock(children) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  children = children.children;
  if (cResult[0] !== children) {
    MessageBlockDefault;
    const tmp8 = <tmp7 color={MessageBlock.MessageBlockColors.RED}>{children}</tmp7>;
    cResult[0] = children;
    cResult[1] = tmp8;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function ErrorBlock(children) {
  children = children.children;
  MessageBlockDefault;
  return <tmp color={MessageBlock.MessageBlockColors.RED}>{children}</tmp>;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default tmp3;
