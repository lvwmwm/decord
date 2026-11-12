// Module ID: 14376
// Function ID: 14377
// Name: GuildBoostingMarketingUtils
// Dependencies: [1387, 9566, 14377, 10411, 14379, 14381, 10071, 9172, 13049, 10216, 8773, 11206, 2]
// Exports: getIconForPerk

// Module 14376 (GuildBoostingMarketingUtils)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import StageIcon from "StageIcon" /* 8773 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9172 */;
import ReactionIcon from "ReactionIcon" /* 9566 */;
import UploadIcon from "UploadIcon" /* 10071 */;
import StarIcon from "StarIcon" /* 10216 */;
import GifIcon from "GifIcon" /* 10411 */;
import StickerIcon from "StickerIcon" /* 11206 */;
import ImagesIcon from "ImagesIcon" /* 13049 */;
import SoundboardIcon from "SoundboardIcon" /* 14377 */;
import HeadphonesIcon from "HeadphonesIcon" /* 14379 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 14381 */;
import size from "module_2" /* 2 */;

const PerkIcons = PremiumConstants.PerkIcons;
const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export function getIconForPerk(perkIcon) {
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
}
