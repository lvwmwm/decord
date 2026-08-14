// Module ID: 11977
// Function ID: 11978
// Name: useGuildPowerupOnShowDeactivate
// Dependencies: [19, 21, 11978, 2007, 4707, 2]
// Exports: default

// Module 11977 (useGuildPowerupOnShowDeactivate)
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_4 = importAllResult.lazy(() => require(2007) /* asyncRequireImpl */(11978, dependencyMap.paths));
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
