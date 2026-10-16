// Module ID: 8876
// Function ID: 8877
// Name: guildEventDetailsParser
// Dependencies: [5142, 2]

// Module 8876 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5142 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
