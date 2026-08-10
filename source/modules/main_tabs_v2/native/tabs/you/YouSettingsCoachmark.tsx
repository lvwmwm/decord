// Module ID: 15863
// Function ID: 15864
// Name: YouSettingsCoachmark
// Dependencies: [15864, 8653, 2]
// Exports: default, useYouSettingsCoachmark

// Module 15863 (YouSettingsCoachmark)
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.create(null));
  const coachmark = require(8653) /* useCoachmark */.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export const useYouSettingsCoachmark = function useYouSettingsCoachmark(disabled) {
  let referralProgramCoachmark = require(15864) /* ReferralProgramCoachmarkImg */.useReferralProgramCoachmark({ disabled: disabled.disabled });
  if (referralProgramCoachmark == null) {
    referralProgramCoachmark = null;
  }
  return referralProgramCoachmark;
};
