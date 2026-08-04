// Module ID: 14323
// Function ID: 14324
// Name: context
// Dependencies: [19, 2]

// Module 14323 (context)
import importAllResult from "noop";

const context = require("noop").createContext({ isRendered: false, isVisibleToUser: false });
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockVisibilityContext.tsx");

export default context;
