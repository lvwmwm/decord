// Module ID: 8625
// Function ID: 8626
// Name: guildEventDetailsParser
// Dependencies: [5077, 2]

// Module 8625 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5077 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
