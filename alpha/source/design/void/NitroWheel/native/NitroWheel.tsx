// Module ID: 15085
// Function ID: 15086
// Name: NitroWheel
// Dependencies: [19, 21, 558, 576, 5088, 9724, 2]

// Module 15085 (NitroWheel)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FastImageDefault from "FastImage" /* 5088 */;
import AssetRegistryDefault from "AssetRegistry" /* 9724 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function NitroWheel(style) {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  style = style.style;
  if (cResult[0] !== style) {
    FastImageDefault;
    const tmp7 = <tmp6 source={AssetRegistryDefault} style={style} resizeMode="contain" />;
    cResult[0] = style;
    cResult[1] = tmp7;
    tmp3 = tmp7;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function NitroWheel(style) {
  style = style.style;
  FastImageDefault;
  return <tmp source={AssetRegistryDefault} style={style} resizeMode="contain" />;
});
const result = size.fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default tmp3;
