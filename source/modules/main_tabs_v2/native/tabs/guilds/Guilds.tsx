// Module ID: 14798
// Function ID: 112870
// Dependencies: [31, 8772, 33, 14799, 3977, 10465, 3842, 13998, 14800, 15097, 14077, 2]

// Module 14798
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const memoResult = require("result").memo(function GuildsOnly() {
  let obj = require(14799) /* trackForScreen */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp2 = importDefault(3977)();
  let isEligibleForQuests = require(10465) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp2 };
  obj = {};
  const items = [callback(importDefault(14800), {}), callback(importDefault(15097), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = callback(importDefault(14077), {});
  }
  items[2] = isEligibleForQuests;
  obj.children = items;
  obj.children = closure_5(require(13998) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, obj);
  return callback(require(3842) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
