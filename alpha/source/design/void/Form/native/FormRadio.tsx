// Module ID: 7057
// Function ID: 7058
// Name: Form/FormRadio
// Dependencies: [19, 21, 5153, 558, 576, 7058, 7059, 5091, 2]

// Module 7057 (Form/FormRadio)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FastImageDefault from "FastImage" /* 5091 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5153 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ radio: { width: 22, height: 22 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormRadio(selected) {
  const obj = react2;
  const cResult = obj.c(3);
  selected = selected.selected;
  const tmp3 = closure_4();
  const tmp4Result = importDefault(selected ? 7058 : 7059);
  if (cResult[0] === tmp3.radio) {
    let tmp6;
    if (cResult[1] === tmp4Result) {
      tmp6 = cResult[2];
    }
    return tmp6;
  }
  const tmp7 = jsx(FastImageDefault, { style: tmp3.radio, source: tmp4Result });
  cResult[0] = tmp3.radio;
  cResult[1] = tmp4Result;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function FormRadio(selected) {
  selected = selected.selected;
  FastImageDefault;
  return <tmp5 style={closure_4().radio} source={importDefault(selected ? 7058 : 7059)} />;
});
const result = size.fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default tmp3;
