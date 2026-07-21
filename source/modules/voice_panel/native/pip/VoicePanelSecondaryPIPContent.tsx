// Module ID: 15721
// Function ID: 120250
// Name: VoicePanelSecondaryPIPContent
// Dependencies: []
// Exports: default

// Module 15721 (VoicePanelSecondaryPIPContent)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const ActivityLayoutMode = arg1(dependencyMap[4]).ActivityLayoutMode;
const ActivityPanelModes = arg1(dependencyMap[5]).ActivityPanelModes;
const FrameLayoutModes = arg1(dependencyMap[6]).FrameLayoutModes;
const jsx = arg1(dependencyMap[7]).jsx;
let closure_11 = arg1(dependencyMap[8]).createStyles({ activityContainer: { flex: 1 } });
let closure_12 = { code: "function VoicePanelSecondaryPIPContentTsx1(){const{getActivityContainerPipStylesSpec,pipState,activePipOrientationLockState,windowDimensions}=this.__closure;const{width:width,height:height,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width,pipHeight:pipState.height,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width,height:height,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};}" };
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx");

export default function VoicePanelSecondaryPIPContent() {
  let connectedEmbeddedActivity;
  let connectedFrame;
  let framePanelMode;
  let framePipOrientationLockState;
  let panelMode;
  let pipOrientationLockState;
  const windowDimensions = React.useContext(importDefault(dependencyMap[9])).windowDimensions;
  const arg1 = windowDimensions;
  let obj = arg1(dependencyMap[10]);
  const size = obj.usePIPState();
  const importDefault = size;
  let obj1 = arg1(dependencyMap[11]);
  const items = [closure_4];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => {
    const connectedActivityLocation = height.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = height.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    let applicationId;
    if (null != selfEmbeddedActivityForLocation) {
      applicationId = selfEmbeddedActivityForLocation.applicationId;
    }
    const obj = { connectedEmbeddedActivityChannelId: windowDimensions(connectedEmbeddedActivityChannelId[12]).getEmbeddedActivityLocationChannelId(connectedActivityLocation), connectedEmbeddedActivity: selfEmbeddedActivityForLocation };
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = height.getPipOrientationLockStateForApp(applicationId);
    }
    obj.pipOrientationLockState = pipOrientationLockStateForApp;
    obj.panelMode = height.getActivityPanelMode();
    return obj;
  });
  const connectedEmbeddedActivityChannelId = stateFromStoresObject.connectedEmbeddedActivityChannelId;
  const dependencyMap = connectedEmbeddedActivityChannelId;
  ({ pipOrientationLockState, connectedEmbeddedActivity, panelMode } = stateFromStoresObject);
  let obj2 = arg1(dependencyMap[11]);
  const items1 = [closure_5];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => {
    const connectedFrame = pipOrientationLockState.getConnectedFrame();
    let applicationId;
    if (null != connectedFrame) {
      applicationId = connectedFrame.applicationId;
    }
    const obj = { connectedFrame, framePanelMode: pipOrientationLockState.getActivityPanelMode() };
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = pipOrientationLockState.getPipOrientationLockStateForApp(applicationId);
    }
    obj.framePipOrientationLockState = pipOrientationLockStateForApp;
    return obj;
  });
  ({ connectedFrame, framePanelMode, framePipOrientationLockState } = stateFromStoresObject1);
  let obj3 = arg1(dependencyMap[11]);
  const items2 = [closure_6];
  const width = size.width;
  const React = width;
  const height = size.height;
  closure_4 = height;
  const items3 = [width, height];
  const stateFromStores = obj3.useStateFromStores(items2, () => channel.getChannel(connectedEmbeddedActivityChannelId));
  let tmp6 = null != connectedEmbeddedActivity;
  const memo = React.useMemo(() => ({ width, height, marginLeft: -1 * size(connectedEmbeddedActivityChannelId[13])(width / 2), marginTop: -1 * size(connectedEmbeddedActivityChannelId[13])(height / 2) }), items3);
  if (tmp6) {
    tmp6 = !importDefault(dependencyMap[14])(connectedEmbeddedActivityChannelId);
  }
  if (tmp6) {
    tmp6 = panelMode === ActivityPanelModes.PIP;
  }
  let tmp10 = null != connectedFrame;
  if (tmp10) {
    tmp10 = framePanelMode === ActivityPanelModes.PIP;
  }
  if (tmp10) {
    pipOrientationLockState = framePipOrientationLockState;
  }
  closure_5 = pipOrientationLockState;
  const tmp = callback();
  class P {
    constructor() {
      obj = { pipWidth: closure_1.width, pipHeight: closure_1.height, pipOrientationLockState };
      tmp = closure_1(closure_2[16]);
      obj.isLandscape = windowDimensions.get().landscape;
      size = tmp(obj);
      obj = { width: size.width, height: size.height };
      str = "0%";
      str2 = "0%";
      if (size.shouldHorizontallyCenter) {
        str2 = "50%";
      }
      obj.left = str2;
      if (size.shouldVerticallyCenter) {
        str = "50%";
      }
      obj.top = str;
      ({ marginLeft: obj2.marginLeft, marginTop: obj2.marginTop } = size);
      return obj;
    }
  }
  obj = { getActivityContainerPipStylesSpec: importDefault(dependencyMap[16]), pipState: size, activePipOrientationLockState: pipOrientationLockState, windowDimensions };
  P.__closure = obj;
  P.__workletHash = 12186082276755;
  P.__initData = closure_12;
  const animatedStyle = arg1(dependencyMap[15]).useAnimatedStyle(P);
  if (!tmp6) {
    if (!tmp10) {
      return null;
    }
  }
  obj = { style: memo, pointerEvents: "none" };
  const obj5 = arg1(dependencyMap[15]);
  obj1 = { style: items4 };
  const items4 = [tmp.activityContainer, animatedStyle];
  let tmp18 = importDefault;
  const tmp15 = importDefault(dependencyMap[17]);
  if (tmp10) {
    tmp18 = tmp18(tmp19[19]);
    obj2 = { layoutMode: FrameLayoutModes.PIP };
    let tmp17Result = tmp17(tmp18, obj2);
  } else {
    obj3 = { channel: stateFromStores, layoutMode: ActivityLayoutMode.PIP };
    tmp17Result = tmp17(tmp18(tmp19[20]), obj3);
  }
  obj1.children = tmp17Result;
  obj1 = tmp14(importDefault(dependencyMap[18]), obj1);
  obj.children = obj1;
  <tmp15 {...obj} />;
};
