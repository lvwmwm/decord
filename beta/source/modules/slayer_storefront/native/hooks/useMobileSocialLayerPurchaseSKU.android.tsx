// Module ID: 10274
// Function ID: 10275
// Name: useMobileSocialLayerPurchaseSKU
// Dependencies: [19, 1074, 8668, 10275, 2]
// Exports: default

// Module 10274 (useMobileSocialLayerPurchaseSKU)
import Constants from "Constants" /* 1074 */;
import GPlayActionCreators from "GPlayActionCreators" /* 8668 */;
import useMobilePurchaseSKUDefault from "useMobilePurchaseSKU" /* 10275 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const constants = Constants.PriceSetAssignmentPurchaseTypes;
const result = size.fileFinishedImporting("modules/slayer_storefront/native/hooks/useMobileSocialLayerPurchaseSKU.android.tsx");

export default function useMobileSocialLayerPurchaseSKU(sku) {
  sku = sku.sku;
  const merged = Object.assign(sku, Object.assign({ sku: 0 }));
  let c0;
  const giftParams = merged.giftParams;
  let isGift;
  if (giftParams != null) {
    isGift = giftParams.isGift;
  }
  if (isGift != null) {
    let DEFAULT;
    if (isGift) {
      DEFAULT = constants.GIFT;
    }
    let googleSkuIds;
    if (sku != null) {
      googleSkuIds = sku.googleSkuIds;
    }
    if (googleSkuIds == null) {
      googleSkuIds = {};
    }
    let tmp4 = googleSkuIds[DEFAULT];
    if (tmp4 == null) {
      tmp4 = null;
    }
    c0 = tmp4;
    let items = [tmp4];
    const effect = react.useEffect(() => {
      if (null != c0) {
        const items = [tmp];
        const obj = GPlayActionCreators;
        const inAppSkus = obj.loadInAppSkus(items);
      }
    }, items);
    let obj = { platformSkuId: tmp4, isFreeForStaffSelfPurchase: false };
    const tmp9 = useMobilePurchaseSKUDefault;
    const merged1 = Object.assign(merged);
    return tmp9(obj);
  }
  DEFAULT = constants.DEFAULT;
};
