// Module ID: 10469
// Function ID: 10470
// Name: SocialLayerStorefrontGiftPurchaseSection
// Dependencies: [5, 32, 19, 17, 6844, 1372, 1074, 1374, 21, 4836, 576, 6402, 6589, 504, 1241, 10470, 10274, 1364, 573, 10262, 1115, 10280, 4832, 5281, 2]
// Exports: default

// Module 10469 (SocialLayerStorefrontGiftPurchaseSection)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 6844 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10262 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c1, c2;

let closure_12;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
let useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
const AnalyticEvents = Constants.AnalyticEvents;
const GiftingOrigin = PremiumConstants.GiftingOrigin;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles((arg0) => {
  let obj2;
  const obj = { container: obj2, legalCopy: { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 } };
  obj2 = { paddingBottom: nativeDefault.space.PX_12 + arg0, paddingTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  ({ display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 });
  return obj;
});
let result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftPurchaseSection.tsx");

export default function SocialLayerStorefrontGiftPurchaseSection(skuId) {
  let _undefined;
  let analyticsLocations;
  let c8;
  let closure_7;
  let giftOptions;
  let id;
  let isPurchaseDisabled;
  let items3;
  let mobileFinePrintMessageForApplication;
  let recipient;
  let tmp12;
  skuId = skuId.skuId;
  const sku = skuId.sku;
  ({ isPurchaseDisabled, giftOptions } = skuId);
  ({ giftingOrigin: _asyncToGenerator, analyticsLocations } = skuId);
  react = undefined;
  let closure_6;
  useNativeCheckoutStore = undefined;
  c8 = undefined;
  let ref;
  let onPurchaseError;
  let awaitSync;
  closure_12 = undefined;
  const tmp = sku;
  const tmp2 = giftOptions;
  const tmp3 = closure_13(sku(giftOptions[11])().insets.bottom);
  let applicationId;
  const useGetOrFetchApplication = skuId(giftOptions[12]).useGetOrFetchApplication;
  const tmp5 = skuId(giftOptions[12]);
  if (sku != null) {
    applicationId = sku.applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplication(applicationId);
  const items = [c8];
  const tmp4Result = skuId(tmp2[13]);
  react = tmp4Result.useStateFromStores(items, () => UserStore.getUser(giftOptions.recipient_id));
  let tmp8 = useNativeCheckoutStore((analyticsFields) => analyticsFields.analyticsFields);
  closure_6 = tmp8;
  let tmp9 = useNativeCheckoutStore((setCheckoutFailed) => setCheckoutFailed.setCheckoutFailed);
  useNativeCheckoutStore = tmp9;
  const tmp10 = useNativeCheckoutStore((isPatchOrderLoading) => isPatchOrderLoading.isPatchOrderLoading || isPatchOrderLoading.isCreateOrderLoading);
  const tmp11 = analyticsLocations(react.useState(false), 2);
  [tmp12, c8] = tmp11;
  ref = react.useRef(false);
  const items1 = [tmp8, tmp9];
  onPurchaseError = react.useCallback(() => {
    if (ref.current) {
      tmp.current = false;
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.PAYMENT_FLOW_FAILED, closure_6);
      closure_7();
    }
    _undefined(false);
  }, items1);
  const tmp14 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  awaitSync = tmp(tmp2[15])(tmp14, giftOptions).awaitSync;
  const items2 = [giftOptions];
  const memo = react.useMemo(() => ({ isGift: true, options: giftOptions }), items2);
  let obj = {
    skuId,
    sku,
    giftParams: memo,
    analyticsLoadId: tmp8.load_id,
    analyticsLocations,
    orderId: id,
    analyticsData: tmp8,
    onPurchaseComplete() {
      let orbsReward;
      ref.current = false;
      const obj = PlatformUtils;
      if (obj.isIOS()) {
        const obj2 = AnalyticsUtilsDefault;
        obj2.track(AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, closure_6);
      }
      _undefined(false);
      let tmp9 = null == giftOptions.recipient_id;
      const tmp8 = giftOptions;
      if (!tmp9) {
        tmp9 = _asyncToGenerator !== GiftingOrigin.USER_PROFILE_WISHLIST && tmp10 !== GiftingOrigin.DM_CHANNEL_WISHLIST;
      }
      if (!tmp9) {
        const obj4 = { type: "WISHLIST_GIFT_SENT", skuId, recipientId: tmp8.recipient_id };
        const obj3 = DispatcherDefault;
        obj3.dispatch(obj4);
      }
      const obj5 = { skuId, orbsReward, recipient, analyticsLocations };
      orbsReward = undefined;
      const openSocialLayerStorefrontProductGiftPurchaseSuccessModal = SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductGiftPurchaseSuccessModal;
      SocialLayerStorefrontNativeActionCreators;
      if (sku != null) {
        orbsReward = sku.orbsReward;
      }
      const result = openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj5);
      result.then(SocialLayerStorefrontNativeActionCreators.closeSocialLayerStorefrontGiftModal);
    },
    onPurchaseError,
    onPurchasePending() {

    }
  };
  id = undefined;
  const tmpResult = tmp(tmp2[16]);
  if (tmp14 != null) {
    id = tmp14.id;
  }
  closure_12 = tmpResult(obj);
  const intl = tmp4(tmp2[20]).intl;
  const stringResult = intl.string(skuId(tmp2[20]).t.ouo4FK);
  let obj2 = { style: tmp3.container, children: items3 };
  let obj3 = {
    style: tmp3.legalCopy,
    children: mobileFinePrintMessageForApplication.map((children, index) => {
      const obj = { variant: "text-xs/normal", color: "text-muted", children };
      return awaitSync(skuId(giftOptions[22]).Text, obj, index);
    })
  };
  const getMobileFinePrintMessageForApplication = tmp4(tmp2[21]).getMobileFinePrintMessageForApplication;
  skuId(tmp2[21]);
  mobileFinePrintMessageForApplication = getMobileFinePrintMessageForApplication(getOrFetchApplication, stringResult, { shouldAppendDisclaimer: true });
  items3 = [awaitSync(closure_6, obj3), ];
  const Button = tmp4(tmp2[23]).Button;
  const tmp19 = closure_12;
  if (!isPurchaseDisabled) {
    isPurchaseDisabled = tmp12;
  }
  if (!isPurchaseDisabled) {
    isPurchaseDisabled = tmp10;
  }
  let obj4 = {
    variant: "active",
    disabled: isPurchaseDisabled,
    loading: tmp12,
    text: stringResult,
    onPress: _asyncToGenerator(async (arg0, value) => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp3;
              ref.current = true;
              _undefined(true);
              c1 = 1;
              c2 = 1;
              const obj4 = { value: awaitSync(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (value) {
              const promise = closure_128_12();
              promise.catch(closure_128_10);
            } else {
              closure_128_10();
            }
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp14) {
          c2 = 3;
          throw tmp14;
        }
      }
    })
  };
  items3[1] = awaitSync(Button, obj4);
  return tmp19(closure_6, obj2);
};
