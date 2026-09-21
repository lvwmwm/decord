// Module ID: 9845
// Function ID: 9846
// Name: guildEventDetailsParser
// Dependencies: [4748, 2]

// Module 9845 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 4748 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
