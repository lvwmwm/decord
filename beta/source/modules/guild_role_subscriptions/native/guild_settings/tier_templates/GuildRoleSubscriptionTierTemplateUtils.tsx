// Module ID: 18249
// Function ID: 18250
// Name: GuildRoleSubscriptionTierTemplateUtils
// Dependencies: [1099, 5298, 5318, 5316, 5306, 5305, 5313, 2]
// Exports: getPrivateChannelIconComponent

// Module 18249 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (ChannelTypes.ChannelTypes.GUILD_TEXT === type) {
    return tmp(5298).TextLockIcon;
  } else if (tmp(1099).ChannelTypes.GUILD_VOICE === type) {
    return tmp(5318).VoiceLockIcon;
  } else if (tmp(1099).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(5316).StageLockIcon;
  } else if (tmp(1099).ChannelTypes.GUILD_FORUM === type) {
    return tmp(5306).ForumLockIcon;
  } else if (tmp(1099).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(5305).ImageLockIcon;
  } else if (tmp(1099).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(5313).AnnouncementsLockIcon;
  } else {
    return tmp(5298).TextLockIcon;
  }
};
