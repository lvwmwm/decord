// Module ID: 6598
// Function ID: 58420
// Name: openBuyNitroPerkDetails
// Dependencies: [31, 27, 33, 4131, 6512, 6599, 1212, 4542, 689, 6602, 6603, 5482, 4099, 2]
// Exports: openBuyNitroPerkDetails

// Module 6598 (openBuyNitroPerkDetails)
import { Image } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ illustration: { width: "100%", height: 180 } });
let closure_7 = require("result").memo((perk) => {
  let analyticsLocations;
  let applicationId;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let selectedProductId;
  let selectedTier;
  perk = perk.perk;
  ({ selectedTier, selectedProductId, analyticsLocations, applicationId, onPaymentSuccess, onPaymentDismiss } = perk);
  let obj = require(6512) /* _createForOfIteratorHelperLoose */;
  const buyNitroPlanSelection = obj.useBuyNitroPlanSelection({ tier: selectedTier, productId: selectedProductId });
  const detail = perk.detail;
  let tmp4Result = null;
  if (null != detail) {
    obj = { title: perk.label };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.description = intl.string(detail.description);
    obj = { source: detail.image, style: tmp.illustration, resizeMode: "contain" };
    obj.illustration = callback(Image, obj);
    const obj1 = { spacing: importDefault(689).space.PX_12 };
    let tmp10 = null != buyNitroPlanSelection.selection.item;
    if (tmp10) {
      const obj2 = { planSelection: buyNitroPlanSelection, item: buyNitroPlanSelection.selection.item, centered: true };
      tmp10 = callback(importDefault(6602), obj2);
    }
    const items = [tmp10, ];
    const obj3 = {
      planSelection: buyNitroPlanSelection,
      location: importDefault(5482).PREMIUM_MARKETING_PERK_CARD,
      sourceAnalyticsLocations: analyticsLocations,
      applicationId,
      onHostSheetClose() {
          return outer1_1(outer1_2[12]).hideActionSheet("BuyNitroPerkDetailsActionSheet");
        },
      onPaymentSuccess,
      onPaymentDismiss
    };
    items[1] = callback(importDefault(6603), obj3);
    obj1.children = items;
    obj.actions = closure_5(require(4542) /* Stack */.Stack, obj1);
    tmp4Result = callback(require(6599) /* PromoSheet */.PromoSheet, obj);
    const tmp17 = importDefault(6603);
    const tmp4 = callback;
    const tmp8 = closure_5;
  }
  return tmp4Result;
});
const result = require("jsxProd").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPerkDetails.tsx");

export const openBuyNitroPerkDetails = function openBuyNitroPerkDetails(perk, arg1) {
  let obj = require(4099) /* showActionSheet */;
  obj = {};
  obj = { perk };
  const merged = Object.assign(arg1);
  obj.content = callback(closure_7, obj);
  obj.key = "BuyNitroPerkDetailsActionSheet";
  obj.showActionSheet(obj);
};
