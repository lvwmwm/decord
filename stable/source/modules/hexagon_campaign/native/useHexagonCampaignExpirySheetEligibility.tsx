// Module ID: 19468
// Function ID: 19469
// Name: useHexagonCampaignExpirySheetEligibility
// Dependencies: [32, 19, 5194, 6655, 1385, 16568, 5195, 1089, 5198, 5201, 504, 15654, 5229, 17357, 17363, 5202, 5003, 2]
// Exports: useHexagonCampaignExpirySheetEligibility

// Module 19468 (useHexagonCampaignExpirySheetEligibility)
import DurationsDefault from "Durations" /* 1089 */;
import restoreHexagonCampaignPerks from "restoreHexagonCampaignPerks" /* 17363 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5194 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6655 */;
import UserStore from "UserStore" /* 1385 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16568 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5195 */;
import size from "module_2" /* 2 */;

let gradientPreset;

let c9;
let metroImportAll;
({ HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: metroImportAll, HexagonCampaignPerk: c9 } = HexagonCampaignConstants);
let closure_10 = 3 * DurationsDefault.Millis.DAY;
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/useHexagonCampaignExpirySheetEligibility.tsx");

export function useHexagonCampaignExpirySheetEligibility(MainViewTooltipActionSheets) {
  let connected;
  let currentUser;
  let result1;
  let result2;
  let tmp7;
  let tmp8;
  let tmp = require;
  let obj = require("HexagonCampaignExperiment");
  let isHexagonCampaignEnabled = obj.useIsHexagonCampaignEnabled(MainViewTooltipActionSheets);
  const items = [UserStore];
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
  let tmpResult = tmp(tmp2[11]);
  const currentAppIcon = tmpResult.useCurrentAppIcon();
  const items2 = [ClientThemesBackgroundStore];
  const tmpResult8 = tmp(result1[10]);
  const stateFromStores2 = tmpResult8.useStateFromStores(items2, () => {
    let tmp7;
    const obj = require("isPerModeThemingActive");
    if (obj.isPerModeThemingActive()) {
      const tmpResult = require("getAppliedHexagonCampaignPerks");
      tmp7 = tmpResult.getHexagonCampaignClientThemeSystemThemes().length > 0;
    } else {
      gradientPreset = gradientPreset.gradientPreset;
      let id;
      const isHexagonCampaignClientThemePreset = require("HexagonCampaignUtils").isHexagonCampaignClientThemePreset;
      require("HexagonCampaignUtils");
      const tmp4 = gradientPreset;
      if (gradientPreset != null) {
        id = gradientPreset.id;
      }
      tmp7 = isHexagonCampaignClientThemePreset(id) || tmp4.hasHiddenHexagonCampaignPreset;
    }
    return tmp7;
  });
  const items3 = [HexagonCampaignPersistedStore];
  const tmpResult9 = tmp(result1[10]);
  let stateFromStores3 = tmpResult9.useStateFromStores(items3, () => HexagonCampaignPersistedStore.hasRestoredExpiredClientTheme);
  let result = tmp7 && null != stateFromStores && stateFromStores2;
  if (result) {
    const tmpResult10 = tmp(result1[8]);
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
  const tmpResult11 = tmp(result1[15]);
  result1 = tmpResult11.useIsDismissibleContentDismissed_UNSAFE(tmp(tmp2[16]).DismissibleContent.HEXAGON_CAMPAIGN_PERKS_EXPIRED_PROMO_SHEET, { bypassNewUserCheck: true });
  result2 = tmp7 && null != stateFromStores;
  if (result2) {
    const tmpResult12 = tmp(result1[8]);
    result2 = tmpResult12.hasHexagonCampaignDisplayNameFont(stateFromStores.displayNameStyles);
  }
  if (result2) {
    const tmpResult13 = tmp(result1[8]);
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
      const tmpResult14 = tmp(result1[13]);
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
        isHexagonCampaignEnabled = mapped.some((item) => item === closure_2_8 && closure_1 >= item - closure_2_10 && closure_1 < item);
      }
    }
    return { isExpiringSoonEligible: false, isExpiredEligible: false };
  }
}
