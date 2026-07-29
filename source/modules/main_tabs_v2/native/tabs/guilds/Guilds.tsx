// Module ID: 14927
// Function ID: 14928
// Dependencies: [19, 8767, 21, 14928, 4036, 10493, 3901, 14126, 14929, 15240, 14205, 2]

// Module 14927
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = require("noop").memo(function GuildsOnly() {
  let obj = require(14928) /* trackTabPressed */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = importDefault(4036)();
  let isEligibleForQuests = require(10493) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(importDefault(14929), {}), callback(importDefault(15240), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(tmp3(14205), {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(require(14126) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(require(3901) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
