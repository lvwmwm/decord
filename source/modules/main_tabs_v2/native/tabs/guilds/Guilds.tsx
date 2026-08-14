// Module ID: 15230
// Function ID: 15231
// Dependencies: [19, 9634, 21, 15231, 4193, 10437, 4072, 14419, 15232, 15575, 14502, 2]

// Module 15230
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = require("noop").memo(function GuildsOnly() {
  let obj = require(15231) /* trackTabPressed */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = importDefault(4193)();
  let isEligibleForQuests = require(10437) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(importDefault(15232), {}), callback(importDefault(15575), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(tmp3(14502), {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(require(14419) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(require(4072) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
