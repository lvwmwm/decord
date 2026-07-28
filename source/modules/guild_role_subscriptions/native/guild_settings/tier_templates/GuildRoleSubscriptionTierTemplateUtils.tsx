// Module ID: 16592
// Function ID: 129113
// Name: getPrivateChannelIconComponent
// Dependencies: [669, 4671, 4690, 4688, 4678, 4677, 4685, 2]
// Exports: getPrivateChannelIconComponent

// Module 16592 (getPrivateChannelIconComponent)
const result = require("VoiceLockIcon").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (require(669) /* set */.ChannelTypes.GUILD_TEXT === type) {
    return require(4671) /* TextLockIcon */.TextLockIcon;
  } else if (require(669) /* set */.ChannelTypes.GUILD_VOICE === type) {
    return require(4690) /* VoiceLockIcon */.VoiceLockIcon;
  } else if (require(669) /* set */.ChannelTypes.GUILD_STAGE_VOICE === type) {
    return require(4688) /* StageLockIcon */.StageLockIcon;
  } else if (require(669) /* set */.ChannelTypes.GUILD_FORUM === type) {
    return require(4678) /* ForumLockIcon */.ForumLockIcon;
  } else if (require(669) /* set */.ChannelTypes.GUILD_MEDIA === type) {
    return require(4677) /* ImageLockIcon */.ImageLockIcon;
  } else if (require(669) /* set */.ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return require(4685) /* AnnouncementsLockIcon */.AnnouncementsLockIcon;
  } else {
    return require(4671) /* TextLockIcon */.TextLockIcon;
  }
};
