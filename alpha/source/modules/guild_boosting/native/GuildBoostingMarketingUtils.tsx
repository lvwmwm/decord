// Module ID: 12234
// Function ID: 12235
// Name: GuildBoostingMarketingUtils
// Dependencies: [1374, 8407, 12235, 10035, 12237, 12239, 8865, 9226, 11408, 9891, 5595, 9766, 2]
// Exports: getIconForPerk

// Module 12234 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import StageIcon from "StageIcon" /* 5595 */;
import ReactionIcon from "ReactionIcon" /* 8407 */;
import UploadIcon from "UploadIcon" /* 8865 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9226 */;
import StickerIcon from "StickerIcon" /* 9766 */;
import StarIcon from "StarIcon" /* 9891 */;
import GifIcon from "GifIcon" /* 10035 */;
import ImagesIcon from "ImagesIcon" /* 11408 */;
import SoundboardIcon from "SoundboardIcon" /* 12235 */;
import HeadphonesIcon from "HeadphonesIcon" /* 12237 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 12239 */;
import size from "module_2" /* 2 */;

const PerkIcons = PremiumConstants.PerkIcons;
const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (PerkIcons.EMOJI === perkIcon) {
    return ReactionIcon.ReactionIcon;
  } else if (tmp.SOUNDBOARD === perkIcon) {
    return SoundboardIcon.SoundboardIcon;
  } else if (tmp.ANIMATED === perkIcon) {
    return GifIcon.GifIcon;
  } else if (tmp.AUDIO === perkIcon) {
    return HeadphonesIcon.HeadphonesIcon;
  } else if (tmp.STREAM === perkIcon) {
    return ScreenArrowIcon.ScreenArrowIcon;
  } else if (tmp.UPLOAD === perkIcon) {
    return UploadIcon.UploadIcon;
  } else if (tmp.CUSTOM_ROLE_ICON === perkIcon) {
    return ShieldUserIcon.ShieldUserIcon;
  } else if (tmp.CUSTOMIZATION === perkIcon) {
    return ImagesIcon.ImagesIcon;
  } else if (tmp.VANITY === perkIcon) {
    return StarIcon.StarIcon;
  } else if (tmp.STAGE_VIDEO === perkIcon) {
    return StageIcon.StageIcon;
  } else if (tmp.STICKER === perkIcon) {
    return StickerIcon.StickerIcon;
  } else {
    return ReactionIcon.ReactionIcon;
  }
};
