// Module ID: 16966
// Function ID: 16967
// Name: DisplayNameStylesFontOrder
// Dependencies: [19, 1407, 5029, 1409, 558, 576, 16129, 5032, 2]

// Module 16966 (DisplayNameStylesFontOrder)
import react2 from "react" /* 576 */;
import DisplayNameFont from "DisplayNameFont" /* 1409 */;
import HexagonCampaignPerkAvailability from "HexagonCampaignPerkAvailability" /* 5032 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 16129 */;
import react from "react" /* 19 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1407 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5029 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let FLYWHEEL_FONTS;
let c3;
let closure_4;
let hasOwnProperty;
({ FLYWHEEL_FONTS, HEXAGON_CAMPAIGN_FONTS: c3 } = DisplayNameStylesConstants);
({ HexagonCampaignPerk: closure_4, HexagonCampaignPerkAvailability: hasOwnProperty } = HexagonCampaignConstants);
let items = [DisplayNameFont.DisplayNameFont.DEFAULT, DisplayNameFont.DisplayNameFont.ZILLA_SLAB, DisplayNameFont.DisplayNameFont.CHERRY_BOMB, DisplayNameFont.DisplayNameFont.CHICLE, DisplayNameFont.DisplayNameFont.MUSEO_MODERNO, DisplayNameFont.DisplayNameFont.NEO_CASTEL, DisplayNameFont.DisplayNameFont.PIXELIFY, DisplayNameFont.DisplayNameFont.SINISTRE];
const items1 = [...FLYWHEEL_FONTS];
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVisibleFontOrder(arg0) {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const includeCampaignFonts = tmp5.includeCampaignFonts;
  let tmp6 = undefined !== includeCampaignFonts && includeCampaignFonts;
  const tmp2Result = DisplayNameStylesFlywheelExperiment;
  const isDisplayNameStylesFlywheelSettersEnabled = tmp2Result.useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
  HexagonCampaignPerkAvailability;
  if (tmp6) {
    tmp6 = tmp9 !== hasOwnProperty.HIDDEN;
  }
  const tmp11 = isDisplayNameStylesFlywheelSettersEnabled ? items1 : items;
  if (cResult[2] === tmp11) {
    let tmp12;
    if (cResult[3] === tmp6) {
      tmp12 = cResult[4];
    }
    return tmp12;
  }
  let tmp13 = tmp11;
  if (tmp6) {
    items = [];
    HermesBuiltin.arraySpread(items, _false, HermesBuiltin.arraySpread(items, tmp11, 0));
    tmp13 = items;
  }
  cResult[2] = tmp11;
  cResult[3] = tmp6;
  cResult[4] = tmp13;
  tmp12 = tmp13;
}) : (function useVisibleFontOrder() {
  let tmp3;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.includeCampaignFonts;
  if (flag === undefined) {
    flag = false;
  }
  let isDisplayNameStylesFlywheelSettersEnabled;
  flag = undefined;
  const obj2 = isDisplayNameStylesFlywheelSettersEnabled(flag[6]);
  isDisplayNameStylesFlywheelSettersEnabled = obj2.useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
  let tmp2 = isDisplayNameStylesFlywheelSettersEnabled(flag[7]);
  if (flag) {
    flag = tmp3 !== constants.HIDDEN;
  }
  items = [isDisplayNameStylesFlywheelSettersEnabled, flag];
  return react.useMemo(() => {
    const tmp2 = isDisplayNameStylesFlywheelSettersEnabled ? items1 : items;
    let tmp3 = tmp2;
    if (flag) {
      items = [];
      HermesBuiltin.arraySpread(items, _false, HermesBuiltin.arraySpread(items, tmp2, 0));
      tmp3 = items;
    }
    return tmp3;
  }, items);
});
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export const useVisibleFontOrder = tmp4;
