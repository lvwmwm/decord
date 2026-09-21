// Module ID: 7391
// Function ID: 7392
// Name: Form/FormRadio
// Dependencies: [19, 17, 21, 4758, 558, 568, 7392, 7393, 2]

// Module 7391 (Form/FormRadio)
import c from "c" /* 568 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_5 = createStyles.createStyles({ radio: { width: 22, height: 22 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((selected) => {
  const cResult = c.c(3);
  const tmp3 = closure_5();
  const tmp4 = importDefault(selected.selected ? 7392 : 7393);
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
  const obj = { style: closure_5().radio, source: importDefault(selected.selected ? 7392 : 7393) };
  return <Image style={closure_5().radio} source={importDefault(arg0.selected ? 7392 : 7393)} />;
});
