// Module ID: 15276
// Function ID: 15277
// Name: PremiumBillingInfo
// Dependencies: [32, 19, 17, 1072, 21, 5014, 575, 2059, 5624, 1113, 2047, 15272, 7326, 7351, 15277, 7587, 2]
// Exports: default

// Module 15276 (PremiumBillingInfo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import PremiumUtils from "PremiumUtils" /* 2047 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2059 */;
import Text_Text from "Text/Text" /* 5624 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7326 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import PremiumManagementUtils from "PremiumManagementUtils" /* 7587 */;
import PremiumSubscriptionInvoice from "PremiumSubscriptionInvoice" /* 15272 */;
import BillingInformation from "BillingInformation" /* 15277 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
class GoogleManagementLink {
  constructor(subscription) {
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
        const Text = tmp(5624).Text;
        const intl = tmp(1113).intl;
        format = intl.format;
        obj3 = { onClick: tmpResult.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "SUBSCRIPTION_MANAGEMENT") };
        prop = tmp(1113).t["9NPc+O"];
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
    const Text = tmp2(5624).Text;
    intl = tmp2(1113).intl;
    items = [metroRequire(Text, obj6), , ];
    const obj7 = { style: tmp.billingContainer, children: items1 };
    const obj8 = { variant: "text-md/semibold", children: intl2.string(intl3.t.KXQjfc) };
    const Text2 = tmp2(5624).Text;
    intl2 = tmp2(1113).intl;
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
      tmp12Result = tmp12(tmp2(5624).Text, obj11);
    }
    items[2] = tmp12Result;
    return tmp10(tmp11, obj5);
  }
};
export { GoogleManagementLink };
