// Module ID: 19434
// Function ID: 19435
// Name: YouSettingsCoachmark
// Dependencies: [19435, 19440, 9500, 2]
// Exports: default, useYouSettingsCoachmark

// Module 19434 (YouSettingsCoachmark)
import useCoachmark from "useCoachmark" /* 9500 */;
import useConsoleConnectionCoachmark from "useConsoleConnectionCoachmark" /* 19435 */;
import useReferralProgramCoachmark from "useReferralProgramCoachmark" /* 19440 */;
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
