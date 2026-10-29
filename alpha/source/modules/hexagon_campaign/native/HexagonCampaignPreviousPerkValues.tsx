// Module ID: 16885
// Function ID: 16886
// Name: HexagonCampaignPreviousPerkValues
// Dependencies: [5029, 1250, 1204, 1206, 9931, 1252, 1207, 9932, 5239, 1253, 5032, 16357, 2]
// Exports: getHexagonCampaignClientThemeItem, saveHexagonCampaignPreviousAppIcon, saveHexagonCampaignPreviousClientTheme

// Module 16885 (HexagonCampaignPreviousPerkValues)
import ThemeConstants from "ThemeConstants" /* 1207 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5032 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5239 */;
import AppIconConstants from "AppIconConstants" /* 9931 */;
import AppIconTypes from "AppIconTypes" /* 9932 */;
import HexagonActionCreators from "HexagonActionCreators" /* 16357 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5029 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1250 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1206 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1252 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, obj;

let metroImportAll;
let metroImportDefault;
const isHexagonCampaignAppIcon = AppIconConstants.isHexagonCampaignAppIcon;
({ BACKGROUND_GRADIENT_PRESETS_MAP: metroImportDefault, REFRESH_STANDARD_BACKGROUND_THEMES: metroImportAll } = ClientThemesConstants);
const SystemThemeState = ThemeConstants.SystemThemeState;
const DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME = { theme: "system" };
const DEFAULT = AppIconTypes.FreemiumAppIconIds.DEFAULT;
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignPreviousPerkValues.tsx");

export { DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME };
export const DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID = DEFAULT;
export function getHexagonCampaignClientThemeItem(DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME) {
  let found;
  let theme;
  _require = DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME;
  if (null != DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME.backgroundGradientPresetId) {
    if (null != closure_7[DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME.backgroundGradientPresetId]) {
      return closure_7[DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME.backgroundGradientPresetId];
    }
  }
  if (null != DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME.customThemeSettings) {
    obj = { type: require("ClientThemesTypes").ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, theme: null, customThemeSettings: null };
    ({ theme: obj.theme, customThemeSettings: obj.customThemeSettings } = DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME);
    found = obj;
  } else {
    found = closure_8.find((theme) => theme.theme === DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME.theme);
    if (found == null) {
      found = arr.find((theme) => theme.theme === theme.theme);
    }
    if (found == null) {
      found = arr[0];
    }
  }
  return found;
}
export function saveHexagonCampaignPreviousClientTheme() {
  const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
  let id;
  const isHexagonCampaignClientThemePreset = HexagonCampaignUtils.isHexagonCampaignClientThemePreset;
  HexagonCampaignUtils;
  const tmp4 = ClientThemesBackgroundStore;
  if (gradientPreset != null) {
    id = gradientPreset.id;
  }
  if (!isHexagonCampaignClientThemePreset(id)) {
    let clientTheme;
    const gradientPreset2 = tmp4.gradientPreset;
    const saveHexagonCampaignPreviousPerkValues = HexagonActionCreators.saveHexagonCampaignPreviousPerkValues;
    HexagonActionCreators;
    if (null != gradientPreset2) {
      const obj4 = { theme: null, backgroundGradientPresetId: null };
      ({ theme: obj3.theme, id: obj3.backgroundGradientPresetId } = gradientPreset2);
      clientTheme = obj4;
    } else {
      const tmpResult2 = MobileThemesUtils;
      const customBackgroundGradient = tmpResult2.getCustomBackgroundGradient();
      if (null != customBackgroundGradient) {
        if (CustomThemeMobileStore.hasCustomTheme()) {
          const obj5 = { theme: null, customThemeSettings: null };
          ({ theme: obj2.theme, customThemeSettings: obj2.customThemeSettings } = customBackgroundGradient);
          clientTheme = obj5;
        }
      }
      if (UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON) {
        clientTheme = { theme: "system" };
      } else {
        clientTheme = { theme: ThemeStore.theme };
      }
    }
    const obj8 = { clientTheme };
    const result = saveHexagonCampaignPreviousPerkValues(obj8);
  }
}
export function saveHexagonCampaignPreviousAppIcon(appIconId) {
  if (!isHexagonCampaignAppIcon(appIconId)) {
    const obj2 = { appIconId };
    obj = HexagonActionCreators;
    const result = obj.saveHexagonCampaignPreviousPerkValues(obj2);
  }
}
