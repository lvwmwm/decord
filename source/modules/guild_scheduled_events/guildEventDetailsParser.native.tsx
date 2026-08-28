// Module ID: 9679
// Function ID: 9680
// Name: guildEventDetailsParser
// Dependencies: [4436, 2]

// Module 9679 (guildEventDetailsParser)
import importDefaultResult from "get defaultRules" /* 4436 */;

const reactParserForResult = importDefaultResult.reactParserFor(importDefaultResult.guildEventLocationRules);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = importDefaultResult.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
