// Module ID: 8867
// Function ID: 8868
// Name: guildEventDetailsParser
// Dependencies: [5138, 2]

// Module 8867 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5138 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
