// Module ID: 1767
// Function ID: 19693
// Name: createViewDescriptorPaper
// Dependencies: []

// Module 1767 (createViewDescriptorPaper)
const _module = require(dependencyMap[0]);
let closure_2 = { code: "function createViewDescriptorPaper_Pnpm_styleUpdaterTs1(screenId){return{tag:screenId,name:'RCTView'};}" };
let tmp3 = () => {
  function createViewDescriptorPaper(tag) {
    return { tag, name: "RCTView" };
  }
  createViewDescriptorPaper.__closure = {};
  createViewDescriptorPaper.__workletHash = 10248318774025;
  createViewDescriptorPaper.__initData = closure_2;
  return createViewDescriptorPaper;
}();
let closure_3 = { code: "function createViewDescriptorFabric_Pnpm_styleUpdaterTs2(screenId){return{shadowNodeWrapper:screenId};}" };
if (isFabricResult) {
  tmp3 = () => {
    function createViewDescriptorFabric(shadowNodeWrapper) {
      return { shadowNodeWrapper };
    }
    createViewDescriptorFabric.__closure = {};
    createViewDescriptorFabric.__workletHash = 2882608262143;
    createViewDescriptorFabric.__initData = closure_3;
    return createViewDescriptorFabric;
  }();
}
let closure_5 = { code: "function applyStyleForTopScreen_Pnpm_styleUpdaterTs3(screenTransitionConfig,event){const{createViewDescriptor,updateProps}=this.__closure;const{screenDimensions:screenDimensions,topScreenId:topScreenId,screenTransition:screenTransition}=screenTransitionConfig;const{topScreenStyle:computeTopScreenStyle}=screenTransition;const topScreenStyle=computeTopScreenStyle(event,screenDimensions);const topScreenDescriptor={value:[createViewDescriptor(topScreenId)]};updateProps(topScreenDescriptor,topScreenStyle,undefined);}" };
let closure_6 = () => {
  function applyStyleForTopScreen(screenTransition) {
    const obj = {};
    const items = [callback2(screenTransition.topScreenId)];
    obj.value = items;
    const topScreenStyleResult = screenTransition.screenTransition.topScreenStyle(arg1, screenTransition.screenDimensions);
    callback(closure_1[1]).updateProps(obj, topScreenStyleResult, undefined);
  }
  applyStyleForTopScreen.__closure = { createViewDescriptor: tmp3, updateProps: require(dependencyMap[1]).updateProps };
  applyStyleForTopScreen.__workletHash = 541570832073;
  applyStyleForTopScreen.__initData = closure_5;
  return applyStyleForTopScreen;
}();
let closure_7 = { code: "function applyStyleForBelowTopScreen_Pnpm_styleUpdaterTs4(screenTransitionConfig,event){const{createViewDescriptor,updateProps}=this.__closure;const{screenDimensions:screenDimensions,belowTopScreenId:belowTopScreenId,screenTransition:screenTransition}=screenTransitionConfig;const{belowTopScreenStyle:computeBelowTopScreenStyle}=screenTransition;const belowTopScreenStyle=computeBelowTopScreenStyle(event,screenDimensions);const belowTopScreenDescriptor={value:[createViewDescriptor(belowTopScreenId)]};updateProps(belowTopScreenDescriptor,belowTopScreenStyle,undefined);}" };
const tmp4 = () => {
  function applyStyleForBelowTopScreen(screenTransition, arg1) {
    const obj = {};
    const items = [callback2(screenTransition.belowTopScreenId)];
    obj.value = items;
    const belowTopScreenStyleResult = screenTransition.screenTransition.belowTopScreenStyle(arg1, screenTransition.screenDimensions);
    callback(closure_1[1]).updateProps(obj, belowTopScreenStyleResult, undefined);
  }
  applyStyleForBelowTopScreen.__closure = { createViewDescriptor: tmp3, updateProps: require(dependencyMap[1]).updateProps };
  applyStyleForBelowTopScreen.__workletHash = 1349027100765;
  applyStyleForBelowTopScreen.__initData = closure_7;
  return applyStyleForBelowTopScreen;
}();
let closure_9 = { code: "function applyStyle_Pnpm_styleUpdaterTs5(screenTransitionConfig,event){const{applyStyleForTopScreen,applyStyleForBelowTopScreen}=this.__closure;applyStyleForTopScreen(screenTransitionConfig,event);applyStyleForBelowTopScreen(screenTransitionConfig,event);}" };

export const applyStyleForBelowTopScreen = tmp4;
export const applyStyle = () => {
  function applyStyle(arg0, value) {
    callback(arg0, value);
    callback2(arg0, value);
  }
  applyStyle.__closure = { applyStyleForTopScreen: closure_6, applyStyleForBelowTopScreen: tmp4 };
  applyStyle.__workletHash = 7852442865245;
  applyStyle.__initData = closure_9;
  return applyStyle;
}();
