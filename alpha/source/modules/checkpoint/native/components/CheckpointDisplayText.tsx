// Module ID: 13456
// Function ID: 13457
// Name: CheckpointDisplayText
// Dependencies: [109, 19, 21, 558, 576, 13436, 2]

// Module 13456 (CheckpointDisplayText)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import CheckpointTextDefault from "CheckpointText" /* 13436 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ["style"];
const jsx = Fragment.jsx;
let closure_6 = { fontSize: 56, lineHeight: 72, letterSpacing: -2.24, marginTop: -15, marginBottom: -16 };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointDisplayText(style) {
  let tmp3;
  let tmp4;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] !== style) {
    style = style.style;
    const tmp7 = _objectWithoutProperties(style, closure_3);
    cResult[0] = style;
    cResult[1] = tmp7;
    cResult[2] = style;
    tmp4 = style;
    tmp3 = tmp7;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const items = [closure_6, tmp4];
    cResult[3] = tmp4;
    cResult[4] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === tmp3) {
    let tmp10;
    if (cResult[6] === tmp8) {
      tmp10 = cResult[7];
    }
    return tmp10;
  }
  CheckpointTextDefault;
  const merged = Object.assign(tmp3);
  const tmp13 = <tmp11 variant="display-lg" style={tmp8} />;
  cResult[5] = tmp3;
  cResult[6] = tmp8;
  cResult[7] = tmp13;
  tmp10 = tmp13;
}) : (function CheckpointDisplayText(style) {
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  CheckpointTextDefault;
  const merged1 = Object.assign(merged);
  const items = [closure_6, style];
  return <tmp2 variant="display-lg" style={items} />;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointDisplayText.tsx");

export default tmp3;
