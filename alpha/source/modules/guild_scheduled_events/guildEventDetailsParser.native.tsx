// Module ID: 9874
// Function ID: 9875
// Name: guildEventDetailsParser
// Dependencies: [4747, 2]

// Module 9874 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 4747 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
