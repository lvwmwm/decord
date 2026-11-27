// Module ID: 8592
// Function ID: 8593
// Name: guildEventDetailsParser
// Dependencies: [7067, 2]

// Module 8592 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 7067 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
