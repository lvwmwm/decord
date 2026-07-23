// Module ID: 15846
// Function ID: 122466
// Name: VoicePanelSecondaryPIPContent
// Dependencies: [31, 1347, 10479, 1348, 4155, 10226, 10480, 33, 4130, 10014, 15774, 566, 3748, 9891, 10438, 3991, 15702, 5517, 7589, 15726, 10601, 2]
// Exports: default

// Module 15846 (VoicePanelSecondaryPIPContent)
import result from "result";
import closure_4 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { ActivityLayoutMode } from "items3";
import { ActivityPanelModes } from "ActivityPanelModes";
import { FrameLayoutModes } from "FrameLayoutModes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ activityContainer: { flex: 1 } });
let closure_12 = { code: "function VoicePanelSecondaryPIPContentTsx1(){const{getActivityContainerPipStylesSpec,pipState,activePipOrientationLockState,windowDimensions}=this.__closure;const{width:width,height:height,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width,pipHeight:pipState.height,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width,height:height,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};}" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx");

export default function VoicePanelSecondaryPIPContent() {
  let connectedEmbeddedActivity;
  let connectedFrame;
  let framePanelMode;
  let framePipOrientationLockState;
  let panelMode;
  let pipOrientationLockState;
  const windowDimensions = width.useContext(size(connectedEmbeddedActivityChannelId[9])).windowDimensions;
  let obj = windowDimensions(connectedEmbeddedActivityChannelId[10]);
  size = obj.usePIPState();
  let obj1 = windowDimensions(connectedEmbeddedActivityChannelId[11]);
  const items = [height];
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
  connectedEmbeddedActivityChannelId = stateFromStoresObject.connectedEmbeddedActivityChannelId;
  ({ pipOrientationLockState, connectedEmbeddedActivity, panelMode } = stateFromStoresObject);
  let obj2 = windowDimensions(connectedEmbeddedActivityChannelId[11]);
  const items1 = [pipOrientationLockState];
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
  let obj3 = windowDimensions(connectedEmbeddedActivityChannelId[11]);
  const items2 = [closure_6];
  width = size.width;
  height = size.height;
  const items3 = [width, height];
  const stateFromStores = obj3.useStateFromStores(items2, () => outer1_6.getChannel(connectedEmbeddedActivityChannelId));
  let tmp6 = null != connectedEmbeddedActivity;
  const memo = width.useMemo(() => {
    const obj = { width, height, position: "absolute", left: "50%", marginLeft: -1 * size(connectedEmbeddedActivityChannelId[13])(width / 2), top: "50%", marginTop: -1 * size(connectedEmbeddedActivityChannelId[13])(height / 2) };
    return obj;
  }, items3);
  if (tmp6) {
    tmp6 = !size(connectedEmbeddedActivityChannelId[14])(connectedEmbeddedActivityChannelId);
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
  const tmp = callback();
  class P {
    constructor() {
      obj = { pipWidth: closure_1.width, pipHeight: closure_1.height, pipOrientationLockState };
      tmp = outer1_1(outer1_2[16]);
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
  obj = { getActivityContainerPipStylesSpec: size(connectedEmbeddedActivityChannelId[16]), pipState: size, activePipOrientationLockState: pipOrientationLockState, windowDimensions };
  P.__closure = obj;
  P.__workletHash = 12186082276755;
  P.__initData = closure_12;
  const animatedStyle = windowDimensions(connectedEmbeddedActivityChannelId[15]).useAnimatedStyle(P);
  if (!tmp6) {
    if (!tmp10) {
      return null;
    }
  }
  obj = { style: memo, pointerEvents: "none" };
  const obj5 = windowDimensions(connectedEmbeddedActivityChannelId[15]);
  obj1 = { style: items4 };
  items4 = [tmp.activityContainer, animatedStyle];
  let tmp18 = size;
  const tmp15 = size(connectedEmbeddedActivityChannelId[17]);
  if (tmp10) {
    tmp18 = tmp18(tmp19[19]);
    obj2 = { layoutMode: FrameLayoutModes.PIP };
    let tmp17Result = tmp17(tmp18, obj2);
  } else {
    obj3 = { channel: stateFromStores, layoutMode: ActivityLayoutMode.PIP };
    tmp17Result = tmp17(tmp18(tmp19[20]), obj3);
  }
  obj1.children = tmp17Result;
  obj1 = tmp14(size(connectedEmbeddedActivityChannelId[18]), obj1);
  obj.children = obj1;
  <tmp15 style={memo} pointerEvents="none" />;
};
