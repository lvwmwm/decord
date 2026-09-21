// Module ID: 14358
// Function ID: 14359
// Name: Checkbox/Checkbox
// Dependencies: [19, 17, 21, 558, 568, 14359, 14360, 2]

// Module 14358 (Checkbox/Checkbox)
import c from "c" /* 568 */;
import _modDef14359 from "module_14359" /* 14359 */;
import _modDef14360 from "module_14360" /* 14360 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let tmp = dependencyMap;
  const cResult = c.c(4);
  style = style.style;
  if (style.selected) {
    if (cResult[0] !== style) {
      const obj2 = { style, source: null };
      tmp = _modDef14359;
      obj2.source = tmp;
      const tmp12 = <Image style={style} source={null} />;
      cResult[0] = style;
      cResult[1] = tmp12;
    }
  } else {
    if (cResult[2] !== style) {
      const obj3 = { style, source: _modDef14360 };
      const tmp7 = <Image style={style} source={_modDef14360} />;
      cResult[2] = style;
      cResult[3] = tmp7;
      let tmp3 = tmp7;
    } else {
      tmp3 = cResult[3];
    }
    return tmp3;
  }
}) : ((style) => {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = tmp3(14359);
    let tmp5 = obj;
  } else {
    obj.source = tmp3(14360);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
});
