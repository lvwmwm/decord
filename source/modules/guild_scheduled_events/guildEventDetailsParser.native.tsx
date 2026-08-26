// Module ID: 9249
// Function ID: 9250
// Name: guildEventDetailsParser
// Dependencies: [4434, 2]

// Module 9249 (guildEventDetailsParser)
import importDefaultResult from "get defaultRules" /* 4434 */;

const reactParserForResult = importDefaultResult.reactParserFor(importDefaultResult.guildEventLocationRules);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = importDefaultResult.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
