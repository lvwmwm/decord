// Module ID: 19461
// Function ID: 19462
// Name: VoicePanelFloatingCTAContainer
// Dependencies: [32, 19, 4990, 11360, 11363, 1083, 21, 12658, 575, 5141, 6147, 8303, 5207, 11359, 19328, 7694, 563, 19324, 19462, 1652, 13959, 12547, 5757, 10650, 2]
// Exports: getFloatingCTATotalViewHeight, renderVoicePanelFloatingCTA

// Module 19461 (VoicePanelFloatingCTAContainer)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import native from "native" /* 5207 */;
import Stack_Stack from "Stack/Stack" /* 6147 */;
import RowButton2 from "RowButton" /* 8303 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11360 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11363 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12658 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 19324 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let rect;
function FloatingCTA(trailing) {
  trailing = trailing.trailing;
  const merged = Object.assign(trailing, Object.assign({ trailing: 0 }));
  const Stack = Stack_Stack.Stack;
  const RowButton = RowButton2.RowButton;
  const merged1 = Object.assign(merged);
  return <Stack>{null}</Stack>;
}
class VoicePanelFloatingCTAContainer {
  constructor(wrapperSpecs) {
    let accessoryHeights;
    let cleanUp;
    let controlsSpecs;
    let dockMinimizeProgress;
    let gestureState;
    let hiddenProps;
    let hiddenStyles;
    let isDockEnabled;
    let mode;
    let safeArea;
    let state;
    let tmp12;
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
    let tmp25;
    let tmp27Result;
    let windowDimensions;
    wrapperSpecs = wrapperSpecs.wrapperSpecs;
    let dismissableContent;
    let stateFromStores;
    let memo;
    ({ accessoryHeights, controlsSpecs, state, cleanUp, gestureState } = wrapperSpecs);
    let tmp = closure_10();
    const context = react.useContext(dismissableContent(stateFromStores[13]));
    const channelId = context.channelId;
    ({ windowDimensions, safeArea, mode, isDockEnabled, dockMinimizeProgress } = context);
    const tmp5 = dismissableContent(stateFromStores[14])(channelId);
    let obj = channelId(stateFromStores[15]);
    dismissableContent = memo(obj.useGetDismissibleContent(tmp5), 1)[0];
    let obj2 = channelId(stateFromStores[16]);
    let items = [ChannelStore];
    stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
    const items1 = [dismissableContent, stateFromStores];
    memo = react.useMemo(() => {
      const obj = VoicePanelFloatingCTAUtils;
      const obj2 = { dismissableContent, channel: stateFromStores };
      return obj.getDismissableCTAProps(obj2);
    }, items1);
    let obj3 = channelId(stateFromStores[17]);
    const floatingCTAProps = obj3.useFloatingCTAProps(stateFromStores);
    ({ hiddenProps, hiddenStyles } = dismissableContent(stateFromStores[18])(mode, wrapperSpecs, { state, cleanUp }));
    dismissableContent(stateFromStores[18])(mode, wrapperSpecs, { state, cleanUp });
    const items2 = [closure_12, , , , , , , , , , , , , ];
    const useAnimatedStyle = channelId(stateFromStores[19]).useAnimatedStyle;
    channelId(stateFromStores[19]);
    items2[1] = channelId(stateFromStores[20]).getControlsDefaultWidth;
    items2[2] = windowDimensions;
    items2[3] = safeArea;
    items2[4] = wrapperSpecs;
    items2[5] = CALL_TILE_GUTTER;
    items2[6] = accessoryHeights;
    items2[7] = gestureState;
    items2[8] = isDockEnabled;
    items2[9] = dockMinimizeProgress;
    items2[10] = controlsSpecs;
    items2[11] = dismissableContent(stateFromStores[21]);
    items2[12] = channelId(stateFromStores[22]).withSpring;
    items2[13] = UI_SHOW_HIDE_PHYSICS;
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
    let c11;
    let c12;
    [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items2;
    class VoicePanelFloatingCTAContainerTsx1 {
      constructor() {
        let items;
        const width = _undefined2.get().width;
        const tmp = _undefined(width, _undefined3.get().left, _undefined3.get().right);
        const sum = _undefined4.get().height + c4;
        const sum1 = sum + _undefined5.get();
        let tmp4 = sum1;
        if (!_undefined4.get().hidden) {
          if (!_undefined6.get().active) {
            let sum2;
            const y = obj.get().y;
            if (c7) {
              sum2 = y + _undefined7.get() * sum1;
            } else {
              sum2 = y;
            }
            tmp4 = sum2;
          } else {
            tmp4 = sum1;
          }
        }
        const obj3 = { bottom: _undefined8.get().height + 16, width: tmp, marginLeft: -1 * _undefined9(tmp / 2), transform: items };
        items = [{ translateX: _undefined10(_undefined4.get().x, c12) }, ];
        ({ translateX: _undefined10(_undefined4.get().x, c12) });
        items[1] = { translateY: _undefined10(tmp4, c12) };
        ({ translateY: _undefined10(tmp4, c12) });
        return obj3;
      }
    }
    const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
    VoicePanelFloatingCTAContainerTsx1.__closure = items3;
    VoicePanelFloatingCTAContainerTsx1.__workletHash = 6234134411441;
    VoicePanelFloatingCTAContainerTsx1.__initData = tmp12;
    const animatedStyle = useAnimatedStyle(VoicePanelFloatingCTAContainerTsx1);
    const items4 = [tmp.container, animatedStyle, hiddenStyles];
    const View = tmp2(tmp3[19]).View;
    if (null != memo) {
      const obj5 = {
        contentTypes: tmp5,
        children() {
            const merged = Object.assign(memo);
            return <FloatingCTA />;
          }
      };
      tmp27Result = tmp27(tmp2(tmp3[23]), obj5);
    } else {
      tmp27Result = null;
      if (null != floatingCTAProps) {
        const obj6 = {};
        let merged = Object.assign(floatingCTAProps);
        tmp27Result = tmp27(FloatingCTA, obj6);
      }
    }
    return <View style={items4} animatedProps={hiddenProps}>{tmp27Result}</View>;
  }
}
const UI_SHOW_HIDE_PHYSICS = VoicePanelConstants.UI_SHOW_HIDE_PHYSICS;
const CALL_TILE_GUTTER = VoicePanelCardConstants.CALL_TILE_GUTTER;
const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
let obj = { container: rect };
rect = { zIndex: 1, position: "absolute", bottom: 0, left: "50%", overflow: "hidden", alignItems: "center", borderRadius: nativeDefault.radii.lg };
const authStore = createStyles.createStyles(obj);
let closure_12 = { code: "(function VoicePanelFloatingCTAContainerTsx1(){let[getControlsDefaultWidth,windowDimensions,safeArea,wrapperSpecs,CALL_TILE_GUTTER,accessoryHeights,gestureState,isDockEnabled,dockMinimizeProgress,controlsSpecs,roundToNearestPixel,withSpring,UI_SHOW_HIDE_PHYSICS]=this.__closure;const width=getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);const offscreenY=wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get();let translateY;if(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop){translateY=offscreenY;}else if(isDockEnabled){translateY=wrapperSpecs.get().y+dockMinimizeProgress.get()*offscreenY;}else{translateY=wrapperSpecs.get().y;}return{bottom:controlsSpecs.get().height+16,width:width,marginLeft:roundToNearestPixel(width/2)*-1,transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(translateY,UI_SHOW_HIDE_PHYSICS)}]};})" };
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelFloatingCTAContainer.tsx");

export default VoicePanelFloatingCTAContainer;
export function getFloatingCTATotalViewHeight() {
  const obj = MobileVisualRefreshExperiment;
  return obj.resolveRefreshToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT) + 16;
}
export function renderVoicePanelFloatingCTA(arg0, arg1, state, cleanUp) {
  const ThemeContextProvider = native.ThemeContextProvider;
  const merged = Object.assign(arg1);
  return <ThemeContextProvider key={arg0} theme={ThemeTypes.DARK}>{null}</ThemeContextProvider>;
}
