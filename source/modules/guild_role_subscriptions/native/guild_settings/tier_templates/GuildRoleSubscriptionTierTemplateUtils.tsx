// Module ID: 16627
// Function ID: 16628
// Name: getPrivateChannelIconComponent
// Dependencies: [692, 4693, 4712, 4710, 4700, 4699, 4707, 2]
// Exports: getPrivateChannelIconComponent

// Module 16627 (getPrivateChannelIconComponent)
const result = require("VoiceLockIcon").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (require(692) /* set */.ChannelTypes.GUILD_TEXT === type) {
    return tmp(4693).TextLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_VOICE === type) {
    return tmp(4712).VoiceLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(4710).StageLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_FORUM === type) {
    return tmp(4700).ForumLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(4699).ImageLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(4707).AnnouncementsLockIcon;
  } else {
    return tmp(4693).TextLockIcon;
  }
};
