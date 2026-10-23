// Module ID: 15363
// Function ID: 15364
// Name: Checkbox/Checkbox
// Dependencies: [19, 21, 558, 576, 5667, 15364, 15365, 2]

// Module 15363 (Checkbox/Checkbox)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FastImageDefault from "FastImage" /* 5667 */;
import AssetRegistryDefault from "AssetRegistry" /* 15364 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15365 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function Checkbox(style) {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(4);
  style = style.style;
  if (style.selected) {
    let tmp8;
    if (cResult[0] !== style) {
      FastImageDefault;
      const tmp12 = <tmp11 style={style} source={AssetRegistryDefault} />;
      cResult[0] = style;
      cResult[1] = tmp12;
      tmp8 = tmp12;
    } else {
      tmp8 = cResult[1];
    }
    tmp3 = tmp8;
  } else if (cResult[2] !== style) {
    FastImageDefault;
    const tmp7 = <tmp6 style={style} source={AssetRegistryDefault2} />;
    cResult[2] = style;
    cResult[3] = tmp7;
    tmp3 = tmp7;
  } else {
    tmp3 = cResult[3];
  }
  return tmp3;
}) : (function Checkbox(arg0) {
  let selected;
  let style;
  let tmp5;
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  const tmp = jsx;
  const tmp4 = FastImageDefault;
  if (selected) {
    obj.source = AssetRegistryDefault;
    tmp5 = obj;
  } else {
    obj.source = AssetRegistryDefault2;
    tmp5 = obj;
  }
  return tmp(tmp4, tmp5);
});
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default tmp3;
