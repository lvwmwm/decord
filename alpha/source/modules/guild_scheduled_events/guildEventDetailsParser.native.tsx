// Module ID: 8977
// Function ID: 8978
// Name: guildEventDetailsParser
// Dependencies: [5687, 2]

// Module 8977 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5687 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
