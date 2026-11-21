// Module ID: 8013
// Function ID: 8014
// Name: guildEventDetailsParser
// Dependencies: [5637, 2]

// Module 8013 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5637 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
