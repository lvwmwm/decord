// Module ID: 19048
// Function ID: 19049
// Name: ForLaterOpenActionButton
// Dependencies: [19, 17, 11849, 21, 9437, 10459, 5243, 575, 5484, 5839, 5880, 11845, 5979, 11857, 504, 11844, 1113, 7922, 2]
// Exports: default

// Module 19048 (ForLaterOpenActionButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useThemeDefault from "useTheme" /* 5484 */;
import useToken from "useToken" /* 5839 */;
import ButtonHooks from "ButtonHooks" /* 5880 */;
import ClipView from "ClipView" /* 9437 */;
import getIconSize from "getIconSize" /* 10459 */;
import showForLaterModal from "showForLaterModal" /* 11844 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 11845 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11849 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let metroImportDefault;
let metroRequire;
let size;
let size1;
let tmp;
const ClipViewDefault = tmp(9437);
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
    BookmarkIcon = tmp4(5979).ClockIcon;
  } else {
    BookmarkIcon = tmp4(11857).BookmarkIcon;
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
size = size_mod;
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterOpenActionButton.tsx");

export default function ForLaterActionButton(type) {
  let IconButton;
  let closure_2;
  let obj4;
  type = type.type;
  const onOpen = type.onOpen;
  const ref = type.ref;
  const tmp3 = type === type(11845).SavedMessageSortTypes.REMINDER;
  dependencyMap = tmp3;
  let obj = type(504);
  const items = [SavedMessagesStore];
  const items1 = [tmp3];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let num = 0;
    if (closure_2) {
      num = SavedMessagesStore.getOverdueMessageReminderCount();
    }
    return num;
  }, items1);
  const items2 = [onOpen, type];
  const callback = react.useCallback(() => {
    onOpen();
    const obj = showForLaterModal;
    obj.showForLaterModal(type);
  }, items2);
  const intl = type(1113).intl;
  const string = intl.string;
  const t = type(1113).t;
  const stringResult = string(tmp3 ? t.aUXxzT : t["2pAkDA"]);
  let combined = stringResult;
  if (stateFromStores > 0) {
    const intl2 = tmp(1113).intl;
    const _HermesInternal = HermesInternal;
    const obj2 = { count: stateFromStores };
    combined = "" + stringResult + ", " + intl2.formatToPlainString(tmp(1113).t.yBmFPA, obj2);
  }
  const obj3 = { ref, children: closure_6(IconButton, obj4) };
  obj4 = { variant: "tertiary", size: "sm", icon: closure_6(BadgedIcon, { type, showRedDot: stateFromStores > 0 }), onPress: callback, accessibilityLabel: combined, maxFontSizeMultiplier: 2 };
  IconButton = tmp(7922).IconButton;
  return closure_6(View, obj3);
};
