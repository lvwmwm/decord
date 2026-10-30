// Module ID: 9067
// Function ID: 9068
// Name: guildEventDetailsParser
// Dependencies: [5749, 2]

// Module 9067 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5749 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
