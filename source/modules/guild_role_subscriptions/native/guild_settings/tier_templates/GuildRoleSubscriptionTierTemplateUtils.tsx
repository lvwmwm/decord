// Module ID: 17302
// Function ID: 17303
// Name: getPrivateChannelIconComponent
// Dependencies: [692, 4992, 5012, 5010, 5000, 4999, 5007, 2]
// Exports: getPrivateChannelIconComponent

// Module 17302 (getPrivateChannelIconComponent)
import set from "set" /* 2 */;
import set2 from "set" /* 692 */;

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (set2.ChannelTypes.GUILD_TEXT === type) {
    return tmp(4992).TextLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_VOICE === type) {
    return tmp(5012).VoiceLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(5010).StageLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_FORUM === type) {
    return tmp(5000).ForumLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(4999).ImageLockIcon;
  } else if (tmp(692).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(5007).AnnouncementsLockIcon;
  } else {
    return tmp(4992).TextLockIcon;
  }
};
