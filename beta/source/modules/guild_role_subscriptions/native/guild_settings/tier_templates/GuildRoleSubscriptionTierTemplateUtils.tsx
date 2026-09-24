// Module ID: 18260
// Function ID: 18261
// Name: GuildRoleSubscriptionTierTemplateUtils
// Dependencies: [1099, 5330, 5350, 5348, 5338, 5337, 5345, 2]
// Exports: getPrivateChannelIconComponent

// Module 18260 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (ChannelTypes.ChannelTypes.GUILD_TEXT === type) {
    return tmp(5330).TextLockIcon;
  } else if (tmp(1099).ChannelTypes.GUILD_VOICE === type) {
    return tmp(5350).VoiceLockIcon;
  } else if (tmp(1099).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(5348).StageLockIcon;
  } else if (tmp(1099).ChannelTypes.GUILD_FORUM === type) {
    return tmp(5338).ForumLockIcon;
  } else if (tmp(1099).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(5337).ImageLockIcon;
  } else if (tmp(1099).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(5345).AnnouncementsLockIcon;
  } else {
    return tmp(5330).TextLockIcon;
  }
};
