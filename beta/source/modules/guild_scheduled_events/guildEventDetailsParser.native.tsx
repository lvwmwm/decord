// Module ID: 9877
// Function ID: 9878
// Name: guildEventDetailsParser
// Dependencies: [4780, 2]

// Module 9877 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 4780 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
