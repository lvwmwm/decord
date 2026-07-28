// Module ID: 11606
// Function ID: 90135
// Name: useGuildPowerupOnShowDeactivate
// Dependencies: [31, 33, 11607, 1935, 4507, 2]
// Exports: default

// Module 11606 (useGuildPowerupOnShowDeactivate)
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_4 = importAllResult.lazy(() => require(1935) /* maybeLoadBundle */(11607, dependencyMap.paths));
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
