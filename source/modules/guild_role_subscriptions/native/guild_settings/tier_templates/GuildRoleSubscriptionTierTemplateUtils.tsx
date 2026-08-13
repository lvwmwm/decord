// Module ID: 16946
// Function ID: 16947
// Name: getPrivateChannelIconComponent
// Dependencies: [692, 4848, 4867, 4865, 4855, 4854, 4862, 2]
// Exports: getPrivateChannelIconComponent

// Module 16946 (getPrivateChannelIconComponent)
const result = require("VoiceLockIcon").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (require(692) /* set */.ChannelTypes.GUILD_TEXT === type) {
    return tmp(4848).TextLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_VOICE === type) {
    return tmp(4867).VoiceLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(4865).StageLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_FORUM === type) {
    return tmp(4855).ForumLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(4854).ImageLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(4862).AnnouncementsLockIcon;
  } else {
    return tmp(4848).TextLockIcon;
  }
};
