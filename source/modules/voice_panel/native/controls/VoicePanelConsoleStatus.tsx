// Module ID: 15731
// Function ID: 120333
// Name: VoicePanelConsoleStatus
// Dependencies: []
// Exports: renderVoicePanelConsoleStatus

// Module 15731 (VoicePanelConsoleStatus)
class VoicePanelConsoleStatus {
  constructor(arg0) {
    state = global.state;
    arg1 = state;
    cleanUp = global.cleanUp;
    importDefault = cleanUp;
    ({ wrapperSpecs, accessoryHeights } = global);
    tmp = jsx();
    context = importAll.useContext(importDefault(dependencyMap[7]));
    windowDimensions = context.windowDimensions;
    dependencyMap = windowDimensions;
    ({ channelId, mode } = context);
    tmp3 = importDefault(dependencyMap[8])(channelId);
    color = tmp3.color;
    importAll = color;
    ({ icon, text, displayCancel } = tmp3);
    obj = arg1(dependencyMap[9]);
    sharedValue = obj.useSharedValue(false);
    EDGE_GUTTER = sharedValue;
    items = [, ];
    items[0] = sharedValue;
    items[1] = state;
    effect = importAll.useEffect(() => {
      const result = sharedValue.set(state !== state(windowDimensions[10]).TransitionStates.YEETED);
    }, items);
    tmp6 = importDefault(dependencyMap[11])(mode, wrapperSpecs, accessoryHeights);
    obj2 = arg1(dependencyMap[9]);
    fn = function v() {
      let obj = { backgroundColor: color, width: windowDimensions.get().width - 2 * sharedValue, height: closure_5 + 36, borderRadius: 32 };
      obj = {};
      let num = 100;
      if (sharedValue.get()) {
        num = 0;
      }
      const fn = function n(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = !closure_4.get();
        }
        if (tmp) {
          callback(closure_2[9]).runOnJS(closure_1)();
          const obj = callback(closure_2[9]);
        }
      };
      obj = { shouldShow: sharedValue, runOnJS: state(windowDimensions[9]).runOnJS, cleanUp };
      fn.__closure = obj;
      fn.__workletHash = 9820708059867;
      fn.__initData = closure_11;
      obj.translateY = state(windowDimensions[12]).withSpring(num, closure_9, "respect-motion-settings", fn);
      const items = [obj];
      obj.transform = items;
      return obj;
    };
    obj = { color, windowDimensions, EDGE_GUTTER, CONTROLS_HEIGHT, CONSOLE_STATUS_HEIGHT: 36, withSpring: arg1(dependencyMap[12]).withSpring, shouldShow: sharedValue, FADE_IN_MODE_PHYSICS: jsx, runOnJS: arg1(dependencyMap[9]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 14156265059426;
    fn.__initData = jsx;
    animatedStyle = obj2.useAnimatedStyle(fn);
    obj4 = arg1(dependencyMap[9]);
    class V {
      constructor() {
        obj = { width: windowDimensions.get().width - 2 * useSharedValue };
        return obj;
      }
    }
    obj1 = { windowDimensions, EDGE_GUTTER };
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
    tmp11 = importDefault(dependencyMap[13]);
    tmp12 = jsx;
    obj4 = { style: animatedStyle };
    tmp13 = jsxs;
    obj5 = { style: tmp.consoleItemContainer };
    tmp14 = importDefault(dependencyMap[13]);
    obj6 = { source: icon };
    obj6.color = importDefault(dependencyMap[6]).unsafe_rawColors.WHITE;
    obj6.size = arg1(dependencyMap[14]).IconSizes.SMALL;
    items3 = [, , ];
    items3[0] = jsx(arg1(dependencyMap[14]).Icon, obj6);
    obj7 = { style: tmp.consoleText, children: text };
    items3[1] = jsx(arg1(dependencyMap[15]).Text, obj7);
    tmp15 = null;
    if (displayCancel) {
      tmp16 = jsx;
      tmp17 = arg1;
      tmp18 = dependencyMap;
      num = 16;
      obj8 = {};
      num2 = 4;
      obj8.hitSlop = 4;
      num3 = 17;
      obj8.onPress = arg1(dependencyMap[17]).disconnectRemote;
      tmp19 = jsx;
      obj9 = {};
      num4 = 18;
      intl = arg1(dependencyMap[18]).intl;
      obj9.children = intl.string(arg1(dependencyMap[18]).t.ETE/oC);
      obj8.children = jsx(arg1(dependencyMap[15]).Text, obj9);
      tmp15 = jsx(arg1(dependencyMap[16]).PressableOpacity, obj8);
    }
    items3[2] = tmp15;
    obj5.children = items3;
    obj4.children = tmp13(tmp14, obj5);
    obj3.children = tmp12(importDefault(dependencyMap[9]).View, obj4);
    items4 = [, ];
    items4[0] = tmp10(tmp11, obj3);
    obj10 = { style: items5 };
    items5 = [, ];
    items5[0] = tmp.blockingControlCover;
    items5[1] = animatedStyle1;
    obj10.children = jsx(arg1(dependencyMap[19]).VoicePanelVisualEffectView, {});
    items4[1] = jsx(importDefault(dependencyMap[9]).View, obj10);
    obj2.children = items4;
    return tmp9(importDefault(dependencyMap[9]).View, obj2);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const EDGE_GUTTER = arg1(dependencyMap[2]).EDGE_GUTTER;
const CONTROLS_HEIGHT = arg1(dependencyMap[3]).CONTROLS_HEIGHT;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { consoleParentContainer: {} };
obj = { borderRadius: importDefault(dependencyMap[6]).modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, overflow: "hidden" };
obj.consoleContainer = obj;
obj.consoleItemContainer = {};
obj.consoleText = {};
const tmp2 = arg1(dependencyMap[4]);
obj.blockingControlCover = { borderRadius: importDefault(dependencyMap[6]).modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, height: CONTROLS_HEIGHT };
let closure_8 = obj.createStyles(obj);
const obj2 = {};
const merged = Object.assign(arg1(dependencyMap[1]).MODE_CHANGE_PHYSICS);
obj2["overshootClamping"] = true;
let closure_10 = { code: "function VoicePanelConsoleStatusTsx1(){const{color,windowDimensions,EDGE_GUTTER,CONTROLS_HEIGHT,CONSOLE_STATUS_HEIGHT,withSpring,shouldShow,FADE_IN_MODE_PHYSICS,runOnJS,cleanUp}=this.__closure;return{backgroundColor:color,width:windowDimensions.get().width-EDGE_GUTTER*2,height:CONTROLS_HEIGHT+CONSOLE_STATUS_HEIGHT,borderRadius:32,transform:[{translateY:withSpring(shouldShow.get()?0:100,FADE_IN_MODE_PHYSICS,'respect-motion-settings',function(finished){if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}})}]};}" };
let closure_11 = { code: "function VoicePanelConsoleStatusTsx2(finished){const{shouldShow,runOnJS,cleanUp}=this.__closure;if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}}" };
let closure_12 = { code: "function VoicePanelConsoleStatusTsx3(){const{windowDimensions,EDGE_GUTTER}=this.__closure;return{width:windowDimensions.get().width-EDGE_GUTTER*2};}" };
const obj1 = { borderRadius: importDefault(dependencyMap[6]).modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, height: CONTROLS_HEIGHT };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelConsoleStatus.tsx");

export default VoicePanelConsoleStatus;
export const CONSOLE_STATUS_HEIGHT = 36;
export const renderVoicePanelConsoleStatus = function renderVoicePanelConsoleStatus(arg0, arg1, arg2, arg3) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj["state"] = arg2;
  obj["cleanUp"] = arg3;
  return callback(VoicePanelConsoleStatus, obj, arg0);
};
