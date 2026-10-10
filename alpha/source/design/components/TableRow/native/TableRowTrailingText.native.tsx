// Module ID: 6190
// Function ID: 6191
// Name: TableRowTrailingText
// Dependencies: [19, 21, 558, 576, 5088, 2]

// Module 6190 (TableRowTrailingText)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const Text_Text = tmp(5088);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function TableRowTrailingText(text) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  text = text.text;
  if (cResult[0] !== text) {
    const tmp6 = jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: text });
    cResult[0] = text;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function TableRowTrailingText(children) {
  return jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: children.text });
});
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowTrailingText.native.tsx");

export const TableRowTrailingText = tmp3;
