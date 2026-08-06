// Module ID: 11806
// Function ID: 11807
// Name: getIconForPerk
// Dependencies: [4177, 7576, 7630, 9868, 11807, 11809, 7579, 8929, 10179, 8667, 4806, 7627, 2]
// Exports: getIconForPerk

// Module 11806 (getIconForPerk)
const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (require(4177) /* getGuildTierFromGuild */.PerkIcons.EMOJI === perkIcon) {
    return tmp(7576).ReactionIcon;
  } else if (tmp(4177).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(7630).SoundboardIcon;
  } else if (tmp(4177).PerkIcons.ANIMATED === perkIcon) {
    return tmp(9868).GifIcon;
  } else if (tmp(4177).PerkIcons.AUDIO === perkIcon) {
    return tmp(11807).HeadphonesIcon;
  } else if (tmp(4177).PerkIcons.STREAM === perkIcon) {
    return tmp(11809).ScreenArrowIcon;
  } else if (tmp(4177).PerkIcons.UPLOAD === perkIcon) {
    return tmp(7579).UploadIcon;
  } else if (tmp(4177).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(8929).ShieldUserIcon;
  } else if (tmp(4177).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(10179).ImagesIcon;
  } else if (tmp(4177).PerkIcons.VANITY === perkIcon) {
    return tmp(8667).StarIcon;
  } else if (tmp(4177).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4806).StageIcon;
  } else if (tmp(4177).PerkIcons.STICKER === perkIcon) {
    return tmp(7627).StickerIcon;
  } else {
    return tmp(7576).ReactionIcon;
  }
};
