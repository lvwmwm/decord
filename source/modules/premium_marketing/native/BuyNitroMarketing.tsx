// Module ID: 7421
// Function ID: 59659
// Name: BuyNitroMarketing
// Dependencies: [31, 27, 1851, 33, 4130, 689, 7422, 1456, 7424, 7431, 7430, 7435, 5462, 7425, 7429, 7514, 7524, 7525, 7527, 7528, 7536, 12390, 12394, 12395, 12396, 2]
// Exports: default

// Module 7421 (BuyNitroMarketing)
import result from "result";
import { View } from "get ActivityIndicator";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.list = { flex: 1 };
_createForOfIteratorHelperLoose.listContent = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.listHeader = { gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.sectionHeader = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.disabled = { pointerEvents: "none" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("GuildFeatures").fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketing.tsx");

export default function BuyNitroMarketing(onPaymentDismiss) {
  let applicationId;
  let initialLoadCompleted;
  let initialTier;
  let listData;
  let listRef;
  let onClose;
  let onPaymentSuccess;
  let onScroll;
  ({ onClose, applicationId } = onPaymentDismiss);
  ({ initialLoadCompleted, initialTier, onPaymentSuccess } = onPaymentDismiss);
  onPaymentDismiss = onPaymentDismiss.onPaymentDismiss;
  let buyNitroPlanSelection;
  let callback;
  let onSelectNitroTier;
  let locationStackFromLocationContext;
  callback = undefined;
  const tmp = callback();
  const React = tmp;
  let obj = applicationId(onPaymentDismiss[6]);
  const youBarSettingsCustomHeaderPaddingTop = obj.useYouBarSettingsCustomHeaderPaddingTop();
  let obj1 = applicationId(onPaymentDismiss[7]);
  const nativeStackNavigation = obj1.useNativeStackNavigation();
  let obj2 = applicationId(onPaymentDismiss[8]);
  const buyNitroMarketingLifecycleHooks = obj2.useBuyNitroMarketingLifecycleHooks(nativeStackNavigation, initialLoadCompleted);
  let obj3 = applicationId(onPaymentDismiss[9]);
  let tmp5;
  if (null != initialTier) {
    obj = { tier: initialTier, productId: undefined };
    tmp5 = obj;
  }
  buyNitroPlanSelection = obj3.useBuyNitroPlanSelection(tmp5);
  callback = React.useRef(buyNitroPlanSelection);
  const items = [buyNitroPlanSelection];
  const effect = React.useEffect(() => {
    closure_6.current = buyNitroPlanSelection;
  }, items);
  let obj5 = applicationId(onPaymentDismiss[10]);
  const isBuyNitroPurchaseBlocked = obj5.useIsBuyNitroPurchaseBlocked();
  const tmp9 = onPaymentSuccess(onPaymentDismiss[11])(buyNitroPlanSelection);
  onSelectNitroTier = tmp9.onSelectNitroTier;
  ({ onScroll, listData, listRef } = tmp9);
  let obj6 = applicationId(onPaymentDismiss[12]);
  locationStackFromLocationContext = obj6.useLocationStackFromLocationContext();
  const promotionMarketingComponent = applicationId(onPaymentDismiss[13]).usePromotionMarketingComponent(applicationId(onPaymentDismiss[14]).MarketingComponentType.MARKETING_PAGE_BANNER);
  if (null == onClose) {
    onClose = () => nativeStackNavigation.pop();
  }
  const items1 = [locationStackFromLocationContext, applicationId, onPaymentSuccess, onPaymentDismiss];
  callback = React.useCallback((perk) => {
    let obj = applicationId(onPaymentDismiss[15]);
    obj = { selectedTier: ref.current.selection.tier, selectedProductId: ref.current.selection.productId, analyticsLocations: locationStackFromLocationContext, applicationId, onPaymentSuccess, onPaymentDismiss };
    const result = obj.openBuyNitroPerkDetails(perk, obj);
  }, items1);
  const items2 = [buyNitroPlanSelection.selection.tier, tmp.sectionHeader, callback, onSelectNitroTier];
  obj = { style: tmp.container };
  obj1 = { style: tmp.list };
  const callback1 = React.useCallback((item) => {
    item = item.item;
    if ("section-header" === item.kind) {
      let obj = {
        style: tmp.sectionHeader,
        title: item.title,
        titleRequiresNitroHack: true === item.highlightNitro,
        onPress() {
            return outer1_7(buyNitroPlanSelection.TIER_2);
          }
      };
      let tmp6 = ref(onPaymentSuccess(onPaymentDismiss[16]), obj);
    } else {
      obj = { perk: item.perk, selectedTier: buyNitroPlanSelection.selection.tier, onOpenDetails: callback };
      ({ start: obj.start, end: obj.end } = item);
      tmp6 = ref(onPaymentSuccess(onPaymentDismiss[17]), obj);
    }
    return tmp6;
  }, items2);
  obj2 = {
    ref: listRef,
    contentContainerStyle: tmp.listContent,
    data: listData,
    renderItem: callback1,
    keyExtractor(kind) {
      if ("section-header" === kind.kind) {
        let id = kind.id;
      } else {
        id = kind.perk.id;
      }
      return id;
    },
    getItemType(kind) {
      return kind.kind;
    }
  };
  obj3 = {};
  const obj4 = { topInset: youBarSettingsCustomHeaderPaddingTop, onBackPress: onClose, selectedTier: buyNitroPlanSelection.selection.tier };
  const items3 = [callback(onPaymentSuccess(onPaymentDismiss[19]), obj4), ];
  obj5 = { style: tmp.listHeader };
  let tmp20Result = initialLoadCompleted;
  if (initialLoadCompleted) {
    let oneofKind;
    if (null != promotionMarketingComponent) {
      oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
    }
    tmp20Result = "marketingPageBanner" === oneofKind;
  }
  if (tmp20Result) {
    obj6 = { bannerFields: promotionMarketingComponent.properties.properties.marketingPageBanner, componentId: promotionMarketingComponent.id, analyticsPage: "Marketing Page Banner Tile" };
    let disabled;
    if (isBuyNitroPurchaseBlocked) {
      disabled = tmp.disabled;
    }
    obj6.style = disabled;
    obj6.onPaymentSuccess = onPaymentSuccess;
    obj6.onPaymentDismiss = onPaymentDismiss;
    tmp20Result = callback(onPaymentSuccess(onPaymentDismiss[20]), obj6);
    const tmp20 = callback;
    const tmp23 = onPaymentSuccess(onPaymentDismiss[20]);
  }
  const items4 = [tmp20Result, callback(onPaymentSuccess(onPaymentDismiss[21]), { planSelection: buyNitroPlanSelection }), callback(onPaymentSuccess(onPaymentDismiss[22]), {})];
  obj5.children = items4;
  items3[1] = onSelectNitroTier(nativeStackNavigation, obj5);
  obj3.children = items3;
  obj2.ListHeaderComponent = onSelectNitroTier(locationStackFromLocationContext, obj3);
  obj2.onScroll = onScroll;
  obj2.scrollEventThrottle = 16;
  obj2.showsVerticalScrollIndicator = false;
  obj1.children = callback(applicationId(onPaymentDismiss[18]).FlashList, obj2);
  const items5 = [callback(nativeStackNavigation, obj1), callback(onPaymentSuccess(onPaymentDismiss[23]), { planSelection: buyNitroPlanSelection, applicationId, onPaymentSuccess, onPaymentDismiss }), ];
  if (initialLoadCompleted) {
    initialLoadCompleted = callback(applicationId(onPaymentDismiss[24]).BuyNitroTriggerPointEffect, {});
  }
  items5[2] = initialLoadCompleted;
  obj.children = items5;
  return onSelectNitroTier(nativeStackNavigation, obj);
};
