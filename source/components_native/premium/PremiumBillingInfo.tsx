// Module ID: 7411
// Function ID: 59575
// Name: GoogleManagementLink
// Dependencies: []
// Exports: default

// Module 7411 (GoogleManagementLink)
let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
class GoogleManagementLink {
  constructor(arg0) {
    subscription = global.subscription;
    obj = arg1(dependencyMap[7]);
    tmp = null;
    if (obj.isGooglePlayBillingSupported()) {
      tmp = null;
      if (subscription.isPurchasedViaGoogle) {
        tmp2 = jsx;
        tmp3 = arg1;
        tmp4 = dependencyMap;
        num = 8;
        obj = { "Null": "business", "Null": "cached", alignItems: "cancel" };
        items = [];
        items[0] = global.style;
        obj.style = items;
        num2 = 9;
        intl = arg1(dependencyMap[9]).intl;
        obj1 = {};
        num3 = 10;
        obj4 = arg1(dependencyMap[10]);
        str = "SUBSCRIPTION_MANAGEMENT";
        obj1.onClick = obj4.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
        obj.children = intl.format(arg1(dependencyMap[9]).t.9NPc+O, obj1);
        tmp = jsx(arg1(dependencyMap[8]).TextWithIOSLinkWorkaround, obj);
      }
    }
    return tmp;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ SubscriptionStatusTypes: closure_5, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, externalSubtext: { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } };
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.billingContainer = obj;
obj.billingRenewalInfo = { marginTop: 4 };
obj.billingManageGoogle = { marginTop: 8 };
let closure_8 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("components_native/premium/PremiumBillingInfo.tsx");

export default function PremiumBillingInfo(subscription) {
  subscription = subscription.subscription;
  const tmp = callback4();
  let obj = arg1(dependencyMap[11]);
  obj = { 1393537105: null, -760149847: null, -1309907082: null, subscriptionId: subscription.id, analyticsLocations: importDefault(dependencyMap[12])(), analyticsLocation: importDefault(dependencyMap[13]).PREMIUM_BILLING_INFO };
  const first = callback(obj.useFetchSubscriptionInvoicePreview(obj), 1)[0];
  arg1(dependencyMap[11]);
  if (null == first) {
    return null;
  } else {
    let obj3 = arg1(dependencyMap[14]);
    obj = { shouldAllowExternalManagement: true };
    const externalManagementMessage = obj3.getExternalManagementMessage(subscription, obj);
    const obj1 = { style: subscription.style };
    const obj2 = { alignSelf: -1966325487, justifyContent: 863109121, alignItems: 603979776, backgroundColor: 16777216, style: tmp.title };
    const intl = arg1(dependencyMap[9]).intl;
    obj2.children = intl.string(arg1(dependencyMap[9]).t.Sb6wI1);
    const items = [callback2(arg1(dependencyMap[15]).Text, obj2), , ];
    obj3 = { style: tmp.billingContainer };
    const obj4 = { variant: "text-md/semibold" };
    const intl2 = arg1(dependencyMap[9]).intl;
    obj4.children = intl2.string(arg1(dependencyMap[9]).t.KXQjfc);
    const items1 = [callback2(arg1(dependencyMap[15]).Text, obj4), , ];
    const obj5 = { style: tmp.billingRenewalInfo, variant: "text-sm/medium", children: arg1(dependencyMap[16]).getBillingInformationStringNative(subscription, first, tmp4) };
    items1[1] = callback2(arg1(dependencyMap[15]).Text, obj5);
    const obj6 = { style: tmp.billingManageGoogle, subscription };
    items1[2] = callback2(GoogleManagementLink, obj6);
    obj3.children = items1;
    items[1] = callback3(View, obj3);
    let tmp8 = null;
    if (null != externalManagementMessage) {
      const obj7 = { style: tmp.externalSubtext, variant: "text-sm/medium", children: externalManagementMessage };
      tmp8 = callback2(arg1(dependencyMap[15]).Text, obj7);
    }
    items[2] = tmp8;
    obj1.children = items;
    return callback3(View, obj1);
  }
};
export { GoogleManagementLink };
