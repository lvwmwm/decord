// Module ID: 9294
// Function ID: 9295
// Name: guildEventDetailsParser
// Dependencies: [4883, 2]

// Module 9294 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 4883 */;
import size from "module_2" /* 2 */;

const reactParserForResult = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = reactParserForResult;
