// Module ID: 12929
// Function ID: 12930
// Name: SubscriptionRenewalMutationsNotice
// Dependencies: [19, 17, 4489, 21, 4836, 576, 5753, 1177, 1115, 4488, 2]
// Exports: default

// Module 12929 (SubscriptionRenewalMutationsNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import SubscriptionPlanRecord from "SubscriptionPlanRecord" /* 4489 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp5;
const PremiumUtils = tmp5(4488);
const View = react_native.View;
const isNoneSubscription = SubscriptionPlanRecord.isNoneSubscription;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, icon: obj3, text: obj4 };
obj2 = { padding: 10, marginVertical: 5, marginHorizontal: 15, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "row", justifyContent: "center", backgroundColor: LegacyTokens.DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", marginLeft: 15, color: LegacyTokens.DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
obj4 = { paddingLeft: 10, marginRight: 15, color: LegacyTokens.DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/native/SubscriptionRenewalMutationsNotice.tsx");

export default function SubscriptionRenewalMutationsNotice(arg0) {
  let renewalMutations;
  let subscription;
  ({ subscription, renewalMutations } = arg0);
  const tmp = closure_7();
  const obj = { style: tmp.container, children: null };
  const items = [, ];
  const obj2 = { style: tmp.icon };
  items[0] = hasOwnProperty(native.WarningCircle, obj2);
  const obj3 = { style: tmp.text, children: null };
  const LegacyText = native.LegacyText;
  const intl = intl2.intl;
  const format = intl.format;
  const tmp2 = metroRequire;
  const tmp3 = View;
  const tmp4 = hasOwnProperty;
  if (!subscription.hasExternalPlanChange) {
    let displayName;
    if (!isNoneSubscription(renewalMutations.planId)) {
      const obj4 = PremiumUtilsDefault;
      displayName = obj4.getDisplayName(renewalMutations.planId);
    }
    const obj5 = { planName: displayName, date: subscription.currentPeriodEnd };
    obj3.children = format(tmp7, obj5);
    items[1] = tmp4(LegacyText, obj3);
    obj.children = items;
    return tmp2(tmp3, obj);
  }
  const tmp5Result = PremiumUtils;
  displayName = tmp5Result.getExternalPlanDisplayName(renewalMutations);
};
