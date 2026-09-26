// Module ID: 16837
// Function ID: 16838
// Name: getIconForChannel
// Dependencies: [1074, 5344, 5351, 5347, 5330, 5338, 5337, 2]
// Exports: getIconForChannel

// Module 16837 (getIconForChannel)
import Constants from "Constants" /* 1074 */;
import TextIcon from "TextIcon" /* 5330 */;
import ImageIcon from "ImageIcon" /* 5337 */;
import ForumIcon from "ForumIcon" /* 5338 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5344 */;
import StageIcon from "StageIcon" /* 5347 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5351 */;
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
