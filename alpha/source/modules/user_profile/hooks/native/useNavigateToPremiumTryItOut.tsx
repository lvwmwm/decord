// Module ID: 14838
// Function ID: 14839
// Name: useNavigateToPremiumTryItOut
// Dependencies: [19, 8284, 8307, 1085, 558, 576, 1503, 9633, 6670, 4985, 8315, 6679, 2]

// Module 14838 (useNavigateToPremiumTryItOut)
import Constants from "Constants" /* 1085 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6679 */;
import Constants2 from "Constants" /* 8307 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8315 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8284 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, navigation, tmpResult;

let closure_5 = Constants2.TrackUserProfileEditActions;
const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNavigateToPremiumTryItOut(arg0) {
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  let obj2 = require("useNavigation");
  navigation = obj2.useNavigation();
  if (cResult[0] === navigation) {
    let tmp3;
    if (cResult[1] === arg0) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  class T {
    constructor(arg0) {
      closure_0 = arg0;
      obj = { hasEdits: null, resetPending: null, onHasEdits: null, onConfirm: null };
      tmp = closure_1(closure_1_2[7]);
      obj.hasEdits = closure_1_4.showNotice();
      obj.resetPending = closure_0(closure_1_2[8]).resetAllPending;
      obj.onHasEdits = closure_0(closure_1_2[9]).dismissKeyboard;
      obj.onConfirm = function onConfirm() { /* body not rendered: F146286 */ };
      tmpResult = tmp(obj);
      return;
    }
  }
  cResult[0] = navigation;
  cResult[1] = arg0;
  cResult[2] = T;
  tmp3 = T;
}) : (function useNavigateToPremiumTryItOut(arg0) {
  _require = arg0;
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  const items = [navigation, arg0];
  return react.useCallback((arg0) => {
    closure_0 = arg0;
    let obj = {
      hasEdits: UserProfileSettingsStore.showNotice(),
      resetPending: closure_0(dependencyMap[8]).resetAllPending,
      onHasEdits: closure_0(dependencyMap[9]).dismissKeyboard,
      onConfirm() {
        const obj = UserProfileAnalyticsUtils;
        const obj2 = { userId: initialTarget, action: constants.ENTER_TRY_OUT_PREMIUM_PREVIEW };
        const result = obj.trackUserProfileEditAction(obj2);
        const obj3 = UserSettingsModalActionCreatorsDefault;
        obj3.setSection(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
        const obj4 = { initialTarget };
        navigation.push(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT, obj4);
      }
    };
    const tmp = navigation(dependencyMap[7]);
    tmp(obj);
  }, items);
});
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useNavigateToPremiumTryItOut.tsx");

export default tmp2;
