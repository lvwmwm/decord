// Module ID: 9181
// Function ID: 9182
// Name: guildEventDetailsParser
// Dependencies: [4370, 2]

// Module 9181 (guildEventDetailsParser)
import importDefaultResult from "get defaultRules" /* 4370 */;

const reactParserForResult = importDefaultResult.reactParserFor(importDefaultResult.guildEventLocationRules);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = importDefaultResult.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
