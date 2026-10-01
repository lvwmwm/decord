// Module ID: 10264
// Function ID: 10265
// Name: SocialLayerStorefrontProductDetailsModal
// Dependencies: [32, 19, 17, 5822, 6649, 10265, 1074, 21, 672, 576, 4836, 5994, 10266, 7755, 5899, 4832, 1115, 10267, 1177, 2011, 5092, 1613, 5438, 8667, 504, 6589, 6586, 6647, 6603, 5298, 1241, 10262, 10263, 1364, 4501, 10268, 8666, 10269, 10273, 6652, 8288, 10277, 3585, 5281, 7363, 7526, 10280, 5943, 5992, 5293, 10282, 2]
// Exports: default

// Module 10264 (SocialLayerStorefrontProductDetailsModal)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import StringUtils from "StringUtils" /* 2011 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4501 */;
import Text_Text from "Text/Text" /* 4832 */;
import StoreUtils from "StoreUtils" /* 5092 */;
import FastImageDefault from "FastImage" /* 5899 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6647 */;
import common_Video from "common/Video" /* 7755 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10262 */;
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 10263 */;
import SocialLayerStorefrontAnalyticsConstants from "SocialLayerStorefrontAnalyticsConstants" /* 10265 */;
import carouselMediaItems from "carouselMediaItems" /* 10266 */;
import StorefrontNativeUtils from "StorefrontNativeUtils" /* 10267 */;
import redirectToSlayerStorefrontWebDefault from "redirectToSlayerStorefrontWeb" /* 10268 */;
import NativePaymentContext from "NativePaymentContext" /* 10282 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SKUStore from "SKUStore" /* 5822 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 6649 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import module_672_mod from "module_672" /* 672 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj17;
let obj18;
let obj19;
let obj2;
let obj20;
let obj21;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let unpackModuleId;
function HeroMedia(arg0) {
  let items1;
  let landscape;
  let mediaItem;
  let obj10;
  let obj11;
  let obj3;
  let obj4;
  let obj7;
  let obj9;
  let tmp6;
  ({ mediaItem, landscape } = arg0);
  const tmp = closure_18();
  const items = [tmp.hero, ];
  if (landscape) {
    landscape = tmp.heroLandscape;
  }
  items[1] = landscape;
  if ("video" === mediaItem.type) {
    const obj2 = { style: items, children: authStore2(common_Video.VideoComponent, obj3) };
    obj3 = { source: obj4, poster: mediaItem.videoThumbnailSrc, muted: true, resizeMode: "cover", style: tmp.heroImage };
    obj4 = { uri: mediaItem.src };
    tmp6 = authStore2(metroImportDefault, obj2);
  } else if (null != mediaItem.backgroundSrc) {
    const obj6 = { source: obj7, style: metroRequire.absoluteFill, resizeMode: "cover" };
    const obj5 = { style: items, children: items1 };
    obj7 = { uri: mediaItem.backgroundSrc };
    items1 = [authStore2(FastImageDefault, obj6), ];
    const obj8 = { source: obj9, style: tmp.heroImage, resizeMode: "cover" };
    obj9 = { uri: mediaItem.src };
    items1[1] = authStore2(FastImageDefault, obj8);
    tmp6 = closure_15(metroImportDefault, obj5);
  } else {
    const obj = { style: items, children: authStore2(FastImageDefault, obj10) };
    obj10 = { source: obj11, style: tmp.heroImage, resizeMode: "cover" };
    obj11 = { uri: mediaItem.src };
    tmp6 = authStore2(metroImportDefault, obj);
  }
  return tmp6;
}
function InGameItemTag() {
  let intl;
  const obj = { variant: "text-sm/medium", color: "text-muted", children: intl.string(intl5.t.V91tvy) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  return authStore2(Text, obj);
}
function ProductPriceSection(sku) {
  let items;
  let obj5;
  sku = sku.sku;
  const tmp = closure_18();
  const obj = StorefrontNativeUtils;
  const obj2 = { sku, priceSetAssignmentPurchaseType: map1.DEFAULT };
  const userPrice = obj.useFormattedSKUPrice(obj2).userPrice;
  let tmp4 = null;
  if (null != userPrice) {
    const obj3 = { style: tmp.priceSection, children: items };
    items = [authStore2(InGameItemTag, {}), ];
    const obj4 = { style: tmp.priceRow, children: authStore2(Text_Text.Text, obj5) };
    obj5 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: userPrice };
    items[1] = authStore2(metroImportDefault, obj4);
    tmp4 = closure_15(metroImportDefault, obj3);
  }
  return tmp4;
}
function BundleThumbnailRow(trackPDPClick) {
  let intl;
  let items1;
  let mediaItems;
  let onSelectIndex;
  let thumbnail;
  ({ items: require, mediaItems, selectedIndex: importDefault, onSelectIndex } = trackPDPClick);
  trackPDPClick = trackPDPClick.trackPDPClick;
  const tmp = closure_18();
  react = tmp;
  let items = [onSelectIndex, trackPDPClick];
  let closure_5 = react.useCallback((arg0) => {
    trackPDPClick(SlayerShopPDPCTAType.CAROUSEL_ITEM);
    onSelectIndex(arg0);
  }, items);
  let obj = { style: tmp.section, children: items1 };
  let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(require("intl").t.U7DAV9) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items1 = [closure_14(Text, obj2), ];
  let obj3 = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: tmp.bundleThumbnailRow,
    children: mediaItems.map((item, index) => {
      let items;
      let obj2;
      let obj3;
      let obj4;
      let tmp10;
      let tmp4Result;
      let tmp9;
      require = index;
      let label;
      const PressableOpacity = require("native").PressableOpacity;
      const tmp2 = importDefault;
      const tmp4 = require;
      if (require[index] != null) {
        label = tmp.label;
      }
      if (label == null) {
        let title;
        if (require[index] != null) {
          title = tmp.title;
        }
        label = title;
      }
      let thumbnailInnerSelected = index === tmp2;
      const obj = {
        accessibilityRole: "button",
        accessibilityLabel: label,
        accessibilityState: { selected: thumbnailInnerSelected },
        onPress() {
          return closure_5(index);
        },
        style: items,
        children: closure_1_14(tmp9, obj2)
      };
      items = [thumbnail.thumbnail, thumbnailInnerSelected && thumbnail.thumbnailSelected];
      const items1 = [thumbnail.thumbnailInner, ];
      tmp9 = closure_1_7;
      if (thumbnailInnerSelected) {
        thumbnailInnerSelected = tmp8.thumbnailInnerSelected;
      }
      items1[1] = thumbnailInnerSelected;
      obj2 = { style: items1, children: closure_1_14(tmp10, obj3) };
      obj3 = { source: obj4, style: thumbnail.thumbnailImage, resizeMode: "cover" };
      obj4 = { uri: tmp4Result.getThumbnailSrc(item) };
      tmp10 = require("FastImage");
      tmp4Result = tmp4(onSelectIndex[12]);
      return closure_1_14(PressableOpacity, obj, index);
    })
  };
  items1[1] = closure_14(closure_5, obj3);
  return closure_15(closure_7, obj);
}
function SKUNameAndDescriptionSection(sku) {
  let items;
  sku = sku.sku;
  let tmp5Result = null;
  const tmp = closure_18();
  const obj = StringUtils;
  if (!obj.isNullOrEmpty(sku.name)) {
    const obj2 = { style: tmp.section, children: items };
    const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: sku.name };
    items = [authStore2(Text_Text.Heading, obj3), ];
    const tmp2Result = StringUtils;
    let tmp7Result = !tmp2Result.isNullOrEmpty(sku.description);
    tmp2Result.isNullOrEmpty(sku.description);
    const tmp5 = closure_15;
    const tmp6 = metroImportDefault;
    const tmp7 = authStore2;
    if (tmp7Result) {
      const obj4 = { variant: "text-md/medium", color: "text-muted", children: sku.description };
      tmp7Result = tmp7(tmp2(4832).Text, obj4);
    }
    items[1] = tmp7Result;
    tmp5Result = tmp5(tmp6, obj2);
  }
  return tmp5Result;
}
function ItemDetailsSection(selectedItem) {
  let items;
  let items1;
  let obj7;
  selectedItem = selectedItem.selectedItem;
  const applicationId = selectedItem.applicationId;
  const tmp = closure_18();
  let assetURL = null;
  if (null != selectedItem.labelIconAssetId) {
    const obj = StoreUtils;
    assetURL = obj.getAssetURL(applicationId, selectedItem.labelIconAssetId);
  }
  let trimmed;
  if (selectedItem.title != null) {
    trimmed = str.trim();
  }
  let trimmed1;
  if (selectedItem.label != null) {
    trimmed1 = str2.trim();
  }
  let trimmed2;
  if (selectedItem.description != null) {
    trimmed2 = str3.trim();
  }
  const obj2 = StringUtils;
  if (obj2.isNullOrEmpty(trimmed)) {
    let tmp11Result2;
    const tmp8Result = StringUtils;
    if (tmp8Result.isNullOrEmpty(trimmed1)) {
      tmp11Result2 = null;
      StringUtils;
    }
    return tmp11Result2;
  }
  const obj3 = { style: tmp.section, children: items };
  const tmp8Result6 = StringUtils;
  let tmp14 = !tmp8Result6.isNullOrEmpty(trimmed);
  tmp8Result6.isNullOrEmpty(trimmed);
  if (tmp14) {
    const obj4 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: trimmed };
    tmp14 = authStore2(tmp8(4832).Heading, obj4);
  }
  items = [tmp14, , ];
  const tmp8Result7 = StringUtils;
  let tmp11Result = !tmp8Result7.isNullOrEmpty(trimmed1);
  tmp8Result7.isNullOrEmpty(trimmed1);
  if (tmp11Result) {
    let tmp18 = null != assetURL;
    const obj5 = { style: tmp.labelRow, children: items1 };
    if (tmp18) {
      const obj6 = { source: obj7, style: tmp.labelIcon };
      obj7 = { uri: assetURL };
      tmp18 = authStore2(FastImageDefault, obj6);
    }
    items1 = [tmp18, ];
    const obj8 = { variant: "text-sm/medium", color: "text-muted", children: trimmed1 };
    items1[1] = authStore2(Text_Text.Text, obj8);
    tmp11Result = tmp11(tmp12, obj5);
  }
  items[1] = tmp11Result;
  const tmp8Result8 = StringUtils;
  let tmp23 = !tmp8Result8.isNullOrEmpty(trimmed2);
  tmp8Result8.isNullOrEmpty(trimmed2);
  if (tmp23) {
    const obj9 = { variant: "text-md/medium", color: "text-default", children: trimmed2 };
    tmp23 = authStore2(tmp8(4832).Text, obj9);
  }
  items[2] = tmp23;
  tmp11Result2 = tmp11(tmp12, obj3);
}
function SocialLayerStorefrontProductDetailsModal(skuId) {
  let Button;
  let GOOGLE;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let applicationId4;
  let arr8;
  let arr9;
  let c10;
  let c11;
  let c12;
  let closeButtonIcon;
  let intl;
  let intl2;
  let intl3;
  let items10;
  let items12;
  let items13;
  let items14;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items25;
  let items26;
  let items27;
  let mobileFinePrintMessageForApplication;
  let name;
  let obj20;
  let obj7;
  let obj8;
  let productLine;
  let tmp30;
  let tmp32;
  let tmp34;
  let tmp43;
  let tmp70;
  let type;
  const f90952 = () => {
    let result;
    let applicationId1;
    if (stateFromStores != null) {
      applicationId1 = tmp.applicationId;
    }
    if (null == applicationId1) {
      const items = [[], []];
      result = items;
    } else {
      const tenantMetadata = tmp.tenantMetadata;
      let carouselItems;
      const convertCarouselItemsToMediaItems = carouselMediaItems.convertCarouselItemsToMediaItems;
      const tmp8 = require;
      if (tenantMetadata != null) {
        const socialLayer = tenantMetadata.socialLayer;
        if (socialLayer != null) {
          carouselItems = socialLayer.carouselItems;
        }
      }
      if (carouselItems == null) {
        carouselItems = [];
      }
      const applicationId = tmp.applicationId;
      const obj = { heroWidth: tmp8(10266).MOBILE_HERO_WIDTH_PX };
      result = convertCarouselItemsToMediaItems(carouselItems, applicationId, stateFromStores2, obj);
    }
    return result;
  };
  skuId = skuId.skuId;
  const analyticsLocations = skuId.analyticsLocations;
  let stateFromStores2;
  let memo1;
  let trackPDPClick;
  let skuAssets;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  let ref;
  let tmp = closure_18();
  dependencyMap = tmp;
  let tmp2 = analyticsLocations;
  const rect = analyticsLocations(1613)();
  let tmp4 = skuId;
  let obj = skuId(5438);
  const isScreenLandscape = obj.useIsScreenLandscape();
  let obj2 = analyticsLocations(8667);
  const mobileStoreFront = obj2.useMobileStoreFront();
  let items = [trackPDPClick];
  const obj3 = skuId(504);
  const stateFromStores = obj3.useStateFromStores(items, () => SKUStore.get(skuId));
  let items1 = [trackPDPClick];
  const obj4 = skuId(504);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => {
    const tmp2 = SKUStore.isFetching(skuId) || SKUStore.didFetchingSkuFail(skuId);
    return tmp2;
  });
  let applicationId1;
  const useGetOrFetchApplication = skuId(6589).useGetOrFetchApplication;
  const tmp9 = skuId(6589);
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplication(applicationId1);
  let tmp13 = getOrFetchApplication;
  const tmp2Result = tmp2(6586);
  if (getOrFetchApplication == null) {
    tmp13 = null;
  }
  const hasAlreadyLinked = tmp2Result(tmp13).hasAlreadyLinked;
  let tmp4Result = tmp4(504);
  const items2 = [skuAssets];
  stateFromStores2 = tmp4Result.useStateFromStores(items2, () => skuAssets.getSkuAssets());
  const items3 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => {
    const obj = SlayerStorefrontUtils;
    return obj.getCardImageURL(stateFromStores);
  }, items3);
  const tmp17 = mobileStoreFront(stateFromStores.useState(0), 2);
  const first = tmp17[0];
  const items4 = [analyticsLocations];
  const tmp19 = tmp17[1];
  memo1 = stateFromStores.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, AnalyticsLocationDefault.SLAYER_STOREFRONT_NATIVE_PDP];
    return items1;
  }, items4);
  tmp2(5298)(() => {
    let applicationId;
    const tmp = AnalyticsUtilsDefault;
    const track = tmp.track;
    const OPEN_MODAL = unpackModuleId.OPEN_MODAL;
    const obj = { location_stack: memo1, type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY, sku_id: skuId, application_id: applicationId };
    applicationId = undefined;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    track(OPEN_MODAL, obj);
  });
  const items5 = [skuId, , ];
  let applicationId2;
  const useCallback = stateFromStores.useCallback;
  if (stateFromStores != null) {
    applicationId2 = stateFromStores.applicationId;
  }
  items5[1] = applicationId2;
  items5[2] = memo1;
  trackPDPClick = useCallback((cta_type) => {
    let applicationId;
    const obj = { slayer_storefront_session_id: "Array", sku_id: skuId, guild_id: true, application_id: applicationId, cta_type, location_stack: memo1 };
    applicationId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED = unpackModuleId.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED;
    AnalyticsUtilsDefault;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    track(SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, obj);
  }, items5);
  const items6 = [stateFromStores, stateFromStores2];
  [arr8, arr9] = mobileStoreFront(stateFromStores.useMemo(f90952, items6), 2);
  let num = 0;
  mobileStoreFront(stateFromStores.useMemo(f90952, items6), 2);
  if (first < arr9.length) {
    num = first;
  }
  let tmp26 = arr8[num];
  if (tmp26 == null) {
    tmp26 = null;
  }
  let tmp27 = arr9[num];
  if (tmp27 == null) {
    tmp27 = null;
  }
  let num2;
  if (stateFromStores != null) {
    let tenantMetadata = stateFromStores.tenantMetadata;
    if (tenantMetadata != null) {
      let socialLayer = tenantMetadata.socialLayer;
      if (socialLayer != null) {
        let carouselItems = socialLayer.carouselItems;
        if (carouselItems != null) {
          num2 = carouselItems.length;
        }
      }
    }
  }
  if (num2 == null) {
    num2 = 0;
  }
  skuAssets = tmp28;
  [tmp30, c10] = mobileStoreFront(stateFromStores.useState(false), 2);
  mobileStoreFront(stateFromStores.useState(false), 2);
  [tmp32, c11] = mobileStoreFront(stateFromStores.useState(false), 2);
  mobileStoreFront(stateFromStores.useState(false), 2);
  [tmp34, c12] = mobileStoreFront(stateFromStores.useState(0), 2);
  mobileStoreFront(stateFromStores.useState(0), 2);
  ref = obj6.useRef(false);
  const items7 = [stateFromStores, stateFromStores2, num2 === arr8.length, stateFromStores1, ];
  let country;
  const useEffect = obj6.useEffect;
  if (mobileStoreFront != null) {
    country = mobileStoreFront.country;
  }
  items7[4] = country;
  const effect = useEffect(() => {
    let APPLE;
    let applicationId;
    let country;
    let id;
    let obj2;
    const tmp2 = null != stateFromStores && null != stateFromStores.applicationId;
    if (tmp2) {
      const current = skuAssets || stateFromStores1 || ref.current;
      if (!current) {
        ref.current = true;
        const obj = { withGoogleSkuIds: obj2.isAndroid(), countryCode: country, paymentGateway: APPLE };
        const fetchSocialLayerStorefrontSkuForApplication = SocialLayerStorefrontActionCreators.fetchSocialLayerStorefrontSkuForApplication;
        ({ applicationId, id } = stateFromStores);
        SocialLayerStorefrontActionCreators;
        country = undefined;
        obj2 = PlatformUtils;
        const tmp5 = require;
        if (mobileStoreFront != null) {
          country = mobileStoreFront.country;
        }
        APPLE = undefined;
        const tmp5Result = tmp5(1364);
        if (tmp5Result.isIOS()) {
          APPLE = _undefined3.APPLE;
        }
        const socialLayerStorefrontSkuForApplication = fetchSocialLayerStorefrontSkuForApplication(applicationId, id, obj);
      }
    }
  }, items7);
  const items8 = [skuId, , ];
  let orbsReward;
  const callback1 = obj6.useCallback(() => {
    _undefined(false);
  }, []);
  const useCallback2 = stateFromStores.useCallback;
  if (stateFromStores != null) {
    orbsReward = stateFromStores.orbsReward;
  }
  items8[1] = orbsReward;
  items8[2] = memo1;
  const items9 = [trackPDPClick, , ];
  let applicationId3;
  const callback2 = useCallback2(() => {
    let orbsReward;
    _undefined(false);
    const obj = { skuId, orbsReward, analyticsLocations: memo1 };
    orbsReward = undefined;
    const openSocialLayerStorefrontProductSelfPurchaseSuccessModal = SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductSelfPurchaseSuccessModal;
    SocialLayerStorefrontNativeActionCreators;
    if (stateFromStores != null) {
      orbsReward = stateFromStores.orbsReward;
    }
    const result = openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj);
    result.then(SocialLayerStorefrontNativeActionCreators.closeSocialLayerStorefrontProductDetailsModal);
  }, items8);
  const useCallback3 = stateFromStores.useCallback;
  if (stateFromStores != null) {
    applicationId3 = stateFromStores.applicationId;
  }
  items9[1] = applicationId3;
  items9[2] = skuId;
  const callback3 = useCallback3(() => {
    let tmp = callback(SlayerShopPDPCTAType.BUY_BUTTON);
    let obj = BillingPlatformUtils;
    if (obj.isSocialLayerStorefrontPurchaseSupported()) {
      _undefined2(true);
      _undefined3((arg0) => arg0 + 1);
      _undefined(true);
    } else {
      let applicationId;
      const tmp4 = redirectToSlayerStorefrontWebDefault;
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      const obj2 = { applicationId, skuId, source: "SocialLayerStorefrontProductDetailsModal" };
      const tmp4Result = tmp4(obj2);
      tmp4Result.then((result) => {
        const tmp = result;
        if (tmp) {
          const obj = skuId(closeButtonIcon[31]);
          result = obj.closeSocialLayerStorefrontProductDetailsModal();
        }
      });
    }
  }, items9);
  const OTPACOMOrderExperiment = tmp4(8666).OTPACOMOrderExperiment;
  let enabled = OTPACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontProductDetailsModal" }).enabled;
  const tmp4Result6 = tmp4(1364);
  if (tmp4Result6.isIOS()) {
    GOOGLE = tmp42.APPLE_ADVANCED_COMMERCE;
    tmp43 = tmp42;
  } else {
    GOOGLE = tmp42.GOOGLE;
    tmp43 = tmp42;
  }
  let tmp45Result = null;
  if (tmp32) {
    const obj5 = { headless: true, paymentGateway: GOOGLE, orderRequired: enabled, skuIds: items10, isGift: false, activeSubscription: null, onOrderRetryCancellation: tmp4(10262).closeSocialLayerStorefrontProductDetailsModal, checkoutAnalyticsFields: obj7, children: closure_14(tmp4(10273).HeadlessSlayerStorefrontPurchaseRunner, obj8) };
    const tmp2Result2 = tmp2(10269);
    if (enabled) {
      enabled = GOOGLE === tmp43.APPLE_ADVANCED_COMMERCE;
    }
    items10 = [skuId];
    obj7 = { is_gift: false, location_stack: memo1, payment_type: "sku", sku_id: skuId, sku_type: type, sku_product_line: productLine, application_id: applicationId4 };
    type = undefined;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    productLine = undefined;
    if (stateFromStores != null) {
      productLine = stateFromStores.productLine;
    }
    applicationId4 = undefined;
    if (stateFromStores != null) {
      applicationId4 = stateFromStores.applicationId;
    }
    obj8 = { attempt: tmp34, skuId, sku: stateFromStores, analyticsLocations: memo1, onPurchaseComplete: callback2, onPurchaseError: callback1 };
    tmp45Result = tmp45(tmp2Result2, obj5, skuId);
  }
  const items11 = [skuId, memo1, trackPDPClick];
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp51;
    let tmp65Result2;
    const tmp4Result7 = tmp4(6652);
    let result = tmp4Result7.isSlayerSkuAvailableOnThisPlatform(stateFromStores);
    const intl4 = tmp4(1115).intl;
    const stringResult = intl4.string(tmp4(1115).t.boqtTA);
    const tmp4Result8 = tmp4(4501);
    let result1 = tmp4Result8.isSocialLayerStorefrontGiftingSupported();
    if (null != tmp27) {
      const obj9 = { mediaItem: tmp27, landscape: isScreenLandscape };
      tmp51 = closure_14(HeroMedia, obj9);
    } else {
      tmp51 = null;
      if (null != memo) {
        const obj10 = { sku: stateFromStores };
        tmp51 = closure_14(tmp2(8288), obj10);
      }
    }
    let tmp55 = null;
    if (stateFromStores.exclusive) {
      const obj11 = { style: tmp.exclusiveBadgeContainer, children: closure_14(tmp4(10277).ExclusiveBadge, {}) };
      tmp55 = closure_14(memo1, obj11);
    }
    let tmp58 = null;
    if (arr9.length > 1) {
      const obj12 = { items: arr8, mediaItems: arr9, selectedIndex: num, onSelectIndex: tmp19, trackPDPClick };
      tmp58 = closure_14(BundleThumbnailRow, obj12);
    }
    let applicationId = stateFromStores.applicationId;
    let tmp61 = null;
    if (arr9.length > 1) {
      tmp61 = tmp26;
    }
    let tmp62 = null;
    if (null != tmp61) {
      tmp62 = null;
      if (null != applicationId) {
        const obj13 = { selectedItem: tmp61, applicationId };
        tmp62 = closure_14(ItemDetailsSection, obj13);
      }
    }
    const obj14 = { style: items12, children: items13 };
    items12 = [tmp.footer, ];
    items12[1] = { paddingBottom: rect.bottom + tmp2(576).space.PX_16 };
    const obj15 = { paddingBottom: rect.bottom + tmp2(576).space.PX_16 };
    const obj16 = { sku: stateFromStores };
    items13 = [closure_14(ProductPriceSection, obj16), , , ];
    let tmp67Result = !result;
    if (tmp67Result) {
      const obj17 = { variant: "text-xs/normal", color: "text-muted", style: tmp.availabilityCopy, includeFontPadding: true, children: intl.string(tmp2(3585).gndWN7) };
      const Text = tmp4(4832).Text;
      intl = tmp4(1115).intl;
      tmp67Result = tmp67(Text, obj17);
    }
    items13[1] = tmp67Result;
    const obj18 = { style: tmp.footerButtonRow, children: items14 };
    const obj19 = { style: tmp.buyButton, children: closure_14(Button, obj20) };
    obj20 = { variant: "primary", size: "lg", text: stringResult, loading: tmp30, disabled: tmp70, onPress: callback3 };
    tmp70 = tmp30;
    Button = tmp4(5281).Button;
    if (!tmp30) {
      tmp70 = !result;
    }
    items14 = [closure_14(memo1, obj19), ];
    if (result1) {
      const obj21 = { icon: tmp2(7526), variant: "primary", size: "lg", disabled: tmp30, accessibilityLabel: intl2.string(tmp4(1115).t.QAZA5f), onPress: tmp50 };
      const IconButton = tmp4(7363).IconButton;
      intl2 = tmp4(1115).intl;
      result1 = tmp67(IconButton, obj21);
    }
    items14[1] = result1;
    items13[2] = closure_15(memo1, obj18);
    if (result) {
      const obj22 = {
        style: tmp.legalCopy,
        children: mobileFinePrintMessageForApplication.map((children, index) => {
              const obj = { variant: "text-xs/normal", color: "text-muted", includeFontPadding: true, children };
              return closure_1_14(skuId(closeButtonIcon[15]).Text, obj, index);
            })
      };
      const getMobileFinePrintMessageForApplication = tmp4(10280).getMobileFinePrintMessageForApplication;
      tmp4(10280);
      const obj23 = { shouldAppendDisclaimer: false === hasAlreadyLinked };
      mobileFinePrintMessageForApplication = getMobileFinePrintMessageForApplication(getOrFetchApplication, stringResult, obj23);
      result = tmp67(tmp66, obj22);
    }
    items13[3] = result;
    const tmp65Result = closure_15(memo1, obj14);
    const items15 = [tmp.container, ];
    let num3 = 0;
    const tmp4Result10 = tmp4(1364);
    if (!tmp4Result10.isIOS()) {
      num3 = rect.top;
    }
    const obj24 = { style: items15, children: items16 };
    const obj25 = { paddingTop: num3 };
    items15[1] = obj25;
    items16 = [tmp45Result, , , ];
    const obj26 = { style: tmp.header, children: items17 };
    const obj27 = {
      onPress: tmp4(10262).closeSocialLayerStorefrontProductDetailsModal,
      backImage() {
          const obj = { size: "md", style: closeButtonIcon.closeButtonIcon };
          return authStore2(XSmallIcon.XSmallIcon, obj);
        },
      accessibilityLabel: intl3.string(tmp4(1115).t.cpT0Cq),
      displayMode: "minimal"
    };
    const HeaderBackButton = tmp4(5943).HeaderBackButton;
    intl3 = tmp4(1115).intl;
    items17 = [closure_14(HeaderBackButton, obj27), ];
    const obj28 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerTitle, children: name };
    name = undefined;
    const Heading = tmp4(4832).Heading;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    items17[1] = closure_14(Heading, obj28);
    items16[1] = closure_15(memo1, obj26);
    let exclusive = stateFromStores.exclusive;
    const obj29 = { style: tmp.scrollContainer, children: items19 };
    if (exclusive) {
      const obj30 = { style: stateFromStores2.absoluteFill, colors: items18, pointerEvents: "none" };
      items18 = [closure_16, closure_17];
      exclusive = tmp67(tmp2(5293), obj30);
    }
    items19 = [exclusive, ];
    if (isScreenLandscape) {
      const obj32 = { style: tmp.heroColumnLandscape, contentContainerStyle: items20, children: items21 };
      items20 = [tmp.heroColumnContentLandscape, ];
      const obj31 = { style: tmp.columnsLandscape, children: items23 };
      const obj33 = { paddingBottom: rect.bottom + 8 };
      items20[1] = obj33;
      items21 = [tmp51, ];
      const obj34 = { style: tmp.bundleGroupLandscape, children: items22 };
      items22 = [tmp58, tmp62];
      items21[1] = closure_15(memo1, obj34);
      items23 = [closure_15(stateFromStores1, obj32), ];
      const obj35 = { style: tmp.detailsScrollLandscape, contentContainerStyle: items24, children: items26 };
      items24 = [, ];
      ({ scrollContent: arr30[0], detailsContentLandscape: arr30[1] } = tmp);
      const obj36 = { style: tmp.detailsGroupLandscape, children: items25 };
      items25 = [tmp55, ];
      const obj37 = { sku: stateFromStores };
      items25[1] = closure_14(SKUNameAndDescriptionSection, obj37);
      items26 = [closure_15(memo1, obj36), tmp65Result];
      items23[1] = closure_15(stateFromStores1, obj35);
      tmp65Result2 = tmp65(tmp66, obj31);
    } else {
      const obj38 = { contentContainerStyle: tmp.scrollContent, children: items27 };
      items27 = [tmp51, tmp55, , , ];
      const obj39 = { sku: stateFromStores };
      items27[2] = closure_14(SKUNameAndDescriptionSection, obj39);
      items27[3] = tmp58;
      items27[4] = tmp62;
      tmp65Result2 = tmp65(stateFromStores1, obj38);
    }
    items19[1] = tmp65Result2;
    items16[2] = closure_15(memo1, obj29);
    items16[3] = !isScreenLandscape && tmp65Result;
    return closure_15(memo1, obj24);
  }
}
let react = react_mod;
({ ScrollView: hasOwnProperty, StyleSheet: metroRequire, View: metroImportDefault } = react_native);
const SlayerShopPDPCTAType = SocialLayerStorefrontAnalyticsConstants.SlayerShopPDPCTAType;
({ AnalyticEvents: unpackModuleId, PaymentGateways: closure_12, PriceSetAssignmentPurchaseTypes: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let module_672 = module_672_mod;
const importDefaultResultResult = module_672(nativeDefault.unsafe_rawColors.BRAND_500);
const alphaResult = importDefaultResultResult.alpha(0.25);
let closure_16 = alphaResult.hex();
module_672 = module_672_mod;
const importDefaultResult1Result = module_672(nativeDefault.unsafe_rawColors.BRAND_500);
const alphaResult1 = importDefaultResult1Result.alpha(0);
let closure_17 = alphaResult1.hex();
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, header: obj2, headerTitle: { flexShrink: 1 }, closeButtonIcon: obj3, scrollContent: obj4, scrollContainer: { flex: 1 }, columnsLandscape: obj5, heroColumnLandscape: { flex: 1 }, heroColumnContentLandscape: obj6, bundleGroupLandscape: obj7, detailsScrollLandscape: { flex: 1 }, detailsContentLandscape: { flexGrow: 1, justifyContent: "space-between", paddingBottom: 0 }, detailsGroupLandscape: obj8, section: obj9, bundleThumbnailRow: obj10, thumbnail: size, thumbnailSelected: obj11, thumbnailInner: obj12, thumbnailInnerSelected: obj13, thumbnailImage: { width: "100%", height: "100%" }, labelRow: obj14, labelIcon: size1, priceRow: obj15, footer: obj16, footerButtonRow: obj17, buyButton: { flex: 1 }, availabilityCopy: { textAlign: "center" }, legalCopy: obj18, hero: obj19, heroLandscape: { flex: 1, minHeight: 140, height: "applicationId" }, priceSection: obj20, heroImage: { width: "100%", height: "100%" }, exclusiveBadgeContainer: obj21 };
obj2 = { height: NavigatorConstants.NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
obj4 = { alignItems: "stretch", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
obj5 = { flex: 1, flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj6 = { flexGrow: 1, gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16 };
obj7 = { gap: nativeDefault.space.PX_4 };
obj8 = { gap: nativeDefault.space.PX_16 };
obj9 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj10 = { flexDirection: "row", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
size = { width: 64, height: 64, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderColor: "transparent" };
obj11 = { borderColor: nativeDefault.colors.BORDER_STRONG };
obj12 = { flex: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj13 = { margin: 2, borderRadius: nativeDefault.radii.sm };
obj14 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj15 = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj16 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj17 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj18 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
obj19 = { marginHorizontal: nativeDefault.space.PX_16, height: carouselMediaItems.MOBILE_HERO_HEIGHT_PX, borderRadius: nativeDefault.radii.md, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj20 = { width: "100%", gap: nativeDefault.space.PX_8 };
obj21 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_18 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx");

export default function WrappedSocialLayerStorefrontProductDetailsModal(arg0) {
  let obj2;
  const obj = { skuIDs: [], activeSubscription: null, children: authStore2(SocialLayerStorefrontProductDetailsModal, obj2) };
  obj2 = {};
  const NativePaymentContextProvider = NativePaymentContext.NativePaymentContextProvider;
  const merged = Object.assign(arg0);
  return authStore2(NativePaymentContextProvider, obj);
};
