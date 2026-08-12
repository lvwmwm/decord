// Module ID: 8426
// Function ID: 8427
// Name: ForLaterModal
// Dependencies: [19, 17, 21, 4344, 712, 1628, 1236, 8424, 5316, 8427, 500, 5309, 4549, 12623, 2]
// Exports: default

// Module 8426 (ForLaterModal)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { modal: null, headerLeftContainer: null, headerRightContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 0, shadowColor: "transparent", height: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingLeft: require("Themes").space.PX_16 };
const obj1 = { paddingLeft: require("Themes").space.PX_16 };
createCacheKey[2] = { paddingRight: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { paddingRight: require("Themes").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/saved_messages/native/ForLaterModal.tsx");

export default function ForLaterModal(type) {
  type = type.type;
  let _require;
  const tmp = createCacheKey();
  const intl = _require(1236).intl;
  if (type === _require(8424).SavedMessageSortTypes.REMINDER) {
  } else {
  }
  const stringResult = intl.string(_2pAkDA);
  _require = stringResult;
  let obj = { style: tmp.modal, children: null };
  obj = {
    title: stringResult,
    headerTitle() {
      return outer1_4(_undefined(outer1_2[9]).GenericHeaderTitle, { title: _undefined });
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: null,
    headerLeft: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null
  };
  let tmp4Result = tmp4(500);
  let num = 0;
  if (!tmp4Result.isIOS()) {
    num = importDefault(1628)().top;
  }
  obj[3] = num + importDefault(712).space.PX_8;
  tmp4Result = tmp4(5309);
  obj[4] = tmp4Result.getHeaderCloseButton(importDefault(4549).pop);
  ({ headerLeftContainer: obj2[5], headerRightContainer: obj2[6] } = tmp);
  const items = [closure_4(_require(5316).Header, obj), ];
  obj = { type, onClose: null };
  obj[1] = importDefault(4549).pop;
  items[1] = closure_4(importDefault(12623), obj, type);
  obj[1] = items;
  return closure_5(View, obj);
};
