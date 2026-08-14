// Module ID: 9097
// Function ID: 9098
// Name: guildEventDetailsParser
// Dependencies: [4332, 2]

// Module 9097 (guildEventDetailsParser)
import importDefaultResult from "get defaultRules";

const reactParserForResult = require("get defaultRules").reactParserFor(require("get defaultRules").guildEventLocationRules);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = require("get defaultRules").parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
