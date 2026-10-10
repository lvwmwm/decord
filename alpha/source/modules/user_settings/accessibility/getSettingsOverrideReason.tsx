// Module ID: 15602
// Function ID: 15603
// Name: getSettingsOverrideReason
// Dependencies: [2042, 1095, 1126, 4013, 558, 576, 504, 2]
// Exports: default

// Module 15602 (getSettingsOverrideReason)
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import intl4 from "intl" /* 1126 */;
import _modDef4013 from "module_4013" /* 4013 */;
import UserSettingsOverridesStore from "UserSettingsOverridesStore" /* 2042 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const constants = UserSettingsConstants.SettingsOverrideReasonKeys;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSettingsOverrideReason(arg0) {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsOverridesStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
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
        formatResult = intl3.string(_modDef4013.VGcdxP);
      }
      return formatResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : (function useSettingsOverrideReason(arg0) {
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
      formatResult = intl3.string(_modDef4013.VGcdxP);
    }
    return formatResult;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
function getSettingsOverrideReason(arg0) {
  if (constants.REDUCED_MOTION === arg0) {
    const intl3 = intl4.intl;
    return intl3.format(intl4.t["1dT9V4"], {});
  } else if (constants.REDUCED_MOTION_STICKERS === arg0) {
    const intl2 = intl4.intl;
    return intl2.string(intl4.t["2ExvRu"]);
  } else if (constants.GAME_MODE === arg0) {
    const intl = intl4.intl;
    return intl.string(_modDef4013.VGcdxP);
  }
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsSettingLockedByOverride(arg0) {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsOverridesStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0) === constants.GAME_MODE;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : (function useIsSettingLockedByOverride(arg0) {
  let closure_0;
  _require = arg0;
  const items = [UserSettingsOverridesStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0) === constants.GAME_MODE);
});
const result = size.fileFinishedImporting("modules/user_settings/accessibility/getSettingsOverrideReason.tsx");

export default getSettingsOverrideReason;
export const useSettingsOverrideReason = tmp2;
export const useIsSettingLockedByOverride = tmp3;
