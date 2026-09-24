// Module ID: 16852
// Function ID: 16853
// Name: getIconForChannel
// Dependencies: [1078, 5346, 5353, 5349, 5332, 5340, 5339, 2]
// Exports: getIconForChannel

// Module 16852 (getIconForChannel)
import Constants from "Constants" /* 1078 */;
import TextIcon from "TextIcon" /* 5332 */;
import ImageIcon from "ImageIcon" /* 5339 */;
import ForumIcon from "ForumIcon" /* 5340 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5346 */;
import StageIcon from "StageIcon" /* 5349 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5353 */;
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
