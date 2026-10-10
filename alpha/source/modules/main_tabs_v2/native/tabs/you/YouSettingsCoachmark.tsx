// Module ID: 17488
// Function ID: 17489
// Name: YouSettingsCoachmark
// Dependencies: [109, 558, 576, 17489, 9442, 2]
// Exports: default

// Module 17488 (YouSettingsCoachmark)
import react from "react" /* 576 */;
import useCoachmark from "useCoachmark" /* 9442 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const useReferralProgramCoachmark = tmp(17489);
let closure_2 = ["buttonRef"];
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouSettingsCoachmark(disabled) {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  disabled = disabled.disabled;
  if (cResult[0] !== disabled) {
    const obj2 = { disabled };
    cResult[0] = disabled;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = useReferralProgramCoachmark;
  let referralProgramCoachmark = tmpResult.useReferralProgramCoachmark(tmp4);
  if (referralProgramCoachmark == null) {
    referralProgramCoachmark = null;
  }
  return referralProgramCoachmark;
}) : (function useYouSettingsCoachmark(disabled) {
  disabled = disabled.disabled;
  const obj = useReferralProgramCoachmark;
  let referralProgramCoachmark = obj.useReferralProgramCoachmark({ disabled });
  if (referralProgramCoachmark == null) {
    referralProgramCoachmark = null;
  }
  return referralProgramCoachmark;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_4 = ReactCompilerGating.isReactCompilerEnabled();
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  const tmp = closure_4;
  if (tmp) {
    let tmp12;
    let tmp11;
    const obj3 = react;
    const cResult = obj3.c(3);
    const tmp8 = require;
    if (cResult[0] !== buttonRef) {
      const buttonRef2 = buttonRef.buttonRef;
      const tmp15 = _objectWithoutProperties(buttonRef, closure_2);
      cResult[0] = buttonRef;
      cResult[1] = buttonRef2;
      cResult[2] = tmp15;
      tmp12 = tmp15;
      tmp11 = buttonRef2;
    } else {
      tmp11 = cResult[1];
      tmp12 = cResult[2];
    }
    const tmp8Result = tmp8(9442);
    const coachmark = tmp8Result.useCoachmark(tmp11, tmp12);
  } else {
    buttonRef = buttonRef.buttonRef;
    const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
    const obj2 = useCoachmark;
    const coachmark1 = obj2.useCoachmark(buttonRef, merged);
  }
  return null;
};
export const useYouSettingsCoachmark = tmp2;
