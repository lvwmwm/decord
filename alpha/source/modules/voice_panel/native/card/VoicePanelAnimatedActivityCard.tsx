// Module ID: 20022
// Function ID: 20023
// Name: VoicePanelAnimatedActivityCard
// Dependencies: [32, 19, 5154, 12719, 5155, 11985, 11983, 1072, 2145, 12706, 21, 5306, 575, 11984, 13129, 504, 20023, 12736, 7259, 12842, 7918, 7937, 11297, 5978, 1655, 1708, 7025, 5598, 2146, 1496, 11008, 20024, 12848, 20025, 20026, 20030, 5377, 2]

// Module 20022 (VoicePanelAnimatedActivityCard)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import useWindowDimensions from "useWindowDimensions" /* 1496 */;
import _mod1708 from "module_1708" /* 1708 */;
import Constants2 from "Constants" /* 2145 */;
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2146 */;
import native from "native" /* 5377 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5598 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11983 */;
import Constants3 from "Constants" /* 12706 */;
import fetchShelf from "fetchShelf" /* 12736 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5154 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 12719 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11985 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c9;
let closure_14;
let closure_15;
let metroImportAll;
let obj2;
function VoicePanelAnimatedActivityCardInner(applicationId) {
  let View;
  let closure_1;
  let hideControls;
  let items27;
  let layout;
  let mode;
  let name;
  let obj11;
  let obj5;
  let obj8;
  let sharedVisible;
  let str;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp66;
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp73;
  let tmp74;
  let tmp75;
  let tmp76;
  let tmp77;
  let tmp78;
  let tmp79;
  let tmp88;
  let windowDimensions;
  applicationId = applicationId.applicationId;
  let channelId;
  let layoutManager;
  hideControls = undefined;
  let guild_id;
  let first1;
  let gridOrientationLockState;
  let closure_10;
  let first2;
  let callback1;
  let closure_13;
  ({ sharedVisible, layout } = applicationId);
  let obj = hideControls;
  let tmp = closure_16();
  let tmp2 = layoutManager;
  let tmp3 = layoutManager(hideControls.useState(0), 2);
  importDefault = tmp3[1];
  const tmp5 = importDefault;
  const tmp6 = channelId;
  const first = tmp3[0];
  const context = hideControls.useContext(require("VoicePanelStateContext"));
  channelId = context.channelId;
  layoutManager = context.layoutManager;
  ({ mode, windowDimensions, hideControls } = context);
  const controlsSpecs = context.controlsSpecs;
  const focused = context.focused;
  const tmp8 = require("useAnimatedKeyboardHeight")();
  let obj2 = applicationId(channelId[15]);
  let items = [guild_id];
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let items1 = [stateFromStores];
  guild_id = undefined;
  const memo = hideControls.useMemo(() => ({ channel: stateFromStores, type: "channel" }), items1);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let guild_id1;
  const useActivityShelfItemData = tmp9(tmp6[16]).useActivityShelfItemData;
  applicationId(tmp6[16]);
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
  first1 = tmp2(tmp5(tmp6[18])(items3), 1)[0];
  const items4 = [controlsSpecs];
  const items5 = [applicationId];
  const tmp9Result10 = applicationId(tmp6[15]);
  const stateFromStoresObject = tmp9Result10.useStateFromStoresObject(items4, () => {
    const obj = { gridOrientationLockState: EmbeddedActivitiesStore.getGridOrientationLockStateForApp(applicationId), focusedOrientationLockState: EmbeddedActivitiesStore.getOrientationLockStateForApp(applicationId) };
    return obj;
  }, items5);
  gridOrientationLockState = stateFromStoresObject.gridOrientationLockState;
  const focusedOrientationLockState = stateFromStoresObject.focusedOrientationLockState;
  const tmp19 = tmp5(tmp6[19])();
  const items6 = [controlsSpecs];
  const tmp9Result11 = applicationId(tmp6[15]);
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
  const tmp5Result = tmp5(tmp6[20]);
  const analyticsLocations = tmp5Result(tmp5(tmp6[21]).ACTIVITY_TILE).analyticsLocations;
  let tmp23 = null != tmp19;
  const tmp9Result12 = applicationId(tmp6[22]);
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
          const obj = applicationId(channelId[23]);
          return obj.isActivityParticipantCurrentUserCurrentSession(item);
        });
      }
    }
    tmp23 = null != found;
  }
  closure_10 = tmp23;
  const items7 = [tmp23];
  const callback = obj.useCallback(() => {
    const tmp = closure_10;
    if (tmp) {
      closure_1((arg0) => arg0 + 1);
    }
  }, items7);
  const items8 = [closure_17, sharedVisible, mode];
  let c0;
  let c1;
  [tmp28, tmp29, tmp30] = items8;
  const tmp9Result13 = applicationId(tmp6[24]);
  class VoicePanelAnimatedActivityCardTsx1 {
    constructor() {
      const obj = { visible: _undefined.get(), mode: _undefined2.get() };
      return obj;
    }
  }
  const items9 = [tmp29, tmp30];
  VoicePanelAnimatedActivityCardTsx1.__closure = items9;
  VoicePanelAnimatedActivityCardTsx1.__workletHash = 16491261226517;
  VoicePanelAnimatedActivityCardTsx1.__initData = tmp28;
  const items10 = [closure_18, gridOrientationLockState, , ];
  const useAnimatedReaction = tmp9Result13.useAnimatedReaction;
  items10[2] = applicationId(tmp6[25]).scheduleOnRN;
  items10[3] = callback;
  c0 = undefined;
  c1 = undefined;
  let c2;
  [tmp32, tmp33, tmp34, tmp35] = items10;
  const tmp31 = gridOrientationLockState;
  class VoicePanelAnimatedActivityCardTsx2 {
    constructor(visible, visible2) {
      let tmp = 1 === visible.visible;
      const mode = visible.mode;
      if (tmp) {
        tmp = null != visible2;
      }
      if (tmp) {
        tmp = 0 === visible2.visible;
      }
      if (!tmp) {
        let tmp4 = mode !== _undefined.PIP;
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
        _undefined2(c2);
      }
    }
  }
  const items11 = [tmp33, tmp34, tmp35];
  VoicePanelAnimatedActivityCardTsx2.__closure = items11;
  VoicePanelAnimatedActivityCardTsx2.__workletHash = 99201814605;
  VoicePanelAnimatedActivityCardTsx2.__initData = tmp32;
  const animatedReaction = useAnimatedReaction(VoicePanelAnimatedActivityCardTsx1, VoicePanelAnimatedActivityCardTsx2);
  const tmp2Result = tmp2(obj.useState(false), 2);
  first2 = tmp2Result[0];
  let embeddedActivityParticipantId = null;
  const tmp39 = tmp2Result[1];
  if (null != stateFromStores1) {
    const obj3 = { applicationId: null, instanceId: null };
    ({ applicationId: obj7.applicationId, compositeInstanceId: obj7.instanceId } = stateFromStores1);
    const tmp9Result14 = applicationId(tmp6[26]);
    embeddedActivityParticipantId = tmp9Result14.getEmbeddedActivityParticipantId(obj3);
  }
  const items12 = [closure_19, embeddedActivityParticipantId, focused, mode, tmp31];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  [tmp42, tmp43, tmp44, tmp45, tmp46] = items12;
  const tmp9Result15 = applicationId(tmp6[24]);
  class VoicePanelAnimatedActivityCardTsx3 {
    constructor() {
      let tmp2 = null != c0;
      if (tmp2) {
        const value = _undefined.get();
        let id;
        if (value != null) {
          id = value.id;
        }
        tmp2 = id === tmp;
      }
      if (tmp2) {
        tmp2 = _undefined2.get() === _undefined3.PANEL;
      }
      return tmp2;
    }
  }
  const items13 = [tmp43, tmp44, tmp45, tmp46];
  VoicePanelAnimatedActivityCardTsx3.__closure = items13;
  VoicePanelAnimatedActivityCardTsx3.__workletHash = 9763688087086;
  VoicePanelAnimatedActivityCardTsx3.__initData = tmp42;
  const items14 = [closure_20, , ];
  const useAnimatedReaction2 = tmp9Result15.useAnimatedReaction;
  items14[1] = applicationId(tmp6[25]).scheduleOnRN;
  items14[2] = tmp39;
  c0 = undefined;
  c1 = undefined;
  [tmp47, tmp48, tmp49] = items14;
  class VoicePanelAnimatedActivityCardTsx4 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items15 = [tmp48, tmp49];
  VoicePanelAnimatedActivityCardTsx4.__closure = items15;
  VoicePanelAnimatedActivityCardTsx4.__workletHash = 15038072144431;
  VoicePanelAnimatedActivityCardTsx4.__initData = tmp47;
  const animatedReaction2 = useAnimatedReaction2(VoicePanelAnimatedActivityCardTsx3, VoicePanelAnimatedActivityCardTsx4);
  const items16 = [layoutManager, applicationId];
  const memo1 = obj.useMemo(() => {
    const Gesture = applicationId(channelId[27]).Gesture;
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
  }, items16);
  const items17 = [callback1, windowDimensions, gridOrientationLockState, tmp23];
  const layoutEffect = obj.useLayoutEffect(() => {
    const obj = useWindowDimensions;
    size = obj.getWindowDimensions();
    callback1(size.width > size.height, gridOrientationLockState, closure_10);
  }, items17);
  const tmp2Result2 = tmp2(obj.useState(layoutManager.getDefaultTargetDimensions()), 2);
  closure_13 = tmp56;
  const items18 = [layoutManager, tmp2Result2[1]];
  const first3 = tmp2Result2[0];
  const callback2 = obj.useCallback(() => {
    closure_13(layoutManager.getDefaultTargetDimensions());
  }, items18);
  const items19 = [closure_21, windowDimensions];
  c0 = undefined;
  [tmp59, tmp60] = items19;
  const tmp9Result16 = applicationId(tmp6[24]);
  class VoicePanelAnimatedActivityCardTsx5 {
    constructor() {
      return _undefined.get();
    }
  }
  const items20 = [tmp60];
  VoicePanelAnimatedActivityCardTsx5.__closure = items20;
  VoicePanelAnimatedActivityCardTsx5.__workletHash = 5144095293283;
  VoicePanelAnimatedActivityCardTsx5.__initData = tmp59;
  const items21 = [closure_22, , , , , ];
  const useAnimatedReaction3 = tmp9Result16.useAnimatedReaction;
  items21[1] = applicationId(tmp6[25]).scheduleOnRN;
  items21[2] = callback1;
  items21[3] = gridOrientationLockState;
  items21[4] = tmp23;
  items21[5] = callback2;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  let c4;
  [tmp61, tmp62, tmp63, tmp64, tmp65, tmp66] = items21;
  class VoicePanelAnimatedActivityCardTsx6 {
    constructor(landscape, landscape2) {
      let landscape1;
      landscape = landscape.landscape;
      if (landscape2 != null) {
        landscape1 = landscape2.landscape;
      }
      if (landscape !== landscape1) {
        _undefined(c1, landscape.landscape, c2, c3);
      }
      _undefined(c4);
    }
  }
  const items22 = [tmp62, tmp63, tmp64, tmp65, tmp66];
  VoicePanelAnimatedActivityCardTsx6.__closure = items22;
  VoicePanelAnimatedActivityCardTsx6.__workletHash = 2894942813743;
  VoicePanelAnimatedActivityCardTsx6.__initData = tmp61;
  const animatedReaction3 = useAnimatedReaction3(VoicePanelAnimatedActivityCardTsx5, VoicePanelAnimatedActivityCardTsx6);
  backgroundColor = tmp.activityContainerBackground.backgroundColor;
  const items23 = [closure_23, first1, tmp8, windowDimensions, !tmp5(tmp6[30])(), focusedOrientationLockState, , , , ];
  const tmp68 = !tmp5(tmp6[30])();
  const useAnimatedStyle = tmp9(tmp6[24]).useAnimatedStyle;
  applicationId(tmp6[24]);
  items23[6] = applicationId(tmp6[28]).EmbeddedActivityOrientationLockState;
  items23[7] = callback1;
  items23[8] = first2;
  items23[9] = backgroundColor;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79] = items23;
  class VoicePanelAnimatedActivityCardTsx7 {
    constructor() {
      let num2;
      let num3;
      let str;
      let str2;
      let num = 0;
      if (c0) {
        num = _undefined.get();
      }
      const landscape = _undefined2.get().landscape;
      const width = _undefined2.get().width;
      const height = _undefined2.get().height;
      let tmp2 = c3;
      const tmp3 = c3 && c4 === _undefined3.LANDSCAPE && !landscape;
      if (tmp2) {
        tmp2 = c4 === _undefined3.PORTRAIT;
      }
      if (tmp2) {
        tmp2 = landscape;
      }
      if (tmp3) {
        num3 = (height - width * c6) / 2;
        num2 = 0;
      } else {
        num2 = 0;
        num3 = 0;
        if (tmp2) {
          num2 = (width - height * c6) / 2;
          num3 = 0;
        }
      }
      let num6 = 1;
      if (c7) {
        num6 = 0;
      }
      size = { flex: num6, backgroundColor, paddingVertical: num3, paddingHorizontal: num2, width: str2, height: str, maxHeight: "100%", maxWidth: "100%" };
      str = "auto";
      str2 = "auto";
      if (c7) {
        str2 = width;
      }
      if (c7) {
        str = height - num;
      }
      return size;
    }
  }
  const items24 = [tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79];
  VoicePanelAnimatedActivityCardTsx7.__closure = items24;
  VoicePanelAnimatedActivityCardTsx7.__workletHash = 7847728562905;
  VoicePanelAnimatedActivityCardTsx7.__initData = tmp70;
  const animatedStyle = useAnimatedStyle(VoicePanelAnimatedActivityCardTsx7);
  const items25 = [stateFromStores];
  const items26 = [controlsSpecs, first2, hideControls];
  const tmp9Result18 = applicationId(tmp6[15]);
  const stateFromStores2 = tmp9Result18.useStateFromStores(items25, () => stateFromStores.getShowActivitiesDebugOverlay());
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp87Result2;
    let tmp84;
    if (tmp23) {
      const obj4 = { gesture: tmp82, children: tmp88(View, obj5) };
      const GestureDetector2 = tmp9(tmp6[27]).GestureDetector;
      obj5 = { layout, pointerEvents: str, style: animatedStyle, children: items27 };
      str = "none";
      View = tmp5(tmp6[24]).View;
      tmp88 = closure_15;
      if (first2) {
        str = "auto";
      }
      const obj6 = { channelId, activityName: name, isActivityFocused: first2, children: closure_14(tmp5(tmp6[32]), obj8, first) };
      name = undefined;
      const tmp5Result2 = tmp5(tmp6[31]);
      if (first1 != null) {
        name = first1.name;
      }
      obj8 = { channel: stateFromStores, layoutMode: tmp83 };
      items27 = [closure_14(tmp5Result2, obj6), ];
      let tmp87Result = null;
      if (stateFromStores2) {
        tmp87Result = tmp87(tmp5(tmp6[33]), {});
      }
      items27[1] = tmp87Result;
      tmp87Result2 = tmp87(GestureDetector2, obj4);
      tmp84 = tmp87;
    } else if (null == activityShelfItemData) {
      const obj9 = { activity: stateFromStores1, application: first1 };
      tmp87Result2 = closure_14(tmp5(tmp6[34]), obj9);
      tmp84 = closure_14;
    } else {
      tmp84 = closure_14;
      const obj10 = { gesture: memo1, children: closure_14(tmp5(tmp6[35]), obj11) };
      const GestureDetector = tmp9(tmp6[27]).GestureDetector;
      obj11 = { context: memo, guildId: stateFromStores.guild_id, activityItem: activityShelfItemData, locationObject: analyticsContext.location, itemDimensions: first3, disableBadges: true };
      tmp87Result2 = closure_14(GestureDetector, obj10);
    }
    const obj12 = { value: analyticsLocations, children: tmp87Result2 };
    return tmp84(applicationId(tmp6[20]).AnalyticsLocationProvider, obj12);
  }
}
({ IS_IOS: metroImportAll, VoicePanelModes: c9 } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const ThemeTypes = Constants.ThemeTypes;
let closure_12 = Constants2.ACTIVITY_LOCKED_ASPECT_RATIO;
const ActivityLayoutMode = Constants3.ActivityLayoutMode;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = { activityContainerBackground: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_16 = createStyles.createStyles(obj);
let closure_17 = { code: "(function VoicePanelAnimatedActivityCardTsx1(){let[sharedVisible,mode]=this.__closure;return{visible:sharedVisible.get(),mode:mode.get()};})" };
let closure_18 = { code: "(function VoicePanelAnimatedActivityCardTsx2({visible:visible,mode:mode},prev){let[VoicePanelModes,scheduleOnRN,incrementActivityKey]=this.__closure;if(visible===1&&prev!=null&&prev.visible===0||mode!==VoicePanelModes.PIP&&(prev===null||prev===void 0?void 0:prev.mode)===VoicePanelModes.PIP){scheduleOnRN(incrementActivityKey);}})" };
let closure_19 = { code: "(function VoicePanelAnimatedActivityCardTsx3(){let[activityParticipantId,focused,mode,VoicePanelModes]=this.__closure;var _focused$get;return activityParticipantId!=null&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===activityParticipantId&&mode.get()===VoicePanelModes.PANEL;})" };
let closure_20 = { code: "(function VoicePanelAnimatedActivityCardTsx4(isActivityFocused,wasActivityFocused){let[scheduleOnRN,setIsActivityFocused]=this.__closure;if(isActivityFocused!==wasActivityFocused){scheduleOnRN(setIsActivityFocused,isActivityFocused);}})" };
let closure_21 = { code: "(function VoicePanelAnimatedActivityCardTsx5(){let[windowDimensions]=this.__closure;return windowDimensions.get();})" };
let closure_22 = { code: "(function VoicePanelAnimatedActivityCardTsx6(windowDimensionsValue,prevWindowDimensionsValue){let[scheduleOnRN,handleTargetAspectRatioParams,gridOrientationLockState,hasJoined,updateNotJoinedActivityDimensions]=this.__closure;if(windowDimensionsValue.landscape!==(prevWindowDimensionsValue===null||prevWindowDimensionsValue===void 0?void 0:prevWindowDimensionsValue.landscape)){scheduleOnRN(handleTargetAspectRatioParams,windowDimensionsValue.landscape,gridOrientationLockState,hasJoined);}scheduleOnRN(updateNotJoinedActivityDimensions);})" };
let closure_23 = { code: "(function VoicePanelAnimatedActivityCardTsx7(){let[IS_IOS,animatedKeyboardHeight,windowDimensions,shouldLetterboxOrientationLock,focusedOrientationLockState,EmbeddedActivityOrientationLockState,ACTIVITY_LOCKED_ASPECT_RATIO,isActivityFocused,backgroundColor]=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const isScreenLandscape=windowDimensions.get().landscape;const screenWidth=windowDimensions.get().width;const screenHeight=windowDimensions.get().height;const shouldLetterBox=shouldLetterboxOrientationLock&&focusedOrientationLockState===EmbeddedActivityOrientationLockState.LANDSCAPE&&!isScreenLandscape;const shouldPillarBox=shouldLetterboxOrientationLock&&focusedOrientationLockState===EmbeddedActivityOrientationLockState.PORTRAIT&&isScreenLandscape;let containerPaddingVertical=0;let containerPaddingHorizontal=0;if(shouldLetterBox){containerPaddingVertical=(screenHeight-screenWidth*ACTIVITY_LOCKED_ASPECT_RATIO)/2;}else if(shouldPillarBox){containerPaddingHorizontal=(screenWidth-screenHeight*ACTIVITY_LOCKED_ASPECT_RATIO)/2;}return{flex:isActivityFocused?0:1,backgroundColor:backgroundColor,paddingVertical:containerPaddingVertical,paddingHorizontal:containerPaddingHorizontal,width:isActivityFocused?screenWidth:'auto',height:isActivityFocused?screenHeight-keyboardHeight:'auto',maxHeight:'100%',maxWidth:'100%'};})" };
let closure_24 = { code: "(function VoicePanelAnimatedActivityCardTsx8(event,manager){let[controlsSpecs,VoicePanelControlsModes,scheduleOnRN,hideControls]=this.__closure;manager.fail();if(controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN){scheduleOnRN(hideControls,{debounce:true});}})" };
const memoResult = react.memo(function VoicePanelAnimatedActivityCard(arg0) {
  let obj2;
  const obj = { theme: ThemeTypes.DARK, children: gesture(VoicePanelAnimatedActivityCardInner, obj2) };
  obj2 = {};
  const ThemeContextProvider = native.ThemeContextProvider;
  const merged = Object.assign(arg0);
  return gesture(ThemeContextProvider, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx");

export default memoResult;
