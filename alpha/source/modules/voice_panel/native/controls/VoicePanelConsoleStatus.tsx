// Module ID: 19581
// Function ID: 19582
// Name: VoicePanelConsoleStatus
// Dependencies: [19, 11411, 11414, 11409, 21, 5141, 575, 11410, 19575, 1652, 5207, 19582, 19580, 5771, 1705, 7101, 1187, 5761, 7121, 12176, 1113, 19583, 2]
// Exports: renderVoicePanelConsoleStatus

// Module 19581 (VoicePanelConsoleStatus)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 5207 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11409 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11411 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11414 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let tmp3;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
class VoicePanelConsoleStatus {
  constructor(arg0) {
    let Text;
    let View2;
    let accessoryHeights;
    let channelId;
    let cleanUp;
    let color;
    let displayCancel;
    let hiddenProps;
    let hiddenStyles;
    let icon;
    let intl;
    let items5;
    let items6;
    let items7;
    let items8;
    let mode;
    let obj5;
    let obj9;
    let state;
    let text;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp21;
    let tmp22;
    let tmp23;
    let tmp24;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp2Result2;
    let windowDimensions;
    let wrapperSpecs;
    ({ wrapperSpecs, state } = arg0);
    let sharedValue;
    ({ accessoryHeights, cleanUp } = arg0);
    let tmp = closure_8();
    let tmp2 = sharedValue;
    const context = react.useContext(sharedValue(11410));
    ({ windowDimensions, mode, channelId } = context);
    const tmp5 = sharedValue(19575)(channelId);
    const tmp6 = state;
    ({ icon, text, color, displayCancel } = tmp5);
    let obj = state(1652);
    sharedValue = obj.useSharedValue(false);
    let items = [sharedValue, state];
    const effect = react.useEffect(() => {
      const result = sharedValue.set(state !== native.TransitionStates.YEETED);
    }, items);
    const tmp9 = sharedValue(19582)(mode, wrapperSpecs, accessoryHeights);
    ({ hiddenProps, hiddenStyles } = sharedValue(19580)(mode, wrapperSpecs));
    sharedValue(19580)(mode, wrapperSpecs);
    let items1 = [closure_11, color, windowDimensions, EDGE_GUTTER, CONTROLS_HEIGHT, 36, , , , , , ];
    const useAnimatedStyle = state(1652).useAnimatedStyle;
    state(1652);
    items1[6] = state(5771).withSpring;
    items1[7] = sharedValue;
    items1[8] = obj4;
    items1[9] = closure_10;
    items1[10] = state(1705).scheduleOnRN;
    items1[11] = cleanUp;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let c9;
    let c10;
    [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items1;
    const tmp12 = EDGE_GUTTER;
    class VoicePanelConsoleStatusTsx2 {
      constructor() {
        let items2;
        let tmp4;
        let tmp5;
        let tmp6;
        let tmp7;
        size = { backgroundColor, width: _undefined.get().width - 2 * c2, height: c3 + c4, borderRadius: 32, transform: items2 };
        let tmp = c5;
        let num = 100;
        const tmp2 = _undefined2;
        if (_undefined2.get()) {
          num = 0;
        }
        const items = [c8, tmp2, c9, c10];
        [tmp4, tmp5, tmp6, tmp7] = items;
        const obj = { translateY: tmp(num, c7, "respect-motion-settings", VoicePanelConsoleStatusTsx1) };
        class VoicePanelConsoleStatusTsx1 {
          constructor(arg0) {
            tmp = arg0;
            if (tmp) {
              tmp2 = closure_0;
              tmp = !closure_0.get();
            }
            if (tmp) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              tmp5 = closure_1(closure_2);
            }
            return;
          }
        }
        const items1 = [tmp5, tmp6, tmp7];
        VoicePanelConsoleStatusTsx1.__closure = items1;
        VoicePanelConsoleStatusTsx1.__workletHash = 9535056131648;
        VoicePanelConsoleStatusTsx1.__initData = tmp4;
        items2 = [obj];
        return size;
      }
    }
    let items2 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24];
    VoicePanelConsoleStatusTsx2.__closure = items2;
    VoicePanelConsoleStatusTsx2.__workletHash = 17263747246830;
    VoicePanelConsoleStatusTsx2.__initData = tmp13;
    const animatedStyle = useAnimatedStyle(VoicePanelConsoleStatusTsx2);
    const items3 = [closure_12, windowDimensions, tmp12];
    c0 = undefined;
    c1 = undefined;
    [tmp26, tmp27, tmp28] = items3;
    const tmp6Result = tmp6(1652);
    class VoicePanelConsoleStatusTsx3 {
      constructor() {
        const obj = { width: _undefined.get().width - 2 * c1 };
        return obj;
      }
    }
    const items4 = [tmp27, tmp28];
    VoicePanelConsoleStatusTsx3.__closure = items4;
    VoicePanelConsoleStatusTsx3.__workletHash = 5648007408747;
    VoicePanelConsoleStatusTsx3.__initData = tmp26;
    const animatedStyle1 = tmp6Result.useAnimatedStyle(VoicePanelConsoleStatusTsx3);
    const obj2 = { style: items5, animatedProps: hiddenProps, children: items7 };
    items5 = [tmp.consoleParentContainer, tmp9, hiddenStyles];
    const View = tmp2(1652).View;
    const obj3 = { style: tmp.consoleContainer, children: closure_6(View2, obj4) };
    obj4 = { style: animatedStyle, children: closure_7(tmp2Result2, obj5) };
    const tmp2Result = tmp2(7101);
    View2 = tmp2(1652).View;
    obj5 = { style: tmp.consoleItemContainer, children: items6 };
    const obj6 = { source: icon, color: tmp2(575).unsafe_rawColors.WHITE, size: tmp6(1187).IconSizes.SMALL };
    tmp2Result2 = tmp2(7101);
    const Icon = tmp6(1187).Icon;
    items6 = [closure_6(Icon, obj6), , ];
    const obj7 = { variant: "body-sm/medium", color: "text-overlay-light", style: tmp.consoleText, children: text };
    items6[1] = closure_6(tmp6(5761).Text, obj7);
    let tmp31Result = null;
    if (displayCancel) {
      const obj8 = { hitSlop: 4, onPress: tmp6(12176).disconnectRemote, children: closure_6(Text, obj9) };
      const PressableOpacity = tmp6(7121).PressableOpacity;
      obj9 = { variant: "body-sm/medium", color: "text-overlay-light", children: intl.string(tmp6(1113).t["ETE/oC"]) };
      Text = tmp6(5761).Text;
      intl = tmp6(1113).intl;
      tmp31Result = tmp31(PressableOpacity, obj8);
    }
    items6[2] = tmp31Result;
    items7 = [closure_6(tmp2Result, obj3), ];
    const obj10 = { style: items8, children: closure_6(tmp6(19583).VoicePanelVisualEffectView, {}) };
    items8 = [tmp.blockingControlCover, animatedStyle1];
    const View3 = tmp2(1652).View;
    items7[1] = closure_6(View3, obj10);
    return closure_7(View, obj2);
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
let closure_10 = { code: "(function VoicePanelConsoleStatusTsx1(finished){let[shouldShow,scheduleOnRN,cleanUp]=this.__closure;if(finished&&!shouldShow.get()){scheduleOnRN(cleanUp);}})" };
let closure_11 = { code: "(function VoicePanelConsoleStatusTsx2(){let[color,windowDimensions,EDGE_GUTTER,CONTROLS_HEIGHT,CONSOLE_STATUS_HEIGHT,withSpring,shouldShow,FADE_IN_MODE_PHYSICS,_worklet_9535056131648_init_data,scheduleOnRN,cleanUp]=this.__closure;return{backgroundColor:color,width:windowDimensions.get().width-EDGE_GUTTER*2,height:CONTROLS_HEIGHT+CONSOLE_STATUS_HEIGHT,borderRadius:32,transform:[{translateY:withSpring(shouldShow.get()?0:100,FADE_IN_MODE_PHYSICS,'respect-motion-settings',function VoicePanelConsoleStatusTsx1Factory([_worklet_9535056131648_init_data,shouldShow,scheduleOnRN,cleanUp]){const VoicePanelConsoleStatusTsx1=function(finished){if(finished&&!shouldShow.get()){scheduleOnRN(cleanUp);}};VoicePanelConsoleStatusTsx1.__closure=[shouldShow,scheduleOnRN,cleanUp];VoicePanelConsoleStatusTsx1.__workletHash=9535056131648;VoicePanelConsoleStatusTsx1.__initData=_worklet_9535056131648_init_data;return VoicePanelConsoleStatusTsx1;}([_worklet_9535056131648_init_data,shouldShow,scheduleOnRN,cleanUp]))}]};})" };
let closure_12 = { code: "(function VoicePanelConsoleStatusTsx3(){let[windowDimensions,EDGE_GUTTER]=this.__closure;return{width:windowDimensions.get().width-EDGE_GUTTER*2};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelConsoleStatus.tsx");

export default VoicePanelConsoleStatus;
export const CONSOLE_STATUS_HEIGHT = 36;
export function renderVoicePanelConsoleStatus(arg0, arg1, state, cleanUp) {
  const obj = { state, cleanUp };
  const merged = Object.assign(arg1);
  return metroRequire(VoicePanelConsoleStatus, obj, arg0);
}
