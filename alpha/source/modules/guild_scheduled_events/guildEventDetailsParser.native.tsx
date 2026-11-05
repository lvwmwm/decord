// Module ID: 9238
// Function ID: 9239
// Name: guildEventDetailsParser
// Dependencies: [5891, 2]

// Module 9238 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5891 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
