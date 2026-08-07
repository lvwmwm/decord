// Module ID: 15078
// Function ID: 15079
// Dependencies: [19, 9509, 21, 15079, 4148, 10394, 4013, 14269, 15080, 15401, 14352, 2]

// Module 15078
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = require("noop").memo(function GuildsOnly() {
  let obj = require(15079) /* trackTabPressed */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = importDefault(4148)();
  let isEligibleForQuests = require(10394) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(importDefault(15080), {}), callback(importDefault(15401), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(tmp3(14352), {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(require(14269) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(require(4013) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
