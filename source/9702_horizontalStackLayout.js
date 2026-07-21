// Module ID: 9702
// Function ID: 75419
// Name: horizontalStackLayout
// Dependencies: []
// Exports: useHorizontalStackLayout, verticalStackLayout

// Module 9702 (horizontalStackLayout)
function horizontalStackLayout(first) {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      first = arguments[0];
    }
    const require = first;
    /* worklet (recovered source) */ function pnpm_stackTs1(_value){const{screen,modeConfig,getCommonVariables,getCommonStyles,interpolate,Extrapolation}=this.__closure;const{showLength:showLength,snapDirection="left",moveSize=screen.width,stackInterval=18,scaleInterval=0.04,opacityInterval=0.1,rotateZDeg=30}=modeConfig;const{validLength:validLength,value:value,inputRange:inputRange}=getCommonVariables({showLength:showLength,value:_value,snapDirection:snapDirection});const{zIndex:zIndex,opacity:opacity}=getCommonStyles({validLength:validLength,value:value,opacityInterval:opacityInterval,snapDirection:snapDirection});let translateX;let scale;let rotateZ;if(snapDirection==="left"){translateX=interpolate(value,inputRange,[-moveSize,0,validLength*stackInterval],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1,1,1-validLength*scaleInterval],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[-rotateZDeg,0,0],Extrapolation.CLAMP)+"deg";}else if(snapDirection==="right"){translateX=interpolate(value,inputRange,[-validLength*stackInterval,0,moveSize],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1-validLength*scaleInterval,1,1],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[0,0,rotateZDeg],Extrapolation.CLAMP)+"deg";}const transform=[{translateX:translateX},{scale:scale},{rotateZ:rotateZ}];const styles={transform:transform,zIndex:zIndex,opacity:opacity};return styles;}
    const obj = { screen: closure_3, modeConfig: first, getCommonVariables: closure_7, getCommonStyles: closure_9, interpolate: require(dependencyMap[2]).interpolate, Extrapolation: require(dependencyMap[2]).Extrapolation };
    pnpm_stackTs1.__closure = obj;
    pnpm_stackTs1.__workletHash = 13118376883684;
    pnpm_stackTs1.__initData = closure_4;
    return pnpm_stackTs1;
  }
  first = {};
}
const useMemo = require(dependencyMap[0]).useMemo;
const Dimensions = require(dependencyMap[1]).Dimensions;
let closure_3 = Dimensions.get("window");
let closure_4 = { code: "function pnpm_stackTs1(_value){const{screen,modeConfig,getCommonVariables,getCommonStyles,interpolate,Extrapolation}=this.__closure;const{showLength:showLength,snapDirection=\"left\",moveSize=screen.width,stackInterval=18,scaleInterval=0.04,opacityInterval=0.1,rotateZDeg=30}=modeConfig;const{validLength:validLength,value:value,inputRange:inputRange}=getCommonVariables({showLength:showLength,value:_value,snapDirection:snapDirection});const{zIndex:zIndex,opacity:opacity}=getCommonStyles({validLength:validLength,value:value,opacityInterval:opacityInterval,snapDirection:snapDirection});let translateX;let scale;let rotateZ;if(snapDirection===\"left\"){translateX=interpolate(value,inputRange,[-moveSize,0,validLength*stackInterval],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1,1,1-validLength*scaleInterval],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[-rotateZDeg,0,0],Extrapolation.CLAMP)+\"deg\";}else if(snapDirection===\"right\"){translateX=interpolate(value,inputRange,[-validLength*stackInterval,0,moveSize],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1-validLength*scaleInterval,1,1],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[0,0,rotateZDeg],Extrapolation.CLAMP)+\"deg\";}const transform=[{translateX:translateX},{scale:scale},{rotateZ:rotateZ}];const styles={transform:transform,zIndex:zIndex,opacity:opacity};return styles;}" };
let closure_5 = { code: "function pnpm_stackTs2(_value){const{screen,modeConfig,getCommonVariables,getCommonStyles,interpolate,Extrapolation}=this.__closure;const{showLength:showLength,snapDirection=\"left\",moveSize=screen.width,stackInterval=18,scaleInterval=0.04,opacityInterval=0.1,rotateZDeg=30}=modeConfig;const{validLength:validLength,value:value,inputRange:inputRange}=getCommonVariables({showLength:showLength,value:_value,snapDirection:snapDirection});const{zIndex:zIndex,opacity:opacity}=getCommonStyles({validLength:validLength,value:value,opacityInterval:opacityInterval,snapDirection:snapDirection});let translateX;let scale;let rotateZ;let translateY;if(snapDirection===\"left\"){translateX=interpolate(value,inputRange,[-moveSize,0,0],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1,1,1-validLength*scaleInterval],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[-rotateZDeg,0,0],Extrapolation.CLAMP)+\"deg\";translateY=interpolate(value,inputRange,[0,0,validLength*stackInterval],Extrapolation.CLAMP);}else if(snapDirection===\"right\"){translateX=interpolate(value,inputRange,[0,0,moveSize],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1-validLength*scaleInterval,1,1],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[0,0,rotateZDeg],Extrapolation.CLAMP)+\"deg\";translateY=interpolate(value,inputRange,[validLength*stackInterval,0,0],Extrapolation.CLAMP);}const transform=[{translateX:translateX},{scale:scale},{rotateZ:rotateZ},{translateY:translateY}];const styles={transform:transform,zIndex:zIndex,opacity:opacity};return styles;}" };
let closure_6 = { code: "function getCommonVariables_Pnpm_stackTs3(opts){const{showLength:showLength,value:_value,snapDirection:snapDirection}=opts;function easeInOutCubic(v){return v<0.5?4*v*v*v:1-(-2*v+2)**3/2;}const page=Math.floor(Math.abs(_value));const diff=Math.abs(_value)%1;const value=_value<0?-(page+easeInOutCubic(diff)):page+easeInOutCubic(diff);const validLength=showLength-1;let inputRange;if(snapDirection===\"left\")inputRange=[-1,0,validLength];else if(snapDirection===\"right\")inputRange=[-validLength,0,1];else throw new Error(\"snapDirection must be set to either left or right\");return{inputRange:inputRange,validLength:validLength,value:value};}" };
let closure_7 = () => {
  function getCommonVariables(showLength) {
    let snapDirection;
    let value;
    function easeInOutCubic(result) {
      if (result < 0.5) {
        result = 4 * result * result * result;
      } else {
        result = 1 - (-2 * result + 2) ** 3 / 2;
      }
      return result;
    }
    ({ value, snapDirection } = showLength);
    const rounded = Math.floor(Math.abs(value));
    const result = Math.abs(value) % 1;
    if (value < 0) {
      let sum = -rounded + easeInOutCubic(result);
    } else {
      sum = rounded + easeInOutCubic(result);
    }
    const diff = showLength.showLength - 1;
    if ("left" === snapDirection) {
      const items = [-1, 0, diff];
      let items1 = items;
    } else if ("right" !== snapDirection) {
      const _Error = Error;
      const error = new Error("snapDirection must be set to either left or right");
      throw error;
    } else {
      items1 = [-diff, 0, 1];
    }
    const obj = { inputRange: items1, validLength: diff, value: sum };
    return obj;
  }
  getCommonVariables.__closure = {};
  getCommonVariables.__workletHash = 9545327827217;
  getCommonVariables.__initData = closure_6;
  return getCommonVariables;
}();
let closure_8 = { code: "function getCommonStyles_Pnpm_stackTs4(opts){const{interpolate}=this.__closure;const{snapDirection:snapDirection,validLength:validLength,value:value,opacityInterval:opacityInterval}=opts;let zIndex;let opacity;if(snapDirection===\"left\"){zIndex=Math.floor(interpolate(value,[-1.5,-1,-1+Number.MIN_VALUE,0,validLength],[Number.MIN_VALUE,validLength,validLength,validLength-1,-1])*10000)/100;opacity=interpolate(value,[-1,0,validLength-1,validLength],[0.25,1,1-(validLength-1)*opacityInterval,0.25]);}else if(snapDirection===\"right\"){zIndex=Math.floor(interpolate(value,[-validLength,0,1-Number.MIN_VALUE,1,1.5],[1,validLength-1,validLength,validLength,Number.MIN_VALUE])*10000)/100;opacity=interpolate(value,[-validLength,1-validLength,0,1],[0.25,1-(validLength-1)*opacityInterval,1,0.25]);}else{throw new Error(\"snapDirection must be set to either left or right\");}return{zIndex:Math.round(zIndex),opacity:opacity};}" };
let closure_9 = () => {
  function getCommonStyles(arg0) {
    let opacityInterval;
    let snapDirection;
    let validLength;
    let value;
    ({ snapDirection, validLength, value, opacityInterval } = arg0);
    if ("left" === snapDirection) {
      const _Math = Math;
      let obj = callback(closure_1[2]);
      const items = [-1.5, -1, , , ];
      const _Number = Number;
      items[2] = -1 + Number.MIN_VALUE;
      items[3] = 0;
      items[4] = validLength;
      const _Number2 = Number;
      const items1 = [Number.MIN_VALUE, validLength, validLength, validLength - 1, -1];
      let result = Math.floor(10000 * obj.interpolate(value, items, items1)) / 100;
      const items2 = [-1, 0, validLength - 1, validLength];
      const items3 = [1904345090, -83427325, 1 - (validLength - 1) * opacityInterval, 0.25];
      let interpolateResult = callback(closure_1[2]).interpolate(value, items2, items3);
      const obj2 = callback(closure_1[2]);
    } else if ("right" !== snapDirection) {
      const _Error = Error;
      const error = new Error("snapDirection must be set to either left or right");
      throw error;
    } else {
      const _Math2 = Math;
      const items4 = [-validLength, 0, , , ];
      const _Number3 = Number;
      items4[2] = 1 - Number.MIN_VALUE;
      items4[3] = 1;
      items4[4] = 1.5;
      const items5 = [15189782894321462000000000000000000000000000000000000000000000000000000000000000000, validLength - 1, validLength, validLength];
      const _Number4 = Number;
      items5[4] = Number.MIN_VALUE;
      result = Math.floor(10000 * callback(closure_1[2]).interpolate(value, items4, items5)) / 100;
      const obj4 = callback(closure_1[2]);
      const items6 = [-validLength, 1 - validLength, 0, 1];
      const items7 = [1904345090, 1 - (validLength - 1) * opacityInterval, 1, 0.25];
      interpolateResult = callback(closure_1[2]).interpolate(value, items6, items7);
      const obj5 = callback(closure_1[2]);
    }
    obj = { zIndex: Math.round(result), opacity: interpolateResult };
    return obj;
  }
  getCommonStyles.__closure = { interpolate: require(dependencyMap[2]).interpolate };
  getCommonStyles.__workletHash = 9067239849373;
  getCommonStyles.__initData = closure_8;
  return getCommonStyles;
}();

