// Module ID: 16088
// Function ID: 123701
// Name: getErrorMessageFromErrorCode
// Dependencies: []
// Exports: canSeeVanityUrlSettings, getErrorMessageFromErrorCode

// Module 16088 (getErrorMessageFromErrorCode)
const _module = require(dependencyMap[0]);
({ AbortCodes: closure_2, GuildFeatures: closure_3 } = _module);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLUtils.tsx");

export const getErrorMessageFromErrorCode = function getErrorMessageFromErrorCode(code) {
  if (constants.UNKNOWN_CHANNEL === code) {
    const intl7 = require(dependencyMap[1]).intl;
    return intl7.string(require(dependencyMap[1]).t.ETCmRa);
  } else if (constants.INVALID_PERMISSIONS === code) {
    const intl6 = require(dependencyMap[1]).intl;
    return intl6.string(require(dependencyMap[1]).t.lXtut1);
  } else if (constants.INVALID_ACCESS === code) {
    const intl5 = require(dependencyMap[1]).intl;
    return intl5.string(require(dependencyMap[1]).t.TAXOKw);
  } else if (constants.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS === code) {
    const intl4 = require(dependencyMap[1]).intl;
    return intl4.string(require(dependencyMap[1]).t.ZpuxVs);
  } else if (constants.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED === code) {
    const intl3 = require(dependencyMap[1]).intl;
    return intl3.string(require(dependencyMap[1]).t.tSBmIv);
  } else if (constants.VANITY_URL_REQUIREMENTS_NOT_MET === code) {
    const intl2 = require(dependencyMap[1]).intl;
    return intl2.string(require(dependencyMap[1]).t.w+yGQT);
  } else {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.ckQidX);
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
