// Module ID: 14160
// Function ID: 14161
// Name: HeadlessCollectiblesPurchaseFlow
// Dependencies: [19, 1072, 1083, 21, 8801, 8918, 13819, 1380, 2186, 9488, 9126, 5006, 8798, 14161, 2]
// Exports: default

// Module 14160 (HeadlessCollectiblesPurchaseFlow)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 1083 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2186 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8798 */;
import ACOMExperiments from "ACOMExperiments" /* 8801 */;
import useProductPurchaseState from "useProductPurchaseState" /* 8918 */;
import useCollectiblesExternalGatewayFacetDefault from "useCollectiblesExternalGatewayFacet" /* 13819 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp3;
const NativeCheckoutStoreProviderDefault = tmp3(9126);
const application_id = Constants.COLLECTIBLES_APPLICATION_ID;
const PaymentGateways = Constants2.PaymentGateways;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseFlow.tsx");

export default function HeadlessCollectiblesPurchaseFlow(arg0) {
  let GOOGLE;
  let analyticsLocations;
  let attempt;
  let onBuySettled;
  let product;
  let stageCollectibleChangeForEditProfile;
  let tmp6;
  ({ product, analyticsLocations } = arg0);
  ({ attempt, onBuySettled, stageCollectibleChangeForEditProfile } = arg0);
  const OTPACOMOrderExperiment = ACOMExperiments.OTPACOMOrderExperiment;
  const enabled = OTPACOMOrderExperiment.useConfig({ location: "CollectiblesPurchaseFlow" }).enabled;
  let obj = useProductPurchaseState;
  const isPurchased = obj.useProductPurchaseState(product).isPurchased;
  const tmp4 = useCollectiblesExternalGatewayFacetDefault(product);
  const obj2 = PlatformUtils;
  if (obj2.isIOS()) {
    GOOGLE = tmp5.APPLE_ADVANCED_COMMERCE;
    tmp6 = tmp5;
  } else {
    GOOGLE = tmp5.GOOGLE;
    tmp6 = tmp5;
  }
  let tmp7 = !isPurchased;
  if (tmp7) {
    let tmp8 = GOOGLE === tmp6.APPLE_ADVANCED_COMMERCE && enabled;
    if (!tmp8) {
      let result = GOOGLE === tmp6.GOOGLE;
      if (result) {
        const tmpResult = BillingPlatformUtils;
        result = tmpResult.isGooglePlayBillingSupported();
      }
      tmp8 = result;
    }
    tmp7 = tmp8;
  }
  const NativePaymentContextProvider = tmp(9488).NativePaymentContextProvider;
  const items = [product.skuId];
  const obj5 = { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  NativeCheckoutStoreProviderDefault;
  return <NativePaymentContextProvider skuIDs={[]} activeSubscription={null}>{null}</NativePaymentContextProvider>;
};
