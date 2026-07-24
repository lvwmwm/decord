// Module ID: 8408
// Function ID: 66885
// Name: SHARE_EVENT_DETAILS_LINK
// Dependencies: [2]
// Exports: SHARE_EVENT_DETAILS_LINK, canUseInviteModal

// Module 8408 (SHARE_EVENT_DETAILS_LINK)
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/utils/ShareEventUtils.tsx");

export const SHARE_EVENT_DETAILS_LINK = (guildId) => "https://discord.com/events/" + guildId.guildId + "/" + guildId.guildEventId;
export const canUseInviteModal = function canUseInviteModal(arg0, arg1, arg2) {
  let tmp = arg0;
  if (arg0) {
    tmp = arg1;
  }
  if (tmp) {
    tmp = null != arg2;
  }
  return tmp;
};
