// Module ID: 9081
// Function ID: 71263
// Name: set
// Dependencies: [2]

// Module 9081 (set)
import set from "set";

const obj = {};
let set = new Set(["connect_voice"]);
obj.ALL = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ConsoleCommands.tsx");

export const ConsoleCommands = { CONNECT_VOICE: "connect_voice" };
export const ConsoleCommandsSets = obj;
