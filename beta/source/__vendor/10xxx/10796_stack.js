// Module ID: 10796
// Function ID: 10797
// Name: stack
// Dependencies: [19, 17, 1652]
// Exports: useHorizontalStackLayout, verticalStackLayout

// Module 10796 (stack)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import _mod1652 from "module_1652" /* 1652 */;

let tmp2;
let tmp3;
let tmp4;
function horizontalStackLayout(arg0) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let items = [closure_4, closure_3, obj, getCommonVariables, getCommonStyles, _mod1652.interpolate, _mod1652.Extrapolation];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  function pnpm_stackTs1(value) {
    let combined;
    let inputRange;
    let items6;
    let opacity;
    let tmp10;
    let tmp14;
    let validLength;
    let zIndex;
    const snapDirection = _undefined2.snapDirection;
    let str = "left";
    const showLength = _undefined2.showLength;
    if (undefined !== snapDirection) {
      str = snapDirection;
    }
    let width = tmp.moveSize;
    if (undefined === width) {
      width = _undefined.width;
    }
    const stackInterval = tmp.stackInterval;
    let num = 18;
    if (undefined !== stackInterval) {
      num = stackInterval;
    }
    const scaleInterval = tmp.scaleInterval;
    let num2 = 0.04;
    if (undefined !== scaleInterval) {
      num2 = scaleInterval;
    }
    const opacityInterval = tmp.opacityInterval;
    let num3 = 0.1;
    if (undefined !== opacityInterval) {
      num3 = opacityInterval;
    }
    const rotateZDeg = tmp.rotateZDeg;
    let num4 = 30;
    if (undefined !== rotateZDeg) {
      num4 = rotateZDeg;
    }
    const obj = { showLength, value, snapDirection: str };
    ({ validLength, value, inputRange } = _undefined3(obj));
    _undefined3(obj);
    ({ zIndex, opacity } = _undefined4({ validLength, value, opacityInterval: num3, snapDirection: str }));
    _undefined4({ validLength, value, opacityInterval: num3, snapDirection: str });
    if ("left" === str) {
      const items = [-width, 0, validLength * num];
      tmp10 = _undefined5(value, inputRange, items, _undefined6.CLAMP);
      const items1 = [1, 1, 1 - validLength * num2];
      tmp14 = _undefined5(value, inputRange, items1, _undefined6.CLAMP);
      const items2 = [-num4, 0, 0];
      const _HermesInternal = HermesInternal;
      combined = "" + _undefined5(value, inputRange, items2, _undefined6.CLAMP) + "deg";
    } else if ("right" === str) {
      const items3 = [-validLength * num, 0, width];
      tmp10 = _undefined5(value, inputRange, items3, _undefined6.CLAMP);
      const items4 = [1 - validLength * num2, 1, 1];
      tmp14 = _undefined5(value, inputRange, items4, _undefined6.CLAMP);
      const items5 = [0, 0, num4];
      const _HermesInternal2 = HermesInternal;
      combined = "" + _undefined5(value, inputRange, items5, _undefined6.CLAMP) + "deg";
    }
    const obj2 = { transform: items6, zIndex, opacity };
    items6 = [{ translateX: tmp10 }, { scale: tmp14 }, { rotateZ: combined }];
    return obj2;
  }
  let items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7];
  pnpm_stackTs1.__closure = items1;
  pnpm_stackTs1.__workletHash = 5899900600701;
  pnpm_stackTs1.__initData = tmp;
  return pnpm_stackTs1;
}
const useMemo = react.useMemo;
const Dimensions = react_native.Dimensions;
let closure_3 = Dimensions.get("window");
let closure_4 = { code: "(function pnpm_stackTs1(_value){let[screen,modeConfig,getCommonVariables,getCommonStyles,interpolate,Extrapolation]=this.__closure;const{showLength:showLength,snapDirection=\"left\",moveSize=screen.width,stackInterval=18,scaleInterval=0.04,opacityInterval=0.1,rotateZDeg=30}=modeConfig;const{validLength:validLength,value:value,inputRange:inputRange}=getCommonVariables({showLength:showLength,value:_value,snapDirection:snapDirection});const{zIndex:zIndex,opacity:opacity}=getCommonStyles({validLength:validLength,value:value,opacityInterval:opacityInterval,snapDirection:snapDirection});let translateX;let scale;let rotateZ;if(snapDirection===\"left\"){translateX=interpolate(value,inputRange,[-moveSize,0,validLength*stackInterval],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1,1,1-validLength*scaleInterval],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[-rotateZDeg,0,0],Extrapolation.CLAMP)+\"deg\";}else if(snapDirection===\"right\"){translateX=interpolate(value,inputRange,[-validLength*stackInterval,0,moveSize],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1-validLength*scaleInterval,1,1],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[0,0,rotateZDeg],Extrapolation.CLAMP)+\"deg\";}const transform=[{translateX:translateX},{scale:scale},{rotateZ:rotateZ}];const styles={transform:transform,zIndex:zIndex,opacity:opacity};return styles;})" };
let closure_6 = { code: "(function pnpm_stackTs2(_value){let[screen,modeConfig,getCommonVariables,getCommonStyles,interpolate,Extrapolation]=this.__closure;const{showLength:showLength,snapDirection=\"left\",moveSize=screen.width,stackInterval=18,scaleInterval=0.04,opacityInterval=0.1,rotateZDeg=30}=modeConfig;const{validLength:validLength,value:value,inputRange:inputRange}=getCommonVariables({showLength:showLength,value:_value,snapDirection:snapDirection});const{zIndex:zIndex,opacity:opacity}=getCommonStyles({validLength:validLength,value:value,opacityInterval:opacityInterval,snapDirection:snapDirection});let translateX;let scale;let rotateZ;let translateY;if(snapDirection===\"left\"){translateX=interpolate(value,inputRange,[-moveSize,0,0],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1,1,1-validLength*scaleInterval],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[-rotateZDeg,0,0],Extrapolation.CLAMP)+\"deg\";translateY=interpolate(value,inputRange,[0,0,validLength*stackInterval],Extrapolation.CLAMP);}else if(snapDirection===\"right\"){translateX=interpolate(value,inputRange,[0,0,moveSize],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1-validLength*scaleInterval,1,1],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[0,0,rotateZDeg],Extrapolation.CLAMP)+\"deg\";translateY=interpolate(value,inputRange,[validLength*stackInterval,0,0],Extrapolation.CLAMP);}const transform=[{translateX:translateX},{scale:scale},{rotateZ:rotateZ},{translateY:translateY}];const styles={transform:transform,zIndex:zIndex,opacity:opacity};return styles;})" };
let items = [{ code: "(function getCommonVariables_Pnpm_stackTs3(opts){const{showLength:showLength,value:_value,snapDirection:snapDirection}=opts;function easeInOutCubic(v){return v<0.5?4*v*v*v:1-(-2*v+2)**3/2;}const page=Math.floor(Math.abs(_value));const diff=Math.abs(_value)%1;const value=_value<0?-(page+easeInOutCubic(diff)):page+easeInOutCubic(diff);const validLength=showLength-1;let inputRange;if(snapDirection===\"left\")inputRange=[-1,0,validLength];else if(snapDirection===\"right\")inputRange=[-validLength,0,1];else throw new Error(\"snapDirection must be set to either left or right\");return{inputRange:inputRange,validLength:validLength,value:value};})" }];
[tmp2] = items;
function getCommonVariables(showLength) {
  let inputRange;
  let snapDirection;
  let value;
  let value1;
  ({ value, snapDirection } = showLength);
  showLength = showLength.showLength;
  const rounded = Math.floor(Math.abs(value));
  const result = Math.abs(value) % 1;
  if (value < 0) {
    let result1;
    if (result < 0.5) {
      result1 = 4 * result * result * result;
    } else {
      result1 = 1 - (-2 * result + 2) ** 3 / 2;
    }
    value1 = -rounded + result1;
  } else {
    let result2;
    if (result < 0.5) {
      result2 = 4 * result * result * result;
    } else {
      result2 = 1 - (-2 * result + 2) ** 3 / 2;
    }
    value1 = rounded + result2;
  }
  const validLength = showLength - 1;
  if ("left" === snapDirection) {
    const items = [-1, 0, validLength];
    inputRange = items;
  } else if ("right" !== snapDirection) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("snapDirection must be set to either left or right");
    throw error;
  } else {
    inputRange = [-validLength, 0, 1];
  }
  return { inputRange, validLength, value: value1 };
}
getCommonVariables.__workletHash = 16254543886864;
getCommonVariables.__initData = tmp2;
let items1 = [{ code: "(function getCommonStyles_Pnpm_stackTs4(opts){let[interpolate]=this.__closure;const{snapDirection:snapDirection,validLength:validLength,value:value,opacityInterval:opacityInterval}=opts;let zIndex;let opacity;if(snapDirection===\"left\"){zIndex=Math.floor(interpolate(value,[-1.5,-1,-1+Number.MIN_VALUE,0,validLength],[Number.MIN_VALUE,validLength,validLength,validLength-1,-1])*10000)/100;opacity=interpolate(value,[-1,0,validLength-1,validLength],[0.25,1,1-(validLength-1)*opacityInterval,0.25]);}else if(snapDirection===\"right\"){zIndex=Math.floor(interpolate(value,[-validLength,0,1-Number.MIN_VALUE,1,1.5],[1,validLength-1,validLength,validLength,Number.MIN_VALUE])*10000)/100;opacity=interpolate(value,[-validLength,1-validLength,0,1],[0.25,1-(validLength-1)*opacityInterval,1,0.25]);}else{throw new Error(\"snapDirection must be set to either left or right\");}return{zIndex:Math.round(zIndex),opacity:opacity};})" }, _mod1652.interpolate];
let c0;
[tmp3, tmp4] = items1;
function getCommonStyles(arg0) {
  let opacityInterval;
  let result;
  let snapDirection;
  let tmp7;
  let validLength;
  let value;
  ({ snapDirection, validLength, value, opacityInterval } = arg0);
  if ("left" === snapDirection) {
    const _Math = Math;
    const _Number = Number;
    const items = [-1.5, -1, -1 + Number.MIN_VALUE, 0, validLength];
    const _Number2 = Number;
    const items1 = [Number.MIN_VALUE, validLength, validLength, validLength - 1, -1];
    result = Math.floor(10000 * _undefined(value, items, items1)) / 100;
    const items2 = [-1, 0, validLength - 1, validLength];
    const items3 = [0.25, 1, 1 - (validLength - 1) * opacityInterval, 0.25];
    tmp7 = _undefined(value, items2, items3);
  } else if ("right" !== snapDirection) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("snapDirection must be set to either left or right");
    throw error;
  } else {
    const _Math2 = Math;
    const items4 = [-validLength, 0, , , ];
    const _Number3 = Number;
    items4[2] = 1 - Number.MIN_VALUE;
    items4[3] = 1;
    items4[4] = 1.5;
    const items5 = [1, validLength - 1, validLength, validLength];
    const _Number4 = Number;
    items5[4] = Number.MIN_VALUE;
    result = Math.floor(10000 * _undefined(value, items4, items5)) / 100;
    const items6 = [-validLength, 1 - validLength, 0, 1];
    const items7 = [0.25, 1 - (validLength - 1) * opacityInterval, 1, 0.25];
    tmp7 = _undefined(value, items6, items7);
  }
  const obj = { zIndex: Math.round(result), opacity: tmp7 };
  return obj;
}
let items2 = [tmp4];
getCommonStyles.__closure = items2;
getCommonStyles.__workletHash = 12916536003300;
getCommonStyles.__initData = tmp3;

