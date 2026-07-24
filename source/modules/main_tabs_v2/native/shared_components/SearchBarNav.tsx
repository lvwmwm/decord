// Module ID: 5771
// Function ID: 49438
// Dependencies: [31, 27, 33, 4130, 5084, 689, 4660, 1212, 477, 5091, 4126, 5772, 2]

// Module 5771
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_3;
let closure_4;
const require = arg1;
const View = get_ActivityIndicator.View;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let obj = {};
obj = { flexDirection: "row", alignItems: "center", height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderBottomWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
obj.container = obj;
_createForOfIteratorHelperLoose = { paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.cancelText = _createForOfIteratorHelperLoose;
obj.cancelIcon = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.flex = { flex: 1 };
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_16 };
const forwardRefResult = importAllResult.forwardRef((onClose, ref) => {
  let obj = Object.create(null);
  obj.onClose = 0;
  const merged = Object.assign(onClose, obj);
  const tmp3 = callback2();
  obj = { accessibilityRole: "button" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  obj.onPress = onClose.onClose;
  obj.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
  let obj1 = require(477) /* set */;
  if (obj1.isAndroid()) {
    obj = { style: tmp3.cancelIcon };
    let tmp5Result = tmp5(tmp6(5091).ArrowLargeLeftIcon, obj);
  } else {
    obj1 = { style: tmp3.cancelText, maxFontSizeMultiplier: 2, variant: "text-md/semibold", color: "mobile-text-heading-primary" };
    const intl2 = tmp6(1212).intl;
    obj1.children = intl2.string(tmp6(1212).t["ETE/oC"]);
    tmp5Result = tmp5(tmp6(4126).Text, obj1);
  }
  obj.children = tmp5Result;
  const tmp4Result = callback(require(4660) /* PressableBase */.PressableOpacity, obj);
  const obj2 = { style: tmp3.container };
  let obj5 = require(477) /* set */;
  let tmp12 = null;
  if (obj5.isAndroid()) {
    tmp12 = tmp4Result;
  }
  const items = [tmp12, , ];
  const obj3 = { style: tmp3.flex };
  const obj4 = {};
  obj5 = { size: "md", isRound: true, ref };
  const merged1 = Object.assign(merged);
  obj4.children = callback(require(5772) /* SearchField */.SearchField, obj5);
  obj3.children = callback(View, obj4);
  items[1] = callback(View, obj3);
  let tmp14 = null;
  if (!obj10.isAndroid()) {
    tmp14 = tmp4Result;
  }
  items[2] = tmp14;
  obj2.children = items;
  return closure_4(View, obj2);
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx");

export default forwardRefResult;
