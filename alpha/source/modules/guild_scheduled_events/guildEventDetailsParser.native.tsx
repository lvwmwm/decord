// Module ID: 8549
// Function ID: 8550
// Name: guildEventDetailsParser
// Dependencies: [7036, 2]

// Module 8549 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 7036 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
