// Module ID: 15735
// Function ID: 15736
// Name: YouSettingsCoachmark
// Dependencies: [15736, 8575, 2]
// Exports: default, useYouSettingsCoachmark

// Module 15735 (YouSettingsCoachmark)
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.create(null));
  const coachmark = require(8575) /* useCoachmark */.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export const useYouSettingsCoachmark = function useYouSettingsCoachmark(disabled) {
  let referralProgramCoachmark = require(15736) /* ReferralProgramCoachmarkImg */.useReferralProgramCoachmark({ disabled: disabled.disabled });
  if (referralProgramCoachmark == null) {
    referralProgramCoachmark = null;
  }
  return referralProgramCoachmark;
};
