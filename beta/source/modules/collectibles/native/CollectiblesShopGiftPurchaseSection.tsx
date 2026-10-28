// Module ID: 13913
// Function ID: 13914
// Name: CollectiblesShopGiftPurchaseSection
// Dependencies: [5, 32, 19, 17, 8713, 7568, 1087, 1394, 21, 5003, 587, 5625, 10528, 504, 8705, 7285, 10613, 1267, 13914, 584, 6704, 5941, 13915, 2002, 1384, 10546, 10534, 5266, 1128, 5276, 2]
// Exports: default

// Module 13913 (CollectiblesShopGiftPurchaseSection)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5941 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6704 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 7568 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8713 */;
import Constants from "Constants" /* 1087 */;
import PremiumConstants from "PremiumConstants" /* 1394 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5003 */;
import size from "module_2" /* 2 */;

let c1, c2;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
({ AnalyticEvents: c9, MarketingURLs: c10 } = Constants);
({ GiftingOrigin: unpackModuleId, PremiumGiftStyles: closure_12 } = PremiumConstants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles((arg0) => {
  let obj2;
  const obj = { container: obj2, disclaimer: { includeFontPadding: true } };
  obj2 = { paddingBottom: nativeDefault.space.PX_12 + arg0, paddingTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  return obj;
});
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftPurchaseSection.tsx");

export default function CollectiblesShopGiftPurchaseSection(product) {
  let _undefined;
  let c3;
  let c4;
  let format;
  let id;
  let intl2;
  let intl3;
  let items2;
  let nextTier;
  let obj6;
  let ref;
  let rsEdd2;
  let str;
  let tmp4Result;
  let tmp7;
  product = product.product;
  require = product;
  const giftOptions = product.giftOptions;
  const giftingOrigin = product.giftingOrigin;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let closure_7;
  let awaitSync;
  let closure_10;
  let tmp2 = giftingOrigin;
  const isPurchaseDisabled = product.isPurchaseDisabled;
  let tmp = giftOptions;
  const tmp3 = closure_15(giftOptions(giftingOrigin[11])().insets.bottom);
  const tmp4 = require;
  const GiftingBadgeExperiment = require("GiftingBadgeExperiment").GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftPurchaseSection" }).enabled;
  let obj = require("get initialized");
  const items = [closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let current;
    const obj = { nextTier: closure_7.getNextTier(require("BadgeId").BadgeId.GIFTING), giftsToNextTier: closure_7.getRemainingToNextTier(require("BadgeId").BadgeId.GIFTING), badgeProgress: current };
    const singleRequirementProgress = closure_7.getSingleRequirementProgress(require("BadgeId").BadgeId.GIFTING);
    current = undefined;
    if (singleRequirementProgress != null) {
      current = singleRequirementProgress.current;
    }
    return obj;
  });
  ({ nextTier, badgeProgress: c3 } = stateFromStoresObject);
  const giftsToNextTier = stateFromStoresObject.giftsToNextTier;
  [tmp7, c4] = _slicedToArray(react.useState(false), 2);
  const tmp6 = _slicedToArray(react.useState(false), 2);
  react = react.useRef(false);
  const analyticsLocations = giftOptions(giftingOrigin[15])().analyticsLocations;
  const tmp8 = awaitSync((analyticsFields) => analyticsFields.analyticsFields);
  let closure_6 = tmp8;
  const tmp9 = awaitSync((orderRecord) => orderRecord.orderRecord);
  const tmp10 = awaitSync((setCheckoutFailed) => setCheckoutFailed.setCheckoutFailed);
  closure_7 = tmp10;
  awaitSync = giftOptions(giftingOrigin[16])(tmp9, giftOptions).awaitSync;
  const items1 = [tmp8, tmp10];
  const onPurchaseError = react.useCallback(() => {
    if (ref.current) {
      tmp.current = false;
      const obj = AnalyticsUtilsDefault;
      obj.track(onPurchaseError.PAYMENT_FLOW_FAILED, closure_6);
      closure_7();
    }
    _undefined(false);
  }, items1);
  let obj2 = {
    product,
    analyticsLocations,
    orderId: id,
    analyticsData: tmp8,
    onPurchaseComplete() {
      let tmp2 = null == giftOptions.recipient_id;
      let tmp = giftOptions;
      if (!tmp2) {
        tmp2 = giftingOrigin !== unpackModuleId.USER_PROFILE_WISHLIST && tmp3 !== unpackModuleId.DM_CHANNEL_WISHLIST;
      }
      if (!tmp2) {
        let obj = DispatcherDefault;
        const obj2 = { type: "WISHLIST_GIFT_SENT", skuId: require.skuId, recipientId: tmp.recipient_id };
        obj.dispatch(obj2);
      }
      ref.current = false;
      _undefined(false);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
      const obj3 = actions_AlertActionCreatorsDefault;
      const obj4 = {
        importer() {
          let giftBadgeProgress;
          let gift_style;
          const promise = require("asyncRequire")(giftingOrigin[22], giftingOrigin.paths);
          return promise.then((result) => {
            let closure_0 = result.default;
            return (arg0) => {
              let STANDARD_BOX = gift_style.gift_style;
              const tmp = closure_3_13;
              const tmp2 = closure_0;
              if (STANDARD_BOX == null) {
                STANDARD_BOX = constants.STANDARD_BOX;
              }
              const obj = { giftStyle: STANDARD_BOX, giftBadgeProgress };
              const merged = Object.assign(arg0);
              return tmp(tmp2, obj);
            };
          });
        },
        isDismissable: false
      };
      obj3.openLazy(obj4);
      const obj5 = PlatformUtils;
      if (obj5.isIOS()) {
        const obj6 = AnalyticsUtilsDefault;
        obj6.track(onPurchaseError.PAYMENT_FLOW_SUCCEEDED, closure_6);
      }
    },
    onPurchaseError,
    onPurchasePending() {

    },
    giftParams: { isGift: true, options: giftOptions }
  };
  id = undefined;
  const tmp12 = giftOptions(giftingOrigin[18]);
  if (tmp9 != null) {
    id = tmp9.id;
  }
  closure_10 = tmp12(obj2);
  let obj3 = { style: tmp3.container, children: items2 };
  let tmp17Result = null;
  const tmp14 = closure_14;
  const tmp15 = closure_6;
  if (enabled) {
    tmp17Result = null;
    if (null != nextTier) {
      let obj4 = { giftsToNextTier, nextTierName: str, nextTierIcon: tmp4Result.getGiftingBadgeTierIconUrl(nextTier) };
      str = nextTier.name;
      const tmp17 = closure_13;
      const tmpResult = tmp(tmp2[25]);
      if (str == null) {
        str = "";
      }
      tmp4Result = tmp4(tmp2[26]);
      tmp17Result = tmp17(tmpResult, obj4);
    }
  }
  items2 = [tmp17Result, , ];
  let obj5 = { variant: "text-xs/normal", style: tmp3.disclaimer, children: format(rsEdd2, obj6) };
  const Text = tmp4(tmp2[27]).Text;
  const intl = tmp4(tmp2[28]).intl;
  format = intl.format;
  obj6 = { buyButtonLabel: intl2.string(tmp4(tmp2[28]).t.ouo4FK), paidServiceTermURL: null, virtualGoodsURL: null };
  rsEdd2 = tmp4(tmp2[28]).t.rsEdd2;
  intl2 = tmp4(tmp2[28]).intl;
  ({ PAID_TERMS: obj7.paidServiceTermURL, PAID_TERMS_VIRTUAL_GOODS: obj7.virtualGoodsURL } = closure_10);
  items2[1] = closure_13(Text, obj5);
  const obj8 = {
    disabled: isPurchaseDisabled,
    loading: tmp7,
    variant: "active",
    text: intl3.string(tmp4(tmp2[28]).t.ouo4FK),
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
          return { value: "IconComponent", done: null };
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
              const promise = closure_128_10();
              promise.catch(closure_128_9);
            } else {
              closure_128_9();
            }
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          c2 = 3;
          throw tmp14;
        }
      }
    })
  };
  const Button = tmp4(tmp2[29]).Button;
  intl3 = tmp4(tmp2[28]).intl;
  items2[2] = closure_13(Button, obj8);
  return tmp14(tmp15, obj3);
};
