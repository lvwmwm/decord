// Module ID: 13436
// Function ID: 13437
// Name: CheckpointText
// Dependencies: [109, 19, 6054, 21, 558, 576, 13259, 5271, 2]

// Module 13436 (CheckpointText)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import CheckpointConstants from "CheckpointConstants" /* 6054 */;
import CheckpointStepHeaderRefContextDefault from "CheckpointStepHeaderRefContext" /* 13259 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const Text_Text = tmp(5271);
let closure_3 = ["children", "style", "isStepHeading"];
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let closure_7 = { color: CHECKPOINT_PRIMARY };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointText(arg0) {
  let children;
  let isStepHeading;
  let style;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(13);
  if (cResult[0] !== arg0) {
    ({ children, style, isStepHeading } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = tmp10;
    cResult[3] = style;
    cResult[4] = isStepHeading;
    tmp7 = isStepHeading;
    tmp6 = style;
    tmp5 = tmp10;
    tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  let str = "header";
  const context = react.useContext(CheckpointStepHeaderRefContextDefault);
  if (!(undefined !== tmp7 && tmp7)) {
    str = tmp5.accessibilityRole;
  }
  let tmp13;
  if (undefined !== tmp7 && tmp7) {
    tmp13 = context;
  }
  if (cResult[5] !== tmp6) {
    const items = [closure_7, tmp6];
    cResult[5] = tmp6;
    cResult[6] = items;
    tmp14 = items;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === tmp4) {
    if (cResult[8] === tmp5) {
      if (cResult[9] === str) {
        if (cResult[10] === tmp13) {
          let tmp16;
          if (cResult[11] === tmp14) {
            tmp16 = cResult[12];
          }
          return tmp16;
        }
      }
    }
  }
  const Text = Text_Text.Text;
  const merged = Object.assign(tmp5);
  const tmp18 = <Text accessibilityRole={str} ref={tmp13} style={tmp14}>{tmp4}</Text>;
  cResult[7] = tmp4;
  cResult[8] = tmp5;
  cResult[9] = str;
  cResult[10] = tmp13;
  cResult[11] = tmp14;
  cResult[12] = tmp18;
  tmp16 = tmp18;
}) : (function CheckpointText(isStepHeading) {
  let children;
  let items;
  let str;
  let style;
  let tmp5;
  let flag = isStepHeading.isStepHeading;
  ({ children, style } = isStepHeading);
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(isStepHeading, Object.assign({ children: 0, style: 0, isStepHeading: 0 }));
  const context = react.useContext(CheckpointStepHeaderRefContextDefault);
  const obj = { accessibilityRole: str, ref: tmp5, style: items, children };
  const Text = Text_Text.Text;
  const merged1 = Object.assign(merged);
  str = "header";
  const tmp3 = jsx;
  if (!flag) {
    str = merged.accessibilityRole;
  }
  tmp5 = undefined;
  if (flag) {
    tmp5 = context;
  }
  items = [closure_7, style];
  return tmp3(Text, obj);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointText.tsx");

export default tmp2;
