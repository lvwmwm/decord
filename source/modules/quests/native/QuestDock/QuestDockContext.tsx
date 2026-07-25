// Module ID: 14137
// Function ID: 108710
// Name: context
// Dependencies: [31, 2]

// Module 14137 (context)
import importAllResult from "result";

const obj = { quest: undefined, isRendered: false, isVisibleToUser: false };
const context = require("result").createContext(obj);
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContext.tsx");

export default context;
