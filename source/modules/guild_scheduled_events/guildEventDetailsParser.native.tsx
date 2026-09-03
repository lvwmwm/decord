// Module ID: 9766
// Function ID: 9767
// Name: guildEventDetailsParser
// Dependencies: [4468, 2]

// Module 9766 (guildEventDetailsParser)
import importDefaultResult from "get defaultRules" /* 4468 */;

const reactParserForResult = importDefaultResult.reactParserFor(importDefaultResult.guildEventLocationRules);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = importDefaultResult.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
