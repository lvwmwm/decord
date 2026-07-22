// Module ID: 15707
// Function ID: 120037
// Name: VoicePanelAnimatedActivityCardInner
// Dependencies: []

// Module 15707 (VoicePanelAnimatedActivityCardInner)
function VoicePanelAnimatedActivityCardInner(applicationId) {
  applicationId = applicationId.applicationId;
  const arg1 = applicationId;
  const sharedVisible = applicationId.sharedVisible;
  const importDefault = sharedVisible;
  let guild_id;
  let first;
  let gridOrientationLockState;
  let focusedOrientationLockState;
  let tmp18;
  let callback3;
  let closure_18;
  let closure_19;
  let closure_20;
  let closure_21;
  let closure_22;
  let closure_23;
  let closure_24;
  let closure_25;
  const tmp2 = callback(importAllResult.useState(0), 2);
  let closure_2 = tmp2[1];
  const context = importAllResult.useContext(importDefault(closure_2[12]));
  const channelId = context.channelId;
  let callback = channelId;
  const focused = context.focused;
  const layoutManager = context.layoutManager;
  let closure_5 = layoutManager;
  const mode = context.mode;
  let closure_6 = mode;
  const windowDimensions = context.windowDimensions;
  let closure_7 = windowDimensions;
  const hideControls = context.hideControls;
  const controlsSpecs = context.controlsSpecs;
  const tmp4 = importDefault(closure_2[13])();
  const VoicePanelControlsModes = tmp4;
  let obj = arg1(closure_2[14]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => windowDimensions.getChannel(channelId));
  const ThemeTypes = stateFromStores;
  const items1 = [stateFromStores];
  guild_id = undefined;
  const memo = importAllResult.useMemo(() => ({ channel: stateFromStores, type: "channel" }), items1);
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  let obj1 = arg1(closure_2[15]);
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
  const effect = importAllResult.useEffect(() => {
    let obj = applicationId(closure_2[16]);
    obj = { guildId: guild_id };
    const shelf = obj.fetchShelf(obj);
  }, items2);
  const items3 = [applicationId];
  first = callback(importDefault(closure_2[17])(items3), 1)[0];
  let obj2 = arg1(closure_2[14]);
  const items4 = [closure_5];
  const items5 = [applicationId];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items4, () => ({ gridOrientationLockState: layoutManager.getGridOrientationLockStateForApp(applicationId), focusedOrientationLockState: layoutManager.getOrientationLockStateForApp(applicationId) }), items5);
  gridOrientationLockState = stateFromStoresObject.gridOrientationLockState;
  focusedOrientationLockState = stateFromStoresObject.focusedOrientationLockState;
  const tmp14 = importDefault(closure_2[18])();
  let obj3 = arg1(closure_2[14]);
  const items6 = [closure_5];
  const stateFromStores1 = obj3.useStateFromStores(items6, () => {
    const embeddedActivitiesForChannel = layoutManager.getEmbeddedActivitiesForChannel(channelId);
    return embeddedActivitiesForChannel.find((applicationId) => {
      let id;
      if (null != id) {
        id = id.id;
      }
      return applicationId.applicationId === id;
    });
  });
  const tmp = callback3();
  let obj4 = arg1(closure_2[21]);
  tmp18 = null != tmp14;
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
        found = participants.find((userId) => applicationId(closure_2[22]).isActivityParticipantCurrentUserCurrentSession(userId));
      }
    }
    tmp18 = null != found;
  }
  const items7 = [tmp18];
  callback = importAllResult.useCallback(() => {
    if (tmp18) {
      callback((arg0) => arg0 + 1);
    }
  }, items7);
  callback3 = callback;
  let obj5 = arg1(closure_2[23]);
  class X {
    constructor() {
      obj = { visible: sharedVisible.get(), mode: mode.get() };
      return obj;
    }
  }
  X.__closure = { sharedVisible, mode };
  X.__workletHash = 2072430391020;
  X.__initData = closure_18;
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
        tmp10 = closure_17;
        tmp11 = obj.runOnJS(closure_17)();
      }
      return;
    }
  }
  obj = { VoicePanelModes: controlsSpecs, runOnJS: arg1(closure_2[23]).runOnJS, incrementActivityKey: callback };
  Q.__closure = obj;
  Q.__workletHash = 9732208421749;
  Q.__initData = closure_19;
  const animatedReaction = obj5.useAnimatedReaction(X, Q);
  const tmp23 = callback(focused.useState(false), 2);
  const first1 = tmp23[0];
  closure_18 = first1;
  closure_19 = tmp25;
  let embeddedActivityParticipantId = null;
  if (null != stateFromStores1) {
    let obj7 = arg1(closure_2[24]);
    obj = {};
    ({ applicationId: obj9.applicationId, compositeInstanceId: obj9.instanceId } = stateFromStores1);
    embeddedActivityParticipantId = obj7.getEmbeddedActivityParticipantId(obj);
  }
  closure_20 = embeddedActivityParticipantId;
  let obj9 = arg1(closure_2[23]);
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
  ue.__initData = closure_20;
  function le(arg0, arg1) {
    if (arg0 !== arg1) {
      applicationId(closure_2[23]).runOnJS(tmp25)(arg0);
      const obj = applicationId(closure_2[23]);
    }
  }
  obj2 = { runOnJS: arg1(closure_2[23]).runOnJS, setIsActivityFocused: tmp25 };
  le.__closure = obj2;
  le.__workletHash = 12291590020155;
  le.__initData = closure_21;
  const animatedReaction1 = obj9.useAnimatedReaction(ue, le);
  const items8 = [layoutManager, applicationId];
  const memo1 = importAllResult.useMemo(() => {
    const Gesture = applicationId(closure_2[25]).Gesture;
    return Gesture.Tap();
  }, []);
  const callback1 = importAllResult.useCallback((arg0, arg1, arg2) => {
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
  closure_21 = callback1;
  const items9 = [callback1, windowDimensions, gridOrientationLockState, tmp18];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    const size = applicationId(closure_2[26]).getWindowDimensions();
    callback1(size.width > size.height, gridOrientationLockState, tmp18);
  }, items9);
  const tmp33 = callback(focused.useState(layoutManager.getDefaultTargetDimensions()), 2);
  closure_22 = tmp34;
  const items10 = [layoutManager, tmp33[1]];
  const callback2 = importAllResult.useCallback(() => {
    tmp34(layoutManager.getDefaultTargetDimensions());
  }, items10);
  closure_23 = callback2;
  let obj12 = arg1(closure_2[23]);
  function pe() {
    return windowDimensions.get();
  }
  pe.__closure = { windowDimensions };
  pe.__workletHash = 12220613662042;
  pe.__initData = closure_22;
  function ye(landscape, landscape2) {
    landscape = undefined;
    if (null != landscape2) {
      landscape = landscape2.landscape;
    }
    if (landscape.landscape !== landscape) {
      applicationId(closure_2[23]).runOnJS(callback1)(landscape.landscape, gridOrientationLockState, tmp18);
      const obj = applicationId(closure_2[23]);
    }
    applicationId(closure_2[23]).runOnJS(callback2)();
  }
  obj3 = { runOnJS: arg1(closure_2[23]).runOnJS, handleTargetAspectRatioParams: callback1, gridOrientationLockState, hasJoined: tmp18, updateNotJoinedActivityDimensions: callback2 };
  ye.__closure = obj3;
  ye.__workletHash = 13125606009235;
  ye.__initData = closure_23;
  const animatedReaction2 = obj12.useAnimatedReaction(pe, ye);
  const tmp16 = importDefault(closure_2[19]);
  const isTabletActivitySurface = arg1(closure_2[27]).getIsTabletActivitySurface();
  closure_24 = isTabletActivitySurface;
  const backgroundColor = tmp.activityContainerBackground.backgroundColor;
  closure_25 = backgroundColor;
  const obj15 = arg1(closure_2[27]);
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
      tmp2 = closure_24;
      if (closure_24) {
        tmp3 = closure_15;
        tmp4 = gridOrientationLockState;
        tmp2 = closure_15 === gridOrientationLockState.LANDSCAPE;
      }
      if (tmp2) {
        tmp2 = !landscape;
      }
      tmp5 = closure_24;
      if (closure_24) {
        tmp6 = closure_15;
        tmp7 = gridOrientationLockState;
        tmp5 = closure_15 === gridOrientationLockState.PORTRAIT;
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
      if (closure_18) {
        num6 = 0;
      }
      obj.flex = num6;
      obj.backgroundColor = backgroundColor;
      obj.paddingVertical = num2;
      obj.paddingHorizontal = num3;
      str = "auto";
      str2 = "auto";
      if (closure_18) {
        str2 = width;
      }
      obj.width = str2;
      if (closure_18) {
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
  Ce.__initData = closure_24;
  const animatedStyle = arg1(closure_2[23]).useAnimatedStyle(Ce);
  const obj16 = arg1(closure_2[23]);
  const items11 = [closure_6];
  const items12 = [controlsSpecs, first1, hideControls];
  const stateFromStores2 = arg1(closure_2[14]).useStateFromStores(items11, () => mode.getShowActivitiesDebugOverlay());
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
      const tmp54 = tmp18;
      const tmp56 = importDefault(closure_2[28]);
      const tmp57 = focusedOrientationLockState;
      if (null != first) {
        name = first.name;
      }
      obj7.activityName = name;
      obj7.isActivityFocused = first1;
      const obj8 = { channel: stateFromStores, layoutMode: tmp41 };
      obj7.children = focusedOrientationLockState(importDefault(closure_2[30]), obj8, tmp2[0]);
      const items13 = [tmp57(importDefault(closure_2[29]), obj7), ];
      let tmp65 = null;
      if (stateFromStores2) {
        tmp65 = focusedOrientationLockState(importDefault(closure_2[31]), {});
      }
      items13[1] = tmp65;
      obj6.children = items13;
      obj5.children = tmp54(tmp56, obj6);
      let tmp51Result = tmp51(arg1(closure_2[25]).GestureDetector, obj5);
      const tmp60 = importDefault(closure_2[29]);
    } else if (null == activityShelfItemData) {
      obj9 = { activity: stateFromStores1, application: first };
      tmp51Result = focusedOrientationLockState(importDefault(closure_2[32]), obj9);
    } else {
      const obj10 = { gesture: memo1 };
      const obj11 = { context: memo, guildId: stateFromStores.guild_id, activityItem: activityShelfItemData, locationObject: analyticsContext.location, itemDimensions: tmp33[0], disableBadges: true };
      obj10.children = focusedOrientationLockState(importDefault(closure_2[33]), obj11);
      tmp51Result = focusedOrientationLockState(arg1(closure_2[25]).GestureDetector, obj10);
    }
    obj12 = { value: tmp16(importDefault(closure_2[20]).ACTIVITY_TILE).analyticsLocations, children: tmp51Result };
    return focusedOrientationLockState(arg1(closure_2[19]).AnalyticsLocationProvider, obj12);
  }
  const obj18 = arg1(closure_2[14]);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ IS_IOS: closure_8, VoicePanelModes: closure_9 } = arg1(dependencyMap[5]));
