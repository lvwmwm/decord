// Module ID: 10146
// Function ID: 78502
// Name: VibingWumpusScreen
// Dependencies: [57, 31, 27, 4122, 10134, 10147, 653, 33, 4130, 689, 624, 10148, 675, 10149, 5453, 10150, 4126, 1212, 4543, 4337, 8286, 8288, 5519, 2]
// Exports: default

// Module 10146 (VibingWumpusScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { VIBING_WUMPUS_MODAL_KEY } from "LOCATION_CONTEXT_MOBILE";
import VibingWumpusAction from "VibingWumpusAction";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_14;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
class VibingWumpusScreen {
  constructor() {
    tmp = c15();
    tmp2 = _slicedToArray(result.useState(false), 2);
    first = tmp2[0];
    closure_0 = first;
    c1 = tmp2[1];
    ref = result.useRef(null);
    closure_2 = ref;
    obj = require("defaultAreStatesEqual");
    items = [];
    items[0] = c7;
    stateFromStores = obj.useStateFromStores(items, () => outer1_7.useReducedMotion);
    _slicedToArray = stateFromStores;
    effect = result.useEffect(() => {
      let date = new Date();
      let obj = first(ref[11]);
      let result = obj.playVibingWumpusMusic();
      obj = { source: outer1_10.INAPPROPRIATE_CONVERSATION };
      callback(ref[12]).track(outer1_11.VIBING_WUMPUS_VIEWED, obj);
      return () => {
        let obj = callback(ref[12]);
        obj = {};
        const date = new Date();
        const time = date.getTime();
        obj.duration_open_ms = time - date.getTime();
        obj.source = outer2_10.INAPPROPRIATE_CONVERSATION;
        obj.track(outer2_11.VIBING_WUMPUS_CLOSED, obj);
        const result = first(ref[11]).stopVibingWumpusMusic();
      };
    }, []);
    obj = {};
    obj1 = { source: require("registerAsset"), style: tmp.rings };
    tmp7 = jsxs;
    tmp8 = Fragment;
    items1 = [, ];
    items1[0] = jsx(Image, obj1);
    obj2 = { style: tmp.container };
    tmp9 = jsxs;
    tmp10 = View;
    tmp11 = jsx;
    obj3 = {};
    tmp12 = require("_isNativeReflectConstruct");
    obj3.source = require("items2");
    obj3.ref = ref;
    obj3.autoPlay = !stateFromStores;
    obj3.loop = true;
    obj3.style = tmp.wumpus;
    num = undefined;
    if (stateFromStores) {
      num = 0.8;
    }
    obj3.progress = num;
    items2 = [, , ];
    items2[0] = tmp11(tmp12, obj3);
    obj4 = { style: tmp.warningText };
    obj5 = { variant: "heading-xl/semibold", style: null, accessibilityRole: "header" };
    obj5.style = tmp.takeoverHeader;
    intl = require("getSystemLocale").intl;
    obj5.children = intl.string(require("getSystemLocale").t.L4ifkZ);
    items3 = [, ];
    items3[0] = jsx(require("Text").Text, obj5);
    obj6 = { variant: "text-md/medium", style: tmp.takeoverDescription };
    intl2 = require("getSystemLocale").intl;
    obj6.children = intl2.string(require("getSystemLocale").t.R8LCMZ);
    items3[1] = jsx(require("Text").Text, obj6);
    obj4.children = items3;
    items2[1] = jsxs(View, obj4);
    obj7 = { style: tmp.ctaContainer };
    tmp13 = jsxs;
    tmp14 = View;
    obj8 = { variant: "primary", size: "lg", text: null, grow: true };
    intl3 = require("getSystemLocale").intl;
    obj8.text = intl3.string(require("getSystemLocale").t["8eKkaf"]);
    obj8.onPress = function onPress() {
      let obj = callback(ref[12]);
      obj = { action: outer1_9.BACK_TO_CONVERSATION };
      obj.track(outer1_11.VIBING_WUMPUS_ACTION, obj);
      callback(ref[19]).popWithKey(outer1_8);
    };
    items4 = [, ];
    items4[0] = jsx(require("Button").Button, obj8);
    tmp15 = jsx;
    obj9 = { variant: "tertiary", size: "lg", text: null, grow: true };
    intl4 = require("getSystemLocale").intl;
    string = intl4.string;
    t = require("getSystemLocale").t;
    if (first) {
      stringResult = string(t.RscU7I);
    } else {
      stringResult = string(t.ZcgDJX);
    }
    obj9.text = stringResult;
    obj9.onPress = function onPress() {
      let obj = first(ref[11]);
      if (first) {
        const result = obj.playVibingWumpusMusic();
        obj = { action: outer1_9.PLAY };
        callback(tmp[12]).track(outer1_11.VIBING_WUMPUS_ACTION, obj);
        const obj4 = callback(tmp[12]);
      } else {
        const result1 = obj.pauseVibingWumpusMusic();
        obj = { action: outer1_9.PAUSE };
        callback(tmp[12]).track(outer1_11.VIBING_WUMPUS_ACTION, obj);
        const obj2 = callback(tmp[12]);
      }
      if (!stateFromStores) {
        if (first) {
          const current = ref.current;
          if (null != current) {
            current.resume();
          }
        }
        callback(!first);
      }
      if (!stateFromStores) {
        if (!first) {
          const current2 = ref.current;
          if (null != current2) {
            current2.pause();
          }
        }
      }
    };
    tmp18 = closure_0;
    tmp19 = closure_2;
    tmp17 = jsx;
    if (first) {
      num3 = 20;
      PauseIcon = require("PlayIcon").PlayIcon;
    } else {
      num2 = 21;
      PauseIcon = require("PauseIcon").PauseIcon;
    }
    obj10 = { size: "md", color: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_TEXT };
    obj9.icon = tmp17(PauseIcon, obj10);
    items4[1] = tmp15(require("Button").Button, obj9);
    obj7.children = items4;
    items2[2] = tmp13(tmp14, obj7);
    obj2.children = items2;
    items1[1] = tmp9(tmp10, obj2);
    obj.children = items1;
    return tmp7(tmp8, obj);
  }
}
({ Image: closure_5, View: closure_6 } = get_ActivityIndicator);
({ VibingWumpusAction: closure_9, VibingWumpusSource: closure_10 } = VibingWumpusAction);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", alignItems: "center", justifyContent: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_32, gap: require("_createForOfIteratorHelperLoose").space.PX_16, height: "100%" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.warningText = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj2 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.ctaContainer = obj2;
_createForOfIteratorHelperLoose.takeoverHeader = { textAlign: "center" };
_createForOfIteratorHelperLoose.takeoverDescription = { textAlign: "center" };
_createForOfIteratorHelperLoose.wumpus = { height: 187 };
_createForOfIteratorHelperLoose.rings = { position: "absolute", width: "100%", height: 440, top: 120 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/VibingWumpusModal.tsx");

export default function VibingWumpusModal() {
  const VIBING_WUMPUS = {
    title: "",
    fullscreen: true,
    headerShown: false,
    render() {
      return outer1_12(outer1_16, {});
    }
  };
  return callback(require(5519) /* NavigationStack */.Navigator, { screens: { VIBING_WUMPUS }, initialRouteName: "VIBING_WUMPUS" });
};
export { VibingWumpusScreen };
