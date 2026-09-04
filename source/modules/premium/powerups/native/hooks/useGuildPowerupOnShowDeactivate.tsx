// Module ID: 12471
// Function ID: 12472
// Name: useGuildPowerupOnShowDeactivate
// Dependencies: [19, 21, 12472, 2008, 4867, 2]
// Exports: default

// Module 12471 (useGuildPowerupOnShowDeactivate)
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let closure_4 = importAllResult.lazy(() => asyncRequireImpl(12472, dependencyMap.paths));
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx");

export default function useGuildPowerupOnShowDeactivate(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return importAllResult.useCallback(() => {
    let obj = callback(table[4]);
    obj = { guildId: callback, powerup: table };
    obj.openAlert("guild-powerups-deactivate-alert", closure_1_3(closure_1_4, obj));
  }, items);
};
