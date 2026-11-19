// Module ID: 7894
// Function ID: 7895
// Name: guildEventDetailsParser
// Dependencies: [5516, 2]

// Module 7894 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5516 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
