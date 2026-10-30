// Module ID: 18423
// Function ID: 18424
// Name: ForLaterOpenActionButton
// Dependencies: [19, 17, 10171, 21, 9487, 14665, 5009, 575, 5248, 5591, 5636, 10172, 5735, 11142, 504, 11131, 8020, 1114, 2]
// Exports: default

// Module 18423 (ForLaterOpenActionButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useThemeDefault from "useTheme" /* 5248 */;
import useToken from "useToken" /* 5591 */;
import ButtonHooks from "ButtonHooks" /* 5636 */;
import ClipView from "ClipView" /* 9487 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10172 */;
import showForLaterModal from "showForLaterModal" /* 11131 */;
import getIconSize from "getIconSize" /* 14665 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 10171 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let size;
let size1;
let tmp;
const ClipViewDefault = tmp(9487);
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
    BookmarkIcon = tmp4(5735).ClockIcon;
  } else {
    BookmarkIcon = tmp4(11142).BookmarkIcon;
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
  let aUXxzT;
  let obj4;
  let string;
  let tmp8;
  type = type.type;
  const onOpen = type.onOpen;
  const ref = type.ref;
  let obj = type(504);
  const items = [SavedMessagesStore];
  const items1 = [onOpen, type];
  const stateFromStores = obj.useStateFromStores(items, () => SavedMessagesStore.hasOverdueReminder(), []);
  const obj2 = { ref, children: closure_6(IconButton, obj4) };
  const callback = react.useCallback(() => {
    onOpen();
    const obj = showForLaterModal;
    obj.showForLaterModal(type);
  }, items1);
  const obj3 = { type, showRedDot: tmp8 };
  IconButton = type(8020).IconButton;
  tmp8 = type === type(10172).SavedMessageSortTypes.REMINDER && stateFromStores;
  obj4 = { variant: "tertiary", size: "sm", icon: closure_6(BadgedIcon, obj3), onPress: callback, accessibilityLabel: string(aUXxzT), maxFontSizeMultiplier: 2 };
  const intl = tmp(1114).intl;
  string = intl.string;
  const tmp6 = View;
  if (type === type(10172).SavedMessageSortTypes.REMINDER) {
    aUXxzT = tmp(1114).t.aUXxzT;
  } else {
    aUXxzT = tmp(1114).t["2pAkDA"];
  }
  return closure_6(tmp6, obj2);
};
