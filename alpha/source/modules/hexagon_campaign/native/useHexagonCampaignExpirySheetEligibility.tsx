// Module ID: 19853
// Function ID: 19854
// Name: useHexagonCampaignExpirySheetEligibility
// Dependencies: [32, 19, 5330, 6800, 1192, 1388, 16845, 5331, 1195, 5334, 5337, 504, 15314, 5375, 17635, 5348, 5139, 17629, 2]
// Exports: useHexagonCampaignExpirySheetEligibility

// Module 19853 (useHexagonCampaignExpirySheetEligibility)
import ThemeConstants from "ThemeConstants" /* 1195 */;
import restoreHexagonCampaignPerks from "restoreHexagonCampaignPerks" /* 17635 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5330 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6800 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserStore from "UserStore" /* 1388 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16845 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5331 */;
import size from "module_2" /* 2 */;

let gradientPreset, syncedClientTheme;

let c10;
let c9;
({ HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: c9, HexagonCampaignPerk: c10 } = HexagonCampaignConstants);
const SystemTheme = ThemeConstants.SystemTheme;
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/useHexagonCampaignExpirySheetEligibility.tsx");

export function useHexagonCampaignExpirySheetEligibility(MainViewTooltipActionSheets) {
  let connected;
  let currentUser;
  let result1;
  let result2;
  let tmp7;
  let tmp8;
  let tmp = require;
  const tmp2 = result1;
  let obj = require("HexagonCampaignExperiment");
  let isHexagonCampaignEnabled = obj.useIsHexagonCampaignEnabled(MainViewTooltipActionSheets);
  let items = [UserStore];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [GatewayConnectionStore];
  const obj3 = require("get initialized");
  let stateFromStores1 = obj3.useStateFromStores(items1, () => connected.isConnected());
  [tmp7, tmp8] = result2(react.useState(stateFromStores1), 2);
  result2(react.useState(stateFromStores1), 2);
  if (stateFromStores1) {
    stateFromStores1 = !tmp7;
  }
  if (stateFromStores1) {
    tmp8(true);
  }
  const tmpResult = tmp(tmp2[12]);
  const currentAppIcon = tmpResult.useCurrentAppIcon();
  const items2 = [ClientThemesBackgroundStore, ThemeStore];
  const tmpResult8 = tmp(tmp2[11]);
  const stateFromStores2 = tmpResult8.useStateFromStores(items2, () => {
    let someResult;
    const tmp = require;
    const obj = require("isPerModeThemingActive");
    if (obj.isPerModeThemingActive()) {
      const items = [, ];
      ({ LIGHT: arr[0], DARK: arr[1] } = SystemTheme);
      someResult = items.some((item) => {
        const isHexagonCampaignClientThemePreset = closure_1_0(result1[9]).isHexagonCampaignClientThemePreset;
        closure_1_0(result1[9]);
        syncedClientTheme = syncedClientTheme.getSyncedClientTheme(item);
        let prop;
        if (syncedClientTheme != null) {
          prop = syncedClientTheme.backgroundGradientPresetId;
        }
        return isHexagonCampaignClientThemePreset(prop);
      });
    } else {
      gradientPreset = gradientPreset.gradientPreset;
      let id;
      let isHexagonCampaignClientThemePreset = tmp(tmp2[9]).isHexagonCampaignClientThemePreset;
      tmp(result1[9]);
      if (gradientPreset != null) {
        id = gradientPreset.id;
      }
      someResult = isHexagonCampaignClientThemePreset(id) && !tmp4.isUpsellGradientPreview || tmp4.hasHiddenHexagonCampaignPreset;
    }
    return someResult;
  });
  const items3 = [HexagonCampaignPersistedStore];
  const tmpResult9 = tmp(tmp2[11]);
  let stateFromStores3 = tmpResult9.useStateFromStores(items3, () => HexagonCampaignPersistedStore.hasRestoredExpiredClientTheme);
  let result = tmp7 && null != stateFromStores && stateFromStores2;
  if (result) {
    const tmpResult10 = tmp(tmp2[9]);
    result = tmpResult10.isHexagonCampaignPerkExpired(constants.CLIENT_THEME, stateFromStores.premiumType);
  }
  require = result;
  const items4 = [result];
  const effect = obj4.useEffect(() => {
    const tmp = require;
    if (tmp) {
      const obj = restoreHexagonCampaignPerks;
      require = obj.restoreExpiredHexagonCampaignClientTheme([]);
    }
  }, items4);
  const tmpResult11 = tmp(tmp2[15]);
  result1 = tmpResult11.useIsDismissibleContentDismissed_UNSAFE(tmp(tmp2[16]).DismissibleContent.HEXAGON_CAMPAIGN_PERKS_EXPIRED_PROMO_SHEET, { bypassNewUserCheck: true });
  result2 = tmp7 && null != stateFromStores;
  if (result2) {
    const tmpResult12 = tmp(tmp2[9]);
    result2 = tmpResult12.hasHexagonCampaignDisplayNameFont(stateFromStores.displayNameStyles);
  }
  if (result2) {
    const tmpResult13 = tmp(tmp2[9]);
    result2 = tmpResult13.isHexagonCampaignPerkExpired(constants.DISPLAY_NAME_STYLE, stateFromStores.premiumType);
  }
  const items5 = [result1, result2];
  const effect1 = obj4.useEffect(() => {
    const tmp = result1 && result2;
    if (tmp) {
      const obj = restoreHexagonCampaignPerks;
      result = obj.restoreExpiredHexagonCampaignDisplayNameStyle([]);
    }
  }, items5);
  if (tmp7) {
    if (null != stateFromStores) {
      const obj5 = { isClientThemeApplied: stateFromStores2, displayNameStyles: stateFromStores.displayNameStyles, currentAppIconId: currentAppIcon };
      const tmpResult14 = tmp(tmp2[17]);
      const appliedHexagonCampaignPerks = tmpResult14.getAppliedHexagonCampaignPerks(obj5);
      const premiumType = stateFromStores.premiumType;
      const _Date = Date;
      let closure_1 = Date.now();
      const mapped = appliedHexagonCampaignPerks.map((item) => {
        const obj = require("HexagonCampaignUtils");
        return obj.getHexagonCampaignPerkCutoffMs(item, premiumType);
      });
      if (!stateFromStores3) {
        stateFromStores3 = mapped.some((item) => closure_1 >= item);
      }
      if (isHexagonCampaignEnabled) {
        isHexagonCampaignEnabled = !stateFromStores3;
      }
      if (isHexagonCampaignEnabled) {
        isHexagonCampaignEnabled = mapped.some((item) => {
          require = item === closure_2_9;
          if (require) {
            const obj = require("HexagonCampaignUtils");
            require = obj.isWithinHexagonCampaignExpiringSoonWindow(item, closure_1);
          }
          return require;
        });
      }
    }
    return { isExpiringSoonEligible: false, isExpiredEligible: false };
  }
}
