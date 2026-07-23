// Module ID: 15702
// Function ID: 121090
// Name: OrientationLockState
// Dependencies: [4155, 10226, 9891, 2]
// Exports: default

// Module 15702 (OrientationLockState)
import { OrientationLockState } from "items3";
import { LANDSCAPE_ACTIVITY_ASPECT_RATIO } from "ActivityPanelModes";

const fn = function t(isLandscape) {
  let pipHeight;
  let pipOrientationLockState;
  let pipWidth;
  ({ pipWidth, pipHeight, pipOrientationLockState } = isLandscape);
  if (null == pipOrientationLockState) {
    pipOrientationLockState = OrientationLockState.UNLOCKED;
  }
  if (pipOrientationLockState === OrientationLockState.PORTRAIT) {
    const result = pipWidth * LANDSCAPE_ACTIVITY_ASPECT_RATIO;
    let num4 = -1 * importDefault(9891)(result / 2);
    let flag = false;
    let flag2 = true;
    let num3 = 0;
    let result1 = pipWidth;
    pipHeight = result;
  } else {
    result1 = pipHeight * LANDSCAPE_ACTIVITY_ASPECT_RATIO;
    num3 = -1 * importDefault(9891)(result1 / 2);
    flag = true;
    flag2 = false;
    num4 = 0;
  }
  const obj = { width: result1, height: pipHeight, shouldHorizontallyCenter: flag, shouldVerticallyCenter: flag2, marginLeft: num3, marginTop: num4 };
  return obj;
};
fn.__closure = { OrientationLockState, LANDSCAPE_ACTIVITY_ASPECT_RATIO, roundToNearestPixel: require("t") };
fn.__workletHash = 7141745103186;
fn.__initData = { code: "function getActivityContainerPipStylesSpec_getActivityContainerPIPStylesSpecTsx1({pipWidth:pipWidth,pipHeight:pipHeight,pipOrientationLockState:pipOrientationLockState,isLandscape:isLandscape}){const{OrientationLockState,LANDSCAPE_ACTIVITY_ASPECT_RATIO,roundToNearestPixel}=this.__closure;const nonNullPipOrientationLockState=pipOrientationLockState!==null&&pipOrientationLockState!==void 0?pipOrientationLockState:OrientationLockState.UNLOCKED;const shouldUsePortraitAspectRatio=nonNullPipOrientationLockState===OrientationLockState.PORTRAIT||nonNullPipOrientationLockState===OrientationLockState.UNLOCKED&&!isLandscape;let width=pipWidth;let height=pipHeight;let shouldHorizontallyCenter=false;let shouldVerticallyCenter=false;let marginLeft=0;let marginTop=0;if(shouldUsePortraitAspectRatio){width=pipWidth;height=width*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldVerticallyCenter=true;marginTop=roundToNearestPixel(height/2)*-1;}else{height=pipHeight;width=height*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldHorizontallyCenter=true;marginLeft=roundToNearestPixel(width/2)*-1;}return{width:width,height:height,shouldHorizontallyCenter:shouldHorizontallyCenter,shouldVerticallyCenter:shouldVerticallyCenter,marginLeft:marginLeft,marginTop:marginTop};}" };
let obj = { OrientationLockState, LANDSCAPE_ACTIVITY_ASPECT_RATIO, roundToNearestPixel: require("t") };
let result = require("t").fileFinishedImporting("modules/activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx");

export default fn;
