// Module ID: 15062
// Function ID: 15063
// Dependencies: [19, 9492, 21, 15063, 4131, 10378, 3996, 14255, 15064, 15377, 14336, 2]

// Module 15062
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = require("noop").memo(function GuildsOnly() {
  let obj = require(15063) /* trackTabPressed */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = importDefault(4131)();
  let isEligibleForQuests = require(10378) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(importDefault(15064), {}), callback(importDefault(15377), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(tmp3(14336), {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(require(14255) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(require(3996) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
