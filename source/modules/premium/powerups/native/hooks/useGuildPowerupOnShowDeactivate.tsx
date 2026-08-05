// Module ID: 11782
// Function ID: 11783
// Name: useGuildPowerupOnShowDeactivate
// Dependencies: [19, 21, 11783, 1959, 4595, 2]
// Exports: default

// Module 11782 (useGuildPowerupOnShowDeactivate)
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_4 = importAllResult.lazy(() => require(1959) /* asyncRequireImpl */(11783, dependencyMap.paths));
const result = require("GuildPowerupsDeactivateAlert").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx");

export default function useGuildPowerupOnShowDeactivate(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return importAllResult.useCallback(() => {
    let obj = callback(table[4]);
    obj = { guildId: callback, powerup: table };
    obj.openAlert("guild-powerups-deactivate-alert", outer1_3(outer1_4, obj));
  }, items);
};
