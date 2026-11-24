// Module ID: 18892
// Function ID: 18893
// Name: YouSettingsCoachmark
// Dependencies: [18893, 18898, 9087, 2]
// Exports: default, useYouSettingsCoachmark

// Module 18892 (YouSettingsCoachmark)
import useCoachmark from "useCoachmark" /* 9087 */;
import useConsoleConnectionCoachmark from "useConsoleConnectionCoachmark" /* 18893 */;
import useReferralProgramCoachmark from "useReferralProgramCoachmark" /* 18898 */;
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
