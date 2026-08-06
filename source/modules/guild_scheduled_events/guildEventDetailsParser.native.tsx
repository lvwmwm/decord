// Module ID: 8957
// Function ID: 8958
// Name: guildEventDetailsParser
// Dependencies: [4275, 2]

// Module 8957 (guildEventDetailsParser)
import importDefaultResult from "get defaultRules";

const reactParserForResult = require("get defaultRules").reactParserFor(require("get defaultRules").guildEventLocationRules);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = require("get defaultRules").parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
