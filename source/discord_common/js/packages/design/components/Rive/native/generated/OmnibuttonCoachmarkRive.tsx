// Module ID: 3931
// Function ID: 32430
// Name: OmnibuttonCoachmarkRive
// Dependencies: []

// Module 3931 (OmnibuttonCoachmarkRive)
let closure_3 = [true, true, true, true, true, true];
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_7 = { Omnibutton: { reducedMotion: "boolean" } };
let closure_8 = { Omnibutton: [1358955054] };
let closure_9 = {
  Omnibutton: function OmnibuttonBindings(arg0) {
    let instance;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function OmnibuttonCoachmarkRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Omnibutton";
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
const forwardRefResult = importAllResult.forwardRef(function OmnibuttonCoachmarkRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 {...obj} />;
  return jsx(ref(dependencyMap[5]).RiveErrorBoundary, obj);
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/OmnibuttonCoachmarkRive.tsx");

export const OmnibuttonCoachmarkRive = forwardRefResult;
