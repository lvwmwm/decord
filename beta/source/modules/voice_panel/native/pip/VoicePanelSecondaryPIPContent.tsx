// Module ID: 17590
// Function ID: 17591
// Name: VoicePanelSecondaryPIPContent
// Dependencies: [19, 2044, 9311, 2045, 2008, 9313, 9312, 21, 4758, 558, 568, 12419, 17487, 4389, 504, 4497, 11293, 9610, 17454, 16971, 9718, 7320, 2]

// Module 17590 (VoicePanelSecondaryPIPContent)
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11293 */;
import getActivityContainerPIPStylesSpecDefault from "getActivityContainerPIPStylesSpec" /* 17454 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import FramesStore from "FramesStore" /* 9311 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const require = fn;
const ActivityLayoutMode = fn(2008).ActivityLayoutMode;
const ActivityPanelModes = fn(9313).ActivityPanelModes;
const FramesConstants = fn(9312);
({ asLaunched: closure_9, FrameLayoutModes: c10, getPipOrientationLockStateForFrame: closure_11 } = FramesConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_13 = createStyles.createStyles({ activityContainer: { flex: 1 }, wrapper: { position: "absolute", left: "50%", top: "50%" } });
const __initData = { code: "function VoicePanelSecondaryPIPContentTsx1(){const{pipState,roundToNearestPixel}=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=pipState.height*scale;return{width:width,height:height,marginLeft:roundToNearestPixel(width/2)*-1,marginTop:roundToNearestPixel(height/2)*-1};}" };
const __initData2 = { code: "function VoicePanelSecondaryPIPContentTsx2(){const{pipState,getActivityContainerPipStylesSpec,activePipOrientationLockState,windowDimensions}=this.__closure;const scale_0=pipState.scale.get();const{width:width_0,height:height_0,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width*scale_0,pipHeight:pipState.height*scale_0,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width_0,height:height_0,left:shouldHorizontallyCenter?\"50%\":\"0%\",top:shouldVerticallyCenter?\"50%\":\"0%\",marginLeft:marginLeft,marginTop:marginTop};}" };
const __initData3 = { code: "function VoicePanelSecondaryPIPContentTsx3(){const{pipState,roundToNearestPixel}=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=pipState.height*scale;return{width:width,height:height,marginLeft:roundToNearestPixel(width/2)*-1,marginTop:roundToNearestPixel(height/2)*-1};}" };
const __initData4 = { code: "function VoicePanelSecondaryPIPContentTsx4(){const{pipState,getActivityContainerPipStylesSpec,activePipOrientationLockState,windowDimensions}=this.__closure;const scale_0=pipState.scale.get();const{width:width_0,height:height_0,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width*scale_0,pipHeight:pipState.height*scale_0,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width_0,height:height_0,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};}" };
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = windowDimensions(connectedEmbeddedActivityChannelId[10]).c(22);
  windowDimensions = pipOrientationLockState.useContext(pIPState(connectedEmbeddedActivityChannelId[11])).windowDimensions;
  let obj = windowDimensions(connectedEmbeddedActivityChannelId[10]);
  pIPState = windowDimensions(connectedEmbeddedActivityChannelId[12]).usePIPState();
  const tmp6 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    const fn = function w() {
      const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
      const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
      let applicationId;
      if (selfEmbeddedActivityForLocation != null) {
        applicationId = selfEmbeddedActivityForLocation.applicationId;
      }
      const obj2 = { connectedEmbeddedActivityChannelId: windowDimensions(connectedEmbeddedActivityChannelId[13]).getEmbeddedActivityLocationChannelId(connectedActivityLocation), connectedEmbeddedActivity: selfEmbeddedActivityForLocation, pipOrientationLockState: null, panelMode: null };
      let pipOrientationLockStateForApp;
      if (null != applicationId) {
        pipOrientationLockStateForApp = obj.getPipOrientationLockStateForApp(applicationId);
      }
      obj2.pipOrientationLockState = pipOrientationLockStateForApp;
      obj2.panelMode = EmbeddedActivitiesStore.getActivityPanelMode();
      return obj2;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  let obj2 = windowDimensions(connectedEmbeddedActivityChannelId[12]);
  const stateFromStoresObject = windowDimensions(connectedEmbeddedActivityChannelId[14]).useStateFromStoresObject(tmp7, tmp8);
  connectedEmbeddedActivityChannelId = stateFromStoresObject.connectedEmbeddedActivityChannelId;
  pipOrientationLockState = stateFromStoresObject.pipOrientationLockState;
  ({ connectedEmbeddedActivity, panelMode } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [FramesStore];
    class O {
      constructor() {
        tmp = closure_1_9(closure_1_5.getMainFrame());
        obj = { hasLaunchedFrame: null != tmp, framePanelMode: null, framePipOrientationLockState: null };
        activityPanelMode = undefined;
        if (tmp != null) {
          activityPanelMode = tmp.data.activityPanelMode;
        }
        if (activityPanelMode == null) {
          tmp3 = closure_1_8;
          activityPanelMode = closure_1_8.DISCONNECTED;
        }
        obj.framePanelMode = activityPanelMode;
        obj.framePipOrientationLockState = closure_1_11(tmp);
        return obj;
      }
    }
    cResult[2] = items1;
    cResult[3] = O;
    let tmp12 = O;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult = windowDimensions(connectedEmbeddedActivityChannelId[14]);
  const stateFromStoresObject1 = windowDimensions(connectedEmbeddedActivityChannelId[14]).useStateFromStoresObject(tmp11, tmp12);
  let hasLaunchedFrame = stateFromStoresObject1.hasLaunchedFrame;
  ({ framePanelMode, framePipOrientationLockState } = stateFromStoresObject1);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    class O {
      constructor() {
        tmp = closure_1_9(closure_1_5.getMainFrame());
        obj = { hasLaunchedFrame: null != tmp, framePanelMode: null, framePipOrientationLockState: null };
        activityPanelMode = undefined;
        if (tmp != null) {
          activityPanelMode = tmp.data.activityPanelMode;
        }
        if (activityPanelMode == null) {
          tmp3 = closure_1_8;
          activityPanelMode = closure_1_8.DISCONNECTED;
        }
        obj.framePanelMode = activityPanelMode;
        obj.framePipOrientationLockState = closure_1_11(tmp);
        return obj;
      }
    }
    cResult[4] = items2;
    let tmp15 = items2;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== connectedEmbeddedActivityChannelId) {
    class E {
      constructor() {
        return closure_6.getChannel(closure_2);
      }
    }
    cResult[5] = connectedEmbeddedActivityChannelId;
    class O {
      constructor() {
        tmp = closure_1_9(closure_1_5.getMainFrame());
        obj = { hasLaunchedFrame: null != tmp, framePanelMode: null, framePipOrientationLockState: null };
        activityPanelMode = undefined;
        if (tmp != null) {
          activityPanelMode = tmp.data.activityPanelMode;
        }
        if (activityPanelMode == null) {
          tmp3 = closure_1_8;
          activityPanelMode = closure_1_8.DISCONNECTED;
        }
        obj.framePanelMode = activityPanelMode;
        obj.framePipOrientationLockState = closure_1_11(tmp);
        return obj;
      }
    }
    cResult[6] = E;
    const tmp17 = E;
  } else {
    class E {
      constructor() {
        return closure_6.getChannel(closure_2);
      }
    }
  }
  const tmpResult5 = windowDimensions(connectedEmbeddedActivityChannelId[14]);
  const stateFromStores = windowDimensions(connectedEmbeddedActivityChannelId[14]).useStateFromStores(tmp15, tmp17);
  const tmpResult6 = windowDimensions(connectedEmbeddedActivityChannelId[14]);
  const fn2 = function z() {
    const scale = pIPState.scale;
    value = scale.get();
    const result = pIPState.width * value;
    const result1 = pIPState.height * value;
    const size = { width: result, height: result1, marginLeft: -1 * roundToNearestPixelDefault(result / 2), marginTop: -1 * roundToNearestPixelDefault(result1 / 2) };
    return size;
  };
  const tmpResult7 = windowDimensions(connectedEmbeddedActivityChannelId[15]);
  fn2.__closure = { pipState: pIPState, roundToNearestPixel: pIPState(connectedEmbeddedActivityChannelId[16]) };
  fn2.__workletHash = 12892763508939;
  fn2.__initData = __initData;
  const animatedStyle = tmpResult7.useAnimatedStyle(fn2);
  let tmp20 = null != connectedEmbeddedActivity && !tmp4(tmp2[17])(connectedEmbeddedActivityChannelId);
  if (tmp20) {
    class E {
      constructor() {
        return closure_6.getChannel(closure_2);
      }
    }
    tmp20 = panelMode === ActivityPanelModes.PIP;
  }
  if (hasLaunchedFrame) {
    class E {
      constructor() {
        return closure_6.getChannel(closure_2);
      }
    }
    hasLaunchedFrame = framePanelMode === ActivityPanelModes.PIP;
  }
  if (hasLaunchedFrame) {
    class E {
      constructor() {
        return closure_6.getChannel(closure_2);
      }
    }
  }
  const obj3 = { pipState: pIPState, roundToNearestPixel: pIPState(connectedEmbeddedActivityChannelId[16]) };
  const fn3 = function j() {
    const scale = pIPState.scale;
    value = scale.get();
    const obj = { pipWidth: pIPState.width * value, pipHeight: pIPState.height * value, pipOrientationLockState, isLandscape: windowDimensions.get().landscape };
    const size = getActivityContainerPIPStylesSpecDefault(obj);
    const size1 = { width: size.width, height: size.height, left: null, top: null, marginLeft: null, marginTop: null };
    let str = "0%";
    let str2 = "0%";
    if (size.shouldHorizontallyCenter) {
      str2 = "50%";
    }
    size1.left = str2;
    if (size.shouldVerticallyCenter) {
      str = "50%";
    }
    size1.top = str;
    ({ marginLeft: obj2.marginLeft, marginTop: obj2.marginTop } = size);
    return size1;
  };
  const tmpResult8 = windowDimensions(connectedEmbeddedActivityChannelId[15]);
  fn3.__closure = { pipState: pIPState, getActivityContainerPipStylesSpec: pIPState(connectedEmbeddedActivityChannelId[18]), activePipOrientationLockState: pipOrientationLockState, windowDimensions };
  fn3.__workletHash = 10060457878293;
  fn3.__initData = __initData2;
  const animatedStyle1 = tmpResult8.useAnimatedStyle(fn3);
  if (!tmp20) {
    class E {
      constructor() {
        return closure_6.getChannel(closure_2);
      }
    }
    if (!hasLaunchedFrame) {
      class E {
        constructor() {
          return closure_6.getChannel(closure_2);
        }
      }
    }
  }
  if (cResult[7] === tmp6.wrapper) {
    class E {
      constructor() {
        return closure_6.getChannel(closure_2);
      }
    }
    if (cResult[10] === animatedStyle1) {
      class E {
        constructor() {
          return closure_6.getChannel(closure_2);
        }
      }
      if (cResult[13] === stateFromStores) {
        class E {
          constructor() {
            return closure_6.getChannel(closure_2);
          }
        }
      }
      class O {
        constructor() {
          tmp = closure_1_9(closure_1_5.getMainFrame());
          obj = { hasLaunchedFrame: null != tmp, framePanelMode: null, framePipOrientationLockState: null };
          activityPanelMode = undefined;
          if (tmp != null) {
            activityPanelMode = tmp.data.activityPanelMode;
          }
          if (activityPanelMode == null) {
            tmp3 = closure_1_8;
            activityPanelMode = closure_1_8.DISCONNECTED;
          }
          obj.framePanelMode = activityPanelMode;
          obj.framePipOrientationLockState = closure_1_11(tmp);
          return obj;
        }
      }
      cResult[13] = stateFromStores;
      cResult[14] = hasLaunchedFrame;
      cResult[15] = tmp24;
    }
    const items3 = [, ];
    class O {
      constructor() {
        tmp = closure_1_9(closure_1_5.getMainFrame());
        obj = { hasLaunchedFrame: null != tmp, framePanelMode: null, framePipOrientationLockState: null };
        activityPanelMode = undefined;
        if (tmp != null) {
          activityPanelMode = tmp.data.activityPanelMode;
        }
        if (activityPanelMode == null) {
          tmp3 = closure_1_8;
          activityPanelMode = closure_1_8.DISCONNECTED;
        }
        obj.framePanelMode = activityPanelMode;
        obj.framePipOrientationLockState = closure_1_11(tmp);
        return obj;
      }
    }
    items3[1] = animatedStyle1;
    cResult[10] = animatedStyle1;
    cResult[11] = tmp6.activityContainer;
    cResult[12] = items3;
  }
  const items4 = [tmp6.wrapper, animatedStyle];
  cResult[7] = tmp6.wrapper;
  cResult[8] = animatedStyle;
  cResult[9] = items4;
}) : (() => {
  let tmp = pIPState;
  let obj = connectedEmbeddedActivityChannelId;
  const windowDimensions = pipOrientationLockState.useContext(pIPState(connectedEmbeddedActivityChannelId[11])).windowDimensions;
  pIPState = windowDimensions(connectedEmbeddedActivityChannelId[12]).usePIPState();
  const tmp4 = closure_13();
  let obj2 = windowDimensions(connectedEmbeddedActivityChannelId[12]);
  const tmp2 = windowDimensions;
  const items = [EmbeddedActivitiesStore];
  const stateFromStoresObject = windowDimensions(connectedEmbeddedActivityChannelId[14]).useStateFromStoresObject(items, () => {
    const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    let applicationId;
    if (selfEmbeddedActivityForLocation != null) {
      applicationId = selfEmbeddedActivityForLocation.applicationId;
    }
    const obj2 = { connectedEmbeddedActivityChannelId: windowDimensions(connectedEmbeddedActivityChannelId[13]).getEmbeddedActivityLocationChannelId(connectedActivityLocation), connectedEmbeddedActivity: selfEmbeddedActivityForLocation, pipOrientationLockState: null, panelMode: null };
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = obj.getPipOrientationLockStateForApp(applicationId);
    }
    obj2.pipOrientationLockState = pipOrientationLockStateForApp;
    obj2.panelMode = EmbeddedActivitiesStore.getActivityPanelMode();
    return obj2;
  });
  connectedEmbeddedActivityChannelId = stateFromStoresObject.connectedEmbeddedActivityChannelId;
  ({ pipOrientationLockState, connectedEmbeddedActivity, panelMode } = stateFromStoresObject);
  const obj3 = windowDimensions(connectedEmbeddedActivityChannelId[14]);
  const items1 = [FramesStore];
  const stateFromStoresObject1 = windowDimensions(connectedEmbeddedActivityChannelId[14]).useStateFromStoresObject(items1, () => {
    const tmp = closure_1_9(mainFrame.getMainFrame());
    const obj = { hasLaunchedFrame: null != tmp, framePanelMode: null, framePipOrientationLockState: null };
    let activityPanelMode;
    if (tmp != null) {
      activityPanelMode = tmp.data.activityPanelMode;
    }
    if (activityPanelMode == null) {
      activityPanelMode = constants.DISCONNECTED;
    }
    obj.framePanelMode = activityPanelMode;
    obj.framePipOrientationLockState = closure_1_11(tmp);
    return obj;
  });
  ({ hasLaunchedFrame, framePanelMode, framePipOrientationLockState } = stateFromStoresObject1);
  const obj4 = windowDimensions(connectedEmbeddedActivityChannelId[14]);
  const items2 = [ChannelStore];
  const stateFromStores = windowDimensions(connectedEmbeddedActivityChannelId[14]).useStateFromStores(items2, () => ChannelStore.getChannel(connectedEmbeddedActivityChannelId));
  const obj5 = windowDimensions(connectedEmbeddedActivityChannelId[14]);
  const fn = function p() {
    const scale = pIPState.scale;
    value = scale.get();
    const result = pIPState.width * value;
    const result1 = pIPState.height * value;
    const size = { width: result, height: result1, marginLeft: -1 * roundToNearestPixelDefault(result / 2), marginTop: -1 * roundToNearestPixelDefault(result1 / 2) };
    return size;
  };
  const obj6 = windowDimensions(connectedEmbeddedActivityChannelId[15]);
  fn.__closure = { pipState: pIPState, roundToNearestPixel: pIPState(connectedEmbeddedActivityChannelId[16]) };
  fn.__workletHash = 14750544060809;
  fn.__initData = __initData3;
  let tmp9 = null != connectedEmbeddedActivity;
  const animatedStyle = obj6.useAnimatedStyle(fn);
  if (tmp9) {
    tmp9 = !tmp(obj[17])(connectedEmbeddedActivityChannelId);
  }
  if (tmp9) {
    tmp9 = panelMode === ActivityPanelModes.PIP;
  }
  if (hasLaunchedFrame) {
    hasLaunchedFrame = framePanelMode === ActivityPanelModes.PIP;
  }
  if (hasLaunchedFrame) {
    pipOrientationLockState = framePipOrientationLockState;
  }
  const obj7 = { pipState: pIPState, roundToNearestPixel: pIPState(connectedEmbeddedActivityChannelId[16]) };
  const fn2 = function v() {
    const scale = pIPState.scale;
    value = scale.get();
    const obj = { pipWidth: pIPState.width * value, pipHeight: pIPState.height * value, pipOrientationLockState, isLandscape: windowDimensions.get().landscape };
    const size = getActivityContainerPIPStylesSpecDefault(obj);
    const size1 = { width: size.width, height: size.height, left: null, top: null, marginLeft: null, marginTop: null };
    let str = "0%";
    let str2 = "0%";
    if (size.shouldHorizontallyCenter) {
      str2 = "50%";
    }
    size1.left = str2;
    if (size.shouldVerticallyCenter) {
      str = "50%";
    }
    size1.top = str;
    ({ marginLeft: obj2.marginLeft, marginTop: obj2.marginTop } = size);
    return size1;
  };
  const tmp2Result = tmp2(obj[15]);
  fn2.__closure = { pipState: pIPState, getActivityContainerPipStylesSpec: tmp(obj[18]), activePipOrientationLockState: pipOrientationLockState, windowDimensions };
  fn2.__workletHash = 3704190236691;
  fn2.__initData = __initData4;
  const animatedStyle1 = tmp2Result.useAnimatedStyle(fn2);
  if (!tmp9) {
    if (!hasLaunchedFrame) {
      return null;
    }
  }
  const obj9 = { style: null, pointerEvents: "none", children: null };
  const items3 = [tmp4.wrapper, animatedStyle];
  obj9.style = items3;
  const obj8 = { pipState: pIPState, getActivityContainerPipStylesSpec: tmp(obj[18]), activePipOrientationLockState: pipOrientationLockState, windowDimensions };
  let obj10 = { style: null, children: null };
  const items4 = [tmp4.activityContainer, animatedStyle1];
  obj10.style = items4;
  const tmpResult = tmp(obj[21]);
  if (hasLaunchedFrame) {
    tmp = tmp(obj[19]);
    obj = { layoutMode: constants.PIP };
    let tmp14Result = tmp14(tmp, obj);
  } else {
    const obj11 = { channel: stateFromStores, layoutMode: ActivityLayoutMode.PIP };
    tmp14Result = tmp14(tmp(obj[20]), obj11);
  }
  obj10.children = tmp14Result;
  obj10 = tmp14(tmp(obj[21]), obj10);
  obj9.children = obj10;
  <tmpResult style={null} pointerEvents="none">{null}</tmpResult>;
});
