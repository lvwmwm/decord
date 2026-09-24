// Module ID: 7423
// Function ID: 7424
// Name: Form/FormRadio
// Dependencies: [19, 17, 21, 4790, 558, 568, 7424, 7425, 2]

// Module 7423 (Form/FormRadio)
import c from "c" /* 568 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let closure_5 = createStyles.createStyles({ radio: { width: 22, height: 22 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((selected) => {
  const cResult = c.c(3);
  const tmp3 = closure_5();
  const tmp4 = importDefault(selected.selected ? 7424 : 7425);
  if (cResult[0] === tmp3.radio) {
    if (cResult[1] === tmp4) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = <Image style={tmp3.radio} source={tmp4} />;
  cResult[0] = tmp3.radio;
  cResult[1] = tmp4;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((selected) => {
  const obj = { style: closure_5().radio, source: importDefault(selected.selected ? 7424 : 7425) };
  return <Image style={closure_5().radio} source={importDefault(arg0.selected ? 7424 : 7425)} />;
});
