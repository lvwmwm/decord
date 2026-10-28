// Module ID: 5030
// Function ID: 5031
// Name: HexagonCampaignUtils
// Dependencies: [5028, 1991, 1411, 1412, 1398, 1400, 2]
// Exports: getHexagonCampaignPerkAvailability, getHexagonCampaignPerkCutoffMs, getHexagonCampaignRestoredDisplayNameStyles, hasHexagonCampaignDisplayNameFont, hasPerkOnlyFromHexagonCampaign, isEnrolledInHexagonCampaign, isHexagonCampaignClientThemePreset, isHexagonCampaignDisplayNameStyle, isHexagonCampaignOver, isHexagonCampaignPerkExpired, isHexagonCampaignPerkPremiumOnly, isHexagonCampaignTakeoverOver

// Module 5030 (HexagonCampaignUtils)
import PerksStateUtils from "PerksStateUtils" /* 1398 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1411 */;
import DisplayNameFont from "DisplayNameFont" /* 1412 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1991 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5028 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
const user = tmp(1400);
({ HEXAGON_CAMPAIGN_CLIENT_THEME_PRESET_IDS: c2, HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: c3, HEXAGON_CAMPAIGN_END_AT_MS: closure_4, HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: hasOwnProperty, HEXAGON_CAMPAIGN_PERK_MINIMUM_PREMIUM_TYPE: metroRequire, HEXAGON_CAMPAIGN_PERK_TO_PERK: metroImportDefault, HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: metroImportAll, HexagonCampaignPerkAvailability: c9 } = HexagonCampaignConstants);
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignUtils.tsx");

export const getHexagonCampaignPerkCutoffMs = function getHexagonCampaignPerkCutoffMs(item, stateFromStores) {
  if (null != stateFromStores) {
    let tmp5;
    const obj = PremiumTypeUtils;
    if (obj.isPremiumAtLeast(stateFromStores, metroRequire[item])) {
      tmp5 = metroImportAll;
    }
    return tmp5;
  }
  tmp5 = hasOwnProperty;
};
export const isHexagonCampaignTakeoverOver = function isHexagonCampaignTakeoverOver() {
  let timestamp = arg0;
  if (arg0 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  return timestamp >= React3;
};
export const isHexagonCampaignOver = function isHexagonCampaignOver() {
  let timestamp = arg0;
  if (arg0 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  return timestamp >= metroImportAll;
};
export const isHexagonCampaignPerkExpired = function isHexagonCampaignPerkExpired(CLIENT_THEME, premiumType, arg2) {
  let timestamp = arg2;
  if (arg2 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (null != premiumType) {
    let tmp7;
    const obj = PremiumTypeUtils;
    if (obj.isPremiumAtLeast(premiumType, metroRequire[CLIENT_THEME])) {
      tmp7 = metroImportAll;
    }
    return timestamp >= tmp7;
  }
  tmp7 = hasOwnProperty;
};
export const isHexagonCampaignClientThemePreset = function isHexagonCampaignClientThemePreset(id) {
  const hasItem = null != id && set.has(id);
  return hasItem;
};
export const isHexagonCampaignPerkPremiumOnly = function isHexagonCampaignPerkPremiumOnly(APP_ICON) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (timestamp === undefined) {
    const _Date2 = Date;
    timestamp = Date.now();
  }
  return timestamp >= hasOwnProperty;
};
export const hasHexagonCampaignDisplayNameFont = function hasHexagonCampaignDisplayNameFont(displayNameStyles) {
  let fontId;
  if (displayNameStyles != null) {
    fontId = displayNameStyles.fontId;
  }
  return fontId === _false;
};
export const isHexagonCampaignDisplayNameStyle = function isHexagonCampaignDisplayNameStyle(displayNameStyles) {
  let tmp2 = displayNameStyles.fontId === _false;
  const colors = displayNameStyles.colors;
  if (tmp2) {
    tmp2 = tmp === DisplayNameEffect.DisplayNameEffect.SOLID;
  }
  if (tmp2) {
    tmp2 = 0 === colors.length;
  }
  return tmp2;
};
export const getHexagonCampaignRestoredDisplayNameStyles = function getHexagonCampaignRestoredDisplayNameStyles(canUsePremiumProfileCustomization) {
  let currentDisplayNameStyles;
  let fontId;
  let previousDisplayNameStyles;
  ({ currentDisplayNameStyles, previousDisplayNameStyles } = canUsePremiumProfileCustomization);
  if (canUsePremiumProfileCustomization.canUsePremiumProfileCustomization) {
    if (null != currentDisplayNameStyles) {
      const obj = { fontId };
      const merged = Object.assign(currentDisplayNameStyles);
      fontId = undefined;
      if (previousDisplayNameStyles != null) {
        fontId = previousDisplayNameStyles.fontId;
      }
      if (fontId == null) {
        fontId = DisplayNameFont.DisplayNameFont.DEFAULT;
      }
      const tmp5 = require;
      if (obj.fontId === DisplayNameFont.DisplayNameFont.DEFAULT) {
        let tmp7;
        if (obj.effectId === tmp5(1411).DisplayNameEffect.SOLID) {
          tmp7 = null;
        }
        return tmp7;
      }
      tmp7 = obj;
    }
  }
  return null;
};
export const getHexagonCampaignPerkAvailability = function getHexagonCampaignPerkAvailability(arg0) {
  let isCampaignEnabled;
  let now;
  let perk;
  let premiumType;
  ({ premiumType, now } = arg0);
  ({ perk, isCampaignEnabled } = arg0);
  if (now === undefined) {
    const _Date = Date;
    now = Date.now();
  }
  if (isCampaignEnabled) {
    let HIDDEN;
    let timestamp = now;
    if (now === undefined) {
      const _Date2 = Date;
      timestamp = Date.now();
    }
    let tmp5 = metroImportAll;
    if (timestamp < metroImportAll) {
      if (now === undefined) {
        const _Date3 = Date;
        now = Date.now();
      }
      if (null == premiumType) {
        tmp5 = hasOwnProperty;
      } else {
        PremiumTypeUtils;
      }
      if (now >= tmp5) {
        HIDDEN = constants.LOCKED;
      } else {
        HIDDEN = constants.SELECTABLE;
      }
    }
    return HIDDEN;
  }
  HIDDEN = constants.HIDDEN;
};
export const isEnrolledInHexagonCampaign = function isEnrolledInHexagonCampaign(currentUser, CLIENT_THEME) {
  let perks;
  const getPerkSource = PerksStateUtils.getPerkSource;
  PerksStateUtils;
  if (currentUser != null) {
    perks = currentUser.perks;
  }
  const perkSource = getPerkSource(perks, metroImportDefault[CLIENT_THEME]);
  const hasItem = null != perkSource && perkSource.includes(user.PerkSource.SOURCE_HEXAGON_CAMPAIGN);
  return hasItem;
};
export const hasPerkOnlyFromHexagonCampaign = function hasPerkOnlyFromHexagonCampaign(currentUser, APP_ICON) {
  let perks;
  const getPerkSource = PerksStateUtils.getPerkSource;
  PerksStateUtils;
  if (currentUser != null) {
    perks = currentUser.perks;
  }
  const perkSource = getPerkSource(perks, metroImportDefault[APP_ICON]);
  const everyResult = null != perkSource && perkSource.length > 0 && perkSource.every((item) => item === user.PerkSource.SOURCE_HEXAGON_CAMPAIGN);
  return everyResult;
};
