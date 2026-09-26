// Module ID: 9900
// Function ID: 9901
// Name: guildEventDetailsParser
// Dependencies: [4778, 2]

// Module 9900 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 4778 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
