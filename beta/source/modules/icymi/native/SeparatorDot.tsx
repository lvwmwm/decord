// Module ID: 16855
// Function ID: 16856
// Name: SeparatorDot
// Dependencies: [19, 17, 21, 4758, 580, 558, 568, 2]

// Module 16855 (SeparatorDot)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { separatorDot: null };
let size = { width: 4, height: 4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.separatorDot = size;
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/SeparatorDot.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp2 = closure_4();
  if (cResult[0] !== tmp2.separatorDot) {
    const obj2 = { style: null };
    const items = [tmp2.separatorDot];
    obj2.style = items;
    const tmp6 = <View style={null} />;
    cResult[0] = tmp2.separatorDot;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const obj = { style: null };
  const items = [closure_4().separatorDot];
  obj.style = items;
  return <View style={null} />;
});
