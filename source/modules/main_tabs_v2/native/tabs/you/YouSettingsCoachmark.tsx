// Module ID: 15474
// Function ID: 119142
// Name: YouSettingsCoachmark
// Dependencies: [15475, 8563, 2]
// Exports: default, useYouSettingsCoachmark

// Module 15474 (YouSettingsCoachmark)
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  let obj = Object.create(null);
  obj.buttonRef = 0;
  const merged = Object.assign(buttonRef, obj);
  obj = require(8563) /* useCoachmark */;
  const coachmark = obj.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export const useYouSettingsCoachmark = function useYouSettingsCoachmark(disabled) {
  const referralProgramCoachmark = require(15475) /* ReferralProgramCoachmarkImg */.useReferralProgramCoachmark({ disabled: disabled.disabled });
  let tmp2 = null;
  if (null != referralProgramCoachmark) {
    tmp2 = referralProgramCoachmark;
  }
  return tmp2;
};
