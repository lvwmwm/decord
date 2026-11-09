// Module ID: 19735
// Function ID: 19736
// Name: VoicePanelControlsDrawer
// Dependencies: [32, 19, 17, 11363, 21, 5140, 575, 7022, 6121, 14061, 11362, 1652, 14062, 5761, 10210, 1705, 19736, 19747, 18397, 19732, 2]

// Module 19735 (VoicePanelControlsDrawer)
import nativeDefault from "native" /* 575 */;
import react2 from "react" /* 6121 */;
import useRefValueDefault from "useRefValue" /* 7022 */;
import VoicePanelChatViewDefault from "VoicePanelChatView" /* 14061 */;
import VoicePanelVoiceControlsDefault from "VoicePanelVoiceControls" /* 19736 */;
import VoicePanelControlsAppLauncherDefault from "VoicePanelControlsAppLauncher" /* 19747 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11363 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
function renderChat(shown) {
  let obj2;
  const obj = { collapsable: false, style: hasOwnProperty.absoluteFill, children: React4(VoicePanelChatViewDefault, obj2) };
  obj2 = { shown };
  return React4(metroRequire, obj);
}
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ MODE_CHANGE_PHYSICS: metroImportDefault, VoicePanelModes: metroImportAll } = VoicePanelConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { drawer: obj2 };
obj2 = { flex: 1, zIndex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_11 = createStyles.createStyles(obj);
let closure_14 = { code: "(function VoicePanelControlsDrawerTsx1(){let[getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS]=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};})" };
let closure_15 = { code: "(function VoicePanelControlsDrawerTsx2(){let[wrapperSpecs,mode]=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];})" };
let closure_16 = { code: "(function VoicePanelControlsDrawerTsx3(props,previous){let[cheapWorkletArrayShallowEqual,VoicePanelModes,scheduleOnRN,setFreeze]=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isDrawer,mode]=props;if(previous!=null&&isDrawer===previous[0]&&mode===previous[1]){return;}if(mode!==VoicePanelModes.PANEL||!isDrawer){scheduleOnRN(setFreeze,true);}else{scheduleOnRN(setFreeze,false);}})" };
const memoResult = react.memo(function LazyContentFreezer(shown) {
  let tmp11;
  let tmp2;
  let tmp3;
  shown = shown.shown;
  const renderContent = shown.renderContent;
  let ref;
  let tmp = _slicedToArray(react.useState(!shown), 2);
  [tmp2, tmp3] = tmp;
  let c2 = tmp3;
  const tmp4 = shown && tmp2;
  if (tmp4) {
    tmp3(false);
  }
  ref = obj.useRef(shown);
  const effect = obj.useEffect(() => {
    let current = ref.current;
    const tmp = ref;
    if (!current) {
      current = shown;
    }
    tmp.current = current;
  });
  const items = [shown];
  const effect1 = obj.useEffect(() => {
    const tmp = shown;
    if (!tmp) {
      _undefined(true);
    }
  }, items);
  const items1 = [renderContent, shown];
  const memo = obj.useMemo(() => renderContent(shown), items1);
  if (useRefValueDefault(ref)) {
    const obj2 = { freeze: tmp2, children: memo };
    tmp11 = React4(react2.Freeze, obj2);
  } else {
    tmp11 = null;
  }
  return tmp11;
});
const memoResult1 = react.memo(function VoicePanelControlsDrawer(openTab) {
  let channelId;
  let gestureSpecs;
  let items8;
  let items9;
  let safeArea;
  let sharedTab;
  let tab;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp6;
  let tmp7;
  let windowDimensions;
  let wrapperSpecs;
  ({ tab, sharedTab, wrapperSpecs, gestureSpecs } = openTab);
  openTab = openTab.openTab;
  let obj = react;
  let tmp = openTab;
  let tmp2 = dependencyMap;
  const context = react.useContext(openTab(11362));
  const mode = context.mode;
  ({ channelId, windowDimensions, safeArea } = context);
  const tmp4 = closure_11();
  const tmp5 = _slicedToArray(react.useState(null == tab), 2);
  [tmp6, tmp7] = tmp5;
  const tmp8 = tab !== sharedTab.get() && tmp6;
  if (tmp8) {
    tmp7(false);
  }
  let items = [closure_14, , , , , , , ];
  const useAnimatedStyle = gestureSpecs(1652).useAnimatedStyle;
  const tmp11 = gestureSpecs(1652);
  items[1] = gestureSpecs(14062).getControlsDrawerOpenWidth;
  items[2] = windowDimensions;
  items[3] = safeArea;
  items[4] = gestureSpecs(5761).withSpring;
  items[5] = wrapperSpecs;
  items[6] = 200;
  items[7] = closure_7;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items;
  class VoicePanelControlsDrawerTsx1 {
    constructor() {
      let num;
      let tmp;
      let width;
      const obj = { width: _undefined(width, _undefined3.get().left, _undefined3.get().right), opacity: tmp(num, c6) };
      width = _undefined2.get().width;
      num = 0;
      tmp = c3;
      if (_undefined4.get().height >= c5) {
        num = 1;
      }
      return obj;
    }
  }
  const items1 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
  VoicePanelControlsDrawerTsx1.__closure = items1;
  VoicePanelControlsDrawerTsx1.__workletHash = 12678028952961;
  VoicePanelControlsDrawerTsx1.__initData = tmp12;
  const animatedStyle = useAnimatedStyle(VoicePanelControlsDrawerTsx1);
  const items2 = [closure_15, wrapperSpecs, mode];
  c0 = undefined;
  c1 = undefined;
  [tmp22, tmp23, tmp24] = items2;
  const tmp10Result = gestureSpecs(1652);
  class VoicePanelControlsDrawerTsx2 {
    constructor() {
      const items = [_undefined.get().drawerMode, _undefined2.get()];
      return items;
    }
  }
  const items3 = [tmp23, tmp24];
  VoicePanelControlsDrawerTsx2.__closure = items3;
  VoicePanelControlsDrawerTsx2.__workletHash = 7594507638980;
  VoicePanelControlsDrawerTsx2.__initData = tmp22;
  const items4 = [closure_16, , , , ];
  const useAnimatedReaction = tmp10Result.useAnimatedReaction;
  items4[1] = gestureSpecs(10210).cheapWorkletArrayShallowEqual;
  items4[2] = closure_8;
  items4[3] = gestureSpecs(1705).scheduleOnRN;
  items4[4] = tmp7;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp25, tmp26, tmp27, tmp28, tmp29] = items4;
  class VoicePanelControlsDrawerTsx3 {
    constructor(arg0, arg1) {
      let tmp5;
      let tmp6;
      const tmp = c0;
      const tmp2 = arg1;
      if (!tmp(arg0, tmp2)) {
        [tmp5, tmp6] = arg0;
        _slicedToArray(arg0, 2);
        const tmp7 = null != arg1 && tmp5 === arg1[0] && tmp6 === arg1[1];
        if (!tmp7) {
          if (tmp6 === _undefined.PANEL) {
            if (tmp5) {
              _undefined2(c3, false);
            }
          }
          _undefined2(c3, true);
        }
      }
    }
  }
  const items5 = [tmp26, tmp27, tmp28, tmp29];
  VoicePanelControlsDrawerTsx3.__closure = items5;
  VoicePanelControlsDrawerTsx3.__workletHash = 8293489565998;
  VoicePanelControlsDrawerTsx3.__initData = tmp25;
  const animatedReaction = useAnimatedReaction(VoicePanelControlsDrawerTsx2, VoicePanelControlsDrawerTsx3);
  const items6 = [openTab];
  const items7 = [gestureSpecs];
  const callback = obj.useCallback((isVisible) => {
    const obj = { isVisible, openTab };
    return React4(VoicePanelVoiceControlsDefault, obj);
  }, items6);
  const callback1 = obj.useCallback(() => {
    const obj = { gestureSpecs };
    return React4(VoicePanelControlsAppLauncherDefault, obj);
  }, items7);
  const obj2 = { style: items8, children: items9 };
  items8 = [tmp4.drawer, animatedStyle];
  const View = tmp(1652).View;
  let tmp34 = null;
  const tmp10Result2 = gestureSpecs(18397);
  const tmp33 = closure_10;
  if (tmp10Result2.isJankScreenReportingEnabled()) {
    const obj3 = { channelId, tab, wrapperSpecs, mode };
    tmp34 = closure_9(tmp(19732), obj3);
  }
  items9 = [tmp34, , , ];
  const obj4 = { shown: !tmp6 && "chat" === tab, renderContent: renderChat };
  items9[1] = closure_9(closure_12, obj4);
  const tmp39 = !tmp6 && "settings" === tab;
  items9[2] = closure_9(closure_12, { shown: tmp39, renderContent: callback });
  const tmp40 = !tmp6 && "app_launcher" === tab;
  items9[3] = closure_9(closure_12, { shown: tmp40, renderContent: callback1 });
  return tmp33(View, obj2);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx");

export default memoResult1;
export const LazyContentFreezer = memoResult;
