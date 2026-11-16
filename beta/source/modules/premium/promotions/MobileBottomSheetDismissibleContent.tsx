// Module ID: 9677
// Function ID: 9678
// Name: MobileBottomSheetDismissibleContent
// Dependencies: [5146, 5139, 2]
// Exports: getMobileBottomSheetDismissibleContent

// Module 9677 (MobileBottomSheetDismissibleContent)
import dismissible_content from "dismissible_content" /* 5139 */;
import DismissibleContentTypes from "DismissibleContentTypes" /* 5146 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/promotions/MobileBottomSheetDismissibleContent.tsx");

export function getMobileBottomSheetDismissibleContent(mobileBottomSheet) {
  if (null != mobileBottomSheet) {
    let PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    const obj = DismissibleContentTypes;
    if (obj.isSnowflakeBoundDismissibleContent(mobileBottomSheet.dismissibleContent)) {
      PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL = mobileBottomSheet.dismissibleContent;
    }
    return PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
  }
  PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL = dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
}
