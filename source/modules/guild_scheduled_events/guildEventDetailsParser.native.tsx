// Module ID: 8924
// Function ID: 8925
// Name: guildEventDetailsParser
// Dependencies: [6844, 2]

// Module 8924 (guildEventDetailsParser)
import importDefaultResult from "get defaultRules" /* 6844 */;

const reactParserForResult = importDefaultResult.reactParserFor(importDefaultResult.guildEventLocationRules);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = importDefaultResult.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
