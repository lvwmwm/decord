// Module ID: 15855
// Function ID: 122539
// Name: FloatingCTA
// Dependencies: [57, 31, 1348, 10015, 10018, 482, 33, 1324, 689, 4130, 4541, 7498, 3842, 10014, 15743, 5803, 624, 15739, 3991, 11378, 4476, 9891, 4542, 7589, 9642, 2]
// Exports: getFloatingCTATotalViewHeight, renderVoicePanelFloatingCTA

// Module 15855 (FloatingCTA)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import VoicePanelModes from "VoicePanelModes";
import { CALL_TILE_GUTTER } from "CARD_SIZE";
import { ThemeTypes } from "sum";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function FloatingCTA(trailing) {
  trailing = trailing.trailing;
  let obj = Object.create(null);
  obj.trailing = 0;
  const merged = Object.assign(trailing, obj);
  obj = {};
  obj = { experimental_withBlurBackground: true, arrow: null == trailing, trailing };
  const merged1 = Object.assign(merged);
  obj.children = jsx(require(7498) /* RowButtonWrapper */.RowButton, { experimental_withBlurBackground: true, arrow: null == trailing, trailing });
  return jsx(require(4541) /* Stack */.Stack, { experimental_withBlurBackground: true, arrow: null == trailing, trailing });
}
class VoicePanelFloatingCTAContainer {
  constructor(arg0) {
    wrapperSpecs = global.wrapperSpecs;
    accessoryHeights = global.accessoryHeights;
    controlsSpecs = global.controlsSpecs;
    state = global.state;
    cleanUp = global.cleanUp;
    gestureState = global.gestureState;
    tmp = useStateFromStores();
    context = cleanUp.useContext(require("dismissPanel"));
    windowDimensions = context.windowDimensions;
    channelId = context.channelId;
    safeArea = context.safeArea;
    tmp3 = require("useChannelFloatingCTAContent")(channelId);
    obj = require("useGetVisibleContent");
    first = state(obj.useGetDismissibleContent(tmp3), 1)[0];
    c9 = first;
    obj2 = require("defaultAreStatesEqual");
    items = [];
    items[0] = gestureState;
    stateFromStores = obj2.useStateFromStores(items, () => gestureState.getChannel(channelId));
    useStateFromStores = stateFromStores;
    items1 = [, ];
    items1[0] = first;
    items1[1] = stateFromStores;
    memo = cleanUp.useMemo(() => {
      let obj = wrapperSpecs(controlsSpecs[17]);
      obj = { dismissableContent: first, channel: stateFromStores };
      return obj.getDismissableCTAProps(obj);
    }, items1);
    useMemo = memo;
    obj3 = require("useFloatingCTAProps");
    floatingCTAProps = obj3.useFloatingCTAProps(stateFromStores);
    obj4 = require("module_3991");
    class A {
      constructor() {
        obj = require("getControlsDefaultWidth");
        controlsDefaultWidth = obj.getControlsDefaultWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
        num = 1;
        if (state === require("_createForOfIteratorHelperLoose").TransitionStates.YEETED) {
          num = 0;
        }
        obj = { bottom: controlsSpecs.get().height + 16, width: controlsDefaultWidth, marginLeft: -1 * require("t")(controlsDefaultWidth / 2) };
        obj3 = require("withSpring");
        fn = function t(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = outer1_3 === wrapperSpecs(controlsSpecs[20]).TransitionStates.YEETED;
          }
          if (tmp) {
            wrapperSpecs(controlsSpecs[18]).runOnJS(outer1_4)();
            const obj = wrapperSpecs(controlsSpecs[18]);
          }
        };
        obj1 = { state, TransitionStates: require("_createForOfIteratorHelperLoose").TransitionStates, runOnJS: require("module_3991").runOnJS, cleanUp };
        fn.__closure = obj1;
        fn.__workletHash = 7334460639890;
        fn.__initData = outer1_13;
        obj.opacity = obj3.withSpring(num, useMemo, "respect-motion-settings", fn);
        obj2 = {};
        obj6 = require("withSpring");
        obj2.translateX = obj6.withSpring(wrapperSpecs.get().x, windowDimensions);
        items = [, ];
        items[0] = obj2;
        obj3 = {};
        obj8 = require("withSpring");
        if (wrapperSpecs.get().hidden) {
          tmp5 = wrapperSpecs;
          tmp6 = channelId;
          tmp8 = accessoryHeights;
          sum = wrapperSpecs.get().height + channelId;
          y = sum + accessoryHeights.get();
        } else {
          tmp2 = gestureState;
          if (gestureState.get().active) {
            tmp3 = gestureState;
          }
          tmp4 = wrapperSpecs;
          y = wrapperSpecs.get().y;
        }
        obj3.translateY = obj8.withSpring(y, windowDimensions);
        items[1] = obj3;
        obj.transform = items;
        return obj;
      }
    }
    obj = { getControlsDefaultWidth: require("getControlsDefaultWidth").getControlsDefaultWidth, windowDimensions, safeArea, state, TransitionStates: require("_createForOfIteratorHelperLoose").TransitionStates, controlsSpecs, roundToNearestPixel: require("t"), withSpring: require("withSpring").withSpring, OPACITY_CHANGE_PHYSICS: useMemo, runOnJS: require("module_3991").runOnJS, cleanUp, wrapperSpecs, UI_SHOW_HIDE_PHYSICS: windowDimensions, gestureState, CALL_TILE_GUTTER: channelId, accessoryHeights };
    A.__closure = obj;
    A.__workletHash = 3338259366067;
    A.__initData = c12;
    animatedStyle = obj4.useAnimatedStyle(A);
    tmp9 = c9;
    obj1 = { style: items2 };
    items2 = [, ];
    items2[0] = tmp.container;
    items2[1] = animatedStyle;
    tmp10 = require("module_7589");
    if (null != memo) {
      tmp17 = c9;
      tmp18 = accessoryHeights;
      tmp19 = controlsSpecs;
      num = 24;
      obj2 = {};
      obj2.contentTypes = tmp3;
      obj2.children = function children() {
        const merged = Object.assign(memo);
        return first(outer1_14, {});
      };
      tmp11 = c9(require("SelectedDismissibleContent"), obj2);
    } else {
      tmp11 = null;
      if (null != floatingCTAProps) {
        tmp12 = c9;
        tmp13 = FloatingCTA;
        obj3 = {};
        tmp14 = obj3;
        tmp15 = floatingCTAProps;
        merged = Object.assign(floatingCTAProps);
        tmp11 = c9(FloatingCTA, obj3);
      }
    }
    obj1.children = tmp11;
    return tmp9(tmp10, obj1);
  }
}
const UI_SHOW_HIDE_PHYSICS = VoicePanelModes.UI_SHOW_HIDE_PHYSICS;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { zIndex: 1, position: "absolute", bottom: 0, left: "50%", overflow: "hidden", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = {};
let merged = Object.assign(VoicePanelModes.MODE_CHANGE_PHYSICS);
obj1["overshootClamping"] = true;
let closure_12 = { code: "function VoicePanelFloatingCTAContainerTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea,state,TransitionStates,controlsSpecs,roundToNearestPixel,withSpring,OPACITY_CHANGE_PHYSICS,runOnJS,cleanUp,wrapperSpecs,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;const width=getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);const opacity=state===TransitionStates.YEETED?0:1;return{bottom:controlsSpecs.get().height+16,width:width,marginLeft:roundToNearestPixel(width/2)*-1,opacity:withSpring(opacity,OPACITY_CHANGE_PHYSICS,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}" };
let closure_13 = { code: "function VoicePanelFloatingCTAContainerTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelFloatingCTAContainer.tsx");

export default VoicePanelFloatingCTAContainer;
export const getFloatingCTATotalViewHeight = function getFloatingCTATotalViewHeight(chatInputFloating) {
  return require(1324) /* useIsMobileVisualRefreshExperimentEnabled */.resolveRefreshToken(importDefault(689).modules.mobile.TABLE_ROW_HEIGHT, chatInputFloating) + 16;
};
export const renderVoicePanelFloatingCTA = function renderVoicePanelFloatingCTA(arg0, arg1, arg2, arg3) {
  let obj = { theme: ThemeTypes.DARK };
  obj = {};
  const merged = Object.assign(arg1);
  obj["state"] = arg2;
  obj["cleanUp"] = arg3;
  obj.children = <VoicePanelFloatingCTAContainer />;
  return jsx(require(3842) /* ManaContext */.ThemeContextProvider, {}, arg0);
};
