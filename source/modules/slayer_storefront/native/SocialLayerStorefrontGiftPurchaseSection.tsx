// Module ID: 9782
// Function ID: 76021
// Name: SocialLayerStorefrontGiftPurchaseSection
// Dependencies: [57, 31, 27, 6663, 1849, 653, 1851, 33, 4130, 689, 5160, 5468, 566, 5450, 491, 4559, 675, 9783, 9773, 477, 686, 9768, 1212, 9778, 4126, 4543, 2]
// Exports: default

// Module 9782 (SocialLayerStorefrontGiftPurchaseSection)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { useNativeCheckoutStore } from "context";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { GiftingOrigin } from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { paddingBottom: importDefault(689).space.PX_12 + arg0, paddingTop: importDefault(689).space.PX_12, paddingHorizontal: importDefault(689).space.PX_16, gap: importDefault(689).space.PX_8, backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(importDefault(689).shadows.SHADOW_TOP_HIGH);
  obj.container = obj;
  obj = { display: "flex", flexDirection: "column", gap: importDefault(689).space.PX_4 };
  obj.legalCopy = obj;
  return obj;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftPurchaseSection.tsx");

export default function SocialLayerStorefrontGiftPurchaseSection(disabled) {
  let analyticsLocations;
  let _slicedToArray;
  const skuId = disabled.skuId;
  const sku = disabled.sku;
  const giftOptions = disabled.giftOptions;
  ({ giftingOrigin: _slicedToArray, analyticsLocations } = disabled);
  let closure_5;
  let useNativeCheckoutStore;
  let memo;
  let closure_8;
  let closure_9;
  let callback;
  let closure_11;
  const tmp = callback2(sku(giftOptions[10])().insets.bottom);
  let obj = skuId(giftOptions[11]);
  let applicationId;
  if (null != sku) {
    applicationId = sku.applicationId;
  }
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  let obj1 = skuId(giftOptions[12]);
  const items = [memo];
  closure_5 = obj1.useStateFromStores(items, () => memo.getUser(giftOptions.recipient_id));
  const tmp4 = sku(giftOptions[13])(() => skuId(giftOptions[14]).v4());
  useNativeCheckoutStore = tmp4;
  const items1 = [analyticsLocations, skuId, , , , ];
  let type;
  if (null != sku) {
    type = sku.type;
  }
  items1[2] = type;
  let productLine;
  if (null != sku) {
    productLine = sku.productLine;
  }
  items1[3] = productLine;
  let applicationId1;
  if (null != sku) {
    applicationId1 = sku.applicationId;
  }
  items1[4] = applicationId1;
  items1[5] = tmp4;
  memo = analyticsLocations.useMemo(() => {
    const obj = { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: skuId };
    let type;
    if (null != sku) {
      type = sku.type;
    }
    obj.sku_type = type;
    let productLine;
    if (null != sku) {
      productLine = sku.productLine;
    }
    obj.sku_product_line = productLine;
    let applicationId;
    if (null != sku) {
      applicationId = sku.applicationId;
    }
    obj.application_id = applicationId;
    obj.load_id = c6;
    return obj;
  }, items1);
  let tmp10 = callback(analyticsLocations.useState(false), 2);
  closure_8 = tmp10[1];
  closure_9 = analyticsLocations.useRef("not_started");
  let obj2 = skuId(giftOptions[15]);
  const unmountEffect = obj2.useUnmountEffect(() => {
    if ("pending" === closure_9.current) {
      sku(giftOptions[16]).track(lib.PAYMENT_FLOW_CANCELED, memo);
      const obj = sku(giftOptions[16]);
    }
  });
  const items2 = [memo];
  callback = analyticsLocations.useCallback(() => {
    if ("pending" === closure_9.current) {
      closure_9.current = "failed";
      sku(giftOptions[16]).track(lib.PAYMENT_FLOW_FAILED, memo);
      const obj = sku(giftOptions[16]);
    }
    lib(false);
  }, items2);
  const tmp13 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  sku(giftOptions[17])(tmp13, giftOptions);
  const items3 = [giftOptions];
  const memo1 = analyticsLocations.useMemo(() => ({ isGift: true, options: giftOptions }), items3);
  obj = { skuId, sku, giftParams: memo1, analyticsLoadId: tmp4, analyticsLocations };
  let id;
  if (null != tmp13) {
    id = tmp13.id;
  }
  obj.orderId = id;
  obj.analyticsData = memo;
  obj.onPurchaseComplete = function onPurchaseComplete() {
    closure_9.current = "succeeded";
    let obj = skuId(giftOptions[19]);
    if (obj.isIOS()) {
      sku(giftOptions[16]).track(lib.PAYMENT_FLOW_SUCCEEDED, memo);
      const obj2 = sku(giftOptions[16]);
    }
    lib(false);
    let tmp7 = null == giftOptions.recipient_id;
    if (!tmp7) {
      let tmp10 = _slicedToArray !== closure_9.USER_PROFILE_WISHLIST;
      if (tmp10) {
        tmp10 = _slicedToArray !== closure_9.DM_CHANNEL_WISHLIST;
      }
      tmp7 = tmp10;
    }
    if (!tmp7) {
      obj = { type: "WISHLIST_GIFT_SENT", skuId, recipientId: giftOptions.recipient_id };
      sku(giftOptions[20]).dispatch(obj);
      const obj3 = sku(giftOptions[20]);
    }
    obj = { skuId };
    let orbsReward;
    if (null != sku) {
      orbsReward = sku.orbsReward;
    }
    let tmp20;
    if (null != orbsReward) {
      tmp20 = orbsReward;
    }
    obj.orbsReward = tmp20;
    obj.recipient = closure_5;
    obj.analyticsLocations = analyticsLocations;
    const result = skuId(giftOptions[21]).openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj);
    result.then(skuId(giftOptions[21]).closeSocialLayerStorefrontGiftModal);
  };
  obj.onPurchaseError = callback;
  obj.onPurchasePending = function onPurchasePending() {

  };
  closure_11 = sku(giftOptions[18])(obj);
  const intl = skuId(giftOptions[22]).intl;
  const stringResult = intl.string(skuId(giftOptions[22]).t.ouo4FK);
  obj = { style: tmp.container };
  obj1 = { style: tmp.legalCopy };
  const tmp16 = sku(giftOptions[18]);
  const tmp19 = closure_11;
  const tmp21 = callback;
  let tmp22;
  if (null != getOrFetchApplication) {
    tmp22 = getOrFetchApplication;
  }
  const mobileFinePrintMessageForApplication = skuId(giftOptions[23]).getMobileFinePrintMessageForApplication(tmp22, stringResult, { shouldAppendDisclaimer: true });
  obj1.children = mobileFinePrintMessageForApplication.map((children) => {
    const obj = { variant: "text-xs/normal", color: "text-muted", children };
    return callback(skuId(giftOptions[24]).Text, obj, arg1);
  });
  const items4 = [tmp21(closure_5, obj1), ];
  obj2 = {
    variant: "active",
    disabled: disabled.isPurchaseDisabled,
    loading: tmp10[0],
    text: stringResult,
    onPress() {
      closure_9.current = "pending";
      sku(giftOptions[16]).track(lib.PAYMENT_FLOW_STARTED, memo);
      lib(true);
      const obj = sku(giftOptions[16]);
      callback().catch(callback);
    }
  };
  items4[1] = callback(skuId(giftOptions[25]).Button, obj2);
  obj.children = items4;
  return tmp19(closure_5, obj);
};
