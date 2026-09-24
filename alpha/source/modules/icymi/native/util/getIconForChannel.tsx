// Module ID: 16921
// Function ID: 16922
// Name: getIconForChannel
// Dependencies: [1074, 5400, 5407, 5403, 5386, 5394, 5393, 2]
// Exports: getIconForChannel

// Module 16921 (getIconForChannel)
import Constants from "Constants" /* 1074 */;
import TextIcon from "TextIcon" /* 5386 */;
import ImageIcon from "ImageIcon" /* 5393 */;
import ForumIcon from "ForumIcon" /* 5394 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5400 */;
import StageIcon from "StageIcon" /* 5403 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5407 */;
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
