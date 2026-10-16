// Module ID: 8645
// Function ID: 8646
// Name: guildEventDetailsParser
// Dependencies: [5079, 2]

// Module 8645 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5079 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
