// Module ID: 9034
// Function ID: 9035
// Name: guildEventDetailsParser
// Dependencies: [4293, 2]

// Module 9034 (guildEventDetailsParser)
import importDefaultResult from "get defaultRules";

const reactParserForResult = require("get defaultRules").reactParserFor(require("get defaultRules").guildEventLocationRules);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = require("get defaultRules").parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
