// Module ID: 16552
// Function ID: 128952
// Name: getPrivateChannelIconComponent
// Dependencies: [669, 4637, 4656, 4654, 4644, 4643, 4651, 2]
// Exports: getPrivateChannelIconComponent

// Module 16552 (getPrivateChannelIconComponent)
const result = require("VoiceLockIcon").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (require(669) /* set */.ChannelTypes.GUILD_TEXT === type) {
    return require(4637) /* TextLockIcon */.TextLockIcon;
  } else if (require(669) /* set */.ChannelTypes.GUILD_VOICE === type) {
    return require(4656) /* VoiceLockIcon */.VoiceLockIcon;
  } else if (require(669) /* set */.ChannelTypes.GUILD_STAGE_VOICE === type) {
    return require(4654) /* StageLockIcon */.StageLockIcon;
  } else if (require(669) /* set */.ChannelTypes.GUILD_FORUM === type) {
    return require(4644) /* ForumLockIcon */.ForumLockIcon;
  } else if (require(669) /* set */.ChannelTypes.GUILD_MEDIA === type) {
    return require(4643) /* ImageLockIcon */.ImageLockIcon;
  } else if (require(669) /* set */.ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return require(4651) /* AnnouncementsLockIcon */.AnnouncementsLockIcon;
  } else {
    return require(4637) /* TextLockIcon */.TextLockIcon;
  }
};
