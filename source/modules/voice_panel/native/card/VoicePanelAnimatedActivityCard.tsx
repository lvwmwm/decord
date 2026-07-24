// Module ID: 15871
// Function ID: 122532
// Name: VoicePanelAnimatedActivityCardInner
// Dependencies: [57, 31, 1347, 10568, 1348, 10047, 10045, 653, 4155, 33, 4130, 689, 10046, 15694, 566, 15872, 10515, 5468, 10627, 5462, 5482, 9419, 13044, 3991, 10561, 5217, 1450, 10629, 7678, 15873, 10630, 15874, 15875, 15879, 3842, 2]

// Module 15871 (VoicePanelAnimatedActivityCardInner)
import _slicedToArray from "_slicedToArray";
import importAllResult from "ActivitiesDebugOverlay";
import closure_5 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import VoicePanelModes from "VoicePanelModes";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { ThemeTypes } from "ME";
import items3 from "items3";
import jsxProd from "ActivityActionOverlay";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_8;
let closure_9;
const require = arg1;
function VoicePanelAnimatedActivityCardInner(applicationId) {
  applicationId = applicationId.applicationId;
  const sharedVisible = applicationId.sharedVisible;
  let guild_id;
  let first;
  let gridOrientationLockState;
  let focusedOrientationLockState;
  let c16;
  let callback;
  let first1;
  let c19;
  let embeddedActivityParticipantId;
  let callback1;
  let c22;
  let callback2;
  let isTabletActivitySurface;
  let backgroundColor;
  let tmp2 = channelId(focused.useState(0), 2);
  const dependencyMap = tmp2[1];
  const context = focused.useContext(sharedVisible(10046));
  channelId = context.channelId;
  focused = context.focused;
  const layoutManager = context.layoutManager;
  let mode = context.mode;
  const windowDimensions = context.windowDimensions;
  const hideControls = context.hideControls;
  const controlsSpecs = context.controlsSpecs;
  let tmp4 = sharedVisible(15694)();
  const VoicePanelControlsModes = tmp4;
  let obj = applicationId(566);
  const items = [windowDimensions];
  const stateFromStores = obj.useStateFromStores(items, () => windowDimensions.getChannel(channelId));
  const items1 = [stateFromStores];
  guild_id = undefined;
  const memo = focused.useMemo(() => ({ channel: stateFromStores, type: "channel" }), items1);
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  let obj1 = applicationId(15872);
  let guild_id1;
  if (null != stateFromStores) {
    guild_id1 = stateFromStores.guild_id;
  }
  let tmp9 = null;
  if (null != guild_id1) {
    tmp9 = guild_id1;
  }
  const activityShelfItemData = obj1.useActivityShelfItemData(tmp9, applicationId);
  const items2 = [guild_id];
  const effect = focused.useEffect(() => {
    let obj = applicationId(10515);
    obj = { guildId: guild_id };
    const shelf = obj.fetchShelf(obj);
  }, items2);
  const items3 = [applicationId];
  first = channelId(sharedVisible(5468)(items3), 1)[0];
  let obj2 = applicationId(566);
  const items4 = [layoutManager];
  const items5 = [applicationId];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items4, () => ({ gridOrientationLockState: layoutManager.getGridOrientationLockStateForApp(applicationId), focusedOrientationLockState: layoutManager.getOrientationLockStateForApp(applicationId) }), items5);
  gridOrientationLockState = stateFromStoresObject.gridOrientationLockState;
  focusedOrientationLockState = stateFromStoresObject.focusedOrientationLockState;
  const tmp14 = sharedVisible(10627)();
  let obj3 = applicationId(566);
  const items6 = [layoutManager];
  const stateFromStores1 = obj3.useStateFromStores(items6, () => {
    const embeddedActivitiesForChannel = layoutManager.getEmbeddedActivitiesForChannel(channelId);
    return embeddedActivitiesForChannel.find((applicationId) => {
      let id;
      if (null != outer1_13) {
        id = outer1_13.id;
      }
      return applicationId.applicationId === id;
    });
  });
  let tmp = callback();
  let obj4 = applicationId(9419);
  let tmp18 = null != tmp14;
  const analyticsContext = obj4.useAnalyticsContext();
  if (tmp18) {
    let id;
    if (null != first) {
      id = first.id;
    }
    tmp18 = tmp14.id === id;
  }
  if (!tmp18) {
    let found;
    if (null != stateFromStores1) {
      const participants = stateFromStores1.participants;
      if (null != participants) {
        found = participants.find((userId) => applicationId(13044).isActivityParticipantCurrentUserCurrentSession(userId));
      }
    }
    tmp18 = null != found;
  }
  c16 = tmp18;
  const items7 = [tmp18];
  callback = focused.useCallback(() => {
    if (c16) {
      dependencyMap((arg0) => arg0 + 1);
    }
  }, items7);
  let obj5 = applicationId(3991);
  class X {
    constructor() {
      obj = { visible: sharedVisible.get(), mode: mode.get() };
      return obj;
    }
  }
  X.__closure = { sharedVisible, mode };
  X.__workletHash = 2072430391020;
  X.__initData = first1;
  class Q {
    constructor(arg0, arg1) {
      tmp = 1 === applicationId.visible;
      if (tmp) {
        tmp2 = null;
        tmp = null != arg1;
      }
      if (tmp) {
        num = 0;
        tmp = 0 === arg1.visible;
      }
      if (!tmp) {
        tmp3 = controlsSpecs;
        tmp4 = applicationId.mode !== controlsSpecs.PIP;
        if (tmp4) {
          tmp5 = null;
          mode = undefined;
          if (null != arg1) {
            mode = arg1.mode;
          }
          tmp7 = controlsSpecs;
          tmp4 = mode === controlsSpecs.PIP;
        }
        tmp = tmp4;
      }
      if (tmp) {
        tmp8 = applicationId;
        tmp9 = useState;
        num2 = 23;
        obj = applicationId(useState[23]);
        tmp10 = c17;
        tmp11 = obj.runOnJS(c17)();
      }
      return;
    }
  }
  obj = { VoicePanelModes: controlsSpecs, runOnJS: applicationId(3991).runOnJS, incrementActivityKey: callback };
  Q.__closure = obj;
  Q.__workletHash = 9732208421749;
  Q.__initData = c19;
  const animatedReaction = obj5.useAnimatedReaction(X, Q);
  const tmp23 = channelId(focused.useState(false), 2);
  first1 = tmp23[0];
  c19 = tmp25;
  embeddedActivityParticipantId = null;
  if (null != stateFromStores1) {
    let obj7 = applicationId(10561);
    obj = {};
    ({ applicationId: obj9.applicationId, compositeInstanceId: obj9.instanceId } = stateFromStores1);
    embeddedActivityParticipantId = obj7.getEmbeddedActivityParticipantId(obj);
  }
  let obj9 = applicationId(3991);
  function ue() {
    let tmp = null != embeddedActivityParticipantId;
    if (tmp) {
      const value = focused.get();
      let id;
      if (null != value) {
        id = value.id;
      }
      tmp = id === embeddedActivityParticipantId;
    }
    if (tmp) {
      tmp = mode.get() === controlsSpecs.PANEL;
    }
    return tmp;
  }
  obj1 = { activityParticipantId: embeddedActivityParticipantId, focused, mode, VoicePanelModes: controlsSpecs };
  ue.__closure = obj1;
  ue.__workletHash = 2833167890519;
  ue.__initData = embeddedActivityParticipantId;
  function le(arg0, arg1) {
    if (arg0 !== arg1) {
      applicationId(3991).runOnJS(c19)(arg0);
      const obj = applicationId(3991);
    }
  }
  obj2 = { runOnJS: applicationId(3991).runOnJS, setIsActivityFocused: tmp25 };
  le.__closure = obj2;
  le.__workletHash = 12291590020155;
  le.__initData = callback1;
  const animatedReaction1 = obj9.useAnimatedReaction(ue, le);
  const items8 = [layoutManager, applicationId];
  const memo1 = focused.useMemo(() => {
    const Gesture = applicationId(5217).Gesture;
    return Gesture.Tap();
  }, []);
  callback1 = focused.useCallback((arg0, arg1, arg2) => {
    if (arg2) {
      if (gridOrientationLockState.LANDSCAPE === arg1) {
        layoutManager.setTargetAspectRatio(applicationId, "landscape");
      } else if (gridOrientationLockState.PORTRAIT === arg1) {
        layoutManager.setTargetAspectRatio(applicationId, "portrait");
      } else if (gridOrientationLockState.UNLOCKED === arg1) {
        let str2 = "portrait";
        if (arg0) {
          str2 = "landscape";
        }
        layoutManager.setTargetAspectRatio(applicationId, str2);
        const tmp9 = applicationId;
      }
    } else {
      layoutManager.setTargetAspectRatio(applicationId, "square");
    }
  }, items8);
  const items9 = [callback1, windowDimensions, gridOrientationLockState, tmp18];
  const layoutEffect = focused.useLayoutEffect(() => {
    const size = applicationId(1450).getWindowDimensions();
    callback1(size.width > size.height, gridOrientationLockState, c16);
  }, items9);
  const tmp33 = channelId(focused.useState(layoutManager.getDefaultTargetDimensions()), 2);
  c22 = tmp34;
  const items10 = [layoutManager, tmp33[1]];
  callback2 = focused.useCallback(() => {
    _undefined(layoutManager.getDefaultTargetDimensions());
  }, items10);
  let obj12 = applicationId(3991);
  function pe() {
    return windowDimensions.get();
  }
  pe.__closure = { windowDimensions };
  pe.__workletHash = 12220613662042;
  pe.__initData = c22;
  function ye(landscape, landscape2) {
    landscape = undefined;
    if (null != landscape2) {
      landscape = landscape2.landscape;
    }
    if (landscape.landscape !== landscape) {
      applicationId(3991).runOnJS(callback1)(landscape.landscape, gridOrientationLockState, c16);
      const obj = applicationId(3991);
    }
    applicationId(3991).runOnJS(callback2)();
  }
  obj3 = { runOnJS: applicationId(3991).runOnJS, handleTargetAspectRatioParams: callback1, gridOrientationLockState, hasJoined: tmp18, updateNotJoinedActivityDimensions: callback2 };
  ye.__closure = obj3;
  ye.__workletHash = 13125606009235;
  ye.__initData = callback2;
  const animatedReaction2 = obj12.useAnimatedReaction(pe, ye);
  const tmp16 = sharedVisible(5462);
  isTabletActivitySurface = applicationId(10629).getIsTabletActivitySurface();
  backgroundColor = tmp.activityContainerBackground.backgroundColor;
  const obj15 = applicationId(10629);
  class Ce {
    constructor() {
      num = 0;
      if (hideControls) {
        tmp = closure_10;
        num = closure_10.get();
      }
      landscape = windowDimensions.get().landscape;
      width = windowDimensions.get().width;
      height = windowDimensions.get().height;
      tmp2 = c24;
      if (c24) {
        tmp3 = c15;
        tmp4 = gridOrientationLockState;
        tmp2 = c15 === gridOrientationLockState.LANDSCAPE;
      }
      if (tmp2) {
        tmp2 = !landscape;
      }
      tmp5 = c24;
      if (c24) {
        tmp6 = c15;
        tmp7 = gridOrientationLockState;
        tmp5 = c15 === gridOrientationLockState.PORTRAIT;
      }
      if (tmp5) {
        tmp5 = landscape;
      }
      if (tmp2) {
        tmp9 = guild_id;
        num5 = 2;
        num2 = (height - width * guild_id) / 2;
        num3 = 0;
      } else {
        num2 = 0;
        num3 = 0;
        if (tmp5) {
          tmp8 = guild_id;
          num4 = 2;
          num3 = (width - height * guild_id) / 2;
          num2 = 0;
        }
      }
      obj = {};
      num6 = 1;
      if (c18) {
        num6 = 0;
      }
      obj.flex = num6;
      obj.backgroundColor = backgroundColor;
      obj.paddingVertical = num2;
      obj.paddingHorizontal = num3;
      str = "auto";
      str2 = "auto";
      if (c18) {
        str2 = width;
      }
      obj.width = str2;
      if (c18) {
        str = height - num;
      }
      obj.height = str;
      obj.maxHeight = "100%";
      obj.maxWidth = "100%";
      return obj;
    }
  }
  obj4 = { IS_IOS: hideControls, animatedKeyboardHeight: tmp4, windowDimensions, isTabletActivitySurface, focusedOrientationLockState, OrientationLockState: gridOrientationLockState, ACTIVITY_PORTRAIT_ASPECT_RATIO: guild_id, isActivityFocused: first1, backgroundColor };
  Ce.__closure = obj4;
  Ce.__workletHash = 13392050824169;
  Ce.__initData = isTabletActivitySurface;
  const animatedStyle = applicationId(3991).useAnimatedStyle(Ce);
  const obj16 = applicationId(3991);
  const items11 = [mode];
  const items12 = [controlsSpecs, first1, hideControls];
  const stateFromStores2 = applicationId(566).useStateFromStores(items11, () => mode.getShowActivitiesDebugOverlay());
  if (null == stateFromStores) {
    return null;
  } else {
    if (tmp18) {
      obj5 = { gesture: tmp40 };
      const obj6 = { layout: applicationId.layout };
      let str = "none";
      if (first1) {
        str = "auto";
      }
      obj6.pointerEvents = str;
      obj6.style = animatedStyle;
      obj7 = { channelId };
      let name;
      const tmp51 = focusedOrientationLockState;
      const tmp54 = c16;
      const tmp56 = sharedVisible(7678);
      const tmp57 = focusedOrientationLockState;
      if (null != first) {
        name = first.name;
      }
      obj7.activityName = name;
      obj7.isActivityFocused = first1;
      const obj8 = { channel: stateFromStores, layoutMode: tmp41 };
      obj7.children = focusedOrientationLockState(sharedVisible(10630), obj8, tmp2[0]);
      const items13 = [tmp57(sharedVisible(15873), obj7), ];
      let tmp65 = null;
      if (stateFromStores2) {
        tmp65 = focusedOrientationLockState(sharedVisible(15874), {});
      }
      items13[1] = tmp65;
      obj6.children = items13;
      obj5.children = tmp54(tmp56, obj6);
      let tmp51Result = tmp51(applicationId(5217).GestureDetector, obj5);
      const tmp60 = sharedVisible(15873);
    } else if (null == activityShelfItemData) {
      obj9 = { activity: stateFromStores1, application: first };
      tmp51Result = focusedOrientationLockState(sharedVisible(15875), obj9);
    } else {
      const obj10 = { gesture: memo1 };
      const obj11 = { context: memo, guildId: stateFromStores.guild_id, activityItem: activityShelfItemData, locationObject: analyticsContext.location, itemDimensions: tmp33[0], disableBadges: true };
      obj10.children = focusedOrientationLockState(sharedVisible(15879), obj11);
      tmp51Result = focusedOrientationLockState(applicationId(5217).GestureDetector, obj10);
    }
    obj12 = { value: tmp16(sharedVisible(5482).ACTIVITY_TILE).analyticsLocations, children: tmp51Result };
    return focusedOrientationLockState(applicationId(5462).AnalyticsLocationProvider, obj12);
  }
  const obj18 = applicationId(566);
}
({ IS_IOS: closure_8, VoicePanelModes: closure_9 } = VoicePanelModes);
({ ACTIVITY_PORTRAIT_ASPECT_RATIO: closure_12, ActivityLayoutMode: closure_13, OrientationLockState: closure_14 } = items3);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj.activityContainerBackground = obj;
let closure_17 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_18 = { code: "function VoicePanelAnimatedActivityCardTsx1(){const{sharedVisible,mode}=this.__closure;return{visible:sharedVisible.get(),mode:mode.get()};}" };
let closure_19 = { code: "function VoicePanelAnimatedActivityCardTsx2({visible:visible,mode:mode},prev){const{VoicePanelModes,runOnJS,incrementActivityKey}=this.__closure;if(visible===1&&prev!=null&&prev.visible===0||mode!==VoicePanelModes.PIP&&(prev===null||prev===void 0?void 0:prev.mode)===VoicePanelModes.PIP){runOnJS(incrementActivityKey)();}}" };
let closure_20 = { code: "function VoicePanelAnimatedActivityCardTsx3(){const{activityParticipantId,focused,mode,VoicePanelModes}=this.__closure;var _focused$get;return activityParticipantId!=null&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===activityParticipantId&&mode.get()===VoicePanelModes.PANEL;}" };
let closure_21 = { code: "function VoicePanelAnimatedActivityCardTsx4(isActivityFocused,wasActivityFocused){const{runOnJS,setIsActivityFocused}=this.__closure;if(isActivityFocused!==wasActivityFocused){runOnJS(setIsActivityFocused)(isActivityFocused);}}" };
let closure_22 = { code: "function VoicePanelAnimatedActivityCardTsx5(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
let closure_23 = { code: "function VoicePanelAnimatedActivityCardTsx6(windowDimensionsValue,prevWindowDimensionsValue){const{runOnJS,handleTargetAspectRatioParams,gridOrientationLockState,hasJoined,updateNotJoinedActivityDimensions}=this.__closure;if(windowDimensionsValue.landscape!==(prevWindowDimensionsValue===null||prevWindowDimensionsValue===void 0?void 0:prevWindowDimensionsValue.landscape)){runOnJS(handleTargetAspectRatioParams)(windowDimensionsValue.landscape,gridOrientationLockState,hasJoined);}runOnJS(updateNotJoinedActivityDimensions)();}" };
let closure_24 = { code: "function VoicePanelAnimatedActivityCardTsx7(){const{IS_IOS,animatedKeyboardHeight,windowDimensions,isTabletActivitySurface,focusedOrientationLockState,OrientationLockState,ACTIVITY_PORTRAIT_ASPECT_RATIO,isActivityFocused,backgroundColor}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const isScreenLandscape=windowDimensions.get().landscape;const screenWidth=windowDimensions.get().width;const screenHeight=windowDimensions.get().height;const shouldLetterBox=isTabletActivitySurface&&focusedOrientationLockState===OrientationLockState.LANDSCAPE&&!isScreenLandscape;const shouldPillarBox=isTabletActivitySurface&&focusedOrientationLockState===OrientationLockState.PORTRAIT&&isScreenLandscape;let containerPaddingVertical=0;let containerPaddingHorizontal=0;if(shouldLetterBox){containerPaddingVertical=(screenHeight-screenWidth*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}else if(shouldPillarBox){containerPaddingHorizontal=(screenWidth-screenHeight*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}return{flex:isActivityFocused?0:1,backgroundColor:backgroundColor,paddingVertical:containerPaddingVertical,paddingHorizontal:containerPaddingHorizontal,width:isActivityFocused?screenWidth:'auto',height:isActivityFocused?screenHeight-keyboardHeight:'auto',maxHeight:'100%',maxWidth:'100%'};}" };
let closure_25 = { code: "function VoicePanelAnimatedActivityCardTsx8(event,manager){const{controlsSpecs,VoicePanelControlsModes,runOnJS,hideControls}=this.__closure;manager.fail();if(controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN){runOnJS(hideControls)({debounce:true});}}" };
const memoResult = importAllResult.memo(function VoicePanelAnimatedActivityCard(arg0) {
  let obj = { theme: ThemeTypes.DARK };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = callback(VoicePanelAnimatedActivityCardInner, obj);
  return callback(require(3842) /* ManaContext */.ThemeContextProvider, obj);
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx");

export default memoResult;
