// Module ID: 9017
// Function ID: 9018
// Name: guildEventDetailsParser
// Dependencies: [5705, 2]

// Module 9017 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5705 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
