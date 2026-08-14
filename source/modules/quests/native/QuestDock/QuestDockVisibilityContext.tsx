// Module ID: 14501
// Function ID: 14502
// Name: context
// Dependencies: [19, 2]

// Module 14501 (context)
import importAllResult from "noop";

const context = require("noop").createContext({ isRendered: false, isVisibleToUser: false });
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockVisibilityContext.tsx");

export default context;
