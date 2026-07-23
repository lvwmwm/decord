// Module ID: 7491
// Function ID: 60122
// Name: StageSparkleInner
// Dependencies: [31, 27, 33, 4130, 689, 7492, 5085, 7493, 3842, 2]
// Exports: default

// Module 7491 (StageSparkleInner)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function StageSparkleInner(style) {
  let IconComponent;
  let icon;
  ({ IconComponent, icon } = style);
  if (icon === undefined) {
    icon = importDefault(7492);
  }
  const tmp3 = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [tmp3.container, style.style];
  obj = { style: tmp3.iconContainer };
  if (null != IconComponent) {
    obj = { size: "lg", color: importDefault(689).colors.MOBILE_TEXT_HEADING_PRIMARY };
    let tmp11 = callback(IconComponent, obj);
  } else {
    const obj1 = { source: icon, style: tmp3.iconStyle };
    tmp11 = callback(importDefault(5085), obj1);
  }
  obj.children = tmp11;
  const items1 = [callback(View, obj), ];
  const obj2 = { style: tmp3.sparkles, source: importDefault(7493) };
  items1[1] = callback(importDefault(5085), obj2);
  obj.children = items1;
  return closure_5(View, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { width: 88, height: 88, alignItems: "center", justifyContent: "center" } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: 28, height: 56, width: 56, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.iconContainer = _createForOfIteratorHelperLoose;
let obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, height: 32, width: 32 };
_createForOfIteratorHelperLoose.iconStyle = obj1;
_createForOfIteratorHelperLoose.sparkles = { position: "absolute", top: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/StageSparkle.tsx");

export default function StageSparkle(theme) {
  theme = theme.theme;
  let obj = Object.create(null);
  obj.theme = 0;
  const merged = Object.assign(theme, obj);
  if (null != theme) {
    obj = { theme };
    const obj1 = {};
    const merged1 = Object.assign(merged);
    obj.children = callback(StageSparkleInner, obj1);
    let tmp8 = callback(require(3842) /* ManaContext */.ThemeContextProvider, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    tmp8 = callback(StageSparkleInner, obj);
  }
  return tmp8;
};
