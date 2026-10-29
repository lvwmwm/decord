// Module ID: 9053
// Function ID: 9054
// Name: guildEventDetailsParser
// Dependencies: [5743, 2]

// Module 9053 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5743 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
