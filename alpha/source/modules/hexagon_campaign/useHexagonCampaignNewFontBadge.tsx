// Module ID: 16025
// Function ID: 16026
// Name: useHexagonCampaignNewFontBadge
// Dependencies: [19, 16026, 15779, 5037, 5042, 504, 16027, 15982, 15983, 6843, 2]
// Exports: useHexagonCampaignDisplayNameStylePromo, useHexagonCampaignHasVisitedDisplayNameStyles, useHexagonCampaignNewFontBadge, useMarkHexagonCampaignDisplayNameStylesVisited

// Module 16025 (useHexagonCampaignNewFontBadge)
import get_initialized from "get initialized" /* 504 */;
import HexagonCampaignPerkAvailability from "HexagonCampaignPerkAvailability" /* 5042 */;
import HexagonActionCreators from "HexagonActionCreators" /* 15982 */;
import HexagonCampaignAnalytics from "HexagonCampaignAnalytics" /* 15983 */;
import react from "react" /* 19 */;
import DisplayNameStylesSeenStore from "DisplayNameStylesSeenStore" /* 16026 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 15779 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5037 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, seenFonts;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const f109248 = () => HexagonCampaignPersistedStore.hasVisitedDisplayNameStyles;
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: hasOwnProperty, HexagonCampaignPerk: metroRequire, HexagonCampaignPerkAvailability: metroImportDefault } = HexagonCampaignConstants);
let result = size.fileFinishedImporting("modules/hexagon_campaign/useHexagonCampaignNewFontBadge.tsx");

export function useHexagonCampaignNewFontBadge(DisplayNameStylesEditScreen) {
  let obj = HexagonCampaignPerkAvailability;
  let tmp = obj.useHexagonCampaignPerkAvailability(metroRequire.DISPLAY_NAME_STYLE, DisplayNameStylesEditScreen) === metroImportDefault.SELECTABLE;
  const items = [DisplayNameStylesSeenStore];
  const obj2 = get_initialized;
  if (tmp) {
    tmp = !obj2.useStateFromStores(items, () => {
      seenFonts = seenFonts.getSeenFonts();
      return seenFonts.has(closure_1_5);
    });
  }
  const obj3 = {
    showCampaignFontBadge: tmp,
    dismissCampaignFontBadge: react.useCallback(() => {
      const obj = require("DisplayNameStylesActionCreators");
      const result = obj.markDisplayNameStyleFontSeen(closure_1_5);
    }, [])
  };
  return obj3;
}
export function useHexagonCampaignHasVisitedDisplayNameStyles() {
  const items = [HexagonCampaignPersistedStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, f109248);
}
export function useMarkHexagonCampaignDisplayNameStylesVisited(DisplayNameStylesEditScreen) {
  let closure_0;
  let stateFromStores;
  let obj = require("HexagonCampaignPerkAvailability");
  let tmp = obj.useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, DisplayNameStylesEditScreen) === constants2.SELECTABLE;
  _require = tmp;
  const items = [HexagonCampaignPersistedStore];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items, f109248);
  const items1 = [tmp, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = closure_0 && !stateFromStores;
    if (tmp) {
      const obj = HexagonActionCreators;
      const result = obj.markHexagonCampaignDisplayNameStylesVisited();
    }
  }, items1);
}
export function useHexagonCampaignDisplayNameStylePromo(arg0) {
  let _location;
  let disabled;
  let displayNameStyles;
  let isTryItOut;
  ({ displayNameStyles, disabled } = arg0);
  ({ location: _location, isTryItOut } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const obj = HexagonCampaignPerkAvailability;
  let tmp3 = !disabled && obj.useHexagonCampaignPerkAvailability(metroRequire.DISPLAY_NAME_STYLE, _location) === metroImportDefault.SELECTABLE && true !== isTryItOut;
  if (tmp3) {
    let fontId;
    if (displayNameStyles != null) {
      fontId = displayNameStyles.fontId;
    }
    tmp3 = fontId !== hasOwnProperty;
  }
  const useTrackHexagonCampaignContentViewed = HexagonCampaignAnalytics.useTrackHexagonCampaignContentViewed;
  HexagonCampaignAnalytics;
  const trackHexagonCampaignContentViewed = useTrackHexagonCampaignContentViewed(tmp(6843).QuestContent.DISPLAY_NAME_STYLES_SETTINGS, tmp(15983).HexagonCampaignContentSurface.PROFILE_ROW_PROMO, tmp3);
  const items = [HexagonCampaignPersistedStore];
  const obj2 = { showCampaignPromo: tmp3, showCampaignNewBadge: tmp3 };
  const tmpResult2 = get_initialized;
  if (tmp3) {
    tmp3 = !tmpResult2.useStateFromStores(items, f109248);
  }
  return obj2;
}
