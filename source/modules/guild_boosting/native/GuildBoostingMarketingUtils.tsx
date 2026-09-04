// Module ID: 12459
// Function ID: 12460
// Name: getIconForPerk
// Dependencies: [4372, 8687, 12460, 10310, 12462, 12464, 9300, 9681, 11631, 10164, 5058, 10043, 2]
// Exports: getIconForPerk

// Module 12459 (getIconForPerk)
import set from "set" /* 2 */;
import getGuildTierFromGuild from "getGuildTierFromGuild" /* 4372 */;

const result = set.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(8687).ReactionIcon;
  } else if (tmp(4372).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12460).SoundboardIcon;
  } else if (tmp(4372).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10310).GifIcon;
  } else if (tmp(4372).PerkIcons.AUDIO === perkIcon) {
    return tmp(12462).HeadphonesIcon;
  } else if (tmp(4372).PerkIcons.STREAM === perkIcon) {
    return tmp(12464).ScreenArrowIcon;
  } else if (tmp(4372).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9300).UploadIcon;
  } else if (tmp(4372).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9681).ShieldUserIcon;
  } else if (tmp(4372).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11631).ImagesIcon;
  } else if (tmp(4372).PerkIcons.VANITY === perkIcon) {
    return tmp(10164).StarIcon;
  } else if (tmp(4372).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5058).StageIcon;
  } else if (tmp(4372).PerkIcons.STICKER === perkIcon) {
    return tmp(10043).StickerIcon;
  } else {
    return tmp(8687).ReactionIcon;
  }
};
