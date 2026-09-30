// Module ID: 17839
// Function ID: 17840
// Name: GuildRoleSubscriptionTierTemplateUtils
// Dependencies: [1095, 5588, 5608, 5606, 5596, 5595, 5603, 2]
// Exports: getPrivateChannelIconComponent

// Module 17839 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1095 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (ChannelTypes.ChannelTypes.GUILD_TEXT === type) {
    return tmp(5588).TextLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_VOICE === type) {
    return tmp(5608).VoiceLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(5606).StageLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_FORUM === type) {
    return tmp(5596).ForumLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(5595).ImageLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(5603).AnnouncementsLockIcon;
  } else {
    return tmp(5588).TextLockIcon;
  }
};
