// Module ID: 18982
// Function ID: 18983
// Name: GiftingBadgesCoachmarkActionSheet
// Dependencies: [19, 17, 8755, 4855, 21, 5009, 575, 10596, 5253, 5194, 5267, 10599, 5619, 1114, 2633, 5629, 10538, 7345, 5712, 18983, 13315, 504, 8747, 2]
// Exports: default

// Module 18982 (GiftingBadgesCoachmarkActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _modDef2633 from "module_2633" /* 2633 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import RootNavigationRef from "RootNavigationRef" /* 5194 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import FastImageDefault from "FastImage" /* 5712 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import BadgeId from "BadgeId" /* 8747 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10538 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10599 */;
import _modDef18983 from "module_18983" /* 18983 */;
import react from "react" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8755 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
function HasBadgeCoachmark(markAsDismissed) {
  let Button;
  let currentTier;
  let format;
  let giftCount;
  let intl4;
  let items2;
  let items3;
  let obj11;
  let obj3;
  let prop;
  let str;
  let stringResult;
  let tmp7Result;
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ currentTier, giftCount } = markAsDismissed);
  const variant = markAsDismissed.variant;
  const tmp = closure_9();
  let obj = markAsDismissed(10596);
  const giftingBadgeTierIconUrl = obj.getGiftingBadgeTierIconUrl(currentTier);
  const items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    const obj2 = RootNavigationRef;
    const rootNavigationRef = obj2.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("you");
    }
  }, items);
  const callback1 = react.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let obj2 = { startExpanded: true, onDismiss: callback1, children: closure_8(View, obj3) };
  const obj4 = { style: tmp.graphicContainer, children: tmp7Result };
  tmp7Result = null != giftingBadgeTierIconUrl;
  obj3 = { style: tmp.container, children: items2 };
  BottomSheet = markAsDismissed(5267).BottomSheet;
  if (tmp7Result) {
    const obj5 = { icon: giftingBadgeTierIconUrl, size: 120 };
    tmp7Result = tmp7(GiftingBadgeIconDefault, obj5);
  }
  items2 = [closure_7(View, obj4), , ];
  const obj6 = { style: tmp.textContainer, children: items3 };
  const obj7 = { style: tmp.text, variant: "heading-xl/bold", color: "text-strong", children: format(prop, { tierName: str }) };
  const Text = tmp2(5619).Text;
  const intl = tmp2(1114).intl;
  format = intl.format;
  str = currentTier.name;
  prop = _modDef2633["a+jfuy"];
  if (str == null) {
    str = "";
  }
  items3 = [closure_7(Text, obj7), ];
  const obj8 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: stringResult };
  const Text2 = tmp2(5619).Text;
  if ("noCount" === variant) {
    const intl3 = tmp2(1114).intl;
    stringResult = intl3.string(tmp12(2633)["0N8fCf"]);
  } else {
    const intl2 = tmp2(1114).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const QxRA6w = tmp12(2633).QxRA6w;
    if (giftCount == null) {
      giftCount = 0;
    }
    const obj9 = { giftCount };
    stringResult = formatToPlainString(QxRA6w, obj9);
  }
  items3[1] = closure_7(Text2, obj8);
  items2[1] = closure_8(View, obj6);
  const obj10 = { style: tmp.footer, children: closure_7(Button, obj11) };
  obj11 = { grow: true, text: intl4.string(markAsDismissed(1114).t.RzWDqY), onPress: callback };
  Button = tmp2(5629).Button;
  intl4 = tmp2(1114).intl;
  items2[2] = closure_7(View, obj10);
  return closure_7(BottomSheet, obj2);
}
function NewBadgeCoachmark(markAsDismissed) {
  let Button;
  let GiftIcon;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let obj10;
  let obj11;
  let obj2;
  let obj4;
  let obj5;
  let tmp4;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_9();
  let items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = react.useCallback(() => {
    let items;
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    const obj2 = { analyticsLocations: items };
    const openGiftModal = utils_openGiftModal.openGiftModal;
    items = [];
    utils_openGiftModal;
    items[0] = AnalyticsLocationDefault.GIFTING_BADGE_COACHMARK;
    openGiftModal(obj2);
  }, items);
  const callback1 = react.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let obj = { startExpanded: true, onDismiss: callback1, children: closure_8(View, obj2) };
  obj2 = { style: tmp.container, children: items2 };
  const obj3 = { style: tmp.graphicContainer, children: closure_7(tmp4, obj4) };
  BottomSheet = markAsDismissed(5267).BottomSheet;
  obj4 = { source: obj5, style: tmp.newBadgeImage };
  obj5 = { uri: _modDef18983 };
  tmp4 = FastImageDefault;
  items2 = [closure_7(View, obj3), , ];
  const obj6 = { style: tmp.textContainer, children: items3 };
  const obj7 = { style: tmp.text, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(_modDef2633.Q2RQka) };
  const Text = markAsDismissed(5619).Text;
  intl = markAsDismissed(1114).intl;
  items3 = [closure_7(Text, obj7), ];
  const obj8 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted", children: intl2.string(_modDef2633["3EQnkg"]) };
  const Text2 = markAsDismissed(5619).Text;
  intl2 = markAsDismissed(1114).intl;
  items3[1] = closure_7(Text2, obj8);
  items2[1] = closure_8(View, obj6);
  const obj9 = { style: tmp.footer, children: closure_7(Button, obj10) };
  obj10 = { grow: true, text: intl3.string(_modDef2633.DZnomS), icon: closure_7(GiftIcon, obj11), onPress: callback };
  Button = markAsDismissed(5629).Button;
  intl3 = markAsDismissed(1114).intl;
  obj11 = { size: "sm", color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
  GiftIcon = markAsDismissed(13315).GiftIcon;
  items2[2] = closure_7(View, obj9);
  return closure_7(BottomSheet, obj);
}
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, graphicContainer: size, newBadgeImage: { width: "100%", height: "100%", resizeMode: "contain" }, textContainer: obj3, text: { textAlign: "center" }, footer: { width: "100%" } };
obj2 = { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
size = { height: 188, width: 335, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
obj3 = { gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgesCoachmarkActionSheet.tsx");

export default function GiftingBadgesCoachmarkActionSheet(markAsDismissed) {
  let tmp5;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const variant = markAsDismissed.variant;
  let obj = get_initialized;
  const items = [BadgeDirectoryStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let current;
    const obj = { currentTier: BadgeDirectoryStore.getCurrentTier(BadgeId.BadgeId.GIFTING), giftCount: current };
    const singleRequirementProgress = BadgeDirectoryStore.getSingleRequirementProgress(BadgeId.BadgeId.GIFTING);
    current = undefined;
    if (singleRequirementProgress != null) {
      current = singleRequirementProgress.current;
    }
    return obj;
  });
  const currentTier = stateFromStoresObject.currentTier;
  if (null != currentTier) {
    const obj2 = { markAsDismissed, currentTier, giftCount: tmp2, variant };
    tmp5 = metroImportDefault(HasBadgeCoachmark, obj2);
  } else {
    const obj3 = { markAsDismissed };
    tmp5 = metroImportDefault(NewBadgeCoachmark, obj3);
  }
  return tmp5;
};
