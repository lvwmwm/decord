// Module ID: 9735
// Function ID: 75720
// Name: HeroMedia
// Dependencies: [57, 31, 27, 6663, 4175, 5613, 9736, 653, 33, 666, 689, 4130, 5084, 9737, 8302, 5085, 4126, 1212, 9738, 1273, 1832, 4369, 1557, 8002, 566, 5470, 5467, 5611, 5484, 5450, 491, 4559, 675, 9734, 7459, 477, 9739, 5615, 5094, 5119, 4554, 8212, 9741, 3104, 4543, 7771, 7759, 9744, 5459, 7194, 7195, 8769, 2]
// Exports: default

// Module 9735 (HeroMedia)
import _slicedToArray from "_slicedToArray";
import useMountLayoutEffect from "useMountLayoutEffect";
import get_ActivityIndicator from "_createForOfIteratorHelperLoose";
import { useNativeCheckoutStore } from "context";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { SlayerShopPDPCTAType } from "SlayerShopCardCTAType";
import ME from "ME";
import jsxProd from "openSocialLayerStorefrontUnsupportedOnMobileAlert";
import importDefaultResult from "t";
import importDefaultResult1 from "t";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import alphaResult1 from "_slicedToArray";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function HeroMedia(mediaItem) {
  mediaItem = mediaItem.mediaItem;
  const tmp = callback3();
  if ("video" === mediaItem.type) {
    let obj = { style: tmp.hero };
    obj = {};
    const obj1 = { uri: mediaItem.src };
    obj.source = obj1;
    obj.poster = mediaItem.videoThumbnailSrc;
    obj.muted = true;
    obj.resizeMode = "cover";
    obj.style = tmp.heroImage;
    obj.children = callback(require(8302) /* _isNativeReflectConstruct */.VideoComponent, obj);
    let tmp7 = callback(closure_7, obj);
  } else if (null != mediaItem.backgroundSrc) {
    const obj2 = { style: tmp.hero };
    const obj3 = {};
    const obj4 = { uri: mediaItem.backgroundSrc };
    obj3.source = obj4;
    obj3.style = absoluteFill.absoluteFill;
    obj3.resizeMode = "cover";
    const items = [callback(importDefault(5085), obj3), ];
    const obj5 = {};
    const obj6 = { uri: mediaItem.src };
    obj5.source = obj6;
    obj5.style = tmp.heroImage;
    obj5.resizeMode = "cover";
    items[1] = callback(importDefault(5085), obj5);
    obj2.children = items;
    tmp7 = callback2(closure_7, obj2);
  } else {
    obj = { style: tmp.hero };
    const obj7 = {};
    const obj8 = { uri: mediaItem.src };
    obj7.source = obj8;
    obj7.style = tmp.heroImage;
    obj7.resizeMode = "cover";
    obj.children = callback(importDefault(5085), obj7);
    tmp7 = callback(closure_7, obj);
  }
  return tmp7;
}
function InGameItemTag() {
  const obj = { variant: "text-sm/medium", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.V91tvy);
  return callback(require(4126) /* Text */.Text, obj);
}
function ProductPriceSection(sku) {
  const tmp = callback3();
  let obj = require(9738) /* useFormattedSKUPrice */;
  obj = { sku: sku.sku, priceSetAssignmentPurchaseType: constants2.DEFAULT };
  const userPrice = obj.useFormattedSKUPrice(obj).userPrice;
  let tmp2 = null;
  if (null != userPrice) {
    obj = { style: tmp.priceSection };
    const items = [callback(InGameItemTag, {}), ];
    const obj1 = { style: tmp.priceRow };
    const obj2 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: userPrice };
    obj1.children = callback(require(4126) /* Text */.Text, obj2);
    items[1] = callback(closure_7, obj1);
    obj.children = items;
    tmp2 = callback2(closure_7, obj);
  }
  return tmp2;
}
function BundleThumbnailRow(trackPDPClick) {
  let importDefault;
  let mediaItems;
  let onSelectIndex;
  let require;
  ({ items: require, mediaItems, selectedIndex: importDefault, onSelectIndex } = trackPDPClick);
  trackPDPClick = trackPDPClick.trackPDPClick;
  const tmp = callback3();
  const React = tmp;
  let items = [onSelectIndex, trackPDPClick];
  let closure_5 = React.useCallback((arg0) => {
    trackPDPClick(outer1_11.CAROUSEL_ITEM);
    onSelectIndex(arg0);
  }, items);
  let obj = { style: tmp.section };
  obj = { variant: "text-xs/semibold", color: "text-muted" };
  const intl = require(onSelectIndex[17]).intl;
  obj.children = intl.string(require(onSelectIndex[17]).t.U7DAV9);
  let items1 = [callback(require(onSelectIndex[16]).Text, obj), ];
  obj = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: tmp.bundleThumbnailRow,
    children: mediaItems.map((thumbnailSrc) => {
      const table = arg1;
      let thumbnailInnerSelected = arg1 === closure_1;
      let obj = { accessibilityRole: "button" };
      let label;
      if (null != table[arg1]) {
        label = tmp.label;
      }
      if (null == label) {
        let title;
        if (null != tmp) {
          title = tmp.title;
        }
        label = title;
      }
      obj.accessibilityLabel = label;
      obj = { selected: thumbnailInnerSelected };
      obj.accessibilityState = obj;
      obj.onPress = function onPress() {
        return outer1_5(closure_0);
      };
      const items = [table[arg1].thumbnail, ];
      let thumbnailSelected = thumbnailInnerSelected;
      if (thumbnailInnerSelected) {
        thumbnailSelected = tmp.thumbnailSelected;
      }
      items[1] = thumbnailSelected;
      obj.style = items;
      obj = {};
      const items1 = [table[arg1].thumbnailInner, ];
      if (thumbnailInnerSelected) {
        thumbnailInnerSelected = tmp.thumbnailInnerSelected;
      }
      items1[1] = thumbnailInnerSelected;
      obj.style = items1;
      const obj1 = {};
      const obj2 = {};
      const tmp2 = outer1_15;
      const tmp6 = outer1_15;
      const tmp7 = outer1_7;
      const tmp9 = outer1_1(onSelectIndex[15]);
      obj2.uri = outer1_0(onSelectIndex[13]).getThumbnailSrc(thumbnailSrc);
      obj1.source = obj2;
      obj1.style = table[arg1].thumbnailImage;
      obj1.resizeMode = "cover";
      obj.children = outer1_15(tmp9, obj1);
      obj.children = tmp6(tmp7, obj);
      return tmp2(outer1_0(onSelectIndex[19]).PressableOpacity, obj, arg1);
    })
  };
  items1[1] = callback(closure_5, obj);
  obj.children = items1;
  return callback2(closure_7, obj);
}
function SKUNameAndDescriptionSection(sku) {
  sku = sku.sku;
  let obj = require(1832) /* isNullOrEmpty */;
  let tmp3Result = null;
  if (!obj.isNullOrEmpty(sku.name)) {
    obj = { style: tmp.section };
    obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: sku.name };
    const items = [callback(require(4126) /* Text */.Heading, obj), ];
    let tmp8 = !require(1832) /* isNullOrEmpty */.isNullOrEmpty(sku.description);
    if (tmp8) {
      const obj1 = { variant: "text-md/medium", color: "text-muted", children: sku.description };
      tmp8 = callback(require(4126) /* Text */.Text, obj1);
    }
    items[1] = tmp8;
    obj.children = items;
    tmp3Result = closure_16(closure_7, obj);
    const obj4 = require(1832) /* isNullOrEmpty */;
    const tmp3 = closure_16;
    const tmp4 = closure_7;
  }
  return tmp3Result;
}
function ItemDetailsSection(selectedItem) {
  selectedItem = selectedItem.selectedItem;
  const tmp = callback3();
  let assetURL = null;
  if (null != selectedItem.labelIconAssetId) {
    let obj = require(4369) /* _httpGetWithCountryCodeQuery */;
    assetURL = obj.getAssetURL(selectedItem.applicationId, selectedItem.labelIconAssetId);
  }
  let trimmed;
  if (null != selectedItem.title) {
    trimmed = str.trim();
  }
  let trimmed1;
  if (null != selectedItem.label) {
    trimmed1 = str2.trim();
  }
  let trimmed2;
  if (null != selectedItem.description) {
    trimmed2 = str3.trim();
  }
  let obj1 = require(1832) /* isNullOrEmpty */;
  if (obj1.isNullOrEmpty(trimmed)) {
    let obj2 = require(1832) /* isNullOrEmpty */;
    if (obj2.isNullOrEmpty(trimmed1)) {
      let obj3 = require(1832) /* isNullOrEmpty */;
      let tmp13Result = null;
    }
    return tmp13Result;
  }
  obj = { style: tmp.section };
  let obj5 = require(1832) /* isNullOrEmpty */;
  let tmp15 = !obj5.isNullOrEmpty(trimmed);
  if (tmp15) {
    obj = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: trimmed };
    tmp15 = callback(require(4126) /* Text */.Heading, obj);
  }
  const items = [tmp15, , ];
  let tmp20Result = !require(1832) /* isNullOrEmpty */.isNullOrEmpty(trimmed1);
  if (tmp20Result) {
    obj1 = { style: tmp.labelRow };
    let tmp22 = null != assetURL;
    if (tmp22) {
      obj2 = {};
      obj3 = { uri: assetURL };
      obj2.source = obj3;
      obj2.style = tmp.labelIcon;
      tmp22 = callback(importDefault(5085), obj2);
    }
    const items1 = [tmp22, ];
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: trimmed1 };
    items1[1] = callback(require(4126) /* Text */.Text, obj4);
    obj1.children = items1;
    tmp20Result = closure_16(closure_7, obj1);
    const tmp20 = closure_16;
    const tmp21 = closure_7;
  }
  items[1] = tmp20Result;
  const obj8 = require(1832) /* isNullOrEmpty */;
  const tmp13 = closure_16;
  const tmp14 = closure_7;
  let tmp29 = !require(1832) /* isNullOrEmpty */.isNullOrEmpty(trimmed2);
  if (tmp29) {
    obj5 = { variant: "text-md/medium", color: "text-default", children: trimmed2 };
    tmp29 = callback(require(4126) /* Text */.Text, obj5);
  }
  items[2] = tmp29;
  obj.children = items;
  tmp13Result = tmp13(tmp14, obj);
}
function SocialLayerStorefrontProductDetailsModal(skuId) {
  let arr10;
  let arr9;
  let c13;
  let tmp33;
  skuId = skuId.skuId;
  const analyticsLocations = skuId.analyticsLocations;
  let stateFromStores2;
  let memo1;
  let useNativeCheckoutStore;
  let memo2;
  let closure_10;
  let callback;
  let c12;
  c13 = undefined;
  let closure_14;
  let callback1;
  let c16;
  let result = callback3();
  const dependencyMap = result;
  const rect = analyticsLocations(1557)();
  let obj = analyticsLocations(8002);
  const storeFront = obj.useNativeIAPPayments().storeFront;
  let obj1 = skuId(566);
  let items = [memo2];
  const stateFromStores = obj1.useStateFromStores(items, () => memo2.get(skuId));
  let obj2 = skuId(566);
  const items1 = [memo2];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let isFetchingResult = memo2.isFetching(skuId);
    if (!isFetchingResult) {
      isFetchingResult = memo2.didFetchingSkuFail(skuId);
    }
    return isFetchingResult;
  });
  let obj3 = skuId(5470);
  let applicationId;
  if (null != stateFromStores) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = obj3.useGetOrFetchApplication(applicationId);
  let tmp7 = null;
  if (null != getOrFetchApplication) {
    tmp7 = getOrFetchApplication;
  }
  let obj4 = skuId(566);
  const items2 = [closure_10];
  stateFromStores2 = obj4.useStateFromStores(items2, () => ref.getSkuAssets());
  const items3 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => skuId(result[27]).getCardImageURL(stateFromStores), items3);
  const tmp10 = storeFront(stateFromStores.useState(0), 2);
  const first = tmp10[0];
  const items4 = [analyticsLocations];
  memo1 = stateFromStores.useMemo(() => {
    const items = [...null != analyticsLocations ? analyticsLocations : [], analyticsLocations(result[28]).SLAYER_STOREFRONT_NATIVE_PDP];
    return items;
  }, items4);
  const tmp13 = analyticsLocations(5450)(() => skuId(result[30]).v4());
  useNativeCheckoutStore = tmp13;
  const items5 = [memo1, skuId, , , , ];
  let type;
  if (null != stateFromStores) {
    type = stateFromStores.type;
  }
  items5[2] = type;
  let productLine;
  if (null != stateFromStores) {
    productLine = stateFromStores.productLine;
  }
  items5[3] = productLine;
  let applicationId1;
  if (null != stateFromStores) {
    applicationId1 = stateFromStores.applicationId;
  }
  items5[4] = applicationId1;
  items5[5] = tmp13;
  memo2 = stateFromStores.useMemo(() => {
    const obj = { is_gift: false, location_stack: memo1, payment_type: "sku", sku_id: skuId };
    let type;
    if (null != stateFromStores) {
      type = stateFromStores.type;
    }
    obj.sku_type = type;
    let productLine;
    if (null != stateFromStores) {
      productLine = stateFromStores.productLine;
    }
    obj.sku_product_line = productLine;
    let applicationId;
    if (null != stateFromStores) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.load_id = c8;
    return obj;
  }, items5);
  analyticsLocations(4559)(() => {
    let obj = analyticsLocations(result[32]);
    obj = { location_stack: memo1, type: skuId(result[33]).SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY, sku_id: skuId };
    let applicationId;
    if (null != stateFromStores) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.track(_undefined.OPEN_MODAL, obj);
  });
  closure_10 = stateFromStores.useRef("not_started");
  let obj5 = skuId(4559);
  const unmountEffect = obj5.useUnmountEffect(() => {
    if ("pending" === ref.current) {
      analyticsLocations(result[32]).track(_undefined.PAYMENT_FLOW_CANCELED, memo2);
      const obj = analyticsLocations(result[32]);
    }
  });
  const items6 = [skuId, , ];
  let applicationId2;
  if (null != stateFromStores) {
    applicationId2 = stateFromStores.applicationId;
  }
  items6[1] = applicationId2;
  items6[2] = memo1;
  callback = stateFromStores.useCallback((cta_type) => {
    let obj = analyticsLocations(result[32]);
    obj = { slayer_storefront_session_id: undefined, sku_id: skuId, guild_id: undefined };
    let applicationId;
    if (null != stateFromStores) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.cta_type = cta_type;
    obj.location_stack = memo1;
    obj.track(_undefined.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, obj);
  }, items6);
  const items7 = [stateFromStores, stateFromStores2];
  const tmp6 = analyticsLocations(5467);
  [arr9, arr10] = storeFront(stateFromStores.useMemo(() => {
    let applicationId;
    if (null != stateFromStores) {
      applicationId = stateFromStores.applicationId;
    }
    if (null == applicationId) {
      const items = [[], []];
      let result = items;
    } else {
      const obj2 = skuId(result[13]);
      const tenantMetadata = stateFromStores.tenantMetadata;
      let carouselItems;
      if (null != tenantMetadata) {
        const socialLayer = tenantMetadata.socialLayer;
        if (null != socialLayer) {
          carouselItems = socialLayer.carouselItems;
        }
      }
      if (null == carouselItems) {
        carouselItems = [];
      }
      const obj = { heroWidth: skuId(result[13]).MOBILE_HERO_WIDTH_PX };
      result = obj2.convertCarouselItemsToMediaItems(carouselItems, stateFromStores.applicationId, stateFromStores2, obj);
    }
    return result;
  }, items7), 2);
  let num = 0;
  if (first < arr10.length) {
    num = first;
  }
  let tmp27 = null;
  if (null != arr9[num]) {
    tmp27 = tmp26;
  }
  let tmp29 = null;
  if (null != arr10[num]) {
    tmp29 = tmp28;
  }
  let length;
  if (null != stateFromStores) {
    let tenantMetadata = stateFromStores.tenantMetadata;
    if (null != tenantMetadata) {
      let socialLayer = tenantMetadata.socialLayer;
      if (null != socialLayer) {
        let carouselItems = socialLayer.carouselItems;
        if (null != carouselItems) {
          length = carouselItems.length;
        }
      }
    }
  }
  let num2 = 0;
  if (null != length) {
    num2 = length;
  }
  c12 = tmp31;
  const tmp24 = storeFront(stateFromStores.useMemo(() => {
    let applicationId;
    if (null != stateFromStores) {
      applicationId = stateFromStores.applicationId;
    }
    if (null == applicationId) {
      const items = [[], []];
      let result = items;
    } else {
      const obj2 = skuId(result[13]);
      const tenantMetadata = stateFromStores.tenantMetadata;
      let carouselItems;
      if (null != tenantMetadata) {
        const socialLayer = tenantMetadata.socialLayer;
        if (null != socialLayer) {
          carouselItems = socialLayer.carouselItems;
        }
      }
      if (null == carouselItems) {
        carouselItems = [];
      }
      const obj = { heroWidth: skuId(result[13]).MOBILE_HERO_WIDTH_PX };
      result = obj2.convertCarouselItemsToMediaItems(carouselItems, stateFromStores.applicationId, stateFromStores2, obj);
    }
    return result;
  }, items7), 2);
  const tmp25 = arr10.length > 1;
  [tmp33, c13] = storeFront(stateFromStores.useState(false), 2);
  closure_14 = stateFromStores.useRef(false);
  const items8 = [stateFromStores, stateFromStores2, num2 === arr9.length, stateFromStores1, ];
  let country;
  if (null != storeFront) {
    country = storeFront.country;
  }
  items8[4] = country;
  const effect = stateFromStores.useEffect(() => {
    let applicationId;
    let id;
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = null != stateFromStores.applicationId;
    }
    if (tmp) {
      let current = c12;
      if (!c12) {
        current = stateFromStores1;
      }
      if (!current) {
        current = ref2.current;
      }
      if (!current) {
        ref2.current = true;
        let obj = skuId(result[34]);
        obj = {};
        ({ applicationId, id } = stateFromStores);
        obj.withGoogleSkuIds = skuId(result[35]).isAndroid();
        let country;
        if (null != storeFront) {
          country = storeFront.country;
        }
        obj.countryCode = country;
        const obj3 = skuId(result[35]);
        let APPLE;
        if (obj4.isIOS()) {
          APPLE = _undefined2.APPLE;
        }
        obj.paymentGateway = APPLE;
        const socialLayerStorefrontSkuForApplication = obj.fetchSocialLayerStorefrontSkuForApplication(applicationId, id, obj);
        obj4 = skuId(result[35]);
      }
    }
  }, items8);
  const items9 = [memo2];
  callback1 = stateFromStores.useCallback(() => {
    if ("pending" === ref.current) {
      ref.current = "failed";
      analyticsLocations(result[32]).track(_undefined.PAYMENT_FLOW_FAILED, memo2);
      const obj = analyticsLocations(result[32]);
    }
    _undefined2(false);
  }, items9);
  const tmp38 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  obj = { skuId, sku: stateFromStores, analyticsLoadId: tmp13, analyticsLocations: memo1 };
  let id;
  const tmp32 = storeFront(stateFromStores.useState(false), 2);
  if (null != tmp38) {
    id = tmp38.id;
  }
  obj.orderId = id;
  obj.analyticsData = memo2;
  obj.onPurchaseComplete = function onPurchaseComplete() {
    closure_10.current = "succeeded";
    let obj = skuId(result[35]);
    if (obj.isIOS()) {
      analyticsLocations(result[32]).track(_undefined.PAYMENT_FLOW_SUCCEEDED, memo2);
      const obj2 = analyticsLocations(result[32]);
    }
    _undefined2(false);
    obj = { skuId };
    let orbsReward;
    if (null != stateFromStores) {
      orbsReward = stateFromStores.orbsReward;
    }
    let tmp9;
    if (null != orbsReward) {
      tmp9 = orbsReward;
    }
    obj.orbsReward = tmp9;
    obj.analyticsLocations = memo1;
    result = skuId(result[33]).openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj);
    result.then(skuId(result[33]).closeSocialLayerStorefrontProductDetailsModal);
  };
  obj.onPurchaseError = function onPurchaseError() {
    callback1(null);
  };
  obj.onPurchasePending = function onPurchasePending() {

  };
  const tmp39Result = analyticsLocations(9739)(obj);
  c16 = tmp39Result;
  const items10 = [tmp39Result, callback, memo2, callback1];
  const items11 = [skuId, memo1, callback];
  const callback2 = stateFromStores.useCallback(() => {
    callback(callback.BUY_BUTTON);
    closure_10.current = "pending";
    analyticsLocations(result[32]).track(_undefined.PAYMENT_FLOW_STARTED, memo2);
    _undefined2(true);
    const obj = analyticsLocations(result[32]);
    _undefined3().catch((arg0) => {
      outer1_15(arg0);
    });
  }, items10);
  if (null == stateFromStores) {
    return null;
  } else {
    result = skuId;
    result = dependencyMap;
    result = skuId(5615).isSlayerSkuAvailableOnThisPlatform(stateFromStores);
    const intl4 = skuId(1212).intl;
    result = intl4.string(skuId(1212).t.boqtTA);
    obj = {};
    const items12 = [result.container, ];
    obj1 = {};
    result = c16;
    result = memo1;
    const obj33 = skuId(5615);
    let num3 = 0;
    if (!obj36.isIOS()) {
      num3 = rect.top;
    }
    obj1.paddingTop = num3;
    items12[1] = obj1;
    obj.style = items12;
    obj2 = { style: result.header };
    obj3 = {
      onPress: skuId(9734).closeSocialLayerStorefrontProductDetailsModal,
      backImage() {
          return callback1(skuId(result[39]).XSmallIcon, { size: "md", style: closeButtonIcon.closeButtonIcon });
        }
    };
    const intl = skuId(1212).intl;
    obj3.accessibilityLabel = intl.string(skuId(1212).t.cpT0Cq);
    obj3.labelVisible = false;
    const items13 = [callback1(skuId(5094).HeaderBackButton, obj3), ];
    obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: result.headerTitle };
    let name;
    if (null != getOrFetchApplication) {
      name = getOrFetchApplication.name;
    }
    obj4.children = name;
    items13[1] = callback1(skuId(4126).Heading, obj4);
    obj2.children = items13;
    const items14 = [c16(memo1, obj2), , ];
    obj5 = { style: result.scrollContainer };
    let exclusive = stateFromStores.exclusive;
    if (exclusive) {
      const obj6 = { style: stateFromStores2.absoluteFill };
      const items15 = [closure_18, closure_19];
      obj6.colors = items15;
      obj6.pointerEvents = "none";
      exclusive = callback1(analyticsLocations(4554), obj6);
    }
    const items16 = [exclusive, ];
    const obj7 = { contentContainerStyle: result.scrollContent };
    if (null != tmp29) {
      const obj8 = { mediaItem: tmp29 };
      let tmp61 = callback1(HeroMedia, obj8);
    } else {
      tmp61 = null != memo;
      if (tmp61) {
        const obj9 = { sku: stateFromStores };
        tmp61 = callback1(analyticsLocations(8212), obj9);
      }
    }
    const items17 = [tmp61, , ];
    let exclusive2 = stateFromStores.exclusive;
    if (exclusive2) {
      const obj10 = { style: result.exclusiveBadgeContainer, children: callback1(skuId(9741).ExclusiveBadge, {}) };
      exclusive2 = callback1(memo1, obj10);
    }
    items17[1] = exclusive2;
    if (tmp25) {
      const obj11 = {};
      const obj12 = { sku: stateFromStores };
      const items18 = [callback1(SKUNameAndDescriptionSection, obj12), , ];
      const obj13 = { items: arr9, mediaItems: arr10, selectedIndex: num, onSelectIndex: tmp10[1], trackPDPClick: callback };
      items18[1] = callback1(BundleThumbnailRow, obj13);
      let tmp81 = null != stateFromStores.applicationId && null != tmp27;
      if (tmp81) {
        const obj14 = { selectedItem: tmp27, applicationId: stateFromStores.applicationId };
        tmp81 = callback1(ItemDetailsSection, obj14);
      }
      items18[2] = tmp81;
      obj11.children = items18;
      let tmp75Result = c16(closure_17, obj11);
      const tmp75 = c16;
      const tmp76 = closure_17;
    } else {
      const obj15 = { sku: stateFromStores };
      tmp75Result = callback1(SKUNameAndDescriptionSection, obj15);
    }
    items17[2] = tmp75Result;
    obj7.children = items17;
    items16[1] = c16(stateFromStores1, obj7);
    obj5.children = items16;
    items14[1] = c16(memo1, obj5);
    const obj16 = {};
    const items19 = [result.footer, ];
    const obj17 = { paddingBottom: rect.bottom + analyticsLocations(689).space.PX_16 };
    items19[1] = obj17;
    obj16.style = items19;
    const obj18 = { sku: stateFromStores };
    const items20 = [callback1(ProductPriceSection, obj18), , , ];
    let tmp90 = !result;
    if (tmp90) {
      const obj19 = { variant: "text-xs/normal", color: "text-muted", style: result.availabilityCopy };
      const intl2 = skuId(1212).intl;
      obj19.children = intl2.string(analyticsLocations(3104).gndWN7);
      tmp90 = callback1(skuId(4126).Text, obj19);
    }
    items20[1] = tmp90;
    const obj20 = { style: result.footerButtonRow };
    const obj21 = { style: result.buyButton };
    result = skuId;
    result = dependencyMap;
    const obj22 = { variant: "primary", size: "lg", text: result, loading: tmp33 };
    result = tmp33;
    if (!tmp33) {
      result = !result;
    }
    obj22.disabled = result;
    obj22.onPress = callback2;
    obj21.children = callback1(skuId(4543).Button, obj22);
    const items21 = [callback1(memo1, obj21), ];
    result = skuId;
    result = dependencyMap;
    result = callback1;
    const obj23 = { icon: null, variant: "primary", size: "lg" };
    result = analyticsLocations;
    obj23.icon = analyticsLocations(7759);
    obj23.disabled = tmp33;
    result = skuId;
    result = dependencyMap;
    const intl3 = skuId(1212).intl;
    obj23.accessibilityLabel = intl3.string(skuId(1212).t.QAZA5f);
    obj23.onPress = tmp43;
    items21[1] = result(skuId(7771).IconButton, obj23);
    obj20.children = items21;
    items20[2] = c16(memo1, obj20);
    if (result) {
      const obj24 = { style: result.legalCopy };
      result = skuId;
      result = dependencyMap;
      result = callback1;
      result = memo1;
      result = undefined;
      if (null != getOrFetchApplication) {
        result = getOrFetchApplication;
      }
      const obj25 = { shouldAppendDisclaimer: false === tmp6(tmp7).hasAlreadyLinked };
      const mobileFinePrintMessageForApplication = skuId(9744).getMobileFinePrintMessageForApplication(result, result, obj25);
      obj24.children = mobileFinePrintMessageForApplication.map((children) => {
        const obj = { variant: "text-xs/normal", color: "text-muted", children };
        return callback1(skuId(result[48]).TextWithIOSLinkWorkaround, obj, arg1);
      });
      result = result(result, obj24);
      const obj31 = skuId(9744);
    }
    items20[3] = result;
    obj16.children = items20;
    items14[2] = c16(memo1, obj16);
    obj.children = items14;
    return result(result, obj);
  }
  const tmp39 = analyticsLocations(9739);
}
function SocialLayerStorefrontProductDetailsModalWithOrderCTX(skuId) {
  let obj = require(477) /* set */;
  const tmp2 = obj.isIOS() ? constants.APPLE_ADVANCED_COMMERCE : constants.GOOGLE;
  const OTPACOMOrderExperiment = require(7194) /* apexExperiment */.OTPACOMOrderExperiment;
  let enabled = OTPACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontProductDetailsModal" }).enabled;
  obj = { paymentGateway: tmp2 };
  if (enabled) {
    enabled = tmp2 === constants.APPLE_ADVANCED_COMMERCE;
  }
  obj.orderRequired = enabled;
  const items = [skuId.skuId];
  obj.skuIds = items;
  obj.isGift = false;
  obj.activeSubscription = null;
  obj.onOrderRetryCancellation = require(9734) /* openSocialLayerStorefrontUnsupportedOnMobileAlert */.closeSocialLayerStorefrontProductDetailsModal;
  obj = {};
  const merged = Object.assign(skuId);
  obj.children = callback(SocialLayerStorefrontProductDetailsModal, obj);
  return callback(importDefault(7195), obj, skuId.skuId);
}
({ ScrollView: closure_5, StyleSheet: closure_6, View: closure_7 } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, PaymentGateways: closure_13, PriceSetAssignmentPurchaseTypes: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const importDefaultResultResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500);
let closure_18 = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500).alpha(0.25).hex();
const alphaResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500).alpha(0.25);
const importDefaultResult1Result = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500);
let closure_19 = require("_slicedToArray").hex();
let obj = { container: { flex: 1 } };
obj = { height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, gap: require("_createForOfIteratorHelperLoose").space.PX_8, borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.header = obj;
obj.headerTitle = { flexShrink: 1 };
obj.closeButtonIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_ICON_DEFAULT };
let obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_ICON_DEFAULT };
obj.scrollContent = { alignItems: "stretch", gap: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.scrollContainer = { flex: 1 };
let obj2 = { alignItems: "stretch", gap: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.section = { width: "100%", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.bundleThumbnailRow = _createForOfIteratorHelperLoose;
let obj5 = { width: 64, height: 64, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 2, borderColor: "transparent" };
obj.thumbnail = obj5;
let obj3 = { width: "100%", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.thumbnailSelected = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
let obj7 = { flex: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
obj.thumbnailInner = obj7;
let obj6 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
obj.thumbnailInnerSelected = { margin: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.thumbnailImage = { width: "100%", height: "100%" };
let obj9 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.labelRow = obj9;
let obj8 = { margin: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.labelIcon = { width: require("_createForOfIteratorHelperLoose").space.PX_16, height: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj11 = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.priceRow = obj11;
let obj10 = { width: require("_createForOfIteratorHelperLoose").space.PX_16, height: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.footer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12, gap: require("_createForOfIteratorHelperLoose").space.PX_8, borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let obj13 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.footerButtonRow = obj13;
obj.buyButton = { flex: 1 };
obj.availabilityCopy = { textAlign: "center" };
let obj14 = { display: "flex", flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.legalCopy = obj14;
let obj12 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12, gap: require("_createForOfIteratorHelperLoose").space.PX_8, borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.hero = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, height: require("_createForOfIteratorHelperLoose").MOBILE_HERO_HEIGHT_PX, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let obj15 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, height: require("_createForOfIteratorHelperLoose").MOBILE_HERO_HEIGHT_PX, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj.priceSection = { width: "100%", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.heroImage = { width: "100%", height: "100%" };
let obj16 = { width: "100%", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.exclusiveBadgeContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_20 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj17 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx");

export default function WrappedSocialLayerStorefrontProductDetailsModal(arg0) {
  let obj = { skuIDs: [], activeSubscription: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = callback(SocialLayerStorefrontProductDetailsModalWithOrderCTX, obj);
  return callback(require(8769) /* NativePaymentContextProvider */.NativePaymentContextProvider, obj);
};
