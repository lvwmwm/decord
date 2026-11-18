// Module ID: 7924
// Function ID: 7925
// Name: guildEventDetailsParser
// Dependencies: [5547, 2]

// Module 7924 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5547 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
