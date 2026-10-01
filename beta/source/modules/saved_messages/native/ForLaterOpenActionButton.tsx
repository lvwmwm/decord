// Module ID: 16041
// Function ID: 16042
// Name: ForLaterOpenActionButton
// Dependencies: [19, 17, 11155, 21, 8276, 16042, 4836, 576, 4767, 4531, 5287, 7285, 4795, 11207, 504, 7275, 7270, 7273, 6603, 7284, 7363, 1115, 2]

// Module 16041 (ForLaterOpenActionButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import useThemeDefault from "useTheme" /* 4767 */;
import ButtonHooks from "ButtonHooks" /* 5287 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7270 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7273 */;
import showForLaterModal from "showForLaterModal" /* 7284 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7285 */;
import ClipView from "ClipView" /* 8276 */;
import getIconSize from "getIconSize" /* 16042 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11155 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let size;
let size1;
let tmp;
const ClipViewDefault = tmp(8276);
function BadgedIcon(arg0) {
  let BookmarkIcon;
  let items;
  let items1;
  let items2;
  let obj6;
  let showRedDot;
  let tmp8Result;
  let type;
  ({ type, showRedDot } = arg0);
  const tmp3 = useThemeDefault();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, tmp3);
  const tmp6 = closure_9();
  const obj2 = ButtonHooks;
  const iconSizeStyles = obj2.useIconSizeStyles("sm", true, 2);
  if (type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    BookmarkIcon = tmp4(4795).ClockIcon;
  } else {
    BookmarkIcon = tmp4(11207).BookmarkIcon;
  }
  const obj3 = { style: items, children: tmp8Result };
  items = [tmp6.container, iconSizeStyles];
  if (showRedDot) {
    const obj4 = { style: tmp6.iconAnchor, children: items2 };
    const obj5 = { cutouts: items1, children: metroRequire(BookmarkIcon, obj6) };
    items1 = [point];
    obj6 = { size: "sm", color: token };
    const tmpResult = ClipViewDefault;
    items2 = [metroRequire(tmpResult, obj5), ];
    const obj7 = { style: tmp6.dot };
    items2[1] = metroRequire(View, obj7);
    tmp8Result = metroImportDefault(tmp9, obj4);
  } else {
    const obj8 = { size: "sm", color: token };
    tmp8Result = tmp8(BookmarkIcon, obj8);
  }
  return metroRequire(View, obj3);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const point = { shape: ClipView.CutoutShape.Circle, x: getIconSize.ICON_SIZE.sm - 7, y: getIconSize.ICON_SIZE.sm - 8, size: 10 };
let createStyles = createStyles_mod;
let obj = { container: { aspectRatio: 1, alignItems: "center", justifyContent: "center", position: "relative" }, iconAnchor: size, dot: size1 };
size = { width: getIconSize.ICON_SIZE.sm, height: getIconSize.ICON_SIZE.sm, position: "relative" };
createStyles = createStyles.createStyles;
size1 = { position: "absolute", height: 6.5, width: 6.5, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: nativeDefault.radii.lg, right: -2, bottom: -0.5 };
let closure_9 = createStyles(obj);
const forwardRefResult = react.forwardRef((type, ref) => {
  let IconButton;
  let aUXxzT;
  let obj6;
  let string;
  let tmp10;
  type = type.type;
  const onOpen = type.onOpen;
  let stateFromStores1;
  let tmp2 = stateFromStores1;
  let obj = type(stateFromStores1[14]);
  let items = [SavedMessagesStore];
  const stateFromStores = obj.useStateFromStores(items, () => SavedMessagesStore.hasOverdueReminder(), []);
  const items1 = [SavedMessagesStore];
  const obj2 = type(stateFromStores1[14]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => SavedMessagesStore.getSavedMessageCount());
  const obj3 = type(stateFromStores1[15]);
  const hasForLaterAccess = obj3.useHasForLaterAccess("ForLaterOpenActionButton");
  const items2 = [hasForLaterAccess, onOpen, stateFromStores1, type];
  const obj4 = { ref, children: closure_6(IconButton, obj6) };
  const callback = hasForLaterAccess.useCallback(() => {
    onOpen();
    if (0 === stateFromStores1) {
      const tmp2 = hasForLaterAccess;
      if (!tmp2) {
        const tmp5 = openPremiumUpsellActionSheetDefault;
        const SAVED_MESSAGES = EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES;
        const items = [AnalyticsLocationDefault.FOR_LATER_ROADBLOCK];
        tmp5(SAVED_MESSAGES, undefined, items);
      }
    }
    const obj = showForLaterModal;
    obj.showForLaterModal(type);
  }, items2);
  const obj5 = { type, showRedDot: tmp10 };
  IconButton = type(stateFromStores1[20]).IconButton;
  tmp10 = type === type(stateFromStores1[11]).SavedMessageSortTypes.REMINDER && stateFromStores;
  obj6 = { variant: "tertiary", size: "sm", icon: closure_6(BadgedIcon, obj5), onPress: callback, accessibilityLabel: string(aUXxzT), maxFontSizeMultiplier: 2 };
  const intl = tmp(tmp2[21]).intl;
  string = intl.string;
  const tmp8 = View;
  if (type === type(tmp2[11]).SavedMessageSortTypes.REMINDER) {
    aUXxzT = tmp(tmp2[21]).t.aUXxzT;
  } else {
    aUXxzT = tmp(tmp2[21]).t["2pAkDA"];
  }
  return closure_6(tmp8, obj4);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterOpenActionButton.tsx");

export default forwardRefResult;
