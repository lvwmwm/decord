// Module ID: 1768
// Function ID: 19699
// Name: computeEasingProgress
// Dependencies: []

// Module 1768 (computeEasingProgress)
let closure_2 = { code: "function computeEasingProgress_Pnpm_swipeSimulatorTs1(startingTimestamp,distance,velocity){if(Math.abs(distance)<1){return 1;}const elapsedTime=(_getAnimationTimestamp()-startingTimestamp)/1000;const currentPosition=velocity*elapsedTime;const progress=currentPosition/distance;return progress;}" };
let closure_3 = () => {
  function computeEasingProgress(arg0, arg1, arg2) {
    let num = 1;
    if (Math.abs(arg1) >= 1) {
      num = arg2 * ((globalThis._getAnimationTimestamp() - arg0) / 1000) / arg1;
    }
    return num;
  }
  computeEasingProgress.__closure = {};
  computeEasingProgress.__workletHash = 11092056948922;
  computeEasingProgress.__initData = closure_2;
  return computeEasingProgress;
}();
let closure_4 = { code: "function easing_Pnpm_swipeSimulatorTs2(x){return 1-Math.pow(1-x,5);}" };
let closure_5 = () => {
  function easing(arg0) {
    return 1 - Math.pow(1 - arg0, 5);
  }
  easing.__closure = {};
  easing.__workletHash = 4992389111746;
  easing.__initData = closure_4;
  return easing;
}();
let closure_6 = { code: "function computeProgress_Pnpm_swipeSimulatorTs3(screenTransitionConfig,event,isTransitionCanceled){const screenDimensions=screenTransitionConfig.screenDimensions;const progressX=Math.abs(event.translationX/screenDimensions.width);const progressY=Math.abs(event.translationY/screenDimensions.height);const maxProgress=Math.max(progressX,progressY);const progress=isTransitionCanceled?maxProgress/2:maxProgress;return progress;}" };
let closure_7 = () => {
  function computeProgress(screenDimensions, translationX) {
    screenDimensions = screenDimensions.screenDimensions;
    const absolute = Math.abs(translationX.translationX / screenDimensions.width);
    const bound = Math.max(absolute, Math.abs(translationX.translationY / screenDimensions.height));
    let result = bound;
    if (arg2) {
      result = bound / 2;
    }
    return result;
  }
  computeProgress.__closure = {};
  computeProgress.__workletHash = 3778680834909;
  computeProgress.__initData = closure_6;
  return computeProgress;
}();
let closure_8 = { code: "function maybeScheduleNextFrame_Pnpm_swipeSimulatorTs4(step,didScreenReachDestination,screenTransitionConfig,event,isTransitionCanceled){const{computeProgress,RNScreensTurboModule}=this.__closure;if(!didScreenReachDestination){const stackTag=screenTransitionConfig.stackTag;const progress=computeProgress(screenTransitionConfig,event,isTransitionCanceled);RNScreensTurboModule.updateTransition(stackTag,progress);requestAnimationFrame(step);}else{var _screenTransitionConf;(_screenTransitionConf=screenTransitionConfig.onFinishAnimation)===null||_screenTransitionConf===void 0||_screenTransitionConf.call(screenTransitionConfig);}}" };
let closure_9 = () => {
  function maybeScheduleNextFrame(loop, arg1, onFinishAnimation) {
    if (arg1) {
      if (null != onFinishAnimation.onFinishAnimation) {
        onFinishAnimation.onFinishAnimation();
      }
    } else {
      const RNScreensTurboModule = callback(closure_1[0]).RNScreensTurboModule;
      RNScreensTurboModule.updateTransition(onFinishAnimation.stackTag, callback2(onFinishAnimation, arg3, arg4));
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(loop);
      const tmp4 = callback2(onFinishAnimation, arg3, arg4);
    }
  }
  maybeScheduleNextFrame.__closure = { computeProgress: closure_7, RNScreensTurboModule: arg1(arg6[0]).RNScreensTurboModule };
  maybeScheduleNextFrame.__workletHash = 7657931427196;
  maybeScheduleNextFrame.__initData = closure_8;
  return maybeScheduleNextFrame;
}();
let closure_10 = { code: "function getSwipeSimulator_Pnpm_swipeSimulatorTs5(event,screenTransitionConfig,lockAxis){const{BASE_VELOCITY,ADDITIONAL_VELOCITY_FACTOR_X,ADDITIONAL_VELOCITY_FACTOR_Y,ADDITIONAL_VELOCITY_FACTOR_XY,applyStyleForBelowTopScreen,computeEasingProgress,easing,applyStyle,maybeScheduleNextFrame}=this.__closure;const screenDimensions=screenTransitionConfig.screenDimensions;const startTimestamp=_getAnimationTimestamp();const{isTransitionCanceled:isTransitionCanceled}=screenTransitionConfig;const startingPosition={x:event.translationX,y:event.translationY};const direction={x:Math.sign(event.translationX),y:Math.sign(event.translationY)};const finalPosition=isTransitionCanceled?{x:0,y:0}:{x:direction.x*screenDimensions.width,y:direction.y*screenDimensions.height};const distance={x:Math.abs(finalPosition.x-startingPosition.x),y:Math.abs(finalPosition.y-startingPosition.y)};const didScreenReachDestination={x:false,y:false};const velocity={x:BASE_VELOCITY,y:BASE_VELOCITY};if(lockAxis==='x'){velocity.y=0;velocity.x+=ADDITIONAL_VELOCITY_FACTOR_X*distance.x/screenDimensions.width;}else if(lockAxis==='y'){velocity.x=0;velocity.y+=ADDITIONAL_VELOCITY_FACTOR_Y*distance.y/screenDimensions.height;}else{const euclideanDistance=Math.sqrt(distance.x**2+distance.y**2);const screenDiagonal=Math.sqrt(screenDimensions.width**2+screenDimensions.height**2);const velocityVectorLength=BASE_VELOCITY+ADDITIONAL_VELOCITY_FACTOR_XY*euclideanDistance/screenDiagonal;if(Math.abs(startingPosition.x)>Math.abs(startingPosition.y)){velocity.x=velocityVectorLength;velocity.y=velocityVectorLength*Math.abs(startingPosition.y/startingPosition.x);}else{velocity.x=velocityVectorLength*Math.abs(startingPosition.x/startingPosition.y);velocity.y=velocityVectorLength;}}if(isTransitionCanceled){function didScreenReachDestinationCheck(){if(lockAxis==='x'){return didScreenReachDestination.x;}else if(lockAxis==='y'){return didScreenReachDestination.y;}else{return didScreenReachDestination.x&&didScreenReachDestination.y;}}function restoreOriginalStyleForBelowTopScreen(){event.translationX=direction.x*screenDimensions.width;event.translationY=direction.y*screenDimensions.height;applyStyleForBelowTopScreen(screenTransitionConfig,event);}const computeFrame=function(){const progress={x:computeEasingProgress(startTimestamp,distance.x,velocity.x),y:computeEasingProgress(startTimestamp,distance.y,velocity.y)};event.translationX=startingPosition.x-direction.x*distance.x*easing(progress.x);event.translationY=startingPosition.y-direction.y*distance.y*easing(progress.y);if(direction.x>0){if(event.translationX<=0){didScreenReachDestination.x=true;event.translationX=0;}}else{if(event.translationX>=0){didScreenReachDestination.x=true;event.translationX=0;}}if(direction.y>0){if(event.translationY<=0){didScreenReachDestination.y=true;event.translationY=0;}}else{if(event.translationY>=0){didScreenReachDestination.y=true;event.translationY=0;}}applyStyle(screenTransitionConfig,event);const finished=didScreenReachDestinationCheck();if(finished){restoreOriginalStyleForBelowTopScreen();}maybeScheduleNextFrame(computeFrame,finished,screenTransitionConfig,event,isTransitionCanceled);};return computeFrame;}else{const computeFrame=function(){const progress={x:computeEasingProgress(startTimestamp,distance.x,velocity.x),y:computeEasingProgress(startTimestamp,distance.y,velocity.y)};event.translationX=startingPosition.x+direction.x*distance.x*easing(progress.x);event.translationY=startingPosition.y+direction.y*distance.y*easing(progress.y);if(direction.x>0){if(event.translationX>=screenDimensions.width){didScreenReachDestination.x=true;event.translationX=screenDimensions.width;}}else{if(event.translationX<=-screenDimensions.width){didScreenReachDestination.x=true;event.translationX=-screenDimensions.width;}}if(direction.y>0){if(event.translationY>=screenDimensions.height){didScreenReachDestination.y=true;event.translationY=screenDimensions.height;}}else{if(event.translationY<=-screenDimensions.height){didScreenReachDestination.y=true;event.translationY=-screenDimensions.height;}}applyStyle(screenTransitionConfig,event);maybeScheduleNextFrame(computeFrame,didScreenReachDestination.x||didScreenReachDestination.y,screenTransitionConfig,event,isTransitionCanceled);};return computeFrame;}}" };
arg5.getSwipeSimulator = () => {
  function getSwipeSimulator(value, screenDimensions, arg2) {
    screenDimensions = screenDimensions.screenDimensions;
    let closure_4 = globalThis._getAnimationTimestamp();
    const isTransitionCanceled = screenDimensions.isTransitionCanceled;
    const point = { x: value.translationX, y: value.translationY };
    const signResult = Math.sign(value.translationX);
    const signResult1 = Math.sign(value.translationY);
    if (isTransitionCanceled) {
      let point2 = { max: -536870861, guildId: -299892737 };
    } else {
      point2 = { x: signResult * screenDimensions.width, y: signResult1 * screenDimensions.height };
    }
    const point3 = { x: Math.abs(point2.x - point.x), y: Math.abs(point2.y - point.y) };
    let closure_10 = { max: null, guildId: null };
    const point4 = { max: "Array", guildId: "activeTimestamp" };
    if ("x" === arg2) {
      point4.y = 0;
      point4.x = point4.x + 400 * point3.x / screenDimensions.width;
    } else if ("y" === arg2) {
      point4.x = 0;
      point4.y = point4.y + 500 * point3.y / screenDimensions.height;
    } else {
      const _Math3 = Math;
      const _Math4 = Math;
      const sum = 400 + 600 * Math.sqrt(point3.x ** 2 + point3.y ** 2) / Math.sqrt(screenDimensions.width ** 2 + screenDimensions.height ** 2);
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
      const sqrtResult = Math.sqrt(point3.x ** 2 + point3.y ** 2);
    }
    if (isTransitionCanceled) {
      const computeFrame2 = function computeFrame(self) {
        const point = { x: screenDimensions(closure_4, point3.x, point4.x), y: screenDimensions(closure_4, point3.y, point4.y) };
        const result = signResult * point3.x;
        self.translationX = point.x - result * isTransitionCanceled(point.x);
        const result1 = signResult1 * point3.y;
        self.translationY = point.y - result1 * isTransitionCanceled(point.y);
        if (signResult > 0) {
          if (self.translationX <= 0) {
            closure_10.x = true;
            self.translationX = 0;
          }
        } else if (self.translationX >= 0) {
          closure_10.x = true;
          self.translationX = 0;
        }
        if (signResult1 > 0) {
          if (self.translationY <= 0) {
            closure_10.y = true;
            self.translationY = 0;
          }
        } else if (self.translationY >= 0) {
          closure_10.y = true;
          self.translationY = 0;
        }
        self(arg1[1]).applyStyle(arg1, self);
        if ("x" === arg2) {
          let y = closure_10.x;
        } else {
          y = "y" === arg2;
          if (!y) {
            y = closure_10.x;
          }
          if (y) {
            y = closure_10.y;
          }
        }
        if (y) {
          self.translationX = signResult * screenDimensions.width;
          self.translationY = signResult1 * screenDimensions.height;
          const result2 = self(arg1[1]).applyStyleForBelowTopScreen(arg1, self);
          const obj2 = self(arg1[1]);
        }
        point3(computeFrame2, y, arg1, self, isTransitionCanceled);
      };
      return computeFrame2;
    } else {
      function computeFrame(self) {
        const point = { x: screenDimensions(closure_4, point3.x, point4.x), y: screenDimensions(closure_4, point3.y, point4.y) };
        const result = signResult * point3.x;
        self.translationX = point.x + result * isTransitionCanceled(point.x);
        const result1 = signResult1 * point3.y;
        self.translationY = point.y + result1 * isTransitionCanceled(point.y);
        if (signResult > 0) {
          if (self.translationX >= screenDimensions.width) {
            closure_10.x = true;
            self.translationX = screenDimensions.width;
          }
        } else if (self.translationX <= -screenDimensions.width) {
          closure_10.x = true;
          self.translationX = -screenDimensions.width;
        }
        if (signResult1 > 0) {
          if (self.translationY >= screenDimensions.height) {
            closure_10.y = true;
            self.translationY = screenDimensions.height;
          }
        } else if (self.translationY <= -screenDimensions.height) {
          closure_10.y = true;
          self.translationY = -screenDimensions.height;
        }
        self(arg1[1]).applyStyle(arg1, self);
        let y = closure_10.x;
        if (!y) {
          y = closure_10.y;
        }
        point3(computeFrame, y, arg1, self, isTransitionCanceled);
      }
      return computeFrame;
    }
  }
  getSwipeSimulator.__closure = { applyStyleForBelowTopScreen: arg1(arg6[1]).applyStyleForBelowTopScreen, computeEasingProgress: closure_3, easing: closure_5, applyStyle: arg1(arg6[1]).applyStyle, maybeScheduleNextFrame: closure_9 };
  getSwipeSimulator.__workletHash = 11722244836970;
  getSwipeSimulator.__initData = closure_10;
  return getSwipeSimulator;
}();
