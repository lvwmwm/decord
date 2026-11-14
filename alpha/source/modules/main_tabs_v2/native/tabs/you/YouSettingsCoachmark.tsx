// Module ID: 19626
// Function ID: 19627
// Name: YouSettingsCoachmark
// Dependencies: [19627, 19632, 9567, 2]
// Exports: default, useYouSettingsCoachmark

// Module 19626 (YouSettingsCoachmark)
import useCoachmark from "useCoachmark" /* 9567 */;
import useConsoleConnectionCoachmark from "useConsoleConnectionCoachmark" /* 19627 */;
import useReferralProgramCoachmark from "useReferralProgramCoachmark" /* 19632 */;
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
  const obj = useConsoleConnectionCoachmark;
  let consoleConnectionCoachmark = obj.useConsoleConnectionCoachmark({ disabled });
  const obj2 = useReferralProgramCoachmark;
  if (consoleConnectionCoachmark == null) {
    consoleConnectionCoachmark = obj2.useReferralProgramCoachmark({ disabled });
  }
  if (consoleConnectionCoachmark == null) {
    consoleConnectionCoachmark = null;
  }
  return consoleConnectionCoachmark;
}
