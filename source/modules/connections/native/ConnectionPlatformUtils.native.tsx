// Module ID: 13915
// Function ID: 106454
// Name: getConnectionBackgroundColor
// Dependencies: [653, 689, 2]
// Exports: getConnectionBackgroundColor

// Module 13915 (getConnectionBackgroundColor)
let BATTLENET;
let BUNGIE;
let CRUNCHYROLL;
let FACEBOOK;
let GITHUB;
let LEAGUE_OF_LEGENDS;
let PLAYSTATION;
let PLAYSTATION_STAGING;
let REDDIT;
let SAMSUNG;
let SKYPE;
let SPOTIFY;
let STEAM;
let TWITCH;
let TWITTER;
let TWITTER_LEGACY;
let XBOX;
let YOUTUBE;
const obj = { [CRUNCHYROLL]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_CRUNCHYROLL, [PLAYSTATION_STAGING]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_PLAYSTATION, [PLAYSTATION]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_PLAYSTATION, [GITHUB]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_GITHUB, [SAMSUNG]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_SAMSUNG, [XBOX]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_XBOX, [SPOTIFY]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_SPOTIFY, [TWITTER_LEGACY]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_TWITTER, [TWITTER]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_TWITTER, [FACEBOOK]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_FACEBOOK, [REDDIT]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_REDDIT, [STEAM]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_STEAM, [LEAGUE_OF_LEGENDS]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_LOL, [SKYPE]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_SKYPE, [BUNGIE]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_BUNGIE, [BATTLENET]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_BATTLENET, [YOUTUBE]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_YOUTUBE, [TWITCH]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_TWITCH };
({ CRUNCHYROLL, PLAYSTATION_STAGING, PLAYSTATION, GITHUB, SAMSUNG, XBOX, SPOTIFY, TWITTER_LEGACY, TWITTER, FACEBOOK, REDDIT, STEAM, LEAGUE_OF_LEGENDS, SKYPE, BUNGIE, BATTLENET, YOUTUBE, TWITCH } = require("ME").PlatformTypes);
const result = require("set").fileFinishedImporting("modules/connections/native/ConnectionPlatformUtils.native.tsx");

export const getConnectionBackgroundColor = function getConnectionBackgroundColor(type) {
  return obj[type];
};
