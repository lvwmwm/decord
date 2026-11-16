// Module ID: 1688
// Function ID: 1689
// Name: shadows
// Dependencies: [109, 1674, 1679]
// Exports: processBoxShadow

// Module 1688 (shadows)
import _mod1674 from "module_1674" /* 1674 */;
import colors from "colors" /* 1679 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

let _undefined;

let notArrayObject;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let closure_0 = ["color", "offsetX", "offsetY", "spreadDistance", "blurRadius"];
const items = [{ code: "(function notArrayObject_Pnpm_shadowsTs1(value){return\"Box shadow value must be a string or an array of shadow objects (e.g. [{ offsetX, offsetY, color }]). Received: \"+JSON.stringify(value)+\".\";})" }];
[tmp2] = items;
let obj = { notArrayObject };
notArrayObject = function notArrayObject(arr) {
  return "Box shadow value must be a string or an array of shadow objects (e.g. [{ offsetX, offsetY, color }]). Received: " + JSON.stringify(arr) + ".";
};
notArrayObject.__workletHash = 4255840267491;
notArrayObject.__initData = tmp2;
const items1 = [{ code: "(function pnpm_shadowsTs2(value,context){let[parseBoxShadowString,ERROR_MESSAGES,processColor]=this.__closure;if(value==='none'){return[];}const parsedShadow=typeof value==='string'?parseBoxShadowString(value):value;if(!Array.isArray(parsedShadow)){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.notArrayObject(parsedShadow));}return parsedShadow.map(function(shadow){const{color='#000',offsetX=0,offsetY=0,spreadDistance=0,blurRadius=0,...rest}=shadow;return{...rest,blurRadius:parseFloat(blurRadius),color:processColor(color,context),offsetX:parseFloat(offsetX),offsetY:parseFloat(offsetY),spreadDistance:parseFloat(spreadDistance)};});})" }, _mod1674.parseBoxShadowString, obj, colors.processColor];
let c0;
let c1;
let c2;
[tmp3, tmp4, tmp5, tmp6] = items1;
function pnpm_shadowsTs2(arr, arg1) {
  _undefined = arg1;
  if ("none" === arr) {
    return [];
  } else {
    if (typeof arr === "string") {
      arr = _undefined(arr);
    }
    const _Array = Array;
    if (Array.isArray(arr)) {
      return arr.map((color) => {
        color = color.color;
        let str = "#000";
        if (undefined !== color) {
          str = color;
        }
        const offsetX = color.offsetX;
        let num = 0;
        if (undefined !== offsetX) {
          num = offsetX;
        }
        const offsetY = color.offsetY;
        let num2 = 0;
        if (undefined !== offsetY) {
          num2 = offsetY;
        }
        const spreadDistance = color.spreadDistance;
        let num3 = 0;
        if (undefined !== spreadDistance) {
          num3 = spreadDistance;
        }
        const blurRadius = color.blurRadius;
        let num4 = 0;
        if (undefined !== blurRadius) {
          num4 = blurRadius;
        }
        const obj = { blurRadius: parseFloat(num4), color: c2(str, closure_0), offsetX: parseFloat(num), offsetY: parseFloat(num2), spreadDistance: parseFloat(num3) };
        const merged = Object.assign(_objectWithoutProperties(color, closure_0));
        return obj;
      });
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      let str = "[Reanimated] ";
      const self = this;
      const self2 = this;
      const error = new Error("[Reanimated] " + _undefined2.notArrayObject(arr));
      throw error;
    }
  }
}
const items2 = [tmp4, tmp5, tmp6];
pnpm_shadowsTs2.__closure = items2;
pnpm_shadowsTs2.__workletHash = 14199958443518;
pnpm_shadowsTs2.__initData = tmp3;

export const processBoxShadow = pnpm_shadowsTs2;
