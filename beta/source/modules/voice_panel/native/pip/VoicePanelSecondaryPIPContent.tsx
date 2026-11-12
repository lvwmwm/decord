// Module ID: 19723
// Function ID: 19724
// Name: VoicePanelSecondaryPIPContent
// Dependencies: [19, 5018, 6934, 5019, 5813, 6935, 11887, 21, 5170, 11394, 19613, 504, 5091, 1652, 12646, 5834, 19544, 12469, 12473, 11989, 2]
// Exports: default

// Module 19723 (VoicePanelSecondaryPIPContent)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5813 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11394 */;
import Constants from "Constants" /* 11887 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12646 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5018 */;
import FramesStore from "FramesStore" /* 6934 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import FramesConstants from "FramesConstants" /* 6935 */;
import createStyles from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let tmp;
const _modDef1652 = tmp(1652);
const isVoiceEmbeddedActivityDefault = tmp(5834);
const EmbeddedActivityViewDefault = tmp(11989);
const FrameRenderTargetDefault = tmp(12469);
const getActivityContainerPIPStylesSpecDefault = tmp(19544);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ asLaunched: metroImportAll, FrameLayoutModes: c9, getPipOrientationLockStateForFrame: c10 } = FramesConstants);
const ActivityLayoutMode = Constants.ActivityLayoutMode;
const jsx = Fragment.jsx;
let closure_13 = createStyles.createStyles({ activityContainer: { flex: 1 }, wrapper: { position: "absolute", left: "50%", top: "50%" } });
let closure_14 = { code: "(function VoicePanelSecondaryPIPContentTsx1(){let[pipState,roundToNearestPixel]=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=pipState.height*scale;return{width:width,height:height,marginLeft:roundToNearestPixel(width/2)*-1,marginTop:roundToNearestPixel(height/2)*-1};})" };
let closure_15 = { code: "(function VoicePanelSecondaryPIPContentTsx2(){let[pipState,getActivityContainerPipStylesSpec,activePipOrientationLockState,windowDimensions]=this.__closure;const scale=pipState.scale.get();const{width:width,height:height,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width*scale,pipHeight:pipState.height*scale,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width,height:height,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx");

