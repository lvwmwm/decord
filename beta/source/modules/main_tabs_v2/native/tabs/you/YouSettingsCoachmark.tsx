// Module ID: 16612
// Function ID: 16613
// Name: YouSettingsCoachmark
// Dependencies: [16613, 10589, 2]
// Exports: default, useYouSettingsCoachmark

// Module 16612 (YouSettingsCoachmark)
import useCoachmark from "useCoachmark" /* 10589 */;
import useReferralProgramCoachmark from "useReferralProgramCoachmark" /* 16613 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  buttonRef = buttonRef.buttonRef;
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const obj = useCoachmark;
  const coachmark = obj.useCoachmark(buttonRef, merged);
  return null;
};
export const useYouSettingsCoachmark = function useYouSettingsCoachmark(disabled) {
  disabled = disabled.disabled;
  const obj = useReferralProgramCoachmark;
  let referralProgramCoachmark = obj.useReferralProgramCoachmark({ disabled });
  if (referralProgramCoachmark == null) {
    referralProgramCoachmark = null;
  }
  return referralProgramCoachmark;
};
