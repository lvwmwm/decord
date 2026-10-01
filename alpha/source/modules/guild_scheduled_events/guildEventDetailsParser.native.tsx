// Module ID: 9254
// Function ID: 9255
// Name: guildEventDetailsParser
// Dependencies: [4832, 2]

// Module 9254 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 4832 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
