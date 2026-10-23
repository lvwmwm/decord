// Module ID: 9016
// Function ID: 9017
// Name: guildEventDetailsParser
// Dependencies: [5703, 2]

// Module 9016 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 5703 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
