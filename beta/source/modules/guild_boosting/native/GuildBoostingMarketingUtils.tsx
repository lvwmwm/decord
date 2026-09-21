// Module ID: 12781
// Function ID: 12782
// Name: GuildBoostingMarketingUtils
// Dependencies: [4649, 9037, 12782, 10640, 12784, 12786, 9485, 9840, 11952, 10493, 5315, 10370, 2]
// Exports: getIconForPerk

// Module 12781 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4649 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(9037).ReactionIcon;
  } else if (tmp(4649).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12782).SoundboardIcon;
  } else if (tmp(4649).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10640).GifIcon;
  } else if (tmp(4649).PerkIcons.AUDIO === perkIcon) {
    return tmp(12784).HeadphonesIcon;
  } else if (tmp(4649).PerkIcons.STREAM === perkIcon) {
    return tmp(12786).ScreenArrowIcon;
  } else if (tmp(4649).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9485).UploadIcon;
  } else if (tmp(4649).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9840).ShieldUserIcon;
  } else if (tmp(4649).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11952).ImagesIcon;
  } else if (tmp(4649).PerkIcons.VANITY === perkIcon) {
    return tmp(10493).StarIcon;
  } else if (tmp(4649).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5315).StageIcon;
  } else if (tmp(4649).PerkIcons.STICKER === perkIcon) {
    return tmp(10370).StickerIcon;
  } else {
    return tmp(9037).ReactionIcon;
  }
};
