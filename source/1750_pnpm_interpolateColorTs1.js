// Module ID: 1750
// Function ID: 19570
// Name: pnpm_interpolateColorTs1
// Dependencies: [1751, 1625, 1752, 1593, 1734, 1626]
// Exports: useInterpolateConfig

// Module 1750 (pnpm_interpolateColorTs1)
/* worklet (recovered source) */ function pnpm_interpolateColorTs1(value,inputRange,colors,options){const{interpolate,Extrapolation,hsvToColor}=this.__closure;let h=0;const{useCorrectedHSVInterpolation=true}=options;if(useCorrectedHSVInterpolation){const correctedInputRange=[inputRange[0]];const originalH=colors.h;const correctedH=[originalH[0]];for(let i=1;i<originalH.length;++i){const d=originalH[i]-originalH[i-1];if(originalH[i]>originalH[i-1]&&d>0.5){correctedInputRange.push(inputRange[i]);correctedInputRange.push(inputRange[i]+0.00001);correctedH.push(originalH[i]-1);correctedH.push(originalH[i]);}else if(originalH[i]<originalH[i-1]&&d<-0.5){correctedInputRange.push(inputRange[i]);correctedInputRange.push(inputRange[i]+0.00001);correctedH.push(originalH[i]+1);correctedH.push(originalH[i]);}else{correctedInputRange.push(inputRange[i]);correctedH.push(originalH[i]);}}h=(interpolate(value,correctedInputRange,correctedH,Extrapolation.CLAMP)+1)%1;}else{h=interpolate(value,inputRange,colors.h,Extrapolation.CLAMP);}const s=interpolate(value,inputRange,colors.s,Extrapolation.CLAMP);const v=interpolate(value,inputRange,colors.v,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);return hsvToColor(h,s,v,a);}
let obj = { interpolate: require("getVal").interpolate, Extrapolation: require("getVal").Extrapolation, hsvToColor: require("call").hsvToColor };
pnpm_interpolateColorTs1.__closure = obj;
pnpm_interpolateColorTs1.__workletHash = 1574790978150;
pnpm_interpolateColorTs1.__initData = { code: "function pnpm_interpolateColorTs1(value,inputRange,colors,options){const{interpolate,Extrapolation,hsvToColor}=this.__closure;let h=0;const{useCorrectedHSVInterpolation=true}=options;if(useCorrectedHSVInterpolation){const correctedInputRange=[inputRange[0]];const originalH=colors.h;const correctedH=[originalH[0]];for(let i=1;i<originalH.length;++i){const d=originalH[i]-originalH[i-1];if(originalH[i]>originalH[i-1]&&d>0.5){correctedInputRange.push(inputRange[i]);correctedInputRange.push(inputRange[i]+0.00001);correctedH.push(originalH[i]-1);correctedH.push(originalH[i]);}else if(originalH[i]<originalH[i-1]&&d<-0.5){correctedInputRange.push(inputRange[i]);correctedInputRange.push(inputRange[i]+0.00001);correctedH.push(originalH[i]+1);correctedH.push(originalH[i]);}else{correctedInputRange.push(inputRange[i]);correctedH.push(originalH[i]);}}h=(interpolate(value,correctedInputRange,correctedH,Extrapolation.CLAMP)+1)%1;}else{h=interpolate(value,inputRange,colors.h,Extrapolation.CLAMP);}const s=interpolate(value,inputRange,colors.s,Extrapolation.CLAMP);const v=interpolate(value,inputRange,colors.v,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);return hsvToColor(h,s,v,a);}" };
/* worklet (recovered source) */ function pnpm_interpolateColorTs2(x,gamma){return x.map(function(v){return Math.pow(v/255,gamma);});}
pnpm_interpolateColorTs2.__closure = {};
pnpm_interpolateColorTs2.__workletHash = 16826369876333;
pnpm_interpolateColorTs2.__initData = { code: "function pnpm_interpolateColorTs2(x,gamma){return x.map(function(v){return Math.pow(v/255,gamma);});}" };
/* worklet (recovered source) */ function pnpm_interpolateColorTs3(x,gamma){return Math.round(Math.pow(x,1/gamma)*255);}
pnpm_interpolateColorTs3.__closure = {};
pnpm_interpolateColorTs3.__workletHash = 5856560656141;
pnpm_interpolateColorTs3.__initData = { code: "function pnpm_interpolateColorTs3(x,gamma){return Math.round(Math.pow(x,1/gamma)*255);}" };
/* worklet (recovered source) */ function pnpm_interpolateColorTs4(value,inputRange,colors,options){const{toLinearSpace,interpolate,Extrapolation,rgbaColor,toGammaSpace}=this.__closure;const{gamma=2.2}=options;let{r:outputR,g:outputG,b:outputB}=colors;if(gamma!==1){outputR=toLinearSpace(outputR,gamma);outputG=toLinearSpace(outputG,gamma);outputB=toLinearSpace(outputB,gamma);}const r=interpolate(value,inputRange,outputR,Extrapolation.CLAMP);const g=interpolate(value,inputRange,outputG,Extrapolation.CLAMP);const b=interpolate(value,inputRange,outputB,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);if(gamma===1){return rgbaColor(r,g,b,a);}return rgbaColor(toGammaSpace(r,gamma),toGammaSpace(g,gamma),toGammaSpace(b,gamma),a);}
obj = { toLinearSpace: pnpm_interpolateColorTs2, interpolate: require("getVal").interpolate, Extrapolation: require("getVal").Extrapolation, rgbaColor: require("call").rgbaColor, toGammaSpace: pnpm_interpolateColorTs3 };
pnpm_interpolateColorTs4.__closure = obj;
pnpm_interpolateColorTs4.__workletHash = 13883480600753;
pnpm_interpolateColorTs4.__initData = { code: "function pnpm_interpolateColorTs4(value,inputRange,colors,options){const{toLinearSpace,interpolate,Extrapolation,rgbaColor,toGammaSpace}=this.__closure;const{gamma=2.2}=options;let{r:outputR,g:outputG,b:outputB}=colors;if(gamma!==1){outputR=toLinearSpace(outputR,gamma);outputG=toLinearSpace(outputG,gamma);outputB=toLinearSpace(outputB,gamma);}const r=interpolate(value,inputRange,outputR,Extrapolation.CLAMP);const g=interpolate(value,inputRange,outputG,Extrapolation.CLAMP);const b=interpolate(value,inputRange,outputB,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);if(gamma===1){return rgbaColor(r,g,b,a);}return rgbaColor(toGammaSpace(r,gamma),toGammaSpace(g,gamma),toGammaSpace(b,gamma),a);}" };
/* worklet (recovered source) */ function pnpm_interpolateColorTs5(value,inputRange,colors,_options){const{interpolate,Extrapolation,culori,rgbaColor}=this.__closure;const l=interpolate(value,inputRange,colors.l,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);const b=interpolate(value,inputRange,colors.b,Extrapolation.CLAMP);const alpha=interpolate(value,inputRange,colors.alpha,Extrapolation.CLAMP);const{r:_r,g:_g,b:_b,alpha:_alpha}=culori.oklab.convert.toRgb({l:l,a:a,b:b,alpha:alpha});return rgbaColor(_r,_g,_b,_alpha);}
obj = { interpolate: require("getVal").interpolate, Extrapolation: require("getVal").Extrapolation, culori: require("convertLrgbToOklab"), rgbaColor: require("call").rgbaColor };
pnpm_interpolateColorTs5.__closure = obj;
pnpm_interpolateColorTs5.__workletHash = 7788654685113;
pnpm_interpolateColorTs5.__initData = { code: "function pnpm_interpolateColorTs5(value,inputRange,colors,_options){const{interpolate,Extrapolation,culori,rgbaColor}=this.__closure;const l=interpolate(value,inputRange,colors.l,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);const b=interpolate(value,inputRange,colors.b,Extrapolation.CLAMP);const alpha=interpolate(value,inputRange,colors.alpha,Extrapolation.CLAMP);const{r:_r,g:_g,b:_b,alpha:_alpha}=culori.oklab.convert.toRgb({l:l,a:a,b:b,alpha:alpha});return rgbaColor(_r,_g,_b,_alpha);}" };
/* worklet (recovered source) */ function pnpm_interpolateColorTs6(colors,convFromRgb){const{processColor,red,green,blue,opacity}=this.__closure;const ch1=[];const ch2=[];const ch3=[];const alpha=[];for(let i=0;i<colors.length;i++){const color=colors[i];const processedColor=processColor(color);if(typeof processedColor==='number'){const convertedColor=convFromRgb({r:red(processedColor),g:green(processedColor),b:blue(processedColor)});ch1.push(convertedColor.ch1);ch2.push(convertedColor.ch2);ch3.push(convertedColor.ch3);alpha.push(opacity(processedColor));}}return{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha};}
pnpm_interpolateColorTs6.__closure = { processColor: require("call").processColor, red: require("call").red, green: require("call").green, blue: require("call").blue, opacity: require("call").opacity };
pnpm_interpolateColorTs6.__workletHash = 8764168362190;
pnpm_interpolateColorTs6.__initData = { code: "function pnpm_interpolateColorTs6(colors,convFromRgb){const{processColor,red,green,blue,opacity}=this.__closure;const ch1=[];const ch2=[];const ch3=[];const alpha=[];for(let i=0;i<colors.length;i++){const color=colors[i];const processedColor=processColor(color);if(typeof processedColor==='number'){const convertedColor=convFromRgb({r:red(processedColor),g:green(processedColor),b:blue(processedColor)});ch1.push(convertedColor.ch1);ch2.push(convertedColor.ch2);ch3.push(convertedColor.ch3);alpha.push(opacity(processedColor));}}return{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha};}" };
/* worklet (recovered source) */ function pnpm_interpolateColorTs7(colors){const{_splitColorsIntoChannels}=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(colors,function(color){return{ch1:color.r,ch2:color.g,ch3:color.b};});return{r:ch1,g:ch2,b:ch3,a:alpha};}
pnpm_interpolateColorTs7.__closure = { _splitColorsIntoChannels: pnpm_interpolateColorTs6 };
pnpm_interpolateColorTs7.__workletHash = 937749076324;
pnpm_interpolateColorTs7.__initData = { code: "function pnpm_interpolateColorTs7(colors){const{_splitColorsIntoChannels}=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(colors,function(color){return{ch1:color.r,ch2:color.g,ch3:color.b};});return{r:ch1,g:ch2,b:ch3,a:alpha};}" };
/* worklet (recovered source) */ function pnpm_interpolateColorTs8(colors){const{_splitColorsIntoChannels,RGBtoHSV}=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(colors,function(color){const hsvColor=RGBtoHSV(color.r,color.g,color.b);return{ch1:hsvColor.h,ch2:hsvColor.s,ch3:hsvColor.v};});return{h:ch1,s:ch2,v:ch3,a:alpha};}
const obj1 = { processColor: require("call").processColor, red: require("call").red, green: require("call").green, blue: require("call").blue, opacity: require("call").opacity };
pnpm_interpolateColorTs8.__closure = { _splitColorsIntoChannels: pnpm_interpolateColorTs6, RGBtoHSV: require("call").RGBtoHSV };
pnpm_interpolateColorTs8.__workletHash = 11798906675452;
pnpm_interpolateColorTs8.__initData = { code: "function pnpm_interpolateColorTs8(colors){const{_splitColorsIntoChannels,RGBtoHSV}=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(colors,function(color){const hsvColor=RGBtoHSV(color.r,color.g,color.b);return{ch1:hsvColor.h,ch2:hsvColor.s,ch3:hsvColor.v};});return{h:ch1,s:ch2,v:ch3,a:alpha};}" };
/* worklet (recovered source) */ function pnpm_interpolateColorTs9(colors){const{_splitColorsIntoChannels,culori}=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(colors,function(color){const labColor=culori.oklab.convert.fromRgb(color);return{ch1:labColor.l,ch2:labColor.a,ch3:labColor.b};});return{l:ch1,a:ch2,b:ch3,alpha:alpha};}
let obj2 = { _splitColorsIntoChannels: pnpm_interpolateColorTs6, RGBtoHSV: require("call").RGBtoHSV };
pnpm_interpolateColorTs9.__closure = { _splitColorsIntoChannels: pnpm_interpolateColorTs6, culori: require("convertLrgbToOklab") };
pnpm_interpolateColorTs9.__workletHash = 11214827752418;
pnpm_interpolateColorTs9.__initData = { code: "function pnpm_interpolateColorTs9(colors){const{_splitColorsIntoChannels,culori}=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(colors,function(color){const labColor=culori.oklab.convert.fromRgb(color);return{ch1:labColor.l,ch2:labColor.a,ch3:labColor.b};});return{l:ch1,a:ch2,b:ch3,alpha:alpha};}" };
let closure_12 = { code: "function interpolateColor_Pnpm_interpolateColorTs10(value,inputRange,outputRange,colorSpace='RGB',options={}){const{interpolateColorsHSV,getInterpolateHSV,interpolateColorsRGB,getInterpolateRGB,interpolateColorsLAB,getInterpolateLAB}=this.__closure;if(colorSpace==='HSV'){return interpolateColorsHSV(value,inputRange,getInterpolateHSV(outputRange),options);}else if(colorSpace==='RGB'){return interpolateColorsRGB(value,inputRange,getInterpolateRGB(outputRange),options);}else if(colorSpace==='LAB'){return interpolateColorsLAB(value,inputRange,getInterpolateLAB(outputRange),options);}throw new ReanimatedError(\"Invalid color space provided: \"+colorSpace+\". Supported values are: ['RGB', 'HSV', 'LAB'].\");}" };
let obj4 = { RGB: 0, [0]: "RGB", HSV: 1, [1]: "HSV", LAB: 2, [2]: "LAB" };
let obj3 = { _splitColorsIntoChannels: pnpm_interpolateColorTs6, culori: require("convertLrgbToOklab") };