export { horizontalStackLayout };
export const useHorizontalStackLayout = function useHorizontalStackLayout() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const require = first;
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        let obj = arguments[1];
      }
      const dependencyMap = obj;
      const items = [first, obj];
      obj = {
        layout: horizontalStackLayout(first),
        config: useMemo(() => {
              const obj = {};
              let str = "positive";
              if ("right" === first.snapDirection) {
                str = "negative";
              }
              obj.type = str;
              obj.viewCount = first.showLength;
              return Object.assign(obj, obj);
            }, items)
      };
      return obj;
    }
    obj = {};
  }
  first = {};
};
export const verticalStackLayout = function verticalStackLayout() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const require = first;
    /* worklet (recovered source) */ function pnpm_stackTs2(_value){const{screen,modeConfig,getCommonVariables,getCommonStyles,interpolate,Extrapolation}=this.__closure;const{showLength:showLength,snapDirection="left",moveSize=screen.width,stackInterval=18,scaleInterval=0.04,opacityInterval=0.1,rotateZDeg=30}=modeConfig;const{validLength:validLength,value:value,inputRange:inputRange}=getCommonVariables({showLength:showLength,value:_value,snapDirection:snapDirection});const{zIndex:zIndex,opacity:opacity}=getCommonStyles({validLength:validLength,value:value,opacityInterval:opacityInterval,snapDirection:snapDirection});let translateX;let scale;let rotateZ;let translateY;if(snapDirection==="left"){translateX=interpolate(value,inputRange,[-moveSize,0,0],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1,1,1-validLength*scaleInterval],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[-rotateZDeg,0,0],Extrapolation.CLAMP)+"deg";translateY=interpolate(value,inputRange,[0,0,validLength*stackInterval],Extrapolation.CLAMP);}else if(snapDirection==="right"){translateX=interpolate(value,inputRange,[0,0,moveSize],Extrapolation.CLAMP);scale=interpolate(value,inputRange,[1-validLength*scaleInterval,1,1],Extrapolation.CLAMP);rotateZ=interpolate(value,inputRange,[0,0,rotateZDeg],Extrapolation.CLAMP)+"deg";translateY=interpolate(value,inputRange,[validLength*stackInterval,0,0],Extrapolation.CLAMP);}const transform=[{translateX:translateX},{scale:scale},{rotateZ:rotateZ},{translateY:translateY}];const styles={transform:transform,zIndex:zIndex,opacity:opacity};return styles;}
    const obj = { screen: closure_3, modeConfig: first, getCommonVariables: closure_7, getCommonStyles: closure_9, interpolate: require(dependencyMap[2]).interpolate, Extrapolation: require(dependencyMap[2]).Extrapolation };
    pnpm_stackTs2.__closure = obj;
    pnpm_stackTs2.__workletHash = 9752649608963;
    pnpm_stackTs2.__initData = closure_5;
    return pnpm_stackTs2;
  }
  first = {};
};
