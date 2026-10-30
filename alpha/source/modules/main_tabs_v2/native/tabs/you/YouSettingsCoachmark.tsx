// Module ID: 18813
// Function ID: 18814
// Name: YouSettingsCoachmark
// Dependencies: [18814, 9933, 2]
// Exports: default, useYouSettingsCoachmark

// Module 18813 (YouSettingsCoachmark)
import useCoachmark from "useCoachmark" /* 9933 */;
import useReferralProgramCoachmark from "useReferralProgramCoachmark" /* 18814 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  buttonRef = buttonRef.buttonRef;
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const obj = useCoachmark;
  const coachmark = obj.useCoachmark(buttonRef, merged);
  return null;
};
export function useYouSettingsCoachmark(disabled) {
  disabled = disabled.disabled;
  const obj = useReferralProgramCoachmark;
  let referralProgramCoachmark = obj.useReferralProgramCoachmark({ disabled });
  if (referralProgramCoachmark == null) {
    referralProgramCoachmark = null;
  }
  return referralProgramCoachmark;
}
