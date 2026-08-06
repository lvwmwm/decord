// Module ID: 10802
// Function ID: 10803
// Name: set
// Dependencies: [2]

// Module 10802 (set)
import set from "set";

const obj = { ALL: null };
let set = new Set(["connect_voice"]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ConsoleCommands.tsx");

export const ConsoleCommands = { CONNECT_VOICE: "connect_voice" };
export const ConsoleCommandsSets = obj;
