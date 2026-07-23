// Module ID: 7413
// Function ID: 59603
// Name: SubscriptionRenewalMutationsNotice
// Dependencies: [31, 27, 3777, 33, 4130, 689, 4973, 1273, 1212, 3776, 2]
// Exports: default

// Module 7413 (SubscriptionRenewalMutationsNotice)
import "result";
import { View } from "get ActivityIndicator";
import { isNoneSubscription } from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: 10, marginVertical: 5, marginHorizontal: 15, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, display: "flex", flexDirection: "row", justifyContent: "center", backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { alignSelf: "center", marginLeft: 15, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
_createForOfIteratorHelperLoose.icon = obj1;
const obj2 = { paddingLeft: 10, marginRight: 15, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
_createForOfIteratorHelperLoose.text = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/SubscriptionRenewalMutationsNotice.tsx");

export default function SubscriptionRenewalMutationsNotice(arg0) {
  let renewalMutations;
  let subscription;
  ({ subscription, renewalMutations } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { style: tmp.icon };
  const items = [callback(require(1273) /* Button */.WarningCircle, obj), ];
  obj = { style: tmp.text };
  const intl = require(1212) /* getSystemLocale */.intl;
  const obj1 = {};
  if (!subscription.hasExternalPlanChange) {
    if (!isNoneSubscription(renewalMutations.planId)) {
      let displayName = importDefault(3776).getDisplayName(renewalMutations.planId);
      const obj5 = importDefault(3776);
    }
    obj1.planName = displayName;
    obj1.date = subscription.currentPeriodEnd;
    obj.children = intl.format(tmp5, obj1);
    items[1] = callback(require(1273) /* Button */.LegacyText, obj);
    obj.children = items;
    return closure_6(View, obj);
  }
  displayName = require(3776) /* _createForOfIteratorHelperLoose */.getExternalPlanDisplayName(renewalMutations);
};
