// Module ID: 16823
// Function ID: 16824
// Name: ProfileCustomizationTryItOutSettingScreenExperimentWrapper
// Dependencies: [19, 21, 558, 576, 15561, 16824, 16827, 2]

// Module 16823 (ProfileCustomizationTryItOutSettingScreenExperimentWrapper)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import UserProfilePremiumTryItOutMobileRefreshExperiment from "UserProfilePremiumTryItOutMobileRefreshExperiment" /* 15561 */;
import ProfileCustomizationTryItOutV2SettingScreenDefault from "ProfileCustomizationTryItOutV2SettingScreen" /* 16824 */;
import ProfileCustomizationTryItOutSettingScreenDefault from "ProfileCustomizationTryItOutSettingScreen" /* 16827 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileCustomizationTryItOutSettingScreenExperimentWrapper() {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = UserProfilePremiumTryItOutMobileRefreshExperiment;
  if (obj2.useTryItOutMobileRefreshConfig("ProfileCustomizationTryItOutSettingScreenExperimentWrapper").enabled) {
    let first;
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp12 = jsx(ProfileCustomizationTryItOutV2SettingScreenDefault, {});
      cResult[0] = tmp12;
      first = tmp12;
    } else {
      first = cResult[0];
    }
    tmp4 = first;
  } else {
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp7 = jsx(ProfileCustomizationTryItOutSettingScreenDefault, {});
      cResult[1] = tmp7;
      tmp4 = tmp7;
    } else {
      tmp4 = cResult[1];
    }
  }
  return tmp4;
}) : (function ProfileCustomizationTryItOutSettingScreenExperimentWrapper() {
  const obj = UserProfilePremiumTryItOutMobileRefreshExperiment;
  return jsx(importDefault(obj.useTryItOutMobileRefreshConfig("ProfileCustomizationTryItOutSettingScreenExperimentWrapper").enabled ? 16824 : 16827), {});
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreenExperimentWrapper.tsx");

export default tmp3;
