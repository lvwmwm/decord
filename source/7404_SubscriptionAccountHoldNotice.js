// Module ID: 7404
// Function ID: 59537
// Name: SubscriptionAccountHoldNotice
// Dependencies: []
// Exports: default

// Module 7404 (SubscriptionAccountHoldNotice)
importAll(dependencyMap[0]);
({ Linking: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const SubscriptionStatusTypes = arg1(dependencyMap[2]).SubscriptionStatusTypes;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.container = obj;
obj.textContainer = { flexDirection: "row" };
obj.icon = { marginRight: 4 };
obj.text = {};
let closure_8 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/premium/native/SubscriptionAccountHoldNotice.tsx");

export default function SubscriptionAccountHoldNotice(subscription) {
  subscription = subscription.subscription;
  const arg1 = subscription;
  const tmp = callback3();
  let tmp2 = null;
  if (subscription.status === SubscriptionStatusTypes.ACCOUNT_HOLD) {
    let obj = { style: tmp.container };
    obj = { style: tmp.textContainer };
    obj = { size: arg1(dependencyMap[6]).IconSizes.MEDIUM, style: tmp.icon, source: importDefault(dependencyMap[7]) };
    const items = [callback(arg1(dependencyMap[6]).Icon, obj), ];
    const obj1 = { style: tmp.text, variant: "text-sm/medium" };
    const intl = arg1(dependencyMap[9]).intl;
    const obj2 = { endDate: subscription.currentPeriodEnd, planDescription: arg1(dependencyMap[10]).getDisplayName(subscription.planId) };
    obj1.children = intl.format(arg1(dependencyMap[9]).t.7I21Iz, obj2);
    items[1] = callback(arg1(dependencyMap[8]).Text, obj1);
    obj.children = items;
    const items1 = [callback2(closure_4, obj), ];
    const obj3 = { size: "sm" };
    const intl2 = arg1(dependencyMap[9]).intl;
    obj3.text = intl2.string(arg1(dependencyMap[9]).t.VJmUNy);
    obj3.onPress = function onPress() {
      return closure_3.openURL(subscription(closure_2[10]).getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
    };
    items1[1] = callback(arg1(dependencyMap[11]).Button, obj3);
    obj.children = items1;
    tmp2 = callback2(closure_4, obj);
    const obj6 = arg1(dependencyMap[10]);
  }
  return tmp2;
};
