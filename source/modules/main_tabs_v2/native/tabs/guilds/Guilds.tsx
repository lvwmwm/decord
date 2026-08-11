// Module ID: 15159
// Function ID: 15160
// Dependencies: [19, 9579, 21, 15160, 4154, 10466, 4031, 14349, 15161, 15501, 14432, 2]

// Module 15159
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = require("noop").memo(function GuildsOnly() {
  let obj = require(15160) /* trackTabPressed */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = importDefault(4154)();
  let isEligibleForQuests = require(10466) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(importDefault(15161), {}), callback(importDefault(15501), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(tmp3(14432), {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(require(14349) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(require(4031) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
