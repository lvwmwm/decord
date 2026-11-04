// Module ID: 9231
// Function ID: 9232
// Name: guildEventDetailsParser
// Dependencies: [5888, 2]

// Module 9231 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5888 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
