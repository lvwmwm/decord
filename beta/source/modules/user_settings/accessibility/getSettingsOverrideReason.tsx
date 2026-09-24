// Module ID: 15601
// Function ID: 15602
// Name: getSettingsOverrideReason
// Dependencies: [2024, 1088, 1119, 558, 568, 504, 2]
// Exports: default

// Module 15601 (getSettingsOverrideReason)
import util from "util" /* 1119 */;
import UserSettingsOverridesStore from "UserSettingsOverridesStore" /* 2024 */;

const require = globalThis.__r;

require = fn;
const constants = fn(1088).SettingsOverrideReasonKeys;
const ReactCompilerGating = fn(558);
function getSettingsOverrideReason(arg0) {
  if (constants.REDUCED_MOTION === arg0) {
    const intl2 = util.intl;
    return intl2.format(util.t["1dT9V4"], {});
  } else if (tmp.REDUCED_MOTION_STICKERS === arg0) {
    const intl = util.intl;
    return intl.string(util.t["2ExvRu"]);
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/accessibility/getSettingsOverrideReason.tsx");

export default getSettingsOverrideReason;
export const useSettingsOverrideReason = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsOverridesStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const appliedOverrideReasonKey = UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0);
      if (constants.REDUCED_MOTION === appliedOverrideReasonKey) {
        const intl2 = util.intl;
        let formatResult = intl2.format(util.t["1dT9V4"], {});
      } else if (tmp2.REDUCED_MOTION_STICKERS === appliedOverrideReasonKey) {
        const intl = util.intl;
        formatResult = intl.string(util.t["2ExvRu"]);
      }
      return formatResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [UserSettingsOverridesStore];
  return require("initialize").useStateFromStores(items, () => {
    const appliedOverrideReasonKey = UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0);
    if (constants.REDUCED_MOTION === appliedOverrideReasonKey) {
      const intl2 = util.intl;
      let formatResult = intl2.format(util.t["1dT9V4"], {});
    } else if (tmp2.REDUCED_MOTION_STICKERS === appliedOverrideReasonKey) {
      const intl = util.intl;
      formatResult = intl.string(util.t["2ExvRu"]);
    }
    return formatResult;
  });
});
