// Module ID: 9947
// Function ID: 76888
// Name: ForLaterModal
// Dependencies: [31, 27, 33, 4130, 689, 1212, 9569, 5094, 9158, 477, 5087, 4337, 9948, 2]
// Exports: default

// Module 9947 (ForLaterModal)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 0, shadowColor: "transparent", height: "100%" };
_createForOfIteratorHelperLoose.modal = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/saved_messages/native/ForLaterModal.tsx");

export default function ForLaterModal(type) {
  type = type.type;
  let _require;
  const tmp = _createForOfIteratorHelperLoose();
  const intl = _require(1212).intl;
  if (type === _require(9569).SavedMessageSortTypes.REMINDER) {
  } else {
  }
  const stringResult = intl.string(_2pAkDA);
  _require = stringResult;
  let obj = { style: tmp.modal };
  obj = { style: tmp.headerContainer };
  obj = {
    title: stringResult,
    headerTitle() {
      return outer1_4(_undefined(outer1_2[8]).GenericHeaderTitle, { title: _undefined });
    },
    headerTitleAlign: "center"
  };
  let num;
  if (obj4.isIOS()) {
    num = 0;
  }
  obj.headerStatusBarHeight = num;
  obj4 = _require(477);
  const tmp7 = closure_5;
  obj.headerLeft = _require(5087).getHeaderCloseButton(importDefault(4337).pop);
  obj.children = callback(_require(5094).Header, obj);
  const items = [callback(View, obj), ];
  const obj1 = { type };
  const obj5 = _require(5087);
  obj1.onClose = importDefault(4337).pop;
  items[1] = callback(importDefault(9948), obj1, type);
  obj.children = items;
  return tmp7(View, obj);
};