export const Extrapolate = require("getVal").Extrapolation;
export const interpolateColor = (() => {
  function interpolateColor(arg0, arg1, arg2) {
    let str = "RGB";
    if (arguments.length > 3) {
      str = "RGB";
      if (undefined !== arguments[3]) {
        str = arguments[3];
      }
    }
    if (arguments.length > 4) {
      if (undefined !== arguments[4]) {
        let obj = arguments[4];
      }
      if ("HSV" === str) {
        return outer1_3(arg0, arg1, outer1_10(arg2), obj);
      } else if ("RGB" === str) {
        return outer1_6(arg0, arg1, outer1_9(arg2), obj);
      } else if ("LAB" === str) {
        return outer1_7(arg0, arg1, outer1_11(arg2), obj);
      } else {
        const ReanimatedError = outer1_0(outer1_2[3]).ReanimatedError;
        const _HermesInternal = HermesInternal;
        const prototype = ReanimatedError.prototype;
        const reanimatedError = new ReanimatedError("Invalid color space provided: " + str + ". Supported values are: ['RGB', 'HSV', 'LAB'].");
        throw reanimatedError;
      }
    }
    obj = {};
  }
  interpolateColor.__closure = { interpolateColorsHSV: pnpm_interpolateColorTs1, getInterpolateHSV: pnpm_interpolateColorTs8, interpolateColorsRGB: pnpm_interpolateColorTs4, getInterpolateRGB: pnpm_interpolateColorTs7, interpolateColorsLAB: pnpm_interpolateColorTs5, getInterpolateLAB: pnpm_interpolateColorTs9 };
  interpolateColor.__workletHash = 10004340589678;
  interpolateColor.__initData = closure_12;
  return interpolateColor;
})();
export const ColorSpace = obj4;
export const useInterpolateConfig = function useInterpolateConfig(inputRange, outputRange) {
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let RGB = arguments[2];
    }
    if (arguments.length > 3) {
      if (undefined !== arguments[3]) {
        let obj = arguments[3];
      }
      obj = { inputRange, outputRange, colorSpace: RGB };
      const obj4 = require(1626) /* getSensorContainer */;
      obj.cache = obj4.makeMutable(null);
      obj.options = obj;
      return require(1734) /* useSharedValue */.useSharedValue(obj);
    }
    obj = {};
  }
  RGB = obj4.RGB;
};
