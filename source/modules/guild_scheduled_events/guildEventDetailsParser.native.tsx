// Module ID: 9700
// Function ID: 9701
// Name: guildEventDetailsParser
// Dependencies: [4471, 2]

// Module 9700 (guildEventDetailsParser)
import importDefaultResult from "get defaultRules" /* 4471 */;

const reactParserForResult = importDefaultResult.reactParserFor(importDefaultResult.guildEventLocationRules);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = importDefaultResult.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
