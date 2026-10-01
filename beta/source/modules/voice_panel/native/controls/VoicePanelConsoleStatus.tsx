// Module ID: 17003
// Function ID: 17004
// Name: VoicePanelConsoleStatus
// Dependencies: [19, 11755, 11758, 11753, 21, 4836, 576, 11754, 16997, 4566, 4540, 17004, 17002, 5280, 5901, 1177, 4832, 5435, 9243, 1115, 17005, 2]
// Exports: renderVoicePanelConsoleStatus

// Module 17003 (VoicePanelConsoleStatus)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4540 */;
import spring from "spring" /* 5280 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11758 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp;
const ReanimatedRexport = tmp(4566);
class VoicePanelConsoleStatus {
  constructor(cleanUp) {
    let Text;
    let View2;
    let channelId;
    let displayCancel;
    let hiddenProps;
    let hiddenStyles;
    let icon;
    let intl;
    let items1;
    let items2;
    let items3;
    let items4;
    let items5;
    let mode;
    let obj12;
    let obj7;
    let obj8;
    let state;
    let text;
    let tmp16;
    let wrapperSpecs;
    ({ wrapperSpecs, state } = cleanUp);
    cleanUp = cleanUp.cleanUp;
    let windowDimensions;
    let color;
    const accessoryHeights = cleanUp.accessoryHeights;
    let tmp = closure_8();
    let tmp3 = windowDimensions;
    const tmp2 = cleanUp;
    const context = color.useContext(cleanUp(windowDimensions[7]));
    windowDimensions = context.windowDimensions;
    ({ mode, channelId } = context);
    const tmp5 = cleanUp(windowDimensions[8])(channelId);
    color = tmp5.color;
    ({ icon, text, displayCancel } = tmp5);
    let obj = state(windowDimensions[9]);
    const sharedValue = obj.useSharedValue(false);
    let items = [sharedValue, state];
    const effect = color.useEffect(() => {
      const result = sharedValue.set(state !== native.TransitionStates.YEETED);
    }, items);
    const tmp9 = cleanUp(windowDimensions[11])(mode, wrapperSpecs, accessoryHeights);
    ({ hiddenProps, hiddenStyles } = cleanUp(windowDimensions[12])(mode, wrapperSpecs));
    cleanUp(windowDimensions[12])(mode, wrapperSpecs);
    const obj2 = state(windowDimensions[9]);
    let fn = function v() {
      let fn;
      let items;
      size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + 36, borderRadius: 32, transform: items };
      let tmp = require;
      const withSpring = spring.withSpring;
      let num = 100;
      if (sharedValue.get()) {
        num = 0;
      }
      let obj = { translateY: withSpring(num, obj4, "respect-motion-settings", fn) };
      fn = function n(arg0) {
        const tmp = arg0 && !sharedValue.get();
        if (tmp) {
          const obj = state(windowDimensions[9]);
          obj.runOnJS(cleanUp)();
        }
      };
      fn.__closure = { shouldShow: sharedValue, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      fn.__workletHash = 9820708059867;
      fn.__initData = __initData;
      ({ shouldShow: sharedValue, runOnJS: ReanimatedRexport.runOnJS, cleanUp });
      items = [obj];
      return size;
    };
    fn.__closure = { color, windowDimensions, EDGE_GUTTER: sharedValue, CONTROLS_HEIGHT, CONSOLE_STATUS_HEIGHT: 36, withSpring: state(windowDimensions[13]).withSpring, shouldShow: sharedValue, FADE_IN_MODE_PHYSICS: obj4, runOnJS: state(windowDimensions[9]).runOnJS, cleanUp };
    fn.__workletHash = 14156265059426;
    fn.__initData = __initData;
    ({ color, windowDimensions, EDGE_GUTTER: sharedValue, CONTROLS_HEIGHT, CONSOLE_STATUS_HEIGHT: 36, withSpring: state(windowDimensions[13]).withSpring, shouldShow: sharedValue, FADE_IN_MODE_PHYSICS: obj4, runOnJS: state(windowDimensions[9]).runOnJS, cleanUp });
    const animatedStyle = obj2.useAnimatedStyle(fn);
    obj4 = state(windowDimensions[9]);
    class V {
      constructor() {
        const obj = { width: windowDimensions.get().width - 2 * EDGE_GUTTER };
        return obj;
      }
    }
    V.__closure = { windowDimensions, EDGE_GUTTER: sharedValue };
    V.__workletHash = 2418678233810;
    V.__initData = __initData2;
    const animatedStyle1 = obj4.useAnimatedStyle(V);
    const obj5 = { style: items1, animatedProps: hiddenProps, children: items4 };
    items1 = [tmp.consoleParentContainer, tmp9, hiddenStyles];
    const View = cleanUp(windowDimensions[9]).View;
    const obj6 = { style: items2, children: closure_6(View2, obj7) };
    items2 = [tmp.consoleContainer];
    obj7 = { style: animatedStyle, children: closure_7(tmp16, obj8) };
    const tmp15 = cleanUp(windowDimensions[14]);
    View2 = cleanUp(windowDimensions[9]).View;
    obj8 = { style: tmp.consoleItemContainer, children: items3 };
    const obj9 = { source: icon, color: cleanUp(windowDimensions[6]).unsafe_rawColors.WHITE, size: state(windowDimensions[15]).IconSizes.SMALL };
    tmp16 = cleanUp(windowDimensions[14]);
    const Icon = state(windowDimensions[15]).Icon;
    items3 = [closure_6(Icon, obj9), , ];
    const obj10 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.consoleText, children: text };
    items3[1] = closure_6(state(windowDimensions[16]).Text, obj10);
    let tmp14Result = null;
    if (displayCancel) {
      const obj11 = { hitSlop: 4, onPress: state(tmp3[18]).disconnectRemote, children: closure_6(Text, obj12) };
      const PressableOpacity = tmp6(tmp3[17]).PressableOpacity;
      obj12 = { variant: "text-sm/medium", color: "text-overlay-light", children: intl.string(state(tmp3[19]).t["ETE/oC"]) };
      Text = tmp6(tmp3[16]).Text;
      intl = tmp6(tmp3[19]).intl;
      tmp14Result = tmp14(PressableOpacity, obj11);
    }
    items3[2] = tmp14Result;
    items4 = [closure_6(tmp15, obj6), ];
    const obj13 = { style: items5, children: closure_6(state(tmp3[20]).VoicePanelVisualEffectView, {}) };
    items5 = [tmp.blockingControlCover, animatedStyle1];
    const View3 = tmp2(tmp3[9]).View;
    items4[1] = closure_6(View3, obj13);
    return closure_7(View, obj5);
  }
}
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const CONTROLS_HEIGHT = VoicePanelControlsConstants.CONTROLS_HEIGHT;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { consoleParentContainer: { zIndex: 1, position: "absolute", bottom: 0, overflow: "hidden", left: -0.5, right: 0, alignItems: "center" }, consoleContainer: obj2, consoleItemContainer: { flexDirection: "row", alignItems: "center", height: 36, marginHorizontal: 18 }, consoleText: { textAlign: "left", marginStart: 4, flex: 1 }, blockingControlCover: obj3 };
obj2 = { borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { position: "absolute", bottom: 0, borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, flex: 1, height: CONTROLS_HEIGHT, overflow: "hidden" };
const metroImportAll = createStyles(obj);
let obj4 = { overshootClamping: true };
let merged = Object.assign(MODE_CHANGE_PHYSICS);
const authStore = { code: "function VoicePanelConsoleStatusTsx1(){const{color,windowDimensions,EDGE_GUTTER,CONTROLS_HEIGHT,CONSOLE_STATUS_HEIGHT,withSpring,shouldShow,FADE_IN_MODE_PHYSICS,runOnJS,cleanUp}=this.__closure;return{backgroundColor:color,width:windowDimensions.get().width-EDGE_GUTTER*2,height:CONTROLS_HEIGHT+CONSOLE_STATUS_HEIGHT,borderRadius:32,transform:[{translateY:withSpring(shouldShow.get()?0:100,FADE_IN_MODE_PHYSICS,'respect-motion-settings',function(finished){if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}})}]};}" };
let closure_11 = { code: "function VoicePanelConsoleStatusTsx2(finished){const{shouldShow,runOnJS,cleanUp}=this.__closure;if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}}" };
const __initData2 = { code: "function VoicePanelConsoleStatusTsx3(){const{windowDimensions,EDGE_GUTTER}=this.__closure;return{width:windowDimensions.get().width-EDGE_GUTTER*2};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelConsoleStatus.tsx");

export default VoicePanelConsoleStatus;
export const CONSOLE_STATUS_HEIGHT = 36;
export const renderVoicePanelConsoleStatus = function renderVoicePanelConsoleStatus(arg0, arg1, state, cleanUp) {
  const obj = { state, cleanUp };
  const merged = Object.assign(arg1);
  return metroRequire(VoicePanelConsoleStatus, obj, arg0);
};
