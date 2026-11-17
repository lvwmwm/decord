// Module ID: 18003
// Function ID: 18004
// Name: useHexagonCampaignFontPickerSection
// Dependencies: [19, 5335, 1397, 18000, 5340, 17120, 6965, 2]
// Exports: useHexagonCampaignFontPickerSection

// Module 18003 (useHexagonCampaignFontPickerSection)
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1397 */;
import react from "react" /* 19 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5335 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: c3, HexagonCampaignPerk: closure_4, HexagonCampaignPerkAvailability: hasOwnProperty } = HexagonCampaignConstants);
const HEXAGON_CAMPAIGN_FONTS = DisplayNameStylesConstants.HEXAGON_CAMPAIGN_FONTS;
const result = size.fileFinishedImporting("modules/hexagon_campaign/useHexagonCampaignFontPickerSection.tsx");

export function useHexagonCampaignFontPickerSection(DisplayNameStylesFontPickerSheet, isTryItOut) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.includeLockedInTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let visibleFontOrder;
  const obj2 = visibleFontOrder(18000);
  visibleFontOrder = obj2.useVisibleFontOrder({ includeCampaignFonts: true });
  const obj4 = visibleFontOrder(5340);
  const hexagonCampaignPerkAvailability = obj4.useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, DisplayNameStylesFontPickerSheet);
  let hasItem = hexagonCampaignPerkAvailability === constants2.SELECTABLE;
  if (!hasItem) {
    if (flag) {
      flag = isTryItOut;
    }
    if (flag) {
      flag = hexagonCampaignPerkAvailability === tmp4.LOCKED;
    }
    hasItem = flag;
  }
  if (hasItem) {
    hasItem = visibleFontOrder.includes(closure_3);
  }
  const useTrackHexagonCampaignContentViewed = visibleFontOrder(17120).useTrackHexagonCampaignContentViewed;
  visibleFontOrder(17120);
  const DISPLAY_NAME_STYLES_SETTINGS = tmp(6965).QuestContent.DISPLAY_NAME_STYLES_SETTINGS;
  let tmp8 = hasItem;
  const FONT_PICKER = tmp(17120).HexagonCampaignContentSurface.FONT_PICKER;
  if (hasItem) {
    tmp8 = !isTryItOut;
  }
  const trackHexagonCampaignContentViewed = useTrackHexagonCampaignContentViewed(DISPLAY_NAME_STYLES_SETTINGS, FONT_PICKER, tmp8);
  const items = [visibleFontOrder];
  const obj3 = { visibleFontOrder, gridFontOrder: react.useMemo(() => visibleFontOrder.filter((item) => !closure_1_6.includes(item)), items), showCampaignSection: hasItem };
  return obj3;
}
