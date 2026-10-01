// Module ID: 14877
// Function ID: 14878
// Name: getSettingsOverrideReason
// Dependencies: [2022, 1084, 1115, 3909, 504, 2]
// Exports: default, useIsSettingLockedByOverride, useSettingsOverrideReason

// Module 14877 (getSettingsOverrideReason)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import intl4 from "intl" /* 1115 */;
import _modDef3909 from "module_3909" /* 3909 */;
import UserSettingsOverridesStore from "UserSettingsOverridesStore" /* 2022 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const constants = UserSettingsConstants.SettingsOverrideReasonKeys;
const result = size.fileFinishedImporting("modules/user_settings/accessibility/getSettingsOverrideReason.tsx");

export default function getSettingsOverrideReason(arg0) {
  if (constants.REDUCED_MOTION === arg0) {
    const intl3 = intl4.intl;
    return intl3.format(intl4.t["1dT9V4"], {});
  } else if (constants.REDUCED_MOTION_STICKERS === arg0) {
    const intl2 = intl4.intl;
    return intl2.string(intl4.t["2ExvRu"]);
  } else if (constants.GAME_MODE === arg0) {
    const intl = intl4.intl;
    return intl.string(_modDef3909.VGcdxP);
  }
};
export const useSettingsOverrideReason = function useSettingsOverrideReason(arg0) {
  let closure_0;
  _require = arg0;
  const items = [UserSettingsOverridesStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let formatResult;
    const appliedOverrideReasonKey = UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0);
    if (constants.REDUCED_MOTION === appliedOverrideReasonKey) {
      const intl2 = intl4.intl;
      formatResult = intl2.format(intl4.t["1dT9V4"], {});
    } else if (constants.REDUCED_MOTION_STICKERS === appliedOverrideReasonKey) {
      const intl = intl4.intl;
      formatResult = intl.string(intl4.t["2ExvRu"]);
    } else if (constants.GAME_MODE === appliedOverrideReasonKey) {
      const intl3 = intl4.intl;
      formatResult = intl3.string(_modDef3909.VGcdxP);
    }
    return formatResult;
  });
};
export const useIsSettingLockedByOverride = function useIsSettingLockedByOverride(arg0) {
  let closure_0;
  _require = arg0;
  const items = [UserSettingsOverridesStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0) === constants.GAME_MODE);
};
