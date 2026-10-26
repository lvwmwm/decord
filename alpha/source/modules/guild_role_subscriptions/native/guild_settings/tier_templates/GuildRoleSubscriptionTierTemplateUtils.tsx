// Module ID: 19330
// Function ID: 19331
// Name: GuildRoleSubscriptionTierTemplateUtils
// Dependencies: [1108, 8549, 8569, 8567, 8557, 8556, 8564, 2]
// Exports: getPrivateChannelIconComponent

// Module 19330 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1108 */;
import TextLockIcon from "TextLockIcon" /* 8549 */;
import ImageLockIcon from "ImageLockIcon" /* 8556 */;
import ForumLockIcon from "ForumLockIcon" /* 8557 */;
import AnnouncementsLockIcon from "AnnouncementsLockIcon" /* 8564 */;
import StageLockIcon from "StageLockIcon" /* 8567 */;
import VoiceLockIcon from "VoiceLockIcon" /* 8569 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (ChannelTypes.ChannelTypes.GUILD_TEXT === type) {
    return TextLockIcon.TextLockIcon;
  } else if (ChannelTypes.ChannelTypes.GUILD_VOICE === type) {
    return VoiceLockIcon.VoiceLockIcon;
  } else if (ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE === type) {
    return StageLockIcon.StageLockIcon;
  } else if (ChannelTypes.ChannelTypes.GUILD_FORUM === type) {
    return ForumLockIcon.ForumLockIcon;
  } else if (ChannelTypes.ChannelTypes.GUILD_MEDIA === type) {
    return ImageLockIcon.ImageLockIcon;
  } else if (ChannelTypes.ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return AnnouncementsLockIcon.AnnouncementsLockIcon;
  } else {
    return TextLockIcon.TextLockIcon;
  }
};
