// Module ID: 19177
// Function ID: 19178
// Name: VoicePanelDockSlot
// Dependencies: [19, 17, 17696, 14855, 21, 12017, 1655, 11253, 11984, 19178, 19180, 19232, 1708, 5939, 14573, 12423, 5497, 12011, 504, 2]

// Module 19177 (VoicePanelDockSlot)
import react_native from "react-native" /* 17 */;
import _mod1655 from "module_1655" /* 1655 */;
import _mod1708 from "module_1708" /* 1708 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5497 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import MainTabsNavigatorPanelContextDefault from "MainTabsNavigatorPanelContext" /* 12011 */;
import VoicePanelSheetMorph from "VoicePanelSheetMorph" /* 12017 */;
import VoicePanelDockSlotStore from "VoicePanelDockSlotStore" /* 14855 */;
import VoicePanelDockGlow from "VoicePanelDockGlow" /* 19178 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 17696 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let _Math, importDefault, sum;

let c9;
let metroImportAll;
let metroImportDefault;
let tmp;
let tmp3;
let tmp4;
let tmp5;
const _modDef1655 = tmp(1655);
const useStateFromSharedValueDefault = tmp(11253);
const VoicePanelDockDefault = tmp(19180);
function VoicePanelDockSlotDock(micLive) {
  let dockMinimizeProgress;
  let dockTouched;
  let dockTouched2;
  let isDockInLayout;
  let items11;
  let items12;
  let items13;
  let obj6;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp24;
  let tmp25;
  let tmp33;
  let tmp34;
  let tmp39;
  let tmp40;
  let wrapperOffset;
  micLive = micLive.micLive;
  importDefault = undefined;
  let tmp = importDefault;
  const context = react.useContext(VoicePanelStateContextDefault);
  const isDockSlotEmpty = context.isDockSlotEmpty;
  ({ dockMinimizeProgress, dockTouched: dockTouched2, wrapperOffset } = context);
  ({ dockTouched, isDockInLayout } = context);
  const useSharedValue = _mod1655.useSharedValue;
  _mod1655;
  let value = dockMinimizeProgress.get();
  let value2 = dockTouched2.get();
  const tmp6 = getSlotDockShouldMount;
  if (typeof getSlotDockShouldMount === "function") {
    const gestureActive = wrapperOffset.get().gestureActive;
    if (!value2) {
      value2 = value >= require;
    }
    let flag = value2;
    if (!flag) {
      flag = !tmp10 && null;
    }
    if (flag == null) {
      flag = true;
    }
    const sharedValue = useSharedValue(flag);
    const items = [closure_12, tmp6, dockMinimizeProgress, dockTouched2, wrapperOffset];
    let c0;
    let c1;
    let c2;
    let c3;
    [tmp17, tmp18, tmp19, tmp20, tmp21] = items;
    const tmp4Result = _mod1655;
    class VoicePanelDockSlotTsx2 {
      constructor() {
        const value = _undefined2.get();
        const value2 = _undefined3.get();
        return _undefined(value, value2, _undefined4.get());
      }
    }
    const items1 = [tmp18, tmp19, tmp20, tmp21];
    VoicePanelDockSlotTsx2.__closure = items1;
    VoicePanelDockSlotTsx2.__workletHash = 10243184957928;
    VoicePanelDockSlotTsx2.__initData = tmp17;
    const items2 = [closure_13, sharedValue];
    c0 = undefined;
    [tmp24, tmp25] = items2;
    class VoicePanelDockSlotTsx3 {
      constructor(arg0) {
        const tmp = null != arg0 && arg0 !== _undefined.get();
        if (tmp) {
          const result = _undefined.set(arg0);
        }
      }
    }
    const items3 = [tmp25];
    VoicePanelDockSlotTsx3.__closure = items3;
    VoicePanelDockSlotTsx3.__workletHash = 4300785804393;
    VoicePanelDockSlotTsx3.__initData = tmp24;
    const animatedReaction = tmp4Result.useAnimatedReaction(VoicePanelDockSlotTsx2, VoicePanelDockSlotTsx3);
    const tmp27 = useStateFromSharedValueDefault(sharedValue);
    importDefault = tmp27;
    const items4 = [isDockSlotEmpty, tmp27];
    const effect = obj.useEffect(() => {
      const tmp = closure_1;
      if (!tmp) {
        const result = isDockSlotEmpty.set(true);
      }
    }, items4);
    const items5 = [isDockSlotEmpty];
    const effect1 = obj.useEffect(() => () => isDockSlotEmpty.set(false), items5);
    const items6 = [isDockSlotEmpty];
    const callback = obj.useCallback(() => isDockSlotEmpty.set(false), items6);
    const items7 = [closure_14, isDockInLayout];
    c0 = undefined;
    [tmp33, tmp34] = items7;
    const tmp4Result3 = _mod1655;
    class VoicePanelDockSlotTsx4 {
      constructor() {
        let opacity = 0;
        if (_undefined.get()) {
          opacity = 1;
        }
        return { opacity };
      }
    }
    const items8 = [tmp34];
    VoicePanelDockSlotTsx4.__closure = items8;
    VoicePanelDockSlotTsx4.__workletHash = 3748852719938;
    VoicePanelDockSlotTsx4.__initData = tmp33;
    const animatedStyle = tmp4Result3.useAnimatedStyle(VoicePanelDockSlotTsx4);
    _mod1655;
    const items9 = [closure_15, dockTouched];
    c0 = undefined;
    [tmp39, tmp40] = items9;
    class VoicePanelDockSlotTsx5 {
      constructor() {
        let opacity = 1;
        if (_undefined.get()) {
          opacity = 0;
        }
        return { opacity };
      }
    }
    const items10 = [tmp40];
    VoicePanelDockSlotTsx5.__closure = items10;
    VoicePanelDockSlotTsx5.__workletHash = 265274343811;
    VoicePanelDockSlotTsx5.__initData = tmp39;
    let tmp41 = null;
    if (tmp27) {
      const obj2 = { children: items11 };
      const obj3 = { micLive };
      items11 = [metroImportDefault(VoicePanelDockGlow.VoicePanelDockGlow, obj3), , ];
      const obj4 = { style: items12, pointerEvents: "box-none", onLayout: callback, children: metroImportDefault(VoicePanelDockDefault, { isInSlot: true }) };
      items12 = [StyleSheet.absoluteFill, animatedStyle];
      const View = _modDef1655.View;
      items11[1] = metroImportDefault(View, obj4);
      const obj5 = { style: items13, pointerEvents: "none", children: metroImportDefault(VoicePanelDockGlow.VoicePanelDockBottomLine, obj6) };
      items13 = [StyleSheet.absoluteFill, ];
      class VoicePanelDockSlotTsx2 {
        constructor() {
          const value = _undefined2.get();
          const value2 = _undefined3.get();
          return _undefined(value, value2, _undefined4.get());
        }
      }
      const View2 = _modDef1655.View;
      obj6 = { micLive };
      items11[2] = metroImportDefault(View2, obj5);
      tmp41 = React4(metroImportAll, obj2);
    }
    return tmp41;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function VoicePanelDockSlotContent(width) {
  let View;
  let channelId;
  let dockEntryProgress;
  let dockHeight;
  let dockState;
  let dockTouched;
  let isDockInLayout;
  let isQuestBarExpanded;
  let items10;
  let obj4;
  let safeArea;
  let sheetExitProgress;
  let str;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp9;
  let wrapperDimensions;
  let wrapperDimensions2;
  ({ dockState, isQuestBarExpanded } = width);
  wrapperDimensions = undefined;
  let animatedRef;
  const dockRestWidth = dockState.dockRestWidth;
  ({ isDockInLayout, wrapperDimensions } = dockState);
  let sharedValue;
  let derivedValue;
  let derivedValue1;
  let tmp = dockRestWidth;
  let tmp2 = sharedValue;
  width = width.width;
  ({ channelId, dockEntryProgress, dockHeight, dockTouched, sheetExitProgress, safeArea, wrapperDimensions: wrapperDimensions2 } = dockState);
  let obj = dockRestWidth(sharedValue[6]);
  sharedValue = obj.useSharedValue(0);
  let obj2 = dockRestWidth(sharedValue[6]);
  let items = [closure_17, safeArea];
  let c0;
  [tmp4, tmp5] = items;
  class VoicePanelDockSlotTsx6 {
    constructor() {
      const obj = { left: 0, right: 0 };
      const merged = Object.assign(_undefined.get());
      return obj;
    }
  }
  let items1 = [tmp5];
  VoicePanelDockSlotTsx6.__closure = items1;
  VoicePanelDockSlotTsx6.__workletHash = 8625682694130;
  VoicePanelDockSlotTsx6.__initData = tmp4;
  derivedValue = obj2.useDerivedValue(VoicePanelDockSlotTsx6);
  const items2 = [closure_18, wrapperDimensions2, sharedValue];
  c0 = undefined;
  let c1;
  [tmp7, tmp8, tmp9] = items2;
  const tmpResult = tmp(tmp2[6]);
  class VoicePanelDockSlotTsx7 {
    constructor() {
      const obj = { drawerX: 0, drawerWidth: _undefined2.get() };
      const merged = Object.assign(_undefined.get());
      return obj;
    }
  }
  const items3 = [tmp8, tmp9];
  VoicePanelDockSlotTsx7.__closure = items3;
  VoicePanelDockSlotTsx7.__workletHash = 16889293167603;
  VoicePanelDockSlotTsx7.__initData = tmp7;
  derivedValue1 = tmpResult.useDerivedValue(VoicePanelDockSlotTsx7);
  const items4 = [dockState, derivedValue1, derivedValue, sharedValue];
  const memo = animatedRef.useMemo(() => {
    const obj = { safeArea: derivedValue, wrapperDimensions: derivedValue1, dockRestWidth: sharedValue, dockSheetWidth: sharedValue };
    const merged = Object.assign(dockState);
    return obj;
  }, items4);
  const tmp13 = wrapperDimensions(tmp2[11])(channelId);
  const tmpResult4 = tmp(tmp2[6]);
  animatedRef = tmpResult4.useAnimatedRef();
  const items5 = [dockRestWidth, animatedRef, sharedValue, wrapperDimensions];
  const callback = animatedRef.useCallback((nativeEvent) => {
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    let result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    const items = [closure_19, , , , ];
    const scheduleOnUI = _mod1708.scheduleOnUI;
    items[1] = _mod1655.measure;
    items[2] = animatedRef;
    items[3] = dockRestWidth;
    items[4] = wrapperDimensions;
    let c0;
    let c1;
    let c2;
    let c3;
    [tmp3, tmp4, tmp5, tmp6, tmp7] = items;
    class VoicePanelDockSlotTsx8 {
      constructor() {
        tmp = closure_0(closure_1);
        if (null != tmp) {
          tmp2 = closure_2;
          tmp3 = globalThis;
          _Math = Math;
          tmp5 = closure_3;
          sum = tmp.pageX + tmp.width;
          result = closure_2.set(Math.min(sum, closure_3.get().drawerWidth));
        }
        return;
      }
    }
    const items1 = [tmp4, tmp5, tmp6, tmp7];
    VoicePanelDockSlotTsx8.__closure = items1;
    VoicePanelDockSlotTsx8.__workletHash = 2127528815394;
    VoicePanelDockSlotTsx8.__initData = tmp3;
    scheduleOnUI(VoicePanelDockSlotTsx8);
  }, items5);
  const items6 = [closure_20, , , ];
  const useDerivedValue = tmp(tmp2[6]).useDerivedValue;
  tmp(tmp2[6]);
  items6[1] = tmp(tmp2[13]).withSpring;
  items6[2] = isQuestBarExpanded;
  items6[3] = tmp(tmp2[5]).DOCK_SPACE_SPRING_CONFIG;
  c0 = undefined;
  c1 = undefined;
  let c2;
  [tmp17, tmp18, tmp19, tmp20] = items6;
  class VoicePanelDockSlotTsx9 {
    constructor() {
      let num = 0;
      const tmp = c0;
      if (c1) {
        num = 1;
      }
      return tmp(num, c2);
    }
  }
  const items7 = [tmp18, tmp19, tmp20];
  VoicePanelDockSlotTsx9.__closure = items7;
  VoicePanelDockSlotTsx9.__workletHash = 6885308251294;
  VoicePanelDockSlotTsx9.__initData = tmp17;
  const derivedValue2 = useDerivedValue(VoicePanelDockSlotTsx9);
  const tmp22 = wrapperDimensions(tmp2[7])(isDockInLayout) && !isQuestBarExpanded;
  const items8 = [closure_21, dockHeight, sheetExitProgress, derivedValue2, dockEntryProgress, isQuestBarExpanded, isDockInLayout, dockTouched];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items8;
  const tmpResult6 = tmp(tmp2[6]);
  class VoicePanelDockSlotTsx10 {
    constructor() {
      let diff;
      let items;
      const value = _undefined.get();
      const obj = { height: value, opacity: 1 - _undefined3.get(), transform: items, pointerEvents: null };
      const tmp2 = _undefined2.get() > 0;
      const obj2 = { translateY: (diff + _undefined2.get()) * value };
      diff = 1 - _undefined4.get();
      items = [obj2];
      if (!tmp2) {
        let str2;
        const tmp4 = c4;
        if (!tmp4) {
          str2 = "box-none";
          if (!_undefined5.get()) {
            str2 = "box-none";
          }
        }
        obj.pointerEvents = str2;
        return obj;
      }
      str2 = "none";
    }
  }
  const items9 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30];
  VoicePanelDockSlotTsx10.__closure = items9;
  VoicePanelDockSlotTsx10.__workletHash = 12274507649960;
  VoicePanelDockSlotTsx10.__initData = tmp23;
  const animatedStyle = tmpResult6.useAnimatedStyle(VoicePanelDockSlotTsx10);
  const obj3 = { value: memo, children: closure_7(View, obj4) };
  const Provider = tmp12(tmp2[8]).Provider;
  obj4 = { ref: animatedRef, style: items10, onLayout: callback, accessibilityElementsHidden: !tmp22, importantForAccessibility: str, children: closure_7(VoicePanelDockSlotDock, { micLive: tmp13 }) };
  items10 = [slot.slot, { width }, animatedStyle];
  str = "no-hide-descendants";
  View = tmp12(tmp2[6]).View;
  if (tmp22) {
    str = "auto";
  }
  return closure_7(Provider, obj3);
}
const StyleSheet = react_native.StyleSheet;
const useVoicePanelDockState = VoicePanelDockSlotStore.useVoicePanelDockState;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
const slot = StyleSheet.create({ slot: { position: "absolute", left: 0, bottom: 0 } });
let items = [{ code: "(function getSlotDockShouldMount_VoicePanelDockSlotTsx1(progress,isTouched,{gestureActive:gestureActive}){let[SLOT_DOCK_MOUNT_PROGRESS,SHEET_MORPH_PHYSICS]=this.__closure;if(isTouched||progress>=SLOT_DOCK_MOUNT_PROGRESS)return true;if(!gestureActive&&progress<=SHEET_MORPH_PHYSICS.restDisplacementThreshold)return false;return null;})" }, 0.5, VoicePanelSheetMorph.SHEET_MORPH_PHYSICS];
let c0;
let c1;
[tmp3, tmp4, tmp5] = items;
function getSlotDockShouldMount(arg0, arg1, gestureActive) {
  let tmp = arg1;
  gestureActive = gestureActive.gestureActive;
  if (!arg1) {
    tmp = arg0 >= c0;
  }
  let tmp3 = tmp;
  if (!tmp3) {
    tmp3 = !tmp4 && null;
  }
  return tmp3;
}
let items1 = [tmp4, tmp5];
getSlotDockShouldMount.__closure = items1;
getSlotDockShouldMount.__workletHash = 1131182004926;
getSlotDockShouldMount.__initData = tmp3;
let closure_12 = { code: "(function VoicePanelDockSlotTsx2(){let[getSlotDockShouldMount,dockMinimizeProgress,dockTouched,wrapperOffset]=this.__closure;return getSlotDockShouldMount(dockMinimizeProgress.get(),dockTouched.get(),wrapperOffset.get());})" };
let closure_13 = { code: "(function VoicePanelDockSlotTsx3(next){let[shouldMount]=this.__closure;if(next!=null&&next!==shouldMount.get()){shouldMount.set(next);}})" };
let closure_14 = { code: "(function VoicePanelDockSlotTsx4(){let[isDockInLayout]=this.__closure;return{opacity:isDockInLayout.get()?1:0};})" };
let closure_15 = { code: "(function VoicePanelDockSlotTsx5(){let[dockTouched]=this.__closure;return{opacity:dockTouched.get()?0:1};})" };
let closure_17 = { code: "(function VoicePanelDockSlotTsx6(){let[safeArea]=this.__closure;return{...safeArea.get(),left:0,right:0};})" };
let closure_18 = { code: "(function VoicePanelDockSlotTsx7(){let[wrapperDimensions,slotWidth]=this.__closure;return{...wrapperDimensions.get(),drawerX:0,drawerWidth:slotWidth.get()};})" };
let closure_19 = { code: "(function VoicePanelDockSlotTsx8(){let[measure,slotRef,dockRestWidth,wrapperDimensions]=this.__closure;const frame=measure(slotRef);if(frame==null)return;dockRestWidth.set(Math.min(frame.pageX+frame.width,wrapperDimensions.get().drawerWidth));})" };
let closure_20 = { code: "(function VoicePanelDockSlotTsx9(){let[withSpring,isQuestBarExpanded,DOCK_SPACE_SPRING_CONFIG]=this.__closure;return withSpring(isQuestBarExpanded?1:0,DOCK_SPACE_SPRING_CONFIG);})" };
let closure_21 = { code: "(function VoicePanelDockSlotTsx10(){let[dockHeight,sheetExitProgress,questBarHideProgress,dockEntryProgress,isQuestBarExpanded,isDockInLayout,dockTouched]=this.__closure;const height=dockHeight.get();const isLeaving=sheetExitProgress.get()>0;return{height:height,opacity:1-questBarHideProgress.get(),transform:[{translateY:(1-dockEntryProgress.get()+sheetExitProgress.get())*height}],pointerEvents:!isLeaving&&!isQuestBarExpanded&&(isDockInLayout.get()||dockTouched.get())?'box-none':'none'};})" };
const memoResult = react.memo(function VoicePanelDockSlot(placement) {
  placement = placement.placement;
  const obj = placement(14573);
  const isMobileRTCV2Enabled = obj.useIsMobileRTCV2Enabled("VoicePanelDockSlot");
  const tmp4 = useVoicePanelDockState();
  const obj2 = placement(12423);
  const drawerWidth = obj2.useDrawerWidth({ whileSliding: "wider" });
  let width = useBaseAppContainerDimensionsDefault().width;
  const isNavigatorPanelsBesideChannelList = react.useContext(MainTabsNavigatorPanelContextDefault).isNavigatorPanelsBesideChannelList;
  const tmp6 = undefined !== isNavigatorPanelsBesideChannelList && isNavigatorPanelsBesideChannelList;
  placement(504);
  [][0] = placement;
  let tmp11Result = null;
  if (isMobileRTCV2Enabled) {
    tmp11Result = null;
    if (null != tmp4) {
      tmp11Result = null;
      if (tmp6 === "channel-list" === placement) {
        const obj3 = { dockState: tmp4, width, isQuestBarExpanded: tmp8 };
        const tmp11 = closure_7;
        const tmp12 = VoicePanelDockSlotContent;
        if ("channel-list" === placement) {
          width = drawerWidth;
        }
        tmp11Result = tmp11(tmp12, obj3, tmp4.channelId);
      }
    }
  }
  return tmp11Result;
});
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockSlot.tsx");

export default memoResult;
