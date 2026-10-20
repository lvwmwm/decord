// Module ID: 12268
// Function ID: 12269
// Name: GuildBoostingMarketingUtils
// Dependencies: [1392, 8956, 12269, 9748, 12271, 12273, 9401, 8617, 11587, 9549, 8220, 12274, 2]
// Exports: getIconForPerk

// Module 12268 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import StageIcon from "StageIcon" /* 8220 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8617 */;
import ReactionIcon from "ReactionIcon" /* 8956 */;
import UploadIcon from "UploadIcon" /* 9401 */;
import StarIcon from "StarIcon" /* 9549 */;
import GifIcon from "GifIcon" /* 9748 */;
import ImagesIcon from "ImagesIcon" /* 11587 */;
import SoundboardIcon from "SoundboardIcon" /* 12269 */;
import HeadphonesIcon from "HeadphonesIcon" /* 12271 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 12273 */;
import StickerIcon from "StickerIcon" /* 12274 */;
import size from "module_2" /* 2 */;

const PerkIcons = PremiumConstants.PerkIcons;
const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (PerkIcons.EMOJI === perkIcon) {
    return ReactionIcon.ReactionIcon;
  } else if (PerkIcons.SOUNDBOARD === perkIcon) {
    return SoundboardIcon.SoundboardIcon;
  } else if (PerkIcons.ANIMATED === perkIcon) {
    return GifIcon.GifIcon;
  } else if (PerkIcons.AUDIO === perkIcon) {
    return HeadphonesIcon.HeadphonesIcon;
  } else if (PerkIcons.STREAM === perkIcon) {
    return ScreenArrowIcon.ScreenArrowIcon;
  } else if (PerkIcons.UPLOAD === perkIcon) {
    return UploadIcon.UploadIcon;
  } else if (PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return ShieldUserIcon.ShieldUserIcon;
  } else if (PerkIcons.CUSTOMIZATION === perkIcon) {
    return ImagesIcon.ImagesIcon;
  } else if (PerkIcons.VANITY === perkIcon) {
    return StarIcon.StarIcon;
  } else if (PerkIcons.STAGE_VIDEO === perkIcon) {
    return StageIcon.StageIcon;
  } else if (PerkIcons.STICKER === perkIcon) {
    return StickerIcon.StickerIcon;
  } else {
    return ReactionIcon.ReactionIcon;
  }
};
