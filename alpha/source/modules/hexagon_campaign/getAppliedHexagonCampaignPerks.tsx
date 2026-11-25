// Module ID: 16559
// Function ID: 16560
// Name: getAppliedHexagonCampaignPerks
// Dependencies: [5036, 1191, 1386, 5037, 1194, 5040, 5071, 2]
// Exports: getAppliedHexagonCampaignPerks, getHexagonCampaignClientThemeSystemThemes, isHexagonCampaignClientThemeApplied, isHexagonCampaignDisplayNameStyleApplied

// Module 16559 (getAppliedHexagonCampaignPerks)
import ThemeConstants from "ThemeConstants" /* 1194 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5037 */;
import isPerModeThemingActive from "isPerModeThemingActive" /* 5071 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5036 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

let syncedClientTheme;

let tmp;
const HexagonCampaignUtils = tmp(5040);
const f110346 = (item) => {
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
  return items.filter(f110346);
}
export function isHexagonCampaignClientThemeApplied() {
  let tmp7;
  const obj = isPerModeThemingActive;
  if (obj.isPerModeThemingActive()) {
    const items = [, ];
    ({ LIGHT: arr[0], DARK: arr[1] } = SystemTheme);
    tmp7 = items.filter(f110346).length > 0;
  } else {
    const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
    let id;
    let isHexagonCampaignClientThemePreset = HexagonCampaignUtils.isHexagonCampaignClientThemePreset;
    HexagonCampaignUtils;
    if (gradientPreset != null) {
      id = gradientPreset.id;
    }
    tmp7 = isHexagonCampaignClientThemePreset(id) && !tmp4.isUpsellGradientPreview || tmp4.hasHiddenHexagonCampaignPreset;
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
