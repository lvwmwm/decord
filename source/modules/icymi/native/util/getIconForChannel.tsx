// Module ID: 16418
// Function ID: 16419
// Name: getIconForChannel
// Dependencies: [673, 5055, 5062, 5058, 5041, 5049, 5048, 2]
// Exports: getIconForChannel

// Module 16418 (getIconForChannel)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import TextIcon from "TextIcon" /* 5041 */;
import ImageIcon from "ImageIcon" /* 5048 */;
import ForumIcon from "ForumIcon" /* 5049 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5055 */;
import StageIcon from "StageIcon" /* 5058 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5062 */;

const ChannelTypes = ME.ChannelTypes;
const result = set.fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(type) {
  type = type.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return AnnouncementsIcon.AnnouncementsIcon;
  } else if (tmp.GUILD_VOICE === type) {
    return VoiceNormalIcon.VoiceNormalIcon;
  } else if (tmp.GUILD_STAGE_VOICE === type) {
    return StageIcon.StageIcon;
  } else if (tmp.GUILD_TEXT === type) {
    return TextIcon.TextIcon;
  } else if (tmp.GUILD_FORUM === type) {
    return ForumIcon.ForumIcon;
  } else if (tmp.GUILD_MEDIA === type) {
    return ImageIcon.ImageIcon;
  } else {
    return TextIcon.TextIcon;
  }
};
