// Module ID: 15024
// Function ID: 15025
// Dependencies: [19, 9463, 21, 15025, 4102, 10347, 3967, 14218, 15026, 15339, 14299, 2]

// Module 15024
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = require("noop").memo(function GuildsOnly() {
  let obj = require(15025) /* trackTabPressed */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = importDefault(4102)();
  let isEligibleForQuests = require(10347) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(importDefault(15026), {}), callback(importDefault(15339), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(tmp3(14299), {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(require(14218) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(require(3967) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
