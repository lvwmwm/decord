// Module ID: 14560
// Function ID: 109702
// Name: items
// Dependencies: []
// Exports: getGuildDCString, getUserDCString

// Module 14560 (items)
const items = [require(dependencyMap[0]).DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK, require(dependencyMap[0]).DismissibleContent.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, require(dependencyMap[0]).DismissibleContent.GUILD_POWERUP_NOTIFICATION, require(dependencyMap[0]).DismissibleContent.GUILD_TAG_AVAILABLE_COACHMARK, require(dependencyMap[0]).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK, require(dependencyMap[0]).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE];
const items1 = [require(dependencyMap[0]).DismissibleGuildContent.GUILD_POWERUP_LEVEL_1_COACHMARK, require(dependencyMap[0]).DismissibleGuildContent.GUILD_POWERUP_LEVEL_2_COACHMARK, require(dependencyMap[0]).DismissibleGuildContent.GUILD_POWERUP_LEVEL_3_COACHMARK, require(dependencyMap[0]).DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, require(dependencyMap[0]).DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK];
const items2 = [require(dependencyMap[0]).DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE];
const items3 = [require(dependencyMap[0]).DismissibleContent.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, require(dependencyMap[0]).DismissibleContent.VANITY_URL_POWERUP_ROLLBACK_MODAL, require(dependencyMap[0]).DismissibleContent.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER];
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/devtools/DevToolsGuildPowerupsConstants.tsx");

export const USER_DCS = items;
export const GUILD_DCS = items1;
export const SERVER_TAG_GUILD_DCS = items2;
export const VANITY_URL_POWERUP_DCS = items3;
export const getGuildDCString = function getGuildDCString(arg0) {
  if (require(dependencyMap[0]).DismissibleGuildContent.GUILD_POWERUP_LEVEL_1_COACHMARK === arg0) {
    return "GUILD_POWERUP_LEVEL_1_COACHMARK";
  } else if (require(dependencyMap[0]).DismissibleGuildContent.GUILD_POWERUP_LEVEL_2_COACHMARK === arg0) {
    return "GUILD_POWERUP_LEVEL_2_COACHMARK";
  } else if (require(dependencyMap[0]).DismissibleGuildContent.GUILD_POWERUP_LEVEL_3_COACHMARK === arg0) {
    return "GUILD_POWERUP_LEVEL_3_COACHMARK";
  } else if (require(dependencyMap[0]).DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK === arg0) {
    return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
  } else if (require(dependencyMap[0]).DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK === arg0) {
    return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
  } else if (require(dependencyMap[0]).DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE === arg0) {
    return "ADOPT_CLAN_IDENTITY_NOTICE";
  } else {
    const _String = String;
    return String(arg0);
  }
};
export const getUserDCString = function getUserDCString(arg0) {
  let StringResult = require(dependencyMap[0]).DismissibleContent[arg0];
  if (null == StringResult) {
    const _String = String;
    StringResult = String(arg0);
  }
  return StringResult;
};
