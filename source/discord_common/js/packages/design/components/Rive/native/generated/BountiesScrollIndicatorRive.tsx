// Module ID: 3911
// Function ID: 32339
// Name: BountiesScrollIndicatorRive
// Dependencies: []

// Module 3911 (BountiesScrollIndicatorRive)
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_7 = { Bounties Scroll Indicator: { -9223372036854775808: true, 0: true, 0: true } };
let closure_8 = { Bounties Scroll Indicator: [] };
let closure_9 = {
  Bounties Scroll Indicator: function BountiesScrollIndicatorBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let startAnimation;
    if (null != dataBinding) {
      startAnimation = dataBinding.startAnimation;
    }
    let startAnimation1;
    if (null != onDataBindingChange) {
      startAnimation1 = onDataBindingChange.startAnimation;
    }
    const triggerBinding = arg1(dependencyMap[3]).useTriggerBinding("startAnimation", instance, startAnimation, startAnimation1, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let looping;
    if (null != dataBinding) {
      looping = dataBinding.looping;
    }
    let looping1;
    if (null != onDataBindingChange) {
      looping1 = onDataBindingChange.looping;
    }
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("looping", instance, looping, looping1, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let color;
    if (null != dataBinding) {
      color = dataBinding.color;
    }
    let color1;
    if (null != onDataBindingChange) {
      color1 = onDataBindingChange.color;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("color", instance, color, color1, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function BountiesScrollIndicatorRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Bounties Scroll Indicator";
  if (undefined !== artboard) {
    str = artboard;
  }
  ref = str;
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Instance";
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = defaultViewModelInstance.dataBinding;
  const importDefault = dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const dependencyMap = onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const callback = importAllResult.useCallback((arg0) => {
    let tmp2 = null;
    if (null != closure_9[closure_0]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["dataBinding"] = dataBinding;
      obj["onDataBindingChange"] = onDataBindingChange;
      tmp2 = callback(tmp, obj);
    }
    return tmp2;
  }, items);
  const obj = { ref, src: importDefault(dependencyMap[4]), artboard: str, artboardProperties: closure_7, artboardViewModelInstances: closure_8, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback };
  const merged = Object.assign(callback(defaultViewModelInstance, closure_3));
  return jsx(ref(dependencyMap[3]).BaseRive, obj);
});
const forwardRefResult = importAllResult.forwardRef(function BountiesScrollIndicatorRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 {...obj} />;
  return jsx(ref(dependencyMap[5]).RiveErrorBoundary, obj);
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollIndicatorRive.tsx");

export const BountiesScrollIndicatorRive = forwardRefResult;
