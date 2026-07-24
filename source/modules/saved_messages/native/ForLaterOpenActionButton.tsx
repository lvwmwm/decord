// Module ID: 15178
// Function ID: 115545
// Name: BadgedIcon
// Dependencies: [31, 27, 9568, 33, 7961, 15179, 4130, 689, 4066, 3834, 4548, 9569, 4094, 9965, 566, 9572, 8036, 8038, 9946, 7533, 1212, 2]

// Module 15178 (BadgedIcon)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function BadgedIcon(arg0) {
  let showRedDot;
  let type;
  ({ type, showRedDot } = arg0);
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT, importDefault(4066)());
  const tmp3 = callback3();
  let obj1 = require(4548) /* useProfileThemedButtonStyles */;
  const iconSizeStyles = obj1.useIconSizeStyles("sm", true, 2);
  if (type === require(9569) /* savedMessageDataToClient */.SavedMessageSortTypes.REMINDER) {
    let BookmarkIcon = require(4094) /* ClockIcon */.ClockIcon;
  } else {
    BookmarkIcon = require(9965) /* BookmarkIcon */.BookmarkIcon;
  }
  obj = { style: items };
  items = [tmp3.container, iconSizeStyles];
  if (showRedDot) {
    obj = { style: tmp3.iconAnchor };
    obj1 = {};
    const items1 = [obj];
    obj1.cutouts = items1;
    const obj2 = { size: "sm", color: token };
    obj1.children = callback(BookmarkIcon, obj2);
    const items2 = [callback(importDefault(7961), obj1), ];
    const obj3 = { style: tmp3.dot };
    items2[1] = callback(View, obj3);
    obj.children = items2;
    let tmp12 = callback2(View, obj);
    const tmp18 = importDefault(7961);
  } else {
    const obj4 = { size: "sm", color: token };
    tmp12 = callback(BookmarkIcon, obj4);
  }
  obj.children = tmp12;
  return callback(View, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = { shape: require("SolidCutout").CutoutShape.Circle, x: require("getIconSize").ICON_SIZE.sm - 9, y: -1, size: 10 };
obj = { container: { aspectRatio: 1, alignItems: "center", justifyContent: "center", position: "relative" }, iconAnchor: { width: require("getIconSize").ICON_SIZE.sm, height: require("getIconSize").ICON_SIZE.sm, position: "relative" } };
_createForOfIteratorHelperLoose = { position: "absolute", height: 6.5, width: 6.5, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, right: 1, top: 0.7 };
obj.dot = _createForOfIteratorHelperLoose;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj1 = { width: require("getIconSize").ICON_SIZE.sm, height: require("getIconSize").ICON_SIZE.sm, position: "relative" };
const forwardRefResult = importAllResult.forwardRef((type, ref) => {
  type = type.type;
  const onOpen = type.onOpen;
  let obj = type(stateFromStores1[14]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.hasOverdueReminder(), []);
  let obj1 = type(stateFromStores1[14]);
  const items1 = [_isNativeReflectConstruct];
  stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_5.getSavedMessageCount());
  const items2 = [onOpen, stateFromStores1, type];
  obj = { ref };
  const callback = importAllResult.useCallback(() => {
    onOpen();
    if (0 === stateFromStores1) {
      if (!onOpen(stateFromStores1[15])()) {
        onOpen(stateFromStores1[16])(type(stateFromStores1[17]).EntitlementFeatureNames.SAVED_MESSAGES);
        const tmp6 = onOpen(stateFromStores1[16]);
      }
    }
    type(stateFromStores1[18]).showForLaterModal(type);
  }, items2);
  obj = { variant: "tertiary", size: "sm" };
  obj1 = { type, showRedDot: type === type(stateFromStores1[11]).SavedMessageSortTypes.REMINDER && stateFromStores };
  obj.icon = closure_6(BadgedIcon, obj1);
  obj.onPress = callback;
  const intl = type(stateFromStores1[20]).intl;
  if (type === type(stateFromStores1[11]).SavedMessageSortTypes.REMINDER) {
  } else {
  }
  obj.accessibilityLabel = intl.string(_2pAkDA);
  obj.maxFontSizeMultiplier = 2;
  obj.children = closure_6(type(stateFromStores1[19]).IconButton, obj);
  return closure_6(View, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/saved_messages/native/ForLaterOpenActionButton.tsx");

export default forwardRefResult;
