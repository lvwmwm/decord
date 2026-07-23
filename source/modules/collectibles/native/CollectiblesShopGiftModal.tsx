// Module ID: 8775
// Function ID: 69349
// Name: CollectiblesShopGiftModal
// Dependencies: [31, 6774, 653, 33, 8776, 8271, 8265, 566, 5464, 5484, 1832, 6773, 3789, 8777, 1212, 8778, 11813, 11816, 2]
// Exports: default

// Module 8775 (CollectiblesShopGiftModal)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { COLLECTIBLES_APPLICATION_ID as closure_5 } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftModal.tsx");

export default function CollectiblesShopGiftModal(skuId) {
  let analyticsLocations;
  let onGiftModalDismiss;
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss } = skuId);
  const giftingOrigin = skuId.giftingOrigin;
  skuId = undefined;
  const GiftingBadgeExperiment = skuId(giftingOrigin[4]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  const items = [enabled];
  const effect = enabled.useEffect(() => {
    if (enabled) {
      const badge = skuId(giftingOrigin[5]).fetchBadge(skuId(giftingOrigin[6]).BadgeId.GIFTING);
      const obj = skuId(giftingOrigin[5]);
    }
  }, items);
  let obj = skuId(giftingOrigin[7]);
  const items1 = [skuId2];
  const items2 = [skuId];
  skuId2 = obj.useStateFromStores(items1, () => skuId2.getProduct(skuId), items2);
  const items3 = [];
  const tmp2 = onGiftModalDismiss(giftingOrigin[8]);
  items3[HermesBuiltin.arraySpread(analyticsLocations, 0)] = onGiftModalDismiss(giftingOrigin[9]).COLLECTIBLES_MOBILE_GIFT_MODAL;
  skuId = undefined;
  if (null != skuId2) {
    skuId = skuId2.skuId;
  }
  const items4 = [skuId];
  let renderProductDetails = enabled.useCallback((arg0) => {
    if (obj.isNullOrEmpty(skuId)) {
      let resolved = Promise.resolve(false);
    } else {
      resolved = skuId(giftingOrigin[11]).validateCollectiblesRecipient(arg0, skuId);
      const obj2 = skuId(giftingOrigin[11]);
    }
    return resolved;
  }, items4);
  if (null == skuId2) {
    return null;
  } else {
    let tmp8 = onGiftModalDismiss;
    if (obj2.isCollectibleGiftingSupported()) {
      tmp8 = tmp8(tmp9[15]);
      obj = {};
      skuId2 = skuId2.skuId;
      obj.skuId = skuId2;
      obj.applicationId = skuId;
      obj.analyticsLocations = tmp2(items3).analyticsLocations;
      obj.lockedRecipientUser = skuId.lockedRecipientUser;
      obj.onGiftModalDismiss = onGiftModalDismiss;
      obj.giftingOrigin = giftingOrigin;
      obj.validateRecipient = renderProductDetails;
      renderProductDetails = function renderProductDetails(arg0) {
        let isValidRecipient;
        let recipientUser;
        ({ recipientUser, isValidRecipient } = arg0);
        return outer1_6(onGiftModalDismiss(giftingOrigin[16]), { product: skuId2, recipientUser, isValidRecipient, isGift: true });
      };
      obj.renderProductDetails = renderProductDetails;
      obj.renderPurchaseSection = function renderPurchaseSection(arg0) {
        let baseAnalyticsFields;
        let giftOptions;
        let isPurchaseDisabled;
        ({ isPurchaseDisabled, giftOptions, baseAnalyticsFields } = arg0);
        return outer1_6(onGiftModalDismiss(giftingOrigin[17]), { product: skuId2, isPurchaseDisabled, giftOptions, baseAnalyticsFields, giftingOrigin, onGiftModalDismiss });
      };
      let tmp7Result = tmp7(tmp8, obj);
    } else {
      obj = { onDismiss: onGiftModalDismiss };
      const intl = skuId(tmp9[14]).intl;
      obj.title = intl.string(skuId(tmp9[14]).t["JCFN/y"]);
      tmp7Result = tmp7(tmp8(tmp9[13]), obj);
      const tmp8Result = tmp8(tmp9[13]);
    }
    obj2 = skuId(giftingOrigin[12]);
  }
};
