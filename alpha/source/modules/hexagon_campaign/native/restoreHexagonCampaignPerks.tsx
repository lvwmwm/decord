// Module ID: 17522
// Function ID: 17523
// Name: restoreHexagonCampaignPerks
// Dependencies: [1192, 1385, 5268, 5312, 17516, 17518, 17517, 15203, 17521, 5271, 2171, 2]
// Exports: restoreHexagonCampaignPerk

// Module 17522 (restoreHexagonCampaignPerks)
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5271 */;
import isPerModeThemingActive from "isPerModeThemingActive" /* 5312 */;
import AppIconUtils from "AppIconUtils" /* 15203 */;
import getAppliedHexagonCampaignPerks from "getAppliedHexagonCampaignPerks" /* 17516 */;
import HexagonCampaignPreviousPerkValues from "HexagonCampaignPreviousPerkValues" /* 17517 */;
import UserSettingsAppearanceThemeUtils from "UserSettingsAppearanceThemeUtils" /* 17518 */;
import saveHexagonCampaignDisplayNameStyles2 from "saveHexagonCampaignDisplayNameStyles" /* 17521 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserStore from "UserStore" /* 1385 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5268 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID: hasOwnProperty, HexagonCampaignPerk: metroRequire } = HexagonCampaignConstants);
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/restoreHexagonCampaignPerks.tsx");

export function restoreHexagonCampaignPerk(arg0, arg1) {
  let analyticsLocations;
  let obj2;
  let previousPerkValues;
  ({ previousPerkValues, analyticsLocations } = arg1);
  if (metroRequire.CLIENT_THEME === arg0) {
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
  } else if (metroRequire.APP_ICON === arg0) {
    let appIconId = previousPerkValues.appIconId;
    const setAppIcon = AppIconUtils.setAppIcon;
    AppIconUtils;
    if (appIconId == null) {
      appIconId = hasOwnProperty;
    }
    return setAppIcon(appIconId, tmp, { showErrorToast: false });
  } else if (metroRequire.DISPLAY_NAME_STYLE === arg0) {
    const currentUser = UserStore.getCurrentUser();
    const saveHexagonCampaignDisplayNameStyles = saveHexagonCampaignDisplayNameStyles2.saveHexagonCampaignDisplayNameStyles;
    saveHexagonCampaignDisplayNameStyles2;
    let displayNameStyles;
    const getHexagonCampaignRestoredDisplayNameStyles = HexagonCampaignUtils.getHexagonCampaignRestoredDisplayNameStyles;
    HexagonCampaignUtils;
    if (currentUser != null) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    const obj = { currentDisplayNameStyles: displayNameStyles, previousDisplayNameStyles: previousPerkValues.displayNameStyles, canUsePremiumProfileCustomization: obj2.canUsePremiumProfileCustomization(currentUser) };
    obj2 = PremiumUtilsDefault;
    return saveHexagonCampaignDisplayNameStyles(getHexagonCampaignRestoredDisplayNameStyles(obj));
  }
}
