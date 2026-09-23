// Module ID: 9947
// Function ID: 9948
// Name: guildEventDetailsParser
// Dependencies: [4817, 2]

// Module 9947 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 4817 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
