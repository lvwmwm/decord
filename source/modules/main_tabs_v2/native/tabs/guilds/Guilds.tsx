// Module ID: 14921
// Function ID: 14922
// Dependencies: [19, 8763, 21, 14922, 4036, 10489, 3901, 14122, 14923, 15234, 14201, 2]

// Module 14921
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = require("noop").memo(function GuildsOnly() {
  let obj = require(14922) /* trackTabPressed */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = importDefault(4036)();
  let isEligibleForQuests = require(10489) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(importDefault(14923), {}), callback(importDefault(15234), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(tmp3(14201), {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(require(14122) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(require(3901) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
