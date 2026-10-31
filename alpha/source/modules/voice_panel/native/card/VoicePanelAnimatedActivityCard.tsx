// Module ID: 19252
// Function ID: 19253
// Name: VoicePanelAnimatedActivityCard
// Dependencies: [32, 19, 4862, 11704, 4863, 11223, 11221, 1072, 2018, 11693, 21, 5014, 575, 11222, 12074, 504, 19253, 11721, 7330, 11787, 7326, 7351, 10049, 5676, 5095, 6851, 5303, 2019, 1491, 11005, 7241, 19254, 11793, 19255, 19256, 19260, 5080, 2]

// Module 19252 (VoicePanelAnimatedActivityCard)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import useWindowDimensions from "useWindowDimensions" /* 1491 */;
import Constants2 from "Constants" /* 2018 */;
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2019 */;
import native from "native" /* 5080 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11221 */;
import Constants3 from "Constants" /* 11693 */;
import fetchShelf from "fetchShelf" /* 11721 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4862 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 11704 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c9;
let closure_14;
let closure_15;
let metroImportAll;
let obj2;
function VoicePanelAnimatedActivityCardInner(applicationId) {
  let callback;
  let closure_10;
  let closure_19;
  let closure_2;
  let closure_22;
  let items13;
  let name;
  let obj10;
  let obj12;
  let obj15;
  let str;
  let tmp51;
  let tmp5Result3;
  applicationId = applicationId.applicationId;
  const sharedVisible = applicationId.sharedVisible;
  let channelId;
  let focused;
  let first1;
  let gridOrientationLockState;
  let focusedOrientationLockState;
  closure_16 = undefined;
  let incrementActivityKey;
  let first2;
  let embeddedActivityParticipantId;
  let callback1;
  __initData2 = undefined;
  let callback2;
  __initData = undefined;
  let backgroundColor;
  const layout = applicationId.layout;
  let obj = focused;
  let tmp = closure_16();
  let tmp2 = channelId;
  let tmp3 = channelId(focused.useState(0), 2);
  dependencyMap = tmp3[1];
  const first = tmp3[0];
  const context = focused.useContext(sharedVisible(11222));
  channelId = context.channelId;
  focused = context.focused;
  const layoutManager = context.layoutManager;
  let mode = context.mode;
  const windowDimensions = context.windowDimensions;
  const hideControls = context.hideControls;
  const controlsSpecs = context.controlsSpecs;
  const tmp8 = sharedVisible(12074)();
  VoicePanelControlsModes = tmp8;
  let obj2 = applicationId(504);
  const items = [windowDimensions];
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [stateFromStores];
  let guild_id;
  const memo = focused.useMemo(() => ({ channel: stateFromStores, type: "channel" }), items1);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let guild_id1;
  const useActivityShelfItemData = tmp9(19253).useActivityShelfItemData;
  applicationId(19253);
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  if (guild_id1 == null) {
    guild_id1 = null;
  }
  const activityShelfItemData = useActivityShelfItemData(guild_id1, applicationId);
  const items2 = [guild_id];
  const effect = obj.useEffect(() => {
    const obj = fetchShelf;
    const obj2 = { guildId: guild_id };
    const shelf = obj.fetchShelf(obj2);
  }, items2);
  const items3 = [applicationId];
  first1 = tmp2(tmp5(7330)(items3), 1)[0];
  const items4 = [layoutManager];
  const items5 = [applicationId];
  const tmp9Result10 = applicationId(504);
  const stateFromStoresObject = tmp9Result10.useStateFromStoresObject(items4, () => {
    const obj = { gridOrientationLockState: EmbeddedActivitiesStore.getGridOrientationLockStateForApp(applicationId), focusedOrientationLockState: EmbeddedActivitiesStore.getOrientationLockStateForApp(applicationId) };
    return obj;
  }, items5);
  gridOrientationLockState = stateFromStoresObject.gridOrientationLockState;
  focusedOrientationLockState = stateFromStoresObject.focusedOrientationLockState;
  const tmp19 = sharedVisible(11787)();
  const items6 = [layoutManager];
  const tmp9Result11 = applicationId(504);
  const stateFromStores1 = tmp9Result11.useStateFromStores(items6, () => {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channelId);
    return embeddedActivitiesForChannel.find((applicationId) => {
      id = undefined;
      applicationId = applicationId.applicationId;
      if (id != null) {
        id = id.id;
      }
      return applicationId === id;
    });
  });
  const tmp5Result = sharedVisible(7326);
  const analyticsLocations = tmp5Result(tmp5(7351).ACTIVITY_TILE).analyticsLocations;
  let tmp23 = null != tmp19;
  const tmp9Result12 = applicationId(10049);
  const analyticsContext = tmp9Result12.useAnalyticsContext();
  if (tmp23) {
    let id1;
    let id = tmp19.id;
    if (first1 != null) {
      id1 = first1.id;
    }
    tmp23 = id === id1;
  }
  if (!tmp23) {
    let found;
    if (stateFromStores1 != null) {
      const participants = stateFromStores1.participants;
      if (participants != null) {
        found = participants.find((item) => {
          const obj = applicationId(closure_2[23]);
          return obj.isActivityParticipantCurrentUserCurrentSession(item);
        });
      }
    }
    tmp23 = null != found;
  }
  closure_16 = tmp23;
  const items7 = [tmp23];
  incrementActivityKey = obj.useCallback(() => {
    const tmp = closure_16;
    if (tmp) {
      closure_2((arg0) => arg0 + 1);
    }
  }, items7);
  let fn = function $() {
    const obj = { visible: sharedVisible.get(), mode: mode.get() };
    return obj;
  };
  fn.__closure = { sharedVisible, mode };
  fn.__workletHash = 2072430391020;
  fn.__initData = incrementActivityKey;
  const tmp9Result13 = applicationId(5095);
  class U {
    constructor(visible, visible2) {
      let tmp = 1 === visible.visible;
      mode = visible.mode;
      if (tmp) {
        tmp = null != visible2;
      }
      if (tmp) {
        tmp = 0 === visible2.visible;
      }
      if (!tmp) {
        let tmp4 = mode !== controlsSpecs.PIP;
        if (tmp4) {
          let mode1;
          if (visible2 != null) {
            mode1 = visible2.mode;
          }
          tmp4 = mode1 === tmp3.PIP;
        }
        tmp = tmp4;
      }
      if (tmp) {
        const obj = ReanimatedRexport;
        obj.runOnJS(callback)();
      }
    }
  }
  U.__closure = { VoicePanelModes: controlsSpecs, runOnJS: applicationId(5095).runOnJS, incrementActivityKey };
  U.__workletHash = 9732208421749;
  U.__initData = first2;
  ({ VoicePanelModes: controlsSpecs, runOnJS: applicationId(5095).runOnJS, incrementActivityKey });
  const animatedReaction = tmp9Result13.useAnimatedReaction(fn, U);
  const tmp2Result = tmp2(obj.useState(false), 2);
  first2 = tmp2Result[0];
  __initData = tmp31;
  embeddedActivityParticipantId = null;
  const tmp27 = controlsSpecs;
  if (null != stateFromStores1) {
    const obj4 = { applicationId: null, instanceId: null };
    ({ applicationId: obj9.applicationId, compositeInstanceId: obj9.instanceId } = stateFromStores1);
    const tmp9Result14 = applicationId(6851);
    embeddedActivityParticipantId = tmp9Result14.getEmbeddedActivityParticipantId(obj4);
  }
  function de() {
    let tmp2 = null != embeddedActivityParticipantId;
    if (tmp2) {
      const value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      tmp2 = id === tmp;
    }
    if (tmp2) {
      tmp2 = mode.get() === controlsSpecs.PANEL;
    }
    return tmp2;
  }
  de.__closure = { activityParticipantId: embeddedActivityParticipantId, focused, mode, VoicePanelModes: tmp27 };
  de.__workletHash = 2833167890519;
  de.__initData = __initData;
  function se(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_19)(arg0);
    }
  }
  const tmp9Result15 = applicationId(5095);
  se.__closure = { runOnJS: applicationId(5095).runOnJS, setIsActivityFocused: tmp2Result[1] };
  se.__workletHash = 12291590020155;
  se.__initData = embeddedActivityParticipantId;
  ({ runOnJS: applicationId(5095).runOnJS, setIsActivityFocused: tmp2Result[1] });
  const animatedReaction1 = tmp9Result15.useAnimatedReaction(de, se);
  const items8 = [layoutManager, applicationId];
  const memo1 = obj.useMemo(() => {
    const Gesture = applicationId(closure_2[26]).Gesture;
    return Gesture.Tap();
  }, []);
  callback1 = obj.useCallback((arg0, arg1, arg2) => {
    const tmp = arg2;
    if (tmp) {
      if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE === arg1) {
        layoutManager.setTargetAspectRatio(applicationId, "landscape");
      } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT === arg1) {
        layoutManager.setTargetAspectRatio(applicationId, "portrait");
      } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED === arg1) {
        let str2 = "portrait";
        const setTargetAspectRatio = layoutManager.setTargetAspectRatio;
        const tmp11 = applicationId;
        if (arg0) {
          str2 = "landscape";
        }
        setTargetAspectRatio(tmp11, str2);
      }
    } else {
      layoutManager.setTargetAspectRatio(applicationId, "square");
    }
  }, items8);
  const items9 = [callback1, windowDimensions, gridOrientationLockState, tmp23];
  const layoutEffect = obj.useLayoutEffect(() => {
    const obj = useWindowDimensions;
    size = obj.getWindowDimensions();
    callback1(size.width > size.height, gridOrientationLockState, closure_16);
  }, items9);
  const tmp2Result2 = tmp2(obj.useState(layoutManager.getDefaultTargetDimensions()), 2);
  __initData2 = tmp39;
  const items10 = [layoutManager, tmp2Result2[1]];
  const first3 = tmp2Result2[0];
  callback2 = obj.useCallback(() => {
    closure_22(layoutManager.getDefaultTargetDimensions());
  }, items10);
  function he() {
    return windowDimensions.get();
  }
  he.__closure = { windowDimensions };
  he.__workletHash = 12220613662042;
  he.__initData = callback1;
  function ge(landscape, landscape2) {
    let landscape1;
    landscape = landscape.landscape;
    if (landscape2 != null) {
      landscape1 = landscape2.landscape;
    }
    if (landscape !== landscape1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback1)(landscape.landscape, gridOrientationLockState, closure_16);
    }
    const obj2 = ReanimatedRexport;
    obj2.runOnJS(callback2)();
  }
  const tmp9Result16 = applicationId(5095);
  ge.__closure = { runOnJS: applicationId(5095).runOnJS, handleTargetAspectRatioParams: callback1, gridOrientationLockState, hasJoined: tmp23, updateNotJoinedActivityDimensions: callback2 };
  ge.__workletHash = 13125606009235;
  ge.__initData = __initData2;
  ({ runOnJS: applicationId(5095).runOnJS, handleTargetAspectRatioParams: callback1, gridOrientationLockState, hasJoined: tmp23, updateNotJoinedActivityDimensions: callback2 });
  const animatedReaction2 = tmp9Result16.useAnimatedReaction(he, ge);
  const tmp42 = !sharedVisible(11005)();
  __initData = tmp42;
  backgroundColor = tmp.activityContainerBackground.backgroundColor;
  const tmp9Result17 = applicationId(5095);
  class Ce {
    constructor() {
      let num2;
      let num3;
      let str;
      let str2;
      let num = 0;
      if (metroImportAll) {
        num = closure_10.get();
      }
      const landscape = windowDimensions.get().landscape;
      const width = windowDimensions.get().width;
      const height = windowDimensions.get().height;
      let tmp2 = __initData;
      const tmp3 = __initData && focusedOrientationLockState === EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE && !landscape;
      if (tmp2) {
        tmp2 = focusedOrientationLockState === EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT;
      }
      if (tmp2) {
        tmp2 = landscape;
      }
      if (tmp3) {
        num3 = (height - width * closure_12) / 2;
        num2 = 0;
      } else {
        num2 = 0;
        num3 = 0;
        if (tmp2) {
          num2 = (width - height * closure_12) / 2;
          num3 = 0;
        }
      }
      let num6 = 1;
      if (first2) {
        num6 = 0;
      }
      size = { flex: num6, backgroundColor, paddingVertical: num3, paddingHorizontal: num2, width: str2, height: str, maxHeight: "100%", maxWidth: "100%" };
      str = "auto";
      str2 = "auto";
      if (first2) {
        str2 = width;
      }
      if (first2) {
        str = height - num;
      }
      return size;
    }
  }
  Ce.__closure = { IS_IOS: hideControls, animatedKeyboardHeight: tmp8, windowDimensions, shouldLetterboxOrientationLock: tmp42, focusedOrientationLockState, EmbeddedActivityOrientationLockState: applicationId(2019).EmbeddedActivityOrientationLockState, ACTIVITY_LOCKED_ASPECT_RATIO: guild_id, isActivityFocused: first2, backgroundColor };
  Ce.__workletHash = 17497392572544;
  Ce.__initData = callback2;
  ({ IS_IOS: hideControls, animatedKeyboardHeight: tmp8, windowDimensions, shouldLetterboxOrientationLock: tmp42, focusedOrientationLockState, EmbeddedActivityOrientationLockState: applicationId(2019).EmbeddedActivityOrientationLockState, ACTIVITY_LOCKED_ASPECT_RATIO: guild_id, isActivityFocused: first2, backgroundColor });
  const animatedStyle = tmp9Result17.useAnimatedStyle(Ce);
  const items11 = [mode];
  const items12 = [controlsSpecs, first2, hideControls];
  const tmp9Result18 = applicationId(504);
  const stateFromStores2 = tmp9Result18.useStateFromStores(items11, () => mode.getShowActivitiesDebugOverlay());
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp50Result2;
    let tmp47;
    if (tmp23) {
      const obj8 = { gesture: tmp45, children: tmp51(tmp5Result3, obj10) };
      const GestureDetector2 = tmp9(5303).GestureDetector;
      obj10 = { layout, pointerEvents: str, style: animatedStyle, children: items13 };
      str = "none";
      tmp51 = focusedOrientationLockState;
      tmp5Result3 = sharedVisible(7241);
      if (first2) {
        str = "auto";
      }
      const obj11 = { channelId, activityName: name, isActivityFocused: first2, children: gridOrientationLockState(sharedVisible(11793), obj12, first) };
      name = undefined;
      const tmp5Result4 = sharedVisible(19254);
      if (first1 != null) {
        name = first1.name;
      }
      obj12 = { channel: stateFromStores, layoutMode: tmp46 };
      items13 = [gridOrientationLockState(tmp5Result4, obj11), ];
      let tmp50Result = null;
      if (stateFromStores2) {
        tmp50Result = tmp50(tmp5(19255), {});
      }
      items13[1] = tmp50Result;
      tmp50Result2 = tmp50(GestureDetector2, obj8);
      tmp47 = tmp50;
    } else if (null == activityShelfItemData) {
      const obj13 = { activity: stateFromStores1, application: first1 };
      tmp50Result2 = gridOrientationLockState(tmp5(19256), obj13);
      tmp47 = gridOrientationLockState;
    } else {
      tmp47 = gridOrientationLockState;
      const obj14 = { gesture: memo1, children: gridOrientationLockState(sharedVisible(19260), obj15) };
      const GestureDetector = tmp9(5303).GestureDetector;
      obj15 = { context: memo, guildId: stateFromStores.guild_id, activityItem: activityShelfItemData, locationObject: analyticsContext.location, itemDimensions: first3, disableBadges: true };
      tmp50Result2 = gridOrientationLockState(GestureDetector, obj14);
    }
    const obj16 = { value: analyticsLocations, children: tmp50Result2 };
    return tmp47(applicationId(7326).AnalyticsLocationProvider, obj16);
  }
}
({ IS_IOS: metroImportAll, VoicePanelModes: c9 } = VoicePanelConstants);
let VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const ThemeTypes = Constants.ThemeTypes;
let closure_12 = Constants2.ACTIVITY_LOCKED_ASPECT_RATIO;
const ActivityLayoutMode = Constants3.ActivityLayoutMode;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = { activityContainerBackground: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_16 = createStyles.createStyles(obj);
let closure_17 = { code: "function VoicePanelAnimatedActivityCardTsx1(){const{sharedVisible,mode}=this.__closure;return{visible:sharedVisible.get(),mode:mode.get()};}" };
let closure_18 = { code: "function VoicePanelAnimatedActivityCardTsx2({visible:visible,mode:mode},prev){const{VoicePanelModes,runOnJS,incrementActivityKey}=this.__closure;if(visible===1&&prev!=null&&prev.visible===0||mode!==VoicePanelModes.PIP&&(prev===null||prev===void 0?void 0:prev.mode)===VoicePanelModes.PIP){runOnJS(incrementActivityKey)();}}" };
let __initData = { code: "function VoicePanelAnimatedActivityCardTsx3(){const{activityParticipantId,focused,mode,VoicePanelModes}=this.__closure;var _focused$get;return activityParticipantId!=null&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===activityParticipantId&&mode.get()===VoicePanelModes.PANEL;}" };
let closure_20 = { code: "function VoicePanelAnimatedActivityCardTsx4(isActivityFocused,wasActivityFocused){const{runOnJS,setIsActivityFocused}=this.__closure;if(isActivityFocused!==wasActivityFocused){runOnJS(setIsActivityFocused)(isActivityFocused);}}" };
let closure_21 = { code: "function VoicePanelAnimatedActivityCardTsx5(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
let __initData2 = { code: "function VoicePanelAnimatedActivityCardTsx6(windowDimensionsValue,prevWindowDimensionsValue){const{runOnJS,handleTargetAspectRatioParams,gridOrientationLockState,hasJoined,updateNotJoinedActivityDimensions}=this.__closure;if(windowDimensionsValue.landscape!==(prevWindowDimensionsValue===null||prevWindowDimensionsValue===void 0?void 0:prevWindowDimensionsValue.landscape)){runOnJS(handleTargetAspectRatioParams)(windowDimensionsValue.landscape,gridOrientationLockState,hasJoined);}runOnJS(updateNotJoinedActivityDimensions)();}" };
let closure_23 = { code: "function VoicePanelAnimatedActivityCardTsx7(){const{IS_IOS,animatedKeyboardHeight,windowDimensions,shouldLetterboxOrientationLock,focusedOrientationLockState,EmbeddedActivityOrientationLockState,ACTIVITY_LOCKED_ASPECT_RATIO,isActivityFocused,backgroundColor}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const isScreenLandscape=windowDimensions.get().landscape;const screenWidth=windowDimensions.get().width;const screenHeight=windowDimensions.get().height;const shouldLetterBox=shouldLetterboxOrientationLock&&focusedOrientationLockState===EmbeddedActivityOrientationLockState.LANDSCAPE&&!isScreenLandscape;const shouldPillarBox=shouldLetterboxOrientationLock&&focusedOrientationLockState===EmbeddedActivityOrientationLockState.PORTRAIT&&isScreenLandscape;let containerPaddingVertical=0;let containerPaddingHorizontal=0;if(shouldLetterBox){containerPaddingVertical=(screenHeight-screenWidth*ACTIVITY_LOCKED_ASPECT_RATIO)/2;}else if(shouldPillarBox){containerPaddingHorizontal=(screenWidth-screenHeight*ACTIVITY_LOCKED_ASPECT_RATIO)/2;}return{flex:isActivityFocused?0:1,backgroundColor:backgroundColor,paddingVertical:containerPaddingVertical,paddingHorizontal:containerPaddingHorizontal,width:isActivityFocused?screenWidth:'auto',height:isActivityFocused?screenHeight-keyboardHeight:'auto',maxHeight:'100%',maxWidth:'100%'};}" };
let closure_24 = { code: "function VoicePanelAnimatedActivityCardTsx8(event,manager){const{controlsSpecs,VoicePanelControlsModes,runOnJS,hideControls}=this.__closure;manager.fail();if(controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN){runOnJS(hideControls)({debounce:true});}}" };
const memoResult = react.memo(function VoicePanelAnimatedActivityCard(arg0) {
  let obj2;
  const obj = { theme: ThemeTypes.DARK, children: authStore3(VoicePanelAnimatedActivityCardInner, obj2) };
  obj2 = {};
  const ThemeContextProvider = native.ThemeContextProvider;
  const merged = Object.assign(arg0);
  return authStore3(ThemeContextProvider, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx");

export default memoResult;
