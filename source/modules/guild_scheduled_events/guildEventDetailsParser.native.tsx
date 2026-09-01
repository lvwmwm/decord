// Module ID: 9740
// Function ID: 9741
// Name: guildEventDetailsParser
// Dependencies: [4468, 2]

// Module 9740 (guildEventDetailsParser)
import importDefaultResult from "get defaultRules" /* 4468 */;

const reactParserForResult = importDefaultResult.reactParserFor(importDefaultResult.guildEventLocationRules);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = importDefaultResult.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
