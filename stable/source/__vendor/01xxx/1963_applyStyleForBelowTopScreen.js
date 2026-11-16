// Module ID: 1963
// Function ID: 1964
// Name: applyStyleForBelowTopScreen
// Dependencies: [1835]
// Exports: applyStyle, applyStyleForBelowTopScreen

// Module 1963 (applyStyleForBelowTopScreen)
import _mod1835 from "module_1835" /* 1835 */;

let tmp10;
let tmp11;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
let items = [{ code: "(function createViewDescriptor_Pnpm_styleUpdaterTs1(screenId){return{shadowNodeWrapper:screenId};})" }];
[tmp2] = items;
function createViewDescriptor(shadowNodeWrapper) {
  return { shadowNodeWrapper };
}
createViewDescriptor.__workletHash = 10842686220160;
createViewDescriptor.__initData = tmp2;
const items1 = [{ code: "(function applyStyleForTopScreen_Pnpm_styleUpdaterTs2(screenTransitionConfig,event){let[createViewDescriptor,updateProps]=this.__closure;const{screenDimensions:screenDimensions,topScreenId:topScreenId,screenTransition:screenTransition}=screenTransitionConfig;const{topScreenStyle:computeTopScreenStyle}=screenTransition;const topScreenStyle=computeTopScreenStyle(event,screenDimensions);const topScreenDescriptor={value:[createViewDescriptor(topScreenId)]};updateProps(topScreenDescriptor,topScreenStyle,undefined);})" }, createViewDescriptor, _mod1835.updateProps];
[tmp3, tmp4, tmp5] = items1;
function applyStyleForTopScreen(topScreenId, arg1) {
  let items;
  topScreenId = topScreenId.topScreenId;
  const obj = { value: items };
  items = [];
  const topScreenStyleResult = topScreenId.screenTransition.topScreenStyle(arg1, topScreenId.screenDimensions);
  items[0] = _undefined(topScreenId);
  _undefined2(obj, topScreenStyleResult, undefined);
}
const items2 = [tmp4, tmp5];
applyStyleForTopScreen.__closure = items2;
applyStyleForTopScreen.__workletHash = 13369011521969;
applyStyleForTopScreen.__initData = tmp3;
const items3 = [{ code: "(function applyStyleForBelowTopScreen_Pnpm_styleUpdaterTs3(screenTransitionConfig,event){let[createViewDescriptor,updateProps]=this.__closure;const{screenDimensions:screenDimensions,belowTopScreenId:belowTopScreenId,screenTransition:screenTransition}=screenTransitionConfig;const{belowTopScreenStyle:computeBelowTopScreenStyle}=screenTransition;const belowTopScreenStyle=computeBelowTopScreenStyle(event,screenDimensions);const belowTopScreenDescriptor={value:[createViewDescriptor(belowTopScreenId)]};updateProps(belowTopScreenDescriptor,belowTopScreenStyle,undefined);})" }, createViewDescriptor, _mod1835.updateProps];
[tmp6, tmp7, tmp8] = items3;
function applyStyleForBelowTopScreen(belowTopScreenId, arg1) {
  let items;
  belowTopScreenId = belowTopScreenId.belowTopScreenId;
  const obj = { value: items };
  items = [];
  const belowTopScreenStyleResult = belowTopScreenId.screenTransition.belowTopScreenStyle(arg1, belowTopScreenId.screenDimensions);
  items[0] = _undefined(belowTopScreenId);
  _undefined2(obj, belowTopScreenStyleResult, undefined);
}
const items4 = [tmp7, tmp8];
applyStyleForBelowTopScreen.__closure = items4;
applyStyleForBelowTopScreen.__workletHash = 15881372991843;
applyStyleForBelowTopScreen.__initData = tmp6;
const items5 = [{ code: "(function applyStyle_Pnpm_styleUpdaterTs4(screenTransitionConfig,event){let[applyStyleForTopScreen,applyStyleForBelowTopScreen]=this.__closure;applyStyleForTopScreen(screenTransitionConfig,event);applyStyleForBelowTopScreen(screenTransitionConfig,event);})" }, applyStyleForTopScreen, applyStyleForBelowTopScreen];
let c0;
let c1;
[tmp9, tmp10, tmp11] = items5;
function applyStyle(arg0, arg1) {
  _undefined(arg0, arg1);
  _undefined2(arg0, arg1);
}
const items6 = [tmp10, tmp11];
applyStyle.__closure = items6;
applyStyle.__workletHash = 6907100812805;
applyStyle.__initData = tmp9;

export { applyStyleForBelowTopScreen };
export { applyStyle };
