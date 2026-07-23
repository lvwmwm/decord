// Module ID: 11480
// Function ID: 89407
// Name: SpamMessageRequestHamActionSheet
// Dependencies: [57, 31, 27, 1849, 33, 4130, 689, 566, 11475, 3831, 1212, 9176, 4098, 5187, 5186, 5501, 7495, 4543, 2]
// Exports: default

// Module 11480 (SpamMessageRequestHamActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.buttonContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.switch = { paddingHorizontal: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/message_request/native/spam/SpamMessageHamActionSheet.tsx");

export default function SpamMessageRequestHamActionSheet(arg0) {
  let View;
  let dependencyMap;
  let importDefault;
  let isAcceptLoading;
  let isOptimisticAccepted;
  let require;
  ({ channel: require, onConfirm: importDefault, onCancel: dependencyMap } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = first(React.useState(false), 2);
  first = tmp2[0];
  React = tmp2[1];
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getUser(recipientId.getRecipientId()));
  let obj1 = require(11475) /* _createForOfIteratorHelperLoose */;
  obj = {
    user: stateFromStores,
    onError() {
      let obj = outer1_1(outer1_2[9]);
      obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE" };
      const intl = outer1_0(outer1_2[10]).intl;
      obj.content = intl.string(outer1_0(outer1_2[10]).t["EDYbS+"]);
      obj.icon = outer1_1(outer1_2[11]);
      obj.open(obj);
    },
    onAcceptSuccess(arg0) {
      outer1_1(outer1_2[12]).hideActionSheet();
    }
  };
  const messageRequestActions = obj1.useMessageRequestActions(obj);
  ({ acceptMessageRequest: View, isAcceptLoading, isOptimisticAccepted } = messageRequestActions);
  obj = {
    onDismiss() {
      callback2();
    }
  };
  obj1 = {};
  let intl = require(1212) /* getSystemLocale */.intl;
  obj1.title = intl.string(require(1212) /* getSystemLocale */.t["9ty6yc"]);
  obj1.trailing = callback(require(5501) /* ActionSheetCloseButton */.ActionSheetCloseButton, {
    onPress() {
      outer1_1(outer1_2[12]).hideActionSheet();
      callback2();
    }
  });
  obj1.backgroundColor = tmp.header;
  const items1 = [callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj1), ];
  const obj3 = { style: tmp.container };
  const obj4 = { style: tmp.switch };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4.label = intl2.string(require(1212) /* getSystemLocale */.t.ZhGpNQ);
  obj4.value = first;
  obj4.switchProps = { renderIosBackground: true };
  obj4.onValueChange = function onValueChange(arg0) {
    return callback3(arg0);
  };
  const items2 = [callback(require(7495) /* Form */.FormSwitchRow, obj4), ];
  const obj5 = { style: tmp.buttonContainer };
  const obj6 = {
    size: "md",
    onPress() {
      callback(first);
      callback4(recipientId.id);
    }
  };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj6.text = intl3.string(require(1212) /* getSystemLocale */.t.olZgw5);
  let isUserProfileLoading = isAcceptLoading;
  if (!isAcceptLoading) {
    isUserProfileLoading = messageRequestActions.isUserProfileLoading;
  }
  if (!isUserProfileLoading) {
    isUserProfileLoading = isOptimisticAccepted;
  }
  obj6.disabled = isUserProfileLoading;
  if (!isAcceptLoading) {
    isAcceptLoading = isOptimisticAccepted;
  }
  obj6.loading = isAcceptLoading;
  obj5.children = callback(require(4543) /* Button */.Button, obj6);
  items2[1] = callback(View, obj5);
  obj3.children = items2;
  items1[1] = closure_8(View, obj3);
  obj.children = items1;
  return closure_8(require(5187) /* Background */.BottomSheet, obj);
};
