// Module ID: 8633
// Function ID: 8634
// Name: guildEventDetailsParser
// Dependencies: [5078, 2]

// Module 8633 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5078 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
