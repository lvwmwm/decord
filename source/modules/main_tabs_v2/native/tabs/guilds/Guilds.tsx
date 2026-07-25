// Module ID: 14856
// Function ID: 113319
// Dependencies: [31, 8699, 33, 14857, 3978, 10428, 3843, 14059, 14858, 15154, 14138, 2]

// Module 14856
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const memoResult = require("result").memo(function GuildsOnly() {
  let obj = require(14857) /* trackForScreen */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp2 = importDefault(3978)();
  let isEligibleForQuests = require(10428) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp2 };
  obj = {};
  const items = [callback(importDefault(14858), {}), callback(importDefault(15154), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = callback(importDefault(14138), {});
  }
  items[2] = isEligibleForQuests;
  obj.children = items;
  obj.children = closure_5(require(14059) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, obj);
  return callback(require(3843) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
