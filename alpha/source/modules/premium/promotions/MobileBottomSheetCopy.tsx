// Module ID: 18232
// Function ID: 18233
// Name: MobileBottomSheetCopy
// Dependencies: [1113, 9609, 10006, 2]
// Exports: getMobileBottomSheetCopy

// Module 18232 (MobileBottomSheetCopy)
import intl from "intl" /* 1113 */;
import MarketingStringFormat from "MarketingStringFormat" /* 9609 */;
import PromotionStringUtils from "PromotionStringUtils" /* 10006 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/promotions/MobileBottomSheetCopy.tsx");

export function getMobileBottomSheetCopy(component) {
  let tmp7Result4;
  if ("mobileBottomSheet" !== component.properties.properties.oneofKind) {
    return null;
  } else {
    const mobileBottomSheet = component.properties.properties.mobileBottomSheet;
    const formatVariableValues = component.getFormatVariableValues(intl.intl.currentLocale);
    const obj5 = MarketingStringFormat;
    const result = obj5.formatMarketingPlainString(mobileBottomSheet.header, formatVariableValues);
    if (result.ok) {
      const tmp7Result = MarketingStringFormat;
      const result1 = tmp7Result.formatMarketingPlainString(mobileBottomSheet.body, formatVariableValues);
      if (result1.ok) {
        let content = null;
        if (null != mobileBottomSheet.button) {
          const tmp7Result3 = MarketingStringFormat;
          const result2 = tmp7Result3.formatMarketingPlainString(mobileBottomSheet.button.copy, formatVariableValues);
          if (result2.ok) {
            content = result2.content;
          } else {
            return null;
          }
        }
        const obj = { header: result.content, body: result1.content, buttonCopy: content, helpArticleLink: tmp7Result4.getHelpArticleLinkProps(mobileBottomSheet.helpArticle, mobileBottomSheet.helpArticleId) };
        tmp7Result4 = PromotionStringUtils;
        return obj;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}
