// Module ID: 9086
// Function ID: 9087
// Name: guildEventDetailsParser
// Dependencies: [5754, 2]

// Module 9086 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5754 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
