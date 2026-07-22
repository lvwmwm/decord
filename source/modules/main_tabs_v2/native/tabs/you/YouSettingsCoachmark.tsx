// Module ID: 15357
// Function ID: 116968
// Name: YouSettingsCoachmark
// Dependencies: []
// Exports: default, useYouSettingsCoachmark

// Module 15357 (YouSettingsCoachmark)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  let obj = Object.create(null);
  obj.buttonRef = 0;
  const merged = Object.assign(buttonRef, obj);
  obj = require(dependencyMap[1]);
  const coachmark = obj.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export const useYouSettingsCoachmark = function useYouSettingsCoachmark(disabled) {
  const referralProgramCoachmark = require(dependencyMap[0]).useReferralProgramCoachmark({ disabled: disabled.disabled });
  let tmp2 = null;
  if (null != referralProgramCoachmark) {
    tmp2 = referralProgramCoachmark;
  }
  return tmp2;
};
