// Module ID: 16949
// Function ID: 16950
// Name: VoicePanelSecondaryPIPContent
// Dependencies: [19, 2050, 8496, 2051, 2011, 8499, 8497, 21, 4837, 558, 576, 11647, 16847, 4461, 504, 4570, 10491, 8798, 16813, 16281, 8909, 6495, 2]

// Module 16949 (VoicePanelSecondaryPIPContent)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 2011 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8499 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10491 */;
import getActivityContainerPIPStylesSpecDefault from "getActivityContainerPIPStylesSpec" /* 16813 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import FramesStore from "FramesStore" /* 8496 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import FramesConstants from "FramesConstants" /* 8497 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let unpackModuleId;
const ActivityLayoutMode = Constants.ActivityLayoutMode;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ asLaunched: c9, FrameLayoutModes: c10, getPipOrientationLockStateForFrame: unpackModuleId } = FramesConstants);
const jsx = Fragment.jsx;
let closure_13 = createStyles.createStyles({ activityContainer: { flex: 1 }, wrapper: { position: "absolute", left: "50%", top: "50%" } });
const __initData = { code: "function VoicePanelSecondaryPIPContentTsx1(){const{pipState,roundToNearestPixel}=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=pipState.height*scale;return{width:width,height:height,marginLeft:roundToNearestPixel(width/2)*-1,marginTop:roundToNearestPixel(height/2)*-1};}" };
const __initData2 = { code: "function VoicePanelSecondaryPIPContentTsx2(){const{pipState,getActivityContainerPipStylesSpec,activePipOrientationLockState,windowDimensions}=this.__closure;const scale_0=pipState.scale.get();const{width:width_0,height:height_0,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width*scale_0,pipHeight:pipState.height*scale_0,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width_0,height:height_0,left:shouldHorizontallyCenter?\"50%\":\"0%\",top:shouldVerticallyCenter?\"50%\":\"0%\",marginLeft:marginLeft,marginTop:marginTop};}" };
const __initData3 = { code: "function VoicePanelSecondaryPIPContentTsx3(){const{pipState,roundToNearestPixel}=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=pipState.height*scale;return{width:width,height:height,marginLeft:roundToNearestPixel(width/2)*-1,marginTop:roundToNearestPixel(height/2)*-1};}" };
const __initData4 = { code: "function VoicePanelSecondaryPIPContentTsx4(){const{pipState,getActivityContainerPipStylesSpec,activePipOrientationLockState,windowDimensions}=this.__closure;const scale_0=pipState.scale.get();const{width:width_0,height:height_0,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width*scale_0,pipHeight:pipState.height*scale_0,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width_0,height:height_0,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};}" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let connectedEmbeddedActivity;
  let connectedEmbeddedActivityChannelId;
  let framePanelMode;
  let framePipOrientationLockState;
  let mainFrame;
  let pIPState;
  let panelMode;
  let pipOrientationLockState;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp17;
  let tmp7;
  let tmp8;
  let windowDimensions;
  let tmp = windowDimensions;
  let tmp2 = connectedEmbeddedActivityChannelId;
  let obj = windowDimensions(connectedEmbeddedActivityChannelId[10]);
  const cResult = obj.c(22);
  windowDimensions = pipOrientationLockState.useContext(pIPState(connectedEmbeddedActivityChannelId[11])).windowDimensions;
  let obj2 = windowDimensions(connectedEmbeddedActivityChannelId[12]);
  pIPState = obj2.usePIPState();
  const tmp6 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    const fn = function w() {
      let obj3;
      let pipOrientationLockStateForApp;
      const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
      const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
      let applicationId;
      if (selfEmbeddedActivityForLocation != null) {
        applicationId = selfEmbeddedActivityForLocation.applicationId;
      }
      const obj2 = { connectedEmbeddedActivityChannelId: obj3.getEmbeddedActivityLocationChannelId(connectedActivityLocation), connectedEmbeddedActivity: selfEmbeddedActivityForLocation, pipOrientationLockState: pipOrientationLockStateForApp, panelMode: EmbeddedActivitiesStore.getActivityPanelMode() };
      pipOrientationLockStateForApp = undefined;
      obj3 = windowDimensions(connectedEmbeddedActivityChannelId[13]);
      if (null != applicationId) {
        pipOrientationLockStateForApp = obj.getPipOrientationLockStateForApp(applicationId);
      }
      return obj2;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = tmp(tmp2[14]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp7, tmp8);
  connectedEmbeddedActivityChannelId = stateFromStoresObject.connectedEmbeddedActivityChannelId;
  pipOrientationLockState = stateFromStoresObject.pipOrientationLockState;
  ({ connectedEmbeddedActivity, panelMode } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [FramesStore];
    class O {
      constructor() {
        let activityPanelMode;
        const tmp = closure_1_9(mainFrame.getMainFrame());
        const obj = { hasLaunchedFrame: null != tmp, framePanelMode: activityPanelMode, framePipOrientationLockState: closure_1_11(tmp) };
        activityPanelMode = undefined;
        if (tmp != null) {
          activityPanelMode = tmp.data.activityPanelMode;
        }
        if (activityPanelMode == null) {
          activityPanelMode = constants.DISCONNECTED;
        }
        return obj;
      }
    }
    cResult[2] = items1;
    cResult[3] = O;
    tmp12 = O;
    tmp11 = items1;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult5 = tmp(tmp2[14]);
  const stateFromStoresObject1 = tmpResult5.useStateFromStoresObject(tmp11, tmp12);
  let hasLaunchedFrame = stateFromStoresObject1.hasLaunchedFrame;
  ({ framePanelMode, framePipOrientationLockState } = stateFromStoresObject1);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    class O {
      constructor() {
        let activityPanelMode;
        const tmp = closure_1_9(mainFrame.getMainFrame());
        const obj = { hasLaunchedFrame: null != tmp, framePanelMode: activityPanelMode, framePipOrientationLockState: closure_1_11(tmp) };
        activityPanelMode = undefined;
        if (tmp != null) {
          activityPanelMode = tmp.data.activityPanelMode;
        }
        if (activityPanelMode == null) {
          activityPanelMode = constants.DISCONNECTED;
        }
        return obj;
      }
    }
    cResult[4] = items2;
    tmp15 = items2;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== connectedEmbeddedActivityChannelId) {
    class E {
      constructor() {
        return ChannelStore.getChannel(connectedEmbeddedActivityChannelId);
      }
    }
    cResult[5] = connectedEmbeddedActivityChannelId;
    class O {
      constructor() {
        let activityPanelMode;
        const tmp = closure_1_9(mainFrame.getMainFrame());
        const obj = { hasLaunchedFrame: null != tmp, framePanelMode: activityPanelMode, framePipOrientationLockState: closure_1_11(tmp) };
        activityPanelMode = undefined;
        if (tmp != null) {
          activityPanelMode = tmp.data.activityPanelMode;
        }
        if (activityPanelMode == null) {
          activityPanelMode = constants.DISCONNECTED;
        }
        return obj;
      }
    }
    cResult[6] = E;
    tmp17 = E;
  } else {
    class E {
      constructor() {
        return ChannelStore.getChannel(connectedEmbeddedActivityChannelId);
      }
    }
  }
  const tmpResult6 = tmp(tmp2[14]);
  const stateFromStores = tmpResult6.useStateFromStores(tmp15, tmp17);
  const fn2 = function z() {
    const scale = pIPState.scale;
    const value = scale.get();
    const result = pIPState.width * value;
    const result1 = pIPState.height * value;
    size = { width: result, height: result1, marginLeft: -1 * roundToNearestPixelDefault(result / 2), marginTop: -1 * roundToNearestPixelDefault(result1 / 2) };
    return size;
  };
  const tmpResult7 = tmp(tmp2[15]);
  let obj3 = { pipState: pIPState, roundToNearestPixel: tmp4(tmp2[16]) };
  fn2.__closure = obj3;
  fn2.__workletHash = 12892763508939;
  fn2.__initData = __initData;
  const animatedStyle = tmpResult7.useAnimatedStyle(fn2);
  let tmp20 = null != connectedEmbeddedActivity && !tmp4(tmp2[17])(connectedEmbeddedActivityChannelId);
  if (tmp20) {
    class E {
      constructor() {
        return ChannelStore.getChannel(connectedEmbeddedActivityChannelId);
      }
    }
    tmp20 = panelMode === ActivityPanelModes.PIP;
  }
  if (hasLaunchedFrame) {
    class E {
      constructor() {
        return ChannelStore.getChannel(connectedEmbeddedActivityChannelId);
      }
    }
    hasLaunchedFrame = framePanelMode === ActivityPanelModes.PIP;
  }
  if (hasLaunchedFrame) {
    class E {
      constructor() {
        return ChannelStore.getChannel(connectedEmbeddedActivityChannelId);
      }
    }
  }
  const fn3 = function j() {
    let str;
    let str2;
    const scale = pIPState.scale;
    const value = scale.get();
    const obj = { pipWidth: pIPState.width * value, pipHeight: pIPState.height * value, pipOrientationLockState, isLandscape: windowDimensions.get().landscape };
    const tmp2 = getActivityContainerPIPStylesSpecDefault;
    size = tmp2(obj);
    const size1 = { width: size.width, height: size.height, left: str2, top: str, marginLeft: null, marginTop: null };
    str = "0%";
    str2 = "0%";
    const shouldVerticallyCenter = size.shouldVerticallyCenter;
    if (size.shouldHorizontallyCenter) {
      str2 = "50%";
    }
    if (shouldVerticallyCenter) {
      str = "50%";
    }
    ({ marginLeft: obj2.marginLeft, marginTop: obj2.marginTop } = size);
    return size1;
  };
  const tmpResult8 = tmp(tmp2[15]);
  fn3.__closure = { pipState: pIPState, getActivityContainerPipStylesSpec: pIPState(tmp2[18]), activePipOrientationLockState: pipOrientationLockState, windowDimensions };
  fn3.__workletHash = 10060457878293;
  fn3.__initData = __initData2;
  ({ pipState: pIPState, getActivityContainerPipStylesSpec: pIPState(tmp2[18]), activePipOrientationLockState: pipOrientationLockState, windowDimensions });
  const animatedStyle1 = tmpResult8.useAnimatedStyle(fn3);
  if (tmp20) {
    class E {
      constructor() {
        return ChannelStore.getChannel(connectedEmbeddedActivityChannelId);
      }
    }
    const items3 = [tmp6.wrapper, ];
    class O {
      constructor() {
        let activityPanelMode;
        const tmp = closure_1_9(mainFrame.getMainFrame());
        const obj = { hasLaunchedFrame: null != tmp, framePanelMode: activityPanelMode, framePipOrientationLockState: closure_1_11(tmp) };
        activityPanelMode = undefined;
        if (tmp != null) {
          activityPanelMode = tmp.data.activityPanelMode;
        }
        if (activityPanelMode == null) {
          activityPanelMode = constants.DISCONNECTED;
        }
        return obj;
      }
    }
    cResult[7] = tmp6.wrapper;
    cResult[8] = animatedStyle;
    cResult[9] = items3;
  } else {
    class E {
      constructor() {
        return ChannelStore.getChannel(connectedEmbeddedActivityChannelId);
      }
    }
  }
  return tmp22;
}) : (() => {
  let connectedEmbeddedActivity;
  let connectedEmbeddedActivityChannelId;
  let framePanelMode;
  let framePipOrientationLockState;
  let hasLaunchedFrame;
  let items3;
  let mainFrame;
  let pIPState;
  let panelMode;
  let pipOrientationLockState;
  let tmp16Result2;
  let tmp = pIPState;
  let tmp2 = connectedEmbeddedActivityChannelId;
  const windowDimensions = pipOrientationLockState.useContext(pIPState(connectedEmbeddedActivityChannelId[11])).windowDimensions;
  let obj = windowDimensions(connectedEmbeddedActivityChannelId[12]);
  pIPState = obj.usePIPState();
  const tmp5 = closure_13();
  let obj2 = windowDimensions(connectedEmbeddedActivityChannelId[14]);
  const items = [EmbeddedActivitiesStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let obj3;
    let pipOrientationLockStateForApp;
    const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    let applicationId;
    if (selfEmbeddedActivityForLocation != null) {
      applicationId = selfEmbeddedActivityForLocation.applicationId;
    }
    const obj2 = { connectedEmbeddedActivityChannelId: obj3.getEmbeddedActivityLocationChannelId(connectedActivityLocation), connectedEmbeddedActivity: selfEmbeddedActivityForLocation, pipOrientationLockState: pipOrientationLockStateForApp, panelMode: EmbeddedActivitiesStore.getActivityPanelMode() };
    pipOrientationLockStateForApp = undefined;
    obj3 = windowDimensions(connectedEmbeddedActivityChannelId[13]);
    if (null != applicationId) {
      pipOrientationLockStateForApp = obj.getPipOrientationLockStateForApp(applicationId);
    }
    return obj2;
  });
  connectedEmbeddedActivityChannelId = stateFromStoresObject.connectedEmbeddedActivityChannelId;
  ({ pipOrientationLockState, connectedEmbeddedActivity, panelMode } = stateFromStoresObject);
  let obj3 = windowDimensions(connectedEmbeddedActivityChannelId[14]);
  const items1 = [FramesStore];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items1, () => {
    let activityPanelMode;
    const tmp = closure_1_9(mainFrame.getMainFrame());
    const obj = { hasLaunchedFrame: null != tmp, framePanelMode: activityPanelMode, framePipOrientationLockState: closure_1_11(tmp) };
    activityPanelMode = undefined;
    if (tmp != null) {
      activityPanelMode = tmp.data.activityPanelMode;
    }
    if (activityPanelMode == null) {
      activityPanelMode = constants.DISCONNECTED;
    }
    return obj;
  });
  ({ hasLaunchedFrame, framePanelMode, framePipOrientationLockState } = stateFromStoresObject1);
  const items2 = [ChannelStore];
  const obj4 = windowDimensions(connectedEmbeddedActivityChannelId[14]);
  const stateFromStores = obj4.useStateFromStores(items2, () => ChannelStore.getChannel(connectedEmbeddedActivityChannelId));
  const fn = function p() {
    const scale = pIPState.scale;
    const value = scale.get();
    const result = pIPState.width * value;
    const result1 = pIPState.height * value;
    size = { width: result, height: result1, marginLeft: -1 * roundToNearestPixelDefault(result / 2), marginTop: -1 * roundToNearestPixelDefault(result1 / 2) };
    return size;
  };
  const obj5 = windowDimensions(connectedEmbeddedActivityChannelId[15]);
  fn.__closure = { pipState: pIPState, roundToNearestPixel: pIPState(connectedEmbeddedActivityChannelId[16]) };
  fn.__workletHash = 14750544060809;
  fn.__initData = __initData3;
  let tmp10 = null != connectedEmbeddedActivity;
  ({ pipState: pIPState, roundToNearestPixel: pIPState(connectedEmbeddedActivityChannelId[16]) });
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const tmp3 = windowDimensions;
  if (tmp10) {
    tmp10 = !tmp(tmp2[17])(connectedEmbeddedActivityChannelId);
  }
  if (tmp10) {
    tmp10 = panelMode === ActivityPanelModes.PIP;
  }
  if (hasLaunchedFrame) {
    hasLaunchedFrame = framePanelMode === ActivityPanelModes.PIP;
  }
  if (hasLaunchedFrame) {
    pipOrientationLockState = framePipOrientationLockState;
  }
  tmp3(tmp2[15]);
  const fn2 = function v() {
    let str;
    let str2;
    const scale = pIPState.scale;
    const value = scale.get();
    const obj = { pipWidth: pIPState.width * value, pipHeight: pIPState.height * value, pipOrientationLockState, isLandscape: windowDimensions.get().landscape };
    const tmp2 = getActivityContainerPIPStylesSpecDefault;
    size = tmp2(obj);
    const size1 = { width: size.width, height: size.height, left: str2, top: str, marginLeft: null, marginTop: null };
    str = "0%";
    str2 = "0%";
    const shouldVerticallyCenter = size.shouldVerticallyCenter;
    if (size.shouldHorizontallyCenter) {
      str2 = "50%";
    }
    if (shouldVerticallyCenter) {
      str = "50%";
    }
    ({ marginLeft: obj2.marginLeft, marginTop: obj2.marginTop } = size);
    return size1;
  };
  fn2.__closure = { pipState: pIPState, getActivityContainerPipStylesSpec: tmp(tmp2[18]), activePipOrientationLockState: pipOrientationLockState, windowDimensions };
  fn2.__workletHash = 3704190236691;
  fn2.__initData = __initData4;
  ({ pipState: pIPState, getActivityContainerPipStylesSpec: tmp(tmp2[18]), activePipOrientationLockState: pipOrientationLockState, windowDimensions });
  if (tmp10) {
    const obj8 = { style: items3, pointerEvents: "none", children: null };
    items3 = [tmp5.wrapper, animatedStyle];
    const items4 = [tmp5.activityContainer, tmp14];
    const tmpResult = tmp(tmp2[21]);
    tmp(tmp2[21]);
    if (hasLaunchedFrame) {
      const obj10 = { layoutMode: constants.PIP };
      let tmp16Result = tmp16(tmp(tmp2[19]), obj10);
    } else {
      const obj11 = { channel: stateFromStores, layoutMode: ActivityLayoutMode.PIP };
      tmp16Result = tmp16(tmp(tmp2[20]), obj11);
    }
    tmp16Result2 = tmp16(tmpResult, obj8);
  } else {
    tmp16Result2 = null;
  }
  return tmp16Result2;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx");

export default tmp3;
