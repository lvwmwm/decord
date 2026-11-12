// Module ID: 17511
// Function ID: 17512
// Name: getAppliedHexagonCampaignPerks
// Dependencies: [5267, 1192, 1385, 5268, 1195, 5271, 5312, 2]
// Exports: getAppliedHexagonCampaignPerks, getHexagonCampaignClientThemeSystemThemes, isHexagonCampaignClientThemeApplied, isHexagonCampaignDisplayNameStyleApplied

// Module 17511 (getAppliedHexagonCampaignPerks)
import ThemeConstants from "ThemeConstants" /* 1195 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5268 */;
import isPerModeThemingActive from "isPerModeThemingActive" /* 5312 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5267 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let syncedClientTheme;

let tmp;
const HexagonCampaignUtils = tmp(5271);
const f114458 = (item) => {
  const isHexagonCampaignClientThemePreset = HexagonCampaignUtils.isHexagonCampaignClientThemePreset;
  HexagonCampaignUtils;
  syncedClientTheme = syncedClientTheme.getSyncedClientTheme(item);
  let prop;
  if (syncedClientTheme != null) {
    prop = syncedClientTheme.backgroundGradientPresetId;
  }
  return isHexagonCampaignClientThemePreset(prop);
};
const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
const SystemTheme = ThemeConstants.SystemTheme;
const result = size.fileFinishedImporting("modules/hexagon_campaign/getAppliedHexagonCampaignPerks.tsx");

export function getHexagonCampaignClientThemeSystemThemes() {
  const items = [, ];
  ({ LIGHT: arr[0], DARK: arr[1] } = SystemTheme);
  return items.filter(f114458);
}
export function isHexagonCampaignClientThemeApplied() {
  let tmp7;
  const obj = isPerModeThemingActive;
  if (obj.isPerModeThemingActive()) {
    const items = [, ];
    ({ LIGHT: arr[0], DARK: arr[1] } = SystemTheme);
    tmp7 = items.filter(f114458).length > 0;
  } else {
    const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
    let id;
    let isHexagonCampaignClientThemePreset = HexagonCampaignUtils.isHexagonCampaignClientThemePreset;
    HexagonCampaignUtils;
    const tmp4 = ClientThemesBackgroundStore;
    if (gradientPreset != null) {
      id = gradientPreset.id;
    }
    tmp7 = isHexagonCampaignClientThemePreset(id) || tmp4.hasHiddenHexagonCampaignPreset;
  }
  return tmp7;
}
export function isHexagonCampaignDisplayNameStyleApplied() {
  const hasHexagonCampaignDisplayNameFont = HexagonCampaignUtils.hasHexagonCampaignDisplayNameFont;
  HexagonCampaignUtils;
  const currentUser = UserStore.getCurrentUser();
  let displayNameStyles;
  if (currentUser != null) {
    displayNameStyles = currentUser.displayNameStyles;
  }
  return hasHexagonCampaignDisplayNameFont(displayNameStyles);
}
export function getAppliedHexagonCampaignPerks(isClientThemeApplied) {
  let currentAppIconId;
  let displayNameStyles;
  const obj = { [closure_1_5.CLIENT_THEME]: isClientThemeApplied.isClientThemeApplied };
  ({ displayNameStyles, currentAppIconId } = isClientThemeApplied);
  const DISPLAY_NAME_STYLE = HexagonCampaignPerk.DISPLAY_NAME_STYLE;
  const obj2 = HexagonCampaignUtils;
  obj[DISPLAY_NAME_STYLE] = obj2.hasHexagonCampaignDisplayNameFont(displayNameStyles);
  const APP_ICON = HexagonCampaignPerk.APP_ICON;
  const obj3 = HexagonCampaignUtils;
  obj[APP_ICON] = obj3.isHexagonCampaignAppIcon(currentAppIconId);
  const values = Object.values(HexagonCampaignPerk);
  return values.filter((item) => obj[item]);
}
