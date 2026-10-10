// Module ID: 13660
// Function ID: 13661
// Name: PremiumBillingInfo
// Dependencies: [32, 19, 17, 1085, 21, 5092, 587, 558, 576, 4782, 1126, 4769, 5088, 6851, 6878, 13656, 13661, 7120, 2]

// Module 13660 (PremiumBillingInfo)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import PremiumUtils from "PremiumUtils" /* 4769 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4782 */;
import Text_Text from "Text/Text" /* 5088 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6851 */;
import PremiumManagementUtils from "PremiumManagementUtils" /* 7120 */;
import PremiumSubscriptionInvoice from "PremiumSubscriptionInvoice" /* 13656 */;
import BillingInformation from "BillingInformation" /* 13661 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp5;
const AnalyticsLocationDefault = tmp5(6878);
const View = react_native.View;
({ SubscriptionStatusTypes: hasOwnProperty, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, externalSubtext: { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, billingContainer: obj2, billingRenewalInfo: { marginTop: 4 }, billingManageGoogle: { marginTop: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, marginTop: 8 };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GoogleManagementLink(arg0) {
  let style;
  let subscription;
  let tmpResult;
  const obj = react2;
  const cResult = obj.c(5);
  ({ style, subscription } = arg0);
  let tmp4 = null;
  const obj2 = BillingPlatformUtils;
  if (obj2.isGooglePlayBillingSupported()) {
    tmp4 = null;
    if (subscription.isPurchasedViaGoogle) {
      let tmp5;
      if (cResult[0] !== subscription.paymentGateway) {
        const intl = tmp(1126).intl;
        const format = intl.format;
        const obj3 = { onClick: tmpResult.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "SUBSCRIPTION_MANAGEMENT") };
        const prop = tmp(1126).t["9NPc+O"];
        tmpResult = PremiumUtils;
        const formatResult = format(prop, obj3);
        cResult[0] = subscription.paymentGateway;
        cResult[1] = formatResult;
        tmp5 = formatResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === style) {
        let tmp8;
        if (cResult[3] === tmp5) {
          tmp8 = cResult[4];
        }
        tmp4 = tmp8;
      }
      const obj4 = { style, variant: "text-sm/medium", color: "text-link", children: tmp5 };
      const tmp10 = metroRequire(Text_Text.Text, obj4);
      cResult[2] = style;
      cResult[3] = tmp5;
      cResult[4] = tmp10;
      tmp8 = tmp10;
    }
  }
  return tmp4;
}) : (function GoogleManagementLink(subscription) {
  let format;
  let obj3;
  let prop;
  let tmpResult;
  subscription = subscription.subscription;
  const style = subscription.style;
  let tmp3 = null;
  const obj = BillingPlatformUtils;
  if (obj.isGooglePlayBillingSupported()) {
    tmp3 = null;
    if (subscription.isPurchasedViaGoogle) {
      const obj2 = { style, variant: "text-sm/medium", color: "text-link", children: format(prop, obj3) };
      const Text = tmp(5088).Text;
      const intl = tmp(1126).intl;
      format = intl.format;
      obj3 = { onClick: tmpResult.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "SUBSCRIPTION_MANAGEMENT") };
      prop = tmp(1126).t["9NPc+O"];
      tmpResult = PremiumUtils;
      tmp3 = metroRequire(Text, obj2);
    }
  }
  return tmp3;
});
let closure_9 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumBillingInfo(arg0) {
  let intl2;
  let items;
  let items1;
  let style;
  let subscription;
  const obj = react2;
  const cResult = obj.c(30);
  ({ style, subscription } = arg0);
  const tmp4 = closure_8();
  const id = subscription.id;
  const tmp6 = useAnalyticsLocationsDefault();
  if (cResult[0] === subscription.id) {
    let tmp7;
    if (cResult[1] === tmp6) {
      tmp7 = cResult[2];
    }
    const tmpResult = PremiumSubscriptionInvoice;
    const first = _slicedToArray(tmpResult.useFetchSubscriptionInvoicePreview(tmp7), 1)[0];
    const tmp8 = _slicedToArray;
    if (cResult[3] === subscription.id) {
      let tmp12;
      if (cResult[4] === subscription.status !== hasOwnProperty.PAST_DUE) {
        tmp12 = cResult[5];
      }
      const tmpResult4 = PremiumSubscriptionInvoice;
      const first1 = tmp8(tmpResult4.useGetSubscriptionInvoice(tmp12), 1)[0];
      const tmpResult5 = BillingInformation;
      const billingInformationNative = tmpResult5.useBillingInformationNative(subscription, first, first1);
      if (null == first) {
        return null;
      } else {
        let tmp16;
        let tmp19;
        let tmp21;
        let tmp24;
        if (cResult[6] !== subscription) {
          const tmpResult6 = PremiumManagementUtils;
          const externalManagementMessage = tmpResult6.getExternalManagementMessage(subscription, { shouldAllowExternalManagement: true });
          cResult[6] = subscription;
          cResult[7] = externalManagementMessage;
          tmp16 = externalManagementMessage;
        } else {
          tmp16 = cResult[7];
        }
        const _Symbol = Symbol;
        const title = tmp4.title;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(intl3.t.Sb6wI1);
          cResult[8] = stringResult;
          tmp19 = stringResult;
        } else {
          tmp19 = cResult[8];
        }
        if (cResult[9] !== tmp4.title) {
          const obj2 = { style: title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: tmp19 };
          const tmp23 = metroRequire(Text_Text.Text, obj2);
          cResult[9] = tmp4.title;
          cResult[10] = tmp23;
          tmp21 = tmp23;
        } else {
          tmp21 = cResult[10];
        }
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-md/semibold", children: intl2.string(intl3.t.KXQjfc) };
          const Text = tmp(5088).Text;
          intl2 = tmp(1126).intl;
          const tmp26 = metroRequire(Text, obj3);
          cResult[11] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[11];
        }
        if (cResult[12] === billingInformationNative) {
          let tmp27;
          if (cResult[13] === tmp4.billingRenewalInfo) {
            tmp27 = cResult[14];
          }
          if (cResult[15] === tmp4.billingManageGoogle) {
            let tmp30;
            if (cResult[16] === subscription) {
              tmp30 = cResult[17];
            }
            if (cResult[18] === tmp4.billingContainer) {
              if (cResult[19] === tmp27) {
                let tmp34;
                if (cResult[20] === tmp30) {
                  tmp34 = cResult[21];
                }
                if (cResult[22] === tmp16) {
                  let tmp38;
                  if (cResult[23] === tmp4.externalSubtext) {
                    tmp38 = cResult[24];
                  }
                  if (cResult[25] === style) {
                    if (cResult[26] === tmp34) {
                      if (cResult[27] === tmp38) {
                        let tmp41;
                        if (cResult[28] === tmp21) {
                          tmp41 = cResult[29];
                        }
                        return tmp41;
                      }
                    }
                  }
                  const obj4 = { style, children: items };
                  items = [tmp21, tmp34, tmp38];
                  const tmp44 = metroImportDefault(View, obj4);
                  cResult[25] = style;
                  cResult[26] = tmp34;
                  cResult[27] = tmp38;
                  cResult[28] = tmp21;
                  cResult[29] = tmp44;
                  tmp41 = tmp44;
                }
                let tmp39 = null;
                if (null != tmp16) {
                  const obj5 = { style: tmp4.externalSubtext, variant: "text-sm/medium", children: tmp16 };
                  tmp39 = metroRequire(tmp(5088).Text, obj5);
                }
                cResult[22] = tmp16;
                cResult[23] = tmp4.externalSubtext;
                cResult[24] = tmp39;
                tmp38 = tmp39;
              }
            }
            const obj6 = { style: tmp4.billingContainer, children: items1 };
            items1 = [tmp24, tmp27, tmp30];
            const tmp37 = metroImportDefault(View, obj6);
            cResult[18] = tmp4.billingContainer;
            cResult[19] = tmp27;
            cResult[20] = tmp30;
            cResult[21] = tmp37;
            tmp34 = tmp37;
          }
          const obj7 = { style: tmp4.billingManageGoogle, subscription };
          const tmp33 = metroRequire(closure_9, obj7);
          cResult[15] = tmp4.billingManageGoogle;
          cResult[16] = subscription;
          cResult[17] = tmp33;
          tmp30 = tmp33;
        }
        const obj8 = { style: tmp4.billingRenewalInfo, variant: "text-sm/medium", children: billingInformationNative };
        const tmp29 = metroRequire(Text_Text.Text, obj8);
        cResult[12] = billingInformationNative;
        cResult[13] = tmp4.billingRenewalInfo;
        cResult[14] = tmp29;
        tmp27 = tmp29;
      }
    }
    const obj9 = { subscriptionId: subscription.id, preventFetch: subscription.status !== hasOwnProperty.PAST_DUE };
    cResult[3] = subscription.id;
    cResult[4] = subscription.status !== hasOwnProperty.PAST_DUE;
    cResult[5] = obj9;
    tmp12 = obj9;
  }
  const obj10 = { subscriptionId: id, renewal: true, applyEntitlements: true, analyticsLocations: tmp6, analyticsLocation: AnalyticsLocationDefault.PREMIUM_BILLING_INFO };
  cResult[0] = subscription.id;
  cResult[1] = tmp6;
  cResult[2] = obj10;
  tmp7 = obj10;
}) : (function PremiumBillingInfo(subscription) {
  let intl;
  let intl2;
  let items;
  let items1;
  subscription = subscription.subscription;
  const style = subscription.style;
  const tmp = closure_8();
  const obj = PremiumSubscriptionInvoice;
  const obj2 = { subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations: useAnalyticsLocationsDefault(), analyticsLocation: AnalyticsLocationDefault.PREMIUM_BILLING_INFO };
  const first = _slicedToArray(obj.useFetchSubscriptionInvoicePreview(obj2), 1)[0];
  const obj3 = PremiumSubscriptionInvoice;
  const obj4 = { subscriptionId: subscription.id, preventFetch: subscription.status !== hasOwnProperty.PAST_DUE };
  const first1 = _slicedToArray(obj3.useGetSubscriptionInvoice(obj4), 1)[0];
  BillingInformation;
  if (null == first) {
    return null;
  } else {
    const tmp2Result = PremiumManagementUtils;
    const externalManagementMessage = tmp2Result.getExternalManagementMessage(subscription, { shouldAllowExternalManagement: true });
    const obj5 = { style, children: items };
    const obj6 = { style: tmp.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: intl.string(intl3.t.Sb6wI1) };
    const Text = tmp2(5088).Text;
    intl = tmp2(1126).intl;
    items = [metroRequire(Text, obj6), , ];
    const obj7 = { style: tmp.billingContainer, children: items1 };
    const obj8 = { variant: "text-md/semibold", children: intl2.string(intl3.t.KXQjfc) };
    const Text2 = tmp2(5088).Text;
    intl2 = tmp2(1126).intl;
    items1 = [metroRequire(Text2, obj8), , ];
    const obj9 = { style: tmp.billingRenewalInfo, variant: "text-sm/medium", children: tmp7 };
    items1[1] = metroRequire(Text_Text.Text, obj9);
    const obj10 = { style: tmp.billingManageGoogle, subscription };
    items1[2] = metroRequire(closure_9, obj10);
    items[1] = metroImportDefault(View, obj7);
    let tmp12Result = null;
    const tmp10 = metroImportDefault;
    const tmp11 = View;
    const tmp12 = metroRequire;
    if (null != externalManagementMessage) {
      const obj11 = { style: tmp.externalSubtext, variant: "text-sm/medium", children: externalManagementMessage };
      tmp12Result = tmp12(tmp2(5088).Text, obj11);
    }
    items[2] = tmp12Result;
    return tmp10(tmp11, obj5);
  }
});
const result = size.fileFinishedImporting("components_native/premium/PremiumBillingInfo.tsx");

export default tmp6;
export const GoogleManagementLink = tmp5;
