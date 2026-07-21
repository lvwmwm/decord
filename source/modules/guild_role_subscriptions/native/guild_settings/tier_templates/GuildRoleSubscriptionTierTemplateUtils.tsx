// Module ID: 16349
// Function ID: 126136
// Name: getPrivateChannelIconComponent
// Dependencies: []
// Exports: getPrivateChannelIconComponent

// Module 16349 (getPrivateChannelIconComponent)
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (require(dependencyMap[0]).ChannelTypes.GUILD_TEXT === type) {
    return require(dependencyMap[1]).TextLockIcon;
  } else if (require(dependencyMap[0]).ChannelTypes.GUILD_VOICE === type) {
    return require(dependencyMap[2]).VoiceLockIcon;
  } else if (require(dependencyMap[0]).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return require(dependencyMap[3]).StageLockIcon;
  } else if (require(dependencyMap[0]).ChannelTypes.GUILD_FORUM === type) {
    return require(dependencyMap[4]).ForumLockIcon;
  } else if (require(dependencyMap[0]).ChannelTypes.GUILD_MEDIA === type) {
    return require(dependencyMap[5]).ImageLockIcon;
  } else if (require(dependencyMap[0]).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return require(dependencyMap[6]).AnnouncementsLockIcon;
  } else {
    return require(dependencyMap[1]).TextLockIcon;
  }
};
