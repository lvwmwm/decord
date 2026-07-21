// Module ID: 9727
// Function ID: 75666
// Name: HeroMedia
// Dependencies: []
// Exports: default

// Module 9727 (HeroMedia)
import alphaResult1 from "module_0";

function HeroMedia(mediaItem) {
  mediaItem = mediaItem.mediaItem;
  const tmp = callback4();
  if ("video" === mediaItem.type) {
    let obj = { style: tmp.hero };
    obj = {};
    const obj1 = { uri: mediaItem.src };
    obj.source = obj1;
    obj.poster = mediaItem.videoThumbnailSrc;
    obj.muted = true;
    obj.resizeMode = "cover";
    obj.style = tmp.heroImage;
    obj.children = callback2(arg1(dependencyMap[14]).VideoComponent, obj);
    let tmp7 = callback2(closure_7, obj);
  } else if (null != mediaItem.backgroundSrc) {
    const obj2 = { style: tmp.hero };
    const obj3 = {};
    const obj4 = { uri: mediaItem.backgroundSrc };
    obj3.source = obj4;
    obj3.style = absoluteFill.absoluteFill;
    obj3.resizeMode = "cover";
    const items = [callback2(importDefault(dependencyMap[15]), obj3), ];
    const obj5 = {};
    const obj6 = { uri: mediaItem.src };
    obj5.source = obj6;
    obj5.style = tmp.heroImage;
    obj5.resizeMode = "cover";
    items[1] = callback2(importDefault(dependencyMap[15]), obj5);
    obj2.children = items;
    tmp7 = callback3(closure_7, obj2);
  } else {
    obj = { style: tmp.hero };
    const obj7 = {};
    const obj8 = { uri: mediaItem.src };
    obj7.source = obj8;
    obj7.style = tmp.heroImage;
    obj7.resizeMode = "cover";
    obj.children = callback2(importDefault(dependencyMap[15]), obj7);
    tmp7 = callback2(closure_7, obj);
  }
  return tmp7;
}
function InGameItemTag() {
  const obj = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>" };
  const intl = arg1(dependencyMap[17]).intl;
  obj.children = intl.string(arg1(dependencyMap[17]).t.V91tvy);
  return callback2(arg1(dependencyMap[16]).Text, obj);
}
function ProductPriceSection(sku) {
  const tmp = callback4();
  let obj = arg1(dependencyMap[18]);
  obj = { sku: sku.sku, priceSetAssignmentPurchaseType: constants2.DEFAULT };
  const userPrice = obj.useFormattedSKUPrice(obj).userPrice;
  let tmp2 = null;
  if (null != userPrice) {
    obj = { style: tmp.priceSection };
    const items = [callback2(InGameItemTag, {}), ];
    const obj1 = { style: tmp.priceRow };
    const obj2 = { hasMaxConnections: "Array", isBoostOnlySubscription: "isArray", children: userPrice };
    obj1.children = callback2(arg1(dependencyMap[16]).Text, obj2);
    items[1] = callback2(closure_7, obj1);
    obj.children = items;
    tmp2 = callback3(closure_7, obj);
  }
  return tmp2;
}
function BundleThumbnailRow(trackPDPClick) {
  let mediaItems;
  let onSelectIndex;
  ({ items: closure_0, mediaItems, selectedIndex: closure_1, onSelectIndex } = trackPDPClick);
  const dependencyMap = onSelectIndex;
  trackPDPClick = trackPDPClick.trackPDPClick;
  let closure_3 = trackPDPClick;
  const tmp = callback4();
  const React = tmp;
  const items = [onSelectIndex, trackPDPClick];
  let closure_5 = React.useCallback((arg0) => {
    trackPDPClick(constants.CAROUSEL_ITEM);
    onSelectIndex(arg0);
  }, items);
  let obj = { style: tmp.section };
  obj = { hasMaxConnections: 15, isBoostOnlySubscription: "center" };
  const intl = arg1(dependencyMap[17]).intl;
  obj.children = intl.string(arg1(dependencyMap[17]).t.U7DAV9);
  const items1 = [callback2(arg1(dependencyMap[16]).Text, obj), ];
  obj = {
    1644319569: null,
    -2041488286: null,
    contentContainerStyle: tmp.bundleThumbnailRow,
    children: mediaItems.map((thumbnailSrc) => {
      let thumbnailInnerSelected = arg1 === callback;
      let obj = { accessibilityRole: "button" };
      let label;
      if (null != arg1[arg1]) {
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
        return callback(arg1);
      };
      const items = [arg1[arg1].thumbnail, ];
      let thumbnailSelected = thumbnailInnerSelected;
      if (thumbnailInnerSelected) {
        thumbnailSelected = tmp.thumbnailSelected;
      }
      items[1] = thumbnailSelected;
      obj.style = items;
      obj = {};
      const items1 = [arg1[arg1].thumbnailInner, ];
      if (thumbnailInnerSelected) {
        thumbnailInnerSelected = tmp.thumbnailInnerSelected;
      }
      items1[1] = thumbnailInnerSelected;
      obj.style = items1;
      const obj1 = {};
      const obj2 = {};
      const tmp2 = callback2;
      const tmp6 = callback2;
      const tmp7 = closure_7;
      const tmp9 = callback(onSelectIndex[15]);
      obj2.uri = arg1(onSelectIndex[13]).getThumbnailSrc(thumbnailSrc);
      obj1.source = obj2;
      obj1.style = arg1[arg1].thumbnailImage;
      obj1.resizeMode = "cover";
      obj.children = callback2(tmp9, obj1);
      obj.children = tmp6(tmp7, obj);
      return tmp2(arg1(onSelectIndex[19]).PressableOpacity, obj, arg1);
    })
  };
  items1[1] = callback2(closure_5, obj);
  obj.children = items1;
  return callback3(closure_7, obj);
}
function SKUNameAndDescriptionSection(sku) {
  sku = sku.sku;
  let obj = arg1(dependencyMap[20]);
  let tmp3Result = null;
  if (!obj.isNullOrEmpty(sku.name)) {
    obj = { style: tmp.section };
    obj = { hasMaxConnections: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000511090567818282, isBoostOnlySubscription: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000392111416998092, children: sku.name };
    const items = [callback2(arg1(dependencyMap[16]).Heading, obj), ];
    let tmp8 = !arg1(dependencyMap[20]).isNullOrEmpty(sku.description);
    if (tmp8) {
      const obj1 = { children: sku.description };
      tmp8 = callback2(arg1(dependencyMap[16]).Text, obj1);
    }
    items[1] = tmp8;
    obj.children = items;
    tmp3Result = closure_16(closure_7, obj);
    const obj4 = arg1(dependencyMap[20]);
    const tmp3 = closure_16;
    const tmp4 = closure_7;
  }
  return tmp3Result;
}
function ItemDetailsSection(selectedItem) {
  selectedItem = selectedItem.selectedItem;
  const tmp = callback4();
  let assetURL = null;
  if (null != selectedItem.labelIconAssetId) {
    let obj = arg1(dependencyMap[21]);
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
  let obj1 = arg1(dependencyMap[20]);
  if (obj1.isNullOrEmpty(trimmed)) {
    let obj2 = arg1(dependencyMap[20]);
    if (obj2.isNullOrEmpty(trimmed1)) {
      let obj3 = arg1(dependencyMap[20]);
      let tmp13Result = null;
    }
    return tmp13Result;
  }
  obj = { style: tmp.section };
  let obj5 = arg1(dependencyMap[20]);
  let tmp15 = !obj5.isNullOrEmpty(trimmed);
  if (tmp15) {
    obj = { children: trimmed };
    tmp15 = callback2(arg1(dependencyMap[16]).Heading, obj);
  }
  const items = [tmp15, , ];
  let tmp20Result = !arg1(dependencyMap[20]).isNullOrEmpty(trimmed1);
  if (tmp20Result) {
    obj1 = { style: tmp.labelRow };
    let tmp22 = null != assetURL;
    if (tmp22) {
      obj2 = {};
      obj3 = { uri: assetURL };
      obj2.source = obj3;
      obj2.style = tmp.labelIcon;
      tmp22 = callback2(importDefault(dependencyMap[15]), obj2);
    }
    const items1 = [tmp22, ];
    const obj4 = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>", children: trimmed1 };
    items1[1] = callback2(arg1(dependencyMap[16]).Text, obj4);
    obj1.children = items1;
    tmp20Result = closure_16(closure_7, obj1);
    const tmp20 = closure_16;
    const tmp21 = closure_7;
  }
  items[1] = tmp20Result;
  const obj8 = arg1(dependencyMap[20]);
  const tmp13 = closure_16;
  const tmp14 = closure_7;
  let tmp29 = !arg1(dependencyMap[20]).isNullOrEmpty(trimmed2);
  if (tmp29) {
    obj5 = { children: trimmed2 };
    tmp29 = callback2(arg1(dependencyMap[16]).Text, obj5);
  }
  items[2] = tmp29;
  obj.children = items;
  tmp13Result = tmp13(tmp14, obj);
}
function SocialLayerStorefrontProductDetailsModal(skuId) {
  let arr10;
  let arr9;
  let tmp33;
  skuId = skuId.skuId;
  const arg1 = skuId;
  const analyticsLocations = skuId.analyticsLocations;
  const importDefault = analyticsLocations;
  let stateFromStores2;
  let memo1;
  let useNativeCheckoutStore;
  let closure_9;
  let closure_10;
  let SlayerShopPDPCTAType;
  let tmp31;
  let closure_13;
  let closure_14;
  let callback1;
  let tmp39Result;
  let result = callback4();
  const dependencyMap = result;
  const rect = importDefault(dependencyMap[22])();
  let obj = importDefault(dependencyMap[23]);
  const storeFront = obj.useNativeIAPPayments().storeFront;
  let callback = storeFront;
  let obj1 = arg1(dependencyMap[24]);
  const items = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items, () => memo2.get(skuId));
  const React = stateFromStores;
  let obj2 = arg1(dependencyMap[24]);
  const items1 = [closure_9];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let isFetchingResult = memo2.isFetching(skuId);
    if (!isFetchingResult) {
      isFetchingResult = memo2.didFetchingSkuFail(skuId);
    }
    return isFetchingResult;
  });
  let obj3 = arg1(dependencyMap[25]);
  let applicationId;
  if (null != stateFromStores) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = obj3.useGetOrFetchApplication(applicationId);
  let tmp7 = null;
  if (null != getOrFetchApplication) {
    tmp7 = getOrFetchApplication;
  }
  let obj4 = arg1(dependencyMap[24]);
  const items2 = [closure_10];
  stateFromStores2 = obj4.useStateFromStores(items2, () => ref.getSkuAssets());
  const items3 = [stateFromStores];
  const memo = React.useMemo(() => skuId(result[27]).getCardImageURL(stateFromStores), items3);
  const tmp10 = callback(React.useState(0), 2);
  const first = tmp10[0];
  const items4 = [analyticsLocations];
  memo1 = React.useMemo(() => {
    const items = [...null != analyticsLocations ? analyticsLocations : [], analyticsLocations(result[28]).SLAYER_STOREFRONT_NATIVE_PDP];
    return items;
  }, items4);
  const tmp13 = importDefault(dependencyMap[29])(() => skuId(result[30]).v4());
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
  const memo2 = React.useMemo(() => {
    const obj = { location_stack: memo1, sku_id: skuId };
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
    obj.load_id = tmp13;
    return obj;
  }, items5);
  closure_9 = memo2;
  importDefault(dependencyMap[31])(() => {
    let obj = analyticsLocations(result[32]);
    obj = { location_stack: memo1, type: skuId(result[33]).SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY, sku_id: skuId };
    let applicationId;
    if (null != stateFromStores) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.track(tmp31.OPEN_MODAL, obj);
  });
  closure_10 = React.useRef("not_started");
  let obj5 = arg1(dependencyMap[31]);
  const unmountEffect = obj5.useUnmountEffect(() => {
    if ("pending" === ref.current) {
      analyticsLocations(result[32]).track(tmp31.PAYMENT_FLOW_CANCELED, memo2);
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
  callback = React.useCallback((cta_type) => {
    let obj = analyticsLocations(result[32]);
    obj = { slayer_storefront_session_id: undefined, sku_id: skuId, guild_id: undefined };
    let applicationId;
    if (null != stateFromStores) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.cta_type = cta_type;
    obj.location_stack = memo1;
    obj.track(tmp31.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, obj);
  }, items6);
  SlayerShopPDPCTAType = callback;
  const items7 = [stateFromStores, stateFromStores2];
  const tmp6 = importDefault(dependencyMap[26]);
  [arr9, arr10] = callback(React.useMemo(() => {
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
    const tenantMetadata = stateFromStores.tenantMetadata;
    if (null != tenantMetadata) {
      const socialLayer = tenantMetadata.socialLayer;
      if (null != socialLayer) {
        const carouselItems = socialLayer.carouselItems;
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
  tmp31 = num2 === arr9.length;
  const tmp24 = callback(React.useMemo(() => {
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
  [tmp33, closure_13] = callback(React.useState(false), 2);
  closure_14 = React.useRef(false);
  const items8 = [stateFromStores, stateFromStores2, tmp31, stateFromStores1, ];
  let country;
  if (null != storeFront) {
    country = storeFront.country;
  }
  items8[4] = country;
  const effect = React.useEffect(() => {
    let applicationId;
    let id;
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = null != stateFromStores.applicationId;
    }
    if (tmp) {
      let current = tmp31;
      if (!tmp31) {
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
          APPLE = _undefined.APPLE;
        }
        obj.paymentGateway = APPLE;
        const socialLayerStorefrontSkuForApplication = obj.fetchSocialLayerStorefrontSkuForApplication(applicationId, id, obj);
        const obj4 = skuId(result[35]);
      }
    }
  }, items8);
  const items9 = [memo2];
  callback1 = React.useCallback(() => {
    if ("pending" === ref.current) {
      ref.current = "failed";
      analyticsLocations(result[32]).track(tmp31.PAYMENT_FLOW_FAILED, memo2);
      const obj = analyticsLocations(result[32]);
    }
    _undefined(false);
  }, items9);
  const tmp38 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  obj = { skuId, sku: stateFromStores, analyticsLoadId: tmp13, analyticsLocations: memo1 };
  let id;
  const tmp32 = callback(React.useState(false), 2);
  if (null != tmp38) {
    id = tmp38.id;
  }
  obj.orderId = id;
  obj.analyticsData = memo2;
  obj.onPurchaseComplete = function onPurchaseComplete() {
    closure_10.current = "succeeded";
    let obj = skuId(result[35]);
    if (obj.isIOS()) {
      analyticsLocations(result[32]).track(tmp31.PAYMENT_FLOW_SUCCEEDED, memo2);
      const obj2 = analyticsLocations(result[32]);
    }
    _undefined(false);
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
    const result = skuId(result[33]).openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj);
    result.then(skuId(result[33]).closeSocialLayerStorefrontProductDetailsModal);
  };
  obj.onPurchaseError = function onPurchaseError() {
    callback1(null);
  };
  obj.onPurchasePending = function onPurchasePending() {

  };
  tmp39Result = importDefault(dependencyMap[36])(obj);
  const items10 = [tmp39Result, callback, memo2, callback1];
  const items11 = [skuId, memo1, callback];
  const callback2 = React.useCallback(() => {
    callback(callback.BUY_BUTTON);
    closure_10.current = "pending";
    analyticsLocations(result[32]).track(tmp31.PAYMENT_FLOW_STARTED, memo2);
    _undefined(true);
    const obj = analyticsLocations(result[32]);
    tmp39Result().catch((arg0) => {
      callback(arg0);
    });
  }, items10);
  if (null == stateFromStores) {
    return null;
  } else {
    result = arg1;
    result = dependencyMap;
    result = arg1(dependencyMap[37]).isSlayerSkuAvailableOnThisPlatform(stateFromStores);
    const intl4 = arg1(dependencyMap[17]).intl;
    result = intl4.string(arg1(dependencyMap[17]).t.boqtTA);
    obj = {};
    const items12 = [result.container, ];
    obj1 = {};
    result = tmp39Result;
    result = memo1;
    const obj33 = arg1(dependencyMap[37]);
    let num3 = 0;
    if (!obj36.isIOS()) {
      num3 = rect.top;
    }
    obj1.paddingTop = num3;
    items12[1] = obj1;
    obj.style = items12;
    obj2 = { style: result.header };
    obj3 = {
      onPress: arg1(dependencyMap[33]).closeSocialLayerStorefrontProductDetailsModal,
      backImage() {
          return callback1(skuId(result[39]).XSmallIcon, { size: "md", style: result.closeButtonIcon });
        }
    };
    const intl = arg1(dependencyMap[17]).intl;
    obj3.accessibilityLabel = intl.string(arg1(dependencyMap[17]).t.cpT0Cq);
    obj3.labelVisible = false;
    const items13 = [callback1(arg1(dependencyMap[38]).HeaderBackButton, obj3), ];
    obj4 = { style: result.headerTitle };
    let name;
    if (null != getOrFetchApplication) {
      name = getOrFetchApplication.name;
    }
    obj4.children = name;
    items13[1] = callback1(arg1(dependencyMap[16]).Heading, obj4);
    obj2.children = items13;
    const items14 = [tmp39Result(memo1, obj2), , ];
    obj5 = { style: result.scrollContainer };
    let exclusive = stateFromStores.exclusive;
    if (exclusive) {
      const obj6 = { style: stateFromStores2.absoluteFill };
      const items15 = [closure_18, closure_19];
      obj6.colors = items15;
      obj6.pointerEvents = "none";
      exclusive = callback1(importDefault(dependencyMap[40]), obj6);
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
        tmp61 = callback1(importDefault(dependencyMap[41]), obj9);
      }
    }
    const items17 = [tmp61, , ];
    let exclusive2 = stateFromStores.exclusive;
    if (exclusive2) {
      const obj10 = { style: result.exclusiveBadgeContainer, children: callback1(arg1(dependencyMap[42]).ExclusiveBadge, {}) };
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
      let tmp75Result = tmp39Result(closure_17, obj11);
      const tmp75 = tmp39Result;
      const tmp76 = closure_17;
    } else {
      const obj15 = { sku: stateFromStores };
      tmp75Result = callback1(SKUNameAndDescriptionSection, obj15);
    }
    items17[2] = tmp75Result;
    obj7.children = items17;
    items16[1] = tmp39Result(stateFromStores1, obj7);
    obj5.children = items16;
    items14[1] = tmp39Result(memo1, obj5);
    const obj16 = {};
    const items19 = [result.footer, ];
    const obj17 = { paddingBottom: rect.bottom + importDefault(dependencyMap[10]).space.PX_16 };
    items19[1] = obj17;
    obj16.style = items19;
    const obj18 = { sku: stateFromStores };
    const items20 = [callback1(ProductPriceSection, obj18), , , ];
    let tmp90 = !result;
    if (tmp90) {
      const obj19 = { style: result.availabilityCopy };
      const intl2 = arg1(dependencyMap[17]).intl;
      obj19.children = intl2.string(importDefault(dependencyMap[43]).gndWN7);
      tmp90 = callback1(arg1(dependencyMap[16]).Text, obj19);
    }
    items20[1] = tmp90;
    const obj20 = { style: result.footerButtonRow };
    const obj21 = { style: result.buyButton };
    result = arg1;
    result = dependencyMap;
    const obj22 = { "Bool(true)": "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", "Bool(true)": null, text: result, loading: tmp33 };
    result = tmp33;
    if (!tmp33) {
      result = !result;
    }
    obj22.disabled = result;
    obj22.onPress = callback2;
    obj21.children = callback1(arg1(dependencyMap[44]).Button, obj22);
    const items21 = [callback1(memo1, obj21), ];
    result = arg1;
    result = dependencyMap;
    result = callback1;
    const obj23 = { -9223372036854775808: true, 9223372036854775807: "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", 9223372036854775807: null };
    result = importDefault;
    obj23.icon = importDefault(dependencyMap[46]);
    obj23.disabled = tmp33;
    result = arg1;
    result = dependencyMap;
    const intl3 = arg1(dependencyMap[17]).intl;
    obj23.accessibilityLabel = intl3.string(arg1(dependencyMap[17]).t.QAZA5f);
    obj23.onPress = tmp43;
    items21[1] = result(arg1(dependencyMap[45]).IconButton, obj23);
    obj20.children = items21;
    items20[2] = tmp39Result(memo1, obj20);
    if (result) {
      const obj24 = { style: result.legalCopy };
      result = arg1;
      result = dependencyMap;
      result = callback1;
      result = memo1;
      result = undefined;
      if (null != getOrFetchApplication) {
        result = getOrFetchApplication;
      }
      const obj25 = { shouldAppendDisclaimer: false === tmp6(tmp7).hasAlreadyLinked };
      const mobileFinePrintMessageForApplication = arg1(dependencyMap[47]).getMobileFinePrintMessageForApplication(result, result, obj25);
      obj24.children = mobileFinePrintMessageForApplication.map((children) => callback1(skuId(result[48]).TextWithIOSLinkWorkaround, { children }, arg1));
      result = result(result, obj24);
      const obj31 = arg1(dependencyMap[47]);
    }
    items20[3] = result;
    obj16.children = items20;
    items14[2] = tmp39Result(memo1, obj16);
    obj.children = items14;
    return result(result, obj);
  }
  const tmp39 = importDefault(dependencyMap[36]);
}
function SocialLayerStorefrontProductDetailsModalWithOrderCTX(skuId) {
  let obj = arg1(dependencyMap[35]);
  const tmp2 = obj.isIOS() ? constants.APPLE_ADVANCED_COMMERCE : constants.GOOGLE;
  const OTPACOMOrderExperiment = arg1(dependencyMap[49]).OTPACOMOrderExperiment;
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
  obj.onOrderRetryCancellation = arg1(dependencyMap[33]).closeSocialLayerStorefrontProductDetailsModal;
  obj = {};
  const merged = Object.assign(skuId);
  obj.children = callback2(SocialLayerStorefrontProductDetailsModal, obj);
  return callback2(importDefault(dependencyMap[50]), obj, skuId.skuId);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ScrollView: closure_5, StyleSheet: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
const useNativeCheckoutStore = arg1(dependencyMap[3]).useNativeCheckoutStore;
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
const SlayerShopPDPCTAType = arg1(dependencyMap[6]).SlayerShopPDPCTAType;
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_12, PaymentGateways: closure_13, PriceSetAssignmentPurchaseTypes: closure_14 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = arg1(dependencyMap[8]));
const tmp4 = arg1(dependencyMap[8]);
const importDefaultResult = importDefault(dependencyMap[9]);
const importDefaultResultResult = importDefault(dependencyMap[9])(importDefault(dependencyMap[10]).unsafe_rawColors.BRAND_500);
let closure_18 = importDefault(dependencyMap[9])(importDefault(dependencyMap[10]).unsafe_rawColors.BRAND_500).alpha(0.25).hex();
const alphaResult = importDefault(dependencyMap[9])(importDefault(dependencyMap[10]).unsafe_rawColors.BRAND_500).alpha(0.25);
const importDefaultResult1 = importDefault(dependencyMap[9]);
const importDefaultResult1Result = importDefault(dependencyMap[9])(importDefault(dependencyMap[10]).unsafe_rawColors.BRAND_500);
let closure_19 = require("module_0").hex();
let obj4 = arg1(dependencyMap[11]);
let obj = { container: { flex: 1 } };
obj = { height: arg1(dependencyMap[12]).NAV_BAR_HEIGHT, paddingHorizontal: importDefault(dependencyMap[10]).space.PX_8, gap: importDefault(dependencyMap[10]).space.PX_8, borderBottomColor: importDefault(dependencyMap[10]).colors.BORDER_SUBTLE };
obj.header = obj;
obj.headerTitle = { flexShrink: 1 };
obj.closeButtonIcon = { tintColor: importDefault(dependencyMap[10]).colors.INTERACTIVE_ICON_DEFAULT };
const obj1 = { tintColor: importDefault(dependencyMap[10]).colors.INTERACTIVE_ICON_DEFAULT };
obj.scrollContent = { alignItems: "stretch", gap: importDefault(dependencyMap[10]).space.PX_16, paddingVertical: importDefault(dependencyMap[10]).space.PX_16 };
obj.scrollContainer = { flex: 1 };
const obj2 = { alignItems: "stretch", gap: importDefault(dependencyMap[10]).space.PX_16, paddingVertical: importDefault(dependencyMap[10]).space.PX_16 };
obj.section = { width: "100%", paddingHorizontal: importDefault(dependencyMap[10]).space.PX_16, gap: importDefault(dependencyMap[10]).space.PX_8 };
obj4 = { flexDirection: "row", gap: importDefault(dependencyMap[10]).space.PX_8, paddingVertical: importDefault(dependencyMap[10]).space.PX_4 };
obj.bundleThumbnailRow = obj4;
const obj5 = { "Bool(true)": 1102668032, "Bool(true)": 65707, "Bool(true)": 3962113, "Bool(true)": 131072, "Bool(true)": 5308416, borderRadius: importDefault(dependencyMap[10]).radii.md };
obj.thumbnail = obj5;
const obj3 = { width: "100%", paddingHorizontal: importDefault(dependencyMap[10]).space.PX_16, gap: importDefault(dependencyMap[10]).space.PX_8 };
obj.thumbnailSelected = { borderColor: importDefault(dependencyMap[10]).colors.BORDER_STRONG };
const obj6 = { borderColor: importDefault(dependencyMap[10]).colors.BORDER_STRONG };
obj.thumbnailInner = { borderRadius: importDefault(dependencyMap[10]).radii.sm };
const obj7 = { borderRadius: importDefault(dependencyMap[10]).radii.sm };
obj.thumbnailInnerSelected = { margin: 2, borderRadius: importDefault(dependencyMap[10]).radii.sm };
obj.thumbnailImage = {};
const obj9 = { "Null": 7, "Null": 370, gap: importDefault(dependencyMap[10]).space.PX_4 };
obj.labelRow = obj9;
const obj8 = { margin: 2, borderRadius: importDefault(dependencyMap[10]).radii.sm };
obj.labelIcon = { width: importDefault(dependencyMap[10]).space.PX_16, height: importDefault(dependencyMap[10]).space.PX_16 };
const obj11 = { <string:3635438572>: null, <string:1408024149>: null, <string:1708473420>: null, gap: importDefault(dependencyMap[10]).space.PX_8 };
obj.priceRow = obj11;
const obj10 = { width: importDefault(dependencyMap[10]).space.PX_16, height: importDefault(dependencyMap[10]).space.PX_16 };
obj.footer = { paddingHorizontal: importDefault(dependencyMap[10]).space.PX_16, paddingTop: importDefault(dependencyMap[10]).space.PX_12, gap: importDefault(dependencyMap[10]).space.PX_8, borderTopWidth: 1, borderTopColor: importDefault(dependencyMap[10]).colors.BORDER_SUBTLE };
const obj13 = { "Null": 7, "Null": 370, gap: importDefault(dependencyMap[10]).space.PX_8 };
obj.footerButtonRow = obj13;
obj.buyButton = { flex: 1 };
obj.availabilityCopy = { textAlign: "center" };
const obj14 = { 979464370: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001863282064227495, 1637975633: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007062002001945, gap: importDefault(dependencyMap[10]).space.PX_4 };
obj.legalCopy = obj14;
const obj12 = { paddingHorizontal: importDefault(dependencyMap[10]).space.PX_16, paddingTop: importDefault(dependencyMap[10]).space.PX_12, gap: importDefault(dependencyMap[10]).space.PX_8, borderTopWidth: 1, borderTopColor: importDefault(dependencyMap[10]).colors.BORDER_SUBTLE };
obj.hero = { marginHorizontal: importDefault(dependencyMap[10]).space.PX_16, height: arg1(dependencyMap[13]).MOBILE_HERO_HEIGHT_PX, borderRadius: importDefault(dependencyMap[10]).radii.md, overflow: "hidden", backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH };
const obj15 = { marginHorizontal: importDefault(dependencyMap[10]).space.PX_16, height: arg1(dependencyMap[13]).MOBILE_HERO_HEIGHT_PX, borderRadius: importDefault(dependencyMap[10]).radii.md, overflow: "hidden", backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH };
obj.priceSection = { width: "100%", gap: importDefault(dependencyMap[10]).space.PX_8 };
obj.heroImage = {};
const obj16 = { width: "100%", gap: importDefault(dependencyMap[10]).space.PX_8 };
obj.exclusiveBadgeContainer = { paddingHorizontal: importDefault(dependencyMap[10]).space.PX_16 };
let closure_20 = obj4.createStyles(obj);
const obj17 = { paddingHorizontal: importDefault(dependencyMap[10]).space.PX_16 };
const result = arg1(dependencyMap[52]).fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx");

export default function WrappedSocialLayerStorefrontProductDetailsModal(arg0) {
  let obj = { skuIDs: [], activeSubscription: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = callback2(SocialLayerStorefrontProductDetailsModalWithOrderCTX, obj);
  return callback2(arg1(dependencyMap[51]).NativePaymentContextProvider, obj);
};
