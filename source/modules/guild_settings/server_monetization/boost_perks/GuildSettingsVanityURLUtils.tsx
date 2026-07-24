// Module ID: 16260
// Function ID: 126240
// Name: getErrorMessageFromErrorCode
// Dependencies: [653, 1212, 2]
// Exports: canSeeVanityUrlSettings, getErrorMessageFromErrorCode

// Module 16260 (getErrorMessageFromErrorCode)
import ME from "ME";

let closure_2;
let closure_3;
({ AbortCodes: closure_2, GuildFeatures: closure_3 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLUtils.tsx");

export const getErrorMessageFromErrorCode = function getErrorMessageFromErrorCode(code) {
  if (constants.UNKNOWN_CHANNEL === code) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t.ETCmRa);
  } else if (constants.INVALID_PERMISSIONS === code) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t.lXtut1);
  } else if (constants.INVALID_ACCESS === code) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.TAXOKw);
  } else if (constants.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS === code) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.ZpuxVs);
  } else if (constants.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED === code) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.tSBmIv);
  } else if (constants.VANITY_URL_REQUIREMENTS_NOT_MET === code) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["w+yGQT"]);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.ckQidX);
  }
};
export const canSeeVanityUrlSettings = function canSeeVanityUrlSettings(guild) {
  const features = guild.features;
  let hasItem = features.has(constants2.VANITY_URL);
  if (!hasItem) {
    const features2 = guild.features;
    let hasItem1 = features2.has(constants2.GUILD_WEB_PAGE_VANITY_URL);
    if (hasItem1) {
      hasItem1 = null != guild.vanityURLCode;
    }
    hasItem = hasItem1;
  }
  return hasItem;
};
