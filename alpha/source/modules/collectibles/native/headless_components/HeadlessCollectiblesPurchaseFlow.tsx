// Module ID: 15301
// Function ID: 15302
// Name: HeadlessCollectiblesPurchaseFlow
// Dependencies: [19, 1072, 1083, 21, 10096, 9690, 14654, 1377, 2188, 10873, 10860, 5384, 8893, 15302, 2]
// Exports: default

// Module 15301 (HeadlessCollectiblesPurchaseFlow)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 1083 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2188 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8893 */;
import useProductPurchaseState from "useProductPurchaseState" /* 9690 */;
import ACOMExperiments from "ACOMExperiments" /* 10096 */;
import useCollectiblesExternalGatewayFacetDefault from "useCollectiblesExternalGatewayFacet" /* 14654 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp3;
const NativeCheckoutStoreProviderDefault = tmp3(10860);
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
  const NativePaymentContextProvider = tmp(10873).NativePaymentContextProvider;
  const items = [product.skuId];
  const obj5 = { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  NativeCheckoutStoreProviderDefault;
  return <NativePaymentContextProvider skuIDs={[]} activeSubscription={null}>{null}</NativePaymentContextProvider>;
};
