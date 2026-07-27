// Module ID: 8973
// Function ID: 70749
// Name: set
// Dependencies: [2]

// Module 8973 (set)
import set from "set";

const obj = {};
let set = new Set(["connect_voice"]);
obj.ALL = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ConsoleCommands.tsx");

export const ConsoleCommands = { CONNECT_VOICE: "connect_voice" };
export const ConsoleCommandsSets = obj;
