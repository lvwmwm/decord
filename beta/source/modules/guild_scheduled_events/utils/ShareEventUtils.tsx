// Module ID: 7987
// Function ID: 7988
// Name: ShareEventUtils
// Dependencies: [2]
// Exports: SHARE_EVENT_DETAILS_LINK, canUseInviteModal

// Module 7987 (ShareEventUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/utils/ShareEventUtils.tsx");

export const SHARE_EVENT_DETAILS_LINK = (guildId) => "https://discord.com/events/" + guildId.guildId + "/" + guildId.guildEventId;
export function canUseInviteModal(arg0, arg1, arg2) {
  return arg0 && arg1 && null != arg2;
}
