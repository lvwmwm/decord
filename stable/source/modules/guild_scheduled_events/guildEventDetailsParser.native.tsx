// Module ID: 8922
// Function ID: 8923
// Name: guildEventDetailsParser
// Dependencies: [5179, 2]

// Module 8922 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5179 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
