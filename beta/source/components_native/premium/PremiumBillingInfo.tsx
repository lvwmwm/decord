// Module ID: 12931
// Function ID: 12932
// Name: PremiumBillingInfo
// Dependencies: [32, 19, 17, 1074, 21, 4836, 576, 4501, 4832, 1115, 4488, 12928, 6583, 6603, 12932, 6824, 2]
// Exports: default

// Module 12931 (PremiumBillingInfo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4501 */;
import Text_Text from "Text/Text" /* 4832 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import PremiumManagementUtils from "PremiumManagementUtils" /* 6824 */;
import PremiumSubscriptionInvoice from "PremiumSubscriptionInvoice" /* 12928 */;
import BillingInformation from "BillingInformation" /* 12932 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
class GoogleManagementLink {
  constructor(subscription) {
    let format;
    let items;
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
        const obj2 = { style: items, variant: "text-sm/medium", color: "text-link", children: format(prop, obj3) };
        items = [style];
        const Text = tmp(4832).Text;
        const intl = tmp(1115).intl;
        format = intl.format;
        obj3 = { onClick: tmpResult.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "SUBSCRIPTION_MANAGEMENT") };
        prop = tmp(1115).t["9NPc+O"];
        tmpResult = PremiumUtils;
        tmp3 = metroRequire(Text, obj2);
      }
    }
    return tmp3;
  }
}
const View = react_native.View;
({ SubscriptionStatusTypes: hasOwnProperty, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, externalSubtext: { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, billingContainer: obj2, billingRenewalInfo: { marginTop: 4 }, billingManageGoogle: { marginTop: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, marginTop: 8 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("components_native/premium/PremiumBillingInfo.tsx");

export default function PremiumBillingInfo(subscription) {
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
    const Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    items = [metroRequire(Text, obj6), , ];
    const obj7 = { style: tmp.billingContainer, children: items1 };
    const obj8 = { variant: "text-md/semibold", children: intl2.string(intl3.t.KXQjfc) };
    const Text2 = tmp2(4832).Text;
    intl2 = tmp2(1115).intl;
    items1 = [metroRequire(Text2, obj8), , ];
    const obj9 = { style: tmp.billingRenewalInfo, variant: "text-sm/medium", children: tmp7 };
    items1[1] = metroRequire(Text_Text.Text, obj9);
    const obj10 = { style: tmp.billingManageGoogle, subscription };
    items1[2] = metroRequire(GoogleManagementLink, obj10);
    items[1] = metroImportDefault(View, obj7);
    let tmp12Result = null;
    const tmp10 = metroImportDefault;
    const tmp11 = View;
    const tmp12 = metroRequire;
    if (null != externalManagementMessage) {
      const obj11 = { style: tmp.externalSubtext, variant: "text-sm/medium", children: externalManagementMessage };
      tmp12Result = tmp12(tmp2(4832).Text, obj11);
    }
    items[2] = tmp12Result;
    return tmp10(tmp11, obj5);
  }
};
export { GoogleManagementLink };
