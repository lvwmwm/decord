// Module ID: 15275
// Function ID: 116526
// Name: emphasisHook
// Dependencies: [57, 31, 27, 653, 33, 4130, 689, 4126, 1557, 14116, 3712, 5187, 1212, 1273, 15268, 4337, 15276, 1934, 4098, 2]
// Exports: default

// Module 15275 (emphasisHook)
import _slicedToArray from "_slicedToArray";
import "result";
import { View } from "get ActivityIndicator";
import { SubscriptionStatusTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function emphasisHook(children) {
  const obj = { variant: "text-sm/medium", color: "text-default", children };
  return callback2(require(4126) /* Text */.Text, obj);
}
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingVertical: 16, paddingHorizontal: 24, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/ChangeSubscriptionCard.tsx");

export default function ChangeSubscriptionCard(activeSubscription) {
  let activeListingId;
  let changeToListingId;
  activeSubscription = activeSubscription.activeSubscription;
  ({ activeListingId, changeToListingId } = activeSubscription);
  let obj = importAll(14116);
  const first = callback(obj.useName(activeListingId), 1)[0];
  let obj1 = importAll(14116);
  let obj2 = importDefault(3712)(activeSubscription.currentPeriodEnd);
  const tmp = _createForOfIteratorHelperLoose();
  obj = { startExpanded: true };
  obj = { style: items };
  items = [tmp.container, ];
  obj1 = { paddingBottom: 16 + importDefault(1557)().bottom };
  items[1] = obj1;
  obj2 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  const intl = activeSubscription(1212).intl;
  obj2.children = intl.format(activeSubscription(1212).t.l3uCCX, { activeListingName: first });
  const items1 = [callback2(activeSubscription(4126).Text, obj2), callback2(activeSubscription(1273).Spacer, { size: 16 }), , ];
  const obj3 = { variant: "text-sm/normal", color: "text-default" };
  const intl2 = activeSubscription(1212).intl;
  const formatResult = obj2.format("MMMM Do");
  const tmp4 = callback2;
  const tmp5 = callback3;
  const tmp6 = View;
  const items2 = [intl2.format(activeSubscription(1212).t.Zmtrs2, { activeListingName: first, changeToListingName: callback(obj1.useName(changeToListingId), 1)[0], billingEndDate: obj2.format("MMMM Do"), emphasisHook }), "\n\n", ];
  const intl3 = activeSubscription(1212).intl;
  items2[2] = intl3.format(activeSubscription(1212).t.KIiWca, { emphasisHook });
  obj3.children = items2;
  items1[2] = callback3(activeSubscription(4126).Text, obj3);
  let tmp7 = null;
  if (activeSubscription.status !== SubscriptionStatusTypes.CANCELED) {
    const obj6 = {};
    const obj7 = { size: 16 };
    const items3 = [callback2(activeSubscription(1273).Spacer, obj7), ];
    const obj8 = {};
    const intl4 = activeSubscription(1212).intl;
    obj8.text = intl4.string(activeSubscription(1212).t.UwHVxr);
    obj8.onPress = function onPress() {
      let obj = outer1_1(outer1_3[15]);
      obj = { subscriptionId: activeSubscription.id };
      obj.pushLazy(activeSubscription(outer1_3[17])(outer1_3[16], outer1_3.paths), obj);
      outer1_1(outer1_3[18]).hideActionSheet();
    };
    items3[1] = callback2(activeSubscription(15268).ArrowButton, obj8);
    obj6.children = items3;
    tmp7 = callback3(closure_9, obj6);
  }
  items1[3] = tmp7;
  obj.children = items1;
  obj.children = tmp5(tmp6, obj);
  return tmp4(activeSubscription(5187).BottomSheet, obj);
};
