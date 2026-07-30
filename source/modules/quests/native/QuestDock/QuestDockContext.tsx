// Module ID: 14200
// Function ID: 14201
// Name: context
// Dependencies: [19, 2]

// Module 14200 (context)
import importAllResult from "noop";

const context = require("noop").createContext({ quest: "PX_16", isRendered: "GuildBasicChannels", isVisibleToUser: null });
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContext.tsx");

export default context;
