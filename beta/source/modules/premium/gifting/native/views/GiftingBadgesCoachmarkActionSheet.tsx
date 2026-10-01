// Module ID: 16762
// Function ID: 16763
// Name: GiftingBadgesCoachmarkActionSheet
// Dependencies: [19, 17, 7637, 2042, 21, 4836, 576, 10208, 4800, 4693, 6571, 10214, 4832, 1115, 2583, 5281, 10124, 6603, 16763, 10496, 504, 7629, 2]
// Exports: default

// Module 16762 (GiftingBadgesCoachmarkActionSheet)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import _modDef2583 from "module_2583" /* 2583 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import BadgeId from "BadgeId" /* 7629 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10124 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10214 */;
import _modDef16763 from "module_16763" /* 16763 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7637 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
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
  let obj12;
  let obj4;
  let prop;
  let str;
  let stringResult;
  let tmp8Result;
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ currentTier, giftCount } = markAsDismissed);
  const variant = markAsDismissed.variant;
  const tmp = closure_10();
  let obj = markAsDismissed(10208);
  const isGiftingBadgeComplexArtEnabled = obj.useIsGiftingBadgeComplexArtEnabled("GiftingBadgesCoachmarkActionSheet");
  let obj2 = markAsDismissed(10208);
  const giftingBadgeTierIconUrl = obj2.getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
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
  const obj3 = { startExpanded: true, onDismiss: callback1, children: closure_9(closure_5, obj4) };
  const obj5 = { style: tmp.graphicContainer, children: tmp8Result };
  tmp8Result = null != giftingBadgeTierIconUrl;
  obj4 = { style: tmp.container, children: items2 };
  BottomSheet = markAsDismissed(6571).BottomSheet;
  if (tmp8Result) {
    const obj6 = { icon: giftingBadgeTierIconUrl, size: 120 };
    tmp8Result = tmp8(GiftingBadgeIconDefault, obj6);
  }
  items2 = [closure_8(closure_5, obj5), , ];
  const obj7 = { style: tmp.textContainer, children: items3 };
  const obj8 = { style: tmp.text, variant: "heading-xl/bold", color: "text-strong", children: format(prop, { tierName: str }) };
  const Text = tmp2(4832).Text;
  const intl = tmp2(1115).intl;
  format = intl.format;
  str = currentTier.name;
  prop = _modDef2583["a+jfuy"];
  if (str == null) {
    str = "";
  }
  items3 = [closure_8(Text, obj8), ];
  const obj9 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: stringResult };
  const Text2 = tmp2(4832).Text;
  if ("noCount" === variant) {
    const intl3 = tmp2(1115).intl;
    stringResult = intl3.string(tmp13(2583)["0N8fCf"]);
  } else {
    const intl2 = tmp2(1115).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const QxRA6w = tmp13(2583).QxRA6w;
    if (giftCount == null) {
      giftCount = 0;
    }
    const obj10 = { giftCount };
    stringResult = formatToPlainString(QxRA6w, obj10);
  }
  items3[1] = closure_8(Text2, obj9);
  items2[1] = closure_9(closure_5, obj7);
  const obj11 = { style: tmp.footer, children: closure_8(Button, obj12) };
  obj12 = { grow: true, text: intl4.string(markAsDismissed(1115).t.RzWDqY), onPress: callback };
  Button = tmp2(5281).Button;
  intl4 = tmp2(1115).intl;
  items2[2] = closure_8(closure_5, obj11);
  return closure_8(BottomSheet, obj3);
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
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_10();
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
  let obj = { startExpanded: true, onDismiss: callback1, children: closure_9(closure_5, obj2) };
  obj2 = { style: tmp.container, children: items2 };
  const obj3 = { style: tmp.graphicContainer, children: closure_8(closure_4, obj4) };
  obj4 = { source: obj5, style: tmp.newBadgeImage };
  obj5 = { uri: _modDef16763 };
  BottomSheet = markAsDismissed(6571).BottomSheet;
  items2 = [closure_8(closure_5, obj3), , ];
  const obj6 = { style: tmp.textContainer, children: items3 };
  const obj7 = { style: tmp.text, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(_modDef2583.Q2RQka) };
  const Text = markAsDismissed(4832).Text;
  intl = markAsDismissed(1115).intl;
  items3 = [closure_8(Text, obj7), ];
  const obj8 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted", children: intl2.string(_modDef2583["3EQnkg"]) };
  const Text2 = markAsDismissed(4832).Text;
  intl2 = markAsDismissed(1115).intl;
  items3[1] = closure_8(Text2, obj8);
  items2[1] = closure_9(closure_5, obj6);
  const obj9 = { style: tmp.footer, children: closure_8(Button, obj10) };
  obj10 = { grow: true, text: intl3.string(_modDef2583.DZnomS), icon: closure_8(GiftIcon, obj11), onPress: callback };
  Button = markAsDismissed(5281).Button;
  intl3 = markAsDismissed(1115).intl;
  obj11 = { size: "sm", color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
  GiftIcon = markAsDismissed(10496).GiftIcon;
  items2[2] = closure_8(closure_5, obj9);
  return closure_8(BottomSheet, obj);
}
({ Image: closure_4, View: hasOwnProperty } = react_native);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, graphicContainer: size, newBadgeImage: { width: "100%", height: "100%", objectFit: "contain" }, textContainer: obj3, text: { textAlign: "center" }, footer: { width: "100%" } };
obj2 = { alignItems: "center", paddingHorizontal: 20, paddingBottom: 20, gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
size = { height: 188, width: 335, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
obj3 = { gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
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
    tmp5 = metroImportAll(HasBadgeCoachmark, obj2);
  } else {
    const obj3 = { markAsDismissed };
    tmp5 = metroImportAll(NewBadgeCoachmark, obj3);
  }
  return tmp5;
};
