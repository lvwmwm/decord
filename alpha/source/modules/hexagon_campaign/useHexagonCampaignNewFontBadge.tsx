// Module ID: 16419
// Function ID: 16420
// Name: useHexagonCampaignNewFontBadge
// Dependencies: [19, 16420, 16181, 5034, 5037, 504, 16421, 16410, 2]
// Exports: useHexagonCampaignHasVisitedDisplayNameStyles, useHexagonCampaignNewFontBadge, useMarkHexagonCampaignDisplayNameStylesVisited

// Module 16419 (useHexagonCampaignNewFontBadge)
import get_initialized from "get initialized" /* 504 */;
import HexagonCampaignPerkAvailability from "HexagonCampaignPerkAvailability" /* 5037 */;
import HexagonActionCreators from "HexagonActionCreators" /* 16410 */;
import react from "react" /* 19 */;
import DisplayNameStylesSeenStore from "DisplayNameStylesSeenStore" /* 16420 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16181 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5034 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, seenFonts;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const f109673 = () => HexagonCampaignPersistedStore.hasVisitedDisplayNameStyles;
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
  return obj.useStateFromStores(items, f109673);
}
export function useMarkHexagonCampaignDisplayNameStylesVisited(DisplayNameStylesEditScreen) {
  let closure_0;
  let stateFromStores;
  let obj = require("HexagonCampaignPerkAvailability");
  let tmp = obj.useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, DisplayNameStylesEditScreen) === constants2.SELECTABLE;
  _require = tmp;
  const items = [HexagonCampaignPersistedStore];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items, f109673);
  const items1 = [tmp, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = closure_0 && !stateFromStores;
    if (tmp) {
      const obj = HexagonActionCreators;
      const result = obj.markHexagonCampaignDisplayNameStylesVisited();
    }
  }, items1);
}
