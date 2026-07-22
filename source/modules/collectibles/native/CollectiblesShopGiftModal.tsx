// Module ID: 8768
// Function ID: 69308
// Name: CollectiblesShopGiftModal
// Dependencies: []
// Exports: default

// Module 8768 (CollectiblesShopGiftModal)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).COLLECTIBLES_APPLICATION_ID;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftModal.tsx");

export default function CollectiblesShopGiftModal(skuId) {
  let analyticsLocations;
  let onGiftModalDismiss;
  skuId = skuId.skuId;
  const arg1 = skuId;
  ({ analyticsLocations, onGiftModalDismiss } = skuId);
  const importDefault = onGiftModalDismiss;
  const giftingOrigin = skuId.giftingOrigin;
  const dependencyMap = giftingOrigin;
  let closure_5;
  const GiftingBadgeExperiment = arg1(dependencyMap[4]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  const React = enabled;
  const items = [enabled];
  const effect = React.useEffect(() => {
    if (enabled) {
      const badge = skuId(giftingOrigin[5]).fetchBadge(skuId(giftingOrigin[6]).BadgeId.GIFTING);
      const obj = skuId(giftingOrigin[5]);
    }
  }, items);
  let obj = arg1(dependencyMap[7]);
  const items1 = [closure_4];
  const items2 = [skuId];
  let skuId2 = obj.useStateFromStores(items1, () => skuId2.getProduct(skuId), items2);
  closure_4 = skuId2;
  const items3 = [];
  const tmp2 = importDefault(dependencyMap[8]);
  items3[HermesBuiltin.arraySpread(analyticsLocations, 0)] = importDefault(dependencyMap[9]).COLLECTIBLES_MOBILE_GIFT_MODAL;
  skuId = undefined;
  if (null != skuId2) {
    skuId = skuId2.skuId;
  }
  closure_5 = skuId;
  const items4 = [skuId];
  let renderProductDetails = React.useCallback((arg0) => {
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
    let tmp8 = importDefault;
    if (obj2.isCollectibleGiftingSupported()) {
      tmp8 = tmp8(tmp9[15]);
      obj = {};
      skuId2 = skuId2.skuId;
      obj.skuId = skuId2;
      obj.applicationId = closure_5;
      obj.analyticsLocations = tmp2(items3).analyticsLocations;
      obj.lockedRecipientUser = skuId.lockedRecipientUser;
      obj.onGiftModalDismiss = onGiftModalDismiss;
      obj.giftingOrigin = giftingOrigin;
      obj.validateRecipient = renderProductDetails;
      renderProductDetails = function renderProductDetails(arg0) {
        let isValidRecipient;
        let recipientUser;
        ({ recipientUser, isValidRecipient } = arg0);
        return callback(onGiftModalDismiss(giftingOrigin[16]), { product: skuId2, recipientUser, isValidRecipient, isGift: true });
      };
      obj.renderProductDetails = renderProductDetails;
      obj.renderPurchaseSection = function renderPurchaseSection(arg0) {
        let baseAnalyticsFields;
        let giftOptions;
        let isPurchaseDisabled;
        ({ isPurchaseDisabled, giftOptions, baseAnalyticsFields } = arg0);
        return callback(onGiftModalDismiss(giftingOrigin[17]), { product: skuId2, isPurchaseDisabled, giftOptions, baseAnalyticsFields, giftingOrigin, onGiftModalDismiss });
      };
      let tmp7Result = tmp7(tmp8, obj);
    } else {
      obj = { onDismiss: onGiftModalDismiss };
      const intl = arg1(tmp9[14]).intl;
      obj.title = intl.string(arg1(tmp9[14]).t.JCFN/y);
      tmp7Result = tmp7(tmp8(tmp9[13]), obj);
      const tmp8Result = tmp8(tmp9[13]);
    }
    const obj2 = arg1(dependencyMap[12]);
  }
};
