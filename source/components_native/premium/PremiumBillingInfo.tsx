// Module ID: 7418
// Function ID: 59644
// Name: GoogleManagementLink
// Dependencies: [57, 31, 27, 653, 33, 4130, 689, 3789, 4126, 1212, 3776, 7414, 5462, 5482, 6642, 7419, 2]
// Exports: default

// Module 7418 (GoogleManagementLink)
import _slicedToArray from "_slicedToArray";
import "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
class GoogleManagementLink {
  constructor(arg0) {
    subscription = global.subscription;
    obj = require("isPremiumGiftingSupported");
    tmp = null;
    if (obj.isGooglePlayBillingSupported()) {
      tmp = null;
      if (subscription.isPurchasedViaGoogle) {
        tmp2 = jsx;
        tmp3 = closure_0;
        tmp4 = closure_2;
        num = 8;
        obj = { style: null, variant: "text-sm/medium", color: "text-link" };
        items = [];
        items[0] = global.style;
        obj.style = items;
        num2 = 9;
        intl = require("getSystemLocale").intl;
        obj1 = {};
        num3 = 10;
        obj4 = require("_createForOfIteratorHelperLoose");
        str = "SUBSCRIPTION_MANAGEMENT";
        obj1.onClick = obj4.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
        obj.children = intl.format(require("getSystemLocale").t["9NPc+O"], obj1);
        tmp = jsx(require("Text").Text, obj);
      }
    }
    return tmp;
  }
}
({ SubscriptionStatusTypes: closure_5, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = ME);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, externalSubtext: { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, padding: 16, marginTop: 8 };
_createForOfIteratorHelperLoose.billingContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.billingRenewalInfo = { marginTop: 4 };
_createForOfIteratorHelperLoose.billingManageGoogle = { marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/premium/PremiumBillingInfo.tsx");

export default function PremiumBillingInfo(subscription) {
  subscription = subscription.subscription;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(7414) /* createSubscriptionInvoicePreview */;
  obj = { subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations: importDefault(5462)(), analyticsLocation: importDefault(5482).PREMIUM_BILLING_INFO };
  const first = callback(obj.useFetchSubscriptionInvoicePreview(obj), 1)[0];
  require(7414) /* createSubscriptionInvoicePreview */;
  if (null == first) {
    return null;
  } else {
    let obj3 = require(6642) /* getPremiumManagementMethod */;
    obj = { shouldAllowExternalManagement: true };
    const externalManagementMessage = obj3.getExternalManagementMessage(subscription, obj);
    const obj1 = { style: subscription.style };
    const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj2.children = intl.string(require(1212) /* getSystemLocale */.t.Sb6wI1);
    const items = [callback2(require(4126) /* Text */.Text, obj2), , ];
    obj3 = { style: tmp.billingContainer };
    const obj4 = { variant: "text-md/semibold" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj4.children = intl2.string(require(1212) /* getSystemLocale */.t.KXQjfc);
    const items1 = [callback2(require(4126) /* Text */.Text, obj4), , ];
    const obj5 = { style: tmp.billingRenewalInfo, variant: "text-sm/medium", children: require(7419) /* getBillingInformationStringNative */.getBillingInformationStringNative(subscription, first, tmp4) };
    items1[1] = callback2(require(4126) /* Text */.Text, obj5);
    const obj6 = { style: tmp.billingManageGoogle, subscription };
    items1[2] = callback2(GoogleManagementLink, obj6);
    obj3.children = items1;
    items[1] = callback3(View, obj3);
    let tmp8 = null;
    if (null != externalManagementMessage) {
      const obj7 = { style: tmp.externalSubtext, variant: "text-sm/medium", children: externalManagementMessage };
      tmp8 = callback2(require(4126) /* Text */.Text, obj7);
    }
    items[2] = tmp8;
    obj1.children = items;
    return callback3(View, obj1);
  }
};
export { GoogleManagementLink };
