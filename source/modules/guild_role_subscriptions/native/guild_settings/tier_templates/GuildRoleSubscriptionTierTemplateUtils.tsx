// Module ID: 16529
// Function ID: 128737
// Name: getPrivateChannelIconComponent
// Dependencies: [669, 4636, 4655, 4653, 4643, 4642, 4650, 2]
// Exports: getPrivateChannelIconComponent

// Module 16529 (getPrivateChannelIconComponent)
const result = require("VoiceLockIcon").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (require(669) /* set */.ChannelTypes.GUILD_TEXT === type) {
    return require(4636) /* TextLockIcon */.TextLockIcon;
  } else if (require(669) /* set */.ChannelTypes.GUILD_VOICE === type) {
    return require(4655) /* VoiceLockIcon */.VoiceLockIcon;
  } else if (require(669) /* set */.ChannelTypes.GUILD_STAGE_VOICE === type) {
    return require(4653) /* StageLockIcon */.StageLockIcon;
  } else if (require(669) /* set */.ChannelTypes.GUILD_FORUM === type) {
    return require(4643) /* ForumLockIcon */.ForumLockIcon;
  } else if (require(669) /* set */.ChannelTypes.GUILD_MEDIA === type) {
    return require(4642) /* ImageLockIcon */.ImageLockIcon;
  } else if (require(669) /* set */.ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return require(4650) /* AnnouncementsLockIcon */.AnnouncementsLockIcon;
  } else {
    return require(4636) /* TextLockIcon */.TextLockIcon;
  }
};
