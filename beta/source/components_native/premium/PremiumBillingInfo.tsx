// Module ID: 13662
// Function ID: 13663
// Name: PremiumBillingInfo
// Dependencies: [32, 19, 17, 1078, 21, 4758, 580, 558, 568, 4431, 1119, 4418, 4754, 7409, 7429, 13659, 7648, 13663, 2]

// Module 13662 (PremiumBillingInfo)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7409 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7429 */;
import PremiumSubscriptionInvoice from "PremiumSubscriptionInvoice" /* 13659 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const util = Text(1119);
const PremiumUtils = Text(4418);
const Text_Text = Text(4754);
require = fn;
const View = fn(17).View;
const Constants = fn(1078);
({ SubscriptionStatusTypes: hasOwnProperty, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, externalSubtext: { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, billingContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, marginTop: 8 }, billingRenewalInfo: { marginTop: 4 }, billingManageGoogle: { marginTop: 8 } };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Text = require;
  let tmp = dependencyMap;
  const cResult = c.c(7);
  ({ style, subscription } = arg0);
  let tmp3 = null;
  if (obj2.isGooglePlayBillingSupported()) {
    tmp3 = null;
    if (subscription.isPurchasedViaGoogle) {
      if (cResult[0] !== style) {
        const items = [style];
        cResult[0] = style;
        cResult[1] = items;
        let tmp4 = items;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== subscription.paymentGateway) {
        const intl = util.intl;
        const obj3 = { onClick: PremiumUtils.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "SUBSCRIPTION_MANAGEMENT") };
        const formatResult = intl.format(util.t["9NPc+O"], obj3);
        cResult[2] = subscription.paymentGateway;
        cResult[3] = formatResult;
        let tmp5 = formatResult;
        const TextResult = PremiumUtils;
      } else {
        tmp5 = cResult[3];
      }
      if (cResult[4] === tmp4) {
      }
      Text = Text_Text.Text;
      const obj4 = { style: tmp4, variant: "text-sm/medium", color: "text-link", children: tmp5 };
      tmp = timestampProducer(Text, obj4);
      cResult[4] = tmp4;
      cResult[5] = tmp5;
      cResult[6] = tmp;
    }
  }
  return tmp3;
}) : ((subscription) => {
  subscription = subscription.subscription;
  let tmp3 = null;
  if (obj.isGooglePlayBillingSupported()) {
    tmp3 = null;
    if (subscription.isPurchasedViaGoogle) {
      const obj2 = { style: null, variant: "text-sm/medium", color: "text-link", children: null };
      const items = [subscription.style];
      obj2.style = items;
      const intl = tmp(1119).intl;
      const obj3 = { onClick: tmp(4418).getExternalSubscriptionMethodUrl(subscription.paymentGateway, "SUBSCRIPTION_MANAGEMENT") };
      obj2.children = intl.format(tmp(1119).t["9NPc+O"], obj3);
      tmp3 = timestampProducer(tmp(4754).Text, obj2);
      const tmpResult = tmp(4418);
    }
  }
  return tmp3;
});
let closure_9 = tmp5;
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, marginTop: 8 };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumBillingInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(34);
  ({ style, subscription } = arg0);
  const tmp4 = closure_8();
  const tmp6 = useAnalyticsLocationsDefault();
  if (cResult[0] === subscription.id) {
    if (cResult[1] === tmp6) {
      let tmp7 = cResult[2];
    }
    const first = _slicedToArray(tmp(13659).useFetchSubscriptionInvoicePreview(tmp7), 1)[0];
    if (cResult[3] === subscription.id) {
      if (cResult[4] === tmp11) {
        let tmp12 = cResult[5];
      }
      const first1 = tmp8(tmp(13659).useGetSubscriptionInvoice(tmp12), 1)[0];
      if (null == first) {
        return null;
      } else {
        if (cResult[6] !== subscription) {
          const externalManagementMessage = tmp(7648).getExternalManagementMessage(subscription, { shouldAllowExternalManagement: true });
          cResult[6] = subscription;
          cResult[7] = externalManagementMessage;
          let tmp15 = externalManagementMessage;
          const tmpResult5 = tmp(7648);
        } else {
          tmp15 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1119).intl;
          const stringResult = intl.string(tmp(1119).t.Sb6wI1);
          cResult[8] = stringResult;
          let tmp18 = stringResult;
        } else {
          tmp18 = cResult[8];
        }
        if (cResult[9] !== tmp4.title) {
          const obj2 = { style: tmp4.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: tmp18 };
          const tmp22 = timestampProducer(tmp(4754).Text, obj2);
          cResult[9] = tmp4.title;
          cResult[10] = tmp22;
          let tmp20 = tmp22;
        } else {
          tmp20 = cResult[10];
        }
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-md/semibold", children: null };
          const intl2 = tmp(1119).intl;
          obj3.children = intl2.string(tmp(1119).t.KXQjfc);
          const tmp25 = timestampProducer(tmp(4754).Text, obj3);
          cResult[11] = tmp25;
          let tmp23 = tmp25;
        } else {
          tmp23 = cResult[11];
        }
        if (cResult[12] === first1) {
          if (cResult[13] === first) {
            if (cResult[14] === subscription) {
              let tmp27 = cResult[15];
            }
            if (cResult[16] === tmp4.billingRenewalInfo) {
              if (cResult[17] === tmp27) {
                let tmp29 = cResult[18];
              }
              if (cResult[19] === tmp4.billingManageGoogle) {
                if (cResult[20] === subscription) {
                  let tmp32 = cResult[21];
                }
                if (cResult[22] === tmp4.billingContainer) {
                  if (cResult[23] === tmp29) {
                    if (cResult[24] === tmp32) {
                      let tmp36 = cResult[25];
                    }
                    if (cResult[26] === tmp15) {
                      if (cResult[27] === tmp4.externalSubtext) {
                        let tmp40 = cResult[28];
                      }
                      if (cResult[29] === style) {
                        if (cResult[30] === tmp36) {
                          if (cResult[31] === tmp40) {
                            if (cResult[32] === tmp20) {
                              let tmp43 = cResult[33];
                            }
                            return tmp43;
                          }
                        }
                      }
                      const obj4 = { style, children: null };
                      const items = [tmp20, tmp36, tmp40];
                      obj4.children = items;
                      const tmp46 = React5(View, obj4);
                      cResult[29] = style;
                      cResult[30] = tmp36;
                      cResult[31] = tmp40;
                      cResult[32] = tmp20;
                      cResult[33] = tmp46;
                      tmp43 = tmp46;
                    }
                    let tmp41 = null;
                    if (null != tmp15) {
                      const obj5 = { style: tmp4.externalSubtext, variant: "text-sm/medium", children: tmp15 };
                      tmp41 = timestampProducer(tmp(4754).Text, obj5);
                    }
                    cResult[26] = tmp15;
                    cResult[27] = tmp4.externalSubtext;
                    cResult[28] = tmp41;
                    tmp40 = tmp41;
                  }
                }
                const obj6 = { style: tmp4.billingContainer, children: null };
                const items1 = [tmp23, tmp29, tmp32];
                obj6.children = items1;
                const tmp39 = React5(View, obj6);
                cResult[22] = tmp4.billingContainer;
                cResult[23] = tmp29;
                cResult[24] = tmp32;
                cResult[25] = tmp39;
                tmp36 = tmp39;
              }
              const obj7 = { style: tmp4.billingManageGoogle, subscription };
              const tmp35 = timestampProducer(closure_9, obj7);
              cResult[19] = tmp4.billingManageGoogle;
              cResult[20] = subscription;
              cResult[21] = tmp35;
              tmp32 = tmp35;
            }
            const obj8 = { style: tmp26, variant: "text-sm/medium", children: tmp27 };
            const tmp31 = timestampProducer(tmp(4754).Text, obj8);
            cResult[16] = tmp4.billingRenewalInfo;
            cResult[17] = tmp27;
            cResult[18] = tmp31;
            tmp29 = tmp31;
          }
        }
        const billingInformationStringNative = tmp(13663).getBillingInformationStringNative(subscription, first, first1);
        cResult[12] = first1;
        cResult[13] = first;
        cResult[14] = subscription;
        cResult[15] = billingInformationStringNative;
        tmp27 = billingInformationStringNative;
        const tmpResult6 = tmp(13663);
      }
      const tmpResult4 = tmp(13659);
    }
    const obj9 = { subscriptionId: subscription.id, preventFetch: subscription.status !== constants.PAST_DUE };
    cResult[3] = subscription.id;
    cResult[4] = subscription.status !== constants.PAST_DUE;
    cResult[5] = obj9;
    tmp12 = obj9;
    tmp8 = _slicedToArray;
    const tmpResult = tmp(13659);
  }
  const obj10 = { subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations: tmp6, analyticsLocation: AnalyticsLocationDefault.PREMIUM_BILLING_INFO };
  cResult[0] = subscription.id;
  cResult[1] = tmp6;
  cResult[2] = obj10;
  tmp7 = obj10;
}) : ((subscription) => {
  subscription = subscription.subscription;
  const tmp = closure_8();
  const obj = PremiumSubscriptionInvoice;
  const first = _slicedToArray(obj.useFetchSubscriptionInvoicePreview({ subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations: useAnalyticsLocationsDefault(), analyticsLocation: AnalyticsLocationDefault.PREMIUM_BILLING_INFO }), 1)[0];
  PremiumSubscriptionInvoice;
  if (null == first) {
    return null;
  } else {
    const externalManagementMessage = tmp2(7648).getExternalManagementMessage(subscription, { shouldAllowExternalManagement: true });
    const obj3 = { style: subscription.style, children: null };
    const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
    const intl = tmp2(1119).intl;
    obj4.children = intl.string(tmp2(1119).t.Sb6wI1);
    const items = [timestampProducer(tmp2(4754).Text, obj4), , ];
    const obj5 = { style: tmp.billingContainer, children: null };
    const obj6 = { variant: "text-md/semibold", children: null };
    const intl2 = tmp2(1119).intl;
    obj6.children = intl2.string(tmp2(1119).t.KXQjfc);
    const items1 = [timestampProducer(tmp2(4754).Text, obj6), , ];
    const obj7 = { style: tmp.billingRenewalInfo, variant: "text-sm/medium", children: null };
    const tmp10 = View;
    const tmp11 = timestampProducer;
    const tmp2Result = tmp2(7648);
    const tmp9 = React5;
    obj7.children = tmp2(13663).getBillingInformationStringNative(subscription, first, tmp6);
    items1[1] = timestampProducer(tmp2(4754).Text, obj7);
    const obj8 = { style: tmp.billingManageGoogle, subscription };
    items1[2] = timestampProducer(closure_9, obj8);
    obj5.children = items1;
    items[1] = React5(View, obj5);
    let tmp11Result = null;
    if (null != externalManagementMessage) {
      const obj9 = { style: tmp.externalSubtext, variant: "text-sm/medium", children: externalManagementMessage };
      tmp11Result = tmp11(tmp2(4754).Text, obj9);
    }
    items[2] = tmp11Result;
    obj3.children = items;
    return tmp9(tmp10, obj3);
  }
  const obj2 = { subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations: useAnalyticsLocationsDefault(), analyticsLocation: AnalyticsLocationDefault.PREMIUM_BILLING_INFO };
});
export const GoogleManagementLink = tmp5;
