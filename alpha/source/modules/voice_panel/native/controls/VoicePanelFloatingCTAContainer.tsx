// Module ID: 19240
// Function ID: 19241
// Name: VoicePanelFloatingCTAContainer
// Dependencies: [32, 19, 4858, 11204, 11207, 1083, 21, 12344, 575, 5009, 6022, 8171, 5075, 11203, 19114, 7564, 563, 19110, 19241, 5090, 13778, 12233, 5632, 7235, 10500, 2]
// Exports: getFloatingCTATotalViewHeight, renderVoicePanelFloatingCTA

// Module 19240 (VoicePanelFloatingCTAContainer)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import native from "native" /* 5075 */;
import spring from "spring" /* 5632 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import RowButton2 from "RowButton" /* 8171 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11204 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11207 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12233 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12344 */;
import VoicePanelControlsUtils from "VoicePanelControlsUtils" /* 13778 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 19110 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import createStyles from "createStyles" /* 5009 */;
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
    let first;
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
    ({ state, cleanUp } = wrapperSpecs);
    const tmp = closure_10();
    const tmp3 = controlsSpecs;
    const context = windowDimensions.useContext(accessoryHeights(controlsSpecs[13]));
    windowDimensions = context.windowDimensions;
    const channelId = context.channelId;
    const safeArea = context.safeArea;
    const mode = context.mode;
    const tmp5 = accessoryHeights(controlsSpecs[14])(channelId);
    let obj = wrapperSpecs(controlsSpecs[15]);
    CALL_TILE_GUTTER = gestureState(obj.useGetDismissibleContent(tmp5), 1)[0];
    let obj2 = wrapperSpecs(controlsSpecs[16]);
    let items = [channelId];
    const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
    const items1 = [CALL_TILE_GUTTER, stateFromStores];
    const memo = windowDimensions.useMemo(() => {
      const obj = VoicePanelFloatingCTAUtils;
      const obj2 = { dismissableContent, channel: stateFromStores };
      return obj.getDismissableCTAProps(obj2);
    }, items1);
    let obj3 = wrapperSpecs(controlsSpecs[17]);
    const floatingCTAProps = obj3.useFloatingCTAProps(stateFromStores);
    ({ hiddenProps, hiddenStyles } = accessoryHeights(controlsSpecs[18])(mode, wrapperSpecs, { state, cleanUp }));
    accessoryHeights(controlsSpecs[18])(mode, wrapperSpecs, { state, cleanUp });
    const obj4 = wrapperSpecs(controlsSpecs[19]);
    const fn = function f() {
      let items;
      let obj3;
      let y;
      const getControlsDefaultWidth = VoicePanelControlsUtils.getControlsDefaultWidth;
      VoicePanelControlsUtils;
      const width = windowDimensions.get().width;
      const controlsDefaultWidth = getControlsDefaultWidth(width, safeArea.get().left, safeArea.get().right);
      const obj = { bottom: controlsSpecs.get().height + 16, width: controlsDefaultWidth, marginLeft: -1 * roundToNearestPixelDefault(controlsDefaultWidth / 2), transform: items };
      const obj2 = { translateX: obj3.withSpring(wrapperSpecs.get().x, UI_SHOW_HIDE_PHYSICS) };
      items = [obj2, ];
      obj3 = spring;
      const withSpring = spring.withSpring;
      spring;
      if (wrapperSpecs.get().hidden) {
        const sum = obj4.get().height + CALL_TILE_GUTTER;
        y = sum + accessoryHeights.get();
      } else {
        y = obj4.get().y;
      }
      items[1] = { translateY: withSpring(y, UI_SHOW_HIDE_PHYSICS) };
      ({ translateY: withSpring(y, UI_SHOW_HIDE_PHYSICS) });
      return obj;
    };
    const obj5 = { getControlsDefaultWidth: wrapperSpecs(controlsSpecs[20]).getControlsDefaultWidth, windowDimensions, safeArea, controlsSpecs, roundToNearestPixel: accessoryHeights(controlsSpecs[21]), withSpring: wrapperSpecs(controlsSpecs[22]).withSpring, wrapperSpecs, UI_SHOW_HIDE_PHYSICS: safeArea, gestureState, CALL_TILE_GUTTER, accessoryHeights };
    fn.__closure = obj5;
    fn.__workletHash = 10861017326398;
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
        tmp12Result = tmp12(FloatingCTA, obj8);
      }
    }
    return memo(tmp13, obj6);
  }
}
const UI_SHOW_HIDE_PHYSICS = VoicePanelConstants.UI_SHOW_HIDE_PHYSICS;
let CALL_TILE_GUTTER = VoicePanelCardConstants.CALL_TILE_GUTTER;
const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
let obj = { container: rect };
rect = { zIndex: 1, position: "absolute", bottom: 0, left: "50%", overflow: "hidden", alignItems: "center", borderRadius: nativeDefault.radii.lg };
const authStore = createStyles.createStyles(obj);
const authStore2 = { code: "function VoicePanelFloatingCTAContainerTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea,controlsSpecs,roundToNearestPixel,withSpring,wrapperSpecs,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;const width=getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);return{bottom:controlsSpecs.get().height+16,width:width,marginLeft:roundToNearestPixel(width/2)*-1,transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}" };
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
