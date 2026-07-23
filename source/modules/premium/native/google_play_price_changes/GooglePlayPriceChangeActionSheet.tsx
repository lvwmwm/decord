// Module ID: 15614
// Function ID: 120427
// Name: GooglePlayPriceChangeActionSheet
// Dependencies: [31, 27, 3782, 15615, 653, 1345, 33, 4130, 689, 566, 3776, 5618, 5187, 4126, 1212, 1920, 4543, 2]
// Exports: default

// Module 15614 (GooglePlayPriceChangeActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { HelpdeskArticles } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_32, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.textContainer = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center", textAlign: "center" };
_createForOfIteratorHelperLoose.header = obj2;
_createForOfIteratorHelperLoose.body = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/google_play_price_changes/GooglePlayPriceChangeActionSheet.tsx");

export default function GooglePlayPriceChangeActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = markAsDismissed(566);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.priceChangeRecord);
  let obj1 = markAsDismissed(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_4.getPremiumSubscription(true));
  let prop;
  if (null != stateFromStores1) {
    prop = stateFromStores1.premiumPlanIdFromItems;
  }
  let str = "";
  if (null != prop) {
    str = prop;
  }
  let obj2 = markAsDismissed(3776);
  const tierDisplayNameByPlanId = obj2.getTierDisplayNameByPlanId(str);
  let obj3 = markAsDismissed(3776);
  let obj4 = markAsDismissed(3776);
  const intervalStringAsNoun = obj4.getIntervalStringAsNoun(obj3.getInterval(str).intervalType);
  let obj5 = markAsDismissed(5618);
  const formatPriceResult = obj5.formatPrice(stateFromStores.oldPrice, stateFromStores.oldCurrency);
  const obj7 = markAsDismissed(5618);
  obj = {};
  obj = { style: tmp.container };
  obj1 = { style: tmp.textContainer };
  obj2 = { variant: "heading-xl/bold", style: tmp.header };
  const intl = markAsDismissed(1212).intl;
  obj2.children = intl.format(markAsDismissed(1212).t.x0bFvn, { subscriptionName: tierDisplayNameByPlanId });
  const items2 = [callback(markAsDismissed(4126).Text, obj2), ];
  obj3 = { variant: "text-md/medium", style: tmp.body };
  const intl2 = markAsDismissed(1212).intl;
  obj4 = { subscriptionName: tierDisplayNameByPlanId };
  const formatPriceResult1 = markAsDismissed(5618).formatPrice(stateFromStores.newPrice, stateFromStores.newCurrency);
  obj4.changeDate = new Date(stateFromStores.expectedChargeTime);
  obj4.interval = intervalStringAsNoun;
  obj4.newPrice = formatPriceResult1;
  obj4.oldPrice = formatPriceResult;
  const date = new Date(stateFromStores.expectedChargeTime);
  obj4.hc_article_url = importDefault(1920).getArticleURL(HelpdeskArticles.SUBSCRIPTION_CANCEL);
  obj3.children = intl2.format(markAsDismissed(1212).t["n+Hrjb"], obj4);
  items2[1] = callback(markAsDismissed(4126).Text, obj3);
  obj1.children = items2;
  const items3 = [callback2(View, obj1), ];
  obj5 = { variant: "primary" };
  const intl3 = markAsDismissed(1212).intl;
  obj5.text = intl3.string(markAsDismissed(1212).t.BddRzS);
  obj5.onPress = function onPress() {
    markAsDismissed(outer1_7.USER_DISMISS);
  };
  items3[1] = callback(markAsDismissed(4543).Button, obj5);
  obj.children = items3;
  obj.children = callback2(View, obj);
  return callback(markAsDismissed(5187).BottomSheet, obj);
};
