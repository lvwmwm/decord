// Module ID: 15044
// Function ID: 15045
// Dependencies: [19, 9492, 21, 15045, 4132, 10375, 3997, 14244, 15046, 15358, 14324, 2]

// Module 15044
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = require("noop").memo(function GuildsOnly() {
  let obj = require(15045) /* trackTabPressed */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = importDefault(4132)();
  let isEligibleForQuests = require(10375) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(importDefault(15046), {}), callback(importDefault(15358), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(tmp3(14324), {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(require(14244) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(require(3997) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
