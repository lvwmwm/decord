// Module ID: 8356
// Function ID: 8357
// Name: guildEventDetailsParser
// Dependencies: [5994, 2]

// Module 8356 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5994 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
