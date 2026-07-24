// Module ID: 14126
// Function ID: 108583
// Name: context
// Dependencies: [31, 2]

// Module 14126 (context)
import importAllResult from "result";

const obj = { quest: undefined, isRendered: false, isVisibleToUser: false };
const context = require("result").createContext(obj);
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContext.tsx");

export default context;
