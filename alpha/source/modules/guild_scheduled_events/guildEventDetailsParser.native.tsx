// Module ID: 8655
// Function ID: 8656
// Name: guildEventDetailsParser
// Dependencies: [5083, 2]

// Module 8655 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5083 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
