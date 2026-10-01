// Module ID: 16990
// Function ID: 16991
// Name: VoicePanelSecondaryPIPContent
// Dependencies: [19, 2044, 8499, 2045, 2005, 8502, 8500, 21, 4836, 11754, 16916, 504, 4458, 4566, 10456, 8803, 16844, 6494, 16279, 8915, 2]
// Exports: default

// Module 16990 (VoicePanelSecondaryPIPContent)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 2005 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8502 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10456 */;
import getActivityContainerPIPStylesSpecDefault from "getActivityContainerPIPStylesSpec" /* 16844 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import FramesStore from "FramesStore" /* 8499 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import FramesConstants from "FramesConstants" /* 8500 */;
import createStyles from "createStyles" /* 4836 */;
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
const __initData2 = { code: "function VoicePanelSecondaryPIPContentTsx2(){const{pipState,getActivityContainerPipStylesSpec,activePipOrientationLockState,windowDimensions}=this.__closure;const scale=pipState.scale.get();const{width:width,height:height,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width*scale,pipHeight:pipState.height*scale,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width,height:height,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx");

export default function VoicePanelSecondaryPIPContent() {
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
  const windowDimensions = pipOrientationLockState.useContext(pIPState(connectedEmbeddedActivityChannelId[9])).windowDimensions;
  let obj = windowDimensions(connectedEmbeddedActivityChannelId[10]);
  pIPState = obj.usePIPState();
  const tmp5 = closure_13();
  let obj2 = windowDimensions(connectedEmbeddedActivityChannelId[11]);
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
    obj3 = windowDimensions(connectedEmbeddedActivityChannelId[12]);
    if (null != applicationId) {
      pipOrientationLockStateForApp = obj.getPipOrientationLockStateForApp(applicationId);
    }
    return obj2;
  });
  connectedEmbeddedActivityChannelId = stateFromStoresObject.connectedEmbeddedActivityChannelId;
  ({ pipOrientationLockState, connectedEmbeddedActivity, panelMode } = stateFromStoresObject);
  let obj3 = windowDimensions(connectedEmbeddedActivityChannelId[11]);
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
  const obj4 = windowDimensions(connectedEmbeddedActivityChannelId[11]);
  const stateFromStores = obj4.useStateFromStores(items2, () => ChannelStore.getChannel(connectedEmbeddedActivityChannelId));
  const fn = function p() {
    const scale = pIPState.scale;
    const value = scale.get();
    const result = pIPState.width * value;
    const result1 = pIPState.height * value;
    size = { width: result, height: result1, marginLeft: -1 * roundToNearestPixelDefault(result / 2), marginTop: -1 * roundToNearestPixelDefault(result1 / 2) };
    return size;
  };
  const obj5 = windowDimensions(connectedEmbeddedActivityChannelId[13]);
  fn.__closure = { pipState: pIPState, roundToNearestPixel: pIPState(connectedEmbeddedActivityChannelId[14]) };
  fn.__workletHash = 12892763508939;
  fn.__initData = __initData;
  let tmp10 = null != connectedEmbeddedActivity;
  ({ pipState: pIPState, roundToNearestPixel: pIPState(connectedEmbeddedActivityChannelId[14]) });
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const tmp3 = windowDimensions;
  if (tmp10) {
    tmp10 = !tmp(tmp2[15])(connectedEmbeddedActivityChannelId);
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
  tmp3(tmp2[13]);
  const fn2 = function f() {
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
  fn2.__closure = { pipState: pIPState, getActivityContainerPipStylesSpec: tmp(tmp2[16]), activePipOrientationLockState: pipOrientationLockState, windowDimensions };
  fn2.__workletHash = 10160295590074;
  fn2.__initData = __initData2;
  ({ pipState: pIPState, getActivityContainerPipStylesSpec: tmp(tmp2[16]), activePipOrientationLockState: pipOrientationLockState, windowDimensions });
  if (tmp10) {
    const obj8 = { style: items3, pointerEvents: "none", children: null };
    items3 = [tmp5.wrapper, animatedStyle];
    const items4 = [tmp5.activityContainer, tmp14];
    const tmpResult = tmp(tmp2[17]);
    tmp(tmp2[17]);
    if (hasLaunchedFrame) {
      const obj10 = { layoutMode: constants.PIP };
      let tmp16Result = tmp16(tmp(tmp2[18]), obj10);
    } else {
      const obj11 = { channel: stateFromStores, layoutMode: ActivityLayoutMode.PIP };
      tmp16Result = tmp16(tmp(tmp2[19]), obj11);
    }
    tmp16Result2 = tmp16(tmpResult, obj8);
  } else {
    tmp16Result2 = null;
  }
  return tmp16Result2;
};
