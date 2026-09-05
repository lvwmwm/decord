// Module ID: 9450
// Function ID: 9451
// Name: set
// Dependencies: [2]

// Module 9450 (set)
import set from "set" /* 2 */;

const obj = { ALL: null };
let set = new Set(["connect_voice"]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ConsoleCommands.tsx");

export const ConsoleCommands = { CONNECT_VOICE: "connect_voice" };
export const ConsoleCommandsSets = obj;
