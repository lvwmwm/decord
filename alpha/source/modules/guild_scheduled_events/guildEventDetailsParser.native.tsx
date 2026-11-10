// Module ID: 9172
// Function ID: 9173
// Name: guildEventDetailsParser
// Dependencies: [5881, 2]

// Module 9172 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5881 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
