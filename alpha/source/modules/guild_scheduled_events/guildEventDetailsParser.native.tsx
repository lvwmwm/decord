// Module ID: 8986
// Function ID: 8987
// Name: guildEventDetailsParser
// Dependencies: [5691, 2]

// Module 8986 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5691 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
