// Module ID: 6830
// Function ID: 6831
// Name: Form/FormRadio
// Dependencies: [19, 17, 21, 5091, 558, 576, 6831, 6832, 2]

// Module 6830 (Form/FormRadio)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ radio: { width: 22, height: 22 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormRadio(selected) {
  const obj = react2;
  const cResult = obj.c(3);
  selected = selected.selected;
  const tmp3 = closure_5();
  const tmp4 = importDefault(selected ? 6831 : 6832);
  if (cResult[0] === tmp3.radio) {
    let tmp5;
    if (cResult[1] === tmp4) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = <Image style={tmp3.radio} source={tmp4} />;
  cResult[0] = tmp3.radio;
  cResult[1] = tmp4;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function FormRadio(selected) {
  selected = selected.selected;
  return <Image style={closure_5().radio} source={importDefault(selected ? 6831 : 6832)} />;
});
const result = size.fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default tmp3;
