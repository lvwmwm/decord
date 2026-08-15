// Module ID: 15279
// Function ID: 15280
// Dependencies: [19, 9588, 21, 15280, 4225, 10685, 4104, 14451, 15281, 15625, 14534, 2]

// Module 15279
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = require("noop").memo(function GuildsOnly() {
  let obj = require(15280) /* trackTabPressed */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = importDefault(4225)();
  let isEligibleForQuests = require(10685) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(importDefault(15281), {}), callback(importDefault(15625), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(tmp3(14534), {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(require(14451) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(require(4104) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
