// Module ID: 18161
// Function ID: 18162
// Name: MemberRowPlaceholder
// Dependencies: [19, 21, 5003, 558, 576, 18155, 2]

// Module 18161 (MemberRowPlaceholder)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 18155 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { paddingHorizontal: 0 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function MemberRowPlaceholderItem() {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp3 = closure_4();
  if (cResult[0] !== tmp3.container) {
    const tmp7 = jsx(FormRowPlaceholderDefault, { style: tmp3.container });
    cResult[0] = tmp3.container;
    cResult[1] = tmp7;
    tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function MemberRowPlaceholderItem() {
  return jsx(FormRowPlaceholderDefault, { style: closure_4().container });
});
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MemberRowPlaceholder.tsx");

export default tmp3;
