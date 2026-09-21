// Module ID: 16833
// Function ID: 16834
// Name: getIconForChannel
// Dependencies: [1074, 5312, 5319, 5315, 5298, 5306, 5305, 2]
// Exports: getIconForChannel

// Module 16833 (getIconForChannel)
import Constants from "Constants" /* 1074 */;
import TextIcon from "TextIcon" /* 5298 */;
import ImageIcon from "ImageIcon" /* 5305 */;
import ForumIcon from "ForumIcon" /* 5306 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5312 */;
import StageIcon from "StageIcon" /* 5315 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5319 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(stateFromStores) {
  const type = stateFromStores.type;
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
