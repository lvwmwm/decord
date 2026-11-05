// Module ID: 16732
// Function ID: 16733
// Name: useHexagonCampaignNewFontBadge
// Dependencies: [19, 16733, 16484, 5168, 5171, 504, 16734, 16723, 2]
// Exports: useHexagonCampaignHasVisitedDisplayNameStyles, useHexagonCampaignNewFontBadge, useMarkHexagonCampaignDisplayNameStylesVisited

// Module 16732 (useHexagonCampaignNewFontBadge)
import get_initialized from "get initialized" /* 504 */;
import HexagonCampaignPerkAvailability from "HexagonCampaignPerkAvailability" /* 5171 */;
import HexagonActionCreators from "HexagonActionCreators" /* 16723 */;
import react from "react" /* 19 */;
import DisplayNameStylesSeenStore from "DisplayNameStylesSeenStore" /* 16733 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16484 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5168 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, seenFonts;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const f111292 = () => HexagonCampaignPersistedStore.hasVisitedDisplayNameStyles;
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
  return obj.useStateFromStores(items, f111292);
}
export function useMarkHexagonCampaignDisplayNameStylesVisited(DisplayNameStylesEditScreen) {
  let closure_0;
  let stateFromStores;
  let obj = require("HexagonCampaignPerkAvailability");
  let tmp = obj.useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, DisplayNameStylesEditScreen) === constants2.SELECTABLE;
  _require = tmp;
  const items = [HexagonCampaignPersistedStore];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items, f111292);
  const items1 = [tmp, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = closure_0 && !stateFromStores;
    if (tmp) {
      const obj = HexagonActionCreators;
      const result = obj.markHexagonCampaignDisplayNameStylesVisited();
    }
  }, items1);
}
