// Module ID: 12249
// Function ID: 95626
// Dependencies: [57, 31, 27, 33, 4130, 689, 477, 3834, 12234, 3991, 4533, 4639, 4126, 1212, 2]

// Module 12249
import _slicedToArray from "_slicedToArray";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import { unsafe_rawColors } from "_createForOfIteratorHelperLoose";
import importAllResult from "result";
import set from "get ActivityIndicator";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = { spoilerOverlayContainer: { justifyContent: "center", alignContent: "center", flex: 1 } };
obj = { gap: require("_createForOfIteratorHelperLoose").space.PX_4, justifyContent: "center", alignItems: "center", alignSelf: "center" };
obj.obscureContentContainer = obj;
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, height: require("_createForOfIteratorHelperLoose").space.PX_32 };
set = set.isAndroid();
_createForOfIteratorHelperLoose.backgroundColor = set ? unsafe_rawColors.PRIMARY_800 : unsafe_rawColors.PRIMARY_600;
_createForOfIteratorHelperLoose.flexGrow = 0;
_createForOfIteratorHelperLoose.justifyContent = "center";
_createForOfIteratorHelperLoose.alignItems = "center";
_createForOfIteratorHelperLoose.alignSelf = "center";
obj.spoilerOverlayBackground = _createForOfIteratorHelperLoose;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = set.fileFinishedImporting("modules/media_viewer/native/components/MediaModalSpoilerOverlay.tsx");

export default require("result").memo(function MediaModalSpoilerOverlay(source) {
  let index;
  let style;
  source = source.source;
  ({ style, index } = source);
  let tmp = callback4();
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).colors.SPOILER_HIDDEN_BACKGROUND);
  let obj1 = require(12234) /* useMediaItemSpoilerState */;
  if (!tmp3[0]) {
    return null;
  } else {
    obj = {};
    const items = [style, closure_4.absoluteFill, tmp4];
    obj.style = items;
    obj = {};
    if (source.obscure) {
      let str = "dark";
    } else {
      let obj4 = require(477) /* set */;
      str = "light";
    }
    obj.blurTheme = str;
    obj.android_fallbackColor = token;
    obj.style = closure_4.absoluteFill;
    const items1 = [callback2(importDefault(4533), obj), ];
    obj1 = { style: tmp.spoilerOverlayContainer };
    if (source.obscure) {
      const obj2 = { style: tmp.obscureContentContainer };
      const items2 = [callback2(require(4639) /* ImageWarningIcon */.ImageWarningIcon, { size: "lg", color: "white" }), ];
      const obj3 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light" };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj3.children = intl2.string(require(1212) /* getSystemLocale */.t.SpxcUR);
      tmp = callback2(require(4126) /* Text */.Text, obj3);
      items2[1] = tmp;
      obj2.children = items2;
      let tmp20 = callback3(closure_5, obj2);
    } else {
      obj4 = { style: tmp.spoilerOverlayBackground };
      const obj5 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light" };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj5.children = intl.string(require(1212) /* getSystemLocale */.t["F+x38C"]).toUpperCase();
      obj4.children = callback2(require(4126) /* Text */.Text, obj5);
      tmp20 = callback2(closure_5, obj4);
      const str2 = intl.string(require(1212) /* getSystemLocale */.t["F+x38C"]);
    }
    obj1.children = tmp20;
    obj1 = callback2(closure_5, obj1);
    items1[1] = obj1;
    obj.children = items1;
    callback3(importDefault(3991).View, obj);
    const tmp10 = importDefault(4533);
    const tmp14 = callback2;
    const tmp15 = closure_5;
    const tmp5 = callback3;
    const tmp9 = callback2;
  }
});
