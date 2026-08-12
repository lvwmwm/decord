// Module ID: 15216
// Function ID: 15217
// Dependencies: [19, 9619, 21, 15217, 4195, 10507, 4072, 14406, 15218, 15557, 14489, 2]

// Module 15216
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = require("noop").memo(function GuildsOnly() {
  let obj = require(15217) /* trackTabPressed */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = importDefault(4195)();
  let isEligibleForQuests = require(10507) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(importDefault(15218), {}), callback(importDefault(15557), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(tmp3(14489), {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(require(14406) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(require(4072) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
