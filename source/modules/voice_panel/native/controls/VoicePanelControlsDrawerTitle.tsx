// Module ID: 11408
// Function ID: 88694
// Dependencies: [31, 27, 10045, 33, 4130, 689, 3991, 5515, 11409, 7678, 4126, 2]

// Module 11408
import { StyleSheet } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
obj = { titleWrapper: obj };
obj = { position: "absolute", top: 0, left: 0, right: 0, justifyContent: "center", alignItems: "center", padding: 16, height: require("VoicePanelControlsModes").CONTROLS_DRAWER_HEADER_SIZE };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, paddingHorizontal: 12, paddingTop: 1, paddingBottom: 2 };
obj.titlePill = _createForOfIteratorHelperLoose;
obj.titlePillBG = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_7 = { code: "function VoicePanelControlsDrawerTitleTsx1(){const{shown,_shown,disablePill,backgroundColor}=this.__closure;const showBGColor=shown!=null?shown.get():_shown.get();return{backgroundColor:showBGColor&&!disablePill?backgroundColor:'transparent'};}" };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
const memoResult = importAllResult.memo(function VoicePanelControlsDrawerTitle(shown) {
  let blurStyle;
  let style;
  shown = shown.shown;
  let flag = shown.disablePill;
  if (flag === undefined) {
    flag = false;
  }
  let sharedValue;
  let backgroundColor;
  ({ style, blurStyle } = shown);
  const tmp = callback2();
  let obj = shown(sharedValue[6]);
  sharedValue = obj.useSharedValue(true);
  backgroundColor = tmp.titlePillBG.backgroundColor;
  let obj1 = shown(sharedValue[6]);
  const fn = function p() {
    const obj = {};
    if (null != shown) {
      let value = shown.get();
    } else {
      value = sharedValue.get();
    }
    let str = "transparent";
    if (value) {
      str = "transparent";
      if (!flag) {
        str = backgroundColor;
      }
    }
    obj.backgroundColor = str;
    return obj;
  };
  obj = { shown, _shown: sharedValue, disablePill: flag, backgroundColor };
  fn.__closure = obj;
  fn.__workletHash = 14837285839887;
  fn.__initData = closure_7;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: items };
  items = [tmp.titleWrapper, style];
  obj1 = {};
  const tmp4 = closure_5;
  const tmp5 = flag(sharedValue[7]);
  const tmp6 = callback;
  if (null != shown) {
    sharedValue = shown;
  }
  obj1.shown = sharedValue;
  obj1.style = backgroundColor.absoluteFillObject;
  obj1.blurStyle = blurStyle;
  const items1 = [tmp6(flag(sharedValue[8]), obj1), ];
  const obj2 = { style: items2 };
  items2 = [tmp.titlePill, animatedStyle];
  const tmp7 = flag(sharedValue[8]);
  const obj3 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: shown.title };
  obj2.children = callback(shown(sharedValue[10]).Text, obj3);
  items1[1] = callback(flag(sharedValue[9]), obj2);
  obj.children = items1;
  return tmp4(tmp5, obj);
});
const result = require("VoicePanelControlsModes").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawerTitle.tsx");

export default memoResult;
