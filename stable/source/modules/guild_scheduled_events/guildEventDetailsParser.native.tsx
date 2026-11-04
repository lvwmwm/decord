// Module ID: 9049
// Function ID: 9050
// Name: guildEventDetailsParser
// Dependencies: [5737, 2]

// Module 9049 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5737 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
