// Module ID: 18971
// Function ID: 18972
// Name: GooglePlayPriceChangeActionSheet
// Dependencies: [19, 17, 2053, 18972, 1072, 4855, 21, 5009, 575, 504, 2048, 7407, 5267, 5619, 1114, 2062, 5629, 2]
// Exports: default

// Module 18971 (GooglePlayPriceChangeActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 2053 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 18972 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, textContainer: obj3, header: obj4, body: { textAlign: "center" } };
obj2 = { padding: nativeDefault.space.PX_32, paddingTop: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_24 };
obj4 = { marginBottom: nativeDefault.space.PX_16, alignItems: "center", textAlign: "center" };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/native/google_play_price_changes/GooglePlayPriceChangeActionSheet.tsx");

export default function GooglePlayPriceChangeActionSheet(markAsDismissed) {
  let format;
  let intl;
  let intl3;
  let items2;
  let items3;
  let obj14;
  let obj4;
  let obj8;
  let premiumSubscription;
  let priceChangeRecord;
  let prop;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_10();
  const items = [GooglePlayPriceChangeStore];
  const obj = markAsDismissed(504);
  const stateFromStores = obj.useStateFromStores(items, () => priceChangeRecord.priceChangeRecord);
  const items1 = [SubscriptionStore];
  const obj2 = markAsDismissed(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => premiumSubscription.getPremiumSubscription(true));
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.premiumPlanIdFromItems;
  }
  if (str == null) {
    str = "";
  }
  const tmp2Result = markAsDismissed(2048);
  const tierDisplayNameByPlanId = tmp2Result.getTierDisplayNameByPlanId(str);
  const tmp2Result5 = markAsDismissed(2048);
  const intervalType = tmp2Result5.getInterval(str).intervalType;
  const tmp2Result6 = markAsDismissed(2048);
  const intervalStringAsNoun = tmp2Result6.getIntervalStringAsNoun(intervalType);
  const tmp2Result7 = markAsDismissed(7407);
  const formatPriceResult = tmp2Result7.formatPrice(stateFromStores.oldPrice, stateFromStores.oldCurrency);
  const tmp2Result8 = markAsDismissed(7407);
  const obj3 = { children: closure_9(View, obj4) };
  obj4 = { style: tmp.container, children: items3 };
  const obj5 = { style: tmp.textContainer, children: items2 };
  const formatPriceResult1 = tmp2Result8.formatPrice(stateFromStores.newPrice, stateFromStores.newCurrency);
  BottomSheet = tmp2(5267).BottomSheet;
  const obj6 = { variant: "heading-xl/bold", style: tmp.header, children: intl.format(markAsDismissed(1114).t.x0bFvn, { subscriptionName: tierDisplayNameByPlanId }) };
  const Text = tmp2(5619).Text;
  intl = tmp2(1114).intl;
  items2 = [closure_8(Text, obj6), ];
  const obj7 = { variant: "text-md/medium", style: tmp.body, children: format(prop, obj8) };
  const Text2 = tmp2(5619).Text;
  const intl2 = tmp2(1114).intl;
  format = intl2.format;
  obj8 = { subscriptionName: tierDisplayNameByPlanId, changeDate: new Date(stateFromStores.expectedChargeTime), interval: intervalStringAsNoun, newPrice: formatPriceResult1, oldPrice: formatPriceResult, hc_article_url: obj14.getArticleURL(HelpdeskArticles.SUBSCRIPTION_CANCEL) };
  prop = tmp2(1114).t["n+Hrjb"];
  new Date(stateFromStores.expectedChargeTime);
  obj14 = HelpdeskUtilsDefault;
  items2[1] = closure_8(Text2, obj7);
  items3 = [closure_9(View, obj5), ];
  const obj9 = {
    variant: "primary",
    text: intl3.string(markAsDismissed(1114).t.BddRzS),
    onPress() {
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    }
  };
  const Button = tmp2(5629).Button;
  intl3 = tmp2(1114).intl;
  items3[1] = closure_8(Button, obj9);
  return closure_8(BottomSheet, obj3);
};
