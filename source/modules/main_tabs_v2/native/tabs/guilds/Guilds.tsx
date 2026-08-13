// Module ID: 15225
// Function ID: 15226
// Dependencies: [19, 9623, 21, 15226, 4193, 10421, 4072, 14415, 15227, 15566, 14498, 2]

// Module 15225
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = require("noop").memo(function GuildsOnly() {
  let obj = require(15226) /* trackTabPressed */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = importDefault(4193)();
  let isEligibleForQuests = require(10421) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(importDefault(15227), {}), callback(importDefault(15566), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(tmp3(14498), {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(require(14415) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(require(4072) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
