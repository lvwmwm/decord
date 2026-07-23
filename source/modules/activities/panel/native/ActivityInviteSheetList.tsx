// Module ID: 15710
// Function ID: 121151
// Name: keyExtractor
// Dependencies: [31, 653, 33, 4130, 5052, 689, 1273, 1212, 4660, 4098, 3982, 4126, 15711, 5160, 5189, 2]
// Exports: default

// Module 15710 (keyExtractor)
import result from "result";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function keyExtractor(item) {
  return item.item.id;
}
function FriendsEmptyComponent() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.dz4UlO);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.MBQBI7);
  ({ emptyTitle: obj2.titleStyle, emptyBody: obj2.bodyStyle } = tmp);
  const items = [callback(require(1273) /* Button */.RefreshEmptyState, obj), ];
  obj = {
    onPress() {
      let obj = outer1_1(outer1_2[9]);
      obj.hideActionSheet();
      const rootNavigationRef = outer1_0(outer1_2[10]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        obj = { screen: "add-friends" };
        obj = { sourcePage: "Instant Invite Empty State" };
        obj.params = obj;
        rootNavigationRef.navigate("friends", obj);
      }
    },
    accessibilityRole: "link"
  };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl3.string(require(1212) /* getSystemLocale */.t.a7FVbE);
  obj.hitSlop = { top: 8, left: 8, bottom: 8, right: 8 };
  const obj1 = { style: null, variant: "text-sm/semibold", color: "text-link" };
  const items1 = [tmp.goToFriendsLink];
  obj1.style = items1;
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl4.string(require(1212) /* getSystemLocale */.t.a7FVbE);
  obj.children = callback(require(4126) /* Text */.Text, obj1);
  items[1] = callback(require(4660) /* PressableBase */.PressableOpacity, obj);
  obj.children = items;
  return callback2(closure_5, obj);
}
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
_createForOfIteratorHelperLoose["textTransform"] = "none";
_createForOfIteratorHelperLoose["lineHeight"] = 24;
_createForOfIteratorHelperLoose.emptyTitle = _createForOfIteratorHelperLoose;
let obj1 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, 16));
obj1["lineHeight"] = 20;
obj1["fontWeight"] = "600";
_createForOfIteratorHelperLoose.emptyBody = obj1;
_createForOfIteratorHelperLoose.goToFriendsLink = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheetList.tsx");

export default function ActivityInviteSheetList(data) {
  data = data.data;
  const error = data.error;
  const getSendState = data.getSendState;
  const isSubmitting = data.isSubmitting;
  const onInviteSent = data.onInviteSent;
  const onPressAvatar = data.onPressAvatar;
  const items = [error, isSubmitting, getSendState, onPressAvatar, onInviteSent, data.length];
  const callback = isSubmitting.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    const obj = { start: 0 === index, end: index === data.length - 1, row: item, onPressAvatar, onInviteSent, isSubmitting, error, sendState: getSendState(item) };
    return onInviteSent(error(getSendState[12]), obj);
  }, items);
  let obj = {};
  obj = { paddingBottom: error(getSendState[13])({ isKeyboardAwareOnAndroid: false }).insets.bottom + error(getSendState[5]).space.PX_16, paddingHorizontal: error(getSendState[5]).space.PX_12 };
  obj.contentContainerStyle = obj;
  obj.bounces = false;
  obj.renderItem = callback;
  obj.data = data;
  obj.keyExtractor = keyExtractor;
  obj.keyboardShouldPersistTaps = "always";
  obj.ListEmptyComponent = FriendsEmptyComponent;
  return onInviteSent(data(getSendState[14]).BottomSheetFlatList, obj);
};