export { horizontalStackLayout };
export function useHorizontalStackLayout() {
  let tmp;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = arg1;
  if (arg1 === undefined) {
    obj2 = {};
  }
  const items = [obj, obj2];
  const obj3 = { layout: horizontalStackLayout(obj), config: tmp };
  tmp = useMemo(() => {
    let str = "positive";
    const tmp = obj;
    if ("right" === obj.snapDirection) {
      str = "negative";
    }
    obj = { type: str, viewCount: tmp.showLength };
    const merged = Object.assign(obj2);
    return obj;
  }, items);
  return obj3;
}
export function verticalStackLayout() {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let items = [closure_6, closure_3, obj, getCommonVariables, getCommonStyles, _mod1652.interpolate, _mod1652.Extrapolation];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  function pnpm_stackTs2(value) {
    let combined;
    let inputRange;
    let items8;
    let opacity;
    let tmp10;
    let tmp14;
    let tmp23;
    let validLength;
    let zIndex;
    const snapDirection = _undefined2.snapDirection;
    let str = "left";
    const showLength = _undefined2.showLength;
    if (undefined !== snapDirection) {
      str = snapDirection;
    }
    let width = tmp.moveSize;
    if (undefined === width) {
      width = _undefined.width;
    }
    const stackInterval = tmp.stackInterval;
    let num = 18;
    if (undefined !== stackInterval) {
      num = stackInterval;
    }
    const scaleInterval = tmp.scaleInterval;
    let num2 = 0.04;
    if (undefined !== scaleInterval) {
      num2 = scaleInterval;
    }
    const opacityInterval = tmp.opacityInterval;
    let num3 = 0.1;
    if (undefined !== opacityInterval) {
      num3 = opacityInterval;
    }
    const rotateZDeg = tmp.rotateZDeg;
    let num4 = 30;
    if (undefined !== rotateZDeg) {
      num4 = rotateZDeg;
    }
    const obj = { showLength, value, snapDirection: str };
    ({ validLength, value, inputRange } = _undefined3(obj));
    _undefined3(obj);
    ({ zIndex, opacity } = _undefined4({ validLength, value, opacityInterval: num3, snapDirection: str }));
    _undefined4({ validLength, value, opacityInterval: num3, snapDirection: str });
    if ("left" === str) {
      const items = [-width, 0, 0];
      tmp10 = _undefined5(value, inputRange, items, _undefined6.CLAMP);
      const items1 = [1, 1, 1 - validLength * num2];
      tmp14 = _undefined5(value, inputRange, items1, _undefined6.CLAMP);
      const items2 = [-num4, 0, 0];
      const _HermesInternal = HermesInternal;
      combined = "" + _undefined5(value, inputRange, items2, _undefined6.CLAMP) + "deg";
      const items3 = [0, 0, validLength * num];
      tmp23 = _undefined5(value, inputRange, items3, _undefined6.CLAMP);
    } else if ("right" === str) {
      const items4 = [0, 0, width];
      tmp10 = _undefined5(value, inputRange, items4, _undefined6.CLAMP);
      const items5 = [1 - validLength * num2, 1, 1];
      tmp14 = _undefined5(value, inputRange, items5, _undefined6.CLAMP);
      const items6 = [0, 0, num4];
      const _HermesInternal2 = HermesInternal;
      combined = "" + _undefined5(value, inputRange, items6, _undefined6.CLAMP) + "deg";
      const items7 = [validLength * num, 0, 0];
      tmp23 = _undefined5(value, inputRange, items7, _undefined6.CLAMP);
    }
    const obj2 = { transform: items8, zIndex, opacity };
    items8 = [{ translateX: tmp10 }, { scale: tmp14 }, { rotateZ: combined }, { translateY: tmp23 }];
    return obj2;
  }
  let items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7];
  pnpm_stackTs2.__closure = items1;
  pnpm_stackTs2.__workletHash = 17095480331642;
  pnpm_stackTs2.__initData = tmp;
  return pnpm_stackTs2;
}
