// Module ID: 18958
// Function ID: 18959
// Name: getIconForChannel
// Dependencies: [1072, 8770, 8777, 8773, 8756, 8764, 8763, 2]
// Exports: getIconForChannel

// Module 18958 (getIconForChannel)
import Constants from "Constants" /* 1072 */;
import TextIcon from "TextIcon" /* 8756 */;
import ImageIcon from "ImageIcon" /* 8763 */;
import ForumIcon from "ForumIcon" /* 8764 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 8770 */;
import StageIcon from "StageIcon" /* 8773 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8777 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export function getIconForChannel(stateFromStores) {
  const type = stateFromStores.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return AnnouncementsIcon.AnnouncementsIcon;
  } else if (ChannelTypes.GUILD_VOICE === type) {
    return VoiceNormalIcon.VoiceNormalIcon;
  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
    return StageIcon.StageIcon;
  } else if (ChannelTypes.GUILD_TEXT === type) {
    return TextIcon.TextIcon;
  } else if (ChannelTypes.GUILD_FORUM === type) {
    return ForumIcon.ForumIcon;
  } else if (ChannelTypes.GUILD_MEDIA === type) {
    return ImageIcon.ImageIcon;
  } else {
    return TextIcon.TextIcon;
  }
}
