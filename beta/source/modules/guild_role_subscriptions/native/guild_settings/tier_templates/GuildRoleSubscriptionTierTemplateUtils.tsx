// Module ID: 20449
// Function ID: 20450
// Name: GuildRoleSubscriptionTierTemplateUtils
// Dependencies: [1093, 8754, 8774, 8772, 8762, 8761, 8769, 2]
// Exports: getPrivateChannelIconComponent

// Module 20449 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1093 */;
import TextLockIcon from "TextLockIcon" /* 8754 */;
import ImageLockIcon from "ImageLockIcon" /* 8761 */;
import ForumLockIcon from "ForumLockIcon" /* 8762 */;
import AnnouncementsLockIcon from "AnnouncementsLockIcon" /* 8769 */;
import StageLockIcon from "StageLockIcon" /* 8772 */;
import VoiceLockIcon from "VoiceLockIcon" /* 8774 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export function getPrivateChannelIconComponent(type) {
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
}
