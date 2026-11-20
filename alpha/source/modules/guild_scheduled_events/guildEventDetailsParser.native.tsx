// Module ID: 7893
// Function ID: 7894
// Name: guildEventDetailsParser
// Dependencies: [5518, 2]

// Module 7893 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5518 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
