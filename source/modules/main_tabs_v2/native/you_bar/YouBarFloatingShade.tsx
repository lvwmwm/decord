// Module ID: 15169
// Function ID: 115493
// Dependencies: [31, 27, 3942, 14047, 14860, 33, 4130, 566, 3834, 689, 14049, 1450, 3984, 14854, 3991, 3941, 665, 4554, 2]

// Module 15169
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { YOU_BAR_GRADIENT_EXTRA_HEIGHT as closure_5 } from "CONNECTION_BANNER_HEIGHT";
import { GUILD_LIST_WIDTH } from "GUILD_ITEM_SIZE";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_7;
let closure_8;
let closure_9;
let require = arg1;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ container: { position: "absolute", bottom: 0, left: 0, right: 0 } });
let closure_11 = { code: "function YouBarFloatingShadeTsx1(){const{gradientHeight,drawerWidth}=this.__closure;return{height:gradientHeight,opacity:1,width:drawerWidth};}" };
const memoResult = require("result").memo(function YouBarFloatingShade() {
  const tmp = callback3();
  let obj = require(14049) /* useYouBarTotalHeight */;
  const youBarTotalHeight = obj.useYouBarTotalHeight();
  const sum = youBarTotalHeight + closure_5;
  require = sum;
  width = width(1450)().width;
  if (width(3984)().isChatBesideChannelList) {
    width = tmp4 + GUILD_LIST_WIDTH;
  }
  let obj1 = require(3991);
  const fn = function v() {
    return { height: closure_0, opacity: 1, width };
  };
  obj = { gradientHeight: sum, drawerWidth: width };
  fn.__closure = obj;
  fn.__workletHash = 7609004216185;
  fn.__initData = closure_11;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const gradientValue = require(3941) /* colorToHex */.useGradientValue(require(3941) /* colorToHex */.GradientPercentage.END);
  const obj4 = require(3941) /* colorToHex */;
  let token = require(3834) /* map */.useToken(width(689).colors.BACKGROUND_BASE_LOWER);
  let tmp9 = (function useYouBarGradientBackground() {
    const items = [outer1_4];
    const stateFromStores = sum(outer1_2[7]).useStateFromStores(items, () => outer2_4.gradientPreset);
    const obj = sum(outer1_2[7]);
    let token = null;
    if (null != stateFromStores) {
      token = obj2.useToken(width(outer1_2[9]).colors.MOBILE_FLOATINGBAR_BACKGROUND_SCRIM);
    }
    return token;
  })();
  if (null == tmp9) {
    tmp9 = token;
    if (null != gradientValue) {
      tmp9 = gradientValue;
    }
  }
  const obj5 = require(3834) /* map */;
  const hex2rgbResult = require(665) /* pad2 */.hex2rgb(tmp9, 1);
  let str = "transparent";
  let str2 = "transparent";
  if (null != hex2rgbResult) {
    str2 = hex2rgbResult;
  }
  const obj6 = require(665) /* pad2 */;
  const hex2rgbResult1 = require(665) /* pad2 */.hex2rgb(tmp9, 0);
  if (null != hex2rgbResult1) {
    str = hex2rgbResult1;
  }
  obj = {};
  let items = [tmp.container, animatedStyle, { height: youBarTotalHeight, opacity: 0 }];
  const items1 = [callback(View, { style: items, pointerEvents: "box-only" }), , ];
  const items2 = [tmp.container, ];
  obj1 = { bottom: sum / 2, height: sum / 2, width };
  items2[1] = obj1;
  const items3 = [str, str2];
  items1[1] = callback(width(4554), { style: items2, colors: items3, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 1], pointerEvents: "none" });
  const items4 = [tmp.container, ];
  const obj2 = { width, height: sum / 2, backgroundColor: str2 };
  items4[1] = obj2;
  items1[2] = callback(View, { style: items4 });
  obj.children = items1;
  return callback2(closure_8, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarFloatingShade.tsx");

export default memoResult;
