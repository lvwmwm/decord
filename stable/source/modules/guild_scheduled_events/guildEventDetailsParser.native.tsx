// Module ID: 9259
// Function ID: 9260
// Name: guildEventDetailsParser
// Dependencies: [4877, 2]

// Module 9259 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 4877 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
