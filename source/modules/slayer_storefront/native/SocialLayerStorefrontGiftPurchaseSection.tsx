// Module ID: 9741
// Function ID: 75768
// Name: SocialLayerStorefrontGiftPurchaseSection
// Dependencies: []
// Exports: default

// Module 9741 (SocialLayerStorefrontGiftPurchaseSection)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const useNativeCheckoutStore = arg1(dependencyMap[3]).useNativeCheckoutStore;
let closure_7 = importDefault(dependencyMap[4]);
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const GiftingOrigin = arg1(dependencyMap[6]).GiftingOrigin;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
let closure_12 = arg1(dependencyMap[8]).createStyles((arg0) => {
  let obj = {};
  obj = { paddingBottom: importDefault(dependencyMap[9]).space.PX_12 + arg0, paddingTop: importDefault(dependencyMap[9]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16, gap: importDefault(dependencyMap[9]).space.PX_8, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(importDefault(dependencyMap[9]).shadows.SHADOW_TOP_HIGH);
  obj.container = obj;
  obj = { position: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001863282064227495, location: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007062002001945, gap: importDefault(dependencyMap[9]).space.PX_4 };
  obj.legalCopy = obj;
  return obj;
});
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftPurchaseSection.tsx");

export default function SocialLayerStorefrontGiftPurchaseSection(disabled) {
  let analyticsLocations;
  const skuId = disabled.skuId;
  const arg1 = skuId;
  const sku = disabled.sku;
  const importDefault = sku;
  const giftOptions = disabled.giftOptions;
  const dependencyMap = giftOptions;
  ({ giftingOrigin: closure_3, analyticsLocations } = disabled);
  const React = analyticsLocations;
  let closure_5;
  let useNativeCheckoutStore;
  let closure_7;
  let closure_8;
  let closure_9;
  let callback;
  let closure_11;
  const tmp = callback2(importDefault(dependencyMap[10])().insets.bottom);
  let obj = arg1(dependencyMap[11]);
  let applicationId;
  if (null != sku) {
    applicationId = sku.applicationId;
  }
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  let obj1 = arg1(dependencyMap[12]);
  const items = [closure_7];
  closure_5 = obj1.useStateFromStores(items, () => memo.getUser(giftOptions.recipient_id));
  const tmp4 = importDefault(dependencyMap[13])(() => skuId(giftOptions[14]).v4());
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
  const memo = React.useMemo(() => {
    const obj = { location_stack: analyticsLocations, sku_id: skuId };
    let type;
    if (null != sku) {
      type = sku.type;
    }
    obj.sku_type = type;
    let productLine;
    if (null != sku) {
      productLine = sku.productLine;
      const tmp4 = sku;
    }
    obj.sku_product_line = productLine;
    let applicationId;
    if (null != sku) {
      applicationId = sku.applicationId;
    }
    obj.application_id = applicationId;
    obj.load_id = tmp4;
    return obj;
  }, items1);
  closure_7 = memo;
  const tmp10 = callback(React.useState(false), 2);
  closure_8 = tmp10[1];
  closure_9 = React.useRef("not_started");
  let obj2 = arg1(dependencyMap[15]);
  const unmountEffect = obj2.useUnmountEffect(() => {
    if ("pending" === closure_9.current) {
      sku(giftOptions[16]).track(lib.PAYMENT_FLOW_CANCELED, memo);
      const obj = sku(giftOptions[16]);
    }
  });
  const items2 = [memo];
  callback = React.useCallback(() => {
    if ("pending" === closure_9.current) {
      closure_9.current = "failed";
      sku(giftOptions[16]).track(lib.PAYMENT_FLOW_FAILED, memo);
      const obj = sku(giftOptions[16]);
    }
    lib(false);
  }, items2);
  const tmp13 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  importDefault(dependencyMap[17])(tmp13, giftOptions);
  const items3 = [giftOptions];
  const memo1 = React.useMemo(() => ({ isGift: true, options: giftOptions }), items3);
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
      let tmp10 = closure_3 !== closure_9.USER_PROFILE_WISHLIST;
      if (tmp10) {
        tmp10 = closure_3 !== closure_9.DM_CHANNEL_WISHLIST;
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
  closure_11 = importDefault(dependencyMap[18])(obj);
  const intl = arg1(dependencyMap[22]).intl;
  const stringResult = intl.string(arg1(dependencyMap[22]).t.ouo4FK);
  obj = { style: tmp.container };
  obj1 = { style: tmp.legalCopy };
  const tmp16 = importDefault(dependencyMap[18]);
  const tmp19 = closure_11;
  const tmp21 = callback;
  let tmp22;
  if (null != getOrFetchApplication) {
    tmp22 = getOrFetchApplication;
  }
  const mobileFinePrintMessageForApplication = arg1(dependencyMap[23]).getMobileFinePrintMessageForApplication(tmp22, stringResult, { shouldAppendDisclaimer: true });
  obj1.children = mobileFinePrintMessageForApplication.map((children) => callback(skuId(giftOptions[24]).TextWithIOSLinkWorkaround, { children }, arg1));
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
  items4[1] = callback(arg1(dependencyMap[25]).Button, obj2);
  obj.children = items4;
  return tmp19(closure_5, obj);
};
