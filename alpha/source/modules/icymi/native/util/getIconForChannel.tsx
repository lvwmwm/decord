// Module ID: 16338
// Function ID: 16339
// Name: getIconForChannel
// Dependencies: [1074, 5604, 5611, 5607, 5590, 5598, 5597, 2]
// Exports: getIconForChannel

// Module 16338 (getIconForChannel)
import Constants from "Constants" /* 1074 */;
import TextIcon from "TextIcon" /* 5590 */;
import ImageIcon from "ImageIcon" /* 5597 */;
import ForumIcon from "ForumIcon" /* 5598 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5604 */;
import StageIcon from "StageIcon" /* 5607 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5611 */;
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