export default function VoicePanelSecondaryPIPContent() {
  let connectedEmbeddedActivity;
  let connectedEmbeddedActivityChannelId;
  let framePanelMode;
  let framePipOrientationLockState;
  let items7;
  let items8;
  let mainFrame;
  let mainFrameId;
  let obj8;
  let panelMode;
  let pipOrientationLockState;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp26Result2;
  let tmp = importDefault;
  const windowDimensions = react.useContext(VoicePanelStateContextDefault).windowDimensions;
  let obj = connectedEmbeddedActivityChannelId(19613);
  const pIPState = obj.usePIPState();
  const tmp5 = closure_13();
  let obj2 = connectedEmbeddedActivityChannelId(504);
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
    obj3 = connectedEmbeddedActivityChannelId(dependencyMap[12]);
    if (null != applicationId) {
      pipOrientationLockStateForApp = obj.getPipOrientationLockStateForApp(applicationId);
    }
    return obj2;
  });
  connectedEmbeddedActivityChannelId = stateFromStoresObject.connectedEmbeddedActivityChannelId;
  ({ pipOrientationLockState, connectedEmbeddedActivity, panelMode } = stateFromStoresObject);
  let obj3 = connectedEmbeddedActivityChannelId(504);
  const items1 = [FramesStore];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items1, () => {
    let activityPanelMode;
    const tmp = closure_1_8(mainFrame.getMainFrame());
    let id;
    if (tmp != null) {
      id = tmp.id;
    }
    const obj = { mainFrameId: id, framePanelMode: activityPanelMode, framePipOrientationLockState: closure_1_10(tmp) };
    activityPanelMode = undefined;
    if (tmp != null) {
      activityPanelMode = tmp.data.activityPanelMode;
    }
    if (activityPanelMode == null) {
      activityPanelMode = constants.DISCONNECTED;
    }
    return obj;
  });
  ({ mainFrameId, framePanelMode, framePipOrientationLockState } = stateFromStoresObject1);
  const items2 = [ChannelStore];
  const obj4 = connectedEmbeddedActivityChannelId(504);
  const stateFromStores = obj4.useStateFromStores(items2, () => ChannelStore.getChannel(connectedEmbeddedActivityChannelId));
  const items3 = [closure_14, pIPState, ];
  const useAnimatedStyle = connectedEmbeddedActivityChannelId(1652).useAnimatedStyle;
  connectedEmbeddedActivityChannelId(1652);
  items3[2] = roundToNearestPixelDefault;
  let c0;
  let c1;
  [tmp10, tmp11, tmp12] = items3;
  class VoicePanelSecondaryPIPContentTsx1 {
    constructor() {
      const scale = _undefined.scale;
      const value = scale.get();
      const result = _undefined.width * value;
      const result1 = _undefined.height * value;
      size = { width: result, height: result1, marginLeft: -1 * _undefined2(result / 2), marginTop: -1 * _undefined2(result1 / 2) };
      return size;
    }
  }
  const items4 = [tmp11, tmp12];
  VoicePanelSecondaryPIPContentTsx1.__closure = items4;
  VoicePanelSecondaryPIPContentTsx1.__workletHash = 16590500926098;
  VoicePanelSecondaryPIPContentTsx1.__initData = tmp10;
  let tmp14 = null != connectedEmbeddedActivity;
  const animatedStyle = useAnimatedStyle(VoicePanelSecondaryPIPContentTsx1);
  if (tmp14) {
    tmp14 = !isVoiceEmbeddedActivityDefault(connectedEmbeddedActivityChannelId);
  }
  if (tmp14) {
    tmp14 = panelMode === ActivityPanelModes.PIP;
  }
  if (null != mainFrameId && framePanelMode === ActivityPanelModes.PIP) {
    pipOrientationLockState = framePipOrientationLockState;
  }
  connectedEmbeddedActivityChannelId(1652);
  const items5 = [closure_15, pIPState, getActivityContainerPIPStylesSpecDefault, pipOrientationLockState, windowDimensions];
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  [tmp19, tmp20, tmp21, tmp22, tmp23] = items5;
  class VoicePanelSecondaryPIPContentTsx2 {
    constructor() {
      let str;
      let str2;
      const scale = _undefined.scale;
      const value = scale.get();
      const obj = { pipWidth: _undefined.width * value, pipHeight: _undefined.height * value, pipOrientationLockState, isLandscape: _undefined3.get().landscape };
      size = _undefined2(obj);
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
    }
  }
  const items6 = [tmp20, tmp21, tmp22, tmp23];
  VoicePanelSecondaryPIPContentTsx2.__closure = items6;
  VoicePanelSecondaryPIPContentTsx2.__workletHash = 3337225503971;
  VoicePanelSecondaryPIPContentTsx2.__initData = tmp19;
  if (tmp14) {
    const obj5 = { style: items7, pointerEvents: "none", children: null };
    items7 = [tmp5.wrapper, animatedStyle];
    const View = _modDef1652.View;
    const obj6 = { style: items8, children: null };
    items8 = [tmp5.activityContainer, tmp24];
    if (null != mainFrameId && framePanelMode === ActivityPanelModes.PIP) {
      let tmp26Result;
      if (null != mainFrameId) {
        const obj7 = { frameId: mainFrameId, level: connectedEmbeddedActivityChannelId(12473).FrameStackLevel.AboveAppContent, presentation: obj8 };
        obj8 = { layoutMode: constants.PIP };
        const tmpResult = FrameRenderTargetDefault;
        tmp26Result = tmp26(tmpResult, obj7);
      }
      obj6.children = tmp26Result;
      obj5.children = <tmp27 {...obj6} />;
      tmp26Result2 = tmp26(View, obj5);
    }
    const obj9 = { channel: stateFromStores, layoutMode: ActivityLayoutMode.PIP };
    tmp26Result = tmp26(EmbeddedActivityViewDefault, obj9);
  } else {
    tmp26Result2 = null;
  }
  return tmp26Result2;
};
