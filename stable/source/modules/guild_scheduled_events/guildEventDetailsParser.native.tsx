// Module ID: 9037
// Function ID: 9038
// Name: guildEventDetailsParser
// Dependencies: [4824, 2]

// Module 9037 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 4824 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
