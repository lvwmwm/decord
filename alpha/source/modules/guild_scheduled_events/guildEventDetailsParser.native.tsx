// Module ID: 9184
// Function ID: 9185
// Name: guildEventDetailsParser
// Dependencies: [5910, 2]

// Module 9184 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5910 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
