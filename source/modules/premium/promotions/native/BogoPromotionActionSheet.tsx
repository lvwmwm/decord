// Module ID: 15613
// Function ID: 120423
// Name: BogoPromotionActionSheet
// Dependencies: [31, 27, 1851, 653, 1345, 33, 4130, 689, 5464, 6661, 5187, 5085, 4126, 1212, 5459, 1920, 8560, 2]
// Exports: default

// Module 15613 (BogoPromotionActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import { PremiumTypes } from "GuildFeatures";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticsSections: closure_6, AnalyticsObjects: closure_7, AnalyticsPages: closure_8, AnalyticsObjectTypes: closure_9, HelpdeskArticles: closure_10 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { dipslay: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, width: 335, height: 48 };
_createForOfIteratorHelperLoose.buttonContainer = obj1;
_createForOfIteratorHelperLoose.header = { marginBottom: 12, textAlign: "center" };
_createForOfIteratorHelperLoose.subheader = { textAlign: "center" };
let obj2 = { alignSelf: "center", paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, height: 213, width: 335, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, marginBottom: 12 };
_createForOfIteratorHelperLoose.image = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/promotions/native/BogoPromotionActionSheet.tsx");

export default function BogoPromotionActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = _createForOfIteratorHelperLoose();
  analyticsLocations = analyticsLocations(5464)().analyticsLocations;
  const items = [analyticsLocations, markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    markAsDismissed(outer1_11.PRIMARY);
    obj = { analyticsLocation: obj, analyticsLocations, premiumType: outer1_5.TIER_2 };
    obj = { page: outer1_8.BOGO_PROMOTION_ACTION_SHEET, section: outer1_6.FOOTER, object: outer1_7.BUTTON_CTA, objectType: outer1_9.BUY };
    analyticsLocations(outer1_2[9])(obj);
  }, items);
  const callback1 = React.useCallback(() => {
    markAsDismissed(outer1_11.USER_DISMISS);
  }, items1);
  let obj = { onDismiss: callback1 };
  obj = { style: items2 };
  items2 = [tmp.container];
  obj = { source: { uri: "https://cdn.discordapp.com/assets/content/a59aed2e0e61a955dc3e0f4f6f7ab295e39f89a93c4f01e4bd84ed7fb418ec63.png" }, style: tmp.image };
  const items3 = [callback(analyticsLocations(5085), obj), , , ];
  const obj1 = { style: null, color: "mobile-text-heading-primary", variant: "heading-xl/bold" };
  const items4 = [tmp.header];
  obj1.style = items4;
  const intl = markAsDismissed(1212).intl;
  obj1.children = intl.string(markAsDismissed(1212).t["6Jjfk8"]);
  items3[1] = callback(markAsDismissed(4126).Text, obj1);
  const obj2 = { style: null, color: "text-subtle", variant: "text-md/medium" };
  const items5 = [tmp.subheader];
  obj2.style = items5;
  const intl2 = markAsDismissed(1212).intl;
  const obj3 = { helpCenterLink: analyticsLocations(1920).getArticleURL(SUMMER_BOGO_2025.SUMMER_BOGO_2025) };
  obj2.children = intl2.format(markAsDismissed(1212).t.y7lJK6, obj3);
  items3[2] = callback(markAsDismissed(5459).TextWithIOSLinkWorkaround, obj2);
  const obj4 = { style: items6 };
  items6 = [tmp.buttonContainer];
  const obj5 = {};
  const obj7 = analyticsLocations(1920);
  const intl3 = markAsDismissed(1212).intl;
  obj5.text = intl3.string(markAsDismissed(1212).t.J61px0);
  obj5.onPress = callback;
  obj4.children = callback(analyticsLocations(8560), obj5);
  items3[3] = callback(View, obj4);
  obj.children = items3;
  obj.children = callback2(View, obj);
  return callback(markAsDismissed(5187).BottomSheet, obj);
};
