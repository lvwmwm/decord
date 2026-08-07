// Module ID: 11821
// Function ID: 11822
// Name: getIconForPerk
// Dependencies: [4194, 7595, 7649, 9884, 11822, 11824, 7598, 8946, 10195, 8684, 4823, 7646, 2]
// Exports: getIconForPerk

// Module 11821 (getIconForPerk)
const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (require(4194) /* getGuildTierFromGuild */.PerkIcons.EMOJI === perkIcon) {
    return tmp(7595).ReactionIcon;
  } else if (tmp(4194).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(7649).SoundboardIcon;
  } else if (tmp(4194).PerkIcons.ANIMATED === perkIcon) {
    return tmp(9884).GifIcon;
  } else if (tmp(4194).PerkIcons.AUDIO === perkIcon) {
    return tmp(11822).HeadphonesIcon;
  } else if (tmp(4194).PerkIcons.STREAM === perkIcon) {
    return tmp(11824).ScreenArrowIcon;
  } else if (tmp(4194).PerkIcons.UPLOAD === perkIcon) {
    return tmp(7598).UploadIcon;
  } else if (tmp(4194).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(8946).ShieldUserIcon;
  } else if (tmp(4194).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(10195).ImagesIcon;
  } else if (tmp(4194).PerkIcons.VANITY === perkIcon) {
    return tmp(8684).StarIcon;
  } else if (tmp(4194).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4823).StageIcon;
  } else if (tmp(4194).PerkIcons.STICKER === perkIcon) {
    return tmp(7646).StickerIcon;
  } else {
    return tmp(7595).ReactionIcon;
  }
};
