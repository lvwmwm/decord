// Module ID: 15274
// Function ID: 15275
// Name: SubscriptionAccountHoldNotice
// Dependencies: [19, 17, 1072, 21, 5014, 575, 1187, 15275, 5624, 1113, 2047, 5634, 2]
// Exports: default

// Module 15274 (SubscriptionAccountHoldNotice)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import PremiumUtils from "PremiumUtils" /* 2047 */;
import AssetRegistryDefault from "AssetRegistry" /* 15275 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
({ Linking: c3, View: closure_4 } = react_native);
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2, textContainer: { flexDirection: "row" }, icon: { marginRight: 4 }, text: { marginBottom: 8, flex: 1 } };
obj2 = { padding: 8, margin: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/native/SubscriptionAccountHoldNotice.tsx");

export default function SubscriptionAccountHoldNotice(subscription) {
  let format;
  let intl2;
  let items;
  let items1;
  let obj5;
  let obj6;
  let v7I21Iz;
  subscription = subscription.subscription;
  const tmp = closure_8();
  let tmp2 = null;
  if (subscription.status === SubscriptionStatusTypes.ACCOUNT_HOLD) {
    let obj = { style: tmp.container, children: items1 };
    const obj2 = { style: tmp.textContainer, children: items };
    const obj3 = { size: subscription(1187).IconSizes.MEDIUM, style: tmp.icon, source: AssetRegistryDefault };
    const Icon = subscription(1187).Icon;
    items = [closure_6(Icon, obj3), ];
    const obj4 = { style: tmp.text, variant: "text-sm/medium", children: format(v7I21Iz, obj5) };
    const Text = subscription(5624).Text;
    const intl = subscription(1113).intl;
    format = intl.format;
    obj5 = { endDate: subscription.currentPeriodEnd, planDescription: obj6.getDisplayName(subscription.planId) };
    v7I21Iz = subscription(1113).t["7I21Iz"];
    obj6 = subscription(2047);
    items[1] = closure_6(Text, obj4);
    items1 = [closure_7(closure_4, obj2), ];
    const obj7 = {
      size: "sm",
      text: intl2.string(subscription(1113).t.VJmUNy),
      onPress() {
          c3 = c3.openURL;
          const obj = PremiumUtils;
          return c3(obj.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
        }
    };
    const Button = subscription(5634).Button;
    intl2 = subscription(1113).intl;
    items1[1] = closure_6(Button, obj7);
    tmp2 = closure_7(closure_4, obj);
  }
  return tmp2;
};
