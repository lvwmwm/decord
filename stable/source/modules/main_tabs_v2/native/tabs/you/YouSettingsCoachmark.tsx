// Module ID: 17256
// Function ID: 17257
// Name: YouSettingsCoachmark
// Dependencies: [17257, 11423, 2]
// Exports: default, useYouSettingsCoachmark

// Module 17256 (YouSettingsCoachmark)
import useCoachmark from "useCoachmark" /* 11423 */;
import useReferralProgramCoachmark from "useReferralProgramCoachmark" /* 17257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export const useYouSettingsCoachmark = function useYouSettingsCoachmark(disabled) {
  let referralProgramCoachmark = useReferralProgramCoachmark.useReferralProgramCoachmark({ disabled: disabled.disabled });
  if (referralProgramCoachmark == null) {
    referralProgramCoachmark = null;
  }
  return referralProgramCoachmark;
};
