// Module ID: 9166
// Function ID: 9167
// Name: guildEventDetailsParser
// Dependencies: [5879, 2]

// Module 9166 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5879 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
