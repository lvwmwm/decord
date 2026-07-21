// Module ID: 11549
// Function ID: 89894
// Name: getIconForPerk
// Dependencies: [57, 31, 11509, 2, 31, 1838, 4015, 4016, 566, 4035, 1327, 2, 5]
// Exports: getIconForPerk

// Module 11549 (getIconForPerk)
import asyncGeneratorStep from "asyncGeneratorStep";

const result = asyncGeneratorStep.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (require(dependencyMap[0]).PerkIcons.EMOJI === perkIcon) {
    return require(dependencyMap[1]).ReactionIcon;
  } else if (require(dependencyMap[0]).PerkIcons.SOUNDBOARD === perkIcon) {
    return require(dependencyMap[2]).SoundboardIcon;
  } else if (require(dependencyMap[0]).PerkIcons.ANIMATED === perkIcon) {
    return require(dependencyMap[3]).GifIcon;
  } else if (require(dependencyMap[0]).PerkIcons.AUDIO === perkIcon) {
    return require(dependencyMap[4]).HeadphonesIcon;
  } else if (require(dependencyMap[0]).PerkIcons.STREAM === perkIcon) {
    return require(dependencyMap[5]).ScreenArrowIcon;
  } else if (require(dependencyMap[0]).PerkIcons.UPLOAD === perkIcon) {
    return require(dependencyMap[6]).UploadIcon;
  } else if (require(dependencyMap[0]).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return require(dependencyMap[7]).ShieldUserIcon;
  } else if (require(dependencyMap[0]).PerkIcons.CUSTOMIZATION === perkIcon) {
    return require(dependencyMap[8]).ImagesIcon;
  } else if (require(dependencyMap[0]).PerkIcons.VANITY === perkIcon) {
    return require(dependencyMap[9]).StarIcon;
  } else if (require(dependencyMap[0]).PerkIcons.STAGE_VIDEO === perkIcon) {
    return require(dependencyMap[10]).StageIcon;
  } else if (require(dependencyMap[0]).PerkIcons.STICKER === perkIcon) {
    return require(dependencyMap[11]).StickerIcon;
  } else {
    return require(dependencyMap[1]).ReactionIcon;
  }
};
