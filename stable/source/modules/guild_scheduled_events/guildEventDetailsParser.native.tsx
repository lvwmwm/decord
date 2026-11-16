// Module ID: 9199
// Function ID: 9200
// Name: guildEventDetailsParser
// Dependencies: [5911, 2]

// Module 9199 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5911 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
