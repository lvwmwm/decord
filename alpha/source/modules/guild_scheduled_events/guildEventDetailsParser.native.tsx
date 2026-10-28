// Module ID: 9050
// Function ID: 9051
// Name: guildEventDetailsParser
// Dependencies: [5741, 2]

// Module 9050 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5741 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
