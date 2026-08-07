// Module ID: 15779
// Function ID: 15780
// Name: YouSettingsCoachmark
// Dependencies: [15780, 8593, 2]
// Exports: default, useYouSettingsCoachmark

// Module 15779 (YouSettingsCoachmark)
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.create(null));
  const coachmark = require(8593) /* useCoachmark */.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export const useYouSettingsCoachmark = function useYouSettingsCoachmark(disabled) {
  let referralProgramCoachmark = require(15780) /* ReferralProgramCoachmarkImg */.useReferralProgramCoachmark({ disabled: disabled.disabled });
  if (referralProgramCoachmark == null) {
    referralProgramCoachmark = null;
  }
  return referralProgramCoachmark;
};
