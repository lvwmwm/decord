// Module ID: 11931
// Function ID: 11932
// Name: GuildBoostingMarketingUtils
// Dependencies: [4730, 8216, 11932, 9876, 11934, 11936, 8671, 9010, 11066, 9716, 5412, 11937, 2]
// Exports: getIconForPerk

// Module 11931 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4730 */;
import StageIcon from "StageIcon" /* 5412 */;
import ReactionIcon from "ReactionIcon" /* 8216 */;
import UploadIcon from "UploadIcon" /* 8671 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9010 */;
import StarIcon from "StarIcon" /* 9716 */;
import GifIcon from "GifIcon" /* 9876 */;
import ImagesIcon from "ImagesIcon" /* 11066 */;
import SoundboardIcon from "SoundboardIcon" /* 11932 */;
import HeadphonesIcon from "HeadphonesIcon" /* 11934 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 11936 */;
import StickerIcon from "StickerIcon" /* 11937 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return ReactionIcon.ReactionIcon;
  } else if (GuildBoostingUtils.PerkIcons.SOUNDBOARD === perkIcon) {
    return SoundboardIcon.SoundboardIcon;
  } else if (GuildBoostingUtils.PerkIcons.ANIMATED === perkIcon) {
    return GifIcon.GifIcon;
  } else if (GuildBoostingUtils.PerkIcons.AUDIO === perkIcon) {
    return HeadphonesIcon.HeadphonesIcon;
  } else if (GuildBoostingUtils.PerkIcons.STREAM === perkIcon) {
    return ScreenArrowIcon.ScreenArrowIcon;
  } else if (GuildBoostingUtils.PerkIcons.UPLOAD === perkIcon) {
    return UploadIcon.UploadIcon;
  } else if (GuildBoostingUtils.PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return ShieldUserIcon.ShieldUserIcon;
  } else if (GuildBoostingUtils.PerkIcons.CUSTOMIZATION === perkIcon) {
    return ImagesIcon.ImagesIcon;
  } else if (GuildBoostingUtils.PerkIcons.VANITY === perkIcon) {
    return StarIcon.StarIcon;
  } else if (GuildBoostingUtils.PerkIcons.STAGE_VIDEO === perkIcon) {
    return StageIcon.StageIcon;
  } else if (GuildBoostingUtils.PerkIcons.STICKER === perkIcon) {
    return StickerIcon.StickerIcon;
  } else {
    return ReactionIcon.ReactionIcon;
  }
};
