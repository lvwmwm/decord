// Module ID: 16897
// Function ID: 16898
// Name: DisplayNameStylesFontOrder
// Dependencies: [19, 1395, 5037, 5042, 2]
// Exports: useVisibleFontOrder

// Module 16897 (DisplayNameStylesFontOrder)
import react from "react" /* 19 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1395 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5037 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ FONT_ORDER: c3, HEXAGON_CAMPAIGN_FONTS: closure_4 } = DisplayNameStylesConstants);
({ HexagonCampaignPerk: hasOwnProperty, HexagonCampaignPerkAvailability: metroRequire } = HexagonCampaignConstants);
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
      HermesBuiltin.arraySpread(items, React3, HermesBuiltin.arraySpread(items, _false, 0));
      tmp3 = items;
    } else {
      tmp3 = tmp2;
    }
    return tmp3;
  }, items);
}
