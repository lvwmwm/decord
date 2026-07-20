// Module ID: 13734
// Function ID: 103896
// Name: getConnectionBackgroundColor
// Dependencies: []
// Exports: getConnectionBackgroundColor

// Module 13734 (getConnectionBackgroundColor)
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
const obj = { [CRUNCHYROLL]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_CRUNCHYROLL, [PLAYSTATION_STAGING]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_PLAYSTATION, [PLAYSTATION]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_PLAYSTATION, [GITHUB]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_GITHUB, [SAMSUNG]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_SAMSUNG, [XBOX]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_XBOX, [SPOTIFY]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_SPOTIFY, [TWITTER_LEGACY]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_TWITTER, [TWITTER]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_TWITTER, [FACEBOOK]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_FACEBOOK, [REDDIT]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_REDDIT, [STEAM]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_STEAM, [LEAGUE_OF_LEGENDS]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_LOL, [SKYPE]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_SKYPE, [BUNGIE]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_BUNGIE, [BATTLENET]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_BATTLENET, [YOUTUBE]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_YOUTUBE, [TWITCH]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_TWITCH };
({ CRUNCHYROLL, PLAYSTATION_STAGING, PLAYSTATION, GITHUB, SAMSUNG, XBOX, SPOTIFY, TWITTER_LEGACY, TWITTER, FACEBOOK, REDDIT, STEAM, LEAGUE_OF_LEGENDS, SKYPE, BUNGIE, BATTLENET, YOUTUBE, TWITCH } = require(dependencyMap[0]).PlatformTypes);
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/connections/native/ConnectionPlatformUtils.native.tsx");

export const getConnectionBackgroundColor = function getConnectionBackgroundColor(type) {
  return obj[type];
};
