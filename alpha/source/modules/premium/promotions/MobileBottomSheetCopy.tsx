// Module ID: 17141
// Function ID: 17142
// Name: MobileBottomSheetCopy
// Dependencies: [1112, 9199, 13951, 2]
// Exports: getMobileBottomSheetCopy

// Module 17141 (MobileBottomSheetCopy)
import intl from "intl" /* 1112 */;
import MarketingStringFormat from "MarketingStringFormat" /* 9199 */;
import PromotionStringUtils from "PromotionStringUtils" /* 13951 */;
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
