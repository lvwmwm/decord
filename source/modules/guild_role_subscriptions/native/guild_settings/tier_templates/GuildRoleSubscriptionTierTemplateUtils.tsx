// Module ID: 16962
// Function ID: 16963
// Name: getPrivateChannelIconComponent
// Dependencies: [692, 4870, 4889, 4887, 4877, 4876, 4884, 2]
// Exports: getPrivateChannelIconComponent

// Module 16962 (getPrivateChannelIconComponent)
const result = require("VoiceLockIcon").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (require(692) /* set */.ChannelTypes.GUILD_TEXT === type) {
    return tmp(4870).TextLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_VOICE === type) {
    return tmp(4889).VoiceLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(4887).StageLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_FORUM === type) {
    return tmp(4877).ForumLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(4876).ImageLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(4884).AnnouncementsLockIcon;
  } else {
    return tmp(4870).TextLockIcon;
  }
};
