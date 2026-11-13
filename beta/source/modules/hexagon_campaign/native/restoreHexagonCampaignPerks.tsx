// Module ID: 17363
// Function ID: 17364
// Name: restoreHexagonCampaignPerks
// Dependencies: [5, 1193, 1192, 1385, 16568, 5195, 5229, 17357, 17359, 17358, 15654, 17362, 5198, 2171, 16807, 2]
// Exports: restoreExpiredHexagonCampaignClientTheme, restoreExpiredHexagonCampaignDisplayNameStyle, restoreExpiredHexagonCampaignPerks

// Module 17363 (restoreHexagonCampaignPerks)
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5198 */;
import isPerModeThemingActive from "isPerModeThemingActive" /* 5229 */;
import AppIconUtils from "AppIconUtils" /* 15654 */;
import HexagonActionCreators from "HexagonActionCreators" /* 16807 */;
import getAppliedHexagonCampaignPerks from "getAppliedHexagonCampaignPerks" /* 17357 */;
import HexagonCampaignPreviousPerkValues from "HexagonCampaignPreviousPerkValues" /* 17358 */;
import UserSettingsAppearanceThemeUtils from "UserSettingsAppearanceThemeUtils" /* 17359 */;
import saveHexagonCampaignDisplayNameStyles2 from "saveHexagonCampaignDisplayNameStyles" /* 17362 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1193 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserStore from "UserStore" /* 1385 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16568 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5195 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
function restoreHexagonCampaignPerk(arg0, arg1) {
  let analyticsLocations;
  let obj2;
  let previousPerkValues;
  ({ previousPerkValues, analyticsLocations } = arg1);
  if (constants.CLIENT_THEME === arg0) {
    const obj3 = isPerModeThemingActive;
    if (obj3.isPerModeThemingActive()) {
      const tmp23Result = getAppliedHexagonCampaignPerks;
      const hexagonCampaignClientThemeSystemThemes = tmp23Result.getHexagonCampaignClientThemeSystemThemes();
      for (const item10084 of hexagonCampaignClientThemeSystemThemes) {
        let tmp41 = UserSettingsAppearanceThemeUtils;
        let handleSaveSyncedModeTheme = tmp41.handleSaveSyncedModeTheme;
        let tmp42 = HexagonCampaignPreviousPerkValues;
        let obj4 = { theme: ThemeStore.themePreferenceForSystemTheme(item10084) };
        let getHexagonCampaignClientThemeItem2 = tmp42.getHexagonCampaignClientThemeItem;
        let result = handleSaveSyncedModeTheme(getHexagonCampaignClientThemeItem2(obj4), item10084, analyticsLocations);
        continue;
      }
      return Promise.resolve(true);
    } else {
      const handleSaveTheme = UserSettingsAppearanceThemeUtils.handleSaveTheme;
      UserSettingsAppearanceThemeUtils;
      let clientTheme = previousPerkValues.clientTheme;
      const getHexagonCampaignClientThemeItem = HexagonCampaignPreviousPerkValues.getHexagonCampaignClientThemeItem;
      HexagonCampaignPreviousPerkValues;
      if (clientTheme == null) {
        clientTheme = { theme: ThemeStore.theme };
        const obj5 = { theme: ThemeStore.theme };
      }
      handleSaveTheme(getHexagonCampaignClientThemeItem(clientTheme), analyticsLocations, tmp2);
      return Promise.resolve(true);
    }
  } else if (constants.APP_ICON === arg0) {
    let appIconId = previousPerkValues.appIconId;
    const setAppIcon = AppIconUtils.setAppIcon;
    AppIconUtils;
    if (appIconId == null) {
      appIconId = metroImportAll;
    }
    return setAppIcon(appIconId, tmp, { showErrorToast: false });
  } else if (constants.DISPLAY_NAME_STYLE === arg0) {
    const currentUser = UserStore.getCurrentUser();
    const saveHexagonCampaignDisplayNameStyles = saveHexagonCampaignDisplayNameStyles2.saveHexagonCampaignDisplayNameStyles;
    saveHexagonCampaignDisplayNameStyles2;
    let displayNameStyles;
    const getHexagonCampaignRestoredDisplayNameStyles = HexagonCampaignUtils.getHexagonCampaignRestoredDisplayNameStyles;
    HexagonCampaignUtils;
    if (currentUser != null) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    obj = { currentDisplayNameStyles: displayNameStyles, previousDisplayNameStyles: previousPerkValues.displayNameStyles, canUsePremiumProfileCustomization: obj2.canUsePremiumProfileCustomization(currentUser) };
    obj2 = PremiumUtilsDefault;
    return saveHexagonCampaignDisplayNameStyles(getHexagonCampaignRestoredDisplayNameStyles(obj));
  }
}
function getRestoreHexagonCampaignPerkParams(analyticsLocations) {
  let premiumType;
  obj = { previousPerkValues: HexagonCampaignPersistedStore.previousPerkValues, premiumType, isThemeSynced: SelectivelySyncedUserSettingsStore.shouldSync("appearance"), analyticsLocations };
  const currentUser = UserStore.getCurrentUser();
  premiumType = undefined;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
  }
  return obj;
}
let obj = function _restoreExpiredHexagonCampaignPerks() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let closure_0 = arg0;
    const tmp11 = getRestoreHexagonCampaignPerkParams(closure_0);
    closure_0 = tmp11;
    const premiumType = tmp11.premiumType;
    const obj4 = {};
    const CLIENT_THEME = constants.CLIENT_THEME;
    const obj7 = getAppliedHexagonCampaignPerks;
    obj4[CLIENT_THEME] = obj7.isHexagonCampaignClientThemeApplied();
    const DISPLAY_NAME_STYLE = constants.DISPLAY_NAME_STYLE;
    const obj8 = getAppliedHexagonCampaignPerks;
    obj4[DISPLAY_NAME_STYLE] = obj8.isHexagonCampaignDisplayNameStyleApplied();
    const items = [, ];
    ({ CLIENT_THEME: arr[0], DISPLAY_NAME_STYLE: arr[1] } = constants);
    const found = items.filter((item) => {
      let result = true === obj4[item];
      if (result) {
        obj = closure_2_0(closure_2_2[12]);
        result = obj.isHexagonCampaignPerkExpired(item, premiumType);
      }
      return result;
    });
    await all(found.map((item) => closure_2_10(item, closure_0)));
    const tmp4 = globalThis;
    const _Boolean = Boolean;
    return arg1.every(Boolean);
  });
  return obj(...arguments);
};
({ DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID: metroImportAll, HexagonCampaignPerk: c9 } = HexagonCampaignConstants);
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/restoreHexagonCampaignPerks.tsx");

export { restoreHexagonCampaignPerk };
export function restoreExpiredHexagonCampaignClientTheme(analyticsLocations) {
  let premiumType;
  const currentUser = UserStore.getCurrentUser();
  let result = null != currentUser;
  obj = UserStore;
  if (result) {
    const obj2 = getAppliedHexagonCampaignPerks;
    result = obj2.isHexagonCampaignClientThemeApplied();
  }
  if (result) {
    const obj3 = HexagonCampaignUtils;
    result = obj3.isHexagonCampaignPerkExpired(constants.CLIENT_THEME, currentUser.premiumType);
  }
  if (result) {
    const CLIENT_THEME = constants.CLIENT_THEME;
    const obj4 = { previousPerkValues: HexagonCampaignPersistedStore.previousPerkValues, premiumType, isThemeSynced: SelectivelySyncedUserSettingsStore.shouldSync("appearance"), analyticsLocations };
    const currentUser1 = obj.getCurrentUser();
    premiumType = undefined;
    const tmp8 = restoreHexagonCampaignPerk;
    if (currentUser1 != null) {
      premiumType = currentUser1.premiumType;
    }
    tmp8(CLIENT_THEME, obj4);
    const obj5 = HexagonActionCreators;
    const result1 = obj5.markHexagonCampaignExpiredClientThemeRestored();
  }
}
export function restoreExpiredHexagonCampaignDisplayNameStyle(analyticsLocations) {
  let premiumType;
  const currentUser = UserStore.getCurrentUser();
  let result = null != currentUser;
  obj = UserStore;
  if (result) {
    const obj2 = getAppliedHexagonCampaignPerks;
    result = obj2.isHexagonCampaignDisplayNameStyleApplied();
  }
  if (result) {
    const obj3 = HexagonCampaignUtils;
    result = obj3.isHexagonCampaignPerkExpired(constants.DISPLAY_NAME_STYLE, currentUser.premiumType);
  }
  if (result) {
    const DISPLAY_NAME_STYLE = constants.DISPLAY_NAME_STYLE;
    const obj4 = { previousPerkValues: HexagonCampaignPersistedStore.previousPerkValues, premiumType, isThemeSynced: SelectivelySyncedUserSettingsStore.shouldSync("appearance"), analyticsLocations };
    const currentUser1 = obj.getCurrentUser();
    premiumType = undefined;
    const tmp8 = restoreHexagonCampaignPerk;
    if (currentUser1 != null) {
      premiumType = currentUser1.premiumType;
    }
    tmp8(DISPLAY_NAME_STYLE, obj4);
  }
}
export function restoreExpiredHexagonCampaignPerks() {
  return obj(...arguments);
}
