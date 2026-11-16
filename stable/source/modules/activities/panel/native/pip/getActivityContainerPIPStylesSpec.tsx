// Module ID: 19544
// Function ID: 19545
// Name: getActivityContainerPIPStylesSpec
// Dependencies: [5813, 2143, 12646, 2]
// Exports: default

// Module 19544 (getActivityContainerPIPStylesSpec)
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2143 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5813 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12646 */;
import size from "module_2" /* 2 */;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
const items = [{ code: "(function getActivityContainerPipStylesSpec_getActivityContainerPIPStylesSpecTsx1({pipWidth:pipWidth,pipHeight:pipHeight,pipOrientationLockState:pipOrientationLockState,isLandscape:isLandscape}){let[EmbeddedActivityOrientationLockState,LANDSCAPE_ACTIVITY_ASPECT_RATIO,roundToNearestPixel]=this.__closure;const nonNullPipOrientationLockState=pipOrientationLockState!==null&&pipOrientationLockState!==void 0?pipOrientationLockState:EmbeddedActivityOrientationLockState.UNLOCKED;const shouldUsePortraitAspectRatio=nonNullPipOrientationLockState===EmbeddedActivityOrientationLockState.PORTRAIT||nonNullPipOrientationLockState===EmbeddedActivityOrientationLockState.UNLOCKED&&!isLandscape;let width=pipWidth;let height=pipHeight;let shouldHorizontallyCenter=false;let shouldVerticallyCenter=false;let marginLeft=0;let marginTop=0;if(shouldUsePortraitAspectRatio){width=pipWidth;height=width*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldVerticallyCenter=true;marginTop=roundToNearestPixel(height/2)*-1;}else{height=pipHeight;width=height*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldHorizontallyCenter=true;marginLeft=roundToNearestPixel(width/2)*-1;}return{width:width,height:height,shouldHorizontallyCenter:shouldHorizontallyCenter,shouldVerticallyCenter:shouldVerticallyCenter,marginLeft:marginLeft,marginTop:marginTop};})" }, , , ];
const LANDSCAPE_ACTIVITY_ASPECT_RATIO = ActivityPanelConstants.LANDSCAPE_ACTIVITY_ASPECT_RATIO;
items[1] = EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState;
items[2] = LANDSCAPE_ACTIVITY_ASPECT_RATIO;
items[3] = roundToNearestPixelDefault;
let c0;
let c1;
let c2;
[tmp2, tmp3, tmp4, tmp5] = items;
function getActivityContainerPipStylesSpec(isLandscape) {
  let height;
  let marginLeft;
  let marginTop;
  let pipHeight;
  let pipOrientationLockState;
  let pipWidth;
  let shouldHorizontallyCenter;
  let shouldVerticallyCenter;
  let width;
  ({ pipWidth, pipHeight, pipOrientationLockState } = isLandscape);
  isLandscape = isLandscape.isLandscape;
  if (pipOrientationLockState == null) {
    pipOrientationLockState = constants.UNLOCKED;
  }
  if (pipOrientationLockState === constants.PORTRAIT) {
    const result = pipWidth * c1;
    marginTop = -1 * _undefined2(result / 2);
    marginLeft = 0;
    shouldVerticallyCenter = true;
    shouldHorizontallyCenter = false;
    height = result;
    width = pipWidth;
  } else {
    width = height * c1;
    marginLeft = -1 * _undefined2(width / 2);
    marginTop = 0;
    shouldVerticallyCenter = false;
    shouldHorizontallyCenter = true;
  }
  return { width, height, shouldHorizontallyCenter, shouldVerticallyCenter, marginLeft, marginTop };
}
const items1 = [tmp3, tmp4, tmp5];
getActivityContainerPipStylesSpec.__closure = items1;
getActivityContainerPipStylesSpec.__workletHash = 7491412556331;
getActivityContainerPipStylesSpec.__initData = tmp2;
let result = size.fileFinishedImporting("modules/activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx");

export default getActivityContainerPipStylesSpec;
