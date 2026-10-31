// Module ID: 19296
// Function ID: 19297
// Name: VoicePanelFloatingCTAContainer
// Dependencies: [32, 19, 4863, 11223, 11226, 1083, 21, 12382, 575, 5014, 6027, 8179, 5080, 11222, 19163, 7570, 563, 19159, 19297, 5095, 13813, 12271, 5637, 7241, 10520, 2]
// Exports: getFloatingCTATotalViewHeight, renderVoicePanelFloatingCTA

// Module 19296 (VoicePanelFloatingCTAContainer)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import native from "native" /* 5080 */;
import spring from "spring" /* 5637 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import RowButton2 from "RowButton" /* 8179 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11226 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12271 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12382 */;
import VoicePanelControlsUtils from "VoicePanelControlsUtils" /* 13813 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 19159 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import createStyles from "createStyles" /* 5014 */;
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
    let cleanUp;
    let hiddenProps;
    let hiddenStyles;
    let items2;
    let state;
    let tmp12Result;
    wrapperSpecs = wrapperSpecs.wrapperSpecs;
    const accessoryHeights = wrapperSpecs.accessoryHeights;
    const controlsSpecs = wrapperSpecs.controlsSpecs;
    const gestureState = wrapperSpecs.gestureState;
    let windowDimensions;
    let stateFromStores;
    ({ state, cleanUp } = wrapperSpecs);
    const tmp3 = controlsSpecs;
    const tmp = stateFromStores();
    const context = windowDimensions.useContext(accessoryHeights(controlsSpecs[13]));
    windowDimensions = context.windowDimensions;
    const channelId = context.channelId;
    const safeArea = context.safeArea;
    const isDockEnabled = context.isDockEnabled;
    const dockMinimizeProgress = context.dockMinimizeProgress;
    const mode = context.mode;
    const tmp5 = accessoryHeights(controlsSpecs[14])(channelId);
    let obj = wrapperSpecs(controlsSpecs[15]);
    const dismissableContent = gestureState(obj.useGetDismissibleContent(tmp5), 1)[0];
    let obj2 = wrapperSpecs(controlsSpecs[16]);
    let items = [channelId];
    stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
    const items1 = [dismissableContent, stateFromStores];
    const memo = windowDimensions.useMemo(() => {
      const obj = VoicePanelFloatingCTAUtils;
      const obj2 = { dismissableContent, channel: stateFromStores };
      return obj.getDismissableCTAProps(obj2);
    }, items1);
    let obj3 = wrapperSpecs(controlsSpecs[17]);
    const floatingCTAProps = obj3.useFloatingCTAProps(stateFromStores);
    ({ hiddenProps, hiddenStyles } = accessoryHeights(controlsSpecs[18])(mode, wrapperSpecs, { state, cleanUp }));
    const tmp10 = accessoryHeights(controlsSpecs[18])(mode, wrapperSpecs, { state, cleanUp });
    let obj4 = wrapperSpecs(controlsSpecs[19]);
    const fn = function w() {
      let items;
      let tmpResult;
      let tmpResult2;
      const getControlsDefaultWidth = VoicePanelControlsUtils.getControlsDefaultWidth;
      VoicePanelControlsUtils;
      const width = windowDimensions.get().width;
      const controlsDefaultWidth = getControlsDefaultWidth(width, safeArea.get().left, safeArea.get().right);
      const sum = wrapperSpecs.get().height + CALL_TILE_GUTTER;
      const sum1 = sum + accessoryHeights.get();
      let tmp7 = sum1;
      if (!wrapperSpecs.get().hidden) {
        if (!gestureState.get().active) {
          let sum2;
          const y = obj.get().y;
          if (isDockEnabled) {
            sum2 = y + dockMinimizeProgress.get() * sum1;
          } else {
            sum2 = y;
          }
          tmp7 = sum2;
        } else {
          tmp7 = sum1;
        }
      }
      const obj3 = { bottom: controlsSpecs.get().height + 16, width: controlsDefaultWidth, marginLeft: -1 * roundToNearestPixelDefault(controlsDefaultWidth / 2), transform: items };
      const obj4 = { translateX: tmpResult.withSpring(wrapperSpecs.get().x, UI_SHOW_HIDE_PHYSICS) };
      items = [obj4, ];
      tmpResult = spring;
      const obj5 = { translateY: tmpResult2.withSpring(tmp7, UI_SHOW_HIDE_PHYSICS) };
      items[1] = obj5;
      tmpResult2 = spring;
      return obj3;
    };
    let obj5 = { getControlsDefaultWidth: wrapperSpecs(controlsSpecs[20]).getControlsDefaultWidth, windowDimensions, safeArea, wrapperSpecs, CALL_TILE_GUTTER: isDockEnabled, accessoryHeights, gestureState, isDockEnabled, dockMinimizeProgress, controlsSpecs, roundToNearestPixel: accessoryHeights(controlsSpecs[21]), withSpring: wrapperSpecs(controlsSpecs[22]).withSpring, UI_SHOW_HIDE_PHYSICS: safeArea };
    fn.__closure = obj5;
    fn.__workletHash = 12226015393352;
    fn.__initData = __initData;
    const animatedStyle = obj4.useAnimatedStyle(fn);
    const obj6 = { style: items2, animatedProps: hiddenProps, children: tmp12Result };
    items2 = [tmp.container, animatedStyle, hiddenStyles];
    const tmp13 = accessoryHeights(controlsSpecs[23]);
    const tmp2 = accessoryHeights;
    if (null != memo) {
      const obj7 = {
        contentTypes: tmp5,
        children() {
            const merged = Object.assign(memo);
            return <FloatingCTA />;
          }
      };
      tmp12Result = tmp12(tmp2(tmp3[24]), obj7);
    } else {
      tmp12Result = null;
      if (null != floatingCTAProps) {
        const obj8 = {};
        let merged = Object.assign(floatingCTAProps);
        tmp12Result = tmp12(memo, obj8);
      }
    }
    return dismissableContent(tmp13, obj6);
  }
}
const UI_SHOW_HIDE_PHYSICS = VoicePanelConstants.UI_SHOW_HIDE_PHYSICS;
const CALL_TILE_GUTTER = VoicePanelCardConstants.CALL_TILE_GUTTER;
const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
let obj = { container: rect };
rect = { zIndex: 1, position: "absolute", bottom: 0, left: "50%", overflow: "hidden", alignItems: "center", borderRadius: nativeDefault.radii.lg };
const authStore = createStyles.createStyles(obj);
const authStore2 = { code: "function VoicePanelFloatingCTAContainerTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea,wrapperSpecs,CALL_TILE_GUTTER,accessoryHeights,gestureState,isDockEnabled,dockMinimizeProgress,controlsSpecs,roundToNearestPixel,withSpring,UI_SHOW_HIDE_PHYSICS}=this.__closure;const width=getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);const offscreenY=wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get();let translateY;if(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop){translateY=offscreenY;}else if(isDockEnabled){translateY=wrapperSpecs.get().y+dockMinimizeProgress.get()*offscreenY;}else{translateY=wrapperSpecs.get().y;}return{bottom:controlsSpecs.get().height+16,width:width,marginLeft:roundToNearestPixel(width/2)*-1,transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(translateY,UI_SHOW_HIDE_PHYSICS)}]};}" };
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
