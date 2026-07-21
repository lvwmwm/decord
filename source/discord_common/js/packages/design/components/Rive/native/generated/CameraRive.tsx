// Module ID: 3913
// Function ID: 32343
// Name: CameraRive
// Dependencies: []

// Module 3913 (CameraRive)
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_7 = { Icon Camera: { "Bool(false)": "<string:2066808836>", "Bool(false)": "<string:3779571220>", "Bool(false)": "<string:1094716538>" }, Animation Main: {} };
let closure_8 = { Icon Camera: ["<string:307167234>", "<string:1318518786>"], Animation Main: [] };
let closure_9 = {
  Icon Camera: function IconCameraBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let fill;
    if (null != dataBinding) {
      fill = dataBinding.fill;
    }
    let fill1;
    if (null != onDataBindingChange) {
      fill1 = onDataBindingChange.fill;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("fill", instance, fill, fill1, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let on;
    if (null != dataBinding) {
      on = dataBinding.on;
    }
    let on1;
    if (null != onDataBindingChange) {
      on1 = onDataBindingChange.on;
    }
    const booleanBinding1 = arg1(dependencyMap[3]).useBooleanBinding("on", instance, on, on1, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function CameraRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Icon Camera";
  if (undefined !== artboard) {
    str = artboard;
  }
  ref = str;
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "CamOff";
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
const forwardRefResult = importAllResult.forwardRef(function CameraRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 {...obj} />;
  return jsx(ref(dependencyMap[5]).RiveErrorBoundary, obj);
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CameraRive.tsx");

export const CameraRive = forwardRefResult;
