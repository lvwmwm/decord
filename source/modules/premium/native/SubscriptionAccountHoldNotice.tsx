// Module ID: 6492
// Function ID: 58062
// Name: SubscriptionAccountHoldNotice
// Dependencies: [31, 27, 653, 33, 4131, 689, 1273, 6493, 4127, 1212, 3777, 4544, 2]
// Exports: default

// Module 6492 (SubscriptionAccountHoldNotice)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { SubscriptionStatusTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
({ Linking: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: 8, margin: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.textContainer = { flexDirection: "row" };
_createForOfIteratorHelperLoose.icon = { marginRight: 4 };
_createForOfIteratorHelperLoose.text = { marginBottom: 8, flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/premium/native/SubscriptionAccountHoldNotice.tsx");

export default function SubscriptionAccountHoldNotice(subscription) {
  subscription = subscription.subscription;
  const tmp = _createForOfIteratorHelperLoose();
  let tmp2 = null;
  if (subscription.status === SubscriptionStatusTypes.ACCOUNT_HOLD) {
    let obj = { style: tmp.container };
    obj = { style: tmp.textContainer };
    obj = { size: subscription(1273).IconSizes.MEDIUM, style: tmp.icon, source: importDefault(6493) };
    const items = [callback(subscription(1273).Icon, obj), ];
    const obj1 = { style: tmp.text, variant: "text-sm/medium" };
    const intl = subscription(1212).intl;
    const obj2 = { endDate: subscription.currentPeriodEnd, planDescription: subscription(3777).getDisplayName(subscription.planId) };
    obj1.children = intl.format(subscription(1212).t["7I21Iz"], obj2);
    items[1] = callback(subscription(4127).Text, obj1);
    obj.children = items;
    const items1 = [callback2(closure_4, obj), ];
    const obj3 = { size: "sm" };
    const intl2 = subscription(1212).intl;
    obj3.text = intl2.string(subscription(1212).t.VJmUNy);
    obj3.onPress = function onPress() {
      return outer1_3.openURL(subscription(outer1_2[10]).getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
    };
    items1[1] = callback(subscription(4544).Button, obj3);
    obj.children = items1;
    tmp2 = callback2(closure_4, obj);
    const obj6 = subscription(3777);
  }
  return tmp2;
};
