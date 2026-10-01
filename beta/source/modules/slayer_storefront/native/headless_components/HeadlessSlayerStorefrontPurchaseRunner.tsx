// Module ID: 10273
// Function ID: 10274
// Name: HeadlessSlayerStorefrontPurchaseRunner
// Dependencies: [19, 6844, 1074, 1241, 10274, 1364, 2]
// Exports: HeadlessSlayerStorefrontPurchaseRunner

// Module 10273 (HeadlessSlayerStorefrontPurchaseRunner)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 6844 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let react = react_mod;
let useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/slayer_storefront/native/headless_components/HeadlessSlayerStorefrontPurchaseRunner.tsx");

export const HeadlessSlayerStorefrontPurchaseRunner = function HeadlessSlayerStorefrontPurchaseRunner(attempt) {
  let analyticsLocations;
  let closure_3;
  let closure_4;
  let id;
  let onPurchaseError;
  let sku;
  let skuId;
  attempt = attempt.attempt;
  ({ onPurchaseComplete: importDefault, onPurchaseError } = attempt);
  useNativeCheckoutStore = undefined;
  onPurchaseError = undefined;
  let closure_9;
  let ref2;
  ({ skuId, sku, analyticsLocations } = attempt);
  const tmp = useNativeCheckoutStore((analyticsFields) => analyticsFields.analyticsFields);
  react = tmp;
  const tmp2 = useNativeCheckoutStore((setCheckoutFailed) => setCheckoutFailed.setCheckoutFailed);
  useNativeCheckoutStore = tmp2;
  let tmp3 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  let closure_5 = tmp3;
  const tmp4 = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  let closure_6 = tmp4;
  let obj = react;
  const ref = react.useRef(false);
  const items = [tmp, tmp2, onPurchaseError];
  onPurchaseError = react.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.PAYMENT_FLOW_FAILED, closure_3);
      closure_4();
    }
    onPurchaseError();
  }, items);
  let obj2 = {
    skuId,
    sku,
    analyticsLoadId: tmp.load_id,
    analyticsLocations,
    orderId: id,
    analyticsData: tmp,
    onPurchaseComplete() {
      ref.current = true;
      const obj = PlatformUtils;
      if (obj.isIOS()) {
        const obj2 = AnalyticsUtilsDefault;
        obj2.track(AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, closure_3);
      }
      importDefault();
    },
    onPurchaseError,
    onPurchasePending() {

    }
  };
  id = undefined;
  const tmp6 = require("useMobileSocialLayerPurchaseSKU");
  if (tmp3 != null) {
    id = tmp3.id;
  }
  const tmp6Result = tmp6(obj2);
  closure_9 = tmp6Result;
  ref2 = obj.useRef(0);
  const items1 = [attempt, tmp6Result, onPurchaseError, tmp3, tmp4];
  const effect = obj.useEffect(() => {
    if (ref2.current !== attempt) {
      const tmp3 = closure_6 && null == closure_5;
      if (!tmp3) {
        tmp.current = tmp2;
        ref.current = false;
        const promise = closure_9();
        promise.catch(callback);
      }
    }
  }, items1);
  return null;
};
