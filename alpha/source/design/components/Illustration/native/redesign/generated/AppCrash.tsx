// Module ID: 8693
// Function ID: 8694
// Name: AppCrash
// Dependencies: [19, 17, 21, 8335, 8694, 8695, 8696, 558, 576, 4929, 2]
// Exports: getAppCrashSource

// Module 8693 (AppCrash)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import shared from "shared" /* 4929 */;
import _mod8335 from "module_8335" /* 8335 */;
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
const Image = react_native.Image;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppCrashSource() {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = shared;
  const theme = obj2.useThemeContext().theme;
  if (cResult[0] !== theme) {
    const obj3 = { dark, darker, light };
    const tmpResult = _mod8335;
    const illustrationSource = tmpResult.getIllustrationSource(theme, obj3);
    cResult[0] = theme;
    cResult[1] = illustrationSource;
    tmp4 = illustrationSource;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useAppCrashSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8335;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
});
let closure_4 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppCrash(arg0) {
  const obj = react2;
  const cResult = obj.c(3);
  const tmp2 = closure_4();
  if (cResult[0] === arg0) {
    let tmp3;
    if (cResult[1] === tmp2) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const merged = Object.assign(arg0);
  const tmp5 = <Image source={tmp2} />;
  cResult[0] = arg0;
  cResult[1] = tmp2;
  cResult[2] = tmp5;
  tmp3 = tmp5;
}) : (function AppCrash(arg0) {
  const tmp = closure_4();
  const merged = Object.assign(arg0);
  return <Image source={tmp} />;
});
function getAppCrashSource(theme) {
  const obj = _mod8335;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export { getAppCrashSource };
export const useAppCrashSource = tmp3;
export const AppCrash = tmp4;
