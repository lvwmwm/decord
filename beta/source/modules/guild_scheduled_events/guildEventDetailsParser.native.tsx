// Module ID: 9061
// Function ID: 9062
// Name: guildEventDetailsParser
// Dependencies: [4823, 2]

// Module 9061 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 4823 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
