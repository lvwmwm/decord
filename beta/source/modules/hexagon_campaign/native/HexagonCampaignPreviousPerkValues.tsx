// Module ID: 16418
// Function ID: 16419
// Name: HexagonCampaignPreviousPerkValues
// Dependencies: [4937, 1237, 1191, 1193, 4938, 1239, 1194, 5119, 1240, 4941, 15865, 2]
// Exports: getHexagonCampaignClientThemeItem, saveHexagonCampaignPreviousClientTheme

// Module 16418 (HexagonCampaignPreviousPerkValues)
import ThemeConstants from "ThemeConstants" /* 1194 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4938 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4941 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5119 */;
import HexagonActionCreators from "HexagonActionCreators" /* 15865 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4937 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1237 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1193 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1239 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
let closure_6 = HexagonCampaignConstants.DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME;
({ BACKGROUND_GRADIENT_PRESETS_MAP: metroImportDefault, REFRESH_STANDARD_BACKGROUND_THEMES: metroImportAll } = ClientThemesConstants);
const SystemThemeState = ThemeConstants.SystemThemeState;
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignPreviousPerkValues.tsx");

export function getHexagonCampaignClientThemeItem(clientTheme) {
  let found;
  let theme;
  _require = clientTheme;
  if (null != clientTheme.backgroundGradientPresetId) {
    if (null != closure_7[clientTheme.backgroundGradientPresetId]) {
      return closure_7[clientTheme.backgroundGradientPresetId];
    }
  }
  if (null != clientTheme.customThemeSettings) {
    const obj = { type: require("ClientThemesTypes").ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, theme: null, customThemeSettings: null };
    ({ theme: obj.theme, customThemeSettings: obj.customThemeSettings } = clientTheme);
    found = obj;
  } else {
    found = closure_8.find((theme) => theme.theme === clientTheme.theme);
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
    let obj;
    const gradientPreset2 = tmp4.gradientPreset;
    const saveHexagonCampaignPreviousPerkValues = HexagonActionCreators.saveHexagonCampaignPreviousPerkValues;
    HexagonActionCreators;
    if (null != gradientPreset2) {
      const obj4 = { theme: null, backgroundGradientPresetId: null };
      ({ theme: obj3.theme, id: obj3.backgroundGradientPresetId } = gradientPreset2);
      obj = obj4;
    } else {
      const tmpResult2 = MobileThemesUtils;
      const customBackgroundGradient = tmpResult2.getCustomBackgroundGradient();
      if (null != customBackgroundGradient) {
        if (CustomThemeMobileStore.hasCustomTheme()) {
          const obj5 = { theme: null, customThemeSettings: null };
          ({ theme: obj2.theme, customThemeSettings: obj2.customThemeSettings } = customBackgroundGradient);
          obj = obj5;
        }
      }
      if (UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON) {
        obj = { theme: "system" };
      } else {
        obj = { theme: ThemeStore.theme };
      }
    }
    const obj8 = { clientTheme: obj };
    const result = saveHexagonCampaignPreviousPerkValues(obj8);
  }
}
