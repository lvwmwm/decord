// Module ID: 14607
// Function ID: 14608
// Name: useIsTinyBroncoSettingsEnabled
// Dependencies: [14608, 14609, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14607 (useIsTinyBroncoSettingsEnabled)
import set from "set" /* 2 */;
import TINY_BRONCO_BLOG_URL from "TINY_BRONCO_BLOG_URL" /* 14608 */;
import useIsTinyBroncoEnabled from "useIsTinyBroncoEnabled" /* 14609 */;

let closure_2 = TINY_BRONCO_BLOG_URL.TINY_BRONCO_SETTINGS_LOCATION;
const result = set.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return useIsTinyBroncoEnabled.useIsTinyBroncoEnabled(closure_2);
};
