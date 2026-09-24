// Module ID: 12726
// Function ID: 12727
// Name: GuildBoostingMarketingUtils
// Dependencies: [4684, 9067, 12727, 10709, 12729, 12731, 9515, 9850, 11860, 10551, 5349, 12732, 2]
// Exports: getIconForPerk

// Module 12726 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4684 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(9067).ReactionIcon;
  } else if (tmp(4684).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12727).SoundboardIcon;
  } else if (tmp(4684).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10709).GifIcon;
  } else if (tmp(4684).PerkIcons.AUDIO === perkIcon) {
    return tmp(12729).HeadphonesIcon;
  } else if (tmp(4684).PerkIcons.STREAM === perkIcon) {
    return tmp(12731).ScreenArrowIcon;
  } else if (tmp(4684).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9515).UploadIcon;
  } else if (tmp(4684).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9850).ShieldUserIcon;
  } else if (tmp(4684).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11860).ImagesIcon;
  } else if (tmp(4684).PerkIcons.VANITY === perkIcon) {
    return tmp(10551).StarIcon;
  } else if (tmp(4684).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5349).StageIcon;
  } else if (tmp(4684).PerkIcons.STICKER === perkIcon) {
    return tmp(12732).StickerIcon;
  } else {
    return tmp(9067).ReactionIcon;
  }
};
