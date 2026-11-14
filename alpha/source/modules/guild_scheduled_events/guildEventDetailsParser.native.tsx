// Module ID: 8422
// Function ID: 8423
// Name: guildEventDetailsParser
// Dependencies: [6057, 2]

// Module 8422 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 6057 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
