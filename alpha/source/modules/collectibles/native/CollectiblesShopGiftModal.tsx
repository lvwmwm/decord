// Module ID: 11310
// Function ID: 11311
// Name: CollectiblesShopGiftModal
// Dependencies: [19, 17, 6311, 1071, 1082, 21, 9267, 1379, 2186, 11311, 11309, 11312, 9268, 11314, 11572, 11575, 7355, 1112, 7191, 1186, 11596, 6388, 6138, 504, 11600, 6379, 6380, 2153, 6310, 11607, 2]
// Exports: default

// Module 11310 (CollectiblesShopGiftModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import Constants2 from "Constants" /* 1082 */;
import intl2 from "intl" /* 1112 */;
import native from "native" /* 1186 */;
import StringUtils from "StringUtils" /* 2153 */;
import NavigatorHeader from "NavigatorHeader" /* 7191 */;
import Navigator2 from "Navigator" /* 7355 */;
import openGiftModal from "openGiftModal" /* 11309 */;
import CollectiblesShopCheckoutDetailsDefault from "CollectiblesShopCheckoutDetails" /* 11572 */;
import CollectiblesShopGiftPurchaseSectionDefault from "CollectiblesShopGiftPurchaseSection" /* 11575 */;
import NoResults from "NoResults" /* 11596 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6311 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const CollectiblesActionCreators = tmp(6310);
function CollectiblesShopGiftModalContent(product) {
  let GOOGLE;
  let analyticsLocations;
  let lockedRecipientUser;
  let onGiftModalDismiss;
  let tmp4;
  let validateRecipient;
  product = product.product;
  require = product;
  ({ analyticsLocations, onGiftModalDismiss } = product);
  const giftingOrigin = product.giftingOrigin;
  ({ lockedRecipientUser, validateRecipient } = product);
  const GiftACOMOrderExperiment = require("ACOMExperiments").GiftACOMOrderExperiment;
  const enabled = GiftACOMOrderExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  let obj = require("PlatformUtils");
  if (obj.isIOS()) {
    GOOGLE = tmp3.APPLE_ADVANCED_COMMERCE;
    tmp4 = tmp3;
  } else {
    GOOGLE = tmp3.GOOGLE;
    tmp4 = tmp3;
  }
  let tmp5 = GOOGLE === tmp4.APPLE_ADVANCED_COMMERCE && enabled;
  if (!tmp5) {
    let result = GOOGLE === tmp4.GOOGLE;
    if (result) {
      const tmpResult = require("BillingPlatformUtils");
      result = tmpResult.isGooglePlayBillingSupported();
    }
    tmp5 = result;
  }
  const items = [onGiftModalDismiss];
  const tmp7 = onGiftModalDismiss(giftingOrigin[9])(product);
  const callback = react.useCallback(() => {
    const obj = openGiftModal;
    obj.closeShopGiftModal();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  const NativePaymentContextProvider = tmp(tmp2[11]).NativePaymentContextProvider;
  const items1 = [product.skuId];
  const obj4 = { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  onGiftModalDismiss(giftingOrigin[12]);
  return <NativePaymentContextProvider skuIDs={[]} activeSubscription={null}>{null}</NativePaymentContextProvider>;
}
function CollectiblesShopGiftModalPlaceholder(arg0) {
  let intl;
  let obj3;
  let obj4;
  let onGiftModalDismiss;
  ({ isError: require, onGiftModalDismiss } = arg0);
  const items = [onGiftModalDismiss];
  const callback = react.useCallback(() => {
    const obj = openGiftModal;
    obj.closeShopGiftModal();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  let obj2 = { Placeholder: obj3 };
  obj3 = {
    title: intl.string(intl2.t["JCFN/y"]),
    headerLeft: obj4.getHeaderCloseButton(callback),
    render() {
      let intl;
      let tmpResult;
      if (require) {
        const obj2 = { Illustration: NoResults.NoResults, body: intl.string(intl2.t.eAn6z2) };
        const EmptyState = native.EmptyState;
        intl = intl2.intl;
        tmpResult = tmp(EmptyState, obj2);
      } else {
        const obj = { style: { flex: 1, alignItems: "center", justifyContent: "center" }, children: <React3 size="large" /> };
        tmpResult = tmp(hasOwnProperty, obj);
      }
      return tmpResult;
    }
  };
  const Navigator = Navigator2.Navigator;
  intl = intl2.intl;
  obj4 = NavigatorHeader;
  return <Navigator initialRouteName="Placeholder" screens={obj2} />;
}
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
const application_id = Constants.COLLECTIBLES_APPLICATION_ID;
const PaymentGateways = Constants2.PaymentGateways;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftModal.tsx");

export default function CollectiblesShopGiftModal(skuId) {
  let analyticsLocations;
  let giftingOrigin;
  let intl;
  let lockedRecipientUser;
  let onGiftModalDismiss;
  let tmp16Result;
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss } = skuId);
  let skuId1;
  ({ lockedRecipientUser, giftingOrigin } = skuId);
  const effect = react.useEffect(() => {
    const obj = skuId(dependencyMap[21]);
    const badge = obj.fetchBadge(skuId(dependencyMap[22]).BadgeId.GIFTING);
  }, []);
  let tmp3 = skuId;
  let obj = skuId(504);
  const items = [CollectiblesCategoryStore];
  const items1 = [skuId];
  const stateFromStores = obj.useStateFromStores(items, () => CollectiblesCategoryStore.getProduct(skuId), items1);
  const obj2 = skuId(11600);
  const obj3 = { needsCategory: false, seedCategoryStore: true, shouldFetchProduct: null == stateFromStores };
  const state = obj2.useCollectiblesShopProduct(skuId, obj3).state;
  const items2 = [];
  const tmp7 = skuId1(6379);
  const arraySpreadResult = HermesBuiltin.arraySpread(items2, analyticsLocations, 0);
  items2[arraySpreadResult] = skuId1(6380).COLLECTIBLES_MOBILE_GIFT_MODAL;
  const tmp6 = skuId1;
  skuId1 = undefined;
  const analyticsLocations2 = tmp7(items2).analyticsLocations;
  if (stateFromStores != null) {
    skuId1 = stateFromStores.skuId;
  }
  [][0] = skuId1;
  if (null == stateFromStores) {
    tmp16Result = <CollectiblesShopGiftModalPlaceholder isError={"error" === state} onGiftModalDismiss={onGiftModalDismiss} />;
  } else {
    const tmp3Result = tmp3(2186);
    if (tmp3Result.isCollectibleGiftingSupported()) {
      const obj5 = { product: stateFromStores, analyticsLocations: analyticsLocations2, lockedRecipientUser, onGiftModalDismiss, giftingOrigin, validateRecipient: tmp10 };
      tmp16Result = tmp16(CollectiblesShopGiftModalContent, obj5);
    } else {
      const obj6 = { onDismiss: onGiftModalDismiss, title: intl.string(tmp3(1112).t["JCFN/y"]) };
      const tmp6Result = tmp6(11607);
      intl = tmp3(1112).intl;
      tmp16Result = tmp16(tmp6Result, obj6);
    }
  }
  return tmp16Result;
};
