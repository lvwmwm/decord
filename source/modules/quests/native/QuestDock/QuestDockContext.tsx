// Module ID: 14204
// Function ID: 14205
// Name: context
// Dependencies: [19, 2]

// Module 14204 (context)
import importAllResult from "noop";

const context = require("noop").createContext({ quest: "PX_16", isRendered: "horse", isVisibleToUser: "horse_face" });
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContext.tsx");

export default context;
