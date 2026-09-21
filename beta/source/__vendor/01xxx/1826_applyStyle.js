// Module ID: 1826
// Function ID: 1827
// Name: applyStyle
// Dependencies: [1644, 1741]
// Exports: applyStyle

// Module 1826 (applyStyle)
import _mod1741 from "module_1741" /* 1741 */;
import module_1644 from "module_1644" /* 1644 */;

function createViewDescriptorPaper(topScreenId) {
  return { tag: topScreenId, name: "RCTView" };
}
createViewDescriptorPaper.__closure = {};
createViewDescriptorPaper.__workletHash = 10248318774025;
createViewDescriptorPaper.__initData = { code: "function createViewDescriptorPaper_Pnpm_styleUpdaterTs1(screenId){return{tag:screenId,name:'RCTView'};}" };
function createViewDescriptorFabric(shadowNodeWrapper) {
  return { shadowNodeWrapper };
}
createViewDescriptorFabric.__closure = {};
createViewDescriptorFabric.__workletHash = 2882608262143;
createViewDescriptorFabric.__initData = { code: "function createViewDescriptorFabric_Pnpm_styleUpdaterTs2(screenId){return{shadowNodeWrapper:screenId};}" };
if (module_1644.isFabric()) {
  createViewDescriptorPaper = createViewDescriptorFabric;
}
function applyStyleForTopScreen(screenTransition, arg1) {
  const obj = { value: null };
  const items = [createViewDescriptorPaper(screenTransition.topScreenId)];
  obj.value = items;
  const topScreenStyleResult = screenTransition.screenTransition.topScreenStyle(arg1, screenTransition.screenDimensions);
  _mod1741.updateProps(obj, topScreenStyleResult, undefined);
}
applyStyleForTopScreen.__closure = { createViewDescriptor: createViewDescriptorPaper, updateProps: _mod1741.updateProps };
applyStyleForTopScreen.__workletHash = 541570832073;
applyStyleForTopScreen.__initData = { code: "function applyStyleForTopScreen_Pnpm_styleUpdaterTs3(screenTransitionConfig,event){const{createViewDescriptor,updateProps}=this.__closure;const{screenDimensions:screenDimensions,topScreenId:topScreenId,screenTransition:screenTransition}=screenTransitionConfig;const{topScreenStyle:computeTopScreenStyle}=screenTransition;const topScreenStyle=computeTopScreenStyle(event,screenDimensions);const topScreenDescriptor={value:[createViewDescriptor(topScreenId)]};updateProps(topScreenDescriptor,topScreenStyle,undefined);}" };
function applyStyleForBelowTopScreen(screenTransition, arg1) {
  const obj = { value: null };
  const items = [createViewDescriptorPaper(screenTransition.belowTopScreenId)];
  obj.value = items;
  const belowTopScreenStyleResult = screenTransition.screenTransition.belowTopScreenStyle(arg1, screenTransition.screenDimensions);
  _mod1741.updateProps(obj, belowTopScreenStyleResult, undefined);
}
let obj = { createViewDescriptor: createViewDescriptorPaper, updateProps: _mod1741.updateProps };
applyStyleForBelowTopScreen.__closure = { createViewDescriptor: createViewDescriptorPaper, updateProps: _mod1741.updateProps };
applyStyleForBelowTopScreen.__workletHash = 1349027100765;
applyStyleForBelowTopScreen.__initData = { code: "function applyStyleForBelowTopScreen_Pnpm_styleUpdaterTs4(screenTransitionConfig,event){const{createViewDescriptor,updateProps}=this.__closure;const{screenDimensions:screenDimensions,belowTopScreenId:belowTopScreenId,screenTransition:screenTransition}=screenTransitionConfig;const{belowTopScreenStyle:computeBelowTopScreenStyle}=screenTransition;const belowTopScreenStyle=computeBelowTopScreenStyle(event,screenDimensions);const belowTopScreenDescriptor={value:[createViewDescriptor(belowTopScreenId)]};updateProps(belowTopScreenDescriptor,belowTopScreenStyle,undefined);}" };
function applyStyle(screenTransition, value) {
  if (typeof applyStyleForTopScreen === "function") {
    const obj = { value: null };
    const items = [createViewDescriptorPaper(screenTransition.topScreenId)];
    obj.value = items;
    const tmp4 = createViewDescriptorPaper;
    const tmp5 = require;
    const topScreenStyleResult = screenTransition.screenTransition.topScreenStyle(value, screenTransition.screenDimensions);
    _mod1741.updateProps(obj, topScreenStyleResult, undefined);
    if (typeof applyStyleForBelowTopScreen === "function") {
      const obj3 = { value: null };
      const items1 = [tmp4(screenTransition.belowTopScreenId)];
      obj3.value = items1;
      const belowTopScreenStyleResult = screenTransition.screenTransition.belowTopScreenStyle(value, screenTransition.screenDimensions);
      tmp5(1741).updateProps(obj3, belowTopScreenStyleResult, undefined);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
applyStyle.__closure = { applyStyleForTopScreen, applyStyleForBelowTopScreen };
applyStyle.__workletHash = 7852442865245;
applyStyle.__initData = { code: "function applyStyle_Pnpm_styleUpdaterTs5(screenTransitionConfig,event){const{applyStyleForTopScreen,applyStyleForBelowTopScreen}=this.__closure;applyStyleForTopScreen(screenTransitionConfig,event);applyStyleForBelowTopScreen(screenTransitionConfig,event);}" };

export { applyStyleForBelowTopScreen };
export { applyStyle };
