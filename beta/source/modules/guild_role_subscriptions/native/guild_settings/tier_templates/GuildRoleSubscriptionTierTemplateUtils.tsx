// Module ID: 19368
// Function ID: 19369
// Name: GuildRoleSubscriptionTierTemplateUtils
// Dependencies: [1108, 8581, 8601, 8599, 8589, 8588, 8596, 2]
// Exports: getPrivateChannelIconComponent

// Module 19368 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1108 */;
import TextLockIcon from "TextLockIcon" /* 8581 */;
import ImageLockIcon from "ImageLockIcon" /* 8588 */;
import ForumLockIcon from "ForumLockIcon" /* 8589 */;
import AnnouncementsLockIcon from "AnnouncementsLockIcon" /* 8596 */;
import StageLockIcon from "StageLockIcon" /* 8599 */;
import VoiceLockIcon from "VoiceLockIcon" /* 8601 */;
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
