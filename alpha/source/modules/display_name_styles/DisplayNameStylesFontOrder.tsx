// Module ID: 17316
// Function ID: 17317
// Name: DisplayNameStylesFontOrder
// Dependencies: [19, 1401, 5039, 1403, 5042, 2]
// Exports: useVisibleFontOrder

// Module 17316 (DisplayNameStylesFontOrder)
import DisplayNameFont from "DisplayNameFont" /* 1403 */;
import react from "react" /* 19 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1401 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5039 */;
import size from "module_2" /* 2 */;

let FLYWHEEL_FONTS;
let c3;
let closure_4;
let hasOwnProperty;
({ FLYWHEEL_FONTS, HEXAGON_CAMPAIGN_FONTS: c3 } = DisplayNameStylesConstants);
({ HexagonCampaignPerk: closure_4, HexagonCampaignPerkAvailability: hasOwnProperty } = HexagonCampaignConstants);
let items = [DisplayNameFont.DisplayNameFont.DEFAULT, DisplayNameFont.DisplayNameFont.ZILLA_SLAB, DisplayNameFont.DisplayNameFont.CHERRY_BOMB, DisplayNameFont.DisplayNameFont.CHICLE, DisplayNameFont.DisplayNameFont.MUSEO_MODERNO, DisplayNameFont.DisplayNameFont.NEO_CASTEL, DisplayNameFont.DisplayNameFont.PIXELIFY, DisplayNameFont.DisplayNameFont.SINISTRE];
const items1 = [...FLYWHEEL_FONTS];
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export function useVisibleFontOrder(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.includeCampaignFonts;
  if (flag === undefined) {
    flag = false;
  }
  flag = undefined;
  flag(5042);
  if (flag) {
    let tmp3 = constants;
    flag = tmp2 !== constants.HIDDEN;
  }
  let items = [flag];
  return react.useMemo(() => {
    let tmp3;
    if (flag) {
      const items = [];
      HermesBuiltin.arraySpread(items, _false, HermesBuiltin.arraySpread(items, items1, 0));
      tmp3 = items;
    } else {
      tmp3 = tmp2;
    }
    return tmp3;
  }, items);
}
