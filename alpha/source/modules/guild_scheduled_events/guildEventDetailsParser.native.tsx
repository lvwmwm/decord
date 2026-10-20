// Module ID: 8950
// Function ID: 8951
// Name: guildEventDetailsParser
// Dependencies: [5667, 2]

// Module 8950 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5667 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
