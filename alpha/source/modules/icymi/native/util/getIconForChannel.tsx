// Module ID: 16897
// Function ID: 16898
// Name: getIconForChannel
// Dependencies: [1074, 5398, 5405, 5401, 5384, 5392, 5391, 2]
// Exports: getIconForChannel

// Module 16897 (getIconForChannel)
import Constants from "Constants" /* 1074 */;
import TextIcon from "TextIcon" /* 5384 */;
import ImageIcon from "ImageIcon" /* 5391 */;
import ForumIcon from "ForumIcon" /* 5392 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5398 */;
import StageIcon from "StageIcon" /* 5401 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5405 */;
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
