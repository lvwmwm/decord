// Module ID: 18246
// Function ID: 18247
// Name: GuildRoleSubscriptionTierTemplateUtils
// Dependencies: [1095, 5296, 5316, 5314, 5304, 5303, 5311, 2]
// Exports: getPrivateChannelIconComponent

// Module 18246 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1095 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (ChannelTypes.ChannelTypes.GUILD_TEXT === type) {
    return tmp(5296).TextLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_VOICE === type) {
    return tmp(5316).VoiceLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(5314).StageLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_FORUM === type) {
    return tmp(5304).ForumLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(5303).ImageLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(5311).AnnouncementsLockIcon;
  } else {
    return tmp(5296).TextLockIcon;
  }
};
