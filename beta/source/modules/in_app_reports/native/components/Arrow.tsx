// Module ID: 8095
// Function ID: 8096
// Name: Arrow
// Dependencies: [19, 21, 4837, 588, 558, 576, 1189, 8096, 2]

// Module 8095 (Arrow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import native from "native" /* 1189 */;
import AssetRegistryDefault from "AssetRegistry" /* 8096 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { tintColor: obj2 };
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp4 = closure_4();
  if (cResult[0] !== tmp4.tintColor) {
    const Icon = tmp(1189).Icon;
    const tmp8 = <Icon source={AssetRegistryDefault} size={native.Icon.Sizes.MEDIUM} style={tmp4.tintColor} />;
    cResult[0] = tmp4.tintColor;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const tmp = closure_4();
  const Icon = native.Icon;
  return <Icon source={AssetRegistryDefault} size={native.Icon.Sizes.MEDIUM} style={tmp.tintColor} />;
});
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/Arrow.tsx");

export default tmp3;
