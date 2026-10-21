// Module ID: 13334
// Function ID: 13335
// Name: GuildBoostingMarketingUtils
// Dependencies: [1394, 9308, 13335, 10106, 13337, 13339, 9762, 8950, 12424, 9907, 8544, 13340, 2]
// Exports: getIconForPerk

// Module 13334 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import StageIcon from "StageIcon" /* 8544 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8950 */;
import ReactionIcon from "ReactionIcon" /* 9308 */;
import UploadIcon from "UploadIcon" /* 9762 */;
import StarIcon from "StarIcon" /* 9907 */;
import GifIcon from "GifIcon" /* 10106 */;
import ImagesIcon from "ImagesIcon" /* 12424 */;
import SoundboardIcon from "SoundboardIcon" /* 13335 */;
import HeadphonesIcon from "HeadphonesIcon" /* 13337 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 13339 */;
import StickerIcon from "StickerIcon" /* 13340 */;
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
