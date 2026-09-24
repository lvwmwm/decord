// Module ID: 17364
// Function ID: 17365
// Name: YouSettingsCoachmark
// Dependencies: [17365, 11480, 2]
// Exports: default, useYouSettingsCoachmark

// Module 17364 (YouSettingsCoachmark)
import useCoachmark from "useCoachmark" /* 11480 */;
import useReferralProgramCoachmark from "useReferralProgramCoachmark" /* 17365 */;
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
