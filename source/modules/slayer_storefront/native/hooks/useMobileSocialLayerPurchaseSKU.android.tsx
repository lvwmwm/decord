// Module ID: 9726
// Function ID: 75685
// Name: useMobileSocialLayerPurchaseSKU
// Dependencies: [0, 4294967295, 0, 0, 0]
// Exports: default

// Module 9726 (useMobileSocialLayerPurchaseSKU)
import closure_3 from "result";
import result from "result";

let closure_4 = arg1(dependencyMap[1]).PriceSetAssignmentPurchaseTypes;
result = result.fileFinishedImporting("modules/slayer_storefront/native/hooks/useMobileSocialLayerPurchaseSKU.android.tsx");

export default function useMobileSocialLayerPurchaseSKU(sku) {
  sku = sku.sku;
  let obj = Object.create(null);
  obj.sku = 0;
  const merged = Object.assign(sku, obj);
  let arg1;
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
    arg1 = tmp6;
    const items = [tmp6];
    const effect = React.useEffect(() => {
      if (null != tmp6) {
        const items = [tmp6];
        const inAppSkus = tmp6(closure_2[2]).loadInAppSkus(items);
        const obj = tmp6(closure_2[2]);
      }
    }, items);
    obj = {};
    const merged1 = Object.assign(merged);
    obj["platformSkuId"] = tmp6;
    obj["isFreeForStaffSelfPurchase"] = false;
    return importDefault(dependencyMap[3])(obj);
  }
  DEFAULT = constants.DEFAULT;
};
