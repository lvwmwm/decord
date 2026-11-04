// Module ID: 19138
// Function ID: 19139
// Name: YouSettingsCoachmark
// Dependencies: [19139, 10133, 2]
// Exports: default, useYouSettingsCoachmark

// Module 19138 (YouSettingsCoachmark)
import useCoachmark from "useCoachmark" /* 10133 */;
import useReferralProgramCoachmark from "useReferralProgramCoachmark" /* 19139 */;
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
