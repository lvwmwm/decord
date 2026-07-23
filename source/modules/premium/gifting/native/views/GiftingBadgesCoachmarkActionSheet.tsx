// Module ID: 15621
// Function ID: 120469
// Name: HasBadgeCoachmark
// Dependencies: [31, 27, 8268, 1345, 33, 4130, 689, 4098, 3982, 5187, 9686, 4126, 1212, 2294, 4543, 9679, 5484, 15622, 8773, 566, 8265, 2]
// Exports: default

// Module 15621 (HasBadgeCoachmark)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
function HasBadgeCoachmark(markAsDismissed) {
  let currentTier;
  let giftCount;
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ currentTier, giftCount } = markAsDismissed);
  const tmp = _createForOfIteratorHelperLoose();
  const items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    outer1_1(outer1_2[7]).hideActionSheet();
    markAsDismissed(outer1_7.TAKE_ACTION);
    const obj = outer1_1(outer1_2[7]);
    const rootNavigationRef = markAsDismissed(outer1_2[8]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.navigate("you");
    }
  }, items);
  const callback1 = React.useCallback(() => {
    markAsDismissed(outer1_7.USER_DISMISS);
  }, items1);
  let obj = { startExpanded: true, onDismiss: callback1 };
  obj = { style: tmp.container };
  obj = { style: tmp.graphicContainer };
  let tmp9 = null != currentTier.simple_icon_url;
  if (tmp9) {
    const obj1 = { icon: currentTier.simple_icon_url, size: 120 };
    tmp9 = callback(importDefault(9686), obj1);
  }
  obj.children = tmp9;
  const items2 = [callback(closure_5, obj), , ];
  const obj2 = { style: tmp.textContainer };
  const obj3 = { style: tmp.text, variant: "heading-xl/bold", color: "text-strong" };
  const intl = markAsDismissed(1212).intl;
  const obj4 = {};
  const name = currentTier.name;
  let str = "";
  if (null != name) {
    str = name;
  }
  obj4.tierName = str;
  obj3.children = intl.format(importDefault(2294)["a+jfuy"], obj4);
  const items3 = [callback(markAsDismissed(4126).Text, obj3), ];
  const obj5 = { style: tmp.text, variant: "text-sm/medium", color: "text-default" };
  const intl2 = markAsDismissed(1212).intl;
  const obj6 = {};
  let num3 = 0;
  if (null != giftCount) {
    num3 = giftCount;
  }
  obj6.giftCount = num3;
  obj5.children = intl2.formatToPlainString(importDefault(2294).QxRA6w, obj6);
  items3[1] = callback(markAsDismissed(4126).Text, obj5);
  obj2.children = items3;
  items2[1] = closure_9(closure_5, obj2);
  const obj7 = { style: tmp.footer };
  const obj8 = { grow: true };
  const intl3 = markAsDismissed(1212).intl;
  obj8.text = intl3.string(markAsDismissed(1212).t.RzWDqY);
  obj8.onPress = callback;
  obj7.children = callback(markAsDismissed(4543).Button, obj8);
  items2[2] = callback(closure_5, obj7);
  obj.children = items2;
  obj.children = closure_9(closure_5, obj);
  return callback(markAsDismissed(5187).BottomSheet, obj);
}
function NewBadgeCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = _createForOfIteratorHelperLoose();
  let items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    let obj = outer1_1(outer1_2[7]);
    obj.hideActionSheet();
    markAsDismissed(outer1_7.TAKE_ACTION);
    obj = {};
    const items = [outer1_1(outer1_2[16]).GIFTING_BADGE_COACHMARK];
    obj.analyticsLocations = items;
    markAsDismissed(outer1_2[15]).openGiftModal(obj);
  }, items);
  const callback1 = React.useCallback(() => {
    markAsDismissed(outer1_7.USER_DISMISS);
  }, items1);
  let obj = { startExpanded: true, onDismiss: callback1 };
  obj = { style: tmp.container };
  obj = { style: tmp.graphicContainer };
  const obj1 = {};
  const obj2 = { uri: importDefault(15622) };
  obj1.source = obj2;
  obj1.style = tmp.newBadgeImage;
  obj.children = callback(closure_4, obj1);
  const items2 = [callback(closure_5, obj), , ];
  const obj3 = { style: tmp.textContainer };
  const obj4 = { style: tmp.text, variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
  const intl = markAsDismissed(1212).intl;
  obj4.children = intl.string(importDefault(2294).Q2RQka);
  const items3 = [callback(markAsDismissed(4126).Text, obj4), ];
  const obj5 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted" };
  const intl2 = markAsDismissed(1212).intl;
  obj5.children = intl2.string(importDefault(2294)["3EQnkg"]);
  items3[1] = callback(markAsDismissed(4126).Text, obj5);
  obj3.children = items3;
  items2[1] = callback2(closure_5, obj3);
  const obj6 = { style: tmp.footer };
  const obj7 = { grow: true };
  const intl3 = markAsDismissed(1212).intl;
  obj7.text = intl3.string(importDefault(2294).DZnomS);
  const obj8 = { size: "sm", color: importDefault(689).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
  obj7.icon = callback(markAsDismissed(8773).GiftIcon, obj8);
  obj7.onPress = callback;
  obj6.children = callback(markAsDismissed(4543).Button, obj7);
  items2[2] = callback(closure_5, obj6);
  obj.children = items2;
  obj.children = callback2(closure_5, obj);
  return callback(markAsDismissed(5187).BottomSheet, obj);
}
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { height: 188, width: 335, alignItems: "center", justifyContent: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.graphicContainer = obj1;
_createForOfIteratorHelperLoose.newBadgeImage = { width: "100%", height: "100%", objectFit: "contain" };
_createForOfIteratorHelperLoose.textContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.text = { textAlign: "center" };
_createForOfIteratorHelperLoose.footer = { width: "100%" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgesCoachmarkActionSheet.tsx");

export default function GiftingBadgesCoachmarkActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let getCurrentTier;
    let getSingleRequirementProgress;
    const obj = { currentTier: getCurrentTier(outer1_0(outer1_2[20]).BadgeId.GIFTING) };
    let current;
    ({ getCurrentTier, getSingleRequirementProgress } = outer1_6);
    const singleRequirementProgress = getSingleRequirementProgress(outer1_0(outer1_2[20]).BadgeId.GIFTING);
    if (null != singleRequirementProgress) {
      current = singleRequirementProgress.current;
    }
    obj.giftCount = current;
    return obj;
  });
  const currentTier = stateFromStoresObject.currentTier;
  if (null != currentTier) {
    obj = { markAsDismissed, currentTier, giftCount: tmp2 };
    let tmp5 = callback(HasBadgeCoachmark, obj);
  } else {
    obj = { markAsDismissed };
    tmp5 = callback(NewBadgeCoachmark, obj);
  }
  return tmp5;
};
