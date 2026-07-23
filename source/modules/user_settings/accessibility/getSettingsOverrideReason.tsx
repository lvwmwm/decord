// Module ID: 14218
// Function ID: 109225
// Name: getSettingsOverrideReason
// Dependencies: [3804, 662, 1212, 566, 2]
// Exports: useSettingsOverrideReason

// Module 14218 (getSettingsOverrideReason)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SettingsOverrideReasonKeys as closure_3 } from "MAX_FAVORITES";

const require = arg1;
function getSettingsOverrideReason(arg0) {
  if (constants.REDUCED_MOTION === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.format(require(1212) /* getSystemLocale */.t["1dT9V4"], {});
  } else if (constants.REDUCED_MOTION_STICKERS === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["2ExvRu"]);
  }
}
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/accessibility/getSettingsOverrideReason.tsx");

export default getSettingsOverrideReason;
export const useSettingsOverrideReason = function useSettingsOverrideReason(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => outer1_4(outer1_2.getAppliedOverrideReasonKey(closure_0)));
};
