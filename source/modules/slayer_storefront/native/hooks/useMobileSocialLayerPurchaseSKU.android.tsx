// Module ID: 9739
// Function ID: 75767
// Name: useMobileSocialLayerPurchaseSKU
// Dependencies: [31, 653, 7160, 9740, 2]
// Exports: default

// Module 9739 (useMobileSocialLayerPurchaseSKU)
import result from "result";
import { PriceSetAssignmentPurchaseTypes as closure_4 } from "ME";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/slayer_storefront/native/hooks/useMobileSocialLayerPurchaseSKU.android.tsx");

export default function useMobileSocialLayerPurchaseSKU(sku) {
  sku = sku.sku;
  let obj = Object.create(null);
  obj.sku = 0;
  const merged = Object.assign(sku, obj);
  let c0;
  const giftParams = merged.giftParams;
  let isGift;
  if (null != giftParams) {
    isGift = giftParams.isGift;
  }
  if (null != isGift) {
    if (isGift) {
      let DEFAULT = constants.GIFT;
    }
    let googleSkuIds;
    if (null != sku) {
      googleSkuIds = sku.googleSkuIds;
    }
    if (null == googleSkuIds) {
      googleSkuIds = {};
    }
    let tmp6 = null;
    if (null != googleSkuIds[DEFAULT]) {
      tmp6 = tmp5;
    }
    c0 = tmp6;
    let items = [tmp6];
    const effect = React.useEffect(() => {
      if (null != _undefined) {
        const items = [_undefined];
        const inAppSkus = _undefined(outer1_2[2]).loadInAppSkus(items);
        const obj = _undefined(outer1_2[2]);
      }
    }, items);
    obj = {};
    const merged1 = Object.assign(merged);
    obj["platformSkuId"] = tmp6;
    obj["isFreeForStaffSelfPurchase"] = false;
    return importDefault(9740)(obj);
  }
  DEFAULT = constants.DEFAULT;
};