const VoicePanelControlsModes = arg1(dependencyMap[6]).VoicePanelControlsModes;
const ThemeTypes = arg1(dependencyMap[7]).ThemeTypes;
const tmp2 = arg1(dependencyMap[5]);
({ ACTIVITY_PORTRAIT_ASPECT_RATIO: closure_12, ActivityLayoutMode: closure_13, OrientationLockState: closure_14 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_15, jsxs: closure_16 } = arg1(dependencyMap[9]));
const tmp4 = arg1(dependencyMap[9]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_SURFACE_HIGH };
obj.activityContainerBackground = obj;
let closure_17 = arg1(dependencyMap[10]).createStyles(obj);
let closure_18 = { code: "function VoicePanelAnimatedActivityCardTsx1(){const{sharedVisible,mode}=this.__closure;return{visible:sharedVisible.get(),mode:mode.get()};}" };
let closure_19 = { code: "function VoicePanelAnimatedActivityCardTsx2({visible:visible,mode:mode},prev){const{VoicePanelModes,runOnJS,incrementActivityKey}=this.__closure;if(visible===1&&prev!=null&&prev.visible===0||mode!==VoicePanelModes.PIP&&(prev===null||prev===void 0?void 0:prev.mode)===VoicePanelModes.PIP){runOnJS(incrementActivityKey)();}}" };
let closure_20 = { code: "function VoicePanelAnimatedActivityCardTsx3(){const{activityParticipantId,focused,mode,VoicePanelModes}=this.__closure;var _focused$get;return activityParticipantId!=null&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===activityParticipantId&&mode.get()===VoicePanelModes.PANEL;}" };
let closure_21 = { code: "function VoicePanelAnimatedActivityCardTsx4(isActivityFocused,wasActivityFocused){const{runOnJS,setIsActivityFocused}=this.__closure;if(isActivityFocused!==wasActivityFocused){runOnJS(setIsActivityFocused)(isActivityFocused);}}" };
let closure_22 = { code: "function VoicePanelAnimatedActivityCardTsx5(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
let closure_23 = { code: "function VoicePanelAnimatedActivityCardTsx6(windowDimensionsValue,prevWindowDimensionsValue){const{runOnJS,handleTargetAspectRatioParams,gridOrientationLockState,hasJoined,updateNotJoinedActivityDimensions}=this.__closure;if(windowDimensionsValue.landscape!==(prevWindowDimensionsValue===null||prevWindowDimensionsValue===void 0?void 0:prevWindowDimensionsValue.landscape)){runOnJS(handleTargetAspectRatioParams)(windowDimensionsValue.landscape,gridOrientationLockState,hasJoined);}runOnJS(updateNotJoinedActivityDimensions)();}" };
let closure_24 = { code: "function VoicePanelAnimatedActivityCardTsx7(){const{IS_IOS,animatedKeyboardHeight,windowDimensions,isTabletActivitySurface,focusedOrientationLockState,OrientationLockState,ACTIVITY_PORTRAIT_ASPECT_RATIO,isActivityFocused,backgroundColor}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const isScreenLandscape=windowDimensions.get().landscape;const screenWidth=windowDimensions.get().width;const screenHeight=windowDimensions.get().height;const shouldLetterBox=isTabletActivitySurface&&focusedOrientationLockState===OrientationLockState.LANDSCAPE&&!isScreenLandscape;const shouldPillarBox=isTabletActivitySurface&&focusedOrientationLockState===OrientationLockState.PORTRAIT&&isScreenLandscape;let containerPaddingVertical=0;let containerPaddingHorizontal=0;if(shouldLetterBox){containerPaddingVertical=(screenHeight-screenWidth*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}else if(shouldPillarBox){containerPaddingHorizontal=(screenWidth-screenHeight*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}return{flex:isActivityFocused?0:1,backgroundColor:backgroundColor,paddingVertical:containerPaddingVertical,paddingHorizontal:containerPaddingHorizontal,width:isActivityFocused?screenWidth:'auto',height:isActivityFocused?screenHeight-keyboardHeight:'auto',maxHeight:'100%',maxWidth:'100%'};}" };
let closure_25 = { code: "function VoicePanelAnimatedActivityCardTsx8(event,manager){const{controlsSpecs,VoicePanelControlsModes,runOnJS,hideControls}=this.__closure;manager.fail();if(controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN){runOnJS(hideControls)({debounce:true});}}" };
const obj2 = arg1(dependencyMap[10]);
const memoResult = importAllResult.memo(function VoicePanelAnimatedActivityCard(arg0) {
  let obj = { theme: ThemeTypes.DARK };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = callback2(VoicePanelAnimatedActivityCardInner, obj);
  return callback2(arg1(dependencyMap[34]).ThemeContextProvider, obj);
});
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx");

export default memoResult;
