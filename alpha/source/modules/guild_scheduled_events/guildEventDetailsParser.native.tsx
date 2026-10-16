// Module ID: 8875
// Function ID: 8876
// Name: guildEventDetailsParser
// Dependencies: [5141, 2]

// Module 8875 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5141 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
