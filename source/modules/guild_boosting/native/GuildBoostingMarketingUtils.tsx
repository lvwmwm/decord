// Module ID: 11595
// Function ID: 90082
// Name: getIconForPerk
// Dependencies: [4057, 6555, 6611, 9591, 11596, 11598, 6558, 8262, 9901, 9395, 4689, 6608, 2]
// Exports: getIconForPerk

// Module 11595 (getIconForPerk)
const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (require(4057) /* _createForOfIteratorHelperLoose */.PerkIcons.EMOJI === perkIcon) {
    return require(6555) /* ReactionIcon */.ReactionIcon;
  } else if (require(4057) /* _createForOfIteratorHelperLoose */.PerkIcons.SOUNDBOARD === perkIcon) {
    return require(6611) /* SoundboardIcon */.SoundboardIcon;
  } else if (require(4057) /* _createForOfIteratorHelperLoose */.PerkIcons.ANIMATED === perkIcon) {
    return require(9591) /* GifIcon */.GifIcon;
  } else if (require(4057) /* _createForOfIteratorHelperLoose */.PerkIcons.AUDIO === perkIcon) {
    return require(11596) /* HeadphonesIcon */.HeadphonesIcon;
  } else if (require(4057) /* _createForOfIteratorHelperLoose */.PerkIcons.STREAM === perkIcon) {
    return require(11598) /* ScreenArrowIcon */.ScreenArrowIcon;
  } else if (require(4057) /* _createForOfIteratorHelperLoose */.PerkIcons.UPLOAD === perkIcon) {
    return require(6558) /* UploadIcon */.UploadIcon;
  } else if (require(4057) /* _createForOfIteratorHelperLoose */.PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return require(8262) /* ShieldUserIcon */.ShieldUserIcon;
  } else if (require(4057) /* _createForOfIteratorHelperLoose */.PerkIcons.CUSTOMIZATION === perkIcon) {
    return require(9901) /* ImagesIcon */.ImagesIcon;
  } else if (require(4057) /* _createForOfIteratorHelperLoose */.PerkIcons.VANITY === perkIcon) {
    return require(9395) /* StarIcon */.StarIcon;
  } else if (require(4057) /* _createForOfIteratorHelperLoose */.PerkIcons.STAGE_VIDEO === perkIcon) {
    return require(4689) /* StageIcon */.StageIcon;
  } else if (require(4057) /* _createForOfIteratorHelperLoose */.PerkIcons.STICKER === perkIcon) {
    return require(6608) /* StickerIcon */.StickerIcon;
  } else {
    return require(6555) /* ReactionIcon */.ReactionIcon;
  }
};
