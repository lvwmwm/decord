// Module ID: 8450
// Function ID: 8451
// Name: guildEventDetailsParser
// Dependencies: [6941, 2]

// Module 8450 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 6941 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
