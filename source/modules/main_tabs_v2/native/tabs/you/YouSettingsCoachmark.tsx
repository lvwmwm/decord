// Module ID: 15611
// Function ID: 15612
// Name: YouSettingsCoachmark
// Dependencies: [15612, 8427, 2]
// Exports: default, useYouSettingsCoachmark

// Module 15611 (YouSettingsCoachmark)
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.create(null));
  const coachmark = require(8427) /* useCoachmark */.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export const useYouSettingsCoachmark = function useYouSettingsCoachmark(disabled) {
  let referralProgramCoachmark = require(15612) /* ReferralProgramCoachmarkImg */.useReferralProgramCoachmark({ disabled: disabled.disabled });
  if (referralProgramCoachmark == null) {
    referralProgramCoachmark = null;
  }
  return referralProgramCoachmark;
};
