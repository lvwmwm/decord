// Module ID: 15996
// Function ID: 15997
// Name: GooglePlayPriceChangeActionSheet
// Dependencies: [19, 17, 3953, 15997, 676, 1369, 21, 4303, 712, 589, 3947, 5855, 5397, 4299, 1236, 1974, 4714, 2]
// Exports: default

// Module 15996 (GooglePlayPriceChangeActionSheet)
import "noop";
import { View } from "set";
import reset from "reset";
import onInitializeSync from "onInitializeSync";
import { HelpdeskArticles } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, textContainer: null, header: null, body: null };
createCacheKey = { padding: require("Themes").space.PX_32, paddingTop: require("Themes").space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: require("Themes").space.PX_24 };
let obj1 = { marginBottom: require("Themes").space.PX_24 };
createCacheKey[2] = { marginBottom: require("Themes").space.PX_16, alignItems: "center", textAlign: "center" };
createCacheKey[3] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginBottom: require("Themes").space.PX_16, alignItems: "center", textAlign: "center" };
const result = require("reset").fileFinishedImporting("modules/premium/native/google_play_price_changes/GooglePlayPriceChangeActionSheet.tsx");

export default function GooglePlayPriceChangeActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = createCacheKey();
  let obj = markAsDismissed(589);
  const items = [onInitializeSync];
  const stateFromStores = obj.useStateFromStores(items, () => priceChangeRecord.priceChangeRecord);
  let obj1 = markAsDismissed(589);
  const items1 = [reset];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => premiumSubscription.getPremiumSubscription(true));
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.premiumPlanIdFromItems;
  }
  if (str == null) {
    str = "";
  }
  let tmp2Result = tmp2(3947);
  const tierDisplayNameByPlanId = tmp2Result.getTierDisplayNameByPlanId(str);
  tmp2Result = tmp2(3947);
  const intervalStringAsNoun = markAsDismissed(3947).getIntervalStringAsNoun(tmp2Result.getInterval(str).intervalType);
  const tmp2Result1 = markAsDismissed(3947);
  const tmp2Result2 = markAsDismissed(5855);
  const formatPriceResult = markAsDismissed(5855).formatPrice(stateFromStores.oldPrice, stateFromStores.oldCurrency);
  const tmp2Result3 = markAsDismissed(5855);
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.textContainer, children: null };
  const obj2 = { variant: "heading-xl/bold", style: tmp.header, children: null };
  const intl = tmp2(1236).intl;
  obj2[2] = intl.format(markAsDismissed(1236).t.x0bFvn, { subscriptionName: tierDisplayNameByPlanId });
  const items2 = [callback(markAsDismissed(4299).Text, obj2), ];
  const obj3 = { variant: "text-md/medium", style: tmp.body, children: null };
  const intl2 = tmp2(1236).intl;
  const obj4 = { subscriptionName: tierDisplayNameByPlanId, changeDate: null, interval: null, newPrice: null, oldPrice: null, hc_article_url: null };
  const formatPriceResult1 = markAsDismissed(5855).formatPrice(stateFromStores.newPrice, stateFromStores.newCurrency);
  obj4[1] = new Date(stateFromStores.expectedChargeTime);
  obj4[2] = intervalStringAsNoun;
  obj4[3] = formatPriceResult1;
  obj4[4] = formatPriceResult;
  const date = new Date(stateFromStores.expectedChargeTime);
  obj4[5] = importDefault(1974).getArticleURL(HelpdeskArticles.SUBSCRIPTION_CANCEL);
  obj3[2] = intl2.format(markAsDismissed(1236).t["n+Hrjb"], obj4);
  items2[1] = callback(markAsDismissed(4299).Text, obj3);
  obj1[1] = items2;
  const items3 = [callback2(View, obj1), ];
  const obj5 = { variant: "primary", text: null, onPress: null };
  const intl3 = tmp2(1236).intl;
  obj5[1] = intl3.string(markAsDismissed(1236).t.BddRzS);
  obj5[2] = function onPress() {
    markAsDismissed(outer1_7.USER_DISMISS);
  };
  items3[1] = callback(markAsDismissed(4714).Button, obj5);
  obj[1] = items3;
  obj[0] = callback2(View, obj);
  return callback(markAsDismissed(5397).BottomSheet, obj);
};
