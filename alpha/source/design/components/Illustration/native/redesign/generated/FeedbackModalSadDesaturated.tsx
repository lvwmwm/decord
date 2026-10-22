// Module ID: 10028
// Function ID: 10029
// Name: FeedbackModalSadDesaturated
// Dependencies: [19, 21, 8704, 10029, 10030, 10031, 558, 576, 4976, 5655, 2]
// Exports: getFeedbackModalSadDesaturatedSource

// Module 10028 (FeedbackModalSadDesaturated)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import shared from "shared" /* 4976 */;
import FastImageDefault from "FastImage" /* 5655 */;
import _mod8704 from "module_8704" /* 8704 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function dark() {
  return require("AssetRegistry");
}
function darker() {
  return require("AssetRegistry");
}
function light() {
  return require("AssetRegistry");
}
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFeedbackModalSadDesaturatedSource() {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = shared;
  const theme = obj2.useThemeContext().theme;
  if (cResult[0] !== theme) {
    const obj3 = { dark, darker, light };
    const tmpResult = _mod8704;
    const illustrationSource = tmpResult.getIllustrationSource(theme, obj3);
    cResult[0] = theme;
    cResult[1] = illustrationSource;
    tmp4 = illustrationSource;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useFeedbackModalSadDesaturatedSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8704;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
});
let closure_4 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function FeedbackModalSadDesaturated(arg0) {
  const obj = react2;
  const cResult = obj.c(3);
  const tmp3 = closure_4();
  if (cResult[0] === arg0) {
    let tmp4;
    if (cResult[1] === tmp3) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  FastImageDefault;
  const merged = Object.assign(arg0);
  const tmp7 = <tmp5 source={tmp3} />;
  cResult[0] = arg0;
  cResult[1] = tmp3;
  cResult[2] = tmp7;
  tmp4 = tmp7;
}) : (function FeedbackModalSadDesaturated(arg0) {
  const tmp = closure_4();
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={tmp} />;
});
function getFeedbackModalSadDesaturatedSource(theme) {
  const obj = _mod8704;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export { getFeedbackModalSadDesaturatedSource };
export const useFeedbackModalSadDesaturatedSource = tmp3;
export const FeedbackModalSadDesaturated = tmp4;
