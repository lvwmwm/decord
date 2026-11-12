// Module ID: 17316
// Function ID: 17317
// Name: useLoadTeenSettings
// Dependencies: [19, 17300, 8675, 2]
// Exports: default

// Module 17316 (useLoadTeenSettings)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8675 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let result = size.fileFinishedImporting("modules/parent_tools/hooks/useLoadTeenSettings.tsx");

export default function useLoadTeenSettings(id1, impl) {
  let closure_2;
  _require = id1;
  let obj = require("useSelectedTeenUser");
  const hasLoadedSettingsForTeen = obj.useHasLoadedSettingsForTeen(id1);
  dependencyMap = react.useEffectEvent(impl);
  const items = [id1, hasLoadedSettingsForTeen];
  const effect = react.useEffect(() => {
    if (null != id1) {
      const tmp2 = hasLoadedSettingsForTeen;
      if (!tmp2) {
        const obj = FamilyCenterActionCreatorsDefault;
        const result = obj.onTeenSettingsLoadFailure(tmp, closure_2);
        const obj2 = FamilyCenterActionCreatorsDefault;
        const teenSettingsAndConsents = obj2.fetchTeenSettingsAndConsents(tmp);
        return result;
      }
    }
  }, items);
  return hasLoadedSettingsForTeen;
};
