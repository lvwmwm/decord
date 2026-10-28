// Module ID: 19641
// Function ID: 19642
// Name: GuildRoleSubscriptionTierTemplateUtils
// Dependencies: [1105, 8586, 8606, 8604, 8594, 8593, 8601, 2]
// Exports: getPrivateChannelIconComponent

// Module 19641 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1105 */;
import TextLockIcon from "TextLockIcon" /* 8586 */;
import ImageLockIcon from "ImageLockIcon" /* 8593 */;
import ForumLockIcon from "ForumLockIcon" /* 8594 */;
import AnnouncementsLockIcon from "AnnouncementsLockIcon" /* 8601 */;
import StageLockIcon from "StageLockIcon" /* 8604 */;
import VoiceLockIcon from "VoiceLockIcon" /* 8606 */;
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
