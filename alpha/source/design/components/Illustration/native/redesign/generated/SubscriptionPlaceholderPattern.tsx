// Module ID: 13718
// Function ID: 13719
// Name: SubscriptionPlaceholderPattern
// Dependencies: [19, 17, 21, 8343, 13719, 13720, 13721, 558, 576, 4930, 2]
// Exports: getSubscriptionPlaceholderPatternSource

// Module 13718 (SubscriptionPlaceholderPattern)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import shared from "shared" /* 4930 */;
import _mod8343 from "module_8343" /* 8343 */;
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
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSubscriptionPlaceholderPatternSource() {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = shared;
  const theme = obj2.useThemeContext().theme;
  if (cResult[0] !== theme) {
    const obj3 = { dark, darker, light };
    const tmpResult = _mod8343;
    const illustrationSource = tmpResult.getIllustrationSource(theme, obj3);
    cResult[0] = theme;
    cResult[1] = illustrationSource;
    tmp4 = illustrationSource;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useSubscriptionPlaceholderPatternSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8343;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
});
let closure_4 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function SubscriptionPlaceholderPattern(arg0) {
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
}) : (function SubscriptionPlaceholderPattern(arg0) {
  const tmp = closure_4();
  const merged = Object.assign(arg0);
  return <Image source={tmp} />;
});
function getSubscriptionPlaceholderPatternSource(theme) {
  const obj = _mod8343;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export { getSubscriptionPlaceholderPatternSource };
export const useSubscriptionPlaceholderPatternSource = tmp3;
export const SubscriptionPlaceholderPattern = tmp4;
