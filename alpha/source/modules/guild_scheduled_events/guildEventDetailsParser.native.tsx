// Module ID: 8433
// Function ID: 8434
// Name: guildEventDetailsParser
// Dependencies: [6051, 2]

// Module 8433 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 6051 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
