// Module ID: 9466
// Function ID: 73613
// Name: SlideoutButton
// Dependencies: [31, 27, 653, 33, 4130, 3974, 689, 4660, 1273, 2]

// Module 9466 (SlideoutButton)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";

let closure_4;
let closure_5;
const require = arg1;
class SlideoutButton {
  constructor(arg0) {
    ({ title, height } = global);
    ({ onPress, color, IconComponent } = global);
    if (height === undefined) {
      height = 60;
    }
    tmp = c6();
    obj = { accessibilityRole: "button", onPress };
    obj = { style: items };
    items = [, ];
    items[0] = tmp.button;
    obj1 = { backgroundColor: color, width: 72 };
    obj1.height = height;
    items[1] = obj1;
    obj2 = {};
    obj2.color = require("_createForOfIteratorHelperLoose").colors.WHITE;
    items1 = [, ];
    items1[0] = jsx(IconComponent, obj2);
    obj3 = { style: tmp.buttonText };
    obj3.children = title.toUpperCase();
    items1[1] = jsx(require("Button").LegacyText, obj3);
    obj.children = items1;
    obj.children = jsxs(View, obj);
    return jsx(require("PressableBase").PressableOpacity, obj);
  }
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { button: { alignSelf: "flex-end", justifyContent: "center", alignItems: "center" } };
_createForOfIteratorHelperLoose = { color: null, fontSize: 12, fontFamily: null, marginTop: 2, marginHorizontal: 2, textAlign: "center" };
_createForOfIteratorHelperLoose.color = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, 0.6);
_createForOfIteratorHelperLoose.fontFamily = require("ME").Fonts.PRIMARY_SEMIBOLD;
_createForOfIteratorHelperLoose.buttonText = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
SlideoutButton.width = 72;
const result = require("ME").fileFinishedImporting("components_native/common/SlideoutButton.tsx");

export default SlideoutButton;
