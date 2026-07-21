// Module ID: 15489
// Function ID: 118211
// Name: GooglePlayPriceChangeActionSheet
// Dependencies: []
// Exports: default

// Module 15489 (GooglePlayPriceChangeActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const HelpdeskArticles = arg1(dependencyMap[4]).HelpdeskArticles;
const ContentDismissActionType = arg1(dependencyMap[5]).ContentDismissActionType;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { padding: importDefault(dependencyMap[8]).space.PX_32, paddingTop: importDefault(dependencyMap[8]).space.PX_24 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[6]);
obj.textContainer = { marginBottom: importDefault(dependencyMap[8]).space.PX_24 };
const obj2 = { <string:1870432525>: "number", <string:223193170>: "number", <string:1003250825>: "mY3Y38", marginBottom: importDefault(dependencyMap[8]).space.PX_16 };
obj.header = obj2;
obj.body = { textAlign: "center" };
let closure_10 = obj.createStyles(obj);
const obj1 = { marginBottom: importDefault(dependencyMap[8]).space.PX_24 };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/premium/native/google_play_price_changes/GooglePlayPriceChangeActionSheet.tsx");

export default function GooglePlayPriceChangeActionSheet(markAsDismissed) {
  const arg1 = markAsDismissed.markAsDismissed;
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => priceChangeRecord.priceChangeRecord);
  let obj1 = arg1(dependencyMap[9]);
  const items1 = [closure_4];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => premiumSubscription.getPremiumSubscription(true));
  let prop;
  if (null != stateFromStores1) {
    prop = stateFromStores1.premiumPlanIdFromItems;
  }
  let str = "";
  if (null != prop) {
    str = prop;
  }
  let obj2 = arg1(dependencyMap[10]);
  const tierDisplayNameByPlanId = obj2.getTierDisplayNameByPlanId(str);
  let obj3 = arg1(dependencyMap[10]);
  let obj4 = arg1(dependencyMap[10]);
  const intervalStringAsNoun = obj4.getIntervalStringAsNoun(obj3.getInterval(str).intervalType);
  let obj5 = arg1(dependencyMap[11]);
  const formatPriceResult = obj5.formatPrice(stateFromStores.oldPrice, stateFromStores.oldCurrency);
  const obj7 = arg1(dependencyMap[11]);
  obj = {};
  obj = { style: tmp.container };
  obj1 = { style: tmp.textContainer };
  obj2 = { variant: "heading-xl/bold", style: tmp.header };
  const intl = arg1(dependencyMap[14]).intl;
  obj2.children = intl.format(arg1(dependencyMap[14]).t.x0bFvn, { subscriptionName: tierDisplayNameByPlanId });
  const items2 = [callback(arg1(dependencyMap[13]).Text, obj2), ];
  obj3 = { variant: "text-md/medium", style: tmp.body };
  const intl2 = arg1(dependencyMap[14]).intl;
  obj4 = { subscriptionName: tierDisplayNameByPlanId };
  const formatPriceResult1 = arg1(dependencyMap[11]).formatPrice(stateFromStores.newPrice, stateFromStores.newCurrency);
  obj4.changeDate = new Date(stateFromStores.expectedChargeTime);
  obj4.interval = intervalStringAsNoun;
  obj4.newPrice = formatPriceResult1;
  obj4.oldPrice = formatPriceResult;
  const date = new Date(stateFromStores.expectedChargeTime);
  obj4.hc_article_url = importDefault(dependencyMap[15]).getArticleURL(HelpdeskArticles.SUBSCRIPTION_CANCEL);
  obj3.children = intl2.format(arg1(dependencyMap[14]).t.n+Hrjb, obj4);
  items2[1] = callback(arg1(dependencyMap[13]).Text, obj3);
  obj1.children = items2;
  const items3 = [callback2(View, obj1), ];
  obj5 = { variant: "primary" };
  const intl3 = arg1(dependencyMap[14]).intl;
  obj5.text = intl3.string(arg1(dependencyMap[14]).t.BddRzS);
  obj5.onPress = function onPress() {
    markAsDismissed(constants.USER_DISMISS);
  };
  items3[1] = callback(arg1(dependencyMap[16]).Button, obj5);
  obj.children = items3;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[12]).BottomSheet, obj);
};
