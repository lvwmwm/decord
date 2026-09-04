// Module ID: 17707
// Function ID: 17708
// Name: getPrivateChannelIconComponent
// Dependencies: [689, 5039, 5059, 5057, 5047, 5046, 5054, 2]
// Exports: getPrivateChannelIconComponent

// Module 17707 (getPrivateChannelIconComponent)
import set from "set" /* 2 */;
import set2 from "set" /* 689 */;

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (set2.ChannelTypes.GUILD_TEXT === type) {
    return tmp(5039).TextLockIcon;
  } else if (tmp(689).ChannelTypes.GUILD_VOICE === type) {
    return tmp(5059).VoiceLockIcon;
  } else if (tmp(689).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(5057).StageLockIcon;
  } else if (tmp(689).ChannelTypes.GUILD_FORUM === type) {
    return tmp(5047).ForumLockIcon;
  } else if (tmp(689).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(5046).ImageLockIcon;
  } else if (tmp(689).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(5054).AnnouncementsLockIcon;
  } else {
    return tmp(5039).TextLockIcon;
  }
};
