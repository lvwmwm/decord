// Module ID: 13105
// Function ID: 101040
// Name: EmptyState
// Dependencies: [31, 27, 653, 33, 4130, 5052, 689, 7533, 4543, 3976, 2]
// Exports: ThemedEmptyState

// Module 13105 (EmptyState)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
class EmptyState {
  constructor(arg0) {
    ({ source, title, callToAction } = global);
    ({ body, containerStyle, imageStyle, titleStyle, bodyStyle } = global);
    tmp = c7();
    obj = { style: items };
    items = [, ];
    items[0] = tmp.container;
    items[1] = containerStyle;
    tmp4 = null;
    tmp2 = jsxs;
    tmp3 = View;
    if (null != source) {
      tmp5 = jsx;
      tmp6 = Image;
      obj = {};
      obj.source = source;
      items1 = [, ];
      items1[0] = tmp.image;
      items1[1] = imageStyle;
      obj.style = items1;
      tmp4 = jsx(Image, obj);
    }
    items2 = [, , , ];
    items2[0] = tmp4;
    tmp7 = null;
    if (null != title) {
      tmp8 = jsx;
      tmp9 = closure_1;
      tmp10 = closure_2;
      num = 7;
      obj1 = {};
      items3 = [, ];
      items3[0] = tmp.title;
      items3[1] = titleStyle;
      obj1.style = items3;
      obj1.children = title;
      tmp7 = jsx(require("module_7533"), obj1);
    }
    items2[1] = tmp7;
    items4 = [, ];
    items4[0] = tmp.body;
    items4[1] = bodyStyle;
    items2[2] = jsx(require("module_7533"), { style: items4, children: body });
    tmp11 = null;
    if (null != callToAction) {
      tmp12 = jsx;
      tmp13 = View;
      obj2 = {};
      obj2.style = tmp.cta;
      tmp14 = jsx;
      tmp15 = closure_0;
      tmp16 = closure_2;
      num2 = 8;
      obj3 = {};
      flag = true;
      obj3.shrink = true;
      ({ label: obj5.text, onPress: obj5.onPress } = callToAction);
      str = "sm";
      obj3.size = "sm";
      obj2.children = jsx(require("Button").Button, obj3);
      tmp11 = jsx(View, obj2);
    }
    items2[3] = tmp11;
    obj.children = items2;
    return tmp2(tmp3, obj);
  }
}
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { alignItems: "center", justifyContent: "center", padding: 16 } };
_createForOfIteratorHelperLoose = {};
let merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_SEMIBOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
_createForOfIteratorHelperLoose["textAlign"] = "center";
_createForOfIteratorHelperLoose["marginBottom"] = 8;
_createForOfIteratorHelperLoose.title = _createForOfIteratorHelperLoose;
let obj1 = {};
let merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, 14));
obj1["textAlign"] = "center";
_createForOfIteratorHelperLoose.body = obj1;
_createForOfIteratorHelperLoose.image = { marginBottom: 32 };
_createForOfIteratorHelperLoose.cta = { alignSelf: "center", marginTop: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("design/void/RefreshEmptyState/native/RefreshEmptyState.tsx");

export default EmptyState;
export const ThemedEmptyState = function ThemedEmptyState(darkSource) {
  let lightSource = darkSource.darkSource;
  let obj = Object.create(null);
  obj.lightSource = 0;
  obj.darkSource = 0;
  const merged = Object.assign(darkSource, obj);
  obj = require(3976) /* AccessibilityAnnouncer */;
  if (obj2.isThemeLight(obj.useThemeContext().theme)) {
    lightSource = darkSource.lightSource;
  }
  obj = { source: lightSource };
  const merged1 = Object.assign(merged);
  return callback(EmptyState, obj);
};
