// Module ID: 15701
// Function ID: 121077
// Name: clamp
// Dependencies: [10016, 2]

// Module 15701 (clamp)
import MIN_PAN_GESTURE_MOVE from "MIN_PAN_GESTURE_MOVE";

let closure_0;
let closure_1;
({ MIN_PIP_TOSS_VELOCITY: closure_0, PIP_WINDOW_OFFSET: closure_1 } = MIN_PAN_GESTURE_MOVE);
let closure_2 = { code: "function clamp_MorphablePanelUtilsTsx1(value,min,max){return Math.min(Math.max(value,min),max);}" };
let closure_3 = (() => {
  function clamp(arg0, arg1, arg2) {
    return Math.min(Math.max(arg0, arg1), arg2);
  }
  clamp.__closure = {};
  clamp.__workletHash = 1391695493868;
  clamp.__initData = closure_2;
  return clamp;
})();
let closure_4 = { code: "function calculateXYDiff_MorphablePanelUtilsTsx2(event,initialGestureOffset){const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=initialGestureOffset.get().absoluteYStart-absoluteY;const xDiff=initialGestureOffset.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;return{absoluteX:absoluteX,absoluteY:absoluteY,xDiff:xDiff,yDiff:yDiff,isNotPullDownGesture:isNotPullDownGesture,absoluteMovement:absoluteMovement};}" };
let closure_5 = { code: "function getPIPWindowDimensions_MorphablePanelUtilsTsx3(windowDimensions,safeArea,disableHorizontalSafeAreas){const{PIP_WINDOW_OFFSET}=this.__closure;const xOffset=disableHorizontalSafeAreas?Math.max(safeArea.left,PIP_WINDOW_OFFSET):PIP_WINDOW_OFFSET;const disabledHorizontalSafeAreasRange=windowDimensions.width-xOffset-Math.max(safeArea.right,PIP_WINDOW_OFFSET);const enabledHorizontalSafeAreasRange=windowDimensions.width-safeArea.left-safeArea.right-PIP_WINDOW_OFFSET*2;const xRange=disableHorizontalSafeAreas?disabledHorizontalSafeAreasRange:enabledHorizontalSafeAreasRange;const yOffset=Math.max(safeArea.top,PIP_WINDOW_OFFSET);return{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:windowDimensions.height-yOffset-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)};}" };
const tmp4 = (() => {
  export function getPIPWindowDimensions(width, left) {
    if (arg2) {
      const _Math = Math;
      let bound = Math.max(left.left, outer1_1);
    } else {
      bound = outer1_1;
    }
    const diff = width.width - bound;
    let diff1 = width.width - left.left - left.right - 2 * outer1_1;
    if (arg2) {
      diff1 = diff - Math.max(left.right, outer1_1);
    }
    const bound1 = Math.max(left.top, outer1_1);
    const obj = { xOffset: bound, yOffset: bound1, xRange: diff1 };
    const diff2 = width.height - bound1;
    obj.yRange = diff2 - Math.max(left.bottom, outer1_1);
    return obj;
  }
  getPIPWindowDimensions.__closure = { PIP_WINDOW_OFFSET: closure_1 };
  getPIPWindowDimensions.__workletHash = 4008246762710;
  getPIPWindowDimensions.__initData = closure_5;
  return getPIPWindowDimensions;
})();
let closure_6 = tmp4;
let closure_7 = { code: "function calculatePIPPositionFromVelocity_MorphablePanelUtilsTsx4({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{getPIPWindowDimensions,MIN_PIP_TOSS_VELOCITY,clamp}=this.__closure;const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);const{xRange:xRange,yRange:yRange}=pipRegion;const x=absoluteX-pipRegion.xOffset;const y=absoluteY-pipRegion.yOffset;let pipX=0;let pipY=0;if(Math.max(Math.abs(velocityY),Math.abs(velocityX))<MIN_PIP_TOSS_VELOCITY){const closestEdge=function(specs){const minValue=Math.min(...Object.values(specs));if(specs.left===minValue){return'left';}if(specs.top===minValue){return'top';}if(specs.right===minValue){return'right';}return'bottom';}({left:clamp(x,0,xRange),right:clamp(xRange-x,0,xRange),top:clamp(y,0,yRange),bottom:clamp(yRange-y,0,yRange)});switch(closestEdge){case'left':pipX=0;pipY=y/yRange;break;case'right':pipX=1;pipY=y/yRange;break;case'top':pipY=0;pipX=x/xRange;break;case'bottom':pipY=1;pipX=x/xRange;break;}}else{const slope=velocityY/velocityX;let intersectionY=0;let intersectionX=0;intersectionX=velocityX>0?xRange:0;intersectionY=y+slope*(intersectionX-x);if(intersectionY>=0&&intersectionY<=yRange){pipX=intersectionX/xRange;pipY=intersectionY/yRange;}else{intersectionY=velocityY>0?yRange:0;intersectionX=x+1/slope*(intersectionY-y);pipX=intersectionX/xRange;pipY=intersectionY/yRange;}}return{pipX:clamp(pipX,0,1),pipY:clamp(pipY,0,1)};}" };
let closure_8 = { code: "function pipXYtoAbsoluteXY_MorphablePanelUtilsTsx5({pipX:pipX,pipY:pipY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{getPIPWindowDimensions}=this.__closure;const{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);return{x:xOffset+pipX*xRange,y:yOffset+pipY*yRange};}" };
const tmp3 = (() => {
  export function calculateXYDiff(state, outer1_10) {
    let absoluteX;
    let absoluteY;
    ({ absoluteY, absoluteX } = state.changedTouches[0]);
    const diff = outer1_10.get().absoluteYStart - absoluteY;
    const diff1 = outer1_10.get().absoluteXStart - absoluteX;
    const absolute = Math.abs(diff);
    const obj = { absoluteX, absoluteY, xDiff: diff1, yDiff: diff };
    const bound = Math.max(absolute, Math.abs(diff1));
    const absolute1 = Math.abs(diff1);
    obj.isNotPullDownGesture = absolute1 >= Math.abs(diff) || diff > 0;
    obj.absoluteMovement = bound;
    return obj;
  }
  calculateXYDiff.__closure = {};
  calculateXYDiff.__workletHash = 9827767064556;
  calculateXYDiff.__initData = closure_4;
  return calculateXYDiff;
})();
const tmp6 = (() => {
  export function pipXYtoAbsoluteXY(windowDimensions) {
    let pipX;
    let pipY;
    ({ pipX, pipY } = windowDimensions);
    const tmp = outer1_6(windowDimensions.windowDimensions, windowDimensions.safeArea, windowDimensions.disableHorizontalSafeAreas);
    return { x: tmp.xOffset + pipX * tmp.xRange, y: tmp.yOffset + pipY * tmp.yRange };
  }
  pipXYtoAbsoluteXY.__closure = { getPIPWindowDimensions: closure_6 };
  pipXYtoAbsoluteXY.__workletHash = 1981621867924;
  pipXYtoAbsoluteXY.__initData = closure_8;
  return pipXYtoAbsoluteXY;
})();
let closure_9 = tmp6;
let closure_10 = { code: "function getClampedPIPPosition_MorphablePanelUtilsTsx6({pipX:pipX,pipY:pipY,width:width,height:height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion=0,topAvoidanceRegion=0,positionOffset={x:0,y:0},disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{pipXYtoAbsoluteXY,getPIPWindowDimensions,clamp}=this.__closure;let{x:x,y:y}=pipXYtoAbsoluteXY({pipX:pipX===-1?1:pipX,pipY:pipY===-1?0:pipY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});const halfWidth=width/2;const halfHeight=height/2;x-=halfWidth;if(pipY===-1){y+=72;}else{y-=halfHeight;}const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);x=clamp(x,pipRegion.xOffset,pipRegion.xOffset+pipRegion.xRange-width);y=clamp(y,pipRegion.yOffset+topAvoidanceRegion,pipRegion.yOffset+pipRegion.yRange-bottomAvoidanceRegion-height);x+=positionOffset.x;y+=positionOffset.y;return{x:x,y:y};}" };
let tmp5 = (() => {
  export function calculatePIPPositionFromVelocity(windowDimensions) {
    let absoluteX;
    let absoluteY;
    let velocityX;
    let velocityY;
    let xRange;
    let yRange;
    ({ velocityX, velocityY } = windowDimensions);
    ({ absoluteX, absoluteY } = windowDimensions);
    const tmp = outer1_6(windowDimensions.windowDimensions, windowDimensions.safeArea, windowDimensions.disableHorizontalSafeAreas);
    ({ xRange, yRange } = tmp);
    const diff = absoluteX - tmp.xOffset;
    const diff1 = absoluteY - tmp.yOffset;
    const absolute = Math.abs(velocityY);
    if (Math.max(absolute, Math.abs(velocityX)) < outer1_0) {
      const rect = { left: outer1_3(diff, 0, xRange), right: outer1_3(xRange - diff, 0, xRange), top: outer1_3(diff1, 0, yRange), bottom: outer1_3(yRange - diff1, 0, yRange) };
      const _Math = Math;
      const _Object = Object;
      const items = [];
      HermesBuiltin.arraySpread(Object.values(rect), 0);
      const _Math2 = Math;
      const applyResult = HermesBuiltin.apply(items, Math);
      let str2 = "left";
      if (rect.left !== applyResult) {
        let str3 = "top";
        if (rect.top !== applyResult) {
          let str4 = "bottom";
          if (rect.right === applyResult) {
            str4 = "right";
          }
          str3 = str4;
        }
        str2 = str3;
      }
      if ("left" === str2) {
        let num6 = diff1 / yRange;
        let num5 = 0;
      } else if ("right" === str2) {
        num6 = diff1 / yRange;
        num5 = 1;
      } else if ("top" === str2) {
        num5 = diff / xRange;
        num6 = 0;
      } else {
        num5 = 0;
        num6 = 0;
        if ("bottom" === str2) {
          num5 = diff / xRange;
          num6 = 1;
        }
      }
    } else {
      const result = velocityY / velocityX;
      let num2 = 0;
      if (velocityX > 0) {
        num2 = xRange;
      }
      const sum = diff1 + result * (num2 - diff);
      if (sum >= 0) {
        if (sum <= yRange) {
          num5 = num2 / xRange;
          num6 = sum / yRange;
        }
      }
      let num4 = 0;
      const result1 = 1 / result;
      if (velocityY > 0) {
        num4 = yRange;
      }
      num5 = (diff + result1 * (num4 - diff1)) / xRange;
      num6 = num4 / yRange;
    }
    const obj = { pipX: outer1_3(num5, 0, 1), pipY: outer1_3(num6, 0, 1) };
    return obj;
  }
  calculatePIPPositionFromVelocity.__closure = { getPIPWindowDimensions: closure_6, MIN_PIP_TOSS_VELOCITY: closure_0, clamp: closure_3 };
  calculatePIPPositionFromVelocity.__workletHash = 3215524498124;
  calculatePIPPositionFromVelocity.__initData = closure_7;
  return calculatePIPPositionFromVelocity;
})();
const tmp7 = (() => {
  export function getClampedPIPPosition(topAvoidanceRegion) {
    let bottomAvoidanceRegion;
    let height;
    let pipX;
    let pipY;
    let safeArea;
    let width;
    let windowDimensions;
    ({ pipX, pipY, width, height, windowDimensions, safeArea, bottomAvoidanceRegion } = topAvoidanceRegion);
    if (bottomAvoidanceRegion === undefined) {
      bottomAvoidanceRegion = 0;
    }
    let num = topAvoidanceRegion.topAvoidanceRegion;
    if (num === undefined) {
      num = 0;
    }
    let point = topAvoidanceRegion.positionOffset;
    if (point === undefined) {
      point = { x: 0, y: 0 };
    }
    const disableHorizontalSafeAreas = topAvoidanceRegion.disableHorizontalSafeAreas;
    let obj = {};
    let num2 = 1;
    if (-1 !== pipX) {
      num2 = pipX;
    }
    obj.pipX = num2;
    let num3 = 0;
    if (-1 !== pipY) {
      num3 = pipY;
    }
    obj.pipY = num3;
    obj.windowDimensions = windowDimensions;
    obj.safeArea = safeArea;
    obj.disableHorizontalSafeAreas = disableHorizontalSafeAreas;
    const point2 = outer1_9(obj);
    const y = point2.y;
    const diff = point2.x - width / 2;
    if (-1 === pipY) {
      let sum = y + 72;
    } else {
      sum = y - height / 2;
    }
    const tmp5 = outer1_6(windowDimensions, safeArea, disableHorizontalSafeAreas);
    obj = { x: outer1_3(diff, tmp5.xOffset, tmp5.xOffset + tmp5.xRange - width) + point.x, y: outer1_3(sum, tmp5.yOffset + num, tmp5.yOffset + tmp5.yRange - bottomAvoidanceRegion - height) + point.y };
    return obj;
  }
  getClampedPIPPosition.__closure = { pipXYtoAbsoluteXY: closure_9, getPIPWindowDimensions: closure_6, clamp: closure_3 };
  getClampedPIPPosition.__workletHash = 7754262947803;
  getClampedPIPPosition.__initData = closure_10;
  return getClampedPIPPosition;
})();
let result = require("set").fileFinishedImporting("modules/panels/morphable/native/MorphablePanelUtils.tsx");
