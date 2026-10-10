// Module ID: 8649
// Function ID: 8650
// Name: guildEventDetailsParser
// Dependencies: [5079, 2]

// Module 8649 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5079 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
