// Module ID: 16831
// Function ID: 16832
// Name: ForLaterOpenActionButton
// Dependencies: [19, 17, 11998, 21, 9174, 16832, 4829, 576, 4763, 4526, 5279, 8191, 4791, 12048, 504, 8185, 8180, 8183, 7515, 8190, 8269, 1115, 2]

// Module 16831 (ForLaterOpenActionButton)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4526 */;
import useThemeDefault from "useTheme" /* 4763 */;
import ButtonHooks from "ButtonHooks" /* 5279 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7515 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8180 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8183 */;
import showForLaterModal from "showForLaterModal" /* 8190 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 8191 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11998 */;

const ClipViewDefault = tmp(9174);
require = fn;
function BadgedIcon(arg0) {
  ({ type, showRedDot } = arg0);
  const tmp3 = useThemeDefault();
  const token = useToken.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, tmp3);
  const tmp6 = closure_9();
  const iconSizeStyles = ButtonHooks.useIconSizeStyles("sm", true, 2);
  if (type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    let BookmarkIcon = tmp4(4791).ClockIcon;
  } else {
    BookmarkIcon = tmp4(12048).BookmarkIcon;
  }
  const obj3 = { style: null, children: null };
  const items = [tmp6.container, iconSizeStyles];
  obj3.style = items;
  if (showRedDot) {
    const obj4 = { style: tmp6.iconAnchor, children: null };
    const obj5 = { cutouts: null, children: null };
    const items1 = [point];
    obj5.cutouts = items1;
    const obj6 = { size: "sm", color: token };
    obj5.children = tmp8(BookmarkIcon, obj6);
    const items2 = [tmp8(ClipViewDefault, obj5), ];
    const obj7 = { style: tmp6.dot };
    items2[1] = tmp8(tmp9, obj7);
    obj4.children = items2;
    let tmp8Result = React5(tmp9, obj4);
    const tmpResult = ClipViewDefault;
  } else {
    const obj8 = { size: "sm", color: token };
    tmp8Result = tmp8(BookmarkIcon, obj8);
  }
  obj3.children = tmp8Result;
  return timestampProducer(View, obj3);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const point = { shape: fn(9174).CutoutShape.Circle, x: fn(16832).ICON_SIZE.sm - 7, y: fn(16832).ICON_SIZE.sm - 8, size: 10 };
const createStyles = fn(4829);
let obj = { container: { aspectRatio: 1, alignItems: "center", justifyContent: "center", position: "relative" }, iconAnchor: null, dot: null };
let size = { width: fn(16832).ICON_SIZE.sm, height: fn(16832).ICON_SIZE.sm, position: "relative" };
obj.iconAnchor = size;
const size1 = { position: "absolute", height: 6.5, width: 6.5, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: nativeDefault.radii.lg, right: -2, bottom: -0.5 };
obj.dot = size1;
let closure_9 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterOpenActionButton.tsx");

export default noop.forwardRef((type, ref) => {
  type = type.type;
  const onOpen = type.onOpen;
  let stateFromStores1;
  let items = [SavedMessagesStore];
  const stateFromStores = type(stateFromStores1[14]).useStateFromStores(items, () => SavedMessagesStore.hasOverdueReminder(), []);
  const obj = type(stateFromStores1[14]);
  const items1 = [SavedMessagesStore];
  stateFromStores1 = type(stateFromStores1[14]).useStateFromStores(items1, () => SavedMessagesStore.getSavedMessageCount());
  const obj2 = type(stateFromStores1[14]);
  const hasForLaterAccess = type(stateFromStores1[15]).useHasForLaterAccess("ForLaterOpenActionButton");
  const items2 = [hasForLaterAccess, onOpen, stateFromStores1, type];
  const obj4 = { ref, children: null };
  const callback = hasForLaterAccess.useCallback(() => {
    onOpen();
    if (0 === stateFromStores1) {
      if (!hasForLaterAccess) {
        const items = [AnalyticsLocationDefault.FOR_LATER_ROADBLOCK];
        openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES, undefined, items);
      }
    }
    showForLaterModal.showForLaterModal(type);
  }, items2);
  const obj5 = { type, showRedDot: null };
  const obj3 = type(stateFromStores1[15]);
  const tmp8 = View;
  const tmp9 = BadgedIcon;
  const obj6 = { variant: "tertiary", size: "sm", icon: closure_6(tmp9, obj5), onPress: callback, accessibilityLabel: null, maxFontSizeMultiplier: 2 };
  obj5.showRedDot = type === type(stateFromStores1[11]).SavedMessageSortTypes.REMINDER && stateFromStores;
  const intl = tmp(tmp2[21]).intl;
  if (type === type(stateFromStores1[11]).SavedMessageSortTypes.REMINDER) {
    let aUXxzT = tmp(tmp2[21]).t.aUXxzT;
  } else {
    aUXxzT = tmp(tmp2[21]).t["2pAkDA"];
  }
  obj6.accessibilityLabel = intl.string(aUXxzT);
  obj4.children = closure_6(type(stateFromStores1[20]).IconButton, obj6);
  return closure_6(tmp8, obj4);
});
