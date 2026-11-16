// Module ID: 1967
// Function ID: 1968
// Dependencies: [1968, 1966]
// Exports: getSwipeSimulator

// Module 1967
import applyStyleForBelowTopScreen from "applyStyleForBelowTopScreen" /* 1966 */;
import RNScreensTurboModule from "RNScreensTurboModule" /* 1968 */;

let _undefined;

let tmp10;
let tmp11;
let tmp12;
let tmp13;
let tmp14;
let tmp15;
let tmp16;
let tmp17;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const items = [{ code: "(function computeEasingProgress_Pnpm_swipeSimulatorTs1(startingTimestamp,distance,velocity){if(Math.abs(distance)<1){return 1;}const elapsedTime=(globalThis._getAnimationTimestamp()-startingTimestamp)/1000;const currentPosition=velocity*elapsedTime;const progress=currentPosition/distance;return progress;})" }];
[tmp2] = items;
function computeEasingProgress(arg0, arg1, arg2) {
  let num = 1;
  if (Math.abs(arg1) >= 1) {
    const _globalThis = globalThis;
    num = arg2 * ((globalThis._getAnimationTimestamp() - arg0) / 1000) / arg1;
  }
  return num;
}
computeEasingProgress.__workletHash = 10823561962808;
computeEasingProgress.__initData = tmp2;
const items1 = [{ code: "(function easing_Pnpm_swipeSimulatorTs2(x){return 1-Math.pow(1-x,5);})" }];
[tmp3] = items1;
function easing(arg0) {
  return 1 - Math.pow(1 - arg0, 5);
}
easing.__workletHash = 8547951666307;
easing.__initData = tmp3;
const items2 = [{ code: "(function computeProgress_Pnpm_swipeSimulatorTs3(screenTransitionConfig,event,isTransitionCanceled){const screenDimensions=screenTransitionConfig.screenDimensions;const progressX=Math.abs(event.translationX/screenDimensions.width);const progressY=Math.abs(event.translationY/screenDimensions.height);const maxProgress=Math.max(progressX,progressY);const progress=isTransitionCanceled?maxProgress/2:maxProgress;return progress;})" }];
[tmp4] = items2;
function computeProgress(screenDimensions, translationX, arg2) {
  screenDimensions = screenDimensions.screenDimensions;
  const absolute = Math.abs(translationX.translationX / screenDimensions.width);
  const bound = Math.max(absolute, Math.abs(translationX.translationY / screenDimensions.height));
  let result = bound;
  if (arg2) {
    result = bound / 2;
  }
  return result;
}
computeProgress.__workletHash = 3250448079420;
computeProgress.__initData = tmp4;
const items3 = [{ code: "(function maybeScheduleNextFrame_Pnpm_swipeSimulatorTs4(step,didScreenReachDestination,screenTransitionConfig,event,isTransitionCanceled){let[computeProgress,RNScreensTurboModule]=this.__closure;if(!didScreenReachDestination){const stackTag=screenTransitionConfig.stackTag;const progress=computeProgress(screenTransitionConfig,event,isTransitionCanceled);RNScreensTurboModule.updateTransition(stackTag,progress);requestAnimationFrame(step);}else{var _screenTransitionConf;(_screenTransitionConf=screenTransitionConfig.onFinishAnimation)===null||_screenTransitionConf===void 0||_screenTransitionConf.call(screenTransitionConfig);}})" }, computeProgress, RNScreensTurboModule.RNScreensTurboModule];
[tmp5, tmp6, tmp7] = items3;
function maybeScheduleNextFrame(arg0, arg1, onFinishAnimation, arg3, arg4) {
  const tmp = arg1;
  if (tmp) {
    onFinishAnimation = onFinishAnimation.onFinishAnimation;
    if (onFinishAnimation != null) {
      onFinishAnimation();
    }
  } else {
    _undefined2.updateTransition(onFinishAnimation.stackTag, _undefined(onFinishAnimation, arg3, arg4));
    const _requestAnimationFrame = requestAnimationFrame;
    const animationFrame = requestAnimationFrame(arg0);
  }
}
const items4 = [tmp6, tmp7];
maybeScheduleNextFrame.__closure = items4;
maybeScheduleNextFrame.__workletHash = 12629583605925;
maybeScheduleNextFrame.__initData = tmp5;
const items5 = [{ code: "(function getSwipeSimulator_Pnpm_swipeSimulatorTs5(event,screenTransitionConfig,lockAxis){let[BASE_VELOCITY,ADDITIONAL_VELOCITY_FACTOR_X,ADDITIONAL_VELOCITY_FACTOR_Y,ADDITIONAL_VELOCITY_FACTOR_XY,applyStyleForBelowTopScreen,computeEasingProgress,easing,applyStyle,maybeScheduleNextFrame]=this.__closure;const screenDimensions=screenTransitionConfig.screenDimensions;const startTimestamp=globalThis._getAnimationTimestamp();const{isTransitionCanceled:isTransitionCanceled}=screenTransitionConfig;const startingPosition={x:event.translationX,y:event.translationY};const direction={x:Math.sign(event.translationX),y:Math.sign(event.translationY)};const finalPosition=isTransitionCanceled?{x:0,y:0}:{x:direction.x*screenDimensions.width,y:direction.y*screenDimensions.height};const distance={x:Math.abs(finalPosition.x-startingPosition.x),y:Math.abs(finalPosition.y-startingPosition.y)};const didScreenReachDestination={x:false,y:false};const velocity={x:BASE_VELOCITY,y:BASE_VELOCITY};if(lockAxis==='x'){velocity.y=0;velocity.x+=ADDITIONAL_VELOCITY_FACTOR_X*distance.x/screenDimensions.width;}else if(lockAxis==='y'){velocity.x=0;velocity.y+=ADDITIONAL_VELOCITY_FACTOR_Y*distance.y/screenDimensions.height;}else{const euclideanDistance=Math.sqrt(distance.x**2+distance.y**2);const screenDiagonal=Math.sqrt(screenDimensions.width**2+screenDimensions.height**2);const velocityVectorLength=BASE_VELOCITY+ADDITIONAL_VELOCITY_FACTOR_XY*euclideanDistance/screenDiagonal;if(Math.abs(startingPosition.x)>Math.abs(startingPosition.y)){velocity.x=velocityVectorLength;velocity.y=velocityVectorLength*Math.abs(startingPosition.y/startingPosition.x);}else{velocity.x=velocityVectorLength*Math.abs(startingPosition.x/startingPosition.y);velocity.y=velocityVectorLength;}}if(isTransitionCanceled){function didScreenReachDestinationCheck(){if(lockAxis==='x'){return didScreenReachDestination.x;}else if(lockAxis==='y'){return didScreenReachDestination.y;}else{return didScreenReachDestination.x&&didScreenReachDestination.y;}}function restoreOriginalStyleForBelowTopScreen(){event.translationX=direction.x*screenDimensions.width;event.translationY=direction.y*screenDimensions.height;applyStyleForBelowTopScreen(screenTransitionConfig,event);}const computeFrame=function(){const progress={x:computeEasingProgress(startTimestamp,distance.x,velocity.x),y:computeEasingProgress(startTimestamp,distance.y,velocity.y)};event.translationX=startingPosition.x-direction.x*distance.x*easing(progress.x);event.translationY=startingPosition.y-direction.y*distance.y*easing(progress.y);if(direction.x>0){if(event.translationX<=0){didScreenReachDestination.x=true;event.translationX=0;}}else{if(event.translationX>=0){didScreenReachDestination.x=true;event.translationX=0;}}if(direction.y>0){if(event.translationY<=0){didScreenReachDestination.y=true;event.translationY=0;}}else{if(event.translationY>=0){didScreenReachDestination.y=true;event.translationY=0;}}applyStyle(screenTransitionConfig,event);const finished=didScreenReachDestinationCheck();if(finished){restoreOriginalStyleForBelowTopScreen();}maybeScheduleNextFrame(computeFrame,finished,screenTransitionConfig,event,isTransitionCanceled);};return computeFrame;}else{const computeFrame=function(){const progress={x:computeEasingProgress(startTimestamp,distance.x,velocity.x),y:computeEasingProgress(startTimestamp,distance.y,velocity.y)};event.translationX=startingPosition.x+direction.x*distance.x*easing(progress.x);event.translationY=startingPosition.y+direction.y*distance.y*easing(progress.y);if(direction.x>0){if(event.translationX>=screenDimensions.width){didScreenReachDestination.x=true;event.translationX=screenDimensions.width;}}else{if(event.translationX<=-screenDimensions.width){didScreenReachDestination.x=true;event.translationX=-screenDimensions.width;}}if(direction.y>0){if(event.translationY>=screenDimensions.height){didScreenReachDestination.y=true;event.translationY=screenDimensions.height;}}else{if(event.translationY<=-screenDimensions.height){didScreenReachDestination.y=true;event.translationY=-screenDimensions.height;}}applyStyle(screenTransitionConfig,event);maybeScheduleNextFrame(computeFrame,didScreenReachDestination.x||didScreenReachDestination.y,screenTransitionConfig,event,isTransitionCanceled);};return computeFrame;}})" }, 400, 400, 500, 600, applyStyleForBelowTopScreen.applyStyleForBelowTopScreen, computeEasingProgress, easing, applyStyleForBelowTopScreen.applyStyle, maybeScheduleNextFrame];
let c0;
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
let c8;
[tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items5;
function getSwipeSimulator(translationX, screenDimensions, arg2) {
  let point2;
  _undefined = translationX;
  let closure_1 = screenDimensions;
  let closure_2 = arg2;
  screenDimensions = screenDimensions.screenDimensions;
  let closure_4 = globalThis._getAnimationTimestamp();
  const isTransitionCanceled = screenDimensions.isTransitionCanceled;
  const point = { x: translationX.translationX, y: translationX.translationY };
  const signResult = Math.sign(translationX.translationX);
  c7 = signResult;
  const signResult1 = Math.sign(translationX.translationY);
  if (isTransitionCanceled) {
    point2 = { x: 0, y: 0 };
  } else {
    point2 = { x: signResult * screenDimensions.width, y: signResult1 * screenDimensions.height };
  }
  const point3 = { x: Math.abs(point2.x - point.x), y: Math.abs(point2.y - point.y) };
  let closure_10 = { x: false, y: false };
  const point4 = { x: _undefined, y: _undefined };
  if ("x" === arg2) {
    point4.y = 0;
    let tmp5 = closure_1;
    point4.x = point4.x + closure_1 * point3.x / screenDimensions.width;
  } else if ("y" === arg2) {
    point4.x = 0;
    let tmp4 = closure_2;
    point4.y = point4.y + closure_2 * point3.y / screenDimensions.height;
  } else {
    const _Math3 = Math;
    const _Math4 = Math;
    const tmp7 = screenDimensions;
    const sqrtResult = Math.sqrt(point3.x ** 2 + point3.y ** 2);
    const sum = tmp3 + screenDimensions * sqrtResult / Math.sqrt(screenDimensions.width ** 2 + screenDimensions.height ** 2);
    const _Math5 = Math;
    const _Math6 = Math;
    const absolute = Math.abs(point.x);
    if (absolute > Math.abs(point.y)) {
      point4.x = sum;
      const _Math2 = Math;
      point4.y = sum * Math.abs(point.y / point.x);
    } else {
      const _Math = Math;
      point4.x = sum * Math.abs(point.x / point.y);
      point4.y = sum;
    }
  }
  if (isTransitionCanceled) {
    function computeFrame() {
      let y;
      const result = signResult * point3.x;
      const tmp = isTransitionCanceled(closure_4, point3.x, point4.x);
      const tmp2 = isTransitionCanceled(closure_4, point3.y, point4.y);
      translationX.translationX = point.x - result * point(tmp);
      const result1 = signResult1 * point3.y;
      translationX.translationY = point.y - result1 * point(tmp2);
      const tmp4 = signResult;
      if (signResult > 0) {
        if (translationX.translationX <= 0) {
          closure_10.x = true;
          translationX.translationX = 0;
        }
      } else if (translationX.translationX >= 0) {
        closure_10.x = true;
        translationX.translationX = 0;
      }
      if (signResult1 > 0) {
        if (translationX.translationY <= 0) {
          closure_10.y = true;
          translationX.translationY = 0;
        }
      } else if (translationX.translationY >= 0) {
        closure_10.y = true;
        translationX.translationY = 0;
      }
      signResult(closure_1, translationX);
      if ("x" === closure_2) {
        y = closure_10.x;
      } else {
        y = ("y" === tmp14 || closure_10.x) && closure_10.y;
      }
      if (y) {
        translationX.translationX = tmp4 * screenDimensions.width;
        translationX.translationY = signResult1 * screenDimensions.height;
        c4(closure_1, translationX);
      }
      signResult1(computeFrame, y, closure_1, translationX, isTransitionCanceled);
    }
    return computeFrame;
  } else {
    function _computeFrame() {
      let tmp8;
      const result = signResult * point3.x;
      const tmp = isTransitionCanceled(closure_4, point3.x, point4.x);
      const tmp2 = isTransitionCanceled(closure_4, point3.y, point4.y);
      translationX.translationX = point.x + result * point(tmp);
      const result1 = signResult1 * point3.y;
      translationX.translationY = point.y + result1 * point(tmp2);
      const tmp5 = signResult1;
      if (signResult > 0) {
        tmp8 = screenDimensions;
        if (translationX.translationX >= screenDimensions.width) {
          closure_10.x = true;
          translationX.translationX = screenDimensions.width;
          tmp8 = tmp10;
        }
      } else {
        tmp8 = screenDimensions;
        if (translationX.translationX <= -screenDimensions.width) {
          closure_10.x = true;
          translationX.translationX = -screenDimensions.width;
          tmp8 = tmp7;
        }
      }
      if (tmp5 > 0) {
        if (translationX.translationY >= tmp8.height) {
          closure_10.y = true;
          translationX.translationY = tmp8.height;
        }
      } else if (translationX.translationY <= -tmp8.height) {
        closure_10.y = true;
        translationX.translationY = -tmp8.height;
      }
      signResult(closure_1, translationX);
      let y = closure_10.x;
      const tmp14 = closure_1;
      const tmp16 = c8;
      const tmp17 = _computeFrame;
      if (!y) {
        y = closure_10.y;
      }
      tmp16(tmp17, y, tmp14, translationX, isTransitionCanceled);
    }
    return _computeFrame;
  }
}
const items6 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
getSwipeSimulator.__closure = items6;
getSwipeSimulator.__workletHash = 2686028074672;
getSwipeSimulator.__initData = tmp8;

export { getSwipeSimulator };
