// Module ID: 3919
// Function ID: 32378
// Name: CheckpointIntroRive
// Dependencies: []

// Module 3919 (CheckpointIntroRive)
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_7 = { Checkpoint Intro Desktop: { -1497314773: true, -397146015: true, 294857406: true, 24627571: true }, Globe: {}, Globe Single Line: {}, Start Button: { -1497314773: true, -397146015: true, 294857406: true, 24627571: true } };
let closure_8 = { Checkpoint Intro Desktop: [], Globe: [], Globe Single Line: [], Start Button: [] };
let closure_9 = {
  Checkpoint Intro Desktop: function CheckpointIntroDesktopBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let Subtitle;
    if (null != dataBinding) {
      Subtitle = dataBinding.Subtitle;
    }
    let Subtitle1;
    if (null != onDataBindingChange) {
      Subtitle1 = onDataBindingChange.Subtitle;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("Subtitle", instance, Subtitle, Subtitle1, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.StartButton Pressed;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.StartButton Pressed;
    }
    const booleanBinding1 = arg1(dependencyMap[3]).useBooleanBinding("StartButton Pressed", instance, prop, prop1, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let StartButton;
    if (null != dataBinding) {
      StartButton = dataBinding.StartButton;
    }
    let StartButton1;
    if (null != onDataBindingChange) {
      StartButton1 = onDataBindingChange.StartButton;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("StartButton", instance, StartButton, StartButton1, playIfNeeded);
    return null;
  },
  Start Button: function StartButtonBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let Subtitle;
    if (null != dataBinding) {
      Subtitle = dataBinding.Subtitle;
    }
    let Subtitle1;
    if (null != onDataBindingChange) {
      Subtitle1 = onDataBindingChange.Subtitle;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("Subtitle", instance, Subtitle, Subtitle1, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.StartButton Pressed;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.StartButton Pressed;
    }
    const booleanBinding1 = arg1(dependencyMap[3]).useBooleanBinding("StartButton Pressed", instance, prop, prop1, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let StartButton;
    if (null != dataBinding) {
      StartButton = dataBinding.StartButton;
    }
    let StartButton1;
    if (null != onDataBindingChange) {
      StartButton1 = onDataBindingChange.StartButton;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("StartButton", instance, StartButton, StartButton1, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function CheckpointIntroRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Checkpoint Intro Desktop";
  if (undefined !== artboard) {
    str = artboard;
  }
  ref = str;
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "default";
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
const forwardRefResult = importAllResult.forwardRef(function CheckpointIntroRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 {...obj} />;
  return jsx(ref(dependencyMap[5]).RiveErrorBoundary, obj);
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointIntroRive.tsx");

export const CheckpointIntroRive = forwardRefResult;
