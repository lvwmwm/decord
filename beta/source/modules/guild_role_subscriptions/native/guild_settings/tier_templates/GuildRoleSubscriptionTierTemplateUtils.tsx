// Module ID: 17617
// Function ID: 17618
// Name: GuildRoleSubscriptionTierTemplateUtils
// Dependencies: [1107, 5393, 5413, 5411, 5401, 5400, 5408, 2]
// Exports: getPrivateChannelIconComponent

// Module 17617 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1107 */;
import TextLockIcon from "TextLockIcon" /* 5393 */;
import ImageLockIcon from "ImageLockIcon" /* 5400 */;
import ForumLockIcon from "ForumLockIcon" /* 5401 */;
import AnnouncementsLockIcon from "AnnouncementsLockIcon" /* 5408 */;
import StageLockIcon from "StageLockIcon" /* 5411 */;
import VoiceLockIcon from "VoiceLockIcon" /* 5413 */;
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
