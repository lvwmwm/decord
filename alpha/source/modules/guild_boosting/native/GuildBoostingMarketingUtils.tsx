// Module ID: 12194
// Function ID: 12195
// Name: GuildBoostingMarketingUtils
// Dependencies: [4728, 8384, 12195, 10009, 12197, 12199, 8839, 9198, 11364, 9865, 5577, 9740, 2]
// Exports: getIconForPerk

// Module 12194 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4728 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(8384).ReactionIcon;
  } else if (tmp(4728).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12195).SoundboardIcon;
  } else if (tmp(4728).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10009).GifIcon;
  } else if (tmp(4728).PerkIcons.AUDIO === perkIcon) {
    return tmp(12197).HeadphonesIcon;
  } else if (tmp(4728).PerkIcons.STREAM === perkIcon) {
    return tmp(12199).ScreenArrowIcon;
  } else if (tmp(4728).PerkIcons.UPLOAD === perkIcon) {
    return tmp(8839).UploadIcon;
  } else if (tmp(4728).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9198).ShieldUserIcon;
  } else if (tmp(4728).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11364).ImagesIcon;
  } else if (tmp(4728).PerkIcons.VANITY === perkIcon) {
    return tmp(9865).StarIcon;
  } else if (tmp(4728).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5577).StageIcon;
  } else if (tmp(4728).PerkIcons.STICKER === perkIcon) {
    return tmp(9740).StickerIcon;
  } else {
    return tmp(8384).ReactionIcon;
  }
};
