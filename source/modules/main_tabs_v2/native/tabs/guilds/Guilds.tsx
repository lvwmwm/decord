// Module ID: 15045
// Function ID: 15046
// Dependencies: [19, 9492, 21, 15046, 4132, 10375, 3997, 14245, 15047, 15359, 14325, 2]

// Module 15045
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = require("noop").memo(function GuildsOnly() {
  let obj = require(15046) /* trackTabPressed */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = importDefault(4132)();
  let isEligibleForQuests = require(10375) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(importDefault(15047), {}), callback(importDefault(15359), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(tmp3(14325), {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(require(14245) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(require(3997) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
