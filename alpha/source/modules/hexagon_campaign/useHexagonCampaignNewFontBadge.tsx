// Module ID: 15865
// Function ID: 15866
// Name: useHexagonCampaignNewFontBadge
// Dependencies: [19, 15866, 15642, 4996, 558, 576, 4999, 504, 15867, 15855, 2]

// Module 15865 (useHexagonCampaignNewFontBadge)
import react2 from "react" /* 576 */;
import HexagonCampaignPerkAvailability from "HexagonCampaignPerkAvailability" /* 4999 */;
import HexagonActionCreators from "HexagonActionCreators" /* 15855 */;
import react from "react" /* 19 */;
import DisplayNameStylesSeenStore from "DisplayNameStylesSeenStore" /* 15866 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 15642 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4996 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, seenFonts;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp;
const get_initialized = tmp(504);
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: hasOwnProperty, HexagonCampaignPerk: metroRequire, HexagonCampaignPerkAvailability: metroImportDefault } = HexagonCampaignConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHexagonCampaignNewFontBadge(arg0) {
  let tmp11;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(5);
  const obj2 = HexagonCampaignPerkAvailability;
  const hexagonCampaignPerkAvailability = obj2.useHexagonCampaignPerkAvailability(metroRequire.DISPLAY_NAME_STYLE, arg0);
  const SELECTABLE = metroImportDefault.SELECTABLE;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DisplayNameStylesSeenStore];
    const fn = function o() {
      seenFonts = seenFonts.getSeenFonts();
      return seenFonts.has(closure_1_5);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        const obj = require("DisplayNameStylesActionCreators");
        const result = obj.markDisplayNameStyleFontSeen(closure_1_5);
      }
    }
    cResult[2] = C;
    tmp9 = C;
  } else {
    class C {
      constructor() {
        const obj = require("DisplayNameStylesActionCreators");
        const result = obj.markDisplayNameStyleFontSeen(closure_1_5);
      }
    }
  }
  if (cResult[3] !== (hexagonCampaignPerkAvailability === SELECTABLE && !stateFromStores)) {
    class C {
      constructor() {
        const obj = require("DisplayNameStylesActionCreators");
        const result = obj.markDisplayNameStyleFontSeen(closure_1_5);
      }
    }
    tmp12[0] = hexagonCampaignPerkAvailability === SELECTABLE && !stateFromStores;
    tmp12[1] = tmp9;
    cResult[3] = hexagonCampaignPerkAvailability === SELECTABLE && !stateFromStores;
    cResult[4] = tmp12;
    tmp11 = tmp12;
  } else {
    class C {
      constructor() {
        const obj = require("DisplayNameStylesActionCreators");
        const result = obj.markDisplayNameStyleFontSeen(closure_1_5);
      }
    }
  }
  return tmp11;
}) : (function useHexagonCampaignNewFontBadge(arg0) {
  let obj = HexagonCampaignPerkAvailability;
  let tmp = obj.useHexagonCampaignPerkAvailability(metroRequire.DISPLAY_NAME_STYLE, arg0) === metroImportDefault.SELECTABLE;
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHexagonCampaignHasVisitedDisplayNameStyles() {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [HexagonCampaignPersistedStore];
    const fn = function s() {
      return HexagonCampaignPersistedStore.hasVisitedDisplayNameStyles;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useHexagonCampaignHasVisitedDisplayNameStyles() {
  const items = [HexagonCampaignPersistedStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => HexagonCampaignPersistedStore.hasVisitedDisplayNameStyles);
});
let closure_8 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMarkHexagonCampaignDisplayNameStylesVisited(arg0) {
  let closure_0;
  let closure_1;
  let obj = require("react");
  const cResult = obj.c(4);
  const obj2 = require("HexagonCampaignPerkAvailability");
  const tmp2 = obj2.useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, arg0) === constants2.SELECTABLE;
  _require = tmp2;
  const tmp3 = closure_8();
  dependencyMap = tmp3;
  if (cResult[0] === tmp3) {
    let tmp4;
    let tmp5;
    if (cResult[1] === tmp2) {
      tmp4 = cResult[2];
      tmp5 = cResult[3];
    }
    const effect = react.useEffect(tmp4, tmp5);
  }
  const fn = function t() {
    const tmp = closure_0 && !closure_1;
    if (tmp) {
      const obj = HexagonActionCreators;
      const result = obj.markHexagonCampaignDisplayNameStylesVisited();
    }
  };
  const items = [tmp2, tmp3];
  cResult[0] = tmp3;
  cResult[1] = tmp2;
  cResult[2] = fn;
  cResult[3] = items;
  tmp5 = items;
  tmp4 = fn;
}) : (function useMarkHexagonCampaignDisplayNameStylesVisited(arg0) {
  let closure_0;
  let closure_1;
  let obj = require("HexagonCampaignPerkAvailability");
  let tmp = obj.useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, arg0) === constants2.SELECTABLE;
  _require = tmp;
  const tmp2 = closure_8();
  dependencyMap = tmp2;
  const items = [tmp, tmp2];
  const effect = react.useEffect(() => {
    const tmp = closure_0 && !closure_1;
    if (tmp) {
      const obj = HexagonActionCreators;
      const result = obj.markHexagonCampaignDisplayNameStylesVisited();
    }
  }, items);
});
let result = size.fileFinishedImporting("modules/hexagon_campaign/useHexagonCampaignNewFontBadge.tsx");

export const useHexagonCampaignNewFontBadge = tmp3;
export const useHexagonCampaignHasVisitedDisplayNameStyles = tmp4;
export const useMarkHexagonCampaignDisplayNameStylesVisited = tmp5;
