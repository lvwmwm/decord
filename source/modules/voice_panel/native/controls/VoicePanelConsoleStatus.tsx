// Module ID: 15856
// Function ID: 122549
// Name: VoicePanelConsoleStatus
// Dependencies: [31, 10015, 10018, 10013, 33, 4130, 689, 10014, 15851, 3991, 4476, 15857, 4542, 5517, 1273, 4126, 4660, 9040, 1212, 15858, 2]
// Exports: renderVoicePanelConsoleStatus

// Module 15856 (VoicePanelConsoleStatus)
import result from "result";
import { EDGE_GUTTER } from "CARD_SIZE";
import { CONTROLS_HEIGHT } from "VoicePanelControlsModes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
class VoicePanelConsoleStatus {
  constructor(arg0) {
    state = global.state;
    cleanUp = global.cleanUp;
    ({ wrapperSpecs, accessoryHeights } = global);
    tmp = jsx();
    context = color.useContext(require("dismissPanel"));
    windowDimensions = context.windowDimensions;
    ({ channelId, mode } = context);
    tmp3 = require("useConsoleConnectingInfo")(channelId);
    color = tmp3.color;
    ({ icon, text, displayCancel } = tmp3);
    obj = require("module_3991");
    sharedValue = obj.useSharedValue(false);
    useSharedValue = sharedValue;
    items = [, ];
    items[0] = sharedValue;
    items[1] = state;
    effect = color.useEffect(() => {
      const result = sharedValue.set(state !== state(windowDimensions[10]).TransitionStates.YEETED);
    }, items);
    tmp6 = require("useControlsTranslation")(mode, wrapperSpecs, accessoryHeights);
    obj2 = require("module_3991");
    fn = function v() {
      let obj = { backgroundColor: color, width: windowDimensions.get().width - 2 * sharedValue, height: outer1_5 + 36, borderRadius: 32 };
      obj = {};
      let num = 100;
      if (sharedValue.get()) {
        num = 0;
      }
      const fn = function n(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = !outer1_4.get();
        }
        if (tmp) {
          state(windowDimensions[9]).runOnJS(outer1_1)();
          const obj = state(windowDimensions[9]);
        }
      };
      obj = { shouldShow: sharedValue, runOnJS: state(windowDimensions[9]).runOnJS, cleanUp };
      fn.__closure = obj;
      fn.__workletHash = 9820708059867;
      fn.__initData = outer1_11;
      obj.translateY = state(windowDimensions[12]).withSpring(num, outer1_9, "respect-motion-settings", fn);
      const items = [obj];
      obj.transform = items;
      return obj;
    };
    obj = { color, windowDimensions, EDGE_GUTTER: useSharedValue, CONTROLS_HEIGHT, CONSOLE_STATUS_HEIGHT: 36, withSpring: require("withSpring").withSpring, shouldShow: sharedValue, FADE_IN_MODE_PHYSICS: jsx, runOnJS: require("module_3991").runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 14156265059426;
    fn.__initData = jsx;
    animatedStyle = obj2.useAnimatedStyle(fn);
    obj4 = require("module_3991");
    class V {
      constructor() {
        obj = { width: windowDimensions.get().width - 2 * useSharedValue };
        return obj;
      }
    }
    obj1 = { windowDimensions, EDGE_GUTTER: useSharedValue };
    V.__closure = obj1;
    V.__workletHash = 2418678233810;
    V.__initData = jsx;
    animatedStyle1 = obj4.useAnimatedStyle(V);
    tmp9 = jsxs;
    obj2 = { style: items1 };
    items1 = [, ];
    items1[0] = tmp.consoleParentContainer;
    items1[1] = tmp6;
    tmp10 = jsx;
    obj3 = { style: items2 };
    items2 = [];
    items2[0] = tmp.consoleContainer;
    tmp11 = require("set");
    tmp12 = jsx;
    obj4 = { style: animatedStyle };
    tmp13 = jsxs;
    obj5 = { style: tmp.consoleItemContainer };
    tmp14 = require("set");
    obj6 = { source: icon };
    obj6.color = require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE;
    obj6.size = require("Button").IconSizes.SMALL;
    items3 = [, , ];
    items3[0] = jsx(require("Button").Icon, obj6);
    obj7 = { variant: "text-sm/medium", color: "text-overlay-light" };
    obj7.style = tmp.consoleText;
    obj7.children = text;
    items3[1] = jsx(require("Text").Text, obj7);
    tmp15 = null;
    if (displayCancel) {
      tmp16 = jsx;
      tmp17 = state;
      tmp18 = windowDimensions;
      num = 16;
      obj8 = {};
      num2 = 4;
      obj8.hitSlop = 4;
      num3 = 17;
      obj8.onPress = require("logRemoteCommand").disconnectRemote;
      tmp19 = jsx;
      obj9 = { variant: "text-sm/medium", color: "text-overlay-light" };
      num4 = 18;
      intl = require("getSystemLocale").intl;
      obj9.children = intl.string(require("getSystemLocale").t["ETE/oC"]);
      obj8.children = jsx(require("Text").Text, obj9);
      tmp15 = jsx(require("PressableBase").PressableOpacity, obj8);
    }
    items3[2] = tmp15;
    obj5.children = items3;
    obj4.children = tmp13(tmp14, obj5);
    obj3.children = tmp12(require("module_3991").View, obj4);
    items4 = [, ];
    items4[0] = tmp10(tmp11, obj3);
    obj10 = { style: items5 };
    items5 = [, ];
    items5[0] = tmp.blockingControlCover;
    items5[1] = animatedStyle1;
    obj10.children = jsx(require("VoicePanelVisualEffectView").VoicePanelVisualEffectView, {});
    items4[1] = jsx(require("module_3991").View, obj10);
    obj2.children = items4;
    return tmp9(require("module_3991").View, obj2);
  }
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { consoleParentContainer: { zIndex: 1, position: "absolute", bottom: 0, overflow: "hidden", left: -0.5, right: 0, alignItems: "center" } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, overflow: "hidden" };
_createForOfIteratorHelperLoose.consoleContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.consoleItemContainer = { flexDirection: "row", alignItems: "center", height: 36, marginHorizontal: 18 };
_createForOfIteratorHelperLoose.consoleText = { textAlign: "left", marginStart: 4, flex: 1 };
let obj1 = { position: "absolute", bottom: 0, borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, flex: 1, height: CONTROLS_HEIGHT, overflow: "hidden" };
_createForOfIteratorHelperLoose.blockingControlCover = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = {};
let merged = Object.assign(require("VoicePanelModes").MODE_CHANGE_PHYSICS);
obj2["overshootClamping"] = true;
let closure_10 = { code: "function VoicePanelConsoleStatusTsx1(){const{color,windowDimensions,EDGE_GUTTER,CONTROLS_HEIGHT,CONSOLE_STATUS_HEIGHT,withSpring,shouldShow,FADE_IN_MODE_PHYSICS,runOnJS,cleanUp}=this.__closure;return{backgroundColor:color,width:windowDimensions.get().width-EDGE_GUTTER*2,height:CONTROLS_HEIGHT+CONSOLE_STATUS_HEIGHT,borderRadius:32,transform:[{translateY:withSpring(shouldShow.get()?0:100,FADE_IN_MODE_PHYSICS,'respect-motion-settings',function(finished){if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}})}]};}" };
let closure_11 = { code: "function VoicePanelConsoleStatusTsx2(finished){const{shouldShow,runOnJS,cleanUp}=this.__closure;if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}}" };
let closure_12 = { code: "function VoicePanelConsoleStatusTsx3(){const{windowDimensions,EDGE_GUTTER}=this.__closure;return{width:windowDimensions.get().width-EDGE_GUTTER*2};}" };
let result = require("CARD_SIZE").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelConsoleStatus.tsx");

export default VoicePanelConsoleStatus;
export const CONSOLE_STATUS_HEIGHT = 36;
export const renderVoicePanelConsoleStatus = function renderVoicePanelConsoleStatus(arg0, arg1, arg2, arg3) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj["state"] = arg2;
  obj["cleanUp"] = arg3;
  return callback(VoicePanelConsoleStatus, obj, arg0);
};
