// Module ID: 18856
// Function ID: 18857
// Name: YouSettingsCoachmark
// Dependencies: [18857, 9954, 2]
// Exports: default, useYouSettingsCoachmark

// Module 18856 (YouSettingsCoachmark)
import useCoachmark from "useCoachmark" /* 9954 */;
import useReferralProgramCoachmark from "useReferralProgramCoachmark" /* 18857 */;
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
