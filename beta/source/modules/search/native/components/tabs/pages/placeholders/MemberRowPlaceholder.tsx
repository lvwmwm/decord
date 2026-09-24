// Module ID: 17168
// Function ID: 17169
// Name: MemberRowPlaceholder
// Dependencies: [19, 21, 4790, 558, 568, 17162, 2]

// Module 17168 (MemberRowPlaceholder)
import c from "c" /* 568 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 17162 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let closure_4 = createStyles.createStyles({ container: { paddingHorizontal: 0 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MemberRowPlaceholder.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp3 = closure_4();
  if (cResult[0] !== tmp3.container) {
    const obj2 = { style: tmp3.container };
    const tmp7 = jsx(FormRowPlaceholderDefault, { style: tmp3.container });
    cResult[0] = tmp3.container;
    cResult[1] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  const tmp = closure_4();
  return jsx(FormRowPlaceholderDefault, { style: closure_4().container });
});
