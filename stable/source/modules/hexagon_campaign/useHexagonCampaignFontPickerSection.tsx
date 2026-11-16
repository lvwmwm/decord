// Module ID: 17687
// Function ID: 17688
// Name: useHexagonCampaignFontPickerSection
// Dependencies: [19, 5195, 1394, 17684, 5200, 16808, 6872, 2]
// Exports: useHexagonCampaignFontPickerSection

// Module 17687 (useHexagonCampaignFontPickerSection)
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1394 */;
import react from "react" /* 19 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5195 */;
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
  const obj2 = visibleFontOrder(17684);
  visibleFontOrder = obj2.useVisibleFontOrder({ includeCampaignFonts: true });
  const obj4 = visibleFontOrder(5200);
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
  const useTrackHexagonCampaignContentViewed = visibleFontOrder(16808).useTrackHexagonCampaignContentViewed;
  visibleFontOrder(16808);
  const DISPLAY_NAME_STYLES_SETTINGS = tmp(6872).QuestContent.DISPLAY_NAME_STYLES_SETTINGS;
  let tmp8 = hasItem;
  const FONT_PICKER = tmp(16808).HexagonCampaignContentSurface.FONT_PICKER;
  if (hasItem) {
    tmp8 = !isTryItOut;
  }
  const trackHexagonCampaignContentViewed = useTrackHexagonCampaignContentViewed(DISPLAY_NAME_STYLES_SETTINGS, FONT_PICKER, tmp8);
  const items = [visibleFontOrder];
  const obj3 = { visibleFontOrder, gridFontOrder: react.useMemo(() => visibleFontOrder.filter((item) => !closure_1_6.includes(item)), items), showCampaignSection: hasItem };
  return obj3;
}
