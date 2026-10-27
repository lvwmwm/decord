// Module ID: 13211
// Function ID: 13212
// Name: GuildBoostingMarketingUtils
// Dependencies: [1394, 9252, 13212, 10051, 13214, 13216, 9705, 8895, 12328, 9851, 8497, 13217, 2]
// Exports: getIconForPerk

// Module 13211 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import StageIcon from "StageIcon" /* 8497 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8895 */;
import ReactionIcon from "ReactionIcon" /* 9252 */;
import UploadIcon from "UploadIcon" /* 9705 */;
import StarIcon from "StarIcon" /* 9851 */;
import GifIcon from "GifIcon" /* 10051 */;
import ImagesIcon from "ImagesIcon" /* 12328 */;
import SoundboardIcon from "SoundboardIcon" /* 13212 */;
import HeadphonesIcon from "HeadphonesIcon" /* 13214 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 13216 */;
import StickerIcon from "StickerIcon" /* 13217 */;
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
