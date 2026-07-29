// Module ID: 11619
// Function ID: 11620
// Name: getIconForPerk
// Dependencies: [4081, 6576, 6632, 9613, 11620, 11622, 6579, 8286, 9923, 9419, 4711, 6629, 2]
// Exports: getIconForPerk

// Module 11619 (getIconForPerk)
const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (require(4081) /* getGuildTierFromGuild */.PerkIcons.EMOJI === perkIcon) {
    return tmp(6576).ReactionIcon;
  } else if (tmp(4081).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(6632).SoundboardIcon;
  } else if (tmp(4081).PerkIcons.ANIMATED === perkIcon) {
    return tmp(9613).GifIcon;
  } else if (tmp(4081).PerkIcons.AUDIO === perkIcon) {
    return tmp(11620).HeadphonesIcon;
  } else if (tmp(4081).PerkIcons.STREAM === perkIcon) {
    return tmp(11622).ScreenArrowIcon;
  } else if (tmp(4081).PerkIcons.UPLOAD === perkIcon) {
    return tmp(6579).UploadIcon;
  } else if (tmp(4081).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(8286).ShieldUserIcon;
  } else if (tmp(4081).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(9923).ImagesIcon;
  } else if (tmp(4081).PerkIcons.VANITY === perkIcon) {
    return tmp(9419).StarIcon;
  } else if (tmp(4081).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4711).StageIcon;
  } else if (tmp(4081).PerkIcons.STICKER === perkIcon) {
    return tmp(6629).StickerIcon;
  } else {
    return tmp(6576).ReactionIcon;
  }
};
